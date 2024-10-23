import express from 'express';
import dotenv from 'dotenv';   // Import dotenv
import { ImapFlow } from 'imapflow';

dotenv.config();  // Load .env file and make variables available

const app = express();
const PORT = process.env.PORT || 5000;  // Access PORT from .env

// Middleware to parse JSON bodies
app.use(express.json());

// Route to authenticate and get email count
app.post('/api/login', async (req, res) => {
    // Use credentials from the .env file
    const email = process.env.GMAIL_USER;
    const password = process.env.GMAIL_PASS;

    console.log("Logging in with email:", email);

    // Create a new IMAP client using the credentials from the .env file
    const client = new ImapFlow({
        host: 'imap.gmail.com',
        port: 993,
        secure: true,
        auth: {
            user: email,        // Use the email from .env
            pass: password,     // Use the app password from .env
        },
        tls: {
            rejectUnauthorized: false, // For testing; should be true in production
        },
    });

    try {
        await client.connect();  // Attempt to connect to IMAP
        console.log("Connected to the IMAP server successfully.");

        // Open the INBOX folder
        const mailbox = await client.mailboxOpen('INBOX');
        const messageCount = mailbox.exists;  // Total number of emails
        console.log(`Total emails in INBOX: ${messageCount}`);

        await client.logout();  // Log out from the IMAP server
        res.status(200).json({ email, emailCount: messageCount });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
