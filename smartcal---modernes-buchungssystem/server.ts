import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API Route for Booking
  app.post('/api/book', async (req, res) => {
    try {
      const { name, email, date, time, topic, meetingType, notes } = req.body;

      if (!name || !email || !date || !time || !topic || !meetingType) {
        return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
      }

      // Log to console for demo purposes without valid SMTP
      console.log('--- Neue Terminbuchung ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Datum: ${date}`);
      console.log(`Uhrzeit: ${time}`);
      console.log(`Thema: ${topic}`);
      console.log(`Gesprächsart: ${meetingType}`);
      if (notes) console.log(`Notizen: ${notes}`);
      console.log('--------------------------');

      // Attempt to send email if SMTP is configured
      if (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'smtp.example.com') {
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || '"SmartCal" <noreply@smartcal.local>',
          to: email, // Send confirmation to the user
          subject: 'Terminbestätigung - Ihre Buchung war erfolgreich',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h2 style="color: #2563eb;">Ihre Terminbestätigung</h2>
              <p>Hallo ${name},</p>
              <p>vielen Dank für Ihre Terminbuchung. Hiermit bestätigen wir Ihren Termin:</p>
              <ul style="background: #f1f5f9; padding: 20px; border-radius: 8px; list-style: none;">
                <li><strong>Datum:</strong> ${date}</li>
                <li><strong>Uhrzeit:</strong> ${time} Uhr</li>
                <li><strong>Thema:</strong> ${topic}</li>
                <li><strong>Ort/Art:</strong> ${meetingType}</li>
              </ul>
              ${notes ? `<p><strong>Ihr Anliegen:</strong><br/>${notes}</p>` : ''}
              <p>Wir freuen uns auf das Gespräch!</p>
              <p>Viele Grüße,<br/>Ihr Team</p>
            </div>
          `,
        });
      } else {
        console.log('Keine gültige SMTP-Konfiguration gefunden. E-Mail-Versand wird übersprungen.');
      }

      res.status(200).json({ success: true, message: 'Termin erfolgreich gebucht.' });
    } catch (error) {
      console.error('Fehler bei der Buchung:', error);
      res.status(500).json({ error: 'Ein interner Fehler ist aufgetreten.' });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
}

startServer();
