let express = require('express')
let bodyParser = require('body-parser')
const { extend } = require('lodash')
let app = express()
require('dotenv').config({path: __dirname + '/.env'});

let mongoose = require('mongoose')

let http = require('http').Server(app)
let io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.Promise = Promise

let Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/messages', (req, res) =>{
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.get('/messages/:user', (req, res) => {
    let user = req.params.user

    Message.find({name: user}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', async (req, res) =>{
    try{
        let message = new Message(req.body)
        var savedMessage = await message.save()
        console.log('saved')
        
        let censored = await Message.findOne({message: 'badword'})
        if(censored)
            await Message.deleteMany({_id: censored.id})
        else
            io.emit('message', req.body)

        res.sendStatus(200)
    }
    catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
    finally {
        console.log('message post called')
    }
})

io.on('connection', (socket) =>{
    console.log('a user connected')
})

mongoose.connect(process.env.DB, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true}, err => {
    console.log('DB error: ', err);
})


let server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port)
})



