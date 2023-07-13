const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('./db');
const postmark = require("postmark");
const path = require('path');

app.use(cors());
app.use(express.json());

var serverToken = "1ed05fab-983b-4cca-a3fb-01b7a4414f71";
var client = new postmark.ServerClient(serverToken);

app.post('/anfragen', async(req, res) =>{
    try {
      const {name, vorname, strasse, plz, tel_nummer, email, n_zimmer, n_fenster, n_toiletten, n_jahre, q_meter, balkon,garage, garantie, bemerkung, datum, erreichbarkeit} = req.body;
                      client.sendEmail({
                      "From": "info@cleanero.ch",
                      "To": "info@cleanero.ch",
                      "Subject": "Neue Anfrage",
                      "TextBody": `Name       =   ${name}
                                   Vorname    =   ${vorname}
                                   Strasse    =   ${strasse}
                                   PLZ        =   ${plz}
                                   Tel        =   ${tel_nummer}
                                   Email      =   ${email}
                                   Zimmer     =   ${n_zimmer}
                                   Fenster    =   ${n_fenster}
                                   Toiletten  =   ${n_toiletten}
                                   Wohndauer  =   ${n_jahre}
                                   Fläche     =   ${q_meter}
                                   balkon     =   ${balkon ? 'Ja' : 'Nein'}
                                   garage     =   ${garage ? 'Ja' : 'Nein'}
                                   Abgabega.  =   ${garantie ? 'Ja' : 'Nein'}
                                   Bemerkung  =   ${bemerkung}
                                   Datum      =   ${datum}
                                   Erreichbar =   ${erreichbarkeit}`});

             res.status(200).send("");
    } catch (e) {
      console.error(e);
    } finally {
  }
})


// const insert = `INSERT INTO anfragen (name, vorname, strasse, plz, tel_nummer, email, n_zimmer, n_fenster, n_toiletten, n_jahre, q_meter, balkon, garage, garantie, bemerkung, datum, erreichbarkeit)
//                 VALUES('${name}', '${vorname}', '${strasse}', ${plz}, '${tel_nummer}', '${email}', ${n_zimmer}, ${n_fenster}, ${n_toiletten}, ${n_jahre}, ${q_meter},
//                 ${balkon ? true : false}, ${garage ? true : false}, ${garantie ? true : false}, '${bemerkung}', '${datum}', '${erreichbarkeit}');`;
//
//                 const newAnfrage = await pool.query(insert);

app.use(express.static("build"));

const PORT = process.env.PORT || 4000;
app.listen(PORT);
