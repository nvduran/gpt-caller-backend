import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createCall() {
  const call = await client.calls.create({
    from: "+18888799239",
    to: "+15126567738",
    url: "http://demo.twilio.com/docs/voice.xml",
  });

  console.log(call.sid);
}

createCall();
