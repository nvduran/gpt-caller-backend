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
    twiml: `
      <Response>
        <Start>
          <Stream url="ws://localhost:8080"/>
        </Start>
        <Say>Hello, this call is being transcribed.</Say>
        <Pause length="60"/>
        <Stop>
          <Stream />
        </Stop>
      </Response>
    `,
  });

  console.log(call.sid);
}

createCall();
