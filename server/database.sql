CREATE DATABASE cleanero;

CREATE TABLE anfragen(
  anfrage_id SERIAL PRIMARY KEY,
  name TEXT,
  vorname TEXT,
  strasse TEXT,
  plz   TEXT,
  tel_nummer  TEXT,
  email TEXT,

  n_zimmer TEXT,
  n_fenster TEXT,
  n_toiletten TEXT,
  n_jahre TEXT,
  q_meter TEXT,
  balkon BOOLEAN,
  garage BOOLEAN,
  garantie BOOLEAN,
  bemerkung TEXT,

  datum TEXT,
  erreichbarkeit TEXT
);
