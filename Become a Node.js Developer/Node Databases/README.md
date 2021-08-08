## Maxcoin app: 

This application has no front end involved to it. It uses fetch api to fetch the data from a service. The service provides daily high of bitcoin value in the past 5 years.
The databases namely, MongoDB, Redis & MySQL were used to store the data returned as a response from the service. The main purpose of thid 

## Shopper app:

explain the functionalities of this app
example explaing what different pages do

then add the technologies used to put more emphasis on your soft skills

uses bcrypt.js to encrypt a user's password and stores the data to the cloud(MongoDB), redis and MySQL

implemented session management using redis so that a user to can have access to the items added into basket at all times

mongodb & mongoose was used to:
to store user id and encrypted password
to store items

mysql & sequelize was used to:
first transition the basket that is currently stored into an order, and then stored all items inside this order in a table order item. Then the contents of the basket are deleted  and everything going on here should run in one transaction.
