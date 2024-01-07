// import axios from "axios";

// const sendEmail = async () => {
//   const data = {
//     personalizations: [
//       {
//         to: [{ email: "mhndahmd820@gmail.com" }],
//         subject: "Subject of the email",
//       },
//     ],
//     from: { email: "your_email@example.com" },
//     content: [{ type: "text/plain", value: "Body of the email" }],
//   };

//   try {
//     const response = await axios.post(
//       "https://api.sendgrid.com/v3/mail/send",
//       data,
//       {
//         headers: {
//           Authorization: `Bearer YOUR_SENDGRID_API_KEY`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Email sent successfully:", response.data);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// sendEmail();
