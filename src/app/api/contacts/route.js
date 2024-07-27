// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { fname, lname, email, subject, message } = await request.json();

  if (!fname || !lname || !email || !subject  || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Example using Gmail, configure as needed
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // The email you want to receive messages at
    subject: `Contact Form Submission from ${fname}`,
    text: `Message: ${message}\n\nFirst Name: ${fname}\nLast Name: ${lname}`, // Plain text body
    // html: `<p>Subject: ${subject}<p>First Name: ${fname}</p><p>Last Name: ${lname}</p></p><p>Message: ${message}</p>` // HTML body
    html: `
    <div style="border: 1px solid #ddd; padding: 20px; font-family: Arial, sans-serif;">
        <h2>Contact Form Submission</h2>
        
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Message:</strong></p>
        <div style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9;">
            ${message}
        </div>
        
    </div>
` 
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: 'Email sent' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
