import nodemailer from "nodemailer";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

// Rate limiting function
function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Remove old requests outside the window
  const recentRequests = userRequests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW,
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);
  return true;
}

// Spam detection function
function detectSpam(formData) {
  const {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
    honeypot,
    submissionTime,
  } = formData;

  // Check honeypot field (should be empty)
  if (honeypot && honeypot.trim() !== "") {
    return { isSpam: true, reason: "Honeypot field filled" };
  }

  // Check submission time (should take at least 3 seconds to fill form)
  const timeTaken = Date.now() - parseInt(submissionTime || Date.now());
  if (timeTaken < 3000) {
    return { isSpam: true, reason: "Form filled too quickly" };
  }

  // Check for suspicious patterns in message
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "prize",
    "click here",
    "buy now",
    "limited time",
  ];
  const messageText = (message || "").toLowerCase();
  const hasSpamKeywords = spamKeywords.some((keyword) =>
    messageText.includes(keyword),
  );

  if (hasSpamKeywords) {
    return { isSpam: true, reason: "Spam keywords detected" };
  }

  // Check for valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isSpam: true, reason: "Invalid email format" };
  }

  // Check message length (too short might be spam)
  if (message.length < 10) {
    return { isSpam: true, reason: "Message too short" };
  }

  return { isSpam: false };
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      honeypot,
      submissionTime,
    } = req.body;

    // Rate limiting check
    const clientIp =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(clientIp)) {
      return res
        .status(429)
        .json({ error: "Too many requests. Please try again later." });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Spam detection
    const spamCheck = detectSpam(req.body);
    if (spamCheck.isSpam) {
      console.log(`⚠️ Spam detected: ${spamCheck.reason}`);
      console.log("Form data:", {
        firstName,
        lastName,
        email,
        phone,
        subject,
        honeypot,
      });
      // Return success to avoid revealing spam detection to bots
      return res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    }

    console.log("✅ Spam check passed. Proceeding to send emails...");

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "taxsenseweb@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "jnxs zdam qawd iuxx",
      },
    });

    // Email template for the company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #700000 0%, #8b1f1f 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .info-row {
              display: flex;
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 1px solid #f0f0f0;
            }
            .info-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .info-label {
              font-weight: bold;
              color: #700000;
              min-width: 120px;
              margin-right: 15px;
            }
            .info-value {
              color: #333;
              flex: 1;
            }
            .message-box {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
              margin-top: 10px;
              border-left: 4px solid #700000;
            }
            .footer {
              background: #f5f5f5;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e0e0e0;
              border-top: none;
              color: #666;
              font-size: 14px;
            }
            .timestamp {
              color: #999;
              font-size: 13px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <p>Taxsense Limited</p>
          </div>
          
          <div class="content">
            <div class="info-row">
              <div class="info-label">Name:</div>
              <div class="info-value">${firstName} ${lastName}</div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Email:</div>
              <div class="info-value">
                <a href="mailto:${email}" style="color: #700000; text-decoration: none;">${email}</a>
              </div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Phone:</div>
              <div class="info-value">
                <a href="tel:${phone}" style="color: #700000; text-decoration: none;">${phone}</a>
              </div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Subject:</div>
              <div class="info-value"><strong>${subject}</strong></div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Message:</div>
              <div class="info-value">
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            
            <div class="timestamp">
              Received: ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Taxsense Limited</strong></p>
            <p>Professional Tax Consultancy Services</p>
            <p style="margin-top: 10px; font-size: 12px;">
              Level-8, House No: 5A, Road No: 2E, Block-J, Baridhara R/A, Dhaka-1212
            </p>
          </div>
        </body>
      </html>
    `;

    // Auto-reply email for the customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #700000 0%, #8b1f1f 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .content h2 {
              color: #700000;
              margin-top: 0;
            }
            .content p {
              margin: 15px 0;
            }
            .highlight-box {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #700000;
              margin: 20px 0;
            }
            .contact-info {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #f0f0f0;
            }
            .contact-info p {
              margin: 10px 0;
            }
            .footer {
              background: #f5f5f5;
              padding: 25px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e0e0e0;
              border-top: none;
              color: #666;
            }
            .social-links {
              margin-top: 15px;
            }
            .social-links a {
              color: #700000;
              text-decoration: none;
              margin: 0 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Thank You for Contacting Us!</h1>
          </div>
          
          <div class="content">
            <h2>Dear ${firstName} ${lastName},</h2>
            
            <p>Thank you for reaching out to <strong>Taxsense Limited</strong>. We have successfully received your inquiry regarding <strong>${subject}</strong>.</p>
            
            <div class="highlight-box">
              <p style="margin: 0;"><strong>📧 Your message:</strong></p>
              <p style="margin: 10px 0 0 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</p>
            </div>
            
            <p>Our team of tax and business consultancy experts will review your inquiry and get back to you within <strong>24 hours</strong> during business days.</p>
            
            <div class="contact-info">
              <p><strong>📞 Need immediate assistance?</strong></p>
              <p>Phone: <a href="tel:01958089808" style="color: #700000; text-decoration: none;">01958-089808</a></p>
              <p>Email: <a href="mailto:taxsenselimited@gmail.com" style="color: #700000; text-decoration: none;">taxsenselimited@gmail.com</a></p>
              <p>Website: <a href="https://www.taxsenselimited.com/" style="color: #700000; text-decoration: none;">https://www.taxsenselimited.com/</a></p>
              
              <p style="margin-top: 20px;"><strong>🏢 Office Address:</strong></p>
              <p>Level-8, House No: 5A, Road No: 2E, Block-J<br>Baridhara R/A, Dhaka-1212, Bangladesh</p>
              
              <p style="margin-top: 20px;"><strong>⏰ Business Hours:</strong></p>
              <p>Saturday - Thursday: 10:00 AM - 6:00 PM<br>Friday: Closed</p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Taxsense Limited</strong></p>
            <p>Professional Tax Consultancy & Business Services</p>
            <div class="social-links">
              <p style="margin-bottom: 10px;">Connect with us:</p>
              <a href="https://www.facebook.com/taxsensebd">Facebook</a> | 
              <a href="https://www.linkedin.com/company/taxsensebd">LinkedIn</a>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </body>
      </html>
    `;

    // Get email configuration from environment variables
    const emailFrom = process.env.EMAIL_FROM || "taxsenseweb@gmail.com";
    const emailTo = process.env.EMAIL_TO || "taxsenselimited@gmail.com";

    // Send email to company addresses
    const companyMailOptions = {
      from: `"Taxsense Contact Form" <${emailFrom}>`,
      to: emailTo,
      subject: `New Contact Form: ${subject} - ${firstName} ${lastName}`,
      html: companyEmailHtml,
      replyTo: email,
    };

    // Send auto-reply to customer
    const customerMailOptions = {
      from: `"Taxsense Limited" <${emailFrom}>`,
      to: email,
      subject: "Thank You for Contacting Taxsense Limited",
      html: customerEmailHtml,
    };

    // Send both emails
    console.log("Attempting to send emails...");
    console.log("Company email recipients:", companyMailOptions.to);
    console.log("Customer email recipient:", customerMailOptions.to);

    try {
      const [companyResult, customerResult] = await Promise.all([
        transporter.sendMail(companyMailOptions),
        transporter.sendMail(customerMailOptions),
      ]);

      console.log("Company email sent successfully:", companyResult.messageId);
      console.log(
        "Customer email sent successfully:",
        customerResult.messageId,
      );

      return res.status(200).json({
        success: true,
        message:
          "Message sent successfully! Check your email for confirmation.",
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      throw emailError;
    }
  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error details:", error.message);
    console.error("Error stack:", error.stack);
    return res.status(500).json({
      error: "Failed to send message. Please try again or contact us directly.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
