require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 

const message = 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/';

client.messages 
      .create({ 
         body: message, 
         from: process.env.TWILIO_PHONE_NUMBER,       
         to: process.env.RECIPIENT_PHONE_NUMBER 
       }).then(msg => console.log(msg.sid))