// Test email configuration
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...\n');
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'taxsenseweb@gmail.com',
      pass: 'jnxs zdam qawd iuxx',
    },
  });

  // Test 1: Verify connection
  console.log('1. Verifying SMTP connection...');
  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');
  } catch (error) {
    console.error('❌ SMTP connection failed:', error.message);
    return;
  }

  // Test 2: Send test email to both addresses
  console.log('2. Sending test email to both addresses...');
  try {
    const mailOptions = {
      from: '"Taxsense Test" <taxsenseweb@gmail.com>',
      to: 'taxsenselimited@gmail.com',
      subject: 'Test Email - Taxsense Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the contact form configuration.</p>
        <p><strong>Sender:</strong> taxsenseweb@gmail.com</p>
        <p><strong>Recipients:</strong></p>
        <ul>
          <li>taxsenselimited@gmail.com</li>
          <li>ahsantamim49@gmail.com</li>
        </ul>
        <p>If you receive this email, the configuration is working correctly!</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Test sent at: ${new Date().toLocaleString()}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    console.log('\n📧 Check both email addresses:');
    console.log('   - taxsenselimited@gmail.com');
    console.log('   - ahsantamim49@gmail.com');
    console.log('\n⚠️  Note: Check spam/junk folders if not in inbox');
  } catch (error) {
    console.error('❌ Failed to send test email:', error.message);
    console.error('Full error:', error);
  }
}

testEmail();

