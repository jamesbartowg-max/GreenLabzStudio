// Audit-API für GreenLabz
// Dieses Skript ist der Controller, der das Python-Audit-Tool mit dem React-Frontend verbindet.
// Wir nutzen einen einfachen POST-Endpunkt, um die URL zu empfangen.

import { exec } from 'child_process';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  // Pfad zum Python-Audit-Tool
  const scriptPath = path.resolve(process.cwd(), '../lead-gen-tool/main.py');

  exec(`python ${scriptPath} --url ${url}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ message: 'Audit failed', error: stderr });
    }
    
    // Rückgabe des Audit-Ergebnisses als JSON
    res.status(200).json({
      auditResult: stdout,
      message: 'Audit erfolgreich abgeschlossen'
    });
  });
}
