export type WordListLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type WordListEntry = {
  article: 'der' | 'die' | 'das';
  word: string;
};

export const WORD_LISTS: Record<WordListLevel, WordListEntry[]> = {
  "A1": [
    {
      "article": "der",
      "word": "Abend"
    },
    {
      "article": "das",
      "word": "Abendessen"
    },
    {
      "article": "das",
      "word": "Abenteuer"
    },
    {
      "article": "der",
      "word": "Abfall"
    },
    {
      "article": "das",
      "word": "Abitur"
    },
    {
      "article": "die",
      "word": "Absicht"
    },
    {
      "article": "der",
      "word": "Abstand"
    },
    {
      "article": "der",
      "word": "Adler"
    },
    {
      "article": "die",
      "word": "Adresse"
    },
    {
      "article": "der",
      "word": "Affe"
    },
    {
      "article": "die",
      "word": "Ahnung"
    },
    {
      "article": "das",
      "word": "Album"
    },
    {
      "article": "der",
      "word": "Alkohol"
    },
    {
      "article": "der",
      "word": "Alltag"
    },
    {
      "article": "das",
      "word": "Alphabet"
    },
    {
      "article": "das",
      "word": "Alter"
    },
    {
      "article": "die",
      "word": "Alternative"
    },
    {
      "article": "der",
      "word": "Amerikaner"
    },
    {
      "article": "die",
      "word": "Ampel"
    },
    {
      "article": "das",
      "word": "Amt"
    },
    {
      "article": "die",
      "word": "Ananas"
    },
    {
      "article": "der",
      "word": "Anfang"
    },
    {
      "article": "das",
      "word": "Angebot"
    },
    {
      "article": "die",
      "word": "Angst"
    },
    {
      "article": "die",
      "word": "Ankunft"
    },
    {
      "article": "der",
      "word": "Anruf"
    },
    {
      "article": "die",
      "word": "Ansage"
    },
    {
      "article": "der",
      "word": "Anstieg"
    },
    {
      "article": "die",
      "word": "Antwort"
    },
    {
      "article": "der",
      "word": "Anwalt"
    },
    {
      "article": "die",
      "word": "Anzeige"
    },
    {
      "article": "der",
      "word": "Anzug"
    },
    {
      "article": "der",
      "word": "Apfel"
    },
    {
      "article": "die",
      "word": "Apotheke"
    },
    {
      "article": "der",
      "word": "Apparat"
    },
    {
      "article": "der",
      "word": "Appetit"
    },
    {
      "article": "der",
      "word": "Applaus"
    },
    {
      "article": "der",
      "word": "April"
    },
    {
      "article": "die",
      "word": "Arbeit"
    },
    {
      "article": "der",
      "word": "Arbeiter"
    },
    {
      "article": "der",
      "word": "Arm"
    },
    {
      "article": "die",
      "word": "Art"
    },
    {
      "article": "der",
      "word": "Artikel"
    },
    {
      "article": "der",
      "word": "Arzt"
    },
    {
      "article": "die",
      "word": "Asche"
    },
    {
      "article": "der",
      "word": "Assistent"
    },
    {
      "article": "der",
      "word": "Ast"
    },
    {
      "article": "die",
      "word": "Aufgabe"
    },
    {
      "article": "der",
      "word": "Aufsatz"
    },
    {
      "article": "das",
      "word": "Auge"
    },
    {
      "article": "der",
      "word": "Augenblick"
    },
    {
      "article": "der",
      "word": "August"
    },
    {
      "article": "die",
      "word": "Ausbildung"
    },
    {
      "article": "der",
      "word": "Ausflug"
    },
    {
      "article": "die",
      "word": "Ausgabe"
    },
    {
      "article": "der",
      "word": "Ausgang"
    },
    {
      "article": "das",
      "word": "Ausland"
    },
    {
      "article": "der",
      "word": "Ausländer"
    },
    {
      "article": "die",
      "word": "Ausnahme"
    },
    {
      "article": "das",
      "word": "Aussehen"
    },
    {
      "article": "das",
      "word": "Auto"
    },
    {
      "article": "die",
      "word": "Autobahn"
    },
    {
      "article": "der",
      "word": "Autofahrer"
    },
    {
      "article": "der",
      "word": "Autor"
    },
    {
      "article": "das",
      "word": "Baby"
    },
    {
      "article": "der",
      "word": "Bäcker"
    },
    {
      "article": "die",
      "word": "Bäckerei"
    },
    {
      "article": "der",
      "word": "Backofen"
    },
    {
      "article": "das",
      "word": "Bad"
    },
    {
      "article": "die",
      "word": "Bahn"
    },
    {
      "article": "der",
      "word": "Bahnhof"
    },
    {
      "article": "der",
      "word": "Balkon"
    },
    {
      "article": "der",
      "word": "Ball"
    },
    {
      "article": "die",
      "word": "Banane"
    },
    {
      "article": "die",
      "word": "Bank"
    },
    {
      "article": "die",
      "word": "Bar"
    },
    {
      "article": "der",
      "word": "Bär"
    },
    {
      "article": "der",
      "word": "Bart"
    },
    {
      "article": "der",
      "word": "Baseball"
    },
    {
      "article": "der",
      "word": "Basketball"
    },
    {
      "article": "die",
      "word": "Batterie"
    },
    {
      "article": "der",
      "word": "Bauch"
    },
    {
      "article": "der",
      "word": "Bauer"
    },
    {
      "article": "der",
      "word": "Bauernhof"
    },
    {
      "article": "der",
      "word": "Baum"
    },
    {
      "article": "der",
      "word": "Becher"
    },
    {
      "article": "die",
      "word": "Bedingung"
    },
    {
      "article": "der",
      "word": "Beginn"
    },
    {
      "article": "der",
      "word": "Beifall"
    },
    {
      "article": "das",
      "word": "Bein"
    },
    {
      "article": "das",
      "word": "Beispiel"
    },
    {
      "article": "die",
      "word": "Bekleidung"
    },
    {
      "article": "das",
      "word": "Benzin"
    },
    {
      "article": "der",
      "word": "Berg"
    },
    {
      "article": "der",
      "word": "Berliner"
    },
    {
      "article": "der",
      "word": "Beruf"
    },
    {
      "article": "der",
      "word": "Besen"
    },
    {
      "article": "die",
      "word": "Bestellung"
    },
    {
      "article": "der",
      "word": "Besuch"
    },
    {
      "article": "der",
      "word": "Besucher"
    },
    {
      "article": "der",
      "word": "Beton"
    },
    {
      "article": "das",
      "word": "Bett"
    },
    {
      "article": "die",
      "word": "Bibliothek"
    },
    {
      "article": "die",
      "word": "Biene"
    },
    {
      "article": "das",
      "word": "Bier"
    },
    {
      "article": "das",
      "word": "Bild"
    },
    {
      "article": "der",
      "word": "Bildschirm"
    },
    {
      "article": "die",
      "word": "Birke"
    },
    {
      "article": "die",
      "word": "Birne"
    },
    {
      "article": "der",
      "word": "Bischof"
    },
    {
      "article": "die",
      "word": "Bitte"
    },
    {
      "article": "das",
      "word": "Blatt"
    },
    {
      "article": "der",
      "word": "Bleistift"
    },
    {
      "article": "der",
      "word": "Blick"
    },
    {
      "article": "der",
      "word": "Blitz"
    },
    {
      "article": "der",
      "word": "Block"
    },
    {
      "article": "die",
      "word": "Blume"
    },
    {
      "article": "die",
      "word": "Bluse"
    },
    {
      "article": "das",
      "word": "Blut"
    },
    {
      "article": "der",
      "word": "Bock"
    },
    {
      "article": "der",
      "word": "Boden"
    },
    {
      "article": "der",
      "word": "Bogen"
    },
    {
      "article": "die",
      "word": "Bombe"
    },
    {
      "article": "das",
      "word": "Bonbon"
    },
    {
      "article": "das",
      "word": "Boot"
    },
    {
      "article": "der",
      "word": "Bote"
    },
    {
      "article": "die",
      "word": "Box"
    },
    {
      "article": "der",
      "word": "Brand"
    },
    {
      "article": "der",
      "word": "Braten"
    },
    {
      "article": "die",
      "word": "Brauerei"
    },
    {
      "article": "die",
      "word": "Braut"
    },
    {
      "article": "der",
      "word": "Brei"
    },
    {
      "article": "die",
      "word": "Breite"
    },
    {
      "article": "die",
      "word": "Bremse"
    },
    {
      "article": "das",
      "word": "Brett"
    },
    {
      "article": "der",
      "word": "Brief"
    },
    {
      "article": "die",
      "word": "Brille"
    },
    {
      "article": "das",
      "word": "Brot"
    },
    {
      "article": "das",
      "word": "Brötchen"
    },
    {
      "article": "die",
      "word": "Brücke"
    },
    {
      "article": "der",
      "word": "Bruder"
    },
    {
      "article": "die",
      "word": "Brust"
    },
    {
      "article": "das",
      "word": "Buch"
    },
    {
      "article": "der",
      "word": "Buchstabe"
    },
    {
      "article": "die",
      "word": "Burg"
    },
    {
      "article": "das",
      "word": "Büro"
    },
    {
      "article": "der",
      "word": "Bus"
    },
    {
      "article": "der",
      "word": "Busch"
    },
    {
      "article": "die",
      "word": "Butter"
    },
    {
      "article": "der",
      "word": "Cent"
    },
    {
      "article": "der",
      "word": "Chef"
    },
    {
      "article": "die",
      "word": "Cola"
    },
    {
      "article": "der",
      "word": "Computer"
    },
    {
      "article": "der",
      "word": "Cousin"
    },
    {
      "article": "das",
      "word": "Dach"
    },
    {
      "article": "die",
      "word": "Dame"
    },
    {
      "article": "der",
      "word": "Dampf"
    },
    {
      "article": "das",
      "word": "Datum"
    },
    {
      "article": "der",
      "word": "Daumen"
    },
    {
      "article": "die",
      "word": "Decke"
    },
    {
      "article": "der",
      "word": "Dezember"
    },
    {
      "article": "der",
      "word": "Dienstag"
    },
    {
      "article": "das",
      "word": "Ding"
    },
    {
      "article": "die",
      "word": "Diskussion"
    },
    {
      "article": "der",
      "word": "Doktor"
    },
    {
      "article": "das",
      "word": "Dokument"
    },
    {
      "article": "der",
      "word": "Dollar"
    },
    {
      "article": "der",
      "word": "Donner"
    },
    {
      "article": "der",
      "word": "Donnerstag"
    },
    {
      "article": "das",
      "word": "Doppelzimmer"
    },
    {
      "article": "das",
      "word": "Dorf"
    },
    {
      "article": "die",
      "word": "Dose"
    },
    {
      "article": "der",
      "word": "Drache"
    },
    {
      "article": "die",
      "word": "Drogerie"
    },
    {
      "article": "der",
      "word": "Drucker"
    },
    {
      "article": "der",
      "word": "Durst"
    },
    {
      "article": "die",
      "word": "Dusche"
    },
    {
      "article": "das",
      "word": "Dutzend"
    },
    {
      "article": "die",
      "word": "Ecke"
    },
    {
      "article": "die",
      "word": "Ehe"
    },
    {
      "article": "die",
      "word": "Ehefrau"
    },
    {
      "article": "der",
      "word": "Ehemann"
    },
    {
      "article": "das",
      "word": "Ehepaar"
    },
    {
      "article": "das",
      "word": "Ei"
    },
    {
      "article": "das",
      "word": "Eichhörnchen"
    },
    {
      "article": "der",
      "word": "Einkauf"
    },
    {
      "article": "das",
      "word": "Einkaufszentrum"
    },
    {
      "article": "das",
      "word": "Einkommen"
    },
    {
      "article": "die",
      "word": "Einladung"
    },
    {
      "article": "die",
      "word": "Eins"
    },
    {
      "article": "der",
      "word": "Einwohner"
    },
    {
      "article": "das",
      "word": "Eis"
    },
    {
      "article": "der",
      "word": "Eisbär"
    },
    {
      "article": "das",
      "word": "Eisen"
    },
    {
      "article": "der",
      "word": "Elefant"
    },
    {
      "article": "der",
      "word": "Elektriker"
    },
    {
      "article": "das",
      "word": "Element"
    },
    {
      "article": "das",
      "word": "Ende"
    },
    {
      "article": "die",
      "word": "Energie"
    },
    {
      "article": "der",
      "word": "Engel"
    },
    {
      "article": "der",
      "word": "Enkel"
    },
    {
      "article": "die",
      "word": "Ente"
    },
    {
      "article": "die",
      "word": "Entschuldigung"
    },
    {
      "article": "die",
      "word": "Erde"
    },
    {
      "article": "der",
      "word": "Erfolg"
    },
    {
      "article": "das",
      "word": "Ergebnis"
    },
    {
      "article": "die",
      "word": "Erkältung"
    },
    {
      "article": "der",
      "word": "Erste"
    },
    {
      "article": "der",
      "word": "Erwachsene"
    },
    {
      "article": "der",
      "word": "Espresso"
    },
    {
      "article": "das",
      "word": "Essen"
    },
    {
      "article": "der",
      "word": "Essig"
    },
    {
      "article": "die",
      "word": "Etage"
    },
    {
      "article": "das",
      "word": "Etikett"
    },
    {
      "article": "der",
      "word": "Euro"
    },
    {
      "article": "das",
      "word": "Fahrrad"
    },
    {
      "article": "die",
      "word": "Familie"
    },
    {
      "article": "die",
      "word": "Farbe"
    },
    {
      "article": "der",
      "word": "Februar"
    },
    {
      "article": "der",
      "word": "Fehler"
    },
    {
      "article": "der",
      "word": "Feiertag"
    },
    {
      "article": "das",
      "word": "Feld"
    },
    {
      "article": "das",
      "word": "Fenster"
    },
    {
      "article": "das",
      "word": "Fett"
    },
    {
      "article": "das",
      "word": "Feuer"
    },
    {
      "article": "der",
      "word": "Film"
    },
    {
      "article": "der",
      "word": "Finger"
    },
    {
      "article": "der",
      "word": "Fisch"
    },
    {
      "article": "die",
      "word": "Flasche"
    },
    {
      "article": "das",
      "word": "Fleisch"
    },
    {
      "article": "der",
      "word": "Flug"
    },
    {
      "article": "das",
      "word": "Flugzeug"
    },
    {
      "article": "der",
      "word": "Fluss"
    },
    {
      "article": "das",
      "word": "Foto"
    },
    {
      "article": "die",
      "word": "Frage"
    },
    {
      "article": "die",
      "word": "Frau"
    },
    {
      "article": "der",
      "word": "Freitag"
    },
    {
      "article": "der",
      "word": "Freund"
    },
    {
      "article": "die",
      "word": "Freundin"
    },
    {
      "article": "der",
      "word": "Friseur"
    },
    {
      "article": "der",
      "word": "Frosch"
    },
    {
      "article": "der",
      "word": "Frühling"
    },
    {
      "article": "das",
      "word": "Frühstück"
    },
    {
      "article": "der",
      "word": "Fuchs"
    },
    {
      "article": "der",
      "word": "Fuß"
    },
    {
      "article": "der",
      "word": "Fußball"
    },
    {
      "article": "die",
      "word": "Gabel"
    },
    {
      "article": "die",
      "word": "Gans"
    },
    {
      "article": "der",
      "word": "Garten"
    },
    {
      "article": "der",
      "word": "Gast"
    },
    {
      "article": "der",
      "word": "Geburtstag"
    },
    {
      "article": "das",
      "word": "Geld"
    },
    {
      "article": "das",
      "word": "Gemüse"
    },
    {
      "article": "das",
      "word": "Geschenk"
    },
    {
      "article": "das",
      "word": "Gesicht"
    },
    {
      "article": "die",
      "word": "Gitarre"
    },
    {
      "article": "das",
      "word": "Glas"
    },
    {
      "article": "der",
      "word": "Gott"
    },
    {
      "article": "die",
      "word": "Großmutter"
    },
    {
      "article": "der",
      "word": "Großvater"
    },
    {
      "article": "die",
      "word": "Grundschule"
    },
    {
      "article": "das",
      "word": "Haar"
    },
    {
      "article": "der",
      "word": "Hals"
    },
    {
      "article": "der",
      "word": "Hammer"
    },
    {
      "article": "die",
      "word": "Hand"
    },
    {
      "article": "das",
      "word": "Handtuch"
    },
    {
      "article": "das",
      "word": "Handy"
    },
    {
      "article": "der",
      "word": "Hase"
    },
    {
      "article": "das",
      "word": "Haus"
    },
    {
      "article": "das",
      "word": "Haustier"
    },
    {
      "article": "das",
      "word": "Hemd"
    },
    {
      "article": "der",
      "word": "Herbst"
    },
    {
      "article": "der",
      "word": "Herr"
    },
    {
      "article": "das",
      "word": "Herz"
    },
    {
      "article": "der",
      "word": "Himmel"
    },
    {
      "article": "das",
      "word": "Holz"
    },
    {
      "article": "der",
      "word": "Honig"
    },
    {
      "article": "die",
      "word": "Hose"
    },
    {
      "article": "das",
      "word": "Hotel"
    },
    {
      "article": "das",
      "word": "Huhn"
    },
    {
      "article": "der",
      "word": "Hund"
    },
    {
      "article": "der",
      "word": "Hut"
    },
    {
      "article": "der",
      "word": "Igel"
    },
    {
      "article": "das",
      "word": "Insekt"
    },
    {
      "article": "das",
      "word": "Interesse"
    },
    {
      "article": "das",
      "word": "Internet"
    },
    {
      "article": "die",
      "word": "Jacke"
    },
    {
      "article": "das",
      "word": "Jahr"
    },
    {
      "article": "der",
      "word": "Januar"
    },
    {
      "article": "der",
      "word": "Juli"
    },
    {
      "article": "der",
      "word": "Junge"
    },
    {
      "article": "der",
      "word": "Juni"
    },
    {
      "article": "der",
      "word": "Kaffee"
    },
    {
      "article": "das",
      "word": "Kaninchen"
    },
    {
      "article": "die",
      "word": "Karte"
    },
    {
      "article": "die",
      "word": "Kartoffel"
    },
    {
      "article": "der",
      "word": "Käse"
    },
    {
      "article": "die",
      "word": "Katze"
    },
    {
      "article": "die",
      "word": "Kerze"
    },
    {
      "article": "das",
      "word": "Kind"
    },
    {
      "article": "der",
      "word": "Kindergarten"
    },
    {
      "article": "das",
      "word": "Kino"
    },
    {
      "article": "die",
      "word": "Kirche"
    },
    {
      "article": "das",
      "word": "Kissen"
    },
    {
      "article": "das",
      "word": "Kleid"
    },
    {
      "article": "das",
      "word": "Klo"
    },
    {
      "article": "der",
      "word": "Koch"
    },
    {
      "article": "der",
      "word": "Koffer"
    },
    {
      "article": "der",
      "word": "König"
    },
    {
      "article": "die",
      "word": "Königin"
    },
    {
      "article": "der",
      "word": "Kopf"
    },
    {
      "article": "der",
      "word": "Körper"
    },
    {
      "article": "das",
      "word": "Krokodil"
    },
    {
      "article": "die",
      "word": "Küche"
    },
    {
      "article": "der",
      "word": "Kuchen"
    },
    {
      "article": "der",
      "word": "Kugelschreiber"
    },
    {
      "article": "die",
      "word": "Kuh"
    },
    {
      "article": "der",
      "word": "Kühlschrank"
    },
    {
      "article": "die",
      "word": "Lampe"
    },
    {
      "article": "das",
      "word": "Land"
    },
    {
      "article": "das",
      "word": "Leben"
    },
    {
      "article": "das",
      "word": "Lebensmittel"
    },
    {
      "article": "der",
      "word": "Lehrer"
    },
    {
      "article": "die",
      "word": "Lehrerin"
    },
    {
      "article": "das",
      "word": "Licht"
    },
    {
      "article": "die",
      "word": "Liebe"
    },
    {
      "article": "das",
      "word": "Lied"
    },
    {
      "article": "die",
      "word": "Lippe"
    },
    {
      "article": "der",
      "word": "Liter"
    },
    {
      "article": "das",
      "word": "Loch"
    },
    {
      "article": "der",
      "word": "Löffel"
    },
    {
      "article": "der",
      "word": "Löwe"
    },
    {
      "article": "die",
      "word": "Luft"
    },
    {
      "article": "das",
      "word": "Mädchen"
    },
    {
      "article": "der",
      "word": "Magen"
    },
    {
      "article": "die",
      "word": "Mahlzeit"
    },
    {
      "article": "der",
      "word": "Mai"
    },
    {
      "article": "die",
      "word": "Mama"
    },
    {
      "article": "der",
      "word": "Mann"
    },
    {
      "article": "das",
      "word": "Märchen"
    },
    {
      "article": "der",
      "word": "Markt"
    },
    {
      "article": "der",
      "word": "März"
    },
    {
      "article": "die",
      "word": "Maus"
    },
    {
      "article": "das",
      "word": "Meer"
    },
    {
      "article": "das",
      "word": "Mehl"
    },
    {
      "article": "der",
      "word": "Mensch"
    },
    {
      "article": "das",
      "word": "Messer"
    },
    {
      "article": "die",
      "word": "Milch"
    },
    {
      "article": "das",
      "word": "Mineralwasser"
    },
    {
      "article": "die",
      "word": "Minute"
    },
    {
      "article": "der",
      "word": "Mittwoch"
    },
    {
      "article": "der",
      "word": "Mond"
    },
    {
      "article": "der",
      "word": "Montag"
    },
    {
      "article": "der",
      "word": "Morgen"
    },
    {
      "article": "der",
      "word": "Mund"
    },
    {
      "article": "die",
      "word": "Musik"
    },
    {
      "article": "die",
      "word": "Mutter"
    },
    {
      "article": "die",
      "word": "Mütze"
    },
    {
      "article": "der",
      "word": "Nachbar"
    },
    {
      "article": "der",
      "word": "Nachmittag"
    },
    {
      "article": "die",
      "word": "Nachricht"
    },
    {
      "article": "die",
      "word": "Nacht"
    },
    {
      "article": "der",
      "word": "Nagel"
    },
    {
      "article": "der",
      "word": "Name"
    },
    {
      "article": "die",
      "word": "Nase"
    },
    {
      "article": "das",
      "word": "Nest"
    },
    {
      "article": "der",
      "word": "Norden"
    },
    {
      "article": "der",
      "word": "November"
    },
    {
      "article": "die",
      "word": "Null"
    },
    {
      "article": "das",
      "word": "Obst"
    },
    {
      "article": "der",
      "word": "Ofen"
    },
    {
      "article": "das",
      "word": "Ohr"
    },
    {
      "article": "der",
      "word": "Oktober"
    },
    {
      "article": "das",
      "word": "Öl"
    },
    {
      "article": "die",
      "word": "Oma"
    },
    {
      "article": "der",
      "word": "Onkel"
    },
    {
      "article": "der",
      "word": "Opa"
    },
    {
      "article": "die",
      "word": "Orange"
    },
    {
      "article": "der",
      "word": "Ort"
    },
    {
      "article": "der",
      "word": "Osten"
    },
    {
      "article": "der",
      "word": "Papa"
    },
    {
      "article": "das",
      "word": "Papier"
    },
    {
      "article": "die",
      "word": "Pause"
    },
    {
      "article": "das",
      "word": "Pferd"
    },
    {
      "article": "die",
      "word": "Pflanze"
    },
    {
      "article": "die",
      "word": "Pizza"
    },
    {
      "article": "der",
      "word": "Platz"
    },
    {
      "article": "die",
      "word": "Polizei"
    },
    {
      "article": "der",
      "word": "Polizist"
    },
    {
      "article": "der",
      "word": "Punkt"
    },
    {
      "article": "die",
      "word": "Puppe"
    },
    {
      "article": "das",
      "word": "Rad"
    },
    {
      "article": "der",
      "word": "Raum"
    },
    {
      "article": "das",
      "word": "Regal"
    },
    {
      "article": "der",
      "word": "Regen"
    },
    {
      "article": "der",
      "word": "Reis"
    },
    {
      "article": "die",
      "word": "Reise"
    },
    {
      "article": "der",
      "word": "Saft"
    },
    {
      "article": "der",
      "word": "Salat"
    },
    {
      "article": "das",
      "word": "Salz"
    },
    {
      "article": "der",
      "word": "Samstag"
    },
    {
      "article": "das",
      "word": "Schaf"
    },
    {
      "article": "das",
      "word": "Schiff"
    },
    {
      "article": "der",
      "word": "Schirm"
    },
    {
      "article": "der",
      "word": "Schlaf"
    },
    {
      "article": "das",
      "word": "Schlafzimmer"
    },
    {
      "article": "die",
      "word": "Schlange"
    },
    {
      "article": "das",
      "word": "Schloss"
    },
    {
      "article": "der",
      "word": "Schlüssel"
    },
    {
      "article": "der",
      "word": "Schmetterling"
    },
    {
      "article": "der",
      "word": "Schnee"
    },
    {
      "article": "die",
      "word": "Schokolade"
    },
    {
      "article": "der",
      "word": "Schuh"
    },
    {
      "article": "die",
      "word": "Schule"
    },
    {
      "article": "der",
      "word": "Schüler"
    },
    {
      "article": "die",
      "word": "Schülerin"
    },
    {
      "article": "die",
      "word": "Schulter"
    },
    {
      "article": "das",
      "word": "Schwein"
    },
    {
      "article": "die",
      "word": "Schwester"
    },
    {
      "article": "die",
      "word": "Seife"
    },
    {
      "article": "die",
      "word": "Seite"
    },
    {
      "article": "die",
      "word": "Sekunde"
    },
    {
      "article": "der",
      "word": "September"
    },
    {
      "article": "das",
      "word": "Sofa"
    },
    {
      "article": "der",
      "word": "Sohn"
    },
    {
      "article": "der",
      "word": "Sommer"
    },
    {
      "article": "der",
      "word": "Sonntag"
    },
    {
      "article": "der",
      "word": "Spiegel"
    },
    {
      "article": "das",
      "word": "Spiel"
    },
    {
      "article": "der",
      "word": "Spieler"
    },
    {
      "article": "das",
      "word": "Spielzeug"
    },
    {
      "article": "die",
      "word": "Sprache"
    },
    {
      "article": "die",
      "word": "Stadt"
    },
    {
      "article": "der",
      "word": "Staub"
    },
    {
      "article": "der",
      "word": "Stern"
    },
    {
      "article": "der",
      "word": "Stift"
    },
    {
      "article": "die",
      "word": "Stimme"
    },
    {
      "article": "die",
      "word": "Straße"
    },
    {
      "article": "das",
      "word": "Stück"
    },
    {
      "article": "der",
      "word": "Student"
    },
    {
      "article": "der",
      "word": "Stuhl"
    },
    {
      "article": "die",
      "word": "Stunde"
    },
    {
      "article": "die",
      "word": "Suppe"
    },
    {
      "article": "der",
      "word": "Tag"
    },
    {
      "article": "die",
      "word": "Tante"
    },
    {
      "article": "der",
      "word": "Tanz"
    },
    {
      "article": "die",
      "word": "Tasche"
    },
    {
      "article": "die",
      "word": "Tasse"
    },
    {
      "article": "die",
      "word": "Tastatur"
    },
    {
      "article": "das",
      "word": "Taxi"
    },
    {
      "article": "der",
      "word": "Tee"
    },
    {
      "article": "das",
      "word": "Telefon"
    },
    {
      "article": "das",
      "word": "Tennis"
    },
    {
      "article": "der",
      "word": "Teppich"
    },
    {
      "article": "das",
      "word": "Ticket"
    },
    {
      "article": "das",
      "word": "Tier"
    },
    {
      "article": "die",
      "word": "Tinte"
    },
    {
      "article": "der",
      "word": "Tisch"
    },
    {
      "article": "die",
      "word": "Tochter"
    },
    {
      "article": "die",
      "word": "Toilette"
    },
    {
      "article": "der",
      "word": "Tourist"
    },
    {
      "article": "die",
      "word": "Träne"
    },
    {
      "article": "der",
      "word": "Traum"
    },
    {
      "article": "das",
      "word": "Tuch"
    },
    {
      "article": "der",
      "word": "Tunnel"
    },
    {
      "article": "die",
      "word": "Tür"
    },
    {
      "article": "der",
      "word": "Turm"
    },
    {
      "article": "die",
      "word": "Uhr"
    },
    {
      "article": "der",
      "word": "Unterricht"
    },
    {
      "article": "der",
      "word": "Vater"
    },
    {
      "article": "der",
      "word": "Vogel"
    },
    {
      "article": "der",
      "word": "Wald"
    },
    {
      "article": "die",
      "word": "Wand"
    },
    {
      "article": "das",
      "word": "Wasser"
    },
    {
      "article": "der",
      "word": "Weg"
    },
    {
      "article": "das",
      "word": "Weihnachten"
    },
    {
      "article": "die",
      "word": "Welt"
    },
    {
      "article": "das",
      "word": "Wetter"
    },
    {
      "article": "der",
      "word": "Winter"
    },
    {
      "article": "die",
      "word": "Woche"
    },
    {
      "article": "das",
      "word": "Wochenende"
    },
    {
      "article": "das",
      "word": "Wohnzimmer"
    },
    {
      "article": "der",
      "word": "Wolf"
    },
    {
      "article": "die",
      "word": "Wolke"
    },
    {
      "article": "das",
      "word": "Wort"
    },
    {
      "article": "das",
      "word": "Wörterbuch"
    },
    {
      "article": "die",
      "word": "Wunde"
    },
    {
      "article": "das",
      "word": "Wunder"
    },
    {
      "article": "der",
      "word": "Wunsch"
    },
    {
      "article": "die",
      "word": "Wurst"
    },
    {
      "article": "die",
      "word": "Zahl"
    },
    {
      "article": "der",
      "word": "Zahn"
    },
    {
      "article": "das",
      "word": "Zeichen"
    },
    {
      "article": "die",
      "word": "Zeit"
    },
    {
      "article": "das",
      "word": "Zimmer"
    },
    {
      "article": "die",
      "word": "Zitrone"
    },
    {
      "article": "der",
      "word": "Zoo"
    },
    {
      "article": "der",
      "word": "Zucker"
    },
    {
      "article": "der",
      "word": "Zug"
    },
    {
      "article": "die",
      "word": "Zunge"
    }
  ],
  "A2": [
    {
      "article": "der",
      "word": "Europäer"
    },
    {
      "article": "die",
      "word": "Fabrik"
    },
    {
      "article": "das",
      "word": "Fach"
    },
    {
      "article": "der",
      "word": "Faden"
    },
    {
      "article": "die",
      "word": "Fahne"
    },
    {
      "article": "die",
      "word": "Fähre"
    },
    {
      "article": "das",
      "word": "Fahren"
    },
    {
      "article": "der",
      "word": "Fahrer"
    },
    {
      "article": "der",
      "word": "Fahrplan"
    },
    {
      "article": "der",
      "word": "Fahrpreis"
    },
    {
      "article": "die",
      "word": "Fahrt"
    },
    {
      "article": "das",
      "word": "Fahrzeug"
    },
    {
      "article": "der",
      "word": "Fall"
    },
    {
      "article": "der",
      "word": "Fan"
    },
    {
      "article": "das",
      "word": "Fass"
    },
    {
      "article": "die",
      "word": "Faust"
    },
    {
      "article": "das",
      "word": "Fax"
    },
    {
      "article": "die",
      "word": "Feder"
    },
    {
      "article": "die",
      "word": "Fee"
    },
    {
      "article": "die",
      "word": "Feier"
    },
    {
      "article": "die",
      "word": "Feige"
    },
    {
      "article": "der",
      "word": "Feind"
    },
    {
      "article": "das",
      "word": "Fell"
    },
    {
      "article": "der",
      "word": "Fernseher"
    },
    {
      "article": "das",
      "word": "Fest"
    },
    {
      "article": "der",
      "word": "Feuerwehrmann"
    },
    {
      "article": "das",
      "word": "Feuerwerk"
    },
    {
      "article": "das",
      "word": "Fieber"
    },
    {
      "article": "die",
      "word": "Figur"
    },
    {
      "article": "die",
      "word": "Firma"
    },
    {
      "article": "der",
      "word": "Fischer"
    },
    {
      "article": "die",
      "word": "Flagge"
    },
    {
      "article": "die",
      "word": "Flamme"
    },
    {
      "article": "der",
      "word": "Fleck"
    },
    {
      "article": "die",
      "word": "Fledermaus"
    },
    {
      "article": "die",
      "word": "Fliege"
    },
    {
      "article": "die",
      "word": "Flöte"
    },
    {
      "article": "der",
      "word": "Flügel"
    },
    {
      "article": "der",
      "word": "Flughafen"
    },
    {
      "article": "die",
      "word": "Folie"
    },
    {
      "article": "die",
      "word": "Form"
    },
    {
      "article": "das",
      "word": "Format"
    },
    {
      "article": "das",
      "word": "Formular"
    },
    {
      "article": "der",
      "word": "Fotograf"
    },
    {
      "article": "das",
      "word": "Französisch"
    },
    {
      "article": "die",
      "word": "Freiheit"
    },
    {
      "article": "die",
      "word": "Freizeit"
    },
    {
      "article": "die",
      "word": "Fremdsprache"
    },
    {
      "article": "die",
      "word": "Freude"
    },
    {
      "article": "die",
      "word": "Freundschaft"
    },
    {
      "article": "der",
      "word": "Friedhof"
    },
    {
      "article": "die",
      "word": "Frucht"
    },
    {
      "article": "das",
      "word": "Frühjahr"
    },
    {
      "article": "der",
      "word": "Führer"
    },
    {
      "article": "der",
      "word": "Fußgänger"
    },
    {
      "article": "das",
      "word": "Futter"
    },
    {
      "article": "die",
      "word": "Garage"
    },
    {
      "article": "der",
      "word": "Gärtner"
    },
    {
      "article": "das",
      "word": "Gas"
    },
    {
      "article": "die",
      "word": "Gasse"
    },
    {
      "article": "das",
      "word": "Gebäude"
    },
    {
      "article": "das",
      "word": "Gebet"
    },
    {
      "article": "die",
      "word": "Gegend"
    },
    {
      "article": "der",
      "word": "Gegenstand"
    },
    {
      "article": "das",
      "word": "Gegenteil"
    },
    {
      "article": "der",
      "word": "Gegner"
    },
    {
      "article": "das",
      "word": "Gehalt"
    },
    {
      "article": "das",
      "word": "Geheimnis"
    },
    {
      "article": "das",
      "word": "Gehirn"
    },
    {
      "article": "der",
      "word": "Geist"
    },
    {
      "article": "das",
      "word": "Gepäck"
    },
    {
      "article": "das",
      "word": "Gerät"
    },
    {
      "article": "das",
      "word": "Geräusch"
    },
    {
      "article": "der",
      "word": "Geruch"
    },
    {
      "article": "das",
      "word": "Geschäft"
    },
    {
      "article": "die",
      "word": "Geschichte"
    },
    {
      "article": "das",
      "word": "Geschirr"
    },
    {
      "article": "der",
      "word": "Geschmack"
    },
    {
      "article": "das",
      "word": "Gesetz"
    },
    {
      "article": "das",
      "word": "Gespenst"
    },
    {
      "article": "das",
      "word": "Gespräch"
    },
    {
      "article": "die",
      "word": "Geste"
    },
    {
      "article": "die",
      "word": "Gesundheit"
    },
    {
      "article": "das",
      "word": "Getränk"
    },
    {
      "article": "das",
      "word": "Gewicht"
    },
    {
      "article": "das",
      "word": "Gewitter"
    },
    {
      "article": "das",
      "word": "Gift"
    },
    {
      "article": "das",
      "word": "Gitter"
    },
    {
      "article": "das",
      "word": "Gleis"
    },
    {
      "article": "der",
      "word": "Globus"
    },
    {
      "article": "die",
      "word": "Glocke"
    },
    {
      "article": "die",
      "word": "Glotze"
    },
    {
      "article": "das",
      "word": "Glück"
    },
    {
      "article": "das",
      "word": "Gold"
    },
    {
      "article": "der",
      "word": "Golf"
    },
    {
      "article": "das",
      "word": "Grab"
    },
    {
      "article": "der",
      "word": "Grad"
    },
    {
      "article": "das",
      "word": "Gramm"
    },
    {
      "article": "das",
      "word": "Gras"
    },
    {
      "article": "die",
      "word": "Grenze"
    },
    {
      "article": "die",
      "word": "Großstadt"
    },
    {
      "article": "das",
      "word": "Grün"
    },
    {
      "article": "der",
      "word": "Grund"
    },
    {
      "article": "die",
      "word": "Grundlage"
    },
    {
      "article": "die",
      "word": "Gruppe"
    },
    {
      "article": "der",
      "word": "Gruß"
    },
    {
      "article": "der",
      "word": "Gurt"
    },
    {
      "article": "der",
      "word": "Gürtel"
    },
    {
      "article": "das",
      "word": "Gut"
    },
    {
      "article": "das",
      "word": "Gymnasium"
    },
    {
      "article": "der",
      "word": "Hafen"
    },
    {
      "article": "der",
      "word": "Hahn"
    },
    {
      "article": "der",
      "word": "Hai"
    },
    {
      "article": "der",
      "word": "Haken"
    },
    {
      "article": "die",
      "word": "Hälfte"
    },
    {
      "article": "die",
      "word": "Halle"
    },
    {
      "article": "der",
      "word": "Hamster"
    },
    {
      "article": "das",
      "word": "Handgelenk"
    },
    {
      "article": "die",
      "word": "Handschrift"
    },
    {
      "article": "der",
      "word": "Handwerker"
    },
    {
      "article": "die",
      "word": "Hauptstadt"
    },
    {
      "article": "die",
      "word": "Hausfrau"
    },
    {
      "article": "der",
      "word": "Hausmeister"
    },
    {
      "article": "die",
      "word": "Haustür"
    },
    {
      "article": "die",
      "word": "Haut"
    },
    {
      "article": "das",
      "word": "Heft"
    },
    {
      "article": "der",
      "word": "Held"
    },
    {
      "article": "der",
      "word": "Helm"
    },
    {
      "article": "der",
      "word": "Herd"
    },
    {
      "article": "die",
      "word": "Hilfe"
    },
    {
      "article": "der",
      "word": "Hirsch"
    },
    {
      "article": "der",
      "word": "Hit"
    },
    {
      "article": "die",
      "word": "Hitze"
    },
    {
      "article": "das",
      "word": "Hobby"
    },
    {
      "article": "die",
      "word": "Hochzeit"
    },
    {
      "article": "das",
      "word": "Hockey"
    },
    {
      "article": "der",
      "word": "Hof"
    },
    {
      "article": "die",
      "word": "Hoffnung"
    },
    {
      "article": "die",
      "word": "Höhe"
    },
    {
      "article": "die",
      "word": "Höhle"
    },
    {
      "article": "das",
      "word": "Horn"
    },
    {
      "article": "das",
      "word": "Hotelzimmer"
    },
    {
      "article": "der",
      "word": "Hubschrauber"
    },
    {
      "article": "der",
      "word": "Hügel"
    },
    {
      "article": "der",
      "word": "Hunger"
    },
    {
      "article": "die",
      "word": "Hütte"
    },
    {
      "article": "die",
      "word": "Idee"
    },
    {
      "article": "der",
      "word": "Idiot"
    },
    {
      "article": "der",
      "word": "Imbiss"
    },
    {
      "article": "die",
      "word": "Information"
    },
    {
      "article": "die",
      "word": "Insel"
    },
    {
      "article": "das",
      "word": "Instrument"
    },
    {
      "article": "die",
      "word": "Jahreszeit"
    },
    {
      "article": "die",
      "word": "Jeans"
    },
    {
      "article": "der",
      "word": "Job"
    },
    {
      "article": "das",
      "word": "Kabel"
    },
    {
      "article": "die",
      "word": "Kabine"
    },
    {
      "article": "der",
      "word": "Käfer"
    },
    {
      "article": "der",
      "word": "Kalender"
    },
    {
      "article": "die",
      "word": "Kälte"
    },
    {
      "article": "die",
      "word": "Kamera"
    },
    {
      "article": "der",
      "word": "Kamin"
    },
    {
      "article": "die",
      "word": "Kammer"
    },
    {
      "article": "der",
      "word": "Kampf"
    },
    {
      "article": "der",
      "word": "Kanal"
    },
    {
      "article": "die",
      "word": "Kanne"
    },
    {
      "article": "die",
      "word": "Kante"
    },
    {
      "article": "die",
      "word": "Kantine"
    },
    {
      "article": "das",
      "word": "Kapitel"
    },
    {
      "article": "die",
      "word": "Kappe"
    },
    {
      "article": "der",
      "word": "Karton"
    },
    {
      "article": "die",
      "word": "Kasse"
    },
    {
      "article": "die",
      "word": "Kassette"
    },
    {
      "article": "der",
      "word": "Kasten"
    },
    {
      "article": "das",
      "word": "Kätzchen"
    },
    {
      "article": "der",
      "word": "Käufer"
    },
    {
      "article": "der",
      "word": "Keks"
    },
    {
      "article": "der",
      "word": "Keller"
    },
    {
      "article": "der",
      "word": "Kellner"
    },
    {
      "article": "die",
      "word": "Kette"
    },
    {
      "article": "das",
      "word": "Kinderzimmer"
    },
    {
      "article": "das",
      "word": "Kinn"
    },
    {
      "article": "der",
      "word": "Kiosk"
    },
    {
      "article": "die",
      "word": "Kirsche"
    },
    {
      "article": "die",
      "word": "Kiste"
    },
    {
      "article": "die",
      "word": "Klasse"
    },
    {
      "article": "das",
      "word": "Klassenzimmer"
    },
    {
      "article": "das",
      "word": "Klavier"
    },
    {
      "article": "die",
      "word": "Kleidung"
    },
    {
      "article": "die",
      "word": "Klingel"
    },
    {
      "article": "die",
      "word": "Klinik"
    },
    {
      "article": "die",
      "word": "Kneipe"
    },
    {
      "article": "das",
      "word": "Knie"
    },
    {
      "article": "der",
      "word": "Knoblauch"
    },
    {
      "article": "der",
      "word": "Knochen"
    },
    {
      "article": "der",
      "word": "Knopf"
    },
    {
      "article": "das",
      "word": "Kochen"
    },
    {
      "article": "der",
      "word": "Kollege"
    },
    {
      "article": "die",
      "word": "Kollegin"
    },
    {
      "article": "das",
      "word": "Komma"
    },
    {
      "article": "der",
      "word": "Kompass"
    },
    {
      "article": "der",
      "word": "Kontakt"
    },
    {
      "article": "der",
      "word": "Kontinent"
    },
    {
      "article": "das",
      "word": "Konto"
    },
    {
      "article": "die",
      "word": "Kontrolle"
    },
    {
      "article": "das",
      "word": "Konzert"
    },
    {
      "article": "die",
      "word": "Kopie"
    },
    {
      "article": "der",
      "word": "Korb"
    },
    {
      "article": "das",
      "word": "Korn"
    },
    {
      "article": "das",
      "word": "Kostüm"
    },
    {
      "article": "die",
      "word": "Kraft"
    },
    {
      "article": "der",
      "word": "Kran"
    },
    {
      "article": "das",
      "word": "Krankenhaus"
    },
    {
      "article": "die",
      "word": "Krankenkasse"
    },
    {
      "article": "die",
      "word": "Krankenschwester"
    },
    {
      "article": "der",
      "word": "Krankenwagen"
    },
    {
      "article": "die",
      "word": "Krankheit"
    },
    {
      "article": "das",
      "word": "Kraut"
    },
    {
      "article": "die",
      "word": "Krawatte"
    },
    {
      "article": "der",
      "word": "Kreis"
    },
    {
      "article": "das",
      "word": "Kreuz"
    },
    {
      "article": "die",
      "word": "Kreuzung"
    },
    {
      "article": "der",
      "word": "Krieg"
    },
    {
      "article": "die",
      "word": "Krone"
    },
    {
      "article": "die",
      "word": "Kugel"
    },
    {
      "article": "das",
      "word": "Küken"
    },
    {
      "article": "der",
      "word": "Kunde"
    },
    {
      "article": "der",
      "word": "Kurs"
    },
    {
      "article": "die",
      "word": "Kurve"
    },
    {
      "article": "der",
      "word": "Kuss"
    },
    {
      "article": "die",
      "word": "Küste"
    },
    {
      "article": "das",
      "word": "Lachen"
    },
    {
      "article": "der",
      "word": "Lachs"
    },
    {
      "article": "der",
      "word": "Laden"
    },
    {
      "article": "das",
      "word": "Lamm"
    },
    {
      "article": "die",
      "word": "Landung"
    },
    {
      "article": "die",
      "word": "Länge"
    },
    {
      "article": "der",
      "word": "Laptop"
    },
    {
      "article": "der",
      "word": "Lastwagen"
    },
    {
      "article": "die",
      "word": "Laterne"
    },
    {
      "article": "der",
      "word": "Lauf"
    },
    {
      "article": "die",
      "word": "Laune"
    },
    {
      "article": "der",
      "word": "Laut"
    },
    {
      "article": "der",
      "word": "Lautsprecher"
    },
    {
      "article": "die",
      "word": "Leber"
    },
    {
      "article": "das",
      "word": "Leder"
    },
    {
      "article": "das",
      "word": "Lehrbuch"
    },
    {
      "article": "der",
      "word": "Leim"
    },
    {
      "article": "die",
      "word": "Leinwand"
    },
    {
      "article": "die",
      "word": "Leistung"
    },
    {
      "article": "der",
      "word": "Leser"
    },
    {
      "article": "der",
      "word": "Liebling"
    },
    {
      "article": "die",
      "word": "Lieferung"
    },
    {
      "article": "der",
      "word": "Lift"
    },
    {
      "article": "das",
      "word": "Lila"
    },
    {
      "article": "die",
      "word": "Linie"
    },
    {
      "article": "die",
      "word": "Linse"
    },
    {
      "article": "die",
      "word": "Liste"
    },
    {
      "article": "das",
      "word": "Lob"
    },
    {
      "article": "das",
      "word": "Logo"
    },
    {
      "article": "der",
      "word": "Lohn"
    },
    {
      "article": "das",
      "word": "Lokal"
    },
    {
      "article": "das",
      "word": "Los"
    },
    {
      "article": "das",
      "word": "Lotto"
    },
    {
      "article": "die",
      "word": "Lücke"
    },
    {
      "article": "die",
      "word": "Lüge"
    },
    {
      "article": "der",
      "word": "Lügner"
    },
    {
      "article": "die",
      "word": "Lunge"
    },
    {
      "article": "die",
      "word": "Lust"
    },
    {
      "article": "das",
      "word": "Magazin"
    },
    {
      "article": "das",
      "word": "Mal"
    },
    {
      "article": "der",
      "word": "Maler"
    },
    {
      "article": "der",
      "word": "Mantel"
    },
    {
      "article": "die",
      "word": "Marke"
    },
    {
      "article": "die",
      "word": "Marmelade"
    },
    {
      "article": "die",
      "word": "Maschine"
    },
    {
      "article": "die",
      "word": "Maske"
    },
    {
      "article": "das",
      "word": "Material"
    },
    {
      "article": "die",
      "word": "Matte"
    },
    {
      "article": "die",
      "word": "Mauer"
    },
    {
      "article": "das",
      "word": "Maul"
    },
    {
      "article": "die",
      "word": "Medizin"
    },
    {
      "article": "die",
      "word": "Meinung"
    },
    {
      "article": "der",
      "word": "Meister"
    },
    {
      "article": "die",
      "word": "Meldung"
    },
    {
      "article": "die",
      "word": "Melodie"
    },
    {
      "article": "die",
      "word": "Menge"
    },
    {
      "article": "das",
      "word": "Menü"
    },
    {
      "article": "das",
      "word": "Metall"
    },
    {
      "article": "die",
      "word": "Miete"
    },
    {
      "article": "der",
      "word": "Mieter"
    },
    {
      "article": "das",
      "word": "Mikrofon"
    },
    {
      "article": "die",
      "word": "Mine"
    },
    {
      "article": "das",
      "word": "Minus"
    },
    {
      "article": "der",
      "word": "Mist"
    },
    {
      "article": "der",
      "word": "Mitarbeiter"
    },
    {
      "article": "der",
      "word": "Mittag"
    },
    {
      "article": "das",
      "word": "Mittagessen"
    },
    {
      "article": "die",
      "word": "Mitte"
    },
    {
      "article": "das",
      "word": "Möbel"
    },
    {
      "article": "die",
      "word": "Mode"
    },
    {
      "article": "der",
      "word": "Moment"
    },
    {
      "article": "das",
      "word": "Monster"
    },
    {
      "article": "der",
      "word": "Motor"
    },
    {
      "article": "das",
      "word": "Motorrad"
    },
    {
      "article": "der",
      "word": "Mülleimer"
    },
    {
      "article": "das",
      "word": "Museum"
    },
    {
      "article": "der",
      "word": "Musiker"
    },
    {
      "article": "das",
      "word": "Muster"
    },
    {
      "article": "der",
      "word": "Mut"
    },
    {
      "article": "der",
      "word": "Nachteil"
    },
    {
      "article": "der",
      "word": "Nacken"
    },
    {
      "article": "die",
      "word": "Nadel"
    },
    {
      "article": "die",
      "word": "Nahrung"
    },
    {
      "article": "das",
      "word": "Nahrungsmittel"
    },
    {
      "article": "die",
      "word": "Natur"
    },
    {
      "article": "der",
      "word": "Nebel"
    },
    {
      "article": "der",
      "word": "Neffe"
    },
    {
      "article": "der",
      "word": "Nerv"
    },
    {
      "article": "die",
      "word": "Nichte"
    },
    {
      "article": "die",
      "word": "Niere"
    },
    {
      "article": "die",
      "word": "Note"
    },
    {
      "article": "das",
      "word": "Notebook"
    },
    {
      "article": "die",
      "word": "Notiz"
    },
    {
      "article": "der",
      "word": "Notruf"
    },
    {
      "article": "die",
      "word": "Nummer"
    },
    {
      "article": "die",
      "word": "Nuss"
    },
    {
      "article": "das",
      "word": "Objekt"
    },
    {
      "article": "die",
      "word": "Option"
    },
    {
      "article": "der",
      "word": "Ordner"
    },
    {
      "article": "die",
      "word": "Ordnung"
    },
    {
      "article": "der",
      "word": "Österreicher"
    },
    {
      "article": "der",
      "word": "Ozean"
    },
    {
      "article": "das",
      "word": "Paar"
    },
    {
      "article": "die",
      "word": "Packung"
    },
    {
      "article": "das",
      "word": "Paket"
    },
    {
      "article": "die",
      "word": "Palme"
    },
    {
      "article": "der",
      "word": "Park"
    },
    {
      "article": "der",
      "word": "Parkplatz"
    },
    {
      "article": "der",
      "word": "Partner"
    },
    {
      "article": "die",
      "word": "Party"
    },
    {
      "article": "der",
      "word": "Pass"
    },
    {
      "article": "der",
      "word": "Passagier"
    },
    {
      "article": "das",
      "word": "Passwort"
    },
    {
      "article": "der",
      "word": "Patient"
    },
    {
      "article": "das",
      "word": "Pech"
    },
    {
      "article": "die",
      "word": "Person"
    },
    {
      "article": "die",
      "word": "Pfanne"
    },
    {
      "article": "der",
      "word": "Pfeffer"
    },
    {
      "article": "der",
      "word": "Pfeil"
    },
    {
      "article": "das",
      "word": "Pflaster"
    },
    {
      "article": "die",
      "word": "Pille"
    },
    {
      "article": "der",
      "word": "Pilz"
    },
    {
      "article": "die",
      "word": "Pistole"
    },
    {
      "article": "das",
      "word": "Plakat"
    },
    {
      "article": "der",
      "word": "Plan"
    },
    {
      "article": "der",
      "word": "Planet"
    },
    {
      "article": "die",
      "word": "Platte"
    },
    {
      "article": "der",
      "word": "Pokal"
    },
    {
      "article": "das",
      "word": "Pony"
    },
    {
      "article": "der",
      "word": "Pool"
    },
    {
      "article": "die",
      "word": "Portion"
    },
    {
      "article": "die",
      "word": "Position"
    },
    {
      "article": "das",
      "word": "Poster"
    },
    {
      "article": "das",
      "word": "Praktikum"
    },
    {
      "article": "der",
      "word": "Präsident"
    },
    {
      "article": "der",
      "word": "Preis"
    },
    {
      "article": "der",
      "word": "Prinz"
    },
    {
      "article": "die",
      "word": "Prinzessin"
    },
    {
      "article": "das",
      "word": "Problem"
    },
    {
      "article": "das",
      "word": "Produkt"
    },
    {
      "article": "der",
      "word": "Professor"
    },
    {
      "article": "das",
      "word": "Programm"
    },
    {
      "article": "das",
      "word": "Projekt"
    },
    {
      "article": "das",
      "word": "Prozent"
    },
    {
      "article": "der",
      "word": "Pullover"
    },
    {
      "article": "die",
      "word": "Pumpe"
    },
    {
      "article": "das",
      "word": "Puzzle"
    },
    {
      "article": "das",
      "word": "Quadrat"
    },
    {
      "article": "der",
      "word": "Quark"
    },
    {
      "article": "die",
      "word": "Quelle"
    },
    {
      "article": "der",
      "word": "Rabatt"
    },
    {
      "article": "der",
      "word": "Rabe"
    },
    {
      "article": "der",
      "word": "Radfahrer"
    },
    {
      "article": "die",
      "word": "Rakete"
    },
    {
      "article": "der",
      "word": "Rap"
    },
    {
      "article": "der",
      "word": "Rasen"
    },
    {
      "article": "das",
      "word": "Rathaus"
    },
    {
      "article": "das",
      "word": "Rätsel"
    },
    {
      "article": "die",
      "word": "Ratte"
    },
    {
      "article": "der",
      "word": "Rauch"
    },
    {
      "article": "die",
      "word": "Reaktion"
    },
    {
      "article": "der",
      "word": "Rechner"
    },
    {
      "article": "die",
      "word": "Rechnung"
    },
    {
      "article": "das",
      "word": "Recht"
    },
    {
      "article": "die",
      "word": "Rede"
    },
    {
      "article": "die",
      "word": "Regel"
    },
    {
      "article": "der",
      "word": "Reifen"
    },
    {
      "article": "die",
      "word": "Reihe"
    },
    {
      "article": "der",
      "word": "Reiter"
    },
    {
      "article": "der",
      "word": "Rekord"
    },
    {
      "article": "die",
      "word": "Religion"
    },
    {
      "article": "der",
      "word": "Respekt"
    },
    {
      "article": "der",
      "word": "Rest"
    },
    {
      "article": "das",
      "word": "Restaurant"
    },
    {
      "article": "das",
      "word": "Rezept"
    },
    {
      "article": "der",
      "word": "Richter"
    },
    {
      "article": "die",
      "word": "Richtung"
    },
    {
      "article": "der",
      "word": "Ring"
    },
    {
      "article": "der",
      "word": "Roboter"
    },
    {
      "article": "der",
      "word": "Rock"
    },
    {
      "article": "das",
      "word": "Rohr"
    },
    {
      "article": "die",
      "word": "Röhre"
    },
    {
      "article": "die",
      "word": "Rolle"
    },
    {
      "article": "der",
      "word": "Roman"
    },
    {
      "article": "die",
      "word": "Rose"
    },
    {
      "article": "der",
      "word": "Rücken"
    },
    {
      "article": "der",
      "word": "Rucksack"
    },
    {
      "article": "das",
      "word": "Ruder"
    },
    {
      "article": "der",
      "word": "Ruf"
    },
    {
      "article": "die",
      "word": "Sache"
    },
    {
      "article": "der",
      "word": "Sack"
    },
    {
      "article": "die",
      "word": "Sahne"
    },
    {
      "article": "der",
      "word": "Sand"
    },
    {
      "article": "der",
      "word": "Satz"
    },
    {
      "article": "die",
      "word": "Schachtel"
    },
    {
      "article": "der",
      "word": "Schaden"
    },
    {
      "article": "der",
      "word": "Schal"
    },
    {
      "article": "der",
      "word": "Schalter"
    },
    {
      "article": "der",
      "word": "Schatten"
    },
    {
      "article": "der",
      "word": "Schatz"
    },
    {
      "article": "das",
      "word": "Schaufenster"
    },
    {
      "article": "die",
      "word": "Schaukel"
    },
    {
      "article": "der",
      "word": "Schauspieler"
    },
    {
      "article": "die",
      "word": "Schauspielerin"
    },
    {
      "article": "die",
      "word": "Scheibe"
    },
    {
      "article": "die",
      "word": "Schere"
    },
    {
      "article": "die",
      "word": "Schiene"
    },
    {
      "article": "das",
      "word": "Schild"
    },
    {
      "article": "die",
      "word": "Schildkröte"
    },
    {
      "article": "der",
      "word": "Schmerz"
    },
    {
      "article": "der",
      "word": "Schmutz"
    },
    {
      "article": "der",
      "word": "Schnaps"
    },
    {
      "article": "die",
      "word": "Schnecke"
    },
    {
      "article": "der",
      "word": "Schrank"
    },
    {
      "article": "die",
      "word": "Schraube"
    },
    {
      "article": "der",
      "word": "Schrei"
    },
    {
      "article": "der",
      "word": "Schreibtisch"
    },
    {
      "article": "der",
      "word": "Schritt"
    },
    {
      "article": "die",
      "word": "Schublade"
    },
    {
      "article": "der",
      "word": "Schuss"
    },
    {
      "article": "die",
      "word": "Schüssel"
    },
    {
      "article": "der",
      "word": "Schutz"
    },
    {
      "article": "der",
      "word": "Schwan"
    },
    {
      "article": "die",
      "word": "Schwangerschaft"
    },
    {
      "article": "der",
      "word": "Schwanz"
    },
    {
      "article": "das",
      "word": "Schwert"
    },
    {
      "article": "das",
      "word": "Schwimmen"
    },
    {
      "article": "der",
      "word": "See"
    },
    {
      "article": "das",
      "word": "Segel"
    },
    {
      "article": "das",
      "word": "Seil"
    },
    {
      "article": "der",
      "word": "Sekretär"
    },
    {
      "article": "der",
      "word": "Sekt"
    },
    {
      "article": "das",
      "word": "Semester"
    },
    {
      "article": "das",
      "word": "Seminar"
    },
    {
      "article": "der",
      "word": "Sender"
    },
    {
      "article": "der",
      "word": "Sessel"
    },
    {
      "article": "die",
      "word": "Sicherheit"
    },
    {
      "article": "das",
      "word": "Sieb"
    },
    {
      "article": "der",
      "word": "Sieg"
    },
    {
      "article": "das",
      "word": "Signal"
    },
    {
      "article": "das",
      "word": "Silber"
    },
    {
      "article": "der",
      "word": "Sinn"
    },
    {
      "article": "die",
      "word": "Situation"
    },
    {
      "article": "der",
      "word": "Sitz"
    },
    {
      "article": "der",
      "word": "Ski"
    },
    {
      "article": "das",
      "word": "Smartphone"
    },
    {
      "article": "der",
      "word": "Soldat"
    },
    {
      "article": "der",
      "word": "Sonnenaufgang"
    },
    {
      "article": "die",
      "word": "Soße"
    },
    {
      "article": "der",
      "word": "Spanier"
    },
    {
      "article": "das",
      "word": "Spanisch"
    },
    {
      "article": "der",
      "word": "Spargel"
    },
    {
      "article": "der",
      "word": "Spaziergang"
    },
    {
      "article": "die",
      "word": "Spende"
    },
    {
      "article": "der",
      "word": "Spinat"
    },
    {
      "article": "die",
      "word": "Spinne"
    },
    {
      "article": "der",
      "word": "Sport"
    },
    {
      "article": "der",
      "word": "Sportler"
    },
    {
      "article": "der",
      "word": "Sprecher"
    },
    {
      "article": "die",
      "word": "Sprecherin"
    },
    {
      "article": "die",
      "word": "Spritze"
    },
    {
      "article": "das",
      "word": "Stadion"
    },
    {
      "article": "der",
      "word": "Stall"
    },
    {
      "article": "die",
      "word": "Stange"
    },
    {
      "article": "der",
      "word": "Stau"
    },
    {
      "article": "die",
      "word": "Steckdose"
    },
    {
      "article": "der",
      "word": "Stecker"
    },
    {
      "article": "der",
      "word": "Stein"
    },
    {
      "article": "der",
      "word": "Stiefel"
    }
  ],
  "B1": [
    {
      "article": "der",
      "word": "Aal"
    },
    {
      "article": "die",
      "word": "Abfahrt"
    },
    {
      "article": "der",
      "word": "Abflug"
    },
    {
      "article": "die",
      "word": "Abgabe"
    },
    {
      "article": "der",
      "word": "Abgeordnete"
    },
    {
      "article": "die",
      "word": "Abkürzung"
    },
    {
      "article": "das",
      "word": "Abonnement"
    },
    {
      "article": "der",
      "word": "Abschied"
    },
    {
      "article": "der",
      "word": "Abschluss"
    },
    {
      "article": "der",
      "word": "Abschnitt"
    },
    {
      "article": "der",
      "word": "Absender"
    },
    {
      "article": "die",
      "word": "Abstimmung"
    },
    {
      "article": "die",
      "word": "Abteilung"
    },
    {
      "article": "die",
      "word": "Abwesenheit"
    },
    {
      "article": "die",
      "word": "Achse"
    },
    {
      "article": "die",
      "word": "Achtung"
    },
    {
      "article": "der",
      "word": "Agent"
    },
    {
      "article": "die",
      "word": "Agentur"
    },
    {
      "article": "der",
      "word": "Ägypter"
    },
    {
      "article": "der",
      "word": "Alarm"
    },
    {
      "article": "der",
      "word": "Albtraum"
    },
    {
      "article": "die",
      "word": "Altstadt"
    },
    {
      "article": "der",
      "word": "Amateur"
    },
    {
      "article": "der",
      "word": "Anbieter"
    },
    {
      "article": "die",
      "word": "Anfrage"
    },
    {
      "article": "die",
      "word": "Angelegenheit"
    },
    {
      "article": "der",
      "word": "Angestellte"
    },
    {
      "article": "der",
      "word": "Angriff"
    },
    {
      "article": "der",
      "word": "Anker"
    },
    {
      "article": "die",
      "word": "Ankündigung"
    },
    {
      "article": "die",
      "word": "Anlage"
    },
    {
      "article": "die",
      "word": "Anleitung"
    },
    {
      "article": "der",
      "word": "Anschluss"
    },
    {
      "article": "das",
      "word": "Antibiotikum"
    },
    {
      "article": "der",
      "word": "Antrag"
    },
    {
      "article": "die",
      "word": "Anwesenheit"
    },
    {
      "article": "die",
      "word": "Anzahl"
    },
    {
      "article": "die",
      "word": "Anzahlung"
    },
    {
      "article": "das",
      "word": "Aquarium"
    },
    {
      "article": "der",
      "word": "Araber"
    },
    {
      "article": "der",
      "word": "Arbeitgeber"
    },
    {
      "article": "der",
      "word": "Arbeitnehmer"
    },
    {
      "article": "das",
      "word": "Arbeitsamt"
    },
    {
      "article": "die",
      "word": "Armee"
    },
    {
      "article": "die",
      "word": "Armut"
    },
    {
      "article": "das",
      "word": "Aroma"
    },
    {
      "article": "das",
      "word": "Arzneimittel"
    },
    {
      "article": "der",
      "word": "Atem"
    },
    {
      "article": "der",
      "word": "Athlet"
    },
    {
      "article": "der",
      "word": "Aufbau"
    },
    {
      "article": "der",
      "word": "Aufenthalt"
    },
    {
      "article": "die",
      "word": "Auflage"
    },
    {
      "article": "die",
      "word": "Auflistung"
    },
    {
      "article": "die",
      "word": "Aufmerksamkeit"
    },
    {
      "article": "die",
      "word": "Aufnahme"
    },
    {
      "article": "der",
      "word": "Aufprall"
    },
    {
      "article": "die",
      "word": "Aufregung"
    },
    {
      "article": "die",
      "word": "Aufsicht"
    },
    {
      "article": "die",
      "word": "Aufstellung"
    },
    {
      "article": "der",
      "word": "Aufstieg"
    },
    {
      "article": "der",
      "word": "Auftakt"
    },
    {
      "article": "die",
      "word": "Ausdauer"
    },
    {
      "article": "der",
      "word": "Ausdruck"
    },
    {
      "article": "die",
      "word": "Auskunft"
    },
    {
      "article": "die",
      "word": "Aussage"
    },
    {
      "article": "die",
      "word": "Aussicht"
    },
    {
      "article": "die",
      "word": "Ausstellung"
    },
    {
      "article": "die",
      "word": "Auswahl"
    },
    {
      "article": "der",
      "word": "Ausweis"
    },
    {
      "article": "das",
      "word": "Autogramm"
    },
    {
      "article": "der",
      "word": "Automat"
    },
    {
      "article": "der",
      "word": "Bach"
    },
    {
      "article": "der",
      "word": "Ballon"
    },
    {
      "article": "das",
      "word": "Bargeld"
    },
    {
      "article": "der",
      "word": "Bau"
    },
    {
      "article": "die",
      "word": "Baumwolle"
    },
    {
      "article": "die",
      "word": "Baustelle"
    },
    {
      "article": "die",
      "word": "Bedeutung"
    },
    {
      "article": "das",
      "word": "Bedürfnis"
    },
    {
      "article": "die",
      "word": "Beerdigung"
    },
    {
      "article": "der",
      "word": "Befehl"
    },
    {
      "article": "der",
      "word": "Begriff"
    },
    {
      "article": "die",
      "word": "Behandlung"
    },
    {
      "article": "die",
      "word": "Behinderung"
    },
    {
      "article": "die",
      "word": "Behörde"
    },
    {
      "article": "der",
      "word": "Beitrag"
    },
    {
      "article": "die",
      "word": "Beleuchtung"
    },
    {
      "article": "die",
      "word": "Belohnung"
    },
    {
      "article": "die",
      "word": "Bemerkung"
    },
    {
      "article": "der",
      "word": "Benutzer"
    },
    {
      "article": "die",
      "word": "Benutzung"
    },
    {
      "article": "der",
      "word": "Berater"
    },
    {
      "article": "der",
      "word": "Bereich"
    },
    {
      "article": "der",
      "word": "Bericht"
    },
    {
      "article": "der",
      "word": "Besitz"
    },
    {
      "article": "der",
      "word": "Besitzer"
    },
    {
      "article": "der",
      "word": "Beutel"
    },
    {
      "article": "die",
      "word": "Bezahlung"
    },
    {
      "article": "die",
      "word": "Bibel"
    },
    {
      "article": "der",
      "word": "Biber"
    },
    {
      "article": "die",
      "word": "Bildung"
    },
    {
      "article": "die",
      "word": "Biologie"
    },
    {
      "article": "der",
      "word": "Biss"
    },
    {
      "article": "die",
      "word": "Blase"
    },
    {
      "article": "das",
      "word": "Blech"
    },
    {
      "article": "das",
      "word": "Blog"
    },
    {
      "article": "der",
      "word": "Bonus"
    },
    {
      "article": "die",
      "word": "Börse"
    },
    {
      "article": "die",
      "word": "Botschaft"
    },
    {
      "article": "das",
      "word": "Boxen"
    },
    {
      "article": "die",
      "word": "Branche"
    },
    {
      "article": "der",
      "word": "Brite"
    },
    {
      "article": "die",
      "word": "Bücherei"
    },
    {
      "article": "die",
      "word": "Bude"
    },
    {
      "article": "der",
      "word": "Bügel"
    },
    {
      "article": "die",
      "word": "Bühne"
    },
    {
      "article": "der",
      "word": "Bunker"
    },
    {
      "article": "der",
      "word": "Bürger"
    },
    {
      "article": "der",
      "word": "Bürgermeister"
    },
    {
      "article": "der",
      "word": "Bursche"
    },
    {
      "article": "das",
      "word": "Café"
    },
    {
      "article": "das",
      "word": "Camp"
    },
    {
      "article": "das",
      "word": "Camping"
    },
    {
      "article": "das",
      "word": "Casino"
    },
    {
      "article": "der",
      "word": "Champion"
    },
    {
      "article": "die",
      "word": "Chance"
    },
    {
      "article": "der",
      "word": "Check"
    },
    {
      "article": "die",
      "word": "Chefin"
    },
    {
      "article": "der",
      "word": "Chip"
    },
    {
      "article": "der",
      "word": "Chor"
    },
    {
      "article": "der",
      "word": "Clown"
    },
    {
      "article": "der",
      "word": "Club"
    },
    {
      "article": "der",
      "word": "Comic"
    },
    {
      "article": "die",
      "word": "Couch"
    },
    {
      "article": "der",
      "word": "Damm"
    },
    {
      "article": "der",
      "word": "Dank"
    },
    {
      "article": "der",
      "word": "Darm"
    },
    {
      "article": "der",
      "word": "Darsteller"
    },
    {
      "article": "die",
      "word": "Datei"
    },
    {
      "article": "die",
      "word": "Dauer"
    },
    {
      "article": "das",
      "word": "Deck"
    },
    {
      "article": "der",
      "word": "Defekt"
    },
    {
      "article": "die",
      "word": "Demokratie"
    },
    {
      "article": "der",
      "word": "Designer"
    },
    {
      "article": "der",
      "word": "Detektiv"
    },
    {
      "article": "das",
      "word": "Deutsch"
    },
    {
      "article": "der",
      "word": "Deutsche"
    },
    {
      "article": "der",
      "word": "Dialog"
    },
    {
      "article": "der",
      "word": "Dichter"
    },
    {
      "article": "der",
      "word": "Dieb"
    },
    {
      "article": "der",
      "word": "Diener"
    },
    {
      "article": "der",
      "word": "Dienst"
    },
    {
      "article": "der",
      "word": "Diktator"
    },
    {
      "article": "der",
      "word": "Dinosaurier"
    },
    {
      "article": "das",
      "word": "Diplom"
    },
    {
      "article": "der",
      "word": "Direktor"
    },
    {
      "article": "die",
      "word": "Disco"
    },
    {
      "article": "der",
      "word": "Dom"
    },
    {
      "article": "der",
      "word": "Dorfbewohner"
    },
    {
      "article": "der",
      "word": "Draht"
    },
    {
      "article": "das",
      "word": "Drama"
    },
    {
      "article": "der",
      "word": "Dreck"
    },
    {
      "article": "das",
      "word": "Drittel"
    },
    {
      "article": "die",
      "word": "Droge"
    },
    {
      "article": "die",
      "word": "Drohung"
    },
    {
      "article": "der",
      "word": "Duft"
    },
    {
      "article": "die",
      "word": "Ebene"
    },
    {
      "article": "die",
      "word": "ec-Karte"
    },
    {
      "article": "das",
      "word": "Echo"
    },
    {
      "article": "der",
      "word": "Effekt"
    },
    {
      "article": "der",
      "word": "Ehepartner"
    },
    {
      "article": "die",
      "word": "Eiche"
    },
    {
      "article": "die",
      "word": "Eigenschaft"
    },
    {
      "article": "das",
      "word": "Eigentum"
    },
    {
      "article": "der",
      "word": "Eigentümer"
    },
    {
      "article": "die",
      "word": "Eile"
    },
    {
      "article": "die",
      "word": "Einfahrt"
    },
    {
      "article": "der",
      "word": "Einfall"
    },
    {
      "article": "die",
      "word": "Einführung"
    },
    {
      "article": "die",
      "word": "Eingabe"
    },
    {
      "article": "der",
      "word": "Eingang"
    },
    {
      "article": "die",
      "word": "Einheit"
    },
    {
      "article": "die",
      "word": "Einrichtung"
    },
    {
      "article": "der",
      "word": "Einsatz"
    },
    {
      "article": "die",
      "word": "Einstellung"
    },
    {
      "article": "der",
      "word": "Eintritt"
    },
    {
      "article": "die",
      "word": "Einwanderung"
    },
    {
      "article": "der",
      "word": "Einzelhandel"
    },
    {
      "article": "das",
      "word": "Einzelzimmer"
    },
    {
      "article": "die",
      "word": "Eisenbahn"
    },
    {
      "article": "das",
      "word": "Elektroauto"
    },
    {
      "article": "der",
      "word": "Ellbogen"
    },
    {
      "article": "der",
      "word": "Empfang"
    },
    {
      "article": "der",
      "word": "Empfänger"
    },
    {
      "article": "der",
      "word": "Engländer"
    },
    {
      "article": "die",
      "word": "Entdeckung"
    },
    {
      "article": "die",
      "word": "Entfernung"
    },
    {
      "article": "die",
      "word": "Entscheidung"
    },
    {
      "article": "die",
      "word": "Enttäuschung"
    },
    {
      "article": "die",
      "word": "Entwicklung"
    },
    {
      "article": "der",
      "word": "Entwurf"
    },
    {
      "article": "die",
      "word": "Erfahrung"
    },
    {
      "article": "der",
      "word": "Erfinder"
    },
    {
      "article": "die",
      "word": "Erfindung"
    },
    {
      "article": "die",
      "word": "Ergänzung"
    },
    {
      "article": "die",
      "word": "Erinnerung"
    },
    {
      "article": "die",
      "word": "Erklärung"
    },
    {
      "article": "die",
      "word": "Erlaubnis"
    },
    {
      "article": "das",
      "word": "Erlebnis"
    },
    {
      "article": "die",
      "word": "Erleichterung"
    },
    {
      "article": "die",
      "word": "Ernährung"
    },
    {
      "article": "die",
      "word": "Ernte"
    },
    {
      "article": "der",
      "word": "Erzähler"
    },
    {
      "article": "der",
      "word": "Esel"
    },
    {
      "article": "das",
      "word": "Experiment"
    },
    {
      "article": "der",
      "word": "Export"
    },
    {
      "article": "das",
      "word": "Extra"
    },
    {
      "article": "der",
      "word": "Fakt"
    },
    {
      "article": "der",
      "word": "Faktor"
    },
    {
      "article": "die",
      "word": "Falle"
    },
    {
      "article": "die",
      "word": "Fantasie"
    },
    {
      "article": "der",
      "word": "Favorit"
    },
    {
      "article": "das",
      "word": "Fernsehen"
    },
    {
      "article": "das",
      "word": "Festival"
    },
    {
      "article": "die",
      "word": "Feuerwehr"
    },
    {
      "article": "der",
      "word": "Filter"
    },
    {
      "article": "die",
      "word": "Fitness"
    },
    {
      "article": "die",
      "word": "Fläche"
    },
    {
      "article": "die",
      "word": "Folge"
    },
    {
      "article": "die",
      "word": "Formel"
    },
    {
      "article": "das",
      "word": "Forum"
    },
    {
      "article": "die",
      "word": "Fracht"
    },
    {
      "article": "der",
      "word": "Fremde"
    },
    {
      "article": "der",
      "word": "Frieden"
    },
    {
      "article": "die",
      "word": "Frist"
    },
    {
      "article": "die",
      "word": "Front"
    },
    {
      "article": "der",
      "word": "Fund"
    },
    {
      "article": "der",
      "word": "Funk"
    },
    {
      "article": "der",
      "word": "Funke"
    },
    {
      "article": "die",
      "word": "Funktion"
    },
    {
      "article": "der",
      "word": "Gang"
    },
    {
      "article": "der",
      "word": "Gastgeber"
    },
    {
      "article": "das",
      "word": "Gebäck"
    },
    {
      "article": "die",
      "word": "Gebühr"
    },
    {
      "article": "die",
      "word": "Geburt"
    },
    {
      "article": "das",
      "word": "Gedicht"
    },
    {
      "article": "die",
      "word": "Geduld"
    },
    {
      "article": "die",
      "word": "Gefahr"
    },
    {
      "article": "das",
      "word": "Gefängnis"
    },
    {
      "article": "die",
      "word": "Gegenwart"
    },
    {
      "article": "das",
      "word": "Gehäuse"
    },
    {
      "article": "das",
      "word": "Gelände"
    },
    {
      "article": "die",
      "word": "Gelegenheit"
    },
    {
      "article": "der",
      "word": "Geliebte"
    },
    {
      "article": "das",
      "word": "Gemälde"
    },
    {
      "article": "die",
      "word": "Gemeinde"
    },
    {
      "article": "die",
      "word": "Gemeinschaft"
    },
    {
      "article": "der",
      "word": "General"
    },
    {
      "article": "das",
      "word": "Gerücht"
    },
    {
      "article": "das",
      "word": "Gerüst"
    },
    {
      "article": "der",
      "word": "Gesang"
    },
    {
      "article": "die",
      "word": "Gesellschaft"
    },
    {
      "article": "das",
      "word": "Getreide"
    },
    {
      "article": "das",
      "word": "Gewächshaus"
    },
    {
      "article": "das",
      "word": "Gewehr"
    },
    {
      "article": "das",
      "word": "Gewerbe"
    },
    {
      "article": "die",
      "word": "Gewerkschaft"
    },
    {
      "article": "die",
      "word": "Gleichung"
    },
    {
      "article": "der",
      "word": "Griff"
    },
    {
      "article": "der",
      "word": "Grill"
    },
    {
      "article": "die",
      "word": "Grippe"
    },
    {
      "article": "die",
      "word": "Größe"
    },
    {
      "article": "die",
      "word": "Grube"
    },
    {
      "article": "der",
      "word": "Gründer"
    },
    {
      "article": "das",
      "word": "Grundgesetz"
    },
    {
      "article": "der",
      "word": "Hacker"
    },
    {
      "article": "der",
      "word": "Hagel"
    },
    {
      "article": "das",
      "word": "Halbfinale"
    },
    {
      "article": "die",
      "word": "Halbzeit"
    },
    {
      "article": "der",
      "word": "Halt"
    },
    {
      "article": "der",
      "word": "Handel"
    },
    {
      "article": "der",
      "word": "Händler"
    },
    {
      "article": "die",
      "word": "Handlung"
    },
    {
      "article": "das",
      "word": "Handwerk"
    },
    {
      "article": "der",
      "word": "Hanf"
    },
    {
      "article": "der",
      "word": "Hang"
    },
    {
      "article": "die",
      "word": "Haube"
    },
    {
      "article": "der",
      "word": "Haufen"
    },
    {
      "article": "die",
      "word": "Hauptsache"
    },
    {
      "article": "der",
      "word": "Haushalt"
    },
    {
      "article": "das",
      "word": "Heim"
    },
    {
      "article": "die",
      "word": "Heimat"
    },
    {
      "article": "die",
      "word": "Heizung"
    },
    {
      "article": "der",
      "word": "Helfer"
    },
    {
      "article": "der",
      "word": "Hersteller"
    },
    {
      "article": "das",
      "word": "Heu"
    },
    {
      "article": "der",
      "word": "Hintergrund"
    },
    {
      "article": "der",
      "word": "Hinweis"
    },
    {
      "article": "das",
      "word": "Hirn"
    },
    {
      "article": "die",
      "word": "Höflichkeit"
    },
    {
      "article": "die",
      "word": "Hölle"
    },
    {
      "article": "der",
      "word": "Hörer"
    },
    {
      "article": "der",
      "word": "Horizont"
    },
    {
      "article": "das",
      "word": "Hormon"
    },
    {
      "article": "das",
      "word": "Horoskop"
    },
    {
      "article": "der",
      "word": "Horror"
    },
    {
      "article": "der",
      "word": "Hörsaal"
    },
    {
      "article": "die",
      "word": "Hüfte"
    },
    {
      "article": "die",
      "word": "Hülle"
    },
    {
      "article": "der",
      "word": "Hummer"
    },
    {
      "article": "die",
      "word": "Hürde"
    },
    {
      "article": "das",
      "word": "Idol"
    },
    {
      "article": "der",
      "word": "Indianer"
    },
    {
      "article": "die",
      "word": "Industrie"
    },
    {
      "article": "der",
      "word": "Inhalt"
    },
    {
      "article": "das",
      "word": "Interview"
    },
    {
      "article": "der",
      "word": "Islam"
    },
    {
      "article": "der",
      "word": "Italiener"
    },
    {
      "article": "der",
      "word": "Jäger"
    },
    {
      "article": "das",
      "word": "Jahrhundert"
    },
    {
      "article": "das",
      "word": "Jahrzehnt"
    },
    {
      "article": "das",
      "word": "Japanisch"
    },
    {
      "article": "der",
      "word": "Jet"
    },
    {
      "article": "der",
      "word": "Journalist"
    },
    {
      "article": "der",
      "word": "Jugendliche"
    },
    {
      "article": "der",
      "word": "Kandidat"
    },
    {
      "article": "der",
      "word": "Kanzler"
    },
    {
      "article": "der",
      "word": "Kapitän"
    },
    {
      "article": "das",
      "word": "Karate"
    },
    {
      "article": "der",
      "word": "Katalog"
    },
    {
      "article": "der",
      "word": "Kauf"
    },
    {
      "article": "der",
      "word": "Kegel"
    },
    {
      "article": "die",
      "word": "Kehle"
    },
    {
      "article": "der",
      "word": "Kerl"
    },
    {
      "article": "der",
      "word": "Kern"
    },
    {
      "article": "das",
      "word": "Kilogramm"
    },
    {
      "article": "die",
      "word": "Kindheit"
    },
    {
      "article": "der",
      "word": "Klang"
    },
    {
      "article": "der",
      "word": "Klick"
    },
    {
      "article": "das",
      "word": "Klima"
    },
    {
      "article": "die",
      "word": "Klinge"
    },
    {
      "article": "das",
      "word": "Kloster"
    },
    {
      "article": "der",
      "word": "Klub"
    },
    {
      "article": "der",
      "word": "Knabe"
    },
    {
      "article": "der",
      "word": "Knall"
    },
    {
      "article": "der",
      "word": "Knast"
    },
    {
      "article": "der",
      "word": "Knöchel"
    },
    {
      "article": "die",
      "word": "Kohle"
    },
    {
      "article": "die",
      "word": "Kolonie"
    },
    {
      "article": "der",
      "word": "Komfort"
    },
    {
      "article": "der",
      "word": "Kommentar"
    },
    {
      "article": "das",
      "word": "Kondom"
    },
    {
      "article": "der",
      "word": "Konflikt"
    },
    {
      "article": "das",
      "word": "Königreich"
    },
    {
      "article": "der",
      "word": "Konsum"
    },
    {
      "article": "das",
      "word": "Konzept"
    },
    {
      "article": "die",
      "word": "Korrektur"
    },
    {
      "article": "der",
      "word": "Korridor"
    },
    {
      "article": "das",
      "word": "Kraftwerk"
    },
    {
      "article": "der",
      "word": "Krampf"
    },
    {
      "article": "der",
      "word": "Kranke"
    },
    {
      "article": "der",
      "word": "Kredit"
    },
    {
      "article": "die",
      "word": "Kreide"
    },
    {
      "article": "der",
      "word": "Krimi"
    },
    {
      "article": "der",
      "word": "Kriminelle"
    },
    {
      "article": "die",
      "word": "Krise"
    },
    {
      "article": "die",
      "word": "Kritik"
    },
    {
      "article": "der",
      "word": "Kritiker"
    },
    {
      "article": "die",
      "word": "Kultur"
    },
    {
      "article": "der",
      "word": "Kumpel"
    },
    {
      "article": "die",
      "word": "Kunst"
    },
    {
      "article": "der",
      "word": "Künstler"
    },
    {
      "article": "die",
      "word": "Kur"
    },
    {
      "article": "das",
      "word": "Labor"
    },
    {
      "article": "die",
      "word": "Lage"
    },
    {
      "article": "das",
      "word": "Lager"
    },
    {
      "article": "die",
      "word": "Landschaft"
    },
    {
      "article": "der",
      "word": "Landwirt"
    },
    {
      "article": "die",
      "word": "Landwirtschaft"
    },
    {
      "article": "der",
      "word": "Lärm"
    },
    {
      "article": "die",
      "word": "Last"
    },
    {
      "article": "der",
      "word": "Laster"
    },
    {
      "article": "die",
      "word": "Latte"
    },
    {
      "article": "die",
      "word": "Lautstärke"
    },
    {
      "article": "das",
      "word": "Lebewesen"
    },
    {
      "article": "das",
      "word": "Leck"
    },
    {
      "article": "die",
      "word": "Leere"
    },
    {
      "article": "die",
      "word": "Lehre"
    },
    {
      "article": "das",
      "word": "Leid"
    },
    {
      "article": "die",
      "word": "Leiter"
    },
    {
      "article": "das",
      "word": "Lesen"
    },
    {
      "article": "das",
      "word": "Lexikon"
    },
    {
      "article": "der",
      "word": "Lieferant"
    },
    {
      "article": "die",
      "word": "Liga"
    },
    {
      "article": "der",
      "word": "Lkw"
    },
    {
      "article": "der",
      "word": "Lokführer"
    },
    {
      "article": "die",
      "word": "Lösung"
    },
    {
      "article": "die",
      "word": "Lotterie"
    },
    {
      "article": "die",
      "word": "Macht"
    },
    {
      "article": "das",
      "word": "Make-up"
    },
    {
      "article": "der",
      "word": "Manager"
    },
    {
      "article": "das",
      "word": "Männchen"
    },
    {
      "article": "die",
      "word": "Mannschaft"
    },
    {
      "article": "der",
      "word": "Marathon"
    },
    {
      "article": "der",
      "word": "Mars"
    },
    {
      "article": "die",
      "word": "Maßnahme"
    },
    {
      "article": "das",
      "word": "Match"
    },
    {
      "article": "die",
      "word": "Mathematik"
    },
    {
      "article": "der",
      "word": "Maulwurf"
    },
    {
      "article": "der",
      "word": "Mechaniker"
    },
    {
      "article": "die",
      "word": "Medaille"
    },
    {
      "article": "das",
      "word": "Medikament"
    },
    {
      "article": "die",
      "word": "Mehrheit"
    },
    {
      "article": "die",
      "word": "Mehrwertsteuer"
    },
    {
      "article": "das",
      "word": "Merkmal"
    },
    {
      "article": "die",
      "word": "Messe"
    },
    {
      "article": "die",
      "word": "Messung"
    },
    {
      "article": "die",
      "word": "Methode"
    },
    {
      "article": "die",
      "word": "Miene"
    },
    {
      "article": "das",
      "word": "Mikroskop"
    },
    {
      "article": "das",
      "word": "Militär"
    },
    {
      "article": "die",
      "word": "Milliarde"
    },
    {
      "article": "die",
      "word": "Million"
    },
    {
      "article": "der",
      "word": "Mindestlohn"
    },
    {
      "article": "der",
      "word": "Minister"
    },
    {
      "article": "die",
      "word": "Mischung"
    },
    {
      "article": "die",
      "word": "Mission"
    },
    {
      "article": "das",
      "word": "Mitglied"
    },
    {
      "article": "die",
      "word": "Möglichkeit"
    },
    {
      "article": "der",
      "word": "Monitor"
    },
    {
      "article": "der",
      "word": "Mord"
    },
    {
      "article": "der",
      "word": "Mörder"
    },
    {
      "article": "die",
      "word": "Moschee"
    },
    {
      "article": "das",
      "word": "Motiv"
    },
    {
      "article": "das",
      "word": "Motto"
    },
    {
      "article": "die",
      "word": "Mühe"
    },
    {
      "article": "die",
      "word": "Mühle"
    },
    {
      "article": "der",
      "word": "Müll"
    },
    {
      "article": "die",
      "word": "Münze"
    },
    {
      "article": "die",
      "word": "Muschel"
    },
    {
      "article": "das",
      "word": "Musical"
    },
    {
      "article": "die",
      "word": "Nachfrage"
    },
    {
      "article": "die",
      "word": "Nation"
    },
    {
      "article": "das",
      "word": "Netz"
    },
    {
      "article": "der",
      "word": "Neubau"
    },
    {
      "article": "der",
      "word": "Nichtraucher"
    },
    {
      "article": "die",
      "word": "Niederlage"
    },
    {
      "article": "die",
      "word": "Nische"
    },
    {
      "article": "die",
      "word": "Not"
    },
    {
      "article": "der",
      "word": "Notfall"
    },
    {
      "article": "der",
      "word": "Nutzer"
    },
    {
      "article": "die",
      "word": "Oase"
    },
    {
      "article": "die",
      "word": "Oberfläche"
    },
    {
      "article": "der",
      "word": "Oberkörper"
    },
    {
      "article": "der",
      "word": "Oberschenkel"
    },
    {
      "article": "der",
      "word": "Offizier"
    },
    {
      "article": "die",
      "word": "Öffnung"
    },
    {
      "article": "die",
      "word": "Oper"
    },
    {
      "article": "das",
      "word": "Opfer"
    },
    {
      "article": "das",
      "word": "Orchester"
    },
    {
      "article": "das",
      "word": "Organ"
    },
    {
      "article": "die",
      "word": "Organisation"
    },
    {
      "article": "die",
      "word": "Orgel"
    },
    {
      "article": "die",
      "word": "Orientierung"
    },
    {
      "article": "das",
      "word": "Original"
    },
    {
      "article": "der",
      "word": "Palast"
    },
    {
      "article": "die",
      "word": "Panik"
    },
    {
      "article": "die",
      "word": "Panne"
    },
    {
      "article": "der",
      "word": "Panther"
    },
    {
      "article": "der",
      "word": "Panzer"
    },
    {
      "article": "der",
      "word": "Papagei"
    },
    {
      "article": "die",
      "word": "Pappe"
    },
    {
      "article": "das",
      "word": "Parlament"
    },
    {
      "article": "die",
      "word": "Partei"
    },
    {
      "article": "die",
      "word": "Pasta"
    },
    {
      "article": "die",
      "word": "Pension"
    },
    {
      "article": "der",
      "word": "Pfarrer"
    },
    {
      "article": "die",
      "word": "Pflege"
    },
    {
      "article": "der",
      "word": "Pfleger"
    },
    {
      "article": "die",
      "word": "Pflicht"
    },
    {
      "article": "das",
      "word": "Pfund"
    },
    {
      "article": "der",
      "word": "Pilot"
    },
    {
      "article": "der",
      "word": "Pinguin"
    },
    {
      "article": "der",
      "word": "Pinsel"
    },
    {
      "article": "die",
      "word": "Piste"
    },
    {
      "article": "die",
      "word": "Pleite"
    },
    {
      "article": "das",
      "word": "Plus"
    },
    {
      "article": "die",
      "word": "Politik"
    },
    {
      "article": "das",
      "word": "Portal"
    },
    {
      "article": "das",
      "word": "Porzellan"
    },
    {
      "article": "die",
      "word": "Post"
    },
    {
      "article": "die",
      "word": "Präsentation"
    },
    {
      "article": "der",
      "word": "Priester"
    },
    {
      "article": "das",
      "word": "Prinzip"
    },
    {
      "article": "die",
      "word": "Probe"
    },
    {
      "article": "die",
      "word": "Produktion"
    },
    {
      "article": "der",
      "word": "Profi"
    },
    {
      "article": "das",
      "word": "Profil"
    },
    {
      "article": "der",
      "word": "Protest"
    },
    {
      "article": "das",
      "word": "Protokoll"
    }
  ],
  "B2": [
    {
      "article": "die",
      "word": "Abbildung"
    },
    {
      "article": "der",
      "word": "Abbruch"
    },
    {
      "article": "der",
      "word": "Abfluss"
    },
    {
      "article": "die",
      "word": "Abfrage"
    },
    {
      "article": "der",
      "word": "Abgrund"
    },
    {
      "article": "das",
      "word": "Abkommen"
    },
    {
      "article": "die",
      "word": "Ablage"
    },
    {
      "article": "der",
      "word": "Ablauf"
    },
    {
      "article": "die",
      "word": "Abneigung"
    },
    {
      "article": "der",
      "word": "Absatz"
    },
    {
      "article": "der",
      "word": "Abstieg"
    },
    {
      "article": "der",
      "word": "Absturz"
    },
    {
      "article": "die",
      "word": "Abtreibung"
    },
    {
      "article": "die",
      "word": "Abwehr"
    },
    {
      "article": "die",
      "word": "Acht"
    },
    {
      "article": "die",
      "word": "Addition"
    },
    {
      "article": "der",
      "word": "Administrator"
    },
    {
      "article": "die",
      "word": "Adoption"
    },
    {
      "article": "die",
      "word": "Affäre"
    },
    {
      "article": "die",
      "word": "Akademie"
    },
    {
      "article": "der",
      "word": "Akt"
    },
    {
      "article": "die",
      "word": "Akte"
    },
    {
      "article": "der",
      "word": "Akteur"
    },
    {
      "article": "die",
      "word": "Aktie"
    },
    {
      "article": "die",
      "word": "Aktion"
    },
    {
      "article": "der",
      "word": "Aktionär"
    },
    {
      "article": "die",
      "word": "Aktivität"
    },
    {
      "article": "der",
      "word": "Akzent"
    },
    {
      "article": "die",
      "word": "Akzeptanz"
    },
    {
      "article": "der",
      "word": "Algorithmus"
    },
    {
      "article": "das",
      "word": "All"
    },
    {
      "article": "die",
      "word": "Allianz"
    },
    {
      "article": "das",
      "word": "Alpha"
    },
    {
      "article": "das",
      "word": "Aluminium"
    },
    {
      "article": "der",
      "word": "Alzheimer"
    },
    {
      "article": "die",
      "word": "Amtszeit"
    },
    {
      "article": "die",
      "word": "Analyse"
    },
    {
      "article": "der",
      "word": "Analyst"
    },
    {
      "article": "die",
      "word": "Anatomie"
    },
    {
      "article": "die",
      "word": "Änderung"
    },
    {
      "article": "der",
      "word": "Andrang"
    },
    {
      "article": "die",
      "word": "Anforderung"
    },
    {
      "article": "die",
      "word": "Angabe"
    },
    {
      "article": "der",
      "word": "Angehörige"
    },
    {
      "article": "der",
      "word": "Angeklagte"
    },
    {
      "article": "der",
      "word": "Angreifer"
    },
    {
      "article": "der",
      "word": "Anhang"
    },
    {
      "article": "der",
      "word": "Anhänger"
    },
    {
      "article": "die",
      "word": "Animation"
    },
    {
      "article": "die",
      "word": "Anklage"
    },
    {
      "article": "der",
      "word": "Anlass"
    },
    {
      "article": "der",
      "word": "Anlauf"
    },
    {
      "article": "der",
      "word": "Anleger"
    },
    {
      "article": "die",
      "word": "Anleihe"
    },
    {
      "article": "das",
      "word": "Anliegen"
    },
    {
      "article": "die",
      "word": "Anmerkung"
    },
    {
      "article": "die",
      "word": "Annahme"
    },
    {
      "article": "die",
      "word": "Anrede"
    },
    {
      "article": "die",
      "word": "Anregung"
    },
    {
      "article": "der",
      "word": "Anreiz"
    },
    {
      "article": "der",
      "word": "Ansatz"
    },
    {
      "article": "der",
      "word": "Anschlag"
    },
    {
      "article": "die",
      "word": "Ansicht"
    },
    {
      "article": "der",
      "word": "Ansprechpartner"
    },
    {
      "article": "der",
      "word": "Anspruch"
    },
    {
      "article": "der",
      "word": "Anstand"
    },
    {
      "article": "die",
      "word": "Anstellung"
    },
    {
      "article": "der",
      "word": "Ansturm"
    },
    {
      "article": "der",
      "word": "Anteil"
    },
    {
      "article": "die",
      "word": "Antike"
    },
    {
      "article": "der",
      "word": "Antrieb"
    },
    {
      "article": "die",
      "word": "Anweisung"
    },
    {
      "article": "die",
      "word": "Anwendung"
    },
    {
      "article": "das",
      "word": "Anwesen"
    },
    {
      "article": "der",
      "word": "Anwohner"
    },
    {
      "article": "der",
      "word": "Appell"
    },
    {
      "article": "die",
      "word": "Ära"
    },
    {
      "article": "die",
      "word": "Arbeitskraft"
    },
    {
      "article": "die",
      "word": "Arbeitslosigkeit"
    },
    {
      "article": "der",
      "word": "Arbeitsmarkt"
    },
    {
      "article": "der",
      "word": "Architekt"
    },
    {
      "article": "die",
      "word": "Architektur"
    },
    {
      "article": "das",
      "word": "Archiv"
    },
    {
      "article": "das",
      "word": "Areal"
    },
    {
      "article": "die",
      "word": "Arena"
    },
    {
      "article": "der",
      "word": "Ärger"
    },
    {
      "article": "das",
      "word": "Argument"
    },
    {
      "article": "die",
      "word": "Arroganz"
    },
    {
      "article": "der",
      "word": "Aspekt"
    },
    {
      "article": "der",
      "word": "Asphalt"
    },
    {
      "article": "der",
      "word": "Asteroid"
    },
    {
      "article": "das",
      "word": "Asyl"
    },
    {
      "article": "das",
      "word": "Atelier"
    },
    {
      "article": "der",
      "word": "Atemzug"
    },
    {
      "article": "die",
      "word": "Atmosphäre"
    },
    {
      "article": "die",
      "word": "Atmung"
    },
    {
      "article": "die",
      "word": "Attacke"
    },
    {
      "article": "das",
      "word": "Attentat"
    },
    {
      "article": "die",
      "word": "Attraktion"
    },
    {
      "article": "das",
      "word": "Attribut"
    },
    {
      "article": "der",
      "word": "Aufbruch"
    },
    {
      "article": "die",
      "word": "Auffassung"
    },
    {
      "article": "die",
      "word": "Aufführung"
    },
    {
      "article": "der",
      "word": "Aufgang"
    },
    {
      "article": "die",
      "word": "Aufklärung"
    },
    {
      "article": "die",
      "word": "Auflösung"
    },
    {
      "article": "das",
      "word": "Aufsehen"
    },
    {
      "article": "der",
      "word": "Aufstand"
    },
    {
      "article": "der",
      "word": "Auftrag"
    },
    {
      "article": "das",
      "word": "Auftreten"
    },
    {
      "article": "der",
      "word": "Auftritt"
    },
    {
      "article": "der",
      "word": "Aufwand"
    },
    {
      "article": "der",
      "word": "Aufzug"
    },
    {
      "article": "die",
      "word": "Auktion"
    },
    {
      "article": "die",
      "word": "Aula"
    },
    {
      "article": "der",
      "word": "Ausbau"
    },
    {
      "article": "die",
      "word": "Ausbeutung"
    },
    {
      "article": "der",
      "word": "Ausblick"
    },
    {
      "article": "der",
      "word": "Ausbruch"
    },
    {
      "article": "die",
      "word": "Ausfahrt"
    },
    {
      "article": "der",
      "word": "Ausfall"
    },
    {
      "article": "die",
      "word": "Ausfuhr"
    },
    {
      "article": "die",
      "word": "Ausführung"
    },
    {
      "article": "der",
      "word": "Ausgangspunkt"
    },
    {
      "article": "der",
      "word": "Auslöser"
    },
    {
      "article": "das",
      "word": "Ausmaß"
    },
    {
      "article": "die",
      "word": "Ausrichtung"
    },
    {
      "article": "die",
      "word": "Ausrüstung"
    },
    {
      "article": "der",
      "word": "Ausschluss"
    },
    {
      "article": "der",
      "word": "Ausschnitt"
    },
    {
      "article": "der",
      "word": "Ausschuss"
    },
    {
      "article": "der",
      "word": "Außenminister"
    },
    {
      "article": "die",
      "word": "Außenseite"
    },
    {
      "article": "der",
      "word": "Außenseiter"
    },
    {
      "article": "die",
      "word": "Äußerung"
    },
    {
      "article": "die",
      "word": "Ausstattung"
    },
    {
      "article": "der",
      "word": "Ausstoß"
    },
    {
      "article": "der",
      "word": "Austausch"
    },
    {
      "article": "der",
      "word": "Ausweg"
    },
    {
      "article": "die",
      "word": "Auswertung"
    },
    {
      "article": "die",
      "word": "Auswirkung"
    },
    {
      "article": "die",
      "word": "Auszeichnung"
    },
    {
      "article": "die",
      "word": "Auszeit"
    },
    {
      "article": "der",
      "word": "Auszug"
    },
    {
      "article": "der",
      "word": "Autobauer"
    },
    {
      "article": "die",
      "word": "Autorität"
    },
    {
      "article": "die",
      "word": "Balance"
    },
    {
      "article": "das",
      "word": "Ballett"
    },
    {
      "article": "der",
      "word": "Bambus"
    },
    {
      "article": "der",
      "word": "Band"
    },
    {
      "article": "die",
      "word": "Bande"
    },
    {
      "article": "das",
      "word": "Banner"
    },
    {
      "article": "die",
      "word": "Barriere"
    },
    {
      "article": "die",
      "word": "Basis"
    },
    {
      "article": "der",
      "word": "Bass"
    },
    {
      "article": "das",
      "word": "Bauwerk"
    },
    {
      "article": "die",
      "word": "Beachtung"
    },
    {
      "article": "die",
      "word": "Bearbeitung"
    },
    {
      "article": "der",
      "word": "Beat"
    },
    {
      "article": "das",
      "word": "Becken"
    },
    {
      "article": "der",
      "word": "Bedarf"
    },
    {
      "article": "das",
      "word": "Bedauern"
    },
    {
      "article": "die",
      "word": "Bedrohung"
    },
    {
      "article": "die",
      "word": "Befragung"
    },
    {
      "article": "die",
      "word": "Befreiung"
    },
    {
      "article": "der",
      "word": "Befund"
    },
    {
      "article": "die",
      "word": "Begabung"
    },
    {
      "article": "die",
      "word": "Begegnung"
    },
    {
      "article": "die",
      "word": "Begeisterung"
    },
    {
      "article": "die",
      "word": "Begründung"
    },
    {
      "article": "der",
      "word": "Beirat"
    },
    {
      "article": "der",
      "word": "Bekannte"
    },
    {
      "article": "die",
      "word": "Bekanntmachung"
    },
    {
      "article": "die",
      "word": "Belästigung"
    },
    {
      "article": "die",
      "word": "Belastung"
    },
    {
      "article": "der",
      "word": "Beleg"
    },
    {
      "article": "die",
      "word": "Beobachtung"
    },
    {
      "article": "die",
      "word": "Berechnung"
    },
    {
      "article": "die",
      "word": "Bereitschaft"
    },
    {
      "article": "der",
      "word": "Bergmann"
    },
    {
      "article": "die",
      "word": "Berufung"
    },
    {
      "article": "die",
      "word": "Berühmtheit"
    },
    {
      "article": "die",
      "word": "Berührung"
    },
    {
      "article": "die",
      "word": "Besatzung"
    },
    {
      "article": "der",
      "word": "Bescheid"
    },
    {
      "article": "der",
      "word": "Beschluss"
    },
    {
      "article": "die",
      "word": "Beschränkung"
    },
    {
      "article": "die",
      "word": "Beschreibung"
    },
    {
      "article": "der",
      "word": "Beschützer"
    },
    {
      "article": "die",
      "word": "Beschwerde"
    },
    {
      "article": "die",
      "word": "Besetzung"
    },
    {
      "article": "die",
      "word": "Besonderheit"
    },
    {
      "article": "der",
      "word": "Bestand"
    },
    {
      "article": "der",
      "word": "Bestandteil"
    },
    {
      "article": "die",
      "word": "Bestätigung"
    },
    {
      "article": "der",
      "word": "Beste"
    },
    {
      "article": "die",
      "word": "Bestimmung"
    },
    {
      "article": "die",
      "word": "Bestrafung"
    },
    {
      "article": "der",
      "word": "Bestseller"
    },
    {
      "article": "die",
      "word": "Beteiligung"
    },
    {
      "article": "der",
      "word": "Betrachter"
    },
    {
      "article": "die",
      "word": "Betrachtung"
    },
    {
      "article": "der",
      "word": "Betrag"
    },
    {
      "article": "der",
      "word": "Betreff"
    },
    {
      "article": "der",
      "word": "Betreiber"
    },
    {
      "article": "die",
      "word": "Betreuung"
    },
    {
      "article": "der",
      "word": "Betrieb"
    },
    {
      "article": "das",
      "word": "Betriebssystem"
    },
    {
      "article": "der",
      "word": "Betrug"
    },
    {
      "article": "der",
      "word": "Betrüger"
    },
    {
      "article": "die",
      "word": "Beurteilung"
    },
    {
      "article": "die",
      "word": "Beute"
    },
    {
      "article": "die",
      "word": "Bevölkerung"
    },
    {
      "article": "die",
      "word": "Bewegung"
    },
    {
      "article": "der",
      "word": "Beweis"
    },
    {
      "article": "der",
      "word": "Bewerber"
    },
    {
      "article": "die",
      "word": "Bewertung"
    },
    {
      "article": "der",
      "word": "Bewohner"
    },
    {
      "article": "das",
      "word": "Bewusstsein"
    },
    {
      "article": "die",
      "word": "Bezeichnung"
    },
    {
      "article": "die",
      "word": "Beziehung"
    },
    {
      "article": "der",
      "word": "Bezirk"
    },
    {
      "article": "der",
      "word": "Bezug"
    },
    {
      "article": "die",
      "word": "Bilanz"
    },
    {
      "article": "der",
      "word": "Bildband"
    },
    {
      "article": "der",
      "word": "Bildhauer"
    },
    {
      "article": "die",
      "word": "Bindung"
    },
    {
      "article": "die",
      "word": "Biografie"
    },
    {
      "article": "das",
      "word": "Blei"
    },
    {
      "article": "die",
      "word": "Blockade"
    },
    {
      "article": "der",
      "word": "Blutdruck"
    },
    {
      "article": "die",
      "word": "Blüte"
    },
    {
      "article": "der",
      "word": "Bord"
    },
    {
      "article": "der",
      "word": "Botschafter"
    },
    {
      "article": "der",
      "word": "Brauch"
    },
    {
      "article": "die",
      "word": "Bronze"
    },
    {
      "article": "der",
      "word": "Browser"
    },
    {
      "article": "der",
      "word": "Bruch"
    },
    {
      "article": "der",
      "word": "Brunnen"
    },
    {
      "article": "der",
      "word": "Buchhändler"
    },
    {
      "article": "die",
      "word": "Bucht"
    },
    {
      "article": "die",
      "word": "Buchung"
    },
    {
      "article": "der",
      "word": "Buddhismus"
    },
    {
      "article": "das",
      "word": "Budget"
    },
    {
      "article": "der",
      "word": "Bund"
    },
    {
      "article": "das",
      "word": "Bündel"
    },
    {
      "article": "das",
      "word": "Bundesamt"
    },
    {
      "article": "der",
      "word": "Bundeskanzler"
    },
    {
      "article": "das",
      "word": "Bundesland"
    },
    {
      "article": "die",
      "word": "Bundesliga"
    },
    {
      "article": "der",
      "word": "Bundespräsident"
    },
    {
      "article": "der",
      "word": "Bundesrat"
    },
    {
      "article": "die",
      "word": "Bundesregierung"
    },
    {
      "article": "die",
      "word": "Bundesrepublik"
    },
    {
      "article": "der",
      "word": "Bundesstaat"
    },
    {
      "article": "der",
      "word": "Bundestag"
    },
    {
      "article": "die",
      "word": "Bundeswehr"
    },
    {
      "article": "das",
      "word": "Bündnis"
    },
    {
      "article": "der",
      "word": "Bürgerkrieg"
    },
    {
      "article": "die",
      "word": "Bürokratie"
    },
    {
      "article": "das",
      "word": "Business"
    },
    {
      "article": "der",
      "word": "Campus"
    },
    {
      "article": "das",
      "word": "Celsius"
    },
    {
      "article": "der",
      "word": "Center"
    },
    {
      "article": "der",
      "word": "Champagner"
    },
    {
      "article": "das",
      "word": "Chaos"
    },
    {
      "article": "der",
      "word": "Charakter"
    },
    {
      "article": "der",
      "word": "Charme"
    },
    {
      "article": "der",
      "word": "Chat"
    },
    {
      "article": "die",
      "word": "Chemie"
    },
    {
      "article": "die",
      "word": "Chemikalie"
    },
    {
      "article": "der",
      "word": "Chemiker"
    },
    {
      "article": "der",
      "word": "Chinese"
    },
    {
      "article": "die",
      "word": "Chronik"
    },
    {
      "article": "die",
      "word": "City"
    },
    {
      "article": "der",
      "word": "Clip"
    },
    {
      "article": "der",
      "word": "Coach"
    },
    {
      "article": "der",
      "word": "Cocktail"
    },
    {
      "article": "der",
      "word": "Code"
    },
    {
      "article": "der",
      "word": "Container"
    },
    {
      "article": "die",
      "word": "Creme"
    },
    {
      "article": "der",
      "word": "Dämon"
    },
    {
      "article": "das",
      "word": "Darlehen"
    },
    {
      "article": "die",
      "word": "Darstellung"
    },
    {
      "article": "die",
      "word": "Datenbank"
    },
    {
      "article": "der",
      "word": "Deal"
    },
    {
      "article": "die",
      "word": "Debatte"
    },
    {
      "article": "die",
      "word": "Definition"
    },
    {
      "article": "das",
      "word": "Defizit"
    },
    {
      "article": "der",
      "word": "Deich"
    },
    {
      "article": "die",
      "word": "Delegation"
    },
    {
      "article": "der",
      "word": "Delegierte"
    },
    {
      "article": "das",
      "word": "Delikt"
    },
    {
      "article": "die",
      "word": "Demenz"
    },
    {
      "article": "der",
      "word": "Demonstrant"
    },
    {
      "article": "die",
      "word": "Demonstration"
    },
    {
      "article": "das",
      "word": "Denken"
    },
    {
      "article": "das",
      "word": "Denkmal"
    },
    {
      "article": "die",
      "word": "Depression"
    },
    {
      "article": "das",
      "word": "Design"
    },
    {
      "article": "der",
      "word": "Desktop"
    },
    {
      "article": "das",
      "word": "Detail"
    },
    {
      "article": "der",
      "word": "Diabetes"
    },
    {
      "article": "die",
      "word": "Diagnose"
    },
    {
      "article": "das",
      "word": "Diagramm"
    },
    {
      "article": "der",
      "word": "Dialekt"
    },
    {
      "article": "die",
      "word": "Diät"
    },
    {
      "article": "die",
      "word": "Dichtung"
    },
    {
      "article": "der",
      "word": "Diebstahl"
    },
    {
      "article": "die",
      "word": "Dienstleistung"
    },
    {
      "article": "die",
      "word": "Differenz"
    },
    {
      "article": "die",
      "word": "Digitalisierung"
    },
    {
      "article": "die",
      "word": "Diktatur"
    },
    {
      "article": "das",
      "word": "Dilemma"
    },
    {
      "article": "die",
      "word": "Dimension"
    },
    {
      "article": "der",
      "word": "Dirigent"
    },
    {
      "article": "die",
      "word": "Diskriminierung"
    },
    {
      "article": "der",
      "word": "Diskurs"
    },
    {
      "article": "die",
      "word": "Distanz"
    },
    {
      "article": "die",
      "word": "Disziplin"
    },
    {
      "article": "die",
      "word": "Dokumentation"
    },
    {
      "article": "der",
      "word": "Dolmetscher"
    },
    {
      "article": "die",
      "word": "Dosis"
    },
    {
      "article": "der",
      "word": "Dozent"
    },
    {
      "article": "der",
      "word": "Drang"
    },
    {
      "article": "das",
      "word": "Drehbuch"
    },
    {
      "article": "der",
      "word": "Druck"
    },
    {
      "article": "das",
      "word": "Duell"
    },
    {
      "article": "der",
      "word": "Dünger"
    },
    {
      "article": "die",
      "word": "Dunkelheit"
    },
    {
      "article": "das",
      "word": "Duo"
    },
    {
      "article": "der",
      "word": "Durchbruch"
    },
    {
      "article": "die",
      "word": "Durchführung"
    },
    {
      "article": "der",
      "word": "Durchmesser"
    },
    {
      "article": "der",
      "word": "Durchschnitt"
    },
    {
      "article": "die",
      "word": "Durchsetzung"
    },
    {
      "article": "die",
      "word": "Dürre"
    },
    {
      "article": "die",
      "word": "Dynamik"
    },
    {
      "article": "die",
      "word": "Ebbe"
    },
    {
      "article": "der",
      "word": "Editor"
    },
    {
      "article": "der",
      "word": "Egoismus"
    },
    {
      "article": "die",
      "word": "Ehre"
    },
    {
      "article": "die",
      "word": "Ehrlichkeit"
    },
    {
      "article": "der",
      "word": "Einblick"
    },
    {
      "article": "der",
      "word": "Einbrecher"
    },
    {
      "article": "der",
      "word": "Einbruch"
    },
    {
      "article": "der",
      "word": "Eindruck"
    },
    {
      "article": "der",
      "word": "Einfluss"
    },
    {
      "article": "der",
      "word": "Eingriff"
    },
    {
      "article": "der",
      "word": "Einheimische"
    },
    {
      "article": "die",
      "word": "Einigung"
    },
    {
      "article": "der",
      "word": "Einklang"
    },
    {
      "article": "die",
      "word": "Einleitung"
    },
    {
      "article": "die",
      "word": "Einnahme"
    },
    {
      "article": "die",
      "word": "Einreise"
    },
    {
      "article": "der",
      "word": "Einsatzleiter"
    },
    {
      "article": "die",
      "word": "Einschätzung"
    },
    {
      "article": "die",
      "word": "Einschränkung"
    },
    {
      "article": "die",
      "word": "Einsicht"
    },
    {
      "article": "der",
      "word": "Einstieg"
    },
    {
      "article": "die",
      "word": "Einteilung"
    },
    {
      "article": "die",
      "word": "Eintragung"
    },
    {
      "article": "der",
      "word": "Einwand"
    },
    {
      "article": "der",
      "word": "Einzelfall"
    },
    {
      "article": "der",
      "word": "Einzug"
    },
    {
      "article": "die",
      "word": "Eizelle"
    },
    {
      "article": "der",
      "word": "Ekel"
    },
    {
      "article": "die",
      "word": "Elektronik"
    },
    {
      "article": "das",
      "word": "Elend"
    },
    {
      "article": "der",
      "word": "Elfmeter"
    },
    {
      "article": "die",
      "word": "Elite"
    },
    {
      "article": "das",
      "word": "Embargo"
    },
    {
      "article": "der",
      "word": "Embryo"
    },
    {
      "article": "die",
      "word": "Emission"
    },
    {
      "article": "die",
      "word": "Emotion"
    },
    {
      "article": "die",
      "word": "Empfehlung"
    },
    {
      "article": "der",
      "word": "Endverbraucher"
    },
    {
      "article": "das",
      "word": "Engagement"
    },
    {
      "article": "das",
      "word": "Ensemble"
    },
    {
      "article": "die",
      "word": "Entlassung"
    },
    {
      "article": "die",
      "word": "Entschädigung"
    },
    {
      "article": "die",
      "word": "Entsorgung"
    },
    {
      "article": "die",
      "word": "Entstehung"
    },
    {
      "article": "der",
      "word": "Entwickler"
    },
    {
      "article": "das",
      "word": "Enzym"
    },
    {
      "article": "die",
      "word": "Epoche"
    },
    {
      "article": "der",
      "word": "Erbe"
    },
    {
      "article": "das",
      "word": "Erdgas"
    },
    {
      "article": "das",
      "word": "Erdöl"
    },
    {
      "article": "das",
      "word": "Ereignis"
    },
    {
      "article": "die",
      "word": "Erfassung"
    },
    {
      "article": "die",
      "word": "Erfüllung"
    },
    {
      "article": "der",
      "word": "Erhalt"
    },
    {
      "article": "die",
      "word": "Erhaltung"
    },
    {
      "article": "die",
      "word": "Erhebung"
    },
    {
      "article": "die",
      "word": "Erhöhung"
    },
    {
      "article": "die",
      "word": "Erholung"
    },
    {
      "article": "die",
      "word": "Erkrankung"
    },
    {
      "article": "die",
      "word": "Erkundung"
    },
    {
      "article": "der",
      "word": "Erlös"
    },
    {
      "article": "der",
      "word": "Ermittler"
    },
    {
      "article": "die",
      "word": "Ermittlung"
    },
    {
      "article": "die",
      "word": "Ermordung"
    },
    {
      "article": "die",
      "word": "Ermutigung"
    },
    {
      "article": "die",
      "word": "Eröffnung"
    },
    {
      "article": "der",
      "word": "Erreger"
    },
    {
      "article": "der",
      "word": "Ersatz"
    },
    {
      "article": "die",
      "word": "Erscheinung"
    },
    {
      "article": "der",
      "word": "Ertrag"
    },
    {
      "article": "die",
      "word": "Erwähnung"
    },
    {
      "article": "die",
      "word": "Erwärmung"
    },
    {
      "article": "die",
      "word": "Erwartung"
    },
    {
      "article": "die",
      "word": "Erweiterung"
    },
    {
      "article": "der",
      "word": "Erwerb"
    },
    {
      "article": "die",
      "word": "Erzählung"
    },
    {
      "article": "der",
      "word": "Erzieher"
    },
    {
      "article": "die",
      "word": "Erziehung"
    },
    {
      "article": "die",
      "word": "Essenz"
    },
    {
      "article": "die",
      "word": "Ethik"
    },
    {
      "article": "die",
      "word": "Euphorie"
    },
    {
      "article": "die",
      "word": "Evolution"
    },
    {
      "article": "die",
      "word": "Ewigkeit"
    },
    {
      "article": "das",
      "word": "Examen"
    },
    {
      "article": "das",
      "word": "Exemplar"
    },
    {
      "article": "das",
      "word": "Exil"
    },
    {
      "article": "die",
      "word": "Existenz"
    },
    {
      "article": "die",
      "word": "Expedition"
    },
    {
      "article": "der",
      "word": "Experte"
    },
    {
      "article": "die",
      "word": "Explosion"
    },
    {
      "article": "der",
      "word": "Fachbereich"
    },
    {
      "article": "die",
      "word": "Fachhochschule"
    },
    {
      "article": "der",
      "word": "Fachmann"
    },
    {
      "article": "die",
      "word": "Fähigkeit"
    },
    {
      "article": "der",
      "word": "Fahnder"
    },
    {
      "article": "die",
      "word": "Fahrbahn"
    },
    {
      "article": "die",
      "word": "Fairness"
    },
    {
      "article": "die",
      "word": "Fakultät"
    },
    {
      "article": "der",
      "word": "Fang"
    },
    {
      "article": "die",
      "word": "Färbung"
    },
    {
      "article": "die",
      "word": "Faser"
    },
    {
      "article": "die",
      "word": "Fassade"
    },
    {
      "article": "die",
      "word": "Fassung"
    },
    {
      "article": "das",
      "word": "Fazit"
    },
    {
      "article": "der",
      "word": "Fehlschlag"
    },
    {
      "article": "die",
      "word": "Feigheit"
    },
    {
      "article": "die",
      "word": "Ferne"
    },
    {
      "article": "die",
      "word": "Fertigstellung"
    },
    {
      "article": "die",
      "word": "Fertigung"
    },
    {
      "article": "das",
      "word": "Festland"
    },
    {
      "article": "die",
      "word": "Festlegung"
    },
    {
      "article": "die",
      "word": "Festnahme"
    },
    {
      "article": "das",
      "word": "Festnetz"
    },
    {
      "article": "die",
      "word": "Feststellung"
    },
    {
      "article": "die",
      "word": "Fiktion"
    },
    {
      "article": "der",
      "word": "Filmemacher"
    },
    {
      "article": "das",
      "word": "Filmmaterial"
    },
    {
      "article": "der",
      "word": "Filz"
    },
    {
      "article": "das",
      "word": "Finale"
    },
    {
      "article": "die",
      "word": "Finanzierung"
    },
    {
      "article": "der",
      "word": "Finanzminister"
    },
    {
      "article": "die",
      "word": "Finsternis"
    },
    {
      "article": "die",
      "word": "Flexibilität"
    },
    {
      "article": "die",
      "word": "Flotte"
    },
    {
      "article": "die",
      "word": "Flucht"
    },
    {
      "article": "die",
      "word": "Fluggesellschaft"
    },
    {
      "article": "der",
      "word": "Flur"
    },
    {
      "article": "die",
      "word": "Flüssigkeit"
    },
    {
      "article": "die",
      "word": "Flut"
    },
    {
      "article": "der",
      "word": "Flyer"
    },
    {
      "article": "der",
      "word": "Fond"
    },
    {
      "article": "die",
      "word": "Forderung"
    },
    {
      "article": "die",
      "word": "Förderung"
    },
    {
      "article": "die",
      "word": "Formulierung"
    },
    {
      "article": "der",
      "word": "Forscher"
    },
    {
      "article": "die",
      "word": "Forschung"
    },
    {
      "article": "der",
      "word": "Fortschritt"
    },
    {
      "article": "die",
      "word": "Fortsetzung"
    },
    {
      "article": "die",
      "word": "Fotografie"
    },
    {
      "article": "das",
      "word": "Foul"
    },
    {
      "article": "der",
      "word": "Fragebogen"
    },
    {
      "article": "die",
      "word": "Fragestellung"
    },
    {
      "article": "die",
      "word": "Fraktion"
    },
    {
      "article": "der",
      "word": "Franzose"
    },
    {
      "article": "der",
      "word": "Freiberufler"
    },
    {
      "article": "die",
      "word": "Freigabe"
    },
    {
      "article": "die",
      "word": "Frequenz"
    },
    {
      "article": "der",
      "word": "Frust"
    },
    {
      "article": "die",
      "word": "Frustration"
    },
    {
      "article": "die",
      "word": "Führung"
    },
    {
      "article": "die",
      "word": "Fülle"
    },
    {
      "article": "die",
      "word": "Furcht"
    },
    {
      "article": "der",
      "word": "Fürst"
    },
    {
      "article": "die",
      "word": "Fusion"
    },
    {
      "article": "die",
      "word": "Galerie"
    },
    {
      "article": "der",
      "word": "Garant"
    },
    {
      "article": "die",
      "word": "Garantie"
    },
    {
      "article": "die",
      "word": "Gattin"
    },
    {
      "article": "der",
      "word": "Gaumen"
    },
    {
      "article": "das",
      "word": "Gebiet"
    },
    {
      "article": "das",
      "word": "Gebirge"
    }
  ],
  "C1": [
    {
      "article": "die",
      "word": "Aktiengesellschaft"
    },
    {
      "article": "das",
      "word": "Ambiente"
    },
    {
      "article": "die",
      "word": "Analogie"
    },
    {
      "article": "die",
      "word": "Angleichung"
    },
    {
      "article": "die",
      "word": "Ästhetik"
    },
    {
      "article": "der",
      "word": "Aufsichtsrat"
    },
    {
      "article": "die",
      "word": "Aufzucht"
    },
    {
      "article": "die",
      "word": "Ausprägung"
    },
    {
      "article": "der",
      "word": "Baron"
    },
    {
      "article": "die",
      "word": "Berücksichtigung"
    },
    {
      "article": "die",
      "word": "Beschleunigung"
    },
    {
      "article": "das",
      "word": "Bruttoinlandsprodukt"
    },
    {
      "article": "der",
      "word": "Datensatz"
    },
    {
      "article": "die",
      "word": "Datenverarbeitung"
    },
    {
      "article": "die",
      "word": "Deutung"
    },
    {
      "article": "die",
      "word": "Dichte"
    },
    {
      "article": "die",
      "word": "Diskretion"
    },
    {
      "article": "die",
      "word": "Division"
    },
    {
      "article": "die",
      "word": "Domäne"
    },
    {
      "article": "die",
      "word": "Dominanz"
    },
    {
      "article": "die",
      "word": "Echtzeit"
    },
    {
      "article": "die",
      "word": "Effizienz"
    },
    {
      "article": "die",
      "word": "Ekstase"
    },
    {
      "article": "die",
      "word": "Empfindlichkeit"
    },
    {
      "article": "die",
      "word": "Empörung"
    },
    {
      "article": "der",
      "word": "Energieträger"
    },
    {
      "article": "die",
      "word": "Energiewirtschaft"
    },
    {
      "article": "die",
      "word": "Entscheidungsfindung"
    },
    {
      "article": "die",
      "word": "Entschlossenheit"
    },
    {
      "article": "das",
      "word": "Erbgut"
    },
    {
      "article": "die",
      "word": "Erkenntnis"
    },
    {
      "article": "die",
      "word": "Erkennung"
    },
    {
      "article": "die",
      "word": "Erregung"
    },
    {
      "article": "die",
      "word": "Erstellung"
    },
    {
      "article": "die",
      "word": "Erwägung"
    },
    {
      "article": "der",
      "word": "Fokus"
    },
    {
      "article": "das",
      "word": "Gebot"
    },
    {
      "article": "der",
      "word": "Gebrauch"
    },
    {
      "article": "das",
      "word": "Gedächtnis"
    },
    {
      "article": "der",
      "word": "Gedanke"
    },
    {
      "article": "das",
      "word": "Gefallen"
    },
    {
      "article": "das",
      "word": "Gefäß"
    },
    {
      "article": "das",
      "word": "Gefühl"
    },
    {
      "article": "der",
      "word": "Gegensatz"
    },
    {
      "article": "das",
      "word": "Gegenstück"
    },
    {
      "article": "der",
      "word": "Geheimdienst"
    },
    {
      "article": "das",
      "word": "Gehör"
    },
    {
      "article": "die",
      "word": "Geisel"
    },
    {
      "article": "die",
      "word": "Geldstrafe"
    },
    {
      "article": "der",
      "word": "Gemeinderat"
    },
    {
      "article": "die",
      "word": "Gemeinsamkeit"
    },
    {
      "article": "das",
      "word": "Gemisch"
    },
    {
      "article": "das",
      "word": "Gemüt"
    },
    {
      "article": "das",
      "word": "Gen"
    },
    {
      "article": "die",
      "word": "Genauigkeit"
    },
    {
      "article": "die",
      "word": "Genehmigung"
    },
    {
      "article": "der",
      "word": "Generalsekretär"
    },
    {
      "article": "die",
      "word": "Generation"
    },
    {
      "article": "der",
      "word": "Generator"
    },
    {
      "article": "das",
      "word": "Genie"
    },
    {
      "article": "das",
      "word": "Genre"
    },
    {
      "article": "der",
      "word": "Gentleman"
    },
    {
      "article": "der",
      "word": "Genuss"
    },
    {
      "article": "die",
      "word": "Geografie"
    },
    {
      "article": "die",
      "word": "Geometrie"
    },
    {
      "article": "die",
      "word": "Gerechtigkeit"
    },
    {
      "article": "das",
      "word": "Gerede"
    },
    {
      "article": "das",
      "word": "Gericht"
    },
    {
      "article": "die",
      "word": "Gerichtsbarkeit"
    },
    {
      "article": "die",
      "word": "Germanistik"
    },
    {
      "article": "die",
      "word": "Gesamtsumme"
    },
    {
      "article": "der",
      "word": "Geschäftsführer"
    },
    {
      "article": "das",
      "word": "Geschäftsjahr"
    },
    {
      "article": "der",
      "word": "Geschäftsmann"
    },
    {
      "article": "das",
      "word": "Geschehen"
    },
    {
      "article": "das",
      "word": "Geschlecht"
    },
    {
      "article": "das",
      "word": "Geschrei"
    },
    {
      "article": "die",
      "word": "Geschwindigkeit"
    },
    {
      "article": "der",
      "word": "Gesellschafter"
    },
    {
      "article": "der",
      "word": "Gesetzgeber"
    },
    {
      "article": "die",
      "word": "Gesetzgebung"
    },
    {
      "article": "der",
      "word": "Gesichtspunkt"
    },
    {
      "article": "das",
      "word": "Gespür"
    },
    {
      "article": "die",
      "word": "Gestalt"
    },
    {
      "article": "die",
      "word": "Gestaltung"
    },
    {
      "article": "das",
      "word": "Geständnis"
    },
    {
      "article": "der",
      "word": "Gestank"
    },
    {
      "article": "die",
      "word": "Gewähr"
    },
    {
      "article": "die",
      "word": "Gewalt"
    },
    {
      "article": "das",
      "word": "Gewand"
    },
    {
      "article": "das",
      "word": "Gewebe"
    },
    {
      "article": "der",
      "word": "Gewinn"
    },
    {
      "article": "der",
      "word": "Gewinner"
    },
    {
      "article": "das",
      "word": "Gewissen"
    },
    {
      "article": "die",
      "word": "Gewissheit"
    },
    {
      "article": "die",
      "word": "Gier"
    },
    {
      "article": "der",
      "word": "Gipfel"
    },
    {
      "article": "der",
      "word": "Glaube"
    },
    {
      "article": "der",
      "word": "Gläubiger"
    },
    {
      "article": "die",
      "word": "Glaubwürdigkeit"
    },
    {
      "article": "das",
      "word": "Gleichgewicht"
    },
    {
      "article": "die",
      "word": "Gleichheit"
    },
    {
      "article": "das",
      "word": "Glied"
    },
    {
      "article": "die",
      "word": "Gliederung"
    },
    {
      "article": "die",
      "word": "Globalisierung"
    },
    {
      "article": "der",
      "word": "Glücksbringer"
    },
    {
      "article": "das",
      "word": "Glücksspiel"
    },
    {
      "article": "die",
      "word": "Gnade"
    },
    {
      "article": "der",
      "word": "Gouverneur"
    },
    {
      "article": "der",
      "word": "Graf"
    },
    {
      "article": "die",
      "word": "Grafik"
    },
    {
      "article": "der",
      "word": "Grafiker"
    },
    {
      "article": "die",
      "word": "Grafschaft"
    },
    {
      "article": "der",
      "word": "Granit"
    },
    {
      "article": "das",
      "word": "Gremium"
    },
    {
      "article": "der",
      "word": "Grenzwert"
    },
    {
      "article": "das",
      "word": "Grinsen"
    },
    {
      "article": "die",
      "word": "Größenordnung"
    },
    {
      "article": "der",
      "word": "Großteil"
    },
    {
      "article": "die",
      "word": "Gruft"
    },
    {
      "article": "das",
      "word": "Grundrecht"
    },
    {
      "article": "der",
      "word": "Grundsatz"
    },
    {
      "article": "das",
      "word": "Grundstück"
    },
    {
      "article": "die",
      "word": "Gründung"
    },
    {
      "article": "das",
      "word": "Grüne"
    },
    {
      "article": "die",
      "word": "Guerilla"
    },
    {
      "article": "die",
      "word": "Gültigkeit"
    },
    {
      "article": "die",
      "word": "Gunst"
    },
    {
      "article": "der",
      "word": "Guru"
    },
    {
      "article": "das",
      "word": "Gutachten"
    },
    {
      "article": "die",
      "word": "Haft"
    },
    {
      "article": "der",
      "word": "Haftbefehl"
    },
    {
      "article": "der",
      "word": "Häftling"
    },
    {
      "article": "die",
      "word": "Haftung"
    },
    {
      "article": "die",
      "word": "Haltung"
    },
    {
      "article": "die",
      "word": "Handvoll"
    },
    {
      "article": "die",
      "word": "Hardware"
    },
    {
      "article": "die",
      "word": "Harmonie"
    },
    {
      "article": "der",
      "word": "Hass"
    },
    {
      "article": "die",
      "word": "Hast"
    },
    {
      "article": "die",
      "word": "Häufigkeit"
    },
    {
      "article": "das",
      "word": "Hauptquartier"
    },
    {
      "article": "die",
      "word": "Heide"
    },
    {
      "article": "das",
      "word": "Heilmittel"
    },
    {
      "article": "das",
      "word": "Heimatland"
    },
    {
      "article": "das",
      "word": "Heimweh"
    },
    {
      "article": "der",
      "word": "Hektar"
    },
    {
      "article": "die",
      "word": "Hektik"
    },
    {
      "article": "die",
      "word": "Herausforderung"
    },
    {
      "article": "der",
      "word": "Herausgeber"
    },
    {
      "article": "die",
      "word": "Herkunft"
    },
    {
      "article": "die",
      "word": "Herrschaft"
    },
    {
      "article": "die",
      "word": "Herstellung"
    },
    {
      "article": "der",
      "word": "Herzog"
    },
    {
      "article": "die",
      "word": "Hexerei"
    },
    {
      "article": "das",
      "word": "Highlight"
    },
    {
      "article": "das",
      "word": "Hilfsmittel"
    },
    {
      "article": "der",
      "word": "Hinblick"
    },
    {
      "article": "das",
      "word": "Hindernis"
    },
    {
      "article": "die",
      "word": "Hinrichtung"
    },
    {
      "article": "die",
      "word": "Hinsicht"
    },
    {
      "article": "der",
      "word": "Historiker"
    },
    {
      "article": "die",
      "word": "Hochschule"
    },
    {
      "article": "das",
      "word": "Hochwasser"
    },
    {
      "article": "der",
      "word": "Humor"
    },
    {
      "article": "die",
      "word": "Hypothek"
    },
    {
      "article": "die",
      "word": "Hypothese"
    },
    {
      "article": "die",
      "word": "Hysterie"
    },
    {
      "article": "das",
      "word": "Ideal"
    },
    {
      "article": "die",
      "word": "Identität"
    },
    {
      "article": "die",
      "word": "Illusion"
    },
    {
      "article": "die",
      "word": "Illustration"
    },
    {
      "article": "das",
      "word": "Image"
    },
    {
      "article": "das",
      "word": "Immunsystem"
    },
    {
      "article": "der",
      "word": "Import"
    },
    {
      "article": "der",
      "word": "Impuls"
    },
    {
      "article": "der",
      "word": "Index"
    },
    {
      "article": "der",
      "word": "Indikator"
    },
    {
      "article": "das",
      "word": "Individuum"
    },
    {
      "article": "das",
      "word": "Indiz"
    },
    {
      "article": "die",
      "word": "Infektion"
    },
    {
      "article": "das",
      "word": "Inferno"
    },
    {
      "article": "die",
      "word": "Inflation"
    },
    {
      "article": "die",
      "word": "Inflationsrate"
    },
    {
      "article": "die",
      "word": "Informatik"
    },
    {
      "article": "die",
      "word": "Infrastruktur"
    },
    {
      "article": "der",
      "word": "Ingenieur"
    },
    {
      "article": "die",
      "word": "Initiative"
    },
    {
      "article": "der",
      "word": "Innenminister"
    },
    {
      "article": "der",
      "word": "Innenraum"
    },
    {
      "article": "die",
      "word": "Innenstadt"
    },
    {
      "article": "die",
      "word": "Innovation"
    },
    {
      "article": "der",
      "word": "Insasse"
    },
    {
      "article": "der",
      "word": "Insider"
    },
    {
      "article": "die",
      "word": "Inspektion"
    },
    {
      "article": "der",
      "word": "Inspektor"
    },
    {
      "article": "die",
      "word": "Inspiration"
    },
    {
      "article": "die",
      "word": "Installation"
    },
    {
      "article": "die",
      "word": "Instanz"
    },
    {
      "article": "der",
      "word": "Instinkt"
    },
    {
      "article": "das",
      "word": "Institut"
    },
    {
      "article": "die",
      "word": "Institution"
    },
    {
      "article": "das",
      "word": "Insulin"
    },
    {
      "article": "die",
      "word": "Inszenierung"
    },
    {
      "article": "die",
      "word": "Integration"
    },
    {
      "article": "die",
      "word": "Integrität"
    },
    {
      "article": "die",
      "word": "Intelligenz"
    },
    {
      "article": "die",
      "word": "Intensität"
    },
    {
      "article": "die",
      "word": "Interaktion"
    },
    {
      "article": "die",
      "word": "Interpretation"
    },
    {
      "article": "die",
      "word": "Intervention"
    },
    {
      "article": "die",
      "word": "Invasion"
    },
    {
      "article": "die",
      "word": "Investition"
    },
    {
      "article": "der",
      "word": "Investor"
    },
    {
      "article": "die",
      "word": "Ironie"
    },
    {
      "article": "der",
      "word": "Irrtum"
    },
    {
      "article": "die",
      "word": "Isolation"
    },
    {
      "article": "die",
      "word": "Jagd"
    },
    {
      "article": "der",
      "word": "Jahrestag"
    },
    {
      "article": "der",
      "word": "Jahrgang"
    },
    {
      "article": "der",
      "word": "Jazz"
    },
    {
      "article": "der",
      "word": "Jubel"
    },
    {
      "article": "das",
      "word": "Jubiläum"
    },
    {
      "article": "der",
      "word": "Jude"
    },
    {
      "article": "die",
      "word": "Jugend"
    },
    {
      "article": "der",
      "word": "Jurist"
    },
    {
      "article": "die",
      "word": "Jury"
    },
    {
      "article": "die",
      "word": "Justiz"
    },
    {
      "article": "das",
      "word": "Kabarett"
    },
    {
      "article": "das",
      "word": "Kabinett"
    },
    {
      "article": "der",
      "word": "Kaiser"
    },
    {
      "article": "die",
      "word": "Kampagne"
    },
    {
      "article": "der",
      "word": "Kämpfer"
    },
    {
      "article": "der",
      "word": "Kampfgeist"
    },
    {
      "article": "der",
      "word": "Kanton"
    },
    {
      "article": "die",
      "word": "Kanzlei"
    },
    {
      "article": "die",
      "word": "Kapazität"
    },
    {
      "article": "das",
      "word": "Kapital"
    },
    {
      "article": "der",
      "word": "Kapitalismus"
    },
    {
      "article": "die",
      "word": "Karriere"
    },
    {
      "article": "der",
      "word": "Katalysator"
    },
    {
      "article": "die",
      "word": "Katastrophe"
    },
    {
      "article": "die",
      "word": "Kategorie"
    },
    {
      "article": "die",
      "word": "Kaution"
    },
    {
      "article": "die",
      "word": "Kenntnis"
    },
    {
      "article": "der",
      "word": "Killer"
    },
    {
      "article": "die",
      "word": "Klage"
    },
    {
      "article": "die",
      "word": "Klassifizierung"
    },
    {
      "article": "der",
      "word": "Klassiker"
    },
    {
      "article": "die",
      "word": "Klausel"
    },
    {
      "article": "die",
      "word": "Klausur"
    },
    {
      "article": "der",
      "word": "Klimawandel"
    },
    {
      "article": "der",
      "word": "Klotz"
    },
    {
      "article": "die",
      "word": "Kluft"
    },
    {
      "article": "die",
      "word": "Koalition"
    },
    {
      "article": "der",
      "word": "Kohlenstoff"
    },
    {
      "article": "der",
      "word": "Kollaps"
    },
    {
      "article": "die",
      "word": "Kollision"
    },
    {
      "article": "die",
      "word": "Kombination"
    },
    {
      "article": "das",
      "word": "Komitee"
    },
    {
      "article": "der",
      "word": "Kommandant"
    },
    {
      "article": "das",
      "word": "Kommando"
    },
    {
      "article": "die",
      "word": "Kommission"
    },
    {
      "article": "die",
      "word": "Kommune"
    },
    {
      "article": "die",
      "word": "Kommunikation"
    },
    {
      "article": "die",
      "word": "Komödie"
    },
    {
      "article": "die",
      "word": "Kompetenz"
    },
    {
      "article": "der",
      "word": "Komplex"
    },
    {
      "article": "die",
      "word": "Komponente"
    },
    {
      "article": "der",
      "word": "Komponist"
    },
    {
      "article": "der",
      "word": "Kompromiss"
    },
    {
      "article": "die",
      "word": "Konferenz"
    },
    {
      "article": "die",
      "word": "Konfiguration"
    },
    {
      "article": "die",
      "word": "Konfrontation"
    },
    {
      "article": "der",
      "word": "Kongress"
    },
    {
      "article": "die",
      "word": "Konjunktur"
    },
    {
      "article": "der",
      "word": "Konkurrent"
    },
    {
      "article": "die",
      "word": "Konkurrenz"
    },
    {
      "article": "das",
      "word": "Können"
    },
    {
      "article": "der",
      "word": "Konsens"
    },
    {
      "article": "die",
      "word": "Konsequenz"
    },
    {
      "article": "die",
      "word": "Konsistenz"
    },
    {
      "article": "die",
      "word": "Konstante"
    },
    {
      "article": "die",
      "word": "Konstruktion"
    },
    {
      "article": "das",
      "word": "Konsulat"
    },
    {
      "article": "der",
      "word": "Konsument"
    },
    {
      "article": "der",
      "word": "Kontext"
    },
    {
      "article": "die",
      "word": "Kontroverse"
    },
    {
      "article": "die",
      "word": "Konzentration"
    },
    {
      "article": "die",
      "word": "Konzeption"
    },
    {
      "article": "der",
      "word": "Konzern"
    },
    {
      "article": "die",
      "word": "Kooperation"
    },
    {
      "article": "die",
      "word": "Koordination"
    },
    {
      "article": "der",
      "word": "Koordinator"
    },
    {
      "article": "die",
      "word": "Körpersprache"
    },
    {
      "article": "die",
      "word": "Korrelation"
    },
    {
      "article": "die",
      "word": "Korrespondenz"
    },
    {
      "article": "die",
      "word": "Korruption"
    },
    {
      "article": "der",
      "word": "Kosmos"
    },
    {
      "article": "der",
      "word": "Kratzer"
    },
    {
      "article": "die",
      "word": "Kreation"
    },
    {
      "article": "die",
      "word": "Kreativität"
    },
    {
      "article": "der",
      "word": "Krebs"
    },
    {
      "article": "der",
      "word": "Kreislauf"
    },
    {
      "article": "die",
      "word": "Kreuzfahrt"
    },
    {
      "article": "der",
      "word": "Krieger"
    },
    {
      "article": "der",
      "word": "Kristall"
    },
    {
      "article": "das",
      "word": "Kriterium"
    },
    {
      "article": "die",
      "word": "Kulisse"
    },
    {
      "article": "der",
      "word": "Kult"
    },
    {
      "article": "die",
      "word": "Kündigung"
    },
    {
      "article": "der",
      "word": "Kunststoff"
    },
    {
      "article": "das",
      "word": "Kunstwerk"
    },
    {
      "article": "das",
      "word": "Kupfer"
    },
    {
      "article": "der",
      "word": "Kurfürst"
    },
    {
      "article": "das",
      "word": "Lächeln"
    },
    {
      "article": "die",
      "word": "Ladung"
    },
    {
      "article": "die",
      "word": "Lähmung"
    },
    {
      "article": "die",
      "word": "Landesregierung"
    },
    {
      "article": "der",
      "word": "Landkreis"
    },
    {
      "article": "der",
      "word": "Landtag"
    },
    {
      "article": "der",
      "word": "Laser"
    },
    {
      "article": "die",
      "word": "Laufbahn"
    },
    {
      "article": "die",
      "word": "Laufzeit"
    },
    {
      "article": "das",
      "word": "Lebensjahr"
    },
    {
      "article": "der",
      "word": "Lebenslauf"
    },
    {
      "article": "die",
      "word": "Legende"
    },
    {
      "article": "der",
      "word": "Lehrmeister"
    },
    {
      "article": "der",
      "word": "Lehrstuhl"
    },
    {
      "article": "der",
      "word": "Leib"
    },
    {
      "article": "die",
      "word": "Leiche"
    },
    {
      "article": "die",
      "word": "Leichtigkeit"
    },
    {
      "article": "das",
      "word": "Leiden"
    },
    {
      "article": "die",
      "word": "Leidenschaft"
    },
    {
      "article": "die",
      "word": "Leistungsfähigkeit"
    },
    {
      "article": "die",
      "word": "Leitung"
    },
    {
      "article": "die",
      "word": "Lektüre"
    },
    {
      "article": "die",
      "word": "Lesung"
    },
    {
      "article": "das",
      "word": "Letzte"
    },
    {
      "article": "der",
      "word": "Liebeskummer"
    },
    {
      "article": "der",
      "word": "Liebhaber"
    },
    {
      "article": "der",
      "word": "Lifestyle"
    },
    {
      "article": "das",
      "word": "Limit"
    },
    {
      "article": "der",
      "word": "Link"
    },
    {
      "article": "die",
      "word": "Linke"
    },
    {
      "article": "die",
      "word": "Literatur"
    },
    {
      "article": "die",
      "word": "Lizenz"
    },
    {
      "article": "die",
      "word": "Logik"
    },
    {
      "article": "die",
      "word": "Loyalität"
    },
    {
      "article": "der",
      "word": "Luxus"
    },
    {
      "article": "die",
      "word": "Lyrik"
    },
    {
      "article": "die",
      "word": "Magie"
    },
    {
      "article": "der",
      "word": "Magier"
    },
    {
      "article": "der",
      "word": "Magistrat"
    },
    {
      "article": "das",
      "word": "Magnetfeld"
    },
    {
      "article": "die",
      "word": "Mahnung"
    },
    {
      "article": "der",
      "word": "Mais"
    },
    {
      "article": "der",
      "word": "Makler"
    },
    {
      "article": "die",
      "word": "Malerei"
    },
    {
      "article": "das",
      "word": "Management"
    },
    {
      "article": "das",
      "word": "Mandat"
    },
    {
      "article": "der",
      "word": "Mangel"
    },
    {
      "article": "die",
      "word": "Manipulation"
    },
    {
      "article": "das",
      "word": "Manuskript"
    },
    {
      "article": "die",
      "word": "Marine"
    },
    {
      "article": "die",
      "word": "Mark"
    },
    {
      "article": "das",
      "word": "Marketing"
    },
    {
      "article": "der",
      "word": "Marktanteil"
    },
    {
      "article": "die",
      "word": "Marktwirtschaft"
    },
    {
      "article": "der",
      "word": "Marsch"
    },
    {
      "article": "das",
      "word": "Maß"
    },
    {
      "article": "das",
      "word": "Massaker"
    },
    {
      "article": "die",
      "word": "Masse"
    },
    {
      "article": "der",
      "word": "Maßstab"
    },
    {
      "article": "die",
      "word": "Materie"
    },
    {
      "article": "die",
      "word": "Matrix"
    },
    {
      "article": "die",
      "word": "Maut"
    },
    {
      "article": "das",
      "word": "Maximum"
    },
    {
      "article": "die",
      "word": "Mechanik"
    },
    {
      "article": "der",
      "word": "Mechanismus"
    },
    {
      "article": "die",
      "word": "Meditation"
    },
    {
      "article": "das",
      "word": "Medium"
    },
    {
      "article": "der",
      "word": "Mediziner"
    },
    {
      "article": "der",
      "word": "Mehrwert"
    },
    {
      "article": "die",
      "word": "Meisterschaft"
    },
    {
      "article": "die",
      "word": "Membran"
    },
    {
      "article": "das",
      "word": "Menschenrecht"
    },
    {
      "article": "die",
      "word": "Menschheit"
    },
    {
      "article": "die",
      "word": "Menschlichkeit"
    },
    {
      "article": "die",
      "word": "Metapher"
    },
    {
      "article": "die",
      "word": "Metropole"
    },
    {
      "article": "die",
      "word": "Migration"
    },
    {
      "article": "die",
      "word": "Minderheit"
    },
    {
      "article": "das",
      "word": "Minimum"
    },
    {
      "article": "das",
      "word": "Ministerium"
    },
    {
      "article": "der",
      "word": "Ministerpräsident"
    },
    {
      "article": "die",
      "word": "Misere"
    },
    {
      "article": "der",
      "word": "Missbrauch"
    },
    {
      "article": "das",
      "word": "Missverständnis"
    },
    {
      "article": "der",
      "word": "Mitbewerber"
    },
    {
      "article": "das",
      "word": "Mitgefühl"
    },
    {
      "article": "die",
      "word": "Mitgliedschaft"
    },
    {
      "article": "das",
      "word": "Mitleid"
    },
    {
      "article": "die",
      "word": "Mitteilung"
    },
    {
      "article": "das",
      "word": "Mittelalter"
    },
    {
      "article": "das",
      "word": "Mittelmeer"
    },
    {
      "article": "der",
      "word": "Mittelpunkt"
    },
    {
      "article": "der",
      "word": "Mittelwert"
    },
    {
      "article": "die",
      "word": "Mitternacht"
    },
    {
      "article": "der",
      "word": "Mob"
    },
    {
      "article": "die",
      "word": "Mobilität"
    },
    {
      "article": "das",
      "word": "Modell"
    },
    {
      "article": "der",
      "word": "Moderator"
    },
    {
      "article": "die",
      "word": "Moderne"
    },
    {
      "article": "das",
      "word": "Modul"
    },
    {
      "article": "der",
      "word": "Modus"
    },
    {
      "article": "der",
      "word": "Mönch"
    },
    {
      "article": "das",
      "word": "Monopol"
    },
    {
      "article": "die",
      "word": "Moral"
    },
    {
      "article": "die",
      "word": "Motivation"
    },
    {
      "article": "die",
      "word": "Muskulatur"
    },
    {
      "article": "der",
      "word": "Mythos"
    },
    {
      "article": "der",
      "word": "Nachahmer"
    },
    {
      "article": "die",
      "word": "Nachbarschaft"
    },
    {
      "article": "die",
      "word": "Nachfolge"
    },
    {
      "article": "der",
      "word": "Nachfolger"
    },
    {
      "article": "die",
      "word": "Nachrichtenagentur"
    },
    {
      "article": "der",
      "word": "Nachweis"
    },
    {
      "article": "der",
      "word": "Nachwuchs"
    },
    {
      "article": "die",
      "word": "Nähe"
    },
    {
      "article": "der",
      "word": "Nationalpark"
    },
    {
      "article": "die",
      "word": "Navigation"
    },
    {
      "article": "die",
      "word": "Neigung"
    },
    {
      "article": "das",
      "word": "Nervensystem"
    },
    {
      "article": "das",
      "word": "Netzwerk"
    },
    {
      "article": "die",
      "word": "Neugier"
    },
    {
      "article": "die",
      "word": "Neuheit"
    },
    {
      "article": "der",
      "word": "Niederschlag"
    },
    {
      "article": "das",
      "word": "Niveau"
    },
    {
      "article": "die",
      "word": "Nominierung"
    },
    {
      "article": "die",
      "word": "Norm"
    },
    {
      "article": "die",
      "word": "Nostalgie"
    },
    {
      "article": "die",
      "word": "Notwendigkeit"
    },
    {
      "article": "die",
      "word": "Nutzung"
    },
    {
      "article": "der",
      "word": "Oberst"
    },
    {
      "article": "die",
      "word": "Offenbarung"
    },
    {
      "article": "die",
      "word": "Offenheit"
    },
    {
      "article": "die",
      "word": "Öffentlichkeit"
    },
    {
      "article": "die",
      "word": "Ohnmacht"
    },
    {
      "article": "die",
      "word": "Ökonomie"
    },
    {
      "article": "die",
      "word": "Operation"
    },
    {
      "article": "die",
      "word": "Opposition"
    },
    {
      "article": "der",
      "word": "Optimismus"
    },
    {
      "article": "der",
      "word": "Organismus"
    },
    {
      "article": "der",
      "word": "Orient"
    },
    {
      "article": "der",
      "word": "Palästinenser"
    },
    {
      "article": "der",
      "word": "Papst"
    },
    {
      "article": "die",
      "word": "Parade"
    },
    {
      "article": "das",
      "word": "Paradies"
    },
    {
      "article": "die",
      "word": "Parallele"
    },
    {
      "article": "der",
      "word": "Parameter"
    },
    {
      "article": "das",
      "word": "Parkett"
    },
    {
      "article": "der",
      "word": "Parteitag"
    },
    {
      "article": "die",
      "word": "Partie"
    },
    {
      "article": "die",
      "word": "Partnerschaft"
    },
    {
      "article": "die",
      "word": "Passage"
    },
    {
      "article": "der",
      "word": "Pastor"
    },
    {
      "article": "der",
      "word": "Patch"
    },
    {
      "article": "das",
      "word": "Patent"
    },
    {
      "article": "die",
      "word": "Patrouille"
    },
    {
      "article": "der",
      "word": "Pavillon"
    },
    {
      "article": "die",
      "word": "Performance"
    },
    {
      "article": "die",
      "word": "Periode"
    },
    {
      "article": "das",
      "word": "Personal"
    },
    {
      "article": "die",
      "word": "Persönlichkeit"
    },
    {
      "article": "die",
      "word": "Perspektive"
    },
    {
      "article": "die",
      "word": "Pest"
    },
    {
      "article": "das",
      "word": "Phänomen"
    },
    {
      "article": "die",
      "word": "Phantasie"
    },
    {
      "article": "die",
      "word": "Phase"
    },
    {
      "article": "der",
      "word": "Philosoph"
    },
    {
      "article": "die",
      "word": "Philosophie"
    },
    {
      "article": "die",
      "word": "Physik"
    },
    {
      "article": "der",
      "word": "Physiker"
    },
    {
      "article": "der",
      "word": "Pilger"
    },
    {
      "article": "der",
      "word": "Pionier"
    },
    {
      "article": "die",
      "word": "Pipeline"
    },
    {
      "article": "das",
      "word": "Plädoyer"
    },
    {
      "article": "die",
      "word": "Plantage"
    },
    {
      "article": "die",
      "word": "Planung"
    },
    {
      "article": "das",
      "word": "Plastik"
    },
    {
      "article": "die",
      "word": "Plattform"
    },
    {
      "article": "der",
      "word": "Platzhalter"
    },
    {
      "article": "die",
      "word": "Poesie"
    },
    {
      "article": "der",
      "word": "Pole"
    },
    {
      "article": "der",
      "word": "Politiker"
    },
    {
      "article": "die",
      "word": "Population"
    },
    {
      "article": "das",
      "word": "Portfolio"
    },
    {
      "article": "das",
      "word": "Porträt"
    },
    {
      "article": "die",
      "word": "Pose"
    }
  ],
  "C2": [
    {
      "article": "der",
      "word": "Posten"
    },
    {
      "article": "das",
      "word": "Potenzial"
    },
    {
      "article": "das",
      "word": "Präparat"
    },
    {
      "article": "die",
      "word": "Präsidentschaft"
    },
    {
      "article": "die",
      "word": "Prävention"
    },
    {
      "article": "die",
      "word": "Praxis"
    },
    {
      "article": "der",
      "word": "Präzedenzfall"
    },
    {
      "article": "die",
      "word": "Präzision"
    },
    {
      "article": "der",
      "word": "Premier"
    },
    {
      "article": "die",
      "word": "Premiere"
    },
    {
      "article": "der",
      "word": "Premierminister"
    },
    {
      "article": "die",
      "word": "Presse"
    },
    {
      "article": "die",
      "word": "Pressekonferenz"
    },
    {
      "article": "die",
      "word": "Priorität"
    },
    {
      "article": "die",
      "word": "Privatisierung"
    },
    {
      "article": "die",
      "word": "Privatsphäre"
    },
    {
      "article": "das",
      "word": "Privileg"
    },
    {
      "article": "die",
      "word": "Problematik"
    },
    {
      "article": "die",
      "word": "Produktivität"
    },
    {
      "article": "der",
      "word": "Produzent"
    },
    {
      "article": "der",
      "word": "Profit"
    },
    {
      "article": "die",
      "word": "Prognose"
    },
    {
      "article": "die",
      "word": "Programmierung"
    },
    {
      "article": "die",
      "word": "Projektion"
    },
    {
      "article": "der",
      "word": "Projektor"
    },
    {
      "article": "der",
      "word": "Prominente"
    },
    {
      "article": "die",
      "word": "Propaganda"
    },
    {
      "article": "der",
      "word": "Protagonist"
    },
    {
      "article": "das",
      "word": "Protein"
    },
    {
      "article": "der",
      "word": "Prozess"
    },
    {
      "article": "der",
      "word": "Prozessor"
    },
    {
      "article": "die",
      "word": "Psyche"
    },
    {
      "article": "der",
      "word": "Psychologe"
    },
    {
      "article": "die",
      "word": "Psychologie"
    },
    {
      "article": "der",
      "word": "Puffer"
    },
    {
      "article": "der",
      "word": "Punk"
    },
    {
      "article": "die",
      "word": "Qualifikation"
    },
    {
      "article": "das",
      "word": "Quartier"
    },
    {
      "article": "die",
      "word": "Quote"
    },
    {
      "article": "das",
      "word": "Radar"
    },
    {
      "article": "der",
      "word": "Radius"
    },
    {
      "article": "der",
      "word": "Radsport"
    },
    {
      "article": "die",
      "word": "Rallye"
    },
    {
      "article": "das",
      "word": "Rampenlicht"
    },
    {
      "article": "der",
      "word": "Raub"
    },
    {
      "article": "die",
      "word": "Räumung"
    },
    {
      "article": "der",
      "word": "Rausch"
    },
    {
      "article": "der",
      "word": "Reaktor"
    },
    {
      "article": "die",
      "word": "Realisierung"
    },
    {
      "article": "die",
      "word": "Realität"
    },
    {
      "article": "die",
      "word": "Recherche"
    },
    {
      "article": "die",
      "word": "Rechtfertigung"
    },
    {
      "article": "der",
      "word": "Rechtsanwalt"
    },
    {
      "article": "die",
      "word": "Rechtsprechung"
    },
    {
      "article": "die",
      "word": "Reduktion"
    },
    {
      "article": "die",
      "word": "Reduzierung"
    },
    {
      "article": "das",
      "word": "Referendum"
    },
    {
      "article": "der",
      "word": "Referent"
    },
    {
      "article": "die",
      "word": "Referenz"
    },
    {
      "article": "die",
      "word": "Reflexion"
    },
    {
      "article": "die",
      "word": "Reform"
    },
    {
      "article": "die",
      "word": "Regelung"
    },
    {
      "article": "der",
      "word": "Regenschauer"
    },
    {
      "article": "die",
      "word": "Regierung"
    },
    {
      "article": "der",
      "word": "Regierungschef"
    },
    {
      "article": "das",
      "word": "Regime"
    },
    {
      "article": "der",
      "word": "Regisseur"
    },
    {
      "article": "das",
      "word": "Register"
    },
    {
      "article": "das",
      "word": "Reich"
    },
    {
      "article": "der",
      "word": "Reichtum"
    },
    {
      "article": "die",
      "word": "Reichweite"
    },
    {
      "article": "die",
      "word": "Reihenfolge"
    },
    {
      "article": "die",
      "word": "Reinheit"
    },
    {
      "article": "der",
      "word": "Reisende"
    },
    {
      "article": "der",
      "word": "Reiz"
    },
    {
      "article": "der",
      "word": "Rektor"
    },
    {
      "article": "die",
      "word": "Relation"
    },
    {
      "article": "die",
      "word": "Relevanz"
    },
    {
      "article": "das",
      "word": "Relief"
    },
    {
      "article": "die",
      "word": "Rendite"
    },
    {
      "article": "die",
      "word": "Reproduktion"
    },
    {
      "article": "die",
      "word": "Republik"
    },
    {
      "article": "der",
      "word": "Republikaner"
    },
    {
      "article": "die",
      "word": "Reserve"
    },
    {
      "article": "die",
      "word": "Reservierung"
    },
    {
      "article": "die",
      "word": "Residenz"
    },
    {
      "article": "das",
      "word": "Resort"
    },
    {
      "article": "das",
      "word": "Ressort"
    },
    {
      "article": "die",
      "word": "Ressource"
    },
    {
      "article": "das",
      "word": "Resultat"
    },
    {
      "article": "die",
      "word": "Reue"
    },
    {
      "article": "die",
      "word": "Revolution"
    },
    {
      "article": "die",
      "word": "Rezession"
    },
    {
      "article": "die",
      "word": "Rhetorik"
    },
    {
      "article": "das",
      "word": "Rheuma"
    },
    {
      "article": "der",
      "word": "Rhythmus"
    },
    {
      "article": "die",
      "word": "Richtlinie"
    },
    {
      "article": "das",
      "word": "Riff"
    },
    {
      "article": "das",
      "word": "Ringen"
    },
    {
      "article": "das",
      "word": "Ritual"
    },
    {
      "article": "der",
      "word": "Rivale"
    },
    {
      "article": "der",
      "word": "Rohstoff"
    },
    {
      "article": "die",
      "word": "Romanze"
    },
    {
      "article": "der",
      "word": "Römer"
    },
    {
      "article": "die",
      "word": "Rotation"
    },
    {
      "article": "die",
      "word": "Routine"
    },
    {
      "article": "die",
      "word": "Rubrik"
    },
    {
      "article": "der",
      "word": "Rückgang"
    },
    {
      "article": "der",
      "word": "Rückhalt"
    },
    {
      "article": "die",
      "word": "Rückkehr"
    },
    {
      "article": "die",
      "word": "Rückmeldung"
    },
    {
      "article": "der",
      "word": "Rückruf"
    },
    {
      "article": "die",
      "word": "Rücksicht"
    },
    {
      "article": "der",
      "word": "Rückstand"
    },
    {
      "article": "der",
      "word": "Rücktritt"
    },
    {
      "article": "der",
      "word": "Rückzug"
    },
    {
      "article": "der",
      "word": "Ruhm"
    },
    {
      "article": "die",
      "word": "Ruine"
    },
    {
      "article": "die",
      "word": "Runde"
    },
    {
      "article": "der",
      "word": "Rundfunk"
    },
    {
      "article": "der",
      "word": "Russe"
    },
    {
      "article": "die",
      "word": "Rutsche"
    },
    {
      "article": "der",
      "word": "Saal"
    },
    {
      "article": "das",
      "word": "Saatgut"
    },
    {
      "article": "der",
      "word": "Sachverhalt"
    },
    {
      "article": "der",
      "word": "Safe"
    },
    {
      "article": "das",
      "word": "Sagen"
    },
    {
      "article": "die",
      "word": "Saison"
    },
    {
      "article": "der",
      "word": "Salon"
    },
    {
      "article": "der",
      "word": "Satellit"
    },
    {
      "article": "der",
      "word": "Säugling"
    },
    {
      "article": "die",
      "word": "Säule"
    },
    {
      "article": "die",
      "word": "Säure"
    },
    {
      "article": "der",
      "word": "Schädel"
    },
    {
      "article": "der",
      "word": "Schadenersatz"
    },
    {
      "article": "die",
      "word": "Scham"
    },
    {
      "article": "die",
      "word": "Schande"
    },
    {
      "article": "die",
      "word": "Schätzung"
    },
    {
      "article": "die",
      "word": "Schau"
    },
    {
      "article": "der",
      "word": "Schauer"
    },
    {
      "article": "die",
      "word": "Scheidung"
    },
    {
      "article": "das",
      "word": "Schema"
    },
    {
      "article": "der",
      "word": "Scherz"
    },
    {
      "article": "die",
      "word": "Scheu"
    },
    {
      "article": "die",
      "word": "Schicht"
    },
    {
      "article": "das",
      "word": "Schicksal"
    },
    {
      "article": "der",
      "word": "Schiedsrichter"
    },
    {
      "article": "der",
      "word": "Schilling"
    },
    {
      "article": "die",
      "word": "Schlacht"
    },
    {
      "article": "das",
      "word": "Schlachtfeld"
    },
    {
      "article": "der",
      "word": "Schlag"
    },
    {
      "article": "der",
      "word": "Schläger"
    },
    {
      "article": "die",
      "word": "Schlägerei"
    },
    {
      "article": "die",
      "word": "Schlagzeile"
    },
    {
      "article": "die",
      "word": "Schleuse"
    },
    {
      "article": "die",
      "word": "Schließung"
    },
    {
      "article": "der",
      "word": "Schluss"
    },
    {
      "article": "die",
      "word": "Schnittstelle"
    },
    {
      "article": "der",
      "word": "Schock"
    },
    {
      "article": "die",
      "word": "Schönheit"
    },
    {
      "article": "der",
      "word": "Schöpfer"
    },
    {
      "article": "die",
      "word": "Schreibweise"
    },
    {
      "article": "die",
      "word": "Schrift"
    },
    {
      "article": "der",
      "word": "Schriftsteller"
    },
    {
      "article": "der",
      "word": "Schrott"
    },
    {
      "article": "die",
      "word": "Schuld"
    },
    {
      "article": "die",
      "word": "Schwerkraft"
    },
    {
      "article": "der",
      "word": "Schwerpunkt"
    },
    {
      "article": "die",
      "word": "Schwingung"
    },
    {
      "article": "der",
      "word": "Schwung"
    },
    {
      "article": "die",
      "word": "Seele"
    },
    {
      "article": "der",
      "word": "Segen"
    },
    {
      "article": "das",
      "word": "Segment"
    },
    {
      "article": "die",
      "word": "Sehnsucht"
    },
    {
      "article": "die",
      "word": "Seide"
    },
    {
      "article": "das",
      "word": "Sein"
    },
    {
      "article": "die",
      "word": "Sektion"
    },
    {
      "article": "der",
      "word": "Sektor"
    },
    {
      "article": "die",
      "word": "Selbstständigkeit"
    },
    {
      "article": "der",
      "word": "Senat"
    },
    {
      "article": "der",
      "word": "Senator"
    },
    {
      "article": "die",
      "word": "Senkung"
    },
    {
      "article": "die",
      "word": "Sequenz"
    },
    {
      "article": "der",
      "word": "Service"
    },
    {
      "article": "die",
      "word": "Sexualität"
    },
    {
      "article": "die",
      "word": "Sicherung"
    },
    {
      "article": "die",
      "word": "Sicht"
    },
    {
      "article": "die",
      "word": "Simulation"
    },
    {
      "article": "die",
      "word": "Single"
    },
    {
      "article": "der",
      "word": "Sir"
    },
    {
      "article": "die",
      "word": "Skala"
    },
    {
      "article": "der",
      "word": "Skandal"
    },
    {
      "article": "das",
      "word": "Skelett"
    },
    {
      "article": "die",
      "word": "Skepsis"
    },
    {
      "article": "die",
      "word": "Sklaverei"
    },
    {
      "article": "das",
      "word": "Skript"
    },
    {
      "article": "die",
      "word": "Skulptur"
    },
    {
      "article": "die",
      "word": "Software"
    },
    {
      "article": "die",
      "word": "Solidarität"
    },
    {
      "article": "das",
      "word": "Solo"
    },
    {
      "article": "die",
      "word": "Sonde"
    },
    {
      "article": "die",
      "word": "Souveränität"
    },
    {
      "article": "der",
      "word": "Sozialarbeiter"
    },
    {
      "article": "der",
      "word": "Sozialdemokrat"
    },
    {
      "article": "die",
      "word": "Soziologie"
    },
    {
      "article": "der",
      "word": "Spalt"
    },
    {
      "article": "die",
      "word": "Spalte"
    },
    {
      "article": "die",
      "word": "Spaltung"
    },
    {
      "article": "der",
      "word": "Spam"
    },
    {
      "article": "die",
      "word": "Spannung"
    },
    {
      "article": "die",
      "word": "Spannweite"
    },
    {
      "article": "das",
      "word": "Spektakel"
    },
    {
      "article": "das",
      "word": "Spektrum"
    },
    {
      "article": "die",
      "word": "Spekulation"
    },
    {
      "article": "die",
      "word": "Spezies"
    },
    {
      "article": "die",
      "word": "Spezifikation"
    },
    {
      "article": "der",
      "word": "Spielraum"
    },
    {
      "article": "der",
      "word": "Spion"
    },
    {
      "article": "die",
      "word": "Spionage"
    },
    {
      "article": "der",
      "word": "Spott"
    },
    {
      "article": "der",
      "word": "Sprengstoff"
    },
    {
      "article": "der",
      "word": "Spruch"
    },
    {
      "article": "der",
      "word": "Spuk"
    },
    {
      "article": "der",
      "word": "Staatsanwalt"
    },
    {
      "article": "die",
      "word": "Staatsbürgerschaft"
    },
    {
      "article": "die",
      "word": "Stabilität"
    },
    {
      "article": "das",
      "word": "Stadium"
    },
    {
      "article": "der",
      "word": "Stadtrat"
    },
    {
      "article": "der",
      "word": "Stamm"
    },
    {
      "article": "der",
      "word": "Stand"
    },
    {
      "article": "der",
      "word": "Standard"
    },
    {
      "article": "der",
      "word": "Standort"
    },
    {
      "article": "der",
      "word": "Standpunkt"
    },
    {
      "article": "die",
      "word": "Starre"
    },
    {
      "article": "die",
      "word": "Statistik"
    },
    {
      "article": "die",
      "word": "Statue"
    },
    {
      "article": "der",
      "word": "Status"
    },
    {
      "article": "die",
      "word": "Steigerung"
    },
    {
      "article": "die",
      "word": "Steigung"
    },
    {
      "article": "die",
      "word": "Stellung"
    },
    {
      "article": "die",
      "word": "Stellungnahme"
    },
    {
      "article": "der",
      "word": "Stellvertreter"
    },
    {
      "article": "der",
      "word": "Steuerberater"
    },
    {
      "article": "die",
      "word": "Steuerung"
    },
    {
      "article": "der",
      "word": "Steuerzahler"
    },
    {
      "article": "der",
      "word": "Stich"
    },
    {
      "article": "die",
      "word": "Stichprobe"
    },
    {
      "article": "das",
      "word": "Stichwort"
    },
    {
      "article": "der",
      "word": "Stickstoff"
    },
    {
      "article": "die",
      "word": "Stiftung"
    },
    {
      "article": "der",
      "word": "Stil"
    },
    {
      "article": "die",
      "word": "Stille"
    },
    {
      "article": "der",
      "word": "Stimmzettel"
    },
    {
      "article": "das",
      "word": "Stipendium"
    },
    {
      "article": "der",
      "word": "Stoffwechsel"
    },
    {
      "article": "der",
      "word": "Stolz"
    },
    {
      "article": "die",
      "word": "Störung"
    },
    {
      "article": "die",
      "word": "Straftat"
    },
    {
      "article": "der",
      "word": "Straftäter"
    },
    {
      "article": "die",
      "word": "Strafverfolgung"
    },
    {
      "article": "die",
      "word": "Strahlung"
    },
    {
      "article": "die",
      "word": "Strategie"
    },
    {
      "article": "der",
      "word": "Strauß"
    },
    {
      "article": "das",
      "word": "Streben"
    },
    {
      "article": "die",
      "word": "Strömung"
    },
    {
      "article": "die",
      "word": "Struktur"
    },
    {
      "article": "die",
      "word": "Studie"
    },
    {
      "article": "der",
      "word": "Studiengang"
    },
    {
      "article": "das",
      "word": "Studium"
    },
    {
      "article": "der",
      "word": "Stürmer"
    },
    {
      "article": "der",
      "word": "Sturz"
    },
    {
      "article": "die",
      "word": "Stütze"
    },
    {
      "article": "die",
      "word": "Substanz"
    },
    {
      "article": "das",
      "word": "Substrat"
    },
    {
      "article": "die",
      "word": "Subvention"
    },
    {
      "article": "die",
      "word": "Sucht"
    },
    {
      "article": "die",
      "word": "Suite"
    },
    {
      "article": "der",
      "word": "Sumpf"
    },
    {
      "article": "die",
      "word": "Synthese"
    },
    {
      "article": "das",
      "word": "Szenario"
    },
    {
      "article": "der",
      "word": "Tadel"
    },
    {
      "article": "die",
      "word": "Tagesmutter"
    },
    {
      "article": "die",
      "word": "Tagesordnung"
    },
    {
      "article": "die",
      "word": "Taktik"
    },
    {
      "article": "der",
      "word": "Tarif"
    },
    {
      "article": "die",
      "word": "Tätigkeit"
    },
    {
      "article": "der",
      "word": "Tatort"
    },
    {
      "article": "die",
      "word": "Technologie"
    },
    {
      "article": "die",
      "word": "Teilung"
    },
    {
      "article": "die",
      "word": "Tendenz"
    },
    {
      "article": "der",
      "word": "Tenor"
    },
    {
      "article": "das",
      "word": "Territorium"
    },
    {
      "article": "der",
      "word": "Terror"
    },
    {
      "article": "das",
      "word": "Testament"
    },
    {
      "article": "die",
      "word": "Theorie"
    },
    {
      "article": "die",
      "word": "Therapie"
    },
    {
      "article": "die",
      "word": "These"
    },
    {
      "article": "der",
      "word": "Thriller"
    },
    {
      "article": "der",
      "word": "Thron"
    },
    {
      "article": "die",
      "word": "Tierwelt"
    },
    {
      "article": "das",
      "word": "Timing"
    },
    {
      "article": "die",
      "word": "Toleranz"
    },
    {
      "article": "der",
      "word": "Tonfall"
    },
    {
      "article": "das",
      "word": "Top"
    },
    {
      "article": "der",
      "word": "Tornado"
    },
    {
      "article": "der",
      "word": "Torwart"
    },
    {
      "article": "der",
      "word": "Tote"
    },
    {
      "article": "der",
      "word": "Tourismus"
    },
    {
      "article": "der",
      "word": "Träger"
    },
    {
      "article": "die",
      "word": "Trägheit"
    },
    {
      "article": "die",
      "word": "Tragödie"
    },
    {
      "article": "die",
      "word": "Transaktion"
    },
    {
      "article": "der",
      "word": "Transfer"
    },
    {
      "article": "die",
      "word": "Transformation"
    },
    {
      "article": "die",
      "word": "Transparenz"
    },
    {
      "article": "die",
      "word": "Trauer"
    },
    {
      "article": "das",
      "word": "Trauma"
    },
    {
      "article": "die",
      "word": "Trauung"
    },
    {
      "article": "der",
      "word": "Treffer"
    },
    {
      "article": "der",
      "word": "Treibstoff"
    },
    {
      "article": "der",
      "word": "Tresor"
    },
    {
      "article": "das",
      "word": "Tribunal"
    },
    {
      "article": "der",
      "word": "Tribut"
    },
    {
      "article": "die",
      "word": "Trilogie"
    },
    {
      "article": "der",
      "word": "Triumph"
    },
    {
      "article": "der",
      "word": "Trost"
    },
    {
      "article": "die",
      "word": "Tugend"
    },
    {
      "article": "das",
      "word": "Übel"
    },
    {
      "article": "die",
      "word": "Übelkeit"
    },
    {
      "article": "der",
      "word": "Überblick"
    },
    {
      "article": "die",
      "word": "Übereinstimmung"
    },
    {
      "article": "der",
      "word": "Überfall"
    },
    {
      "article": "die",
      "word": "Übergabe"
    },
    {
      "article": "der",
      "word": "Überlebende"
    },
    {
      "article": "die",
      "word": "Übernahme"
    },
    {
      "article": "der",
      "word": "Überschuss"
    },
    {
      "article": "die",
      "word": "Übertragung"
    },
    {
      "article": "die",
      "word": "Überwachung"
    },
    {
      "article": "die",
      "word": "Überzeugung"
    },
    {
      "article": "das",
      "word": "Ultimatum"
    },
    {
      "article": "der",
      "word": "Umfang"
    },
    {
      "article": "das",
      "word": "Umfeld"
    },
    {
      "article": "der",
      "word": "Umgang"
    },
    {
      "article": "der",
      "word": "Umsatz"
    },
    {
      "article": "die",
      "word": "Umsetzung"
    },
    {
      "article": "der",
      "word": "Umstand"
    },
    {
      "article": "die",
      "word": "Umwandlung"
    },
    {
      "article": "die",
      "word": "Unabhängigkeit"
    },
    {
      "article": "das",
      "word": "Ungeheuer"
    },
    {
      "article": "das",
      "word": "Unglück"
    },
    {
      "article": "die",
      "word": "Union"
    },
    {
      "article": "die",
      "word": "Universität"
    },
    {
      "article": "der",
      "word": "Unmut"
    },
    {
      "article": "die",
      "word": "Unordnung"
    },
    {
      "article": "das",
      "word": "Unrecht"
    },
    {
      "article": "die",
      "word": "Unruhe"
    },
    {
      "article": "die",
      "word": "Unsicherheit"
    },
    {
      "article": "der",
      "word": "Unsinn"
    },
    {
      "article": "die",
      "word": "Unterschrift"
    },
    {
      "article": "der",
      "word": "Unterstützer"
    },
    {
      "article": "die",
      "word": "Unterstützung"
    },
    {
      "article": "die",
      "word": "Untersuchung"
    },
    {
      "article": "die",
      "word": "Unterwäsche"
    },
    {
      "article": "das",
      "word": "Unwetter"
    },
    {
      "article": "die",
      "word": "Unwissenheit"
    },
    {
      "article": "das",
      "word": "Uran"
    },
    {
      "article": "das",
      "word": "Urheberrecht"
    },
    {
      "article": "die",
      "word": "Urkunde"
    },
    {
      "article": "der",
      "word": "Ursprung"
    },
    {
      "article": "das",
      "word": "Urteil"
    },
    {
      "article": "die",
      "word": "Utopie"
    },
    {
      "article": "der",
      "word": "Vandalismus"
    },
    {
      "article": "die",
      "word": "Variable"
    },
    {
      "article": "die",
      "word": "Variante"
    },
    {
      "article": "die",
      "word": "Variation"
    },
    {
      "article": "die",
      "word": "Verachtung"
    },
    {
      "article": "die",
      "word": "Veränderung"
    },
    {
      "article": "der",
      "word": "Veranstalter"
    },
    {
      "article": "die",
      "word": "Verarbeitung"
    },
    {
      "article": "der",
      "word": "Verband"
    },
    {
      "article": "die",
      "word": "Verbesserung"
    },
    {
      "article": "die",
      "word": "Verbindlichkeit"
    },
    {
      "article": "das",
      "word": "Verbrechen"
    },
    {
      "article": "die",
      "word": "Verbreitung"
    },
    {
      "article": "der",
      "word": "Verbündete"
    },
    {
      "article": "der",
      "word": "Verdacht"
    },
    {
      "article": "der",
      "word": "Verdächtige"
    },
    {
      "article": "die",
      "word": "Vereinbarung"
    },
    {
      "article": "die",
      "word": "Vereinigung"
    },
    {
      "article": "das",
      "word": "Verfahren"
    },
    {
      "article": "die",
      "word": "Verfassung"
    },
    {
      "article": "die",
      "word": "Verfolgung"
    },
    {
      "article": "die",
      "word": "Verfügbarkeit"
    },
    {
      "article": "die",
      "word": "Verfügung"
    },
    {
      "article": "die",
      "word": "Vergangenheit"
    },
    {
      "article": "der",
      "word": "Vergleich"
    },
    {
      "article": "das",
      "word": "Verhältnis"
    },
    {
      "article": "die",
      "word": "Verhandlung"
    },
    {
      "article": "das",
      "word": "Verhör"
    },
    {
      "article": "die",
      "word": "Verknüpfung"
    },
    {
      "article": "der",
      "word": "Verlag"
    },
    {
      "article": "das",
      "word": "Verlangen"
    },
    {
      "article": "die",
      "word": "Verlängerung"
    },
    {
      "article": "der",
      "word": "Verlauf"
    },
    {
      "article": "der",
      "word": "Verletzte"
    },
    {
      "article": "die",
      "word": "Verletzung"
    },
    {
      "article": "der",
      "word": "Verlust"
    },
    {
      "article": "das",
      "word": "Vermächtnis"
    },
    {
      "article": "der",
      "word": "Vermieter"
    },
    {
      "article": "die",
      "word": "Vermittlung"
    },
    {
      "article": "das",
      "word": "Vermögen"
    },
    {
      "article": "die",
      "word": "Vermutung"
    },
    {
      "article": "die",
      "word": "Vernachlässigung"
    },
    {
      "article": "die",
      "word": "Vernunft"
    },
    {
      "article": "die",
      "word": "Veröffentlichung"
    },
    {
      "article": "die",
      "word": "Verordnung"
    },
    {
      "article": "die",
      "word": "Verpflichtung"
    },
    {
      "article": "der",
      "word": "Versager"
    },
    {
      "article": "der",
      "word": "Versand"
    },
    {
      "article": "die",
      "word": "Verschiebung"
    },
    {
      "article": "die",
      "word": "Verschmutzung"
    },
    {
      "article": "die",
      "word": "Verschwörung"
    },
    {
      "article": "die",
      "word": "Verstärkung"
    },
    {
      "article": "der",
      "word": "Verstoß"
    },
    {
      "article": "der",
      "word": "Verteidiger"
    },
    {
      "article": "die",
      "word": "Verteidigung"
    },
    {
      "article": "die",
      "word": "Verteilung"
    },
    {
      "article": "der",
      "word": "Vertreter"
    },
    {
      "article": "die",
      "word": "Vertretung"
    },
    {
      "article": "der",
      "word": "Vertrieb"
    },
    {
      "article": "die",
      "word": "Verwaltung"
    },
    {
      "article": "der",
      "word": "Verwandte"
    },
    {
      "article": "der",
      "word": "Verweis"
    },
    {
      "article": "die",
      "word": "Verwendung"
    },
    {
      "article": "die",
      "word": "Verzögerung"
    },
    {
      "article": "die",
      "word": "Verzweiflung"
    },
    {
      "article": "die",
      "word": "Vielfalt"
    },
    {
      "article": "die",
      "word": "Vielzahl"
    },
    {
      "article": "das",
      "word": "Visier"
    },
    {
      "article": "die",
      "word": "Vision"
    },
    {
      "article": "die",
      "word": "Vita"
    },
    {
      "article": "der",
      "word": "Vizepräsident"
    },
    {
      "article": "der",
      "word": "Völkermord"
    },
    {
      "article": "der",
      "word": "Volkswagen"
    },
    {
      "article": "die",
      "word": "Volkswirtschaft"
    },
    {
      "article": "die",
      "word": "Vollmacht"
    },
    {
      "article": "die",
      "word": "Voraussetzung"
    },
    {
      "article": "die",
      "word": "Vorbereitung"
    },
    {
      "article": "der",
      "word": "Vorfall"
    },
    {
      "article": "das",
      "word": "Vorfeld"
    },
    {
      "article": "die",
      "word": "Vorgabe"
    },
    {
      "article": "der",
      "word": "Vorgang"
    },
    {
      "article": "der",
      "word": "Vorgänger"
    },
    {
      "article": "das",
      "word": "Vorgehen"
    },
    {
      "article": "die",
      "word": "Vorgehensweise"
    },
    {
      "article": "der",
      "word": "Vorgesetzte"
    },
    {
      "article": "das",
      "word": "Vorhaben"
    },
    {
      "article": "die",
      "word": "Vorhersage"
    },
    {
      "article": "die",
      "word": "Vorlage"
    },
    {
      "article": "der",
      "word": "Vormarsch"
    },
    {
      "article": "der",
      "word": "Vorort"
    },
    {
      "article": "der",
      "word": "Vorrat"
    },
    {
      "article": "der",
      "word": "Vorsitz"
    },
    {
      "article": "der",
      "word": "Vorsitzende"
    },
    {
      "article": "der",
      "word": "Vorsprung"
    },
    {
      "article": "die",
      "word": "Vorstadt"
    },
    {
      "article": "der",
      "word": "Vorstand"
    },
    {
      "article": "der",
      "word": "Vorstoß"
    },
    {
      "article": "der",
      "word": "Vortrag"
    },
    {
      "article": "das",
      "word": "Vorurteil"
    },
    {
      "article": "der",
      "word": "Vorwurf"
    },
    {
      "article": "das",
      "word": "Vorzeichen"
    },
    {
      "article": "das",
      "word": "Wachstum"
    },
    {
      "article": "der",
      "word": "Wahlkampf"
    },
    {
      "article": "die",
      "word": "Wahlperiode"
    },
    {
      "article": "der",
      "word": "Wahn"
    },
    {
      "article": "der",
      "word": "Wahnsinn"
    },
    {
      "article": "die",
      "word": "Wahrnehmung"
    },
    {
      "article": "die",
      "word": "Wahrscheinlichkeit"
    },
    {
      "article": "der",
      "word": "Wandel"
    },
    {
      "article": "der",
      "word": "Wasserstoff"
    },
    {
      "article": "der",
      "word": "Wechsel"
    },
    {
      "article": "der",
      "word": "Wechselkurs"
    },
    {
      "article": "die",
      "word": "Wechselwirkung"
    },
    {
      "article": "das",
      "word": "Weib"
    },
    {
      "article": "das",
      "word": "Weibchen"
    },
    {
      "article": "die",
      "word": "Weiche"
    },
    {
      "article": "die",
      "word": "Weide"
    },
    {
      "article": "die",
      "word": "Weile"
    },
    {
      "article": "die",
      "word": "Weise"
    },
    {
      "article": "die",
      "word": "Weisheit"
    },
    {
      "article": "die",
      "word": "Weiterbildung"
    },
    {
      "article": "die",
      "word": "Weiterentwicklung"
    },
    {
      "article": "die",
      "word": "Wellenlänge"
    },
    {
      "article": "der",
      "word": "Weltkrieg"
    },
    {
      "article": "die",
      "word": "Wendung"
    },
    {
      "article": "die",
      "word": "Wertschätzung"
    },
    {
      "article": "das",
      "word": "Wesen"
    },
    {
      "article": "die",
      "word": "Wichtigkeit"
    },
    {
      "article": "der",
      "word": "Widerspruch"
    }
  ]
} as const;
