## Maxcoin app: 

This application has no front end involved to it. It uses fetch api to fetch the data from a service. The service provides daily high of bitcoin value in the past 5 years.
The databases namely, MongoDB, Redis & MySQL were used to store the data returned as a response from the service. The main purpose of this application was to demonstrate the use of different databases available to persist the data depending on the needs.

## Shopper app:

This app stores the user data like current session of a user where the user is logged in and has items added to the basket for checkout, and User's ID and password to MongoDB, Redis and MySQL. The main purpose of this application was to demonstrate the use of different databases available to persist the data depending on the needs.

Redis & RedisIO was used to: 
* Implement session management using Redis so that a user to can have access to the items added into basket at all times

MongoDB & Mongoose was used to:
* Store User id and encrypted password using bcrypt.js
* Store items

MySQL & Sequelize was used to:
* First transition the basket that is currently stored into an order, and then stored all items inside this order in a table in MySQL called Order Item. Then the contents of the basket are deleted and everything runs in one transaction.
