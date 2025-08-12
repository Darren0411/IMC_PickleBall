
import twilio from 'twilio';

// Create client using environment variables
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// export async function sendOtpViaVerify(phone) {
//   // Phone should be in E.164 format: +91XXXXXXXXXX
//   console.log('Account SID:', process.env.TWILIO_ACCOUNT_SID);
// console.log('Auth Token:', process.env.TWILIO_AUTH_TOKEN);
// console.log('Verify Service SID:', process.env.TWILIO_VERIFY_SERVICE_SID);

//   const verification = await client.verify.v2
//     .services(process.env.TWILIO_VERIFY_SERVICE_SID)
//     .verifications.create({
//       to: phone,
//       channel: 'sms'
//     });
//   return verification;
// }

export function getTwilioClient() {
    return twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  }