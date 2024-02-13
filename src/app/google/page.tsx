// src/app/google/page.tsx
import { google } from "googleapis";
import keys from "../../../key.json";
import { Google } from "../../app/api/google";


export async function getServerSideProps() {
    try {
        // Tu lógica para obtener los datos desde el servidor
        const req = await fetch('http://localhost:3000/google');
        const res = await req.json();
    
        return {
            props: {
                sheetdata: res.data
            }
        };
    } catch (e) {
        console.error("Error fetching data:", e);
        return {
            props: {
                sheetdata: null  // O algún valor predeterminado en caso de error
            }
        };
    }
}


export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: '1pvm0I-iB01TH2-GrKH7aOofyvSjYogmiJrHkk18dPGk',
                range: 'Sheet1!A2:A'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}