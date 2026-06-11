from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

# WICHTIG: Passe diesen Pfad zu deinem GAPI-Script an
GAPI = r"python C:\Users\James\AppData\Local\hermes\skills\productivity\google-workspace\scripts\google_api.py"

@app.route('/book', methods=['POST'])
def book():
    d = request.json
    try:
        # 1. Termin im Google Kalender erstellen
        cmd = f'{GAPI} calendar create --summary "Termin: {d["name"]}" --start {d["start"]} --end {d["end"]} --attendees "{d["email"]}"'
        subprocess.run(cmd, shell=True, check=True)

        # 2. Bestätigungsmail senden
        mail_cmd = f'{GAPI} gmail send --to "{d["email"]}" --subject "Terminbestätigung" --body "Hallo {d["name"]}, dein Termin am {d["start"]} wurde erfolgreich gebucht. Wir freuen uns auf dich!"'
        subprocess.run(mail_cmd, shell=True, check=True)

        return jsonify({"status": "success"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    # Starte den Server auf Port 5000
    app.run(port=5000)
