import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailParams) {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Email templates
export function getContactConfirmationEmail(name: string, message: string) {
  return {
    subject: 'We received your message - American Pen House',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0A1F44 0%, #1e3a8a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">American Pen House</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Professional Book Publishing Services</p>
        </div>
        
        <div style="padding: 30px; background: #f5f5f5;">
          <h2 style="color: #0A1F44; margin-top: 0;">Thank you for reaching out, ${name}!</h2>
          
          <p style="color: #333; line-height: 1.6;">
            We have received your message and truly appreciate your interest in American Pen House. Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #B22234;">
            <h3 style="color: #B22234; margin-top: 0;">Your Message:</h3>
            <p style="color: #666; margin: 0;">${message}</p>
          </div>
          
          <h3 style="color: #0A1F44;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Our team will review your inquiry</li>
            <li>We'll send you a personalized response</li>
            <li>If needed, we'll schedule a consultation call</li>
          </ul>
          
          <p style="color: #666; margin-top: 20px;">
            If you have any urgent questions, feel free to call us at <strong>+1 (555) 123-4567</strong> or reply to this email.
          </p>
        </div>
        
        <div style="background: #0A1F44; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px;">
          <p style="margin: 0;">American Pen House | Professional Book Publishing Services</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">123 Literary Lane, New York, NY 10001</p>
        </div>
      </div>
    `,
    text: `Thank you for reaching out, ${name}!\n\nWe have received your message and truly appreciate your interest in American Pen House. Our team will review your inquiry and get back to you within 24 hours.\n\nYour Message:\n${message}\n\nWhat's Next?\n- Our team will review your inquiry\n- We'll send you a personalized response\n- If needed, we'll schedule a consultation call\n\nIf you have any urgent questions, feel free to call us at +1 (555) 123-4567 or reply to this email.`,
  };
}

export function getAdminNotificationEmail(name: string, email: string, message: string) {
  return {
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A1F44;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 100px;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px; color: #666;">
          <strong>Action:</strong> Please respond to this inquiry within 24 hours.
        </p>
      </div>
    `,
    text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
}
