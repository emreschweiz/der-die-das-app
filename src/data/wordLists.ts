export type WordListLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type WordListEntry = {
  article: 'der' | 'die' | 'das';
  word: string;
  translation: {
    tr: string;
    en: string;
  };
};

export const WORD_LISTS: Record<WordListLevel, WordListEntry[]> = {
  "A1": [
    {
      "article": "der",
      "word": "Abend",
      "translation": {
        "tr": "akşam",
        "en": "evening"
      }
    },
    {
      "article": "das",
      "word": "Abendessen",
      "translation": {
        "tr": "Akşam Yemeği",
        "en": "Dinner"
      }
    },
    {
      "article": "das",
      "word": "Abenteuer",
      "translation": {
        "tr": "Macera",
        "en": "Adventure"
      }
    },
    {
      "article": "der",
      "word": "Abfall",
      "translation": {
        "tr": "Atık",
        "en": "Waste"
      }
    },
    {
      "article": "das",
      "word": "Abitur",
      "translation": {
        "tr": "Lise diploması",
        "en": "High school diploma"
      }
    },
    {
      "article": "die",
      "word": "Absicht",
      "translation": {
        "tr": "Niyet",
        "en": "Intention"
      }
    },
    {
      "article": "der",
      "word": "Abstand",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      }
    },
    {
      "article": "der",
      "word": "Adler",
      "translation": {
        "tr": "Kartal",
        "en": "Eagle"
      }
    },
    {
      "article": "die",
      "word": "Adresse",
      "translation": {
        "tr": "Adres",
        "en": "Address"
      }
    },
    {
      "article": "der",
      "word": "Affe",
      "translation": {
        "tr": "Maymun",
        "en": "Monkey"
      }
    },
    {
      "article": "die",
      "word": "Ahnung",
      "translation": {
        "tr": "Önsezi",
        "en": "Hunch"
      }
    },
    {
      "article": "das",
      "word": "Album",
      "translation": {
        "tr": "albüm",
        "en": "album"
      }
    },
    {
      "article": "der",
      "word": "Alkohol",
      "translation": {
        "tr": "Alkol",
        "en": "Alcohol"
      }
    },
    {
      "article": "der",
      "word": "Alltag",
      "translation": {
        "tr": "Günlük yaşam",
        "en": "Everyday life"
      }
    },
    {
      "article": "das",
      "word": "Alphabet",
      "translation": {
        "tr": "alfabe",
        "en": "Alphabet"
      }
    },
    {
      "article": "das",
      "word": "Alter",
      "translation": {
        "tr": "dostum",
        "en": "Dude"
      }
    },
    {
      "article": "die",
      "word": "Alternative",
      "translation": {
        "tr": "Alternatif",
        "en": "Alternative"
      }
    },
    {
      "article": "der",
      "word": "Amerikaner",
      "translation": {
        "tr": "Amerikan",
        "en": "American"
      }
    },
    {
      "article": "die",
      "word": "Ampel",
      "translation": {
        "tr": "Trafik ışığı",
        "en": "Traffic light"
      }
    },
    {
      "article": "das",
      "word": "Amt",
      "translation": {
        "tr": "ofis",
        "en": "office"
      }
    },
    {
      "article": "die",
      "word": "Ananas",
      "translation": {
        "tr": "Ananas",
        "en": "Pineapple"
      }
    },
    {
      "article": "der",
      "word": "Anfang",
      "translation": {
        "tr": "başlangıç",
        "en": "beginning"
      }
    },
    {
      "article": "das",
      "word": "Angebot",
      "translation": {
        "tr": "Teklif",
        "en": "Offer"
      }
    },
    {
      "article": "die",
      "word": "Angst",
      "translation": {
        "tr": "Korku",
        "en": "Fear"
      }
    },
    {
      "article": "die",
      "word": "Ankunft",
      "translation": {
        "tr": "Varış",
        "en": "Arrival"
      }
    },
    {
      "article": "der",
      "word": "Anruf",
      "translation": {
        "tr": "Ara",
        "en": "Call"
      }
    },
    {
      "article": "die",
      "word": "Ansage",
      "translation": {
        "tr": "Duyuru",
        "en": "Announcement"
      }
    },
    {
      "article": "der",
      "word": "Anstieg",
      "translation": {
        "tr": "artış",
        "en": "increase"
      }
    },
    {
      "article": "die",
      "word": "Antwort",
      "translation": {
        "tr": "Cevap",
        "en": "Answer"
      }
    },
    {
      "article": "der",
      "word": "Anwalt",
      "translation": {
        "tr": "Avukat",
        "en": "Lawyer"
      }
    },
    {
      "article": "die",
      "word": "Anzeige",
      "translation": {
        "tr": "Reklam",
        "en": "Advertisement"
      }
    },
    {
      "article": "der",
      "word": "Anzug",
      "translation": {
        "tr": "takım elbise",
        "en": "suit"
      }
    },
    {
      "article": "der",
      "word": "Apfel",
      "translation": {
        "tr": "elma",
        "en": "Apple"
      }
    },
    {
      "article": "die",
      "word": "Apotheke",
      "translation": {
        "tr": "Eczane",
        "en": "Pharmacy"
      }
    },
    {
      "article": "der",
      "word": "Apparat",
      "translation": {
        "tr": "aparat",
        "en": "apparatus"
      }
    },
    {
      "article": "der",
      "word": "Appetit",
      "translation": {
        "tr": "iştah",
        "en": "appetite"
      }
    },
    {
      "article": "der",
      "word": "Applaus",
      "translation": {
        "tr": "Alkış",
        "en": "Applause"
      }
    },
    {
      "article": "der",
      "word": "April",
      "translation": {
        "tr": "Nisan",
        "en": "April"
      }
    },
    {
      "article": "die",
      "word": "Arbeit",
      "translation": {
        "tr": "iş",
        "en": "work"
      }
    },
    {
      "article": "der",
      "word": "Arbeiter",
      "translation": {
        "tr": "işçiler",
        "en": "workers"
      }
    },
    {
      "article": "der",
      "word": "Arm",
      "translation": {
        "tr": "Zayıf",
        "en": "Poor"
      }
    },
    {
      "article": "die",
      "word": "Art",
      "translation": {
        "tr": "Sanat",
        "en": "Art"
      }
    },
    {
      "article": "der",
      "word": "Artikel",
      "translation": {
        "tr": "Makale",
        "en": "Article"
      }
    },
    {
      "article": "der",
      "word": "Arzt",
      "translation": {
        "tr": "doktor",
        "en": "doctor"
      }
    },
    {
      "article": "die",
      "word": "Asche",
      "translation": {
        "tr": "kül",
        "en": "Ash"
      }
    },
    {
      "article": "der",
      "word": "Assistent",
      "translation": {
        "tr": "Asistan",
        "en": "Assistant"
      }
    },
    {
      "article": "der",
      "word": "Ast",
      "translation": {
        "tr": "şube",
        "en": "branch"
      }
    },
    {
      "article": "die",
      "word": "Aufgabe",
      "translation": {
        "tr": "görev",
        "en": "task"
      }
    },
    {
      "article": "der",
      "word": "Aufsatz",
      "translation": {
        "tr": "Deneme",
        "en": "Essay"
      }
    },
    {
      "article": "das",
      "word": "Auge",
      "translation": {
        "tr": "göz",
        "en": "eye"
      }
    },
    {
      "article": "der",
      "word": "Augenblick",
      "translation": {
        "tr": "an",
        "en": "moment"
      }
    },
    {
      "article": "der",
      "word": "August",
      "translation": {
        "tr": "Ağustos",
        "en": "Aug"
      }
    },
    {
      "article": "die",
      "word": "Ausbildung",
      "translation": {
        "tr": "Eğitim",
        "en": "Training"
      }
    },
    {
      "article": "der",
      "word": "Ausflug",
      "translation": {
        "tr": "gezi",
        "en": "excursion"
      }
    },
    {
      "article": "die",
      "word": "Ausgabe",
      "translation": {
        "tr": "Sürüm",
        "en": "Edition"
      }
    },
    {
      "article": "der",
      "word": "Ausgang",
      "translation": {
        "tr": "çıkış",
        "en": "exit"
      }
    },
    {
      "article": "das",
      "word": "Ausland",
      "translation": {
        "tr": "Yurtdışında",
        "en": "Abroad"
      }
    },
    {
      "article": "der",
      "word": "Ausländer",
      "translation": {
        "tr": "Yabancılar",
        "en": "Foreigners"
      }
    },
    {
      "article": "die",
      "word": "Ausnahme",
      "translation": {
        "tr": "İstisna",
        "en": "Exception"
      }
    },
    {
      "article": "das",
      "word": "Aussehen",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      }
    },
    {
      "article": "das",
      "word": "Auto",
      "translation": {
        "tr": "araba",
        "en": "car"
      }
    },
    {
      "article": "die",
      "word": "Autobahn",
      "translation": {
        "tr": "otoyol",
        "en": "highway"
      }
    },
    {
      "article": "der",
      "word": "Autofahrer",
      "translation": {
        "tr": "Sürücü",
        "en": "Driver"
      }
    },
    {
      "article": "der",
      "word": "Autor",
      "translation": {
        "tr": "Yazar",
        "en": "Author"
      }
    },
    {
      "article": "das",
      "word": "Baby",
      "translation": {
        "tr": "Bebek",
        "en": "Baby"
      }
    },
    {
      "article": "der",
      "word": "Bäcker",
      "translation": {
        "tr": "Fırıncı",
        "en": "Baker"
      }
    },
    {
      "article": "die",
      "word": "Bäckerei",
      "translation": {
        "tr": "Fırın",
        "en": "Bakery"
      }
    },
    {
      "article": "der",
      "word": "Backofen",
      "translation": {
        "tr": "Fırın",
        "en": "Oven"
      }
    },
    {
      "article": "das",
      "word": "Bad",
      "translation": {
        "tr": "banyo",
        "en": "bathroom"
      }
    },
    {
      "article": "die",
      "word": "Bahn",
      "translation": {
        "tr": "tren",
        "en": "train"
      }
    },
    {
      "article": "der",
      "word": "Bahnhof",
      "translation": {
        "tr": "Tren istasyonu",
        "en": "Train station"
      }
    },
    {
      "article": "der",
      "word": "Balkon",
      "translation": {
        "tr": "Balkon",
        "en": "Balcony"
      }
    },
    {
      "article": "der",
      "word": "Ball",
      "translation": {
        "tr": "Top",
        "en": "Ball"
      }
    },
    {
      "article": "die",
      "word": "Banane",
      "translation": {
        "tr": "Muz",
        "en": "Banana"
      }
    },
    {
      "article": "die",
      "word": "Bank",
      "translation": {
        "tr": "Bank",
        "en": "Bench"
      }
    },
    {
      "article": "die",
      "word": "Bar",
      "translation": {
        "tr": "Bar",
        "en": "Bar"
      }
    },
    {
      "article": "der",
      "word": "Bär",
      "translation": {
        "tr": "Ayı",
        "en": "Bear"
      }
    },
    {
      "article": "der",
      "word": "Bart",
      "translation": {
        "tr": "Sakal",
        "en": "Beard"
      }
    },
    {
      "article": "der",
      "word": "Baseball",
      "translation": {
        "tr": "Beyzbol",
        "en": "Baseball"
      }
    },
    {
      "article": "der",
      "word": "Basketball",
      "translation": {
        "tr": "Basketbol",
        "en": "Basketball"
      }
    },
    {
      "article": "die",
      "word": "Batterie",
      "translation": {
        "tr": "Pil",
        "en": "Battery"
      }
    },
    {
      "article": "der",
      "word": "Bauch",
      "translation": {
        "tr": "göbek",
        "en": "belly"
      }
    },
    {
      "article": "der",
      "word": "Bauer",
      "translation": {
        "tr": "çiftçi",
        "en": "farmer"
      }
    },
    {
      "article": "der",
      "word": "Bauernhof",
      "translation": {
        "tr": "Çiftlik",
        "en": "Farm"
      }
    },
    {
      "article": "der",
      "word": "Baum",
      "translation": {
        "tr": "ağaç",
        "en": "tree"
      }
    },
    {
      "article": "der",
      "word": "Becher",
      "translation": {
        "tr": "Kupa",
        "en": "Mug"
      }
    },
    {
      "article": "die",
      "word": "Bedingung",
      "translation": {
        "tr": "Durum",
        "en": "Condition"
      }
    },
    {
      "article": "der",
      "word": "Beginn",
      "translation": {
        "tr": "başlangıç",
        "en": "beginning"
      }
    },
    {
      "article": "der",
      "word": "Beifall",
      "translation": {
        "tr": "Alkış",
        "en": "Applause"
      }
    },
    {
      "article": "das",
      "word": "Bein",
      "translation": {
        "tr": "bacak",
        "en": "leg"
      }
    },
    {
      "article": "das",
      "word": "Beispiel",
      "translation": {
        "tr": "Örnek",
        "en": "Example"
      }
    },
    {
      "article": "die",
      "word": "Bekleidung",
      "translation": {
        "tr": "Giyim",
        "en": "Clothing"
      }
    },
    {
      "article": "das",
      "word": "Benzin",
      "translation": {
        "tr": "Benzin",
        "en": "Gasoline"
      }
    },
    {
      "article": "der",
      "word": "Berg",
      "translation": {
        "tr": "dağ",
        "en": "Mt"
      }
    },
    {
      "article": "der",
      "word": "Berliner",
      "translation": {
        "tr": "Berlinli",
        "en": "Berliner"
      }
    },
    {
      "article": "der",
      "word": "Beruf",
      "translation": {
        "tr": "Meslek",
        "en": "Profession"
      }
    },
    {
      "article": "der",
      "word": "Besen",
      "translation": {
        "tr": "Süpürge",
        "en": "Broom"
      }
    },
    {
      "article": "die",
      "word": "Bestellung",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      }
    },
    {
      "article": "der",
      "word": "Besuch",
      "translation": {
        "tr": "Ziyaret edin",
        "en": "Visit"
      }
    },
    {
      "article": "der",
      "word": "Besucher",
      "translation": {
        "tr": "Ziyaretçiler",
        "en": "Visitors"
      }
    },
    {
      "article": "der",
      "word": "Beton",
      "translation": {
        "tr": "Beton",
        "en": "Concrete"
      }
    },
    {
      "article": "das",
      "word": "Bett",
      "translation": {
        "tr": "yatak",
        "en": "bed"
      }
    },
    {
      "article": "die",
      "word": "Bibliothek",
      "translation": {
        "tr": "Kütüphane",
        "en": "Library"
      }
    },
    {
      "article": "die",
      "word": "Biene",
      "translation": {
        "tr": "Arı",
        "en": "Bee"
      }
    },
    {
      "article": "das",
      "word": "Bier",
      "translation": {
        "tr": "Bira",
        "en": "Beer"
      }
    },
    {
      "article": "das",
      "word": "Bild",
      "translation": {
        "tr": "Resim",
        "en": "Image"
      }
    },
    {
      "article": "der",
      "word": "Bildschirm",
      "translation": {
        "tr": "ekran",
        "en": "screen"
      }
    },
    {
      "article": "die",
      "word": "Birke",
      "translation": {
        "tr": "Huş ağacı",
        "en": "Birch"
      }
    },
    {
      "article": "die",
      "word": "Birne",
      "translation": {
        "tr": "Armut",
        "en": "Pear"
      }
    },
    {
      "article": "der",
      "word": "Bischof",
      "translation": {
        "tr": "Piskopos",
        "en": "Bishop"
      }
    },
    {
      "article": "die",
      "word": "Bitte",
      "translation": {
        "tr": "lütfen",
        "en": "Please"
      }
    },
    {
      "article": "das",
      "word": "Blatt",
      "translation": {
        "tr": "levha",
        "en": "sheet"
      }
    },
    {
      "article": "der",
      "word": "Bleistift",
      "translation": {
        "tr": "kalem",
        "en": "pencil"
      }
    },
    {
      "article": "der",
      "word": "Blick",
      "translation": {
        "tr": "Bak",
        "en": "Look"
      }
    },
    {
      "article": "der",
      "word": "Blitz",
      "translation": {
        "tr": "Yıldırım",
        "en": "Lightning"
      }
    },
    {
      "article": "der",
      "word": "Block",
      "translation": {
        "tr": "blok",
        "en": "block"
      }
    },
    {
      "article": "die",
      "word": "Blume",
      "translation": {
        "tr": "çiçek",
        "en": "flower"
      }
    },
    {
      "article": "die",
      "word": "Bluse",
      "translation": {
        "tr": "bluz",
        "en": "blouse"
      }
    },
    {
      "article": "das",
      "word": "Blut",
      "translation": {
        "tr": "Kan",
        "en": "Blood"
      }
    },
    {
      "article": "der",
      "word": "Bock",
      "translation": {
        "tr": "Buck",
        "en": "Buck"
      }
    },
    {
      "article": "der",
      "word": "Boden",
      "translation": {
        "tr": "kat",
        "en": "floor"
      }
    },
    {
      "article": "der",
      "word": "Bogen",
      "translation": {
        "tr": "yay",
        "en": "bow"
      }
    },
    {
      "article": "die",
      "word": "Bombe",
      "translation": {
        "tr": "Bomba",
        "en": "Bomb"
      }
    },
    {
      "article": "das",
      "word": "Bonbon",
      "translation": {
        "tr": "Şeker",
        "en": "Candy"
      }
    },
    {
      "article": "das",
      "word": "Boot",
      "translation": {
        "tr": "tekne",
        "en": "boat"
      }
    },
    {
      "article": "der",
      "word": "Bote",
      "translation": {
        "tr": "haberci",
        "en": "messenger"
      }
    },
    {
      "article": "die",
      "word": "Box",
      "translation": {
        "tr": "kutu",
        "en": "box"
      }
    },
    {
      "article": "der",
      "word": "Brand",
      "translation": {
        "tr": "Marka",
        "en": "Brand"
      }
    },
    {
      "article": "der",
      "word": "Braten",
      "translation": {
        "tr": "kızartma",
        "en": "Roast"
      }
    },
    {
      "article": "die",
      "word": "Brauerei",
      "translation": {
        "tr": "Bira fabrikası",
        "en": "Brewery"
      }
    },
    {
      "article": "die",
      "word": "Braut",
      "translation": {
        "tr": "gelin",
        "en": "bride"
      }
    },
    {
      "article": "der",
      "word": "Brei",
      "translation": {
        "tr": "yulaf lapası",
        "en": "Porridge"
      }
    },
    {
      "article": "die",
      "word": "Breite",
      "translation": {
        "tr": "genişlik",
        "en": "width"
      }
    },
    {
      "article": "die",
      "word": "Bremse",
      "translation": {
        "tr": "fren",
        "en": "brake"
      }
    },
    {
      "article": "das",
      "word": "Brett",
      "translation": {
        "tr": "tahta",
        "en": "board"
      }
    },
    {
      "article": "der",
      "word": "Brief",
      "translation": {
        "tr": "mektup",
        "en": "letter"
      }
    },
    {
      "article": "die",
      "word": "Brille",
      "translation": {
        "tr": "Gözlük",
        "en": "Glasses"
      }
    },
    {
      "article": "das",
      "word": "Brot",
      "translation": {
        "tr": "Ekmek",
        "en": "Bread"
      }
    },
    {
      "article": "das",
      "word": "Brötchen",
      "translation": {
        "tr": "Çörekler",
        "en": "Buns"
      }
    },
    {
      "article": "die",
      "word": "Brücke",
      "translation": {
        "tr": "Köprü",
        "en": "Bridge"
      }
    },
    {
      "article": "der",
      "word": "Bruder",
      "translation": {
        "tr": "erkek kardeş",
        "en": "Brother"
      }
    },
    {
      "article": "die",
      "word": "Brust",
      "translation": {
        "tr": "göğüs",
        "en": "chest"
      }
    },
    {
      "article": "das",
      "word": "Buch",
      "translation": {
        "tr": "kitap",
        "en": "book"
      }
    },
    {
      "article": "der",
      "word": "Buchstabe",
      "translation": {
        "tr": "mektup",
        "en": "letter"
      }
    },
    {
      "article": "die",
      "word": "Burg",
      "translation": {
        "tr": "Kale",
        "en": "Castle"
      }
    },
    {
      "article": "das",
      "word": "Büro",
      "translation": {
        "tr": "ofis",
        "en": "office"
      }
    },
    {
      "article": "der",
      "word": "Bus",
      "translation": {
        "tr": "otobüs",
        "en": "bus"
      }
    },
    {
      "article": "der",
      "word": "Busch",
      "translation": {
        "tr": "Çalı",
        "en": "Bush"
      }
    },
    {
      "article": "die",
      "word": "Butter",
      "translation": {
        "tr": "tereyağı",
        "en": "butter"
      }
    },
    {
      "article": "der",
      "word": "Cent",
      "translation": {
        "tr": "sent",
        "en": "cents"
      }
    },
    {
      "article": "der",
      "word": "Chef",
      "translation": {
        "tr": "Patron",
        "en": "Boss"
      }
    },
    {
      "article": "die",
      "word": "Cola",
      "translation": {
        "tr": "Kola",
        "en": "Cola"
      }
    },
    {
      "article": "der",
      "word": "Computer",
      "translation": {
        "tr": "Bilgisayarlar",
        "en": "Computers"
      }
    },
    {
      "article": "der",
      "word": "Cousin",
      "translation": {
        "tr": "kuzen",
        "en": "cousin"
      }
    },
    {
      "article": "das",
      "word": "Dach",
      "translation": {
        "tr": "çatı",
        "en": "roof"
      }
    },
    {
      "article": "die",
      "word": "Dame",
      "translation": {
        "tr": "Bayan",
        "en": "lady"
      }
    },
    {
      "article": "der",
      "word": "Dampf",
      "translation": {
        "tr": "buhar",
        "en": "steam"
      }
    },
    {
      "article": "das",
      "word": "Datum",
      "translation": {
        "tr": "Tarih",
        "en": "Date"
      }
    },
    {
      "article": "der",
      "word": "Daumen",
      "translation": {
        "tr": "Başparmak",
        "en": "Thumb"
      }
    },
    {
      "article": "die",
      "word": "Decke",
      "translation": {
        "tr": "battaniye",
        "en": "blanket"
      }
    },
    {
      "article": "der",
      "word": "Dezember",
      "translation": {
        "tr": "Aralık",
        "en": "December"
      }
    },
    {
      "article": "der",
      "word": "Dienstag",
      "translation": {
        "tr": "Salı",
        "en": "Tuesday"
      }
    },
    {
      "article": "das",
      "word": "Ding",
      "translation": {
        "tr": "şey",
        "en": "thing"
      }
    },
    {
      "article": "die",
      "word": "Diskussion",
      "translation": {
        "tr": "Tartışma",
        "en": "Discussion"
      }
    },
    {
      "article": "der",
      "word": "Doktor",
      "translation": {
        "tr": "Doktor",
        "en": "Doctor"
      }
    },
    {
      "article": "das",
      "word": "Dokument",
      "translation": {
        "tr": "belge",
        "en": "document"
      }
    },
    {
      "article": "der",
      "word": "Dollar",
      "translation": {
        "tr": "dolar",
        "en": "dollars"
      }
    },
    {
      "article": "der",
      "word": "Donner",
      "translation": {
        "tr": "Gök gürültüsü",
        "en": "Thunder"
      }
    },
    {
      "article": "der",
      "word": "Donnerstag",
      "translation": {
        "tr": "perşembe",
        "en": "Thursday"
      }
    },
    {
      "article": "das",
      "word": "Doppelzimmer",
      "translation": {
        "tr": "Çift kişilik oda",
        "en": "Double room"
      }
    },
    {
      "article": "das",
      "word": "Dorf",
      "translation": {
        "tr": "Köy",
        "en": "Village"
      }
    },
    {
      "article": "die",
      "word": "Dose",
      "translation": {
        "tr": "yapabilir",
        "en": "can"
      }
    },
    {
      "article": "der",
      "word": "Drache",
      "translation": {
        "tr": "Ejderha",
        "en": "Dragon"
      }
    },
    {
      "article": "die",
      "word": "Drogerie",
      "translation": {
        "tr": "eczane",
        "en": "drugstore"
      }
    },
    {
      "article": "der",
      "word": "Drucker",
      "translation": {
        "tr": "Yazıcı",
        "en": "Printer"
      }
    },
    {
      "article": "der",
      "word": "Durst",
      "translation": {
        "tr": "susuzluk",
        "en": "Thirst"
      }
    },
    {
      "article": "die",
      "word": "Dusche",
      "translation": {
        "tr": "duş",
        "en": "shower"
      }
    },
    {
      "article": "das",
      "word": "Dutzend",
      "translation": {
        "tr": "düzine",
        "en": "dozen"
      }
    },
    {
      "article": "die",
      "word": "Ecke",
      "translation": {
        "tr": "köşe",
        "en": "corner"
      }
    },
    {
      "article": "die",
      "word": "Ehe",
      "translation": {
        "tr": "Evlilik",
        "en": "Marriage"
      }
    },
    {
      "article": "die",
      "word": "Ehefrau",
      "translation": {
        "tr": "eş",
        "en": "wife"
      }
    },
    {
      "article": "der",
      "word": "Ehemann",
      "translation": {
        "tr": "koca",
        "en": "husband"
      }
    },
    {
      "article": "das",
      "word": "Ehepaar",
      "translation": {
        "tr": "evli çift",
        "en": "married couple"
      }
    },
    {
      "article": "das",
      "word": "Ei",
      "translation": {
        "tr": "Yumurta",
        "en": "Egg"
      }
    },
    {
      "article": "das",
      "word": "Eichhörnchen",
      "translation": {
        "tr": "sincap",
        "en": "Squirrel"
      }
    },
    {
      "article": "der",
      "word": "Einkauf",
      "translation": {
        "tr": "Satın alma",
        "en": "Purchasing"
      }
    },
    {
      "article": "das",
      "word": "Einkaufszentrum",
      "translation": {
        "tr": "Alışveriş merkezi",
        "en": "Shopping center"
      }
    },
    {
      "article": "das",
      "word": "Einkommen",
      "translation": {
        "tr": "Gelir",
        "en": "Income"
      }
    },
    {
      "article": "die",
      "word": "Einladung",
      "translation": {
        "tr": "Davet",
        "en": "Invitation"
      }
    },
    {
      "article": "die",
      "word": "Eins",
      "translation": {
        "tr": "Bir",
        "en": "One"
      }
    },
    {
      "article": "der",
      "word": "Einwohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      }
    },
    {
      "article": "das",
      "word": "Eis",
      "translation": {
        "tr": "Dondurma",
        "en": "Ice cream"
      }
    },
    {
      "article": "der",
      "word": "Eisbär",
      "translation": {
        "tr": "Kutup ayısı",
        "en": "Polar bear"
      }
    },
    {
      "article": "das",
      "word": "Eisen",
      "translation": {
        "tr": "Demir",
        "en": "Iron"
      }
    },
    {
      "article": "der",
      "word": "Elefant",
      "translation": {
        "tr": "Fil",
        "en": "Elephant"
      }
    },
    {
      "article": "der",
      "word": "Elektriker",
      "translation": {
        "tr": "Elektrikçi",
        "en": "Electrician"
      }
    },
    {
      "article": "das",
      "word": "Element",
      "translation": {
        "tr": "Öğe",
        "en": "Element"
      }
    },
    {
      "article": "das",
      "word": "Ende",
      "translation": {
        "tr": "son",
        "en": "end"
      }
    },
    {
      "article": "die",
      "word": "Energie",
      "translation": {
        "tr": "Enerji",
        "en": "Energy"
      }
    },
    {
      "article": "der",
      "word": "Engel",
      "translation": {
        "tr": "Melek",
        "en": "Angel"
      }
    },
    {
      "article": "der",
      "word": "Enkel",
      "translation": {
        "tr": "Torunlar",
        "en": "Grandchildren"
      }
    },
    {
      "article": "die",
      "word": "Ente",
      "translation": {
        "tr": "Ördek",
        "en": "Duck"
      }
    },
    {
      "article": "die",
      "word": "Entschuldigung",
      "translation": {
        "tr": "Üzgünüm",
        "en": "Sorry"
      }
    },
    {
      "article": "die",
      "word": "Erde",
      "translation": {
        "tr": "Dünya",
        "en": "Earth"
      }
    },
    {
      "article": "der",
      "word": "Erfolg",
      "translation": {
        "tr": "Başarı",
        "en": "Success"
      }
    },
    {
      "article": "das",
      "word": "Ergebnis",
      "translation": {
        "tr": "Sonuç",
        "en": "Result"
      }
    },
    {
      "article": "die",
      "word": "Erkältung",
      "translation": {
        "tr": "soğuk",
        "en": "cold"
      }
    },
    {
      "article": "der",
      "word": "Erste",
      "translation": {
        "tr": "İlk",
        "en": "First"
      }
    },
    {
      "article": "der",
      "word": "Erwachsene",
      "translation": {
        "tr": "Yetişkinler",
        "en": "adults"
      }
    },
    {
      "article": "der",
      "word": "Espresso",
      "translation": {
        "tr": "Espresso",
        "en": "Espresso"
      }
    },
    {
      "article": "das",
      "word": "Essen",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      }
    },
    {
      "article": "der",
      "word": "Essig",
      "translation": {
        "tr": "Sirke",
        "en": "Vinegar"
      }
    },
    {
      "article": "die",
      "word": "Etage",
      "translation": {
        "tr": "kat",
        "en": "floor"
      }
    },
    {
      "article": "das",
      "word": "Etikett",
      "translation": {
        "tr": "Etiket",
        "en": "Label"
      }
    },
    {
      "article": "der",
      "word": "Euro",
      "translation": {
        "tr": "euro",
        "en": "euros"
      }
    },
    {
      "article": "das",
      "word": "Fahrrad",
      "translation": {
        "tr": "Bisiklet",
        "en": "Bicycle"
      }
    },
    {
      "article": "die",
      "word": "Familie",
      "translation": {
        "tr": "aile",
        "en": "family"
      }
    },
    {
      "article": "die",
      "word": "Farbe",
      "translation": {
        "tr": "renk",
        "en": "color"
      }
    },
    {
      "article": "der",
      "word": "Februar",
      "translation": {
        "tr": "Şubat",
        "en": "February"
      }
    },
    {
      "article": "der",
      "word": "Fehler",
      "translation": {
        "tr": "Hata",
        "en": "Error"
      }
    },
    {
      "article": "der",
      "word": "Feiertag",
      "translation": {
        "tr": "Tatil",
        "en": "Holiday"
      }
    },
    {
      "article": "das",
      "word": "Feld",
      "translation": {
        "tr": "alan",
        "en": "field"
      }
    },
    {
      "article": "das",
      "word": "Fenster",
      "translation": {
        "tr": "pencere",
        "en": "window"
      }
    },
    {
      "article": "das",
      "word": "Fett",
      "translation": {
        "tr": "Şişman",
        "en": "Fat"
      }
    },
    {
      "article": "das",
      "word": "Feuer",
      "translation": {
        "tr": "Ateş",
        "en": "Fire"
      }
    },
    {
      "article": "der",
      "word": "Film",
      "translation": {
        "tr": "Film",
        "en": "Movie"
      }
    },
    {
      "article": "der",
      "word": "Finger",
      "translation": {
        "tr": "parmaklar",
        "en": "fingers"
      }
    },
    {
      "article": "der",
      "word": "Fisch",
      "translation": {
        "tr": "Balık",
        "en": "Fish"
      }
    },
    {
      "article": "die",
      "word": "Flasche",
      "translation": {
        "tr": "şişe",
        "en": "bottle"
      }
    },
    {
      "article": "das",
      "word": "Fleisch",
      "translation": {
        "tr": "et",
        "en": "meat"
      }
    },
    {
      "article": "der",
      "word": "Flug",
      "translation": {
        "tr": "uçuş",
        "en": "flight"
      }
    },
    {
      "article": "das",
      "word": "Flugzeug",
      "translation": {
        "tr": "Uçak",
        "en": "Airplane"
      }
    },
    {
      "article": "der",
      "word": "Fluss",
      "translation": {
        "tr": "nehir",
        "en": "river"
      }
    },
    {
      "article": "das",
      "word": "Foto",
      "translation": {
        "tr": "Fotoğraf",
        "en": "Photo"
      }
    },
    {
      "article": "die",
      "word": "Frage",
      "translation": {
        "tr": "Soru",
        "en": "Question"
      }
    },
    {
      "article": "die",
      "word": "Frau",
      "translation": {
        "tr": "Bayan",
        "en": "Ms"
      }
    },
    {
      "article": "der",
      "word": "Freitag",
      "translation": {
        "tr": "Cuma",
        "en": "Friday"
      }
    },
    {
      "article": "der",
      "word": "Freund",
      "translation": {
        "tr": "arkadaş",
        "en": "friend"
      }
    },
    {
      "article": "die",
      "word": "Freundin",
      "translation": {
        "tr": "kız arkadaş",
        "en": "girlfriend"
      }
    },
    {
      "article": "der",
      "word": "Friseur",
      "translation": {
        "tr": "Kuaför",
        "en": "Hairdresser"
      }
    },
    {
      "article": "der",
      "word": "Frosch",
      "translation": {
        "tr": "Kurbağa",
        "en": "Frog"
      }
    },
    {
      "article": "der",
      "word": "Frühling",
      "translation": {
        "tr": "Bahar",
        "en": "Spring"
      }
    },
    {
      "article": "das",
      "word": "Frühstück",
      "translation": {
        "tr": "Kahvaltı",
        "en": "Breakfast"
      }
    },
    {
      "article": "der",
      "word": "Fuchs",
      "translation": {
        "tr": "Tilki",
        "en": "Fox"
      }
    },
    {
      "article": "der",
      "word": "Fuß",
      "translation": {
        "tr": "ayak",
        "en": "foot"
      }
    },
    {
      "article": "der",
      "word": "Fußball",
      "translation": {
        "tr": "Futbol",
        "en": "Football"
      }
    },
    {
      "article": "die",
      "word": "Gabel",
      "translation": {
        "tr": "çatal",
        "en": "fork"
      }
    },
    {
      "article": "die",
      "word": "Gans",
      "translation": {
        "tr": "Kaz",
        "en": "Goose"
      }
    },
    {
      "article": "der",
      "word": "Garten",
      "translation": {
        "tr": "Bahçe",
        "en": "Garden"
      }
    },
    {
      "article": "der",
      "word": "Gast",
      "translation": {
        "tr": "Misafir",
        "en": "Guest"
      }
    },
    {
      "article": "der",
      "word": "Geburtstag",
      "translation": {
        "tr": "doğum günü",
        "en": "birthday"
      }
    },
    {
      "article": "das",
      "word": "Geld",
      "translation": {
        "tr": "para",
        "en": "money"
      }
    },
    {
      "article": "das",
      "word": "Gemüse",
      "translation": {
        "tr": "sebzeler",
        "en": "vegetables"
      }
    },
    {
      "article": "das",
      "word": "Geschenk",
      "translation": {
        "tr": "Hediye",
        "en": "Gift"
      }
    },
    {
      "article": "das",
      "word": "Gesicht",
      "translation": {
        "tr": "yüz",
        "en": "face"
      }
    },
    {
      "article": "die",
      "word": "Gitarre",
      "translation": {
        "tr": "gitar",
        "en": "guitar"
      }
    },
    {
      "article": "das",
      "word": "Glas",
      "translation": {
        "tr": "Cam",
        "en": "Glass"
      }
    },
    {
      "article": "der",
      "word": "Gott",
      "translation": {
        "tr": "Tanrı",
        "en": "God"
      }
    },
    {
      "article": "die",
      "word": "Großmutter",
      "translation": {
        "tr": "büyükanne",
        "en": "Grandmother"
      }
    },
    {
      "article": "der",
      "word": "Großvater",
      "translation": {
        "tr": "Büyükbaba",
        "en": "Grandfather"
      }
    },
    {
      "article": "die",
      "word": "Grundschule",
      "translation": {
        "tr": "İlkokul",
        "en": "Elementary school"
      }
    },
    {
      "article": "das",
      "word": "Haar",
      "translation": {
        "tr": "saç",
        "en": "hair"
      }
    },
    {
      "article": "der",
      "word": "Hals",
      "translation": {
        "tr": "boyun",
        "en": "neck"
      }
    },
    {
      "article": "der",
      "word": "Hammer",
      "translation": {
        "tr": "Çekiç",
        "en": "Hammer"
      }
    },
    {
      "article": "die",
      "word": "Hand",
      "translation": {
        "tr": "el",
        "en": "hand"
      }
    },
    {
      "article": "das",
      "word": "Handtuch",
      "translation": {
        "tr": "havlu",
        "en": "towel"
      }
    },
    {
      "article": "das",
      "word": "Handy",
      "translation": {
        "tr": "cep telefonu",
        "en": "cell phone"
      }
    },
    {
      "article": "der",
      "word": "Hase",
      "translation": {
        "tr": "tavşan",
        "en": "Bunny"
      }
    },
    {
      "article": "das",
      "word": "Haus",
      "translation": {
        "tr": "ev",
        "en": "house"
      }
    },
    {
      "article": "das",
      "word": "Haustier",
      "translation": {
        "tr": "evcil hayvan",
        "en": "pet"
      }
    },
    {
      "article": "das",
      "word": "Hemd",
      "translation": {
        "tr": "gömlek",
        "en": "shirt"
      }
    },
    {
      "article": "der",
      "word": "Herbst",
      "translation": {
        "tr": "Sonbahar",
        "en": "Autumn"
      }
    },
    {
      "article": "der",
      "word": "Herr",
      "translation": {
        "tr": "Efendim",
        "en": "Sir"
      }
    },
    {
      "article": "das",
      "word": "Herz",
      "translation": {
        "tr": "kalp",
        "en": "heart"
      }
    },
    {
      "article": "der",
      "word": "Himmel",
      "translation": {
        "tr": "Cennet",
        "en": "Heaven"
      }
    },
    {
      "article": "das",
      "word": "Holz",
      "translation": {
        "tr": "Ahşap",
        "en": "Wood"
      }
    },
    {
      "article": "der",
      "word": "Honig",
      "translation": {
        "tr": "tatlım",
        "en": "honey"
      }
    },
    {
      "article": "die",
      "word": "Hose",
      "translation": {
        "tr": "Pantolon",
        "en": "Pants"
      }
    },
    {
      "article": "das",
      "word": "Hotel",
      "translation": {
        "tr": "Otel",
        "en": "Hotel"
      }
    },
    {
      "article": "das",
      "word": "Huhn",
      "translation": {
        "tr": "tavuk",
        "en": "chicken"
      }
    },
    {
      "article": "der",
      "word": "Hund",
      "translation": {
        "tr": "Köpek",
        "en": "Dog"
      }
    },
    {
      "article": "der",
      "word": "Hut",
      "translation": {
        "tr": "şapka",
        "en": "hat"
      }
    },
    {
      "article": "der",
      "word": "Igel",
      "translation": {
        "tr": "kirpi",
        "en": "hedgehog"
      }
    },
    {
      "article": "das",
      "word": "Insekt",
      "translation": {
        "tr": "böcek",
        "en": "insect"
      }
    },
    {
      "article": "das",
      "word": "Interesse",
      "translation": {
        "tr": "faiz",
        "en": "interest"
      }
    },
    {
      "article": "das",
      "word": "Internet",
      "translation": {
        "tr": "internet",
        "en": "Internet"
      }
    },
    {
      "article": "die",
      "word": "Jacke",
      "translation": {
        "tr": "ceket",
        "en": "jacket"
      }
    },
    {
      "article": "das",
      "word": "Jahr",
      "translation": {
        "tr": "yıl",
        "en": "year"
      }
    },
    {
      "article": "der",
      "word": "Januar",
      "translation": {
        "tr": "Ocak",
        "en": "January"
      }
    },
    {
      "article": "der",
      "word": "Juli",
      "translation": {
        "tr": "Temmuz",
        "en": "July"
      }
    },
    {
      "article": "der",
      "word": "Junge",
      "translation": {
        "tr": "oğlan",
        "en": "Boy"
      }
    },
    {
      "article": "der",
      "word": "Juni",
      "translation": {
        "tr": "Haziran",
        "en": "June"
      }
    },
    {
      "article": "der",
      "word": "Kaffee",
      "translation": {
        "tr": "Kahve",
        "en": "Coffee"
      }
    },
    {
      "article": "das",
      "word": "Kaninchen",
      "translation": {
        "tr": "Tavşan",
        "en": "Rabbit"
      }
    },
    {
      "article": "die",
      "word": "Karte",
      "translation": {
        "tr": "Harita",
        "en": "Map"
      }
    },
    {
      "article": "die",
      "word": "Kartoffel",
      "translation": {
        "tr": "Patates",
        "en": "Potato"
      }
    },
    {
      "article": "der",
      "word": "Käse",
      "translation": {
        "tr": "Peynir",
        "en": "Cheese"
      }
    },
    {
      "article": "die",
      "word": "Katze",
      "translation": {
        "tr": "kedi",
        "en": "cat"
      }
    },
    {
      "article": "die",
      "word": "Kerze",
      "translation": {
        "tr": "mum",
        "en": "candle"
      }
    },
    {
      "article": "das",
      "word": "Kind",
      "translation": {
        "tr": "çocuk",
        "en": "child"
      }
    },
    {
      "article": "der",
      "word": "Kindergarten",
      "translation": {
        "tr": "Anaokulu",
        "en": "Kindergarten"
      }
    },
    {
      "article": "das",
      "word": "Kino",
      "translation": {
        "tr": "Sinema",
        "en": "Cinema"
      }
    },
    {
      "article": "die",
      "word": "Kirche",
      "translation": {
        "tr": "Kilise",
        "en": "Church"
      }
    },
    {
      "article": "das",
      "word": "Kissen",
      "translation": {
        "tr": "Yastık",
        "en": "Pillow"
      }
    },
    {
      "article": "das",
      "word": "Kleid",
      "translation": {
        "tr": "elbise",
        "en": "dress"
      }
    },
    {
      "article": "das",
      "word": "Klo",
      "translation": {
        "tr": "Tuvalet",
        "en": "Loo"
      }
    },
    {
      "article": "der",
      "word": "Koch",
      "translation": {
        "tr": "Aşçı",
        "en": "Cook"
      }
    },
    {
      "article": "der",
      "word": "Koffer",
      "translation": {
        "tr": "bavul",
        "en": "suitcase"
      }
    },
    {
      "article": "der",
      "word": "König",
      "translation": {
        "tr": "Kral",
        "en": "King"
      }
    },
    {
      "article": "die",
      "word": "Königin",
      "translation": {
        "tr": "Kraliçe",
        "en": "Queen"
      }
    },
    {
      "article": "der",
      "word": "Kopf",
      "translation": {
        "tr": "kafa",
        "en": "head"
      }
    },
    {
      "article": "der",
      "word": "Körper",
      "translation": {
        "tr": "vücut",
        "en": "body"
      }
    },
    {
      "article": "das",
      "word": "Krokodil",
      "translation": {
        "tr": "Timsah",
        "en": "Crocodile"
      }
    },
    {
      "article": "die",
      "word": "Küche",
      "translation": {
        "tr": "Mutfak",
        "en": "Kitchen"
      }
    },
    {
      "article": "der",
      "word": "Kuchen",
      "translation": {
        "tr": "Kek",
        "en": "Cake"
      }
    },
    {
      "article": "der",
      "word": "Kugelschreiber",
      "translation": {
        "tr": "Tükenmez kalem",
        "en": "Ballpoint pen"
      }
    },
    {
      "article": "die",
      "word": "Kuh",
      "translation": {
        "tr": "İnek",
        "en": "Cow"
      }
    },
    {
      "article": "der",
      "word": "Kühlschrank",
      "translation": {
        "tr": "Buzdolabı",
        "en": "Refrigerator"
      }
    },
    {
      "article": "die",
      "word": "Lampe",
      "translation": {
        "tr": "lamba",
        "en": "lamp"
      }
    },
    {
      "article": "das",
      "word": "Land",
      "translation": {
        "tr": "ülke",
        "en": "country"
      }
    },
    {
      "article": "das",
      "word": "Leben",
      "translation": {
        "tr": "hayat",
        "en": "life"
      }
    },
    {
      "article": "das",
      "word": "Lebensmittel",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      }
    },
    {
      "article": "der",
      "word": "Lehrer",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      }
    },
    {
      "article": "die",
      "word": "Lehrerin",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      }
    },
    {
      "article": "das",
      "word": "Licht",
      "translation": {
        "tr": "Işık",
        "en": "Light"
      }
    },
    {
      "article": "die",
      "word": "Liebe",
      "translation": {
        "tr": "aşk",
        "en": "Love"
      }
    },
    {
      "article": "das",
      "word": "Lied",
      "translation": {
        "tr": "şarkı",
        "en": "song"
      }
    },
    {
      "article": "die",
      "word": "Lippe",
      "translation": {
        "tr": "Dudak",
        "en": "Lip"
      }
    },
    {
      "article": "der",
      "word": "Liter",
      "translation": {
        "tr": "litre",
        "en": "liters"
      }
    },
    {
      "article": "das",
      "word": "Loch",
      "translation": {
        "tr": "delik",
        "en": "hole"
      }
    },
    {
      "article": "der",
      "word": "Löffel",
      "translation": {
        "tr": "kaşık",
        "en": "spoon"
      }
    },
    {
      "article": "der",
      "word": "Löwe",
      "translation": {
        "tr": "Aslan",
        "en": "Leo"
      }
    },
    {
      "article": "die",
      "word": "Luft",
      "translation": {
        "tr": "hava",
        "en": "air"
      }
    },
    {
      "article": "das",
      "word": "Mädchen",
      "translation": {
        "tr": "Kızlar",
        "en": "Girls"
      }
    },
    {
      "article": "der",
      "word": "Magen",
      "translation": {
        "tr": "mide",
        "en": "stomach"
      }
    },
    {
      "article": "die",
      "word": "Mahlzeit",
      "translation": {
        "tr": "yemek",
        "en": "meal"
      }
    },
    {
      "article": "der",
      "word": "Mai",
      "translation": {
        "tr": "Mayıs",
        "en": "May"
      }
    },
    {
      "article": "die",
      "word": "Mama",
      "translation": {
        "tr": "Anne",
        "en": "Mom"
      }
    },
    {
      "article": "der",
      "word": "Mann",
      "translation": {
        "tr": "adam",
        "en": "Man"
      }
    },
    {
      "article": "das",
      "word": "Märchen",
      "translation": {
        "tr": "peri masalları",
        "en": "fairy tales"
      }
    },
    {
      "article": "der",
      "word": "Markt",
      "translation": {
        "tr": "pazar",
        "en": "market"
      }
    },
    {
      "article": "der",
      "word": "März",
      "translation": {
        "tr": "Mart",
        "en": "March"
      }
    },
    {
      "article": "die",
      "word": "Maus",
      "translation": {
        "tr": "Fare",
        "en": "Mouse"
      }
    },
    {
      "article": "das",
      "word": "Meer",
      "translation": {
        "tr": "deniz",
        "en": "sea"
      }
    },
    {
      "article": "das",
      "word": "Mehl",
      "translation": {
        "tr": "un",
        "en": "flour"
      }
    },
    {
      "article": "der",
      "word": "Mensch",
      "translation": {
        "tr": "İnsan",
        "en": "Human"
      }
    },
    {
      "article": "das",
      "word": "Messer",
      "translation": {
        "tr": "Bıçak",
        "en": "Knife"
      }
    },
    {
      "article": "die",
      "word": "Milch",
      "translation": {
        "tr": "süt",
        "en": "milk"
      }
    },
    {
      "article": "das",
      "word": "Mineralwasser",
      "translation": {
        "tr": "Maden suyu",
        "en": "Mineral water"
      }
    },
    {
      "article": "die",
      "word": "Minute",
      "translation": {
        "tr": "dakika",
        "en": "minute"
      }
    },
    {
      "article": "der",
      "word": "Mittwoch",
      "translation": {
        "tr": "Çarşamba",
        "en": "Wednesday"
      }
    },
    {
      "article": "der",
      "word": "Mond",
      "translation": {
        "tr": "Ay",
        "en": "Moon"
      }
    },
    {
      "article": "der",
      "word": "Montag",
      "translation": {
        "tr": "Pazartesi",
        "en": "Monday"
      }
    },
    {
      "article": "der",
      "word": "Morgen",
      "translation": {
        "tr": "Yarın",
        "en": "Tomorrow"
      }
    },
    {
      "article": "der",
      "word": "Mund",
      "translation": {
        "tr": "ağız",
        "en": "mouth"
      }
    },
    {
      "article": "die",
      "word": "Musik",
      "translation": {
        "tr": "Müzik",
        "en": "Music"
      }
    },
    {
      "article": "die",
      "word": "Mutter",
      "translation": {
        "tr": "anne",
        "en": "mother"
      }
    },
    {
      "article": "die",
      "word": "Mütze",
      "translation": {
        "tr": "Şapka",
        "en": "Hat"
      }
    },
    {
      "article": "der",
      "word": "Nachbar",
      "translation": {
        "tr": "komşu",
        "en": "neighbor"
      }
    },
    {
      "article": "der",
      "word": "Nachmittag",
      "translation": {
        "tr": "öğleden sonra",
        "en": "afternoon"
      }
    },
    {
      "article": "die",
      "word": "Nachricht",
      "translation": {
        "tr": "Mesaj",
        "en": "Message"
      }
    },
    {
      "article": "die",
      "word": "Nacht",
      "translation": {
        "tr": "gece",
        "en": "night"
      }
    },
    {
      "article": "der",
      "word": "Nagel",
      "translation": {
        "tr": "Çivi",
        "en": "Nail"
      }
    },
    {
      "article": "der",
      "word": "Name",
      "translation": {
        "tr": "isim",
        "en": "name"
      }
    },
    {
      "article": "die",
      "word": "Nase",
      "translation": {
        "tr": "burun",
        "en": "nose"
      }
    },
    {
      "article": "das",
      "word": "Nest",
      "translation": {
        "tr": "yuva",
        "en": "nest"
      }
    },
    {
      "article": "der",
      "word": "Norden",
      "translation": {
        "tr": "Kuzey",
        "en": "North"
      }
    },
    {
      "article": "der",
      "word": "November",
      "translation": {
        "tr": "Kasım",
        "en": "November"
      }
    },
    {
      "article": "die",
      "word": "Null",
      "translation": {
        "tr": "Sıfır",
        "en": "Zero"
      }
    },
    {
      "article": "das",
      "word": "Obst",
      "translation": {
        "tr": "meyve",
        "en": "fruit"
      }
    },
    {
      "article": "der",
      "word": "Ofen",
      "translation": {
        "tr": "Fırın",
        "en": "Oven"
      }
    },
    {
      "article": "das",
      "word": "Ohr",
      "translation": {
        "tr": "kulak",
        "en": "ear"
      }
    },
    {
      "article": "der",
      "word": "Oktober",
      "translation": {
        "tr": "Ekim",
        "en": "October"
      }
    },
    {
      "article": "das",
      "word": "Öl",
      "translation": {
        "tr": "yağ",
        "en": "oil"
      }
    },
    {
      "article": "die",
      "word": "Oma",
      "translation": {
        "tr": "büyükanne",
        "en": "Grandma"
      }
    },
    {
      "article": "der",
      "word": "Onkel",
      "translation": {
        "tr": "amca",
        "en": "Uncle"
      }
    },
    {
      "article": "der",
      "word": "Opa",
      "translation": {
        "tr": "büyükbaba",
        "en": "Grandpa"
      }
    },
    {
      "article": "die",
      "word": "Orange",
      "translation": {
        "tr": "Turuncu",
        "en": "Orange"
      }
    },
    {
      "article": "der",
      "word": "Ort",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      }
    },
    {
      "article": "der",
      "word": "Osten",
      "translation": {
        "tr": "Doğu",
        "en": "East"
      }
    },
    {
      "article": "der",
      "word": "Papa",
      "translation": {
        "tr": "baba",
        "en": "Dad"
      }
    },
    {
      "article": "das",
      "word": "Papier",
      "translation": {
        "tr": "kağıt",
        "en": "paper"
      }
    },
    {
      "article": "die",
      "word": "Pause",
      "translation": {
        "tr": "Mola",
        "en": "Break"
      }
    },
    {
      "article": "das",
      "word": "Pferd",
      "translation": {
        "tr": "at",
        "en": "horse"
      }
    },
    {
      "article": "die",
      "word": "Pflanze",
      "translation": {
        "tr": "bitki",
        "en": "plant"
      }
    },
    {
      "article": "die",
      "word": "Pizza",
      "translation": {
        "tr": "pizza",
        "en": "Pizza"
      }
    },
    {
      "article": "der",
      "word": "Platz",
      "translation": {
        "tr": "yer",
        "en": "place"
      }
    },
    {
      "article": "die",
      "word": "Polizei",
      "translation": {
        "tr": "Polis",
        "en": "Police"
      }
    },
    {
      "article": "der",
      "word": "Polizist",
      "translation": {
        "tr": "Polis",
        "en": "Policeman"
      }
    },
    {
      "article": "der",
      "word": "Punkt",
      "translation": {
        "tr": "Dönem",
        "en": "Period"
      }
    },
    {
      "article": "die",
      "word": "Puppe",
      "translation": {
        "tr": "oyuncak bebek",
        "en": "doll"
      }
    },
    {
      "article": "das",
      "word": "Rad",
      "translation": {
        "tr": "tekerlek",
        "en": "wheel"
      }
    },
    {
      "article": "der",
      "word": "Raum",
      "translation": {
        "tr": "uzay",
        "en": "space"
      }
    },
    {
      "article": "das",
      "word": "Regal",
      "translation": {
        "tr": "Raf",
        "en": "Shelf"
      }
    },
    {
      "article": "der",
      "word": "Regen",
      "translation": {
        "tr": "Yağmur",
        "en": "Rain"
      }
    },
    {
      "article": "der",
      "word": "Reis",
      "translation": {
        "tr": "Pirinç",
        "en": "Rice"
      }
    },
    {
      "article": "die",
      "word": "Reise",
      "translation": {
        "tr": "gezi",
        "en": "trip"
      }
    },
    {
      "article": "der",
      "word": "Saft",
      "translation": {
        "tr": "meyve suyu",
        "en": "Juice"
      }
    },
    {
      "article": "der",
      "word": "Salat",
      "translation": {
        "tr": "Salata",
        "en": "Salad"
      }
    },
    {
      "article": "das",
      "word": "Salz",
      "translation": {
        "tr": "Tuz",
        "en": "Salt"
      }
    },
    {
      "article": "der",
      "word": "Samstag",
      "translation": {
        "tr": "cumartesi",
        "en": "Saturday"
      }
    },
    {
      "article": "das",
      "word": "Schaf",
      "translation": {
        "tr": "Koyun",
        "en": "Sheep"
      }
    },
    {
      "article": "das",
      "word": "Schiff",
      "translation": {
        "tr": "gemi",
        "en": "ship"
      }
    },
    {
      "article": "der",
      "word": "Schirm",
      "translation": {
        "tr": "Ekran",
        "en": "Screen"
      }
    },
    {
      "article": "der",
      "word": "Schlaf",
      "translation": {
        "tr": "Uyku",
        "en": "Sleep"
      }
    },
    {
      "article": "das",
      "word": "Schlafzimmer",
      "translation": {
        "tr": "yatak odası",
        "en": "bedroom"
      }
    },
    {
      "article": "die",
      "word": "Schlange",
      "translation": {
        "tr": "Yılan",
        "en": "Snake"
      }
    },
    {
      "article": "das",
      "word": "Schloss",
      "translation": {
        "tr": "Kale",
        "en": "Castle"
      }
    },
    {
      "article": "der",
      "word": "Schlüssel",
      "translation": {
        "tr": "anahtar",
        "en": "key"
      }
    },
    {
      "article": "der",
      "word": "Schmetterling",
      "translation": {
        "tr": "Kelebek",
        "en": "Butterfly"
      }
    },
    {
      "article": "der",
      "word": "Schnee",
      "translation": {
        "tr": "kar",
        "en": "snow"
      }
    },
    {
      "article": "die",
      "word": "Schokolade",
      "translation": {
        "tr": "Çikolata",
        "en": "Chocolate"
      }
    },
    {
      "article": "der",
      "word": "Schuh",
      "translation": {
        "tr": "Ayakkabı",
        "en": "Shoe"
      }
    },
    {
      "article": "die",
      "word": "Schule",
      "translation": {
        "tr": "okul",
        "en": "school"
      }
    },
    {
      "article": "der",
      "word": "Schüler",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      }
    },
    {
      "article": "die",
      "word": "Schülerin",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      }
    },
    {
      "article": "die",
      "word": "Schulter",
      "translation": {
        "tr": "omuz",
        "en": "shoulder"
      }
    },
    {
      "article": "das",
      "word": "Schwein",
      "translation": {
        "tr": "Domuz",
        "en": "Pig"
      }
    },
    {
      "article": "die",
      "word": "Schwester",
      "translation": {
        "tr": "kız kardeş",
        "en": "Sister"
      }
    },
    {
      "article": "die",
      "word": "Seife",
      "translation": {
        "tr": "sabun",
        "en": "soap"
      }
    },
    {
      "article": "die",
      "word": "Seite",
      "translation": {
        "tr": "Sayfa",
        "en": "Page"
      }
    },
    {
      "article": "die",
      "word": "Sekunde",
      "translation": {
        "tr": "ikinci",
        "en": "second"
      }
    },
    {
      "article": "der",
      "word": "September",
      "translation": {
        "tr": "Eylül",
        "en": "September"
      }
    },
    {
      "article": "das",
      "word": "Sofa",
      "translation": {
        "tr": "Kanepe",
        "en": "Sofa"
      }
    },
    {
      "article": "der",
      "word": "Sohn",
      "translation": {
        "tr": "oğul",
        "en": "son"
      }
    },
    {
      "article": "der",
      "word": "Sommer",
      "translation": {
        "tr": "Yaz",
        "en": "Summer"
      }
    },
    {
      "article": "der",
      "word": "Sonntag",
      "translation": {
        "tr": "Pazar",
        "en": "Sunday"
      }
    },
    {
      "article": "der",
      "word": "Spiegel",
      "translation": {
        "tr": "Ayna",
        "en": "Mirror"
      }
    },
    {
      "article": "das",
      "word": "Spiel",
      "translation": {
        "tr": "oyun",
        "en": "game"
      }
    },
    {
      "article": "der",
      "word": "Spieler",
      "translation": {
        "tr": "Oyuncu",
        "en": "Player"
      }
    },
    {
      "article": "das",
      "word": "Spielzeug",
      "translation": {
        "tr": "oyuncaklar",
        "en": "toys"
      }
    },
    {
      "article": "die",
      "word": "Sprache",
      "translation": {
        "tr": "dil",
        "en": "language"
      }
    },
    {
      "article": "die",
      "word": "Stadt",
      "translation": {
        "tr": "şehir",
        "en": "city"
      }
    },
    {
      "article": "der",
      "word": "Staub",
      "translation": {
        "tr": "toz",
        "en": "dust"
      }
    },
    {
      "article": "der",
      "word": "Stern",
      "translation": {
        "tr": "yıldız",
        "en": "star"
      }
    },
    {
      "article": "der",
      "word": "Stift",
      "translation": {
        "tr": "Kalem",
        "en": "Pen"
      }
    },
    {
      "article": "die",
      "word": "Stimme",
      "translation": {
        "tr": "ses",
        "en": "voice"
      }
    },
    {
      "article": "die",
      "word": "Straße",
      "translation": {
        "tr": "sokak",
        "en": "street"
      }
    },
    {
      "article": "das",
      "word": "Stück",
      "translation": {
        "tr": "parça",
        "en": "piece"
      }
    },
    {
      "article": "der",
      "word": "Student",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      }
    },
    {
      "article": "der",
      "word": "Stuhl",
      "translation": {
        "tr": "sandalye",
        "en": "chair"
      }
    },
    {
      "article": "die",
      "word": "Stunde",
      "translation": {
        "tr": "saat",
        "en": "hour"
      }
    },
    {
      "article": "die",
      "word": "Suppe",
      "translation": {
        "tr": "Çorba",
        "en": "Soup"
      }
    },
    {
      "article": "der",
      "word": "Tag",
      "translation": {
        "tr": "gün",
        "en": "day"
      }
    },
    {
      "article": "die",
      "word": "Tante",
      "translation": {
        "tr": "Teyze",
        "en": "Aunt"
      }
    },
    {
      "article": "der",
      "word": "Tanz",
      "translation": {
        "tr": "Dans",
        "en": "Dance"
      }
    },
    {
      "article": "die",
      "word": "Tasche",
      "translation": {
        "tr": "çanta",
        "en": "bag"
      }
    },
    {
      "article": "die",
      "word": "Tasse",
      "translation": {
        "tr": "fincan",
        "en": "cup"
      }
    },
    {
      "article": "die",
      "word": "Tastatur",
      "translation": {
        "tr": "Klavye",
        "en": "Keyboard"
      }
    },
    {
      "article": "das",
      "word": "Taxi",
      "translation": {
        "tr": "Taksi",
        "en": "Taxi"
      }
    },
    {
      "article": "der",
      "word": "Tee",
      "translation": {
        "tr": "Çay",
        "en": "Tea"
      }
    },
    {
      "article": "das",
      "word": "Telefon",
      "translation": {
        "tr": "Telefon",
        "en": "Telephone"
      }
    },
    {
      "article": "das",
      "word": "Tennis",
      "translation": {
        "tr": "Tenis",
        "en": "Tennis"
      }
    },
    {
      "article": "der",
      "word": "Teppich",
      "translation": {
        "tr": "Halı",
        "en": "Carpet"
      }
    },
    {
      "article": "das",
      "word": "Ticket",
      "translation": {
        "tr": "bilet",
        "en": "ticket"
      }
    },
    {
      "article": "das",
      "word": "Tier",
      "translation": {
        "tr": "hayvan",
        "en": "animal"
      }
    },
    {
      "article": "die",
      "word": "Tinte",
      "translation": {
        "tr": "Mürekkep",
        "en": "Ink"
      }
    },
    {
      "article": "der",
      "word": "Tisch",
      "translation": {
        "tr": "masa",
        "en": "table"
      }
    },
    {
      "article": "die",
      "word": "Tochter",
      "translation": {
        "tr": "kızı",
        "en": "daughter"
      }
    },
    {
      "article": "die",
      "word": "Toilette",
      "translation": {
        "tr": "tuvalet",
        "en": "toilet"
      }
    },
    {
      "article": "der",
      "word": "Tourist",
      "translation": {
        "tr": "Turist",
        "en": "Tourist"
      }
    },
    {
      "article": "die",
      "word": "Träne",
      "translation": {
        "tr": "Gözyaşı",
        "en": "Tear"
      }
    },
    {
      "article": "der",
      "word": "Traum",
      "translation": {
        "tr": "rüya",
        "en": "dream"
      }
    },
    {
      "article": "das",
      "word": "Tuch",
      "translation": {
        "tr": "kumaş",
        "en": "cloth"
      }
    },
    {
      "article": "der",
      "word": "Tunnel",
      "translation": {
        "tr": "tüneller",
        "en": "tunnels"
      }
    },
    {
      "article": "die",
      "word": "Tür",
      "translation": {
        "tr": "kapı",
        "en": "door"
      }
    },
    {
      "article": "der",
      "word": "Turm",
      "translation": {
        "tr": "kule",
        "en": "tower"
      }
    },
    {
      "article": "die",
      "word": "Uhr",
      "translation": {
        "tr": "saat",
        "en": "clock"
      }
    },
    {
      "article": "der",
      "word": "Unterricht",
      "translation": {
        "tr": "dersler",
        "en": "lessons"
      }
    },
    {
      "article": "der",
      "word": "Vater",
      "translation": {
        "tr": "baba",
        "en": "Father"
      }
    },
    {
      "article": "der",
      "word": "Vogel",
      "translation": {
        "tr": "kuş",
        "en": "bird"
      }
    },
    {
      "article": "der",
      "word": "Wald",
      "translation": {
        "tr": "Orman",
        "en": "Forest"
      }
    },
    {
      "article": "die",
      "word": "Wand",
      "translation": {
        "tr": "duvar",
        "en": "wall"
      }
    },
    {
      "article": "das",
      "word": "Wasser",
      "translation": {
        "tr": "su",
        "en": "water"
      }
    },
    {
      "article": "der",
      "word": "Weg",
      "translation": {
        "tr": "yol",
        "en": "way"
      }
    },
    {
      "article": "das",
      "word": "Weihnachten",
      "translation": {
        "tr": "Noel",
        "en": "Christmas"
      }
    },
    {
      "article": "die",
      "word": "Welt",
      "translation": {
        "tr": "dünya",
        "en": "world"
      }
    },
    {
      "article": "das",
      "word": "Wetter",
      "translation": {
        "tr": "Hava Durumu",
        "en": "Weather"
      }
    },
    {
      "article": "der",
      "word": "Winter",
      "translation": {
        "tr": "Kış",
        "en": "Winter"
      }
    },
    {
      "article": "die",
      "word": "Woche",
      "translation": {
        "tr": "hafta",
        "en": "week"
      }
    },
    {
      "article": "das",
      "word": "Wochenende",
      "translation": {
        "tr": "hafta sonu",
        "en": "weekend"
      }
    },
    {
      "article": "das",
      "word": "Wohnzimmer",
      "translation": {
        "tr": "Oturma odası",
        "en": "Living room"
      }
    },
    {
      "article": "der",
      "word": "Wolf",
      "translation": {
        "tr": "Kurt",
        "en": "Wolf"
      }
    },
    {
      "article": "die",
      "word": "Wolke",
      "translation": {
        "tr": "bulut",
        "en": "cloud"
      }
    },
    {
      "article": "das",
      "word": "Wort",
      "translation": {
        "tr": "kelime",
        "en": "word"
      }
    },
    {
      "article": "das",
      "word": "Wörterbuch",
      "translation": {
        "tr": "Sözlük",
        "en": "Dictionary"
      }
    },
    {
      "article": "die",
      "word": "Wunde",
      "translation": {
        "tr": "yara",
        "en": "wound"
      }
    },
    {
      "article": "das",
      "word": "Wunder",
      "translation": {
        "tr": "Mucize",
        "en": "Miracle"
      }
    },
    {
      "article": "der",
      "word": "Wunsch",
      "translation": {
        "tr": "arzu",
        "en": "desire"
      }
    },
    {
      "article": "die",
      "word": "Wurst",
      "translation": {
        "tr": "Sosis",
        "en": "Sausage"
      }
    },
    {
      "article": "die",
      "word": "Zahl",
      "translation": {
        "tr": "sayı",
        "en": "number"
      }
    },
    {
      "article": "der",
      "word": "Zahn",
      "translation": {
        "tr": "diş",
        "en": "tooth"
      }
    },
    {
      "article": "das",
      "word": "Zeichen",
      "translation": {
        "tr": "karakterler",
        "en": "characters"
      }
    },
    {
      "article": "die",
      "word": "Zeit",
      "translation": {
        "tr": "zaman",
        "en": "time"
      }
    },
    {
      "article": "das",
      "word": "Zimmer",
      "translation": {
        "tr": "Oda",
        "en": "Room"
      }
    },
    {
      "article": "die",
      "word": "Zitrone",
      "translation": {
        "tr": "Limon",
        "en": "Lemon"
      }
    },
    {
      "article": "der",
      "word": "Zoo",
      "translation": {
        "tr": "Hayvanat Bahçesi",
        "en": "Zoo"
      }
    },
    {
      "article": "der",
      "word": "Zucker",
      "translation": {
        "tr": "şeker",
        "en": "sugar"
      }
    },
    {
      "article": "der",
      "word": "Zug",
      "translation": {
        "tr": "tren",
        "en": "train"
      }
    },
    {
      "article": "die",
      "word": "Zunge",
      "translation": {
        "tr": "dil",
        "en": "tongue"
      }
    }
  ],
  "A2": [
    {
      "article": "der",
      "word": "Europäer",
      "translation": {
        "tr": "Avrupalılar",
        "en": "Europeans"
      }
    },
    {
      "article": "die",
      "word": "Fabrik",
      "translation": {
        "tr": "Fabrika",
        "en": "Factory"
      }
    },
    {
      "article": "das",
      "word": "Fach",
      "translation": {
        "tr": "bölme",
        "en": "compartment"
      }
    },
    {
      "article": "der",
      "word": "Faden",
      "translation": {
        "tr": "iplik",
        "en": "thread"
      }
    },
    {
      "article": "die",
      "word": "Fahne",
      "translation": {
        "tr": "bayrak",
        "en": "flag"
      }
    },
    {
      "article": "die",
      "word": "Fähre",
      "translation": {
        "tr": "Feribot",
        "en": "Ferry"
      }
    },
    {
      "article": "das",
      "word": "Fahren",
      "translation": {
        "tr": "Araba kullanmak",
        "en": "Driving"
      }
    },
    {
      "article": "der",
      "word": "Fahrer",
      "translation": {
        "tr": "Sürücü",
        "en": "Driver"
      }
    },
    {
      "article": "der",
      "word": "Fahrplan",
      "translation": {
        "tr": "Zaman çizelgesi",
        "en": "Timetable"
      }
    },
    {
      "article": "der",
      "word": "Fahrpreis",
      "translation": {
        "tr": "Ücret",
        "en": "Fare"
      }
    },
    {
      "article": "die",
      "word": "Fahrt",
      "translation": {
        "tr": "binmek",
        "en": "ride"
      }
    },
    {
      "article": "das",
      "word": "Fahrzeug",
      "translation": {
        "tr": "araç",
        "en": "vehicle"
      }
    },
    {
      "article": "der",
      "word": "Fall",
      "translation": {
        "tr": "dava",
        "en": "case"
      }
    },
    {
      "article": "der",
      "word": "Fan",
      "translation": {
        "tr": "hayran",
        "en": "Fan"
      }
    },
    {
      "article": "das",
      "word": "Fass",
      "translation": {
        "tr": "varil",
        "en": "barrel"
      }
    },
    {
      "article": "die",
      "word": "Faust",
      "translation": {
        "tr": "Yumruk",
        "en": "Fist"
      }
    },
    {
      "article": "das",
      "word": "Fax",
      "translation": {
        "tr": "Faks",
        "en": "Fax"
      }
    },
    {
      "article": "die",
      "word": "Feder",
      "translation": {
        "tr": "tüy",
        "en": "Feather"
      }
    },
    {
      "article": "die",
      "word": "Fee",
      "translation": {
        "tr": "Peri",
        "en": "Fairy"
      }
    },
    {
      "article": "die",
      "word": "Feier",
      "translation": {
        "tr": "kutlama",
        "en": "celebration"
      }
    },
    {
      "article": "die",
      "word": "Feige",
      "translation": {
        "tr": "incir",
        "en": "Fig"
      }
    },
    {
      "article": "der",
      "word": "Feind",
      "translation": {
        "tr": "düşman",
        "en": "enemy"
      }
    },
    {
      "article": "das",
      "word": "Fell",
      "translation": {
        "tr": "kürk",
        "en": "fur"
      }
    },
    {
      "article": "der",
      "word": "Fernseher",
      "translation": {
        "tr": "televizyon",
        "en": "TV"
      }
    },
    {
      "article": "das",
      "word": "Fest",
      "translation": {
        "tr": "Katı",
        "en": "Solid"
      }
    },
    {
      "article": "der",
      "word": "Feuerwehrmann",
      "translation": {
        "tr": "İtfaiyeci",
        "en": "Firefighter"
      }
    },
    {
      "article": "das",
      "word": "Feuerwerk",
      "translation": {
        "tr": "havai fişek",
        "en": "Fireworks"
      }
    },
    {
      "article": "das",
      "word": "Fieber",
      "translation": {
        "tr": "Ateş",
        "en": "Fever"
      }
    },
    {
      "article": "die",
      "word": "Figur",
      "translation": {
        "tr": "şekil",
        "en": "figure"
      }
    },
    {
      "article": "die",
      "word": "Firma",
      "translation": {
        "tr": "şirket",
        "en": "company"
      }
    },
    {
      "article": "der",
      "word": "Fischer",
      "translation": {
        "tr": "Balıkçı",
        "en": "Fisherman"
      }
    },
    {
      "article": "die",
      "word": "Flagge",
      "translation": {
        "tr": "Bayrak",
        "en": "Flag"
      }
    },
    {
      "article": "die",
      "word": "Flamme",
      "translation": {
        "tr": "Alev",
        "en": "Flame"
      }
    },
    {
      "article": "der",
      "word": "Fleck",
      "translation": {
        "tr": "leke",
        "en": "stain"
      }
    },
    {
      "article": "die",
      "word": "Fledermaus",
      "translation": {
        "tr": "Yarasa",
        "en": "Bat"
      }
    },
    {
      "article": "die",
      "word": "Fliege",
      "translation": {
        "tr": "Uçmak",
        "en": "Fly"
      }
    },
    {
      "article": "die",
      "word": "Flöte",
      "translation": {
        "tr": "flüt",
        "en": "flute"
      }
    },
    {
      "article": "der",
      "word": "Flügel",
      "translation": {
        "tr": "Kanatlar",
        "en": "Wings"
      }
    },
    {
      "article": "der",
      "word": "Flughafen",
      "translation": {
        "tr": "Havaalanı",
        "en": "Airport"
      }
    },
    {
      "article": "die",
      "word": "Folie",
      "translation": {
        "tr": "Folyo",
        "en": "Foil"
      }
    },
    {
      "article": "die",
      "word": "Form",
      "translation": {
        "tr": "şekil",
        "en": "shape"
      }
    },
    {
      "article": "das",
      "word": "Format",
      "translation": {
        "tr": "biçim",
        "en": "format"
      }
    },
    {
      "article": "das",
      "word": "Formular",
      "translation": {
        "tr": "formu",
        "en": "Form"
      }
    },
    {
      "article": "der",
      "word": "Fotograf",
      "translation": {
        "tr": "Fotoğrafçı",
        "en": "Photographer"
      }
    },
    {
      "article": "das",
      "word": "Französisch",
      "translation": {
        "tr": "Fransızca",
        "en": "French"
      }
    },
    {
      "article": "die",
      "word": "Freiheit",
      "translation": {
        "tr": "Özgürlük",
        "en": "Freedom"
      }
    },
    {
      "article": "die",
      "word": "Freizeit",
      "translation": {
        "tr": "Boş zaman",
        "en": "Leisure"
      }
    },
    {
      "article": "die",
      "word": "Fremdsprache",
      "translation": {
        "tr": "Yabancı dil",
        "en": "Foreign language"
      }
    },
    {
      "article": "die",
      "word": "Freude",
      "translation": {
        "tr": "sevinç",
        "en": "joy"
      }
    },
    {
      "article": "die",
      "word": "Freundschaft",
      "translation": {
        "tr": "Dostluk",
        "en": "Friendship"
      }
    },
    {
      "article": "der",
      "word": "Friedhof",
      "translation": {
        "tr": "Mezarlık",
        "en": "Cemetery"
      }
    },
    {
      "article": "die",
      "word": "Frucht",
      "translation": {
        "tr": "meyve",
        "en": "fruit"
      }
    },
    {
      "article": "das",
      "word": "Frühjahr",
      "translation": {
        "tr": "Bahar",
        "en": "Spring"
      }
    },
    {
      "article": "der",
      "word": "Führer",
      "translation": {
        "tr": "Lider",
        "en": "Leader"
      }
    },
    {
      "article": "der",
      "word": "Fußgänger",
      "translation": {
        "tr": "Yayalar",
        "en": "Pedestrians"
      }
    },
    {
      "article": "das",
      "word": "Futter",
      "translation": {
        "tr": "beslemek",
        "en": "feed"
      }
    },
    {
      "article": "die",
      "word": "Garage",
      "translation": {
        "tr": "Garaj",
        "en": "Garage"
      }
    },
    {
      "article": "der",
      "word": "Gärtner",
      "translation": {
        "tr": "bahçıvan",
        "en": "gardener"
      }
    },
    {
      "article": "das",
      "word": "Gas",
      "translation": {
        "tr": "gaz",
        "en": "gas"
      }
    },
    {
      "article": "die",
      "word": "Gasse",
      "translation": {
        "tr": "Sokak",
        "en": "Alley"
      }
    },
    {
      "article": "das",
      "word": "Gebäude",
      "translation": {
        "tr": "Bina",
        "en": "Building"
      }
    },
    {
      "article": "das",
      "word": "Gebet",
      "translation": {
        "tr": "Dua",
        "en": "Prayer"
      }
    },
    {
      "article": "die",
      "word": "Gegend",
      "translation": {
        "tr": "alan",
        "en": "area"
      }
    },
    {
      "article": "der",
      "word": "Gegenstand",
      "translation": {
        "tr": "konu",
        "en": "subject"
      }
    },
    {
      "article": "das",
      "word": "Gegenteil",
      "translation": {
        "tr": "Karşıt",
        "en": "Opposite"
      }
    },
    {
      "article": "der",
      "word": "Gegner",
      "translation": {
        "tr": "Rakip",
        "en": "Opponent"
      }
    },
    {
      "article": "das",
      "word": "Gehalt",
      "translation": {
        "tr": "Maaş",
        "en": "Salary"
      }
    },
    {
      "article": "das",
      "word": "Geheimnis",
      "translation": {
        "tr": "Gizli",
        "en": "Secret"
      }
    },
    {
      "article": "das",
      "word": "Gehirn",
      "translation": {
        "tr": "Beyin",
        "en": "Brain"
      }
    },
    {
      "article": "der",
      "word": "Geist",
      "translation": {
        "tr": "Ruh",
        "en": "Spirit"
      }
    },
    {
      "article": "das",
      "word": "Gepäck",
      "translation": {
        "tr": "Bagaj",
        "en": "Luggage"
      }
    },
    {
      "article": "das",
      "word": "Gerät",
      "translation": {
        "tr": "cihaz",
        "en": "device"
      }
    },
    {
      "article": "das",
      "word": "Geräusch",
      "translation": {
        "tr": "gürültü",
        "en": "noise"
      }
    },
    {
      "article": "der",
      "word": "Geruch",
      "translation": {
        "tr": "koku",
        "en": "smell"
      }
    },
    {
      "article": "das",
      "word": "Geschäft",
      "translation": {
        "tr": "iş",
        "en": "business"
      }
    },
    {
      "article": "die",
      "word": "Geschichte",
      "translation": {
        "tr": "hikaye",
        "en": "story"
      }
    },
    {
      "article": "das",
      "word": "Geschirr",
      "translation": {
        "tr": "Yemekler",
        "en": "Dishes"
      }
    },
    {
      "article": "der",
      "word": "Geschmack",
      "translation": {
        "tr": "tat",
        "en": "taste"
      }
    },
    {
      "article": "das",
      "word": "Gesetz",
      "translation": {
        "tr": "Hukuk",
        "en": "Law"
      }
    },
    {
      "article": "das",
      "word": "Gespenst",
      "translation": {
        "tr": "Hayalet",
        "en": "Ghost"
      }
    },
    {
      "article": "das",
      "word": "Gespräch",
      "translation": {
        "tr": "konuşma",
        "en": "conversation"
      }
    },
    {
      "article": "die",
      "word": "Geste",
      "translation": {
        "tr": "jest",
        "en": "gesture"
      }
    },
    {
      "article": "die",
      "word": "Gesundheit",
      "translation": {
        "tr": "Sağlık",
        "en": "Health"
      }
    },
    {
      "article": "das",
      "word": "Getränk",
      "translation": {
        "tr": "içki",
        "en": "drink"
      }
    },
    {
      "article": "das",
      "word": "Gewicht",
      "translation": {
        "tr": "Ağırlık",
        "en": "Weight"
      }
    },
    {
      "article": "das",
      "word": "Gewitter",
      "translation": {
        "tr": "Fırtına",
        "en": "Thunderstorm"
      }
    },
    {
      "article": "das",
      "word": "Gift",
      "translation": {
        "tr": "Zehir",
        "en": "Poison"
      }
    },
    {
      "article": "das",
      "word": "Gitter",
      "translation": {
        "tr": "Izgara",
        "en": "Grid"
      }
    },
    {
      "article": "das",
      "word": "Gleis",
      "translation": {
        "tr": "Parça",
        "en": "Track"
      }
    },
    {
      "article": "der",
      "word": "Globus",
      "translation": {
        "tr": "Küre",
        "en": "Globe"
      }
    },
    {
      "article": "die",
      "word": "Glocke",
      "translation": {
        "tr": "Çan",
        "en": "Bell"
      }
    },
    {
      "article": "die",
      "word": "Glotze",
      "translation": {
        "tr": "televizyon",
        "en": "telly"
      }
    },
    {
      "article": "das",
      "word": "Glück",
      "translation": {
        "tr": "Mutluluk",
        "en": "Happiness"
      }
    },
    {
      "article": "das",
      "word": "Gold",
      "translation": {
        "tr": "Altın",
        "en": "Gold"
      }
    },
    {
      "article": "der",
      "word": "Golf",
      "translation": {
        "tr": "golf",
        "en": "Golf"
      }
    },
    {
      "article": "das",
      "word": "Grab",
      "translation": {
        "tr": "Mezar",
        "en": "Grave"
      }
    },
    {
      "article": "der",
      "word": "Grad",
      "translation": {
        "tr": "derece",
        "en": "degree"
      }
    },
    {
      "article": "das",
      "word": "Gramm",
      "translation": {
        "tr": "gram",
        "en": "grams"
      }
    },
    {
      "article": "das",
      "word": "Gras",
      "translation": {
        "tr": "Çim",
        "en": "Grass"
      }
    },
    {
      "article": "die",
      "word": "Grenze",
      "translation": {
        "tr": "sınır",
        "en": "border"
      }
    },
    {
      "article": "die",
      "word": "Großstadt",
      "translation": {
        "tr": "Büyük şehir",
        "en": "Big city"
      }
    },
    {
      "article": "das",
      "word": "Grün",
      "translation": {
        "tr": "Yeşil",
        "en": "Green"
      }
    },
    {
      "article": "der",
      "word": "Grund",
      "translation": {
        "tr": "sebep",
        "en": "reason"
      }
    },
    {
      "article": "die",
      "word": "Grundlage",
      "translation": {
        "tr": "Vakıf",
        "en": "Foundation"
      }
    },
    {
      "article": "die",
      "word": "Gruppe",
      "translation": {
        "tr": "grup",
        "en": "group"
      }
    },
    {
      "article": "der",
      "word": "Gruß",
      "translation": {
        "tr": "selamlar",
        "en": "Greetings"
      }
    },
    {
      "article": "der",
      "word": "Gurt",
      "translation": {
        "tr": "Kemer",
        "en": "Belt"
      }
    },
    {
      "article": "der",
      "word": "Gürtel",
      "translation": {
        "tr": "Kemer",
        "en": "Belt"
      }
    },
    {
      "article": "das",
      "word": "Gut",
      "translation": {
        "tr": "iyi",
        "en": "Good"
      }
    },
    {
      "article": "das",
      "word": "Gymnasium",
      "translation": {
        "tr": "Lise",
        "en": "High school"
      }
    },
    {
      "article": "der",
      "word": "Hafen",
      "translation": {
        "tr": "Liman",
        "en": "Port"
      }
    },
    {
      "article": "der",
      "word": "Hahn",
      "translation": {
        "tr": "Horoz",
        "en": "Rooster"
      }
    },
    {
      "article": "der",
      "word": "Hai",
      "translation": {
        "tr": "Merhaba",
        "en": "Hai"
      }
    },
    {
      "article": "der",
      "word": "Haken",
      "translation": {
        "tr": "Kanca",
        "en": "Hook"
      }
    },
    {
      "article": "die",
      "word": "Hälfte",
      "translation": {
        "tr": "yarım",
        "en": "half"
      }
    },
    {
      "article": "die",
      "word": "Halle",
      "translation": {
        "tr": "Salon",
        "en": "Hall"
      }
    },
    {
      "article": "der",
      "word": "Hamster",
      "translation": {
        "tr": "Hamsterler",
        "en": "Hamsters"
      }
    },
    {
      "article": "das",
      "word": "Handgelenk",
      "translation": {
        "tr": "bilek",
        "en": "wrist"
      }
    },
    {
      "article": "die",
      "word": "Handschrift",
      "translation": {
        "tr": "El yazısı",
        "en": "Handwriting"
      }
    },
    {
      "article": "der",
      "word": "Handwerker",
      "translation": {
        "tr": "Zanaatkar",
        "en": "Craftsman"
      }
    },
    {
      "article": "die",
      "word": "Hauptstadt",
      "translation": {
        "tr": "Sermaye",
        "en": "Capital"
      }
    },
    {
      "article": "die",
      "word": "Hausfrau",
      "translation": {
        "tr": "ev hanımı",
        "en": "housewife"
      }
    },
    {
      "article": "der",
      "word": "Hausmeister",
      "translation": {
        "tr": "bekçi",
        "en": "caretaker"
      }
    },
    {
      "article": "die",
      "word": "Haustür",
      "translation": {
        "tr": "Ön kapı",
        "en": "Front door"
      }
    },
    {
      "article": "die",
      "word": "Haut",
      "translation": {
        "tr": "cilt",
        "en": "skin"
      }
    },
    {
      "article": "das",
      "word": "Heft",
      "translation": {
        "tr": "Kitapçık",
        "en": "Booklet"
      }
    },
    {
      "article": "der",
      "word": "Held",
      "translation": {
        "tr": "Kahraman",
        "en": "Hero"
      }
    },
    {
      "article": "der",
      "word": "Helm",
      "translation": {
        "tr": "Kask",
        "en": "Helmet"
      }
    },
    {
      "article": "der",
      "word": "Herd",
      "translation": {
        "tr": "Soba",
        "en": "Stove"
      }
    },
    {
      "article": "die",
      "word": "Hilfe",
      "translation": {
        "tr": "Yardım",
        "en": "Help"
      }
    },
    {
      "article": "der",
      "word": "Hirsch",
      "translation": {
        "tr": "Geyik",
        "en": "Deer"
      }
    },
    {
      "article": "der",
      "word": "Hit",
      "translation": {
        "tr": "Vur",
        "en": "Hit"
      }
    },
    {
      "article": "die",
      "word": "Hitze",
      "translation": {
        "tr": "Isı",
        "en": "Heat"
      }
    },
    {
      "article": "das",
      "word": "Hobby",
      "translation": {
        "tr": "hobi",
        "en": "hobby"
      }
    },
    {
      "article": "die",
      "word": "Hochzeit",
      "translation": {
        "tr": "düğün",
        "en": "wedding"
      }
    },
    {
      "article": "das",
      "word": "Hockey",
      "translation": {
        "tr": "Hokey",
        "en": "Hockey"
      }
    },
    {
      "article": "der",
      "word": "Hof",
      "translation": {
        "tr": "avlu",
        "en": "yard"
      }
    },
    {
      "article": "die",
      "word": "Hoffnung",
      "translation": {
        "tr": "umut",
        "en": "Hope"
      }
    },
    {
      "article": "die",
      "word": "Höhe",
      "translation": {
        "tr": "Yükseklik",
        "en": "Height"
      }
    },
    {
      "article": "die",
      "word": "Höhle",
      "translation": {
        "tr": "mağara",
        "en": "cave"
      }
    },
    {
      "article": "das",
      "word": "Horn",
      "translation": {
        "tr": "boynuz",
        "en": "horn"
      }
    },
    {
      "article": "das",
      "word": "Hotelzimmer",
      "translation": {
        "tr": "Otel odası",
        "en": "Hotel room"
      }
    },
    {
      "article": "der",
      "word": "Hubschrauber",
      "translation": {
        "tr": "helikopter",
        "en": "Helicopter"
      }
    },
    {
      "article": "der",
      "word": "Hügel",
      "translation": {
        "tr": "tepe",
        "en": "hill"
      }
    },
    {
      "article": "der",
      "word": "Hunger",
      "translation": {
        "tr": "Açlık",
        "en": "Hunger"
      }
    },
    {
      "article": "die",
      "word": "Hütte",
      "translation": {
        "tr": "kulübe",
        "en": "Hut"
      }
    },
    {
      "article": "die",
      "word": "Idee",
      "translation": {
        "tr": "fikir",
        "en": "idea"
      }
    },
    {
      "article": "der",
      "word": "Idiot",
      "translation": {
        "tr": "Aptal",
        "en": "Idiot"
      }
    },
    {
      "article": "der",
      "word": "Imbiss",
      "translation": {
        "tr": "Aperatif",
        "en": "Snack"
      }
    },
    {
      "article": "die",
      "word": "Information",
      "translation": {
        "tr": "bilgi",
        "en": "information"
      }
    },
    {
      "article": "die",
      "word": "Insel",
      "translation": {
        "tr": "ada",
        "en": "island"
      }
    },
    {
      "article": "das",
      "word": "Instrument",
      "translation": {
        "tr": "enstrüman",
        "en": "instrument"
      }
    },
    {
      "article": "die",
      "word": "Jahreszeit",
      "translation": {
        "tr": "sezon",
        "en": "season"
      }
    },
    {
      "article": "die",
      "word": "Jeans",
      "translation": {
        "tr": "Kot pantolon",
        "en": "Jeans"
      }
    },
    {
      "article": "der",
      "word": "Job",
      "translation": {
        "tr": "İş",
        "en": "Job"
      }
    },
    {
      "article": "das",
      "word": "Kabel",
      "translation": {
        "tr": "Kablo",
        "en": "Cable"
      }
    },
    {
      "article": "die",
      "word": "Kabine",
      "translation": {
        "tr": "kabin",
        "en": "cabin"
      }
    },
    {
      "article": "der",
      "word": "Käfer",
      "translation": {
        "tr": "Böcek",
        "en": "Beetle"
      }
    },
    {
      "article": "der",
      "word": "Kalender",
      "translation": {
        "tr": "Takvim",
        "en": "Calendar"
      }
    },
    {
      "article": "die",
      "word": "Kälte",
      "translation": {
        "tr": "Soğuk",
        "en": "Cold"
      }
    },
    {
      "article": "die",
      "word": "Kamera",
      "translation": {
        "tr": "Kamera",
        "en": "Camera"
      }
    },
    {
      "article": "der",
      "word": "Kamin",
      "translation": {
        "tr": "Şömine",
        "en": "Fireplace"
      }
    },
    {
      "article": "die",
      "word": "Kammer",
      "translation": {
        "tr": "Oda",
        "en": "Chamber"
      }
    },
    {
      "article": "der",
      "word": "Kampf",
      "translation": {
        "tr": "kavga",
        "en": "fight"
      }
    },
    {
      "article": "der",
      "word": "Kanal",
      "translation": {
        "tr": "Kanal",
        "en": "Channel"
      }
    },
    {
      "article": "die",
      "word": "Kanne",
      "translation": {
        "tr": "saksı",
        "en": "pot"
      }
    },
    {
      "article": "die",
      "word": "Kante",
      "translation": {
        "tr": "Kenar",
        "en": "Edge"
      }
    },
    {
      "article": "die",
      "word": "Kantine",
      "translation": {
        "tr": "kantin",
        "en": "Canteen"
      }
    },
    {
      "article": "das",
      "word": "Kapitel",
      "translation": {
        "tr": "Bölüm",
        "en": "Chapter"
      }
    },
    {
      "article": "die",
      "word": "Kappe",
      "translation": {
        "tr": "kap",
        "en": "cap"
      }
    },
    {
      "article": "der",
      "word": "Karton",
      "translation": {
        "tr": "karton",
        "en": "Cardboard"
      }
    },
    {
      "article": "die",
      "word": "Kasse",
      "translation": {
        "tr": "Ödeme",
        "en": "Checkout"
      }
    },
    {
      "article": "die",
      "word": "Kassette",
      "translation": {
        "tr": "kaset",
        "en": "cassette"
      }
    },
    {
      "article": "der",
      "word": "Kasten",
      "translation": {
        "tr": "kutu",
        "en": "box"
      }
    },
    {
      "article": "das",
      "word": "Kätzchen",
      "translation": {
        "tr": "yavru kedi",
        "en": "kitten"
      }
    },
    {
      "article": "der",
      "word": "Käufer",
      "translation": {
        "tr": "Alıcı",
        "en": "Buyer"
      }
    },
    {
      "article": "der",
      "word": "Keks",
      "translation": {
        "tr": "Çerez",
        "en": "Cookie"
      }
    },
    {
      "article": "der",
      "word": "Keller",
      "translation": {
        "tr": "Bodrum",
        "en": "Basement"
      }
    },
    {
      "article": "der",
      "word": "Kellner",
      "translation": {
        "tr": "Garson",
        "en": "Waiter"
      }
    },
    {
      "article": "die",
      "word": "Kette",
      "translation": {
        "tr": "zincir",
        "en": "chain"
      }
    },
    {
      "article": "das",
      "word": "Kinderzimmer",
      "translation": {
        "tr": "Çocuk odası",
        "en": "Children's room"
      }
    },
    {
      "article": "das",
      "word": "Kinn",
      "translation": {
        "tr": "Çene",
        "en": "Chin"
      }
    },
    {
      "article": "der",
      "word": "Kiosk",
      "translation": {
        "tr": "kiosk",
        "en": "kiosk"
      }
    },
    {
      "article": "die",
      "word": "Kirsche",
      "translation": {
        "tr": "Kiraz",
        "en": "Cherry"
      }
    },
    {
      "article": "die",
      "word": "Kiste",
      "translation": {
        "tr": "kutu",
        "en": "box"
      }
    },
    {
      "article": "die",
      "word": "Klasse",
      "translation": {
        "tr": "sınıf",
        "en": "class"
      }
    },
    {
      "article": "das",
      "word": "Klassenzimmer",
      "translation": {
        "tr": "sınıf",
        "en": "classroom"
      }
    },
    {
      "article": "das",
      "word": "Klavier",
      "translation": {
        "tr": "Piyano",
        "en": "Piano"
      }
    },
    {
      "article": "die",
      "word": "Kleidung",
      "translation": {
        "tr": "Giyim",
        "en": "Clothing"
      }
    },
    {
      "article": "die",
      "word": "Klingel",
      "translation": {
        "tr": "Çan",
        "en": "Bell"
      }
    },
    {
      "article": "die",
      "word": "Klinik",
      "translation": {
        "tr": "Klinik",
        "en": "Clinic"
      }
    },
    {
      "article": "die",
      "word": "Kneipe",
      "translation": {
        "tr": "birahane",
        "en": "pub"
      }
    },
    {
      "article": "das",
      "word": "Knie",
      "translation": {
        "tr": "Dizler",
        "en": "Knees"
      }
    },
    {
      "article": "der",
      "word": "Knoblauch",
      "translation": {
        "tr": "Sarımsak",
        "en": "Garlic"
      }
    },
    {
      "article": "der",
      "word": "Knochen",
      "translation": {
        "tr": "Kemikler",
        "en": "Bones"
      }
    },
    {
      "article": "der",
      "word": "Knopf",
      "translation": {
        "tr": "düğme",
        "en": "button"
      }
    },
    {
      "article": "das",
      "word": "Kochen",
      "translation": {
        "tr": "Yemek Pişirme",
        "en": "Cooking"
      }
    },
    {
      "article": "der",
      "word": "Kollege",
      "translation": {
        "tr": "meslektaş",
        "en": "colleague"
      }
    },
    {
      "article": "die",
      "word": "Kollegin",
      "translation": {
        "tr": "meslektaş",
        "en": "colleague"
      }
    },
    {
      "article": "das",
      "word": "Komma",
      "translation": {
        "tr": "Virgül",
        "en": "Comma"
      }
    },
    {
      "article": "der",
      "word": "Kompass",
      "translation": {
        "tr": "Pusula",
        "en": "Compass"
      }
    },
    {
      "article": "der",
      "word": "Kontakt",
      "translation": {
        "tr": "İletişim",
        "en": "Contact"
      }
    },
    {
      "article": "der",
      "word": "Kontinent",
      "translation": {
        "tr": "kıta",
        "en": "continent"
      }
    },
    {
      "article": "das",
      "word": "Konto",
      "translation": {
        "tr": "hesap",
        "en": "account"
      }
    },
    {
      "article": "die",
      "word": "Kontrolle",
      "translation": {
        "tr": "Kontrol",
        "en": "Control"
      }
    },
    {
      "article": "das",
      "word": "Konzert",
      "translation": {
        "tr": "Konser",
        "en": "Concert"
      }
    },
    {
      "article": "die",
      "word": "Kopie",
      "translation": {
        "tr": "Kopyala",
        "en": "Copy"
      }
    },
    {
      "article": "der",
      "word": "Korb",
      "translation": {
        "tr": "sepet",
        "en": "basket"
      }
    },
    {
      "article": "das",
      "word": "Korn",
      "translation": {
        "tr": "tahıl",
        "en": "grain"
      }
    },
    {
      "article": "das",
      "word": "Kostüm",
      "translation": {
        "tr": "kostüm",
        "en": "costume"
      }
    },
    {
      "article": "die",
      "word": "Kraft",
      "translation": {
        "tr": "Güç",
        "en": "Strength"
      }
    },
    {
      "article": "der",
      "word": "Kran",
      "translation": {
        "tr": "vinç",
        "en": "crane"
      }
    },
    {
      "article": "das",
      "word": "Krankenhaus",
      "translation": {
        "tr": "Hastane",
        "en": "Hospital"
      }
    },
    {
      "article": "die",
      "word": "Krankenkasse",
      "translation": {
        "tr": "Sağlık sigortası",
        "en": "Health insurance"
      }
    },
    {
      "article": "die",
      "word": "Krankenschwester",
      "translation": {
        "tr": "Hemşire",
        "en": "Nurse"
      }
    },
    {
      "article": "der",
      "word": "Krankenwagen",
      "translation": {
        "tr": "Ambulans",
        "en": "Ambulance"
      }
    },
    {
      "article": "die",
      "word": "Krankheit",
      "translation": {
        "tr": "hastalık",
        "en": "disease"
      }
    },
    {
      "article": "das",
      "word": "Kraut",
      "translation": {
        "tr": "bitki",
        "en": "herb"
      }
    },
    {
      "article": "die",
      "word": "Krawatte",
      "translation": {
        "tr": "Kravat",
        "en": "Tie"
      }
    },
    {
      "article": "der",
      "word": "Kreis",
      "translation": {
        "tr": "daire",
        "en": "circle"
      }
    },
    {
      "article": "das",
      "word": "Kreuz",
      "translation": {
        "tr": "Çapraz",
        "en": "Cross"
      }
    },
    {
      "article": "die",
      "word": "Kreuzung",
      "translation": {
        "tr": "kavşak",
        "en": "intersection"
      }
    },
    {
      "article": "der",
      "word": "Krieg",
      "translation": {
        "tr": "savaş",
        "en": "war"
      }
    },
    {
      "article": "die",
      "word": "Krone",
      "translation": {
        "tr": "Taç",
        "en": "Crown"
      }
    },
    {
      "article": "die",
      "word": "Kugel",
      "translation": {
        "tr": "top",
        "en": "ball"
      }
    },
    {
      "article": "das",
      "word": "Küken",
      "translation": {
        "tr": "Civcivler",
        "en": "Chicks"
      }
    },
    {
      "article": "der",
      "word": "Kunde",
      "translation": {
        "tr": "müşteri",
        "en": "customer"
      }
    },
    {
      "article": "der",
      "word": "Kurs",
      "translation": {
        "tr": "Kurs",
        "en": "Course"
      }
    },
    {
      "article": "die",
      "word": "Kurve",
      "translation": {
        "tr": "eğri",
        "en": "curve"
      }
    },
    {
      "article": "der",
      "word": "Kuss",
      "translation": {
        "tr": "Öpücük",
        "en": "Kiss"
      }
    },
    {
      "article": "die",
      "word": "Küste",
      "translation": {
        "tr": "sahil",
        "en": "coast"
      }
    },
    {
      "article": "das",
      "word": "Lachen",
      "translation": {
        "tr": "Gülmek",
        "en": "Laugh"
      }
    },
    {
      "article": "der",
      "word": "Lachs",
      "translation": {
        "tr": "Somon",
        "en": "Salmon"
      }
    },
    {
      "article": "der",
      "word": "Laden",
      "translation": {
        "tr": "Yükleniyor",
        "en": "Loading"
      }
    },
    {
      "article": "das",
      "word": "Lamm",
      "translation": {
        "tr": "Kuzu",
        "en": "Lamb"
      }
    },
    {
      "article": "die",
      "word": "Landung",
      "translation": {
        "tr": "iniş",
        "en": "landing"
      }
    },
    {
      "article": "die",
      "word": "Länge",
      "translation": {
        "tr": "Uzunluk",
        "en": "Length"
      }
    },
    {
      "article": "der",
      "word": "Laptop",
      "translation": {
        "tr": "Dizüstü bilgisayar",
        "en": "Laptop"
      }
    },
    {
      "article": "der",
      "word": "Lastwagen",
      "translation": {
        "tr": "Kamyonlar",
        "en": "Trucks"
      }
    },
    {
      "article": "die",
      "word": "Laterne",
      "translation": {
        "tr": "fener",
        "en": "lantern"
      }
    },
    {
      "article": "der",
      "word": "Lauf",
      "translation": {
        "tr": "Çalıştır",
        "en": "Run"
      }
    },
    {
      "article": "die",
      "word": "Laune",
      "translation": {
        "tr": "Ruh hali",
        "en": "Mood"
      }
    },
    {
      "article": "der",
      "word": "Laut",
      "translation": {
        "tr": "Yüksek sesle",
        "en": "Loud"
      }
    },
    {
      "article": "der",
      "word": "Lautsprecher",
      "translation": {
        "tr": "Hoparlörler",
        "en": "Speakers"
      }
    },
    {
      "article": "die",
      "word": "Leber",
      "translation": {
        "tr": "Karaciğer",
        "en": "Liver"
      }
    },
    {
      "article": "das",
      "word": "Leder",
      "translation": {
        "tr": "Deri",
        "en": "Leather"
      }
    },
    {
      "article": "das",
      "word": "Lehrbuch",
      "translation": {
        "tr": "Ders Kitabı",
        "en": "Textbook"
      }
    },
    {
      "article": "der",
      "word": "Leim",
      "translation": {
        "tr": "tutkal",
        "en": "glue"
      }
    },
    {
      "article": "die",
      "word": "Leinwand",
      "translation": {
        "tr": "tuval",
        "en": "canvas"
      }
    },
    {
      "article": "die",
      "word": "Leistung",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      }
    },
    {
      "article": "der",
      "word": "Leser",
      "translation": {
        "tr": "Okuyucu",
        "en": "Reader"
      }
    },
    {
      "article": "der",
      "word": "Liebling",
      "translation": {
        "tr": "sevgilim",
        "en": "Darling"
      }
    },
    {
      "article": "die",
      "word": "Lieferung",
      "translation": {
        "tr": "Teslimat",
        "en": "Delivery"
      }
    },
    {
      "article": "der",
      "word": "Lift",
      "translation": {
        "tr": "Asansör",
        "en": "Elevator"
      }
    },
    {
      "article": "das",
      "word": "Lila",
      "translation": {
        "tr": "Mor",
        "en": "Purple"
      }
    },
    {
      "article": "die",
      "word": "Linie",
      "translation": {
        "tr": "çizgi",
        "en": "line"
      }
    },
    {
      "article": "die",
      "word": "Linse",
      "translation": {
        "tr": "mercek",
        "en": "lens"
      }
    },
    {
      "article": "die",
      "word": "Liste",
      "translation": {
        "tr": "Liste",
        "en": "List"
      }
    },
    {
      "article": "das",
      "word": "Lob",
      "translation": {
        "tr": "Övgü",
        "en": "Praise"
      }
    },
    {
      "article": "das",
      "word": "Logo",
      "translation": {
        "tr": "logo",
        "en": "Logo"
      }
    },
    {
      "article": "der",
      "word": "Lohn",
      "translation": {
        "tr": "ücretler",
        "en": "wages"
      }
    },
    {
      "article": "das",
      "word": "Lokal",
      "translation": {
        "tr": "Yerel",
        "en": "Local"
      }
    },
    {
      "article": "das",
      "word": "Los",
      "translation": {
        "tr": "Git",
        "en": "Go"
      }
    },
    {
      "article": "das",
      "word": "Lotto",
      "translation": {
        "tr": "Piyango",
        "en": "Lottery"
      }
    },
    {
      "article": "die",
      "word": "Lücke",
      "translation": {
        "tr": "boşluk",
        "en": "gap"
      }
    },
    {
      "article": "die",
      "word": "Lüge",
      "translation": {
        "tr": "yalan söylemek",
        "en": "lie"
      }
    },
    {
      "article": "der",
      "word": "Lügner",
      "translation": {
        "tr": "Yalancı",
        "en": "Liar"
      }
    },
    {
      "article": "die",
      "word": "Lunge",
      "translation": {
        "tr": "akciğerler",
        "en": "lungs"
      }
    },
    {
      "article": "die",
      "word": "Lust",
      "translation": {
        "tr": "Şehvet",
        "en": "Lust"
      }
    },
    {
      "article": "das",
      "word": "Magazin",
      "translation": {
        "tr": "Dergi",
        "en": "Magazine"
      }
    },
    {
      "article": "das",
      "word": "Mal",
      "translation": {
        "tr": "kez",
        "en": "times"
      }
    },
    {
      "article": "der",
      "word": "Maler",
      "translation": {
        "tr": "Ressam",
        "en": "Painter"
      }
    },
    {
      "article": "der",
      "word": "Mantel",
      "translation": {
        "tr": "ceket",
        "en": "coat"
      }
    },
    {
      "article": "die",
      "word": "Marke",
      "translation": {
        "tr": "Marka",
        "en": "Brand"
      }
    },
    {
      "article": "die",
      "word": "Marmelade",
      "translation": {
        "tr": "reçel",
        "en": "jam"
      }
    },
    {
      "article": "die",
      "word": "Maschine",
      "translation": {
        "tr": "makine",
        "en": "machine"
      }
    },
    {
      "article": "die",
      "word": "Maske",
      "translation": {
        "tr": "Maske",
        "en": "Mask"
      }
    },
    {
      "article": "das",
      "word": "Material",
      "translation": {
        "tr": "malzeme",
        "en": "material"
      }
    },
    {
      "article": "die",
      "word": "Matte",
      "translation": {
        "tr": "mat",
        "en": "mat"
      }
    },
    {
      "article": "die",
      "word": "Mauer",
      "translation": {
        "tr": "duvar",
        "en": "wall"
      }
    },
    {
      "article": "das",
      "word": "Maul",
      "translation": {
        "tr": "Ağız",
        "en": "Mouth"
      }
    },
    {
      "article": "die",
      "word": "Medizin",
      "translation": {
        "tr": "Tıp",
        "en": "Medicine"
      }
    },
    {
      "article": "die",
      "word": "Meinung",
      "translation": {
        "tr": "görüş",
        "en": "opinion"
      }
    },
    {
      "article": "der",
      "word": "Meister",
      "translation": {
        "tr": "usta",
        "en": "Master"
      }
    },
    {
      "article": "die",
      "word": "Meldung",
      "translation": {
        "tr": "Mesaj",
        "en": "Message"
      }
    },
    {
      "article": "die",
      "word": "Melodie",
      "translation": {
        "tr": "Melodi",
        "en": "Melody"
      }
    },
    {
      "article": "die",
      "word": "Menge",
      "translation": {
        "tr": "miktar",
        "en": "quantity"
      }
    },
    {
      "article": "das",
      "word": "Menü",
      "translation": {
        "tr": "Menü",
        "en": "Menu"
      }
    },
    {
      "article": "das",
      "word": "Metall",
      "translation": {
        "tr": "maden",
        "en": "metal"
      }
    },
    {
      "article": "die",
      "word": "Miete",
      "translation": {
        "tr": "Kiralık",
        "en": "Rent"
      }
    },
    {
      "article": "der",
      "word": "Mieter",
      "translation": {
        "tr": "kiracı",
        "en": "tenant"
      }
    },
    {
      "article": "das",
      "word": "Mikrofon",
      "translation": {
        "tr": "Mikrofon",
        "en": "Microphone"
      }
    },
    {
      "article": "die",
      "word": "Mine",
      "translation": {
        "tr": "benim",
        "en": "mine"
      }
    },
    {
      "article": "das",
      "word": "Minus",
      "translation": {
        "tr": "Eksi",
        "en": "Minus"
      }
    },
    {
      "article": "der",
      "word": "Mist",
      "translation": {
        "tr": "saçmalık",
        "en": "Crap"
      }
    },
    {
      "article": "der",
      "word": "Mitarbeiter",
      "translation": {
        "tr": "Çalışanlar",
        "en": "Employees"
      }
    },
    {
      "article": "der",
      "word": "Mittag",
      "translation": {
        "tr": "Öğlen",
        "en": "Noon"
      }
    },
    {
      "article": "das",
      "word": "Mittagessen",
      "translation": {
        "tr": "Öğle yemeği",
        "en": "Lunch"
      }
    },
    {
      "article": "die",
      "word": "Mitte",
      "translation": {
        "tr": "orta",
        "en": "middle"
      }
    },
    {
      "article": "das",
      "word": "Möbel",
      "translation": {
        "tr": "Mobilya",
        "en": "Furniture"
      }
    },
    {
      "article": "die",
      "word": "Mode",
      "translation": {
        "tr": "Moda",
        "en": "Fashion"
      }
    },
    {
      "article": "der",
      "word": "Moment",
      "translation": {
        "tr": "Bekle",
        "en": "Wait"
      }
    },
    {
      "article": "das",
      "word": "Monster",
      "translation": {
        "tr": "Canavarlar",
        "en": "Monsters"
      }
    },
    {
      "article": "der",
      "word": "Motor",
      "translation": {
        "tr": "motor",
        "en": "engine"
      }
    },
    {
      "article": "das",
      "word": "Motorrad",
      "translation": {
        "tr": "Motosiklet",
        "en": "Motorcycle"
      }
    },
    {
      "article": "der",
      "word": "Mülleimer",
      "translation": {
        "tr": "Çöp kutusu",
        "en": "Trash can"
      }
    },
    {
      "article": "das",
      "word": "Museum",
      "translation": {
        "tr": "Müze",
        "en": "Museum"
      }
    },
    {
      "article": "der",
      "word": "Musiker",
      "translation": {
        "tr": "Müzisyen",
        "en": "Musician"
      }
    },
    {
      "article": "das",
      "word": "Muster",
      "translation": {
        "tr": "Desen",
        "en": "Pattern"
      }
    },
    {
      "article": "der",
      "word": "Mut",
      "translation": {
        "tr": "Cesaret",
        "en": "Courage"
      }
    },
    {
      "article": "der",
      "word": "Nachteil",
      "translation": {
        "tr": "Dezavantaj",
        "en": "Disadvantage"
      }
    },
    {
      "article": "der",
      "word": "Nacken",
      "translation": {
        "tr": "Boyun",
        "en": "Neck"
      }
    },
    {
      "article": "die",
      "word": "Nadel",
      "translation": {
        "tr": "iğne",
        "en": "needle"
      }
    },
    {
      "article": "die",
      "word": "Nahrung",
      "translation": {
        "tr": "yiyecek",
        "en": "food"
      }
    },
    {
      "article": "das",
      "word": "Nahrungsmittel",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      }
    },
    {
      "article": "die",
      "word": "Natur",
      "translation": {
        "tr": "Doğa",
        "en": "Nature"
      }
    },
    {
      "article": "der",
      "word": "Nebel",
      "translation": {
        "tr": "Sis",
        "en": "Fog"
      }
    },
    {
      "article": "der",
      "word": "Neffe",
      "translation": {
        "tr": "Yeğen",
        "en": "Nephew"
      }
    },
    {
      "article": "der",
      "word": "Nerv",
      "translation": {
        "tr": "sinir",
        "en": "nerve"
      }
    },
    {
      "article": "die",
      "word": "Nichte",
      "translation": {
        "tr": "yeğen",
        "en": "niece"
      }
    },
    {
      "article": "die",
      "word": "Niere",
      "translation": {
        "tr": "böbrek",
        "en": "kidney"
      }
    },
    {
      "article": "die",
      "word": "Note",
      "translation": {
        "tr": "not",
        "en": "grade"
      }
    },
    {
      "article": "das",
      "word": "Notebook",
      "translation": {
        "tr": "Defter",
        "en": "Notebook"
      }
    },
    {
      "article": "die",
      "word": "Notiz",
      "translation": {
        "tr": "Not",
        "en": "Note"
      }
    },
    {
      "article": "der",
      "word": "Notruf",
      "translation": {
        "tr": "Acil arama",
        "en": "Emergency call"
      }
    },
    {
      "article": "die",
      "word": "Nummer",
      "translation": {
        "tr": "sayı",
        "en": "number"
      }
    },
    {
      "article": "die",
      "word": "Nuss",
      "translation": {
        "tr": "Somun",
        "en": "Nut"
      }
    },
    {
      "article": "das",
      "word": "Objekt",
      "translation": {
        "tr": "Nesne",
        "en": "Object"
      }
    },
    {
      "article": "die",
      "word": "Option",
      "translation": {
        "tr": "seçenek",
        "en": "option"
      }
    },
    {
      "article": "der",
      "word": "Ordner",
      "translation": {
        "tr": "klasör",
        "en": "folder"
      }
    },
    {
      "article": "die",
      "word": "Ordnung",
      "translation": {
        "tr": "tamam",
        "en": "Okay"
      }
    },
    {
      "article": "der",
      "word": "Österreicher",
      "translation": {
        "tr": "Avusturyalılar",
        "en": "Austrians"
      }
    },
    {
      "article": "der",
      "word": "Ozean",
      "translation": {
        "tr": "Okyanus",
        "en": "Ocean"
      }
    },
    {
      "article": "das",
      "word": "Paar",
      "translation": {
        "tr": "Çift",
        "en": "Couple"
      }
    },
    {
      "article": "die",
      "word": "Packung",
      "translation": {
        "tr": "paket",
        "en": "pack"
      }
    },
    {
      "article": "das",
      "word": "Paket",
      "translation": {
        "tr": "paket",
        "en": "package"
      }
    },
    {
      "article": "die",
      "word": "Palme",
      "translation": {
        "tr": "palmiye ağacı",
        "en": "palm tree"
      }
    },
    {
      "article": "der",
      "word": "Park",
      "translation": {
        "tr": "Parkı",
        "en": "Park"
      }
    },
    {
      "article": "der",
      "word": "Parkplatz",
      "translation": {
        "tr": "Otopark",
        "en": "Parking lot"
      }
    },
    {
      "article": "der",
      "word": "Partner",
      "translation": {
        "tr": "Ortak",
        "en": "Partner"
      }
    },
    {
      "article": "die",
      "word": "Party",
      "translation": {
        "tr": "Parti",
        "en": "Party"
      }
    },
    {
      "article": "der",
      "word": "Pass",
      "translation": {
        "tr": "Geçmek",
        "en": "Pass"
      }
    },
    {
      "article": "der",
      "word": "Passagier",
      "translation": {
        "tr": "yolcu",
        "en": "passenger"
      }
    },
    {
      "article": "das",
      "word": "Passwort",
      "translation": {
        "tr": "Şifre",
        "en": "Password"
      }
    },
    {
      "article": "der",
      "word": "Patient",
      "translation": {
        "tr": "hasta",
        "en": "patient"
      }
    },
    {
      "article": "das",
      "word": "Pech",
      "translation": {
        "tr": "Kötü şans",
        "en": "Bad luck"
      }
    },
    {
      "article": "die",
      "word": "Person",
      "translation": {
        "tr": "kişi",
        "en": "person"
      }
    },
    {
      "article": "die",
      "word": "Pfanne",
      "translation": {
        "tr": "tava",
        "en": "pan"
      }
    },
    {
      "article": "der",
      "word": "Pfeffer",
      "translation": {
        "tr": "biber",
        "en": "pepper"
      }
    },
    {
      "article": "der",
      "word": "Pfeil",
      "translation": {
        "tr": "Ok",
        "en": "Arrow"
      }
    },
    {
      "article": "das",
      "word": "Pflaster",
      "translation": {
        "tr": "Alçı",
        "en": "Plaster"
      }
    },
    {
      "article": "die",
      "word": "Pille",
      "translation": {
        "tr": "hap",
        "en": "pill"
      }
    },
    {
      "article": "der",
      "word": "Pilz",
      "translation": {
        "tr": "Mantar",
        "en": "Mushroom"
      }
    },
    {
      "article": "die",
      "word": "Pistole",
      "translation": {
        "tr": "Tabanca",
        "en": "Pistol"
      }
    },
    {
      "article": "das",
      "word": "Plakat",
      "translation": {
        "tr": "Poster",
        "en": "Poster"
      }
    },
    {
      "article": "der",
      "word": "Plan",
      "translation": {
        "tr": "Planı",
        "en": "Plan"
      }
    },
    {
      "article": "der",
      "word": "Planet",
      "translation": {
        "tr": "Gezegen",
        "en": "Planet"
      }
    },
    {
      "article": "die",
      "word": "Platte",
      "translation": {
        "tr": "plaka",
        "en": "plate"
      }
    },
    {
      "article": "der",
      "word": "Pokal",
      "translation": {
        "tr": "Fincan",
        "en": "Cup"
      }
    },
    {
      "article": "das",
      "word": "Pony",
      "translation": {
        "tr": "Patlama",
        "en": "Bangs"
      }
    },
    {
      "article": "der",
      "word": "Pool",
      "translation": {
        "tr": "Havuz",
        "en": "Pool"
      }
    },
    {
      "article": "die",
      "word": "Portion",
      "translation": {
        "tr": "porsiyon",
        "en": "portion"
      }
    },
    {
      "article": "die",
      "word": "Position",
      "translation": {
        "tr": "konum",
        "en": "position"
      }
    },
    {
      "article": "das",
      "word": "Poster",
      "translation": {
        "tr": "Posterler",
        "en": "Posters"
      }
    },
    {
      "article": "das",
      "word": "Praktikum",
      "translation": {
        "tr": "Staj",
        "en": "Internship"
      }
    },
    {
      "article": "der",
      "word": "Präsident",
      "translation": {
        "tr": "Başkan",
        "en": "President"
      }
    },
    {
      "article": "der",
      "word": "Preis",
      "translation": {
        "tr": "Fiyat",
        "en": "Price"
      }
    },
    {
      "article": "der",
      "word": "Prinz",
      "translation": {
        "tr": "Prens",
        "en": "Prince"
      }
    },
    {
      "article": "die",
      "word": "Prinzessin",
      "translation": {
        "tr": "Prenses",
        "en": "Princess"
      }
    },
    {
      "article": "das",
      "word": "Problem",
      "translation": {
        "tr": "sorun",
        "en": "problem"
      }
    },
    {
      "article": "das",
      "word": "Produkt",
      "translation": {
        "tr": "ürün",
        "en": "product"
      }
    },
    {
      "article": "der",
      "word": "Professor",
      "translation": {
        "tr": "Profesör",
        "en": "Professor"
      }
    },
    {
      "article": "das",
      "word": "Programm",
      "translation": {
        "tr": "programı",
        "en": "program"
      }
    },
    {
      "article": "das",
      "word": "Projekt",
      "translation": {
        "tr": "Proje",
        "en": "Project"
      }
    },
    {
      "article": "das",
      "word": "Prozent",
      "translation": {
        "tr": "yüzde",
        "en": "percent"
      }
    },
    {
      "article": "der",
      "word": "Pullover",
      "translation": {
        "tr": "Kazak",
        "en": "Sweater"
      }
    },
    {
      "article": "die",
      "word": "Pumpe",
      "translation": {
        "tr": "pompa",
        "en": "pump"
      }
    },
    {
      "article": "das",
      "word": "Puzzle",
      "translation": {
        "tr": "Bulmaca",
        "en": "Puzzle"
      }
    },
    {
      "article": "das",
      "word": "Quadrat",
      "translation": {
        "tr": "kare",
        "en": "square"
      }
    },
    {
      "article": "der",
      "word": "Quark",
      "translation": {
        "tr": "Kuark",
        "en": "Quark"
      }
    },
    {
      "article": "die",
      "word": "Quelle",
      "translation": {
        "tr": "Kaynak",
        "en": "Source"
      }
    },
    {
      "article": "der",
      "word": "Rabatt",
      "translation": {
        "tr": "İndirim",
        "en": "Discount"
      }
    },
    {
      "article": "der",
      "word": "Rabe",
      "translation": {
        "tr": "Kuzgun",
        "en": "Raven"
      }
    },
    {
      "article": "der",
      "word": "Radfahrer",
      "translation": {
        "tr": "Bisikletçi",
        "en": "Cyclist"
      }
    },
    {
      "article": "die",
      "word": "Rakete",
      "translation": {
        "tr": "roket",
        "en": "rocket"
      }
    },
    {
      "article": "der",
      "word": "Rap",
      "translation": {
        "tr": "rap",
        "en": "Rap"
      }
    },
    {
      "article": "der",
      "word": "Rasen",
      "translation": {
        "tr": "çim",
        "en": "lawn"
      }
    },
    {
      "article": "das",
      "word": "Rathaus",
      "translation": {
        "tr": "Belediye Binası",
        "en": "City Hall"
      }
    },
    {
      "article": "das",
      "word": "Rätsel",
      "translation": {
        "tr": "Bulmacalar",
        "en": "Puzzles"
      }
    },
    {
      "article": "die",
      "word": "Ratte",
      "translation": {
        "tr": "Sıçan",
        "en": "Rat"
      }
    },
    {
      "article": "der",
      "word": "Rauch",
      "translation": {
        "tr": "duman",
        "en": "smoke"
      }
    },
    {
      "article": "die",
      "word": "Reaktion",
      "translation": {
        "tr": "tepki",
        "en": "reaction"
      }
    },
    {
      "article": "der",
      "word": "Rechner",
      "translation": {
        "tr": "Hesap Makinesi",
        "en": "Calculator"
      }
    },
    {
      "article": "die",
      "word": "Rechnung",
      "translation": {
        "tr": "Fatura",
        "en": "Invoice"
      }
    },
    {
      "article": "das",
      "word": "Recht",
      "translation": {
        "tr": "Sağ",
        "en": "Right"
      }
    },
    {
      "article": "die",
      "word": "Rede",
      "translation": {
        "tr": "Konuşma",
        "en": "Speech"
      }
    },
    {
      "article": "die",
      "word": "Regel",
      "translation": {
        "tr": "Kural",
        "en": "Rule"
      }
    },
    {
      "article": "der",
      "word": "Reifen",
      "translation": {
        "tr": "lastikler",
        "en": "tires"
      }
    },
    {
      "article": "die",
      "word": "Reihe",
      "translation": {
        "tr": "sıra",
        "en": "row"
      }
    },
    {
      "article": "der",
      "word": "Reiter",
      "translation": {
        "tr": "binici",
        "en": "Rider"
      }
    },
    {
      "article": "der",
      "word": "Rekord",
      "translation": {
        "tr": "Kayıt",
        "en": "Record"
      }
    },
    {
      "article": "die",
      "word": "Religion",
      "translation": {
        "tr": "din",
        "en": "religion"
      }
    },
    {
      "article": "der",
      "word": "Respekt",
      "translation": {
        "tr": "saygı",
        "en": "Respect"
      }
    },
    {
      "article": "der",
      "word": "Rest",
      "translation": {
        "tr": "Dinlenme",
        "en": "Rest"
      }
    },
    {
      "article": "das",
      "word": "Restaurant",
      "translation": {
        "tr": "Restoran",
        "en": "Restaurant"
      }
    },
    {
      "article": "das",
      "word": "Rezept",
      "translation": {
        "tr": "Tarif",
        "en": "Recipe"
      }
    },
    {
      "article": "der",
      "word": "Richter",
      "translation": {
        "tr": "Yargıç",
        "en": "Judge"
      }
    },
    {
      "article": "die",
      "word": "Richtung",
      "translation": {
        "tr": "yön",
        "en": "direction"
      }
    },
    {
      "article": "der",
      "word": "Ring",
      "translation": {
        "tr": "halka",
        "en": "ring"
      }
    },
    {
      "article": "der",
      "word": "Roboter",
      "translation": {
        "tr": "robot",
        "en": "Robot"
      }
    },
    {
      "article": "der",
      "word": "Rock",
      "translation": {
        "tr": "Kaya",
        "en": "Rock"
      }
    },
    {
      "article": "das",
      "word": "Rohr",
      "translation": {
        "tr": "boru",
        "en": "pipe"
      }
    },
    {
      "article": "die",
      "word": "Röhre",
      "translation": {
        "tr": "tüp",
        "en": "tube"
      }
    },
    {
      "article": "die",
      "word": "Rolle",
      "translation": {
        "tr": "rol",
        "en": "role"
      }
    },
    {
      "article": "der",
      "word": "Roman",
      "translation": {
        "tr": "roman",
        "en": "novel"
      }
    },
    {
      "article": "die",
      "word": "Rose",
      "translation": {
        "tr": "Gül",
        "en": "Rose"
      }
    },
    {
      "article": "der",
      "word": "Rücken",
      "translation": {
        "tr": "geri",
        "en": "back"
      }
    },
    {
      "article": "der",
      "word": "Rucksack",
      "translation": {
        "tr": "Sırt çantası",
        "en": "Backpack"
      }
    },
    {
      "article": "das",
      "word": "Ruder",
      "translation": {
        "tr": "Dümen",
        "en": "Rudder"
      }
    },
    {
      "article": "der",
      "word": "Ruf",
      "translation": {
        "tr": "İtibar",
        "en": "Reputation"
      }
    },
    {
      "article": "die",
      "word": "Sache",
      "translation": {
        "tr": "şey",
        "en": "thing"
      }
    },
    {
      "article": "der",
      "word": "Sack",
      "translation": {
        "tr": "çuval",
        "en": "sack"
      }
    },
    {
      "article": "die",
      "word": "Sahne",
      "translation": {
        "tr": "krem",
        "en": "cream"
      }
    },
    {
      "article": "der",
      "word": "Sand",
      "translation": {
        "tr": "Kum",
        "en": "Sand"
      }
    },
    {
      "article": "der",
      "word": "Satz",
      "translation": {
        "tr": "Cümle",
        "en": "Sentence"
      }
    },
    {
      "article": "die",
      "word": "Schachtel",
      "translation": {
        "tr": "Kutu",
        "en": "Box"
      }
    },
    {
      "article": "der",
      "word": "Schaden",
      "translation": {
        "tr": "Hasar",
        "en": "Damage"
      }
    },
    {
      "article": "der",
      "word": "Schal",
      "translation": {
        "tr": "Eşarp",
        "en": "Scarf"
      }
    },
    {
      "article": "der",
      "word": "Schalter",
      "translation": {
        "tr": "Anahtar",
        "en": "Switch"
      }
    },
    {
      "article": "der",
      "word": "Schatten",
      "translation": {
        "tr": "Gölge",
        "en": "Shadow"
      }
    },
    {
      "article": "der",
      "word": "Schatz",
      "translation": {
        "tr": "tatlım",
        "en": "Sweetheart"
      }
    },
    {
      "article": "das",
      "word": "Schaufenster",
      "translation": {
        "tr": "Vitrin",
        "en": "Shop window"
      }
    },
    {
      "article": "die",
      "word": "Schaukel",
      "translation": {
        "tr": "salıncak",
        "en": "swing"
      }
    },
    {
      "article": "der",
      "word": "Schauspieler",
      "translation": {
        "tr": "aktör",
        "en": "actor"
      }
    },
    {
      "article": "die",
      "word": "Schauspielerin",
      "translation": {
        "tr": "aktris",
        "en": "actress"
      }
    },
    {
      "article": "die",
      "word": "Scheibe",
      "translation": {
        "tr": "disk",
        "en": "disc"
      }
    },
    {
      "article": "die",
      "word": "Schere",
      "translation": {
        "tr": "Makas",
        "en": "Scissors"
      }
    },
    {
      "article": "die",
      "word": "Schiene",
      "translation": {
        "tr": "demiryolu",
        "en": "rail"
      }
    },
    {
      "article": "das",
      "word": "Schild",
      "translation": {
        "tr": "Kalkan",
        "en": "Shield"
      }
    },
    {
      "article": "die",
      "word": "Schildkröte",
      "translation": {
        "tr": "Kaplumbağa",
        "en": "Turtle"
      }
    },
    {
      "article": "der",
      "word": "Schmerz",
      "translation": {
        "tr": "ağrı",
        "en": "pain"
      }
    },
    {
      "article": "der",
      "word": "Schmutz",
      "translation": {
        "tr": "Kir",
        "en": "Dirt"
      }
    },
    {
      "article": "der",
      "word": "Schnaps",
      "translation": {
        "tr": "Likör",
        "en": "Liquor"
      }
    },
    {
      "article": "die",
      "word": "Schnecke",
      "translation": {
        "tr": "salyangoz",
        "en": "snail"
      }
    },
    {
      "article": "der",
      "word": "Schrank",
      "translation": {
        "tr": "dolap",
        "en": "closet"
      }
    },
    {
      "article": "die",
      "word": "Schraube",
      "translation": {
        "tr": "vida",
        "en": "screw"
      }
    },
    {
      "article": "der",
      "word": "Schrei",
      "translation": {
        "tr": "Çığlık",
        "en": "Scream"
      }
    },
    {
      "article": "der",
      "word": "Schreibtisch",
      "translation": {
        "tr": "Çalışma masası",
        "en": "Desk"
      }
    },
    {
      "article": "der",
      "word": "Schritt",
      "translation": {
        "tr": "adım",
        "en": "step"
      }
    },
    {
      "article": "die",
      "word": "Schublade",
      "translation": {
        "tr": "çekmece",
        "en": "drawer"
      }
    },
    {
      "article": "der",
      "word": "Schuss",
      "translation": {
        "tr": "atış",
        "en": "Shot"
      }
    },
    {
      "article": "die",
      "word": "Schüssel",
      "translation": {
        "tr": "kase",
        "en": "bowl"
      }
    },
    {
      "article": "der",
      "word": "Schutz",
      "translation": {
        "tr": "Koruma",
        "en": "Protection"
      }
    },
    {
      "article": "der",
      "word": "Schwan",
      "translation": {
        "tr": "Kuğu",
        "en": "Swan"
      }
    },
    {
      "article": "die",
      "word": "Schwangerschaft",
      "translation": {
        "tr": "hamilelik",
        "en": "pregnancy"
      }
    },
    {
      "article": "der",
      "word": "Schwanz",
      "translation": {
        "tr": "kuyruk",
        "en": "tail"
      }
    },
    {
      "article": "das",
      "word": "Schwert",
      "translation": {
        "tr": "Kılıç",
        "en": "Sword"
      }
    },
    {
      "article": "das",
      "word": "Schwimmen",
      "translation": {
        "tr": "Yüzme",
        "en": "Swimming"
      }
    },
    {
      "article": "der",
      "word": "See",
      "translation": {
        "tr": "Göl",
        "en": "Lake"
      }
    },
    {
      "article": "das",
      "word": "Segel",
      "translation": {
        "tr": "yelken",
        "en": "sail"
      }
    },
    {
      "article": "das",
      "word": "Seil",
      "translation": {
        "tr": "halat",
        "en": "rope"
      }
    },
    {
      "article": "der",
      "word": "Sekretär",
      "translation": {
        "tr": "Sekreter",
        "en": "Secretary"
      }
    },
    {
      "article": "der",
      "word": "Sekt",
      "translation": {
        "tr": "köpüklü şarap",
        "en": "sparkling wine"
      }
    },
    {
      "article": "das",
      "word": "Semester",
      "translation": {
        "tr": "dönem",
        "en": "semester"
      }
    },
    {
      "article": "das",
      "word": "Seminar",
      "translation": {
        "tr": "Seminer",
        "en": "Seminar"
      }
    },
    {
      "article": "der",
      "word": "Sender",
      "translation": {
        "tr": "verici",
        "en": "transmitter"
      }
    },
    {
      "article": "der",
      "word": "Sessel",
      "translation": {
        "tr": "Koltuk",
        "en": "Armchair"
      }
    },
    {
      "article": "die",
      "word": "Sicherheit",
      "translation": {
        "tr": "Güvenlik",
        "en": "Security"
      }
    },
    {
      "article": "das",
      "word": "Sieb",
      "translation": {
        "tr": "elek",
        "en": "Sieve"
      }
    },
    {
      "article": "der",
      "word": "Sieg",
      "translation": {
        "tr": "Zafer",
        "en": "Victory"
      }
    },
    {
      "article": "das",
      "word": "Signal",
      "translation": {
        "tr": "sinyal",
        "en": "signal"
      }
    },
    {
      "article": "das",
      "word": "Silber",
      "translation": {
        "tr": "Gümüş",
        "en": "Silver"
      }
    },
    {
      "article": "der",
      "word": "Sinn",
      "translation": {
        "tr": "Anlam",
        "en": "sense"
      }
    },
    {
      "article": "die",
      "word": "Situation",
      "translation": {
        "tr": "durum",
        "en": "situation"
      }
    },
    {
      "article": "der",
      "word": "Sitz",
      "translation": {
        "tr": "Koltuk",
        "en": "Seat"
      }
    },
    {
      "article": "der",
      "word": "Ski",
      "translation": {
        "tr": "Kayaklar",
        "en": "Skis"
      }
    },
    {
      "article": "das",
      "word": "Smartphone",
      "translation": {
        "tr": "Akıllı telefon",
        "en": "Smartphone"
      }
    },
    {
      "article": "der",
      "word": "Soldat",
      "translation": {
        "tr": "Asker",
        "en": "Soldier"
      }
    },
    {
      "article": "der",
      "word": "Sonnenaufgang",
      "translation": {
        "tr": "Gündoğumu",
        "en": "Sunrise"
      }
    },
    {
      "article": "die",
      "word": "Soße",
      "translation": {
        "tr": "Sos",
        "en": "Sauce"
      }
    },
    {
      "article": "der",
      "word": "Spanier",
      "translation": {
        "tr": "İspanyollar",
        "en": "Spaniards"
      }
    },
    {
      "article": "das",
      "word": "Spanisch",
      "translation": {
        "tr": "İspanyolca",
        "en": "Spanish"
      }
    },
    {
      "article": "der",
      "word": "Spargel",
      "translation": {
        "tr": "Kuşkonmaz",
        "en": "Asparagus"
      }
    },
    {
      "article": "der",
      "word": "Spaziergang",
      "translation": {
        "tr": "Yürümek",
        "en": "Walk"
      }
    },
    {
      "article": "die",
      "word": "Spende",
      "translation": {
        "tr": "Bağış yap",
        "en": "Donate"
      }
    },
    {
      "article": "der",
      "word": "Spinat",
      "translation": {
        "tr": "Ispanak",
        "en": "Spinach"
      }
    },
    {
      "article": "die",
      "word": "Spinne",
      "translation": {
        "tr": "Örümcek",
        "en": "Spider"
      }
    },
    {
      "article": "der",
      "word": "Sport",
      "translation": {
        "tr": "Spor",
        "en": "Sports"
      }
    },
    {
      "article": "der",
      "word": "Sportler",
      "translation": {
        "tr": "Atlet",
        "en": "Athlete"
      }
    },
    {
      "article": "der",
      "word": "Sprecher",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      }
    },
    {
      "article": "die",
      "word": "Sprecherin",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      }
    },
    {
      "article": "die",
      "word": "Spritze",
      "translation": {
        "tr": "Şırınga",
        "en": "Syringe"
      }
    },
    {
      "article": "das",
      "word": "Stadion",
      "translation": {
        "tr": "Stadyum",
        "en": "Stadium"
      }
    },
    {
      "article": "der",
      "word": "Stall",
      "translation": {
        "tr": "istikrarlı",
        "en": "stable"
      }
    },
    {
      "article": "die",
      "word": "Stange",
      "translation": {
        "tr": "çubuk",
        "en": "rod"
      }
    },
    {
      "article": "der",
      "word": "Stau",
      "translation": {
        "tr": "trafik sıkışıklığı",
        "en": "traffic jam"
      }
    },
    {
      "article": "die",
      "word": "Steckdose",
      "translation": {
        "tr": "Soket",
        "en": "Socket"
      }
    },
    {
      "article": "der",
      "word": "Stecker",
      "translation": {
        "tr": "Fiş",
        "en": "Plug"
      }
    },
    {
      "article": "der",
      "word": "Stein",
      "translation": {
        "tr": "Taş",
        "en": "Stone"
      }
    },
    {
      "article": "der",
      "word": "Stiefel",
      "translation": {
        "tr": "bot",
        "en": "Boots"
      }
    }
  ],
  "B1": [
    {
      "article": "der",
      "word": "Aal",
      "translation": {
        "tr": "Yılan balığı",
        "en": "Eel"
      }
    },
    {
      "article": "die",
      "word": "Abfahrt",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      }
    },
    {
      "article": "der",
      "word": "Abflug",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      }
    },
    {
      "article": "die",
      "word": "Abgabe",
      "translation": {
        "tr": "vergi",
        "en": "levy"
      }
    },
    {
      "article": "der",
      "word": "Abgeordnete",
      "translation": {
        "tr": "milletvekilleri",
        "en": "MPs"
      }
    },
    {
      "article": "die",
      "word": "Abkürzung",
      "translation": {
        "tr": "Kısaltma",
        "en": "Abbreviation"
      }
    },
    {
      "article": "das",
      "word": "Abonnement",
      "translation": {
        "tr": "Abonelik",
        "en": "Subscription"
      }
    },
    {
      "article": "der",
      "word": "Abschied",
      "translation": {
        "tr": "veda",
        "en": "Farewell"
      }
    },
    {
      "article": "der",
      "word": "Abschluss",
      "translation": {
        "tr": "Mezuniyet",
        "en": "Graduation"
      }
    },
    {
      "article": "der",
      "word": "Abschnitt",
      "translation": {
        "tr": "Bölüm",
        "en": "Section"
      }
    },
    {
      "article": "der",
      "word": "Absender",
      "translation": {
        "tr": "Gönderen",
        "en": "Sender"
      }
    },
    {
      "article": "die",
      "word": "Abstimmung",
      "translation": {
        "tr": "Oy ver",
        "en": "Vote"
      }
    },
    {
      "article": "die",
      "word": "Abteilung",
      "translation": {
        "tr": "Departman",
        "en": "Department"
      }
    },
    {
      "article": "die",
      "word": "Abwesenheit",
      "translation": {
        "tr": "devamsızlık",
        "en": "Absence"
      }
    },
    {
      "article": "die",
      "word": "Achse",
      "translation": {
        "tr": "eksen",
        "en": "axis"
      }
    },
    {
      "article": "die",
      "word": "Achtung",
      "translation": {
        "tr": "Dikkat",
        "en": "Attention"
      }
    },
    {
      "article": "der",
      "word": "Agent",
      "translation": {
        "tr": "ajan",
        "en": "agent"
      }
    },
    {
      "article": "die",
      "word": "Agentur",
      "translation": {
        "tr": "Ajans",
        "en": "Agency"
      }
    },
    {
      "article": "der",
      "word": "Ägypter",
      "translation": {
        "tr": "Mısırlılar",
        "en": "Egyptians"
      }
    },
    {
      "article": "der",
      "word": "Alarm",
      "translation": {
        "tr": "uyarı",
        "en": "Alert"
      }
    },
    {
      "article": "der",
      "word": "Albtraum",
      "translation": {
        "tr": "Kabus",
        "en": "Nightmare"
      }
    },
    {
      "article": "die",
      "word": "Altstadt",
      "translation": {
        "tr": "Eski şehir",
        "en": "Old town"
      }
    },
    {
      "article": "der",
      "word": "Amateur",
      "translation": {
        "tr": "amatör",
        "en": "Amateur"
      }
    },
    {
      "article": "der",
      "word": "Anbieter",
      "translation": {
        "tr": "sağlayıcı",
        "en": "Provider"
      }
    },
    {
      "article": "die",
      "word": "Anfrage",
      "translation": {
        "tr": "istek",
        "en": "request"
      }
    },
    {
      "article": "die",
      "word": "Angelegenheit",
      "translation": {
        "tr": "madde",
        "en": "matter"
      }
    },
    {
      "article": "der",
      "word": "Angestellte",
      "translation": {
        "tr": "çalışanlar",
        "en": "employees"
      }
    },
    {
      "article": "der",
      "word": "Angriff",
      "translation": {
        "tr": "Saldırı",
        "en": "Attack"
      }
    },
    {
      "article": "der",
      "word": "Anker",
      "translation": {
        "tr": "Çapa",
        "en": "Anchor"
      }
    },
    {
      "article": "die",
      "word": "Ankündigung",
      "translation": {
        "tr": "Duyuru",
        "en": "Announcement"
      }
    },
    {
      "article": "die",
      "word": "Anlage",
      "translation": {
        "tr": "Tesis",
        "en": "Facility"
      }
    },
    {
      "article": "die",
      "word": "Anleitung",
      "translation": {
        "tr": "Talimatlar",
        "en": "Instructions"
      }
    },
    {
      "article": "der",
      "word": "Anschluss",
      "translation": {
        "tr": "Bağlantı",
        "en": "Connection"
      }
    },
    {
      "article": "das",
      "word": "Antibiotikum",
      "translation": {
        "tr": "antibiyotik",
        "en": "antibiotic"
      }
    },
    {
      "article": "der",
      "word": "Antrag",
      "translation": {
        "tr": "Başvuru",
        "en": "Application"
      }
    },
    {
      "article": "die",
      "word": "Anwesenheit",
      "translation": {
        "tr": "Mevcudiyet",
        "en": "Presence"
      }
    },
    {
      "article": "die",
      "word": "Anzahl",
      "translation": {
        "tr": "sayı",
        "en": "number"
      }
    },
    {
      "article": "die",
      "word": "Anzahlung",
      "translation": {
        "tr": "mevduat",
        "en": "deposit"
      }
    },
    {
      "article": "das",
      "word": "Aquarium",
      "translation": {
        "tr": "Akvaryum",
        "en": "Aquarium"
      }
    },
    {
      "article": "der",
      "word": "Araber",
      "translation": {
        "tr": "Araplar",
        "en": "Arabs"
      }
    },
    {
      "article": "der",
      "word": "Arbeitgeber",
      "translation": {
        "tr": "İşveren",
        "en": "Employer"
      }
    },
    {
      "article": "der",
      "word": "Arbeitnehmer",
      "translation": {
        "tr": "çalışanlar",
        "en": "employees"
      }
    },
    {
      "article": "das",
      "word": "Arbeitsamt",
      "translation": {
        "tr": "İstihdam ofisi",
        "en": "Employment office"
      }
    },
    {
      "article": "die",
      "word": "Armee",
      "translation": {
        "tr": "Ordu",
        "en": "Army"
      }
    },
    {
      "article": "die",
      "word": "Armut",
      "translation": {
        "tr": "Yoksulluk",
        "en": "Poverty"
      }
    },
    {
      "article": "das",
      "word": "Aroma",
      "translation": {
        "tr": "aroma",
        "en": "aroma"
      }
    },
    {
      "article": "das",
      "word": "Arzneimittel",
      "translation": {
        "tr": "İlaçlar",
        "en": "Medicines"
      }
    },
    {
      "article": "der",
      "word": "Atem",
      "translation": {
        "tr": "Nefes",
        "en": "Breath"
      }
    },
    {
      "article": "der",
      "word": "Athlet",
      "translation": {
        "tr": "Atlet",
        "en": "Athlete"
      }
    },
    {
      "article": "der",
      "word": "Aufbau",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      }
    },
    {
      "article": "der",
      "word": "Aufenthalt",
      "translation": {
        "tr": "Kal",
        "en": "Stay"
      }
    },
    {
      "article": "die",
      "word": "Auflage",
      "translation": {
        "tr": "baskı",
        "en": "edition"
      }
    },
    {
      "article": "die",
      "word": "Auflistung",
      "translation": {
        "tr": "İlan",
        "en": "Listing"
      }
    },
    {
      "article": "die",
      "word": "Aufmerksamkeit",
      "translation": {
        "tr": "dikkat",
        "en": "attention"
      }
    },
    {
      "article": "die",
      "word": "Aufnahme",
      "translation": {
        "tr": "Kayıt",
        "en": "Recording"
      }
    },
    {
      "article": "der",
      "word": "Aufprall",
      "translation": {
        "tr": "Etki",
        "en": "Impact"
      }
    },
    {
      "article": "die",
      "word": "Aufregung",
      "translation": {
        "tr": "Heyecan",
        "en": "Excitement"
      }
    },
    {
      "article": "die",
      "word": "Aufsicht",
      "translation": {
        "tr": "Denetim",
        "en": "Supervision"
      }
    },
    {
      "article": "die",
      "word": "Aufstellung",
      "translation": {
        "tr": "Kadro",
        "en": "Lineup"
      }
    },
    {
      "article": "der",
      "word": "Aufstieg",
      "translation": {
        "tr": "Yükseliş",
        "en": "Ascension"
      }
    },
    {
      "article": "der",
      "word": "Auftakt",
      "translation": {
        "tr": "Prelüd",
        "en": "Prelude"
      }
    },
    {
      "article": "die",
      "word": "Ausdauer",
      "translation": {
        "tr": "Dayanıklılık",
        "en": "Endurance"
      }
    },
    {
      "article": "der",
      "word": "Ausdruck",
      "translation": {
        "tr": "ifade",
        "en": "expression"
      }
    },
    {
      "article": "die",
      "word": "Auskunft",
      "translation": {
        "tr": "Bilgi",
        "en": "Information"
      }
    },
    {
      "article": "die",
      "word": "Aussage",
      "translation": {
        "tr": "beyan",
        "en": "statement"
      }
    },
    {
      "article": "die",
      "word": "Aussicht",
      "translation": {
        "tr": "Görüntüle",
        "en": "View"
      }
    },
    {
      "article": "die",
      "word": "Ausstellung",
      "translation": {
        "tr": "Sergi",
        "en": "Exhibition"
      }
    },
    {
      "article": "die",
      "word": "Auswahl",
      "translation": {
        "tr": "Seçim",
        "en": "Selection"
      }
    },
    {
      "article": "der",
      "word": "Ausweis",
      "translation": {
        "tr": "Kimlik kartı",
        "en": "ID card"
      }
    },
    {
      "article": "das",
      "word": "Autogramm",
      "translation": {
        "tr": "İmza",
        "en": "Autograph"
      }
    },
    {
      "article": "der",
      "word": "Automat",
      "translation": {
        "tr": "otomat",
        "en": "automat"
      }
    },
    {
      "article": "der",
      "word": "Bach",
      "translation": {
        "tr": "Bach",
        "en": "Bach"
      }
    },
    {
      "article": "der",
      "word": "Ballon",
      "translation": {
        "tr": "Balon",
        "en": "Balloon"
      }
    },
    {
      "article": "das",
      "word": "Bargeld",
      "translation": {
        "tr": "Nakit",
        "en": "Cash"
      }
    },
    {
      "article": "der",
      "word": "Bau",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      }
    },
    {
      "article": "die",
      "word": "Baumwolle",
      "translation": {
        "tr": "Pamuk",
        "en": "Cotton"
      }
    },
    {
      "article": "die",
      "word": "Baustelle",
      "translation": {
        "tr": "İnşaat alanı",
        "en": "Construction site"
      }
    },
    {
      "article": "die",
      "word": "Bedeutung",
      "translation": {
        "tr": "Anlamı",
        "en": "Meaning"
      }
    },
    {
      "article": "das",
      "word": "Bedürfnis",
      "translation": {
        "tr": "ihtiyaç",
        "en": "need"
      }
    },
    {
      "article": "die",
      "word": "Beerdigung",
      "translation": {
        "tr": "Cenaze",
        "en": "Funeral"
      }
    },
    {
      "article": "der",
      "word": "Befehl",
      "translation": {
        "tr": "Komut",
        "en": "Command"
      }
    },
    {
      "article": "der",
      "word": "Begriff",
      "translation": {
        "tr": "dönem",
        "en": "term"
      }
    },
    {
      "article": "die",
      "word": "Behandlung",
      "translation": {
        "tr": "Tedavi",
        "en": "Treatment"
      }
    },
    {
      "article": "die",
      "word": "Behinderung",
      "translation": {
        "tr": "Engellilik",
        "en": "Disability"
      }
    },
    {
      "article": "die",
      "word": "Behörde",
      "translation": {
        "tr": "Yetki",
        "en": "Authority"
      }
    },
    {
      "article": "der",
      "word": "Beitrag",
      "translation": {
        "tr": "Gönderi",
        "en": "Post"
      }
    },
    {
      "article": "die",
      "word": "Beleuchtung",
      "translation": {
        "tr": "Aydınlatma",
        "en": "Lighting"
      }
    },
    {
      "article": "die",
      "word": "Belohnung",
      "translation": {
        "tr": "ödül",
        "en": "reward"
      }
    },
    {
      "article": "die",
      "word": "Bemerkung",
      "translation": {
        "tr": "Açıklama",
        "en": "Remark"
      }
    },
    {
      "article": "der",
      "word": "Benutzer",
      "translation": {
        "tr": "Kullanıcı",
        "en": "User"
      }
    },
    {
      "article": "die",
      "word": "Benutzung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      }
    },
    {
      "article": "der",
      "word": "Berater",
      "translation": {
        "tr": "Danışman",
        "en": "Consultant"
      }
    },
    {
      "article": "der",
      "word": "Bereich",
      "translation": {
        "tr": "alan",
        "en": "area"
      }
    },
    {
      "article": "der",
      "word": "Bericht",
      "translation": {
        "tr": "Rapor",
        "en": "Report"
      }
    },
    {
      "article": "der",
      "word": "Besitz",
      "translation": {
        "tr": "Topa sahip olma",
        "en": "Possession"
      }
    },
    {
      "article": "der",
      "word": "Besitzer",
      "translation": {
        "tr": "Sahip",
        "en": "Owner"
      }
    },
    {
      "article": "der",
      "word": "Beutel",
      "translation": {
        "tr": "kese",
        "en": "pouch"
      }
    },
    {
      "article": "die",
      "word": "Bezahlung",
      "translation": {
        "tr": "Ödeme",
        "en": "Payment"
      }
    },
    {
      "article": "die",
      "word": "Bibel",
      "translation": {
        "tr": "İncil",
        "en": "Bible"
      }
    },
    {
      "article": "der",
      "word": "Biber",
      "translation": {
        "tr": "kunduz",
        "en": "Beaver"
      }
    },
    {
      "article": "die",
      "word": "Bildung",
      "translation": {
        "tr": "Eğitim",
        "en": "Education"
      }
    },
    {
      "article": "die",
      "word": "Biologie",
      "translation": {
        "tr": "Biyoloji",
        "en": "Biology"
      }
    },
    {
      "article": "der",
      "word": "Biss",
      "translation": {
        "tr": "ısırık",
        "en": "Bite"
      }
    },
    {
      "article": "die",
      "word": "Blase",
      "translation": {
        "tr": "Kabarcık",
        "en": "Bubble"
      }
    },
    {
      "article": "das",
      "word": "Blech",
      "translation": {
        "tr": "metal levha",
        "en": "sheet metal"
      }
    },
    {
      "article": "das",
      "word": "Blog",
      "translation": {
        "tr": "Blog",
        "en": "Blog"
      }
    },
    {
      "article": "der",
      "word": "Bonus",
      "translation": {
        "tr": "Bonus",
        "en": "Bonus"
      }
    },
    {
      "article": "die",
      "word": "Börse",
      "translation": {
        "tr": "Borsa",
        "en": "Stock market"
      }
    },
    {
      "article": "die",
      "word": "Botschaft",
      "translation": {
        "tr": "Elçilik",
        "en": "Embassy"
      }
    },
    {
      "article": "das",
      "word": "Boxen",
      "translation": {
        "tr": "Boks",
        "en": "Boxing"
      }
    },
    {
      "article": "die",
      "word": "Branche",
      "translation": {
        "tr": "Endüstri",
        "en": "Industry"
      }
    },
    {
      "article": "der",
      "word": "Brite",
      "translation": {
        "tr": "İngiliz",
        "en": "Brit"
      }
    },
    {
      "article": "die",
      "word": "Bücherei",
      "translation": {
        "tr": "Kütüphane",
        "en": "Library"
      }
    },
    {
      "article": "die",
      "word": "Bude",
      "translation": {
        "tr": "Kabin",
        "en": "Booth"
      }
    },
    {
      "article": "der",
      "word": "Bügel",
      "translation": {
        "tr": "Askı",
        "en": "Hanger"
      }
    },
    {
      "article": "die",
      "word": "Bühne",
      "translation": {
        "tr": "sahne",
        "en": "stage"
      }
    },
    {
      "article": "der",
      "word": "Bunker",
      "translation": {
        "tr": "Bunkerler",
        "en": "Bunkers"
      }
    },
    {
      "article": "der",
      "word": "Bürger",
      "translation": {
        "tr": "Vatandaş",
        "en": "Citizen"
      }
    },
    {
      "article": "der",
      "word": "Bürgermeister",
      "translation": {
        "tr": "Belediye Başkanı",
        "en": "Mayor"
      }
    },
    {
      "article": "der",
      "word": "Bursche",
      "translation": {
        "tr": "arkadaş",
        "en": "fellow"
      }
    },
    {
      "article": "das",
      "word": "Café",
      "translation": {
        "tr": "Kafe",
        "en": "Cafe"
      }
    },
    {
      "article": "das",
      "word": "Camp",
      "translation": {
        "tr": "Kamp",
        "en": "Camp"
      }
    },
    {
      "article": "das",
      "word": "Camping",
      "translation": {
        "tr": "Kamp yapmak",
        "en": "Camping"
      }
    },
    {
      "article": "das",
      "word": "Casino",
      "translation": {
        "tr": "Kumarhane",
        "en": "Casino"
      }
    },
    {
      "article": "der",
      "word": "Champion",
      "translation": {
        "tr": "Şampiyon",
        "en": "Champion"
      }
    },
    {
      "article": "die",
      "word": "Chance",
      "translation": {
        "tr": "Şans",
        "en": "Chance"
      }
    },
    {
      "article": "der",
      "word": "Check",
      "translation": {
        "tr": "Kontrol et",
        "en": "Check"
      }
    },
    {
      "article": "die",
      "word": "Chefin",
      "translation": {
        "tr": "patron",
        "en": "boss"
      }
    },
    {
      "article": "der",
      "word": "Chip",
      "translation": {
        "tr": "çip",
        "en": "chip"
      }
    },
    {
      "article": "der",
      "word": "Chor",
      "translation": {
        "tr": "Koro",
        "en": "Choir"
      }
    },
    {
      "article": "der",
      "word": "Clown",
      "translation": {
        "tr": "palyaço",
        "en": "clown"
      }
    },
    {
      "article": "der",
      "word": "Club",
      "translation": {
        "tr": "Kulüp",
        "en": "Club"
      }
    },
    {
      "article": "der",
      "word": "Comic",
      "translation": {
        "tr": "komik",
        "en": "Comic"
      }
    },
    {
      "article": "die",
      "word": "Couch",
      "translation": {
        "tr": "kanepe",
        "en": "couch"
      }
    },
    {
      "article": "der",
      "word": "Damm",
      "translation": {
        "tr": "Baraj",
        "en": "Dam"
      }
    },
    {
      "article": "der",
      "word": "Dank",
      "translation": {
        "tr": "teşekkürler",
        "en": "Thanks"
      }
    },
    {
      "article": "der",
      "word": "Darm",
      "translation": {
        "tr": "bağırsaklar",
        "en": "intestines"
      }
    },
    {
      "article": "der",
      "word": "Darsteller",
      "translation": {
        "tr": "Aktör",
        "en": "Actor"
      }
    },
    {
      "article": "die",
      "word": "Datei",
      "translation": {
        "tr": "dosya",
        "en": "file"
      }
    },
    {
      "article": "die",
      "word": "Dauer",
      "translation": {
        "tr": "Süre",
        "en": "Duration"
      }
    },
    {
      "article": "das",
      "word": "Deck",
      "translation": {
        "tr": "güverte",
        "en": "deck"
      }
    },
    {
      "article": "der",
      "word": "Defekt",
      "translation": {
        "tr": "Kusur",
        "en": "Defect"
      }
    },
    {
      "article": "die",
      "word": "Demokratie",
      "translation": {
        "tr": "Demokrasi",
        "en": "Democracy"
      }
    },
    {
      "article": "der",
      "word": "Designer",
      "translation": {
        "tr": "Tasarımcılar",
        "en": "Designers"
      }
    },
    {
      "article": "der",
      "word": "Detektiv",
      "translation": {
        "tr": "Dedektif",
        "en": "Detective"
      }
    },
    {
      "article": "das",
      "word": "Deutsch",
      "translation": {
        "tr": "Almanca",
        "en": "German"
      }
    },
    {
      "article": "der",
      "word": "Deutsche",
      "translation": {
        "tr": "Almanlar",
        "en": "Germans"
      }
    },
    {
      "article": "der",
      "word": "Dialog",
      "translation": {
        "tr": "Diyalog",
        "en": "Dialogue"
      }
    },
    {
      "article": "der",
      "word": "Dichter",
      "translation": {
        "tr": "Şair",
        "en": "Poet"
      }
    },
    {
      "article": "der",
      "word": "Dieb",
      "translation": {
        "tr": "Hırsız",
        "en": "Thief"
      }
    },
    {
      "article": "der",
      "word": "Diener",
      "translation": {
        "tr": "hizmetçi",
        "en": "servant"
      }
    },
    {
      "article": "der",
      "word": "Dienst",
      "translation": {
        "tr": "hizmet",
        "en": "service"
      }
    },
    {
      "article": "der",
      "word": "Diktator",
      "translation": {
        "tr": "Diktatör",
        "en": "Dictator"
      }
    },
    {
      "article": "der",
      "word": "Dinosaurier",
      "translation": {
        "tr": "Dinozorlar",
        "en": "Dinosaurs"
      }
    },
    {
      "article": "das",
      "word": "Diplom",
      "translation": {
        "tr": "Diploma",
        "en": "Diploma"
      }
    },
    {
      "article": "der",
      "word": "Direktor",
      "translation": {
        "tr": "Direktör",
        "en": "Director"
      }
    },
    {
      "article": "die",
      "word": "Disco",
      "translation": {
        "tr": "Disko",
        "en": "Disco"
      }
    },
    {
      "article": "der",
      "word": "Dom",
      "translation": {
        "tr": "Katedral",
        "en": "Cathedral"
      }
    },
    {
      "article": "der",
      "word": "Dorfbewohner",
      "translation": {
        "tr": "köylüler",
        "en": "villagers"
      }
    },
    {
      "article": "der",
      "word": "Draht",
      "translation": {
        "tr": "tel",
        "en": "wire"
      }
    },
    {
      "article": "das",
      "word": "Drama",
      "translation": {
        "tr": "dram",
        "en": "drama"
      }
    },
    {
      "article": "der",
      "word": "Dreck",
      "translation": {
        "tr": "Kir",
        "en": "Dirt"
      }
    },
    {
      "article": "das",
      "word": "Drittel",
      "translation": {
        "tr": "üçüncü",
        "en": "third"
      }
    },
    {
      "article": "die",
      "word": "Droge",
      "translation": {
        "tr": "ilaç",
        "en": "drug"
      }
    },
    {
      "article": "die",
      "word": "Drohung",
      "translation": {
        "tr": "Tehdit",
        "en": "Threat"
      }
    },
    {
      "article": "der",
      "word": "Duft",
      "translation": {
        "tr": "Koku",
        "en": "Fragrance"
      }
    },
    {
      "article": "die",
      "word": "Ebene",
      "translation": {
        "tr": "seviye",
        "en": "level"
      }
    },
    {
      "article": "die",
      "word": "ec-Karte",
      "translation": {
        "tr": "EC kartı",
        "en": "EC card"
      }
    },
    {
      "article": "das",
      "word": "Echo",
      "translation": {
        "tr": "yankı",
        "en": "Echo"
      }
    },
    {
      "article": "der",
      "word": "Effekt",
      "translation": {
        "tr": "Etki",
        "en": "Effect"
      }
    },
    {
      "article": "der",
      "word": "Ehepartner",
      "translation": {
        "tr": "eş",
        "en": "spouse"
      }
    },
    {
      "article": "die",
      "word": "Eiche",
      "translation": {
        "tr": "Meşe",
        "en": "Oak"
      }
    },
    {
      "article": "die",
      "word": "Eigenschaft",
      "translation": {
        "tr": "mülk",
        "en": "property"
      }
    },
    {
      "article": "das",
      "word": "Eigentum",
      "translation": {
        "tr": "mülk",
        "en": "property"
      }
    },
    {
      "article": "der",
      "word": "Eigentümer",
      "translation": {
        "tr": "Sahip",
        "en": "Owner"
      }
    },
    {
      "article": "die",
      "word": "Eile",
      "translation": {
        "tr": "Acele et",
        "en": "Hurry"
      }
    },
    {
      "article": "die",
      "word": "Einfahrt",
      "translation": {
        "tr": "Giriş",
        "en": "Entrance"
      }
    },
    {
      "article": "der",
      "word": "Einfall",
      "translation": {
        "tr": "fikir",
        "en": "idea"
      }
    },
    {
      "article": "die",
      "word": "Einführung",
      "translation": {
        "tr": "Giriş",
        "en": "Introduction"
      }
    },
    {
      "article": "die",
      "word": "Eingabe",
      "translation": {
        "tr": "Giriş",
        "en": "Input"
      }
    },
    {
      "article": "der",
      "word": "Eingang",
      "translation": {
        "tr": "Giriş",
        "en": "Entrance"
      }
    },
    {
      "article": "die",
      "word": "Einheit",
      "translation": {
        "tr": "Birlik",
        "en": "Unity"
      }
    },
    {
      "article": "die",
      "word": "Einrichtung",
      "translation": {
        "tr": "Tesis",
        "en": "Facility"
      }
    },
    {
      "article": "der",
      "word": "Einsatz",
      "translation": {
        "tr": "Kullanım",
        "en": "Use"
      }
    },
    {
      "article": "die",
      "word": "Einstellung",
      "translation": {
        "tr": "Ayar",
        "en": "Setting"
      }
    },
    {
      "article": "der",
      "word": "Eintritt",
      "translation": {
        "tr": "Giriş",
        "en": "Admission"
      }
    },
    {
      "article": "die",
      "word": "Einwanderung",
      "translation": {
        "tr": "Göçmenlik",
        "en": "Immigration"
      }
    },
    {
      "article": "der",
      "word": "Einzelhandel",
      "translation": {
        "tr": "Perakende",
        "en": "Retail"
      }
    },
    {
      "article": "das",
      "word": "Einzelzimmer",
      "translation": {
        "tr": "Tek kişilik oda",
        "en": "Single room"
      }
    },
    {
      "article": "die",
      "word": "Eisenbahn",
      "translation": {
        "tr": "Demiryolu",
        "en": "Railway"
      }
    },
    {
      "article": "das",
      "word": "Elektroauto",
      "translation": {
        "tr": "Elektrikli araba",
        "en": "Electric car"
      }
    },
    {
      "article": "der",
      "word": "Ellbogen",
      "translation": {
        "tr": "Dirsek",
        "en": "Elbow"
      }
    },
    {
      "article": "der",
      "word": "Empfang",
      "translation": {
        "tr": "Resepsiyon",
        "en": "Reception"
      }
    },
    {
      "article": "der",
      "word": "Empfänger",
      "translation": {
        "tr": "Alıcı",
        "en": "Receiver"
      }
    },
    {
      "article": "der",
      "word": "Engländer",
      "translation": {
        "tr": "İngiliz",
        "en": "Englishman"
      }
    },
    {
      "article": "die",
      "word": "Entdeckung",
      "translation": {
        "tr": "Keşif",
        "en": "Discovery"
      }
    },
    {
      "article": "die",
      "word": "Entfernung",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      }
    },
    {
      "article": "die",
      "word": "Entscheidung",
      "translation": {
        "tr": "karar",
        "en": "decision"
      }
    },
    {
      "article": "die",
      "word": "Enttäuschung",
      "translation": {
        "tr": "Hayal kırıklığı",
        "en": "Disappointment"
      }
    },
    {
      "article": "die",
      "word": "Entwicklung",
      "translation": {
        "tr": "Geliştirme",
        "en": "Development"
      }
    },
    {
      "article": "der",
      "word": "Entwurf",
      "translation": {
        "tr": "Taslak",
        "en": "Draft"
      }
    },
    {
      "article": "die",
      "word": "Erfahrung",
      "translation": {
        "tr": "Deneyim",
        "en": "Experience"
      }
    },
    {
      "article": "der",
      "word": "Erfinder",
      "translation": {
        "tr": "Mucit",
        "en": "Inventor"
      }
    },
    {
      "article": "die",
      "word": "Erfindung",
      "translation": {
        "tr": "Buluş",
        "en": "Invention"
      }
    },
    {
      "article": "die",
      "word": "Ergänzung",
      "translation": {
        "tr": "Ek",
        "en": "Supplement"
      }
    },
    {
      "article": "die",
      "word": "Erinnerung",
      "translation": {
        "tr": "Bellek",
        "en": "Memory"
      }
    },
    {
      "article": "die",
      "word": "Erklärung",
      "translation": {
        "tr": "açıklama",
        "en": "explanation"
      }
    },
    {
      "article": "die",
      "word": "Erlaubnis",
      "translation": {
        "tr": "izin",
        "en": "permission"
      }
    },
    {
      "article": "das",
      "word": "Erlebnis",
      "translation": {
        "tr": "Deneyim",
        "en": "Experience"
      }
    },
    {
      "article": "die",
      "word": "Erleichterung",
      "translation": {
        "tr": "Rahatlama",
        "en": "Relief"
      }
    },
    {
      "article": "die",
      "word": "Ernährung",
      "translation": {
        "tr": "Beslenme",
        "en": "Nutrition"
      }
    },
    {
      "article": "die",
      "word": "Ernte",
      "translation": {
        "tr": "Hasat",
        "en": "Harvest"
      }
    },
    {
      "article": "der",
      "word": "Erzähler",
      "translation": {
        "tr": "Anlatıcı",
        "en": "Narrator"
      }
    },
    {
      "article": "der",
      "word": "Esel",
      "translation": {
        "tr": "Eşek",
        "en": "Donkey"
      }
    },
    {
      "article": "das",
      "word": "Experiment",
      "translation": {
        "tr": "Deney",
        "en": "Experiment"
      }
    },
    {
      "article": "der",
      "word": "Export",
      "translation": {
        "tr": "İhracat",
        "en": "Export"
      }
    },
    {
      "article": "das",
      "word": "Extra",
      "translation": {
        "tr": "Ekstra",
        "en": "Extra"
      }
    },
    {
      "article": "der",
      "word": "Fakt",
      "translation": {
        "tr": "Gerçek",
        "en": "Fact"
      }
    },
    {
      "article": "der",
      "word": "Faktor",
      "translation": {
        "tr": "faktör",
        "en": "factor"
      }
    },
    {
      "article": "die",
      "word": "Falle",
      "translation": {
        "tr": "tuzak",
        "en": "trap"
      }
    },
    {
      "article": "die",
      "word": "Fantasie",
      "translation": {
        "tr": "fantezi",
        "en": "fantasy"
      }
    },
    {
      "article": "der",
      "word": "Favorit",
      "translation": {
        "tr": "Favori",
        "en": "Favorite"
      }
    },
    {
      "article": "das",
      "word": "Fernsehen",
      "translation": {
        "tr": "Televizyon",
        "en": "Television"
      }
    },
    {
      "article": "das",
      "word": "Festival",
      "translation": {
        "tr": "Festival",
        "en": "Festival"
      }
    },
    {
      "article": "die",
      "word": "Feuerwehr",
      "translation": {
        "tr": "İtfaiye",
        "en": "Fire department"
      }
    },
    {
      "article": "der",
      "word": "Filter",
      "translation": {
        "tr": "Filtreler",
        "en": "Filters"
      }
    },
    {
      "article": "die",
      "word": "Fitness",
      "translation": {
        "tr": "Fitness",
        "en": "Fitness"
      }
    },
    {
      "article": "die",
      "word": "Fläche",
      "translation": {
        "tr": "alan",
        "en": "area"
      }
    },
    {
      "article": "die",
      "word": "Folge",
      "translation": {
        "tr": "Bölüm",
        "en": "Episode"
      }
    },
    {
      "article": "die",
      "word": "Formel",
      "translation": {
        "tr": "Formül",
        "en": "Formula"
      }
    },
    {
      "article": "das",
      "word": "Forum",
      "translation": {
        "tr": "Forum",
        "en": "Forum"
      }
    },
    {
      "article": "die",
      "word": "Fracht",
      "translation": {
        "tr": "Navlun",
        "en": "Freight"
      }
    },
    {
      "article": "der",
      "word": "Fremde",
      "translation": {
        "tr": "Yabancılar",
        "en": "Strangers"
      }
    },
    {
      "article": "der",
      "word": "Frieden",
      "translation": {
        "tr": "Barış",
        "en": "Peace"
      }
    },
    {
      "article": "die",
      "word": "Frist",
      "translation": {
        "tr": "son tarih",
        "en": "deadline"
      }
    },
    {
      "article": "die",
      "word": "Front",
      "translation": {
        "tr": "ön",
        "en": "front"
      }
    },
    {
      "article": "der",
      "word": "Fund",
      "translation": {
        "tr": "Bul",
        "en": "Find"
      }
    },
    {
      "article": "der",
      "word": "Funk",
      "translation": {
        "tr": "Funk",
        "en": "Funk"
      }
    },
    {
      "article": "der",
      "word": "Funke",
      "translation": {
        "tr": "Kıvılcım",
        "en": "Spark"
      }
    },
    {
      "article": "die",
      "word": "Funktion",
      "translation": {
        "tr": "İşlev",
        "en": "Function"
      }
    },
    {
      "article": "der",
      "word": "Gang",
      "translation": {
        "tr": "dişli",
        "en": "gear"
      }
    },
    {
      "article": "der",
      "word": "Gastgeber",
      "translation": {
        "tr": "Sunucu",
        "en": "Host"
      }
    },
    {
      "article": "das",
      "word": "Gebäck",
      "translation": {
        "tr": "hamur işleri",
        "en": "pastries"
      }
    },
    {
      "article": "die",
      "word": "Gebühr",
      "translation": {
        "tr": "Ücret",
        "en": "Fee"
      }
    },
    {
      "article": "die",
      "word": "Geburt",
      "translation": {
        "tr": "doğum",
        "en": "birth"
      }
    },
    {
      "article": "das",
      "word": "Gedicht",
      "translation": {
        "tr": "Şiir",
        "en": "Poem"
      }
    },
    {
      "article": "die",
      "word": "Geduld",
      "translation": {
        "tr": "Sabır",
        "en": "Patience"
      }
    },
    {
      "article": "die",
      "word": "Gefahr",
      "translation": {
        "tr": "Tehlike",
        "en": "Danger"
      }
    },
    {
      "article": "das",
      "word": "Gefängnis",
      "translation": {
        "tr": "Hapishane",
        "en": "Prison"
      }
    },
    {
      "article": "die",
      "word": "Gegenwart",
      "translation": {
        "tr": "mevcut",
        "en": "present"
      }
    },
    {
      "article": "das",
      "word": "Gehäuse",
      "translation": {
        "tr": "Konut",
        "en": "Housing"
      }
    },
    {
      "article": "das",
      "word": "Gelände",
      "translation": {
        "tr": "Arazi",
        "en": "Terrain"
      }
    },
    {
      "article": "die",
      "word": "Gelegenheit",
      "translation": {
        "tr": "fırsat",
        "en": "opportunity"
      }
    },
    {
      "article": "der",
      "word": "Geliebte",
      "translation": {
        "tr": "sevgili",
        "en": "Beloved"
      }
    },
    {
      "article": "das",
      "word": "Gemälde",
      "translation": {
        "tr": "Tablolar",
        "en": "Paintings"
      }
    },
    {
      "article": "die",
      "word": "Gemeinde",
      "translation": {
        "tr": "topluluk",
        "en": "community"
      }
    },
    {
      "article": "die",
      "word": "Gemeinschaft",
      "translation": {
        "tr": "Topluluk",
        "en": "Community"
      }
    },
    {
      "article": "der",
      "word": "General",
      "translation": {
        "tr": "Genel",
        "en": "General"
      }
    },
    {
      "article": "das",
      "word": "Gerücht",
      "translation": {
        "tr": "Söylenti",
        "en": "Rumor"
      }
    },
    {
      "article": "das",
      "word": "Gerüst",
      "translation": {
        "tr": "iskele",
        "en": "scaffolding"
      }
    },
    {
      "article": "der",
      "word": "Gesang",
      "translation": {
        "tr": "şarkı söylemek",
        "en": "singing"
      }
    },
    {
      "article": "die",
      "word": "Gesellschaft",
      "translation": {
        "tr": "Toplum",
        "en": "Society"
      }
    },
    {
      "article": "das",
      "word": "Getreide",
      "translation": {
        "tr": "Tahıllar",
        "en": "Cereals"
      }
    },
    {
      "article": "das",
      "word": "Gewächshaus",
      "translation": {
        "tr": "sera",
        "en": "greenhouse"
      }
    },
    {
      "article": "das",
      "word": "Gewehr",
      "translation": {
        "tr": "tüfek",
        "en": "rifle"
      }
    },
    {
      "article": "das",
      "word": "Gewerbe",
      "translation": {
        "tr": "Ticari",
        "en": "Commercial"
      }
    },
    {
      "article": "die",
      "word": "Gewerkschaft",
      "translation": {
        "tr": "Birlik",
        "en": "Union"
      }
    },
    {
      "article": "die",
      "word": "Gleichung",
      "translation": {
        "tr": "Denklem",
        "en": "Equation"
      }
    },
    {
      "article": "der",
      "word": "Griff",
      "translation": {
        "tr": "sap",
        "en": "handle"
      }
    },
    {
      "article": "der",
      "word": "Grill",
      "translation": {
        "tr": "Izgara",
        "en": "Grill"
      }
    },
    {
      "article": "die",
      "word": "Grippe",
      "translation": {
        "tr": "Grip",
        "en": "Flu"
      }
    },
    {
      "article": "die",
      "word": "Größe",
      "translation": {
        "tr": "boyut",
        "en": "size"
      }
    },
    {
      "article": "die",
      "word": "Grube",
      "translation": {
        "tr": "çukur",
        "en": "pit"
      }
    },
    {
      "article": "der",
      "word": "Gründer",
      "translation": {
        "tr": "Kurucu",
        "en": "Founder"
      }
    },
    {
      "article": "das",
      "word": "Grundgesetz",
      "translation": {
        "tr": "Temel Hukuk",
        "en": "Basic Law"
      }
    },
    {
      "article": "der",
      "word": "Hacker",
      "translation": {
        "tr": "Bilgisayar korsanları",
        "en": "Hackers"
      }
    },
    {
      "article": "der",
      "word": "Hagel",
      "translation": {
        "tr": "dolu",
        "en": "Hail"
      }
    },
    {
      "article": "das",
      "word": "Halbfinale",
      "translation": {
        "tr": "Yarı finaller",
        "en": "Semifinals"
      }
    },
    {
      "article": "die",
      "word": "Halbzeit",
      "translation": {
        "tr": "İlk yarı",
        "en": "Halftime"
      }
    },
    {
      "article": "der",
      "word": "Halt",
      "translation": {
        "tr": "Durdur",
        "en": "Stop"
      }
    },
    {
      "article": "der",
      "word": "Handel",
      "translation": {
        "tr": "Ticaret",
        "en": "Trade"
      }
    },
    {
      "article": "der",
      "word": "Händler",
      "translation": {
        "tr": "Bayi",
        "en": "Dealer"
      }
    },
    {
      "article": "die",
      "word": "Handlung",
      "translation": {
        "tr": "arsa",
        "en": "plot"
      }
    },
    {
      "article": "das",
      "word": "Handwerk",
      "translation": {
        "tr": "El sanatları",
        "en": "Crafts"
      }
    },
    {
      "article": "der",
      "word": "Hanf",
      "translation": {
        "tr": "kenevir",
        "en": "Hemp"
      }
    },
    {
      "article": "der",
      "word": "Hang",
      "translation": {
        "tr": "Asın",
        "en": "Hang"
      }
    },
    {
      "article": "die",
      "word": "Haube",
      "translation": {
        "tr": "başlık",
        "en": "hood"
      }
    },
    {
      "article": "der",
      "word": "Haufen",
      "translation": {
        "tr": "yığın",
        "en": "Heap"
      }
    },
    {
      "article": "die",
      "word": "Hauptsache",
      "translation": {
        "tr": "Ana şey",
        "en": "Main thing"
      }
    },
    {
      "article": "der",
      "word": "Haushalt",
      "translation": {
        "tr": "ev",
        "en": "household"
      }
    },
    {
      "article": "das",
      "word": "Heim",
      "translation": {
        "tr": "Ana Sayfa",
        "en": "Home"
      }
    },
    {
      "article": "die",
      "word": "Heimat",
      "translation": {
        "tr": "Vatan",
        "en": "Homeland"
      }
    },
    {
      "article": "die",
      "word": "Heizung",
      "translation": {
        "tr": "Isıtma",
        "en": "Heating"
      }
    },
    {
      "article": "der",
      "word": "Helfer",
      "translation": {
        "tr": "yardımcı",
        "en": "helper"
      }
    },
    {
      "article": "der",
      "word": "Hersteller",
      "translation": {
        "tr": "Üretici",
        "en": "Manufacturer"
      }
    },
    {
      "article": "das",
      "word": "Heu",
      "translation": {
        "tr": "Saman",
        "en": "Hay"
      }
    },
    {
      "article": "der",
      "word": "Hintergrund",
      "translation": {
        "tr": "arka plan",
        "en": "background"
      }
    },
    {
      "article": "der",
      "word": "Hinweis",
      "translation": {
        "tr": "Not",
        "en": "Note"
      }
    },
    {
      "article": "das",
      "word": "Hirn",
      "translation": {
        "tr": "beyin",
        "en": "brain"
      }
    },
    {
      "article": "die",
      "word": "Höflichkeit",
      "translation": {
        "tr": "Nezaket",
        "en": "Courtesy"
      }
    },
    {
      "article": "die",
      "word": "Hölle",
      "translation": {
        "tr": "Cehennem",
        "en": "Hell"
      }
    },
    {
      "article": "der",
      "word": "Hörer",
      "translation": {
        "tr": "dinleyici",
        "en": "listener"
      }
    },
    {
      "article": "der",
      "word": "Horizont",
      "translation": {
        "tr": "ufuk",
        "en": "horizon"
      }
    },
    {
      "article": "das",
      "word": "Hormon",
      "translation": {
        "tr": "hormon",
        "en": "hormone"
      }
    },
    {
      "article": "das",
      "word": "Horoskop",
      "translation": {
        "tr": "Burç",
        "en": "Horoscope"
      }
    },
    {
      "article": "der",
      "word": "Horror",
      "translation": {
        "tr": "Korku",
        "en": "Horror"
      }
    },
    {
      "article": "der",
      "word": "Hörsaal",
      "translation": {
        "tr": "konferans salonu",
        "en": "lecture hall"
      }
    },
    {
      "article": "die",
      "word": "Hüfte",
      "translation": {
        "tr": "kalça",
        "en": "hip"
      }
    },
    {
      "article": "die",
      "word": "Hülle",
      "translation": {
        "tr": "kapak",
        "en": "cover"
      }
    },
    {
      "article": "der",
      "word": "Hummer",
      "translation": {
        "tr": "Istakoz",
        "en": "Lobster"
      }
    },
    {
      "article": "die",
      "word": "Hürde",
      "translation": {
        "tr": "engel",
        "en": "hurdle"
      }
    },
    {
      "article": "das",
      "word": "Idol",
      "translation": {
        "tr": "İdol",
        "en": "Idol"
      }
    },
    {
      "article": "der",
      "word": "Indianer",
      "translation": {
        "tr": "Hintliler",
        "en": "Indians"
      }
    },
    {
      "article": "die",
      "word": "Industrie",
      "translation": {
        "tr": "Endüstri",
        "en": "Industry"
      }
    },
    {
      "article": "der",
      "word": "Inhalt",
      "translation": {
        "tr": "İçerik",
        "en": "Content"
      }
    },
    {
      "article": "das",
      "word": "Interview",
      "translation": {
        "tr": "Röportaj",
        "en": "Interview"
      }
    },
    {
      "article": "der",
      "word": "Islam",
      "translation": {
        "tr": "İslâm",
        "en": "Islam"
      }
    },
    {
      "article": "der",
      "word": "Italiener",
      "translation": {
        "tr": "İtalyanlar",
        "en": "Italians"
      }
    },
    {
      "article": "der",
      "word": "Jäger",
      "translation": {
        "tr": "avcı",
        "en": "hunter"
      }
    },
    {
      "article": "das",
      "word": "Jahrhundert",
      "translation": {
        "tr": "yüzyıl",
        "en": "century"
      }
    },
    {
      "article": "das",
      "word": "Jahrzehnt",
      "translation": {
        "tr": "on yıl",
        "en": "decade"
      }
    },
    {
      "article": "das",
      "word": "Japanisch",
      "translation": {
        "tr": "Japonca",
        "en": "Japanese"
      }
    },
    {
      "article": "der",
      "word": "Jet",
      "translation": {
        "tr": "Jet",
        "en": "Jet"
      }
    },
    {
      "article": "der",
      "word": "Journalist",
      "translation": {
        "tr": "Gazeteci",
        "en": "Journalist"
      }
    },
    {
      "article": "der",
      "word": "Jugendliche",
      "translation": {
        "tr": "gençler",
        "en": "teenagers"
      }
    },
    {
      "article": "der",
      "word": "Kandidat",
      "translation": {
        "tr": "aday",
        "en": "candidate"
      }
    },
    {
      "article": "der",
      "word": "Kanzler",
      "translation": {
        "tr": "Şansölye",
        "en": "Chancellor"
      }
    },
    {
      "article": "der",
      "word": "Kapitän",
      "translation": {
        "tr": "Kaptan",
        "en": "Captain"
      }
    },
    {
      "article": "das",
      "word": "Karate",
      "translation": {
        "tr": "karate",
        "en": "karate"
      }
    },
    {
      "article": "der",
      "word": "Katalog",
      "translation": {
        "tr": "Katalog",
        "en": "Catalog"
      }
    },
    {
      "article": "der",
      "word": "Kauf",
      "translation": {
        "tr": "satın alma",
        "en": "purchase"
      }
    },
    {
      "article": "der",
      "word": "Kegel",
      "translation": {
        "tr": "Koni",
        "en": "Cone"
      }
    },
    {
      "article": "die",
      "word": "Kehle",
      "translation": {
        "tr": "boğaz",
        "en": "throat"
      }
    },
    {
      "article": "der",
      "word": "Kerl",
      "translation": {
        "tr": "adam",
        "en": "guy"
      }
    },
    {
      "article": "der",
      "word": "Kern",
      "translation": {
        "tr": "çekirdek",
        "en": "core"
      }
    },
    {
      "article": "das",
      "word": "Kilogramm",
      "translation": {
        "tr": "kilogram",
        "en": "kilograms"
      }
    },
    {
      "article": "die",
      "word": "Kindheit",
      "translation": {
        "tr": "çocukluk",
        "en": "childhood"
      }
    },
    {
      "article": "der",
      "word": "Klang",
      "translation": {
        "tr": "ses",
        "en": "sound"
      }
    },
    {
      "article": "der",
      "word": "Klick",
      "translation": {
        "tr": "Tıklayın",
        "en": "Click"
      }
    },
    {
      "article": "das",
      "word": "Klima",
      "translation": {
        "tr": "İklim",
        "en": "Climate"
      }
    },
    {
      "article": "die",
      "word": "Klinge",
      "translation": {
        "tr": "Bıçak",
        "en": "Blade"
      }
    },
    {
      "article": "das",
      "word": "Kloster",
      "translation": {
        "tr": "Manastır",
        "en": "Monastery"
      }
    },
    {
      "article": "der",
      "word": "Klub",
      "translation": {
        "tr": "Kulüp",
        "en": "Club"
      }
    },
    {
      "article": "der",
      "word": "Knabe",
      "translation": {
        "tr": "oğlan",
        "en": "boy"
      }
    },
    {
      "article": "der",
      "word": "Knall",
      "translation": {
        "tr": "Patlama",
        "en": "Bang"
      }
    },
    {
      "article": "der",
      "word": "Knast",
      "translation": {
        "tr": "Hapishane",
        "en": "Jail"
      }
    },
    {
      "article": "der",
      "word": "Knöchel",
      "translation": {
        "tr": "ayak bileği",
        "en": "ankle"
      }
    },
    {
      "article": "die",
      "word": "Kohle",
      "translation": {
        "tr": "Kömür",
        "en": "Coal"
      }
    },
    {
      "article": "die",
      "word": "Kolonie",
      "translation": {
        "tr": "koloni",
        "en": "colony"
      }
    },
    {
      "article": "der",
      "word": "Komfort",
      "translation": {
        "tr": "Konfor",
        "en": "Comfort"
      }
    },
    {
      "article": "der",
      "word": "Kommentar",
      "translation": {
        "tr": "Yorum",
        "en": "Comment"
      }
    },
    {
      "article": "das",
      "word": "Kondom",
      "translation": {
        "tr": "prezervatif",
        "en": "condom"
      }
    },
    {
      "article": "der",
      "word": "Konflikt",
      "translation": {
        "tr": "Çatışma",
        "en": "Conflict"
      }
    },
    {
      "article": "das",
      "word": "Königreich",
      "translation": {
        "tr": "Krallık",
        "en": "Kingdom"
      }
    },
    {
      "article": "der",
      "word": "Konsum",
      "translation": {
        "tr": "Tüketim",
        "en": "Consumption"
      }
    },
    {
      "article": "das",
      "word": "Konzept",
      "translation": {
        "tr": "kavram",
        "en": "concept"
      }
    },
    {
      "article": "die",
      "word": "Korrektur",
      "translation": {
        "tr": "Düzeltme",
        "en": "Correction"
      }
    },
    {
      "article": "der",
      "word": "Korridor",
      "translation": {
        "tr": "Koridor",
        "en": "Corridor"
      }
    },
    {
      "article": "das",
      "word": "Kraftwerk",
      "translation": {
        "tr": "enerji santrali",
        "en": "power plant"
      }
    },
    {
      "article": "der",
      "word": "Krampf",
      "translation": {
        "tr": "kramp",
        "en": "cramp"
      }
    },
    {
      "article": "der",
      "word": "Kranke",
      "translation": {
        "tr": "Hasta",
        "en": "Sick"
      }
    },
    {
      "article": "der",
      "word": "Kredit",
      "translation": {
        "tr": "Kredi",
        "en": "Credit"
      }
    },
    {
      "article": "die",
      "word": "Kreide",
      "translation": {
        "tr": "Tebeşir",
        "en": "Chalk"
      }
    },
    {
      "article": "der",
      "word": "Krimi",
      "translation": {
        "tr": "Suç",
        "en": "Crime"
      }
    },
    {
      "article": "der",
      "word": "Kriminelle",
      "translation": {
        "tr": "Suçlular",
        "en": "Criminals"
      }
    },
    {
      "article": "die",
      "word": "Krise",
      "translation": {
        "tr": "Kriz",
        "en": "Crisis"
      }
    },
    {
      "article": "die",
      "word": "Kritik",
      "translation": {
        "tr": "Eleştiri",
        "en": "Criticism"
      }
    },
    {
      "article": "der",
      "word": "Kritiker",
      "translation": {
        "tr": "Eleştirmen",
        "en": "Critic"
      }
    },
    {
      "article": "die",
      "word": "Kultur",
      "translation": {
        "tr": "Kültür",
        "en": "Culture"
      }
    },
    {
      "article": "der",
      "word": "Kumpel",
      "translation": {
        "tr": "dostum",
        "en": "Buddy"
      }
    },
    {
      "article": "die",
      "word": "Kunst",
      "translation": {
        "tr": "Sanat",
        "en": "Art"
      }
    },
    {
      "article": "der",
      "word": "Künstler",
      "translation": {
        "tr": "Sanatçı",
        "en": "Artist"
      }
    },
    {
      "article": "die",
      "word": "Kur",
      "translation": {
        "tr": "tedavi",
        "en": "cure"
      }
    },
    {
      "article": "das",
      "word": "Labor",
      "translation": {
        "tr": "Laboratuvar",
        "en": "Laboratory"
      }
    },
    {
      "article": "die",
      "word": "Lage",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      }
    },
    {
      "article": "das",
      "word": "Lager",
      "translation": {
        "tr": "Depo",
        "en": "Warehouse"
      }
    },
    {
      "article": "die",
      "word": "Landschaft",
      "translation": {
        "tr": "manzara",
        "en": "landscape"
      }
    },
    {
      "article": "der",
      "word": "Landwirt",
      "translation": {
        "tr": "çiftçi",
        "en": "farmer"
      }
    },
    {
      "article": "die",
      "word": "Landwirtschaft",
      "translation": {
        "tr": "Tarım",
        "en": "Agriculture"
      }
    },
    {
      "article": "der",
      "word": "Lärm",
      "translation": {
        "tr": "gürültü",
        "en": "noise"
      }
    },
    {
      "article": "die",
      "word": "Last",
      "translation": {
        "tr": "yük",
        "en": "load"
      }
    },
    {
      "article": "der",
      "word": "Laster",
      "translation": {
        "tr": "Yardımcısı",
        "en": "Vice"
      }
    },
    {
      "article": "die",
      "word": "Latte",
      "translation": {
        "tr": "Latte",
        "en": "Latte"
      }
    },
    {
      "article": "die",
      "word": "Lautstärke",
      "translation": {
        "tr": "Hacim",
        "en": "Volume"
      }
    },
    {
      "article": "das",
      "word": "Lebewesen",
      "translation": {
        "tr": "canlılar",
        "en": "living beings"
      }
    },
    {
      "article": "das",
      "word": "Leck",
      "translation": {
        "tr": "Sızıntı",
        "en": "Leak"
      }
    },
    {
      "article": "die",
      "word": "Leere",
      "translation": {
        "tr": "Boşluk",
        "en": "Emptiness"
      }
    },
    {
      "article": "die",
      "word": "Lehre",
      "translation": {
        "tr": "öğretim",
        "en": "teaching"
      }
    },
    {
      "article": "das",
      "word": "Leid",
      "translation": {
        "tr": "Acı çekmek",
        "en": "Suffering"
      }
    },
    {
      "article": "die",
      "word": "Leiter",
      "translation": {
        "tr": "Kafa",
        "en": "Head"
      }
    },
    {
      "article": "das",
      "word": "Lesen",
      "translation": {
        "tr": "Oku",
        "en": "Read"
      }
    },
    {
      "article": "das",
      "word": "Lexikon",
      "translation": {
        "tr": "Sözlük",
        "en": "Lexicon"
      }
    },
    {
      "article": "der",
      "word": "Lieferant",
      "translation": {
        "tr": "Tedarikçi",
        "en": "Supplier"
      }
    },
    {
      "article": "die",
      "word": "Liga",
      "translation": {
        "tr": "Lig",
        "en": "League"
      }
    },
    {
      "article": "der",
      "word": "Lkw",
      "translation": {
        "tr": "Kamyon",
        "en": "Truck"
      }
    },
    {
      "article": "der",
      "word": "Lokführer",
      "translation": {
        "tr": "Tren sürücüsü",
        "en": "Train driver"
      }
    },
    {
      "article": "die",
      "word": "Lösung",
      "translation": {
        "tr": "Çözüm",
        "en": "Solution"
      }
    },
    {
      "article": "die",
      "word": "Lotterie",
      "translation": {
        "tr": "Piyango",
        "en": "Lottery"
      }
    },
    {
      "article": "die",
      "word": "Macht",
      "translation": {
        "tr": "Güç",
        "en": "Power"
      }
    },
    {
      "article": "das",
      "word": "Make-up",
      "translation": {
        "tr": "makyaj",
        "en": "makeup"
      }
    },
    {
      "article": "der",
      "word": "Manager",
      "translation": {
        "tr": "Yöneticiler",
        "en": "Managers"
      }
    },
    {
      "article": "das",
      "word": "Männchen",
      "translation": {
        "tr": "erkek",
        "en": "male"
      }
    },
    {
      "article": "die",
      "word": "Mannschaft",
      "translation": {
        "tr": "takım",
        "en": "team"
      }
    },
    {
      "article": "der",
      "word": "Marathon",
      "translation": {
        "tr": "Maraton",
        "en": "Marathon"
      }
    },
    {
      "article": "der",
      "word": "Mars",
      "translation": {
        "tr": "Mars",
        "en": "Mars"
      }
    },
    {
      "article": "die",
      "word": "Maßnahme",
      "translation": {
        "tr": "Ölçü",
        "en": "Measure"
      }
    },
    {
      "article": "das",
      "word": "Match",
      "translation": {
        "tr": "Maç",
        "en": "Match"
      }
    },
    {
      "article": "die",
      "word": "Mathematik",
      "translation": {
        "tr": "Matematik",
        "en": "Mathematics"
      }
    },
    {
      "article": "der",
      "word": "Maulwurf",
      "translation": {
        "tr": "Köstebek",
        "en": "Mole"
      }
    },
    {
      "article": "der",
      "word": "Mechaniker",
      "translation": {
        "tr": "Tamirci",
        "en": "Mechanic"
      }
    },
    {
      "article": "die",
      "word": "Medaille",
      "translation": {
        "tr": "Madalya",
        "en": "Medal"
      }
    },
    {
      "article": "das",
      "word": "Medikament",
      "translation": {
        "tr": "ilaç",
        "en": "medication"
      }
    },
    {
      "article": "die",
      "word": "Mehrheit",
      "translation": {
        "tr": "Çoğunluk",
        "en": "Majority"
      }
    },
    {
      "article": "die",
      "word": "Mehrwertsteuer",
      "translation": {
        "tr": "KDV",
        "en": "VAT"
      }
    },
    {
      "article": "das",
      "word": "Merkmal",
      "translation": {
        "tr": "özellik",
        "en": "feature"
      }
    },
    {
      "article": "die",
      "word": "Messe",
      "translation": {
        "tr": "Fuar",
        "en": "Fair"
      }
    },
    {
      "article": "die",
      "word": "Messung",
      "translation": {
        "tr": "Ölçüm",
        "en": "Measurement"
      }
    },
    {
      "article": "die",
      "word": "Methode",
      "translation": {
        "tr": "Yöntem",
        "en": "Method"
      }
    },
    {
      "article": "die",
      "word": "Miene",
      "translation": {
        "tr": "Mien",
        "en": "Mien"
      }
    },
    {
      "article": "das",
      "word": "Mikroskop",
      "translation": {
        "tr": "Mikroskop",
        "en": "Microscope"
      }
    },
    {
      "article": "das",
      "word": "Militär",
      "translation": {
        "tr": "askeri",
        "en": "military"
      }
    },
    {
      "article": "die",
      "word": "Milliarde",
      "translation": {
        "tr": "milyar",
        "en": "billion"
      }
    },
    {
      "article": "die",
      "word": "Million",
      "translation": {
        "tr": "milyon",
        "en": "million"
      }
    },
    {
      "article": "der",
      "word": "Mindestlohn",
      "translation": {
        "tr": "Asgari ücret",
        "en": "Minimum wage"
      }
    },
    {
      "article": "der",
      "word": "Minister",
      "translation": {
        "tr": "Bakan",
        "en": "Minister"
      }
    },
    {
      "article": "die",
      "word": "Mischung",
      "translation": {
        "tr": "Karışım",
        "en": "Mixture"
      }
    },
    {
      "article": "die",
      "word": "Mission",
      "translation": {
        "tr": "Misyon",
        "en": "Mission"
      }
    },
    {
      "article": "das",
      "word": "Mitglied",
      "translation": {
        "tr": "üye",
        "en": "member"
      }
    },
    {
      "article": "die",
      "word": "Möglichkeit",
      "translation": {
        "tr": "olasılık",
        "en": "possibility"
      }
    },
    {
      "article": "der",
      "word": "Monitor",
      "translation": {
        "tr": "monitör",
        "en": "monitor"
      }
    },
    {
      "article": "der",
      "word": "Mord",
      "translation": {
        "tr": "Cinayet",
        "en": "Murder"
      }
    },
    {
      "article": "der",
      "word": "Mörder",
      "translation": {
        "tr": "Katil",
        "en": "Murderer"
      }
    },
    {
      "article": "die",
      "word": "Moschee",
      "translation": {
        "tr": "Cami",
        "en": "Mosque"
      }
    },
    {
      "article": "das",
      "word": "Motiv",
      "translation": {
        "tr": "Motif",
        "en": "Motif"
      }
    },
    {
      "article": "das",
      "word": "Motto",
      "translation": {
        "tr": "slogan",
        "en": "motto"
      }
    },
    {
      "article": "die",
      "word": "Mühe",
      "translation": {
        "tr": "çaba",
        "en": "effort"
      }
    },
    {
      "article": "die",
      "word": "Mühle",
      "translation": {
        "tr": "değirmen",
        "en": "mill"
      }
    },
    {
      "article": "der",
      "word": "Müll",
      "translation": {
        "tr": "Çöp",
        "en": "Garbage"
      }
    },
    {
      "article": "die",
      "word": "Münze",
      "translation": {
        "tr": "Madeni para",
        "en": "Coin"
      }
    },
    {
      "article": "die",
      "word": "Muschel",
      "translation": {
        "tr": "Kabuk",
        "en": "Shell"
      }
    },
    {
      "article": "das",
      "word": "Musical",
      "translation": {
        "tr": "Müzikal",
        "en": "Musical"
      }
    },
    {
      "article": "die",
      "word": "Nachfrage",
      "translation": {
        "tr": "talep",
        "en": "demand"
      }
    },
    {
      "article": "die",
      "word": "Nation",
      "translation": {
        "tr": "ulus",
        "en": "nation"
      }
    },
    {
      "article": "das",
      "word": "Netz",
      "translation": {
        "tr": "ağ",
        "en": "Net"
      }
    },
    {
      "article": "der",
      "word": "Neubau",
      "translation": {
        "tr": "Yeni bina",
        "en": "New building"
      }
    },
    {
      "article": "der",
      "word": "Nichtraucher",
      "translation": {
        "tr": "Sigara içmeyen",
        "en": "Non-smoker"
      }
    },
    {
      "article": "die",
      "word": "Niederlage",
      "translation": {
        "tr": "Yenilgi",
        "en": "Defeat"
      }
    },
    {
      "article": "die",
      "word": "Nische",
      "translation": {
        "tr": "niş",
        "en": "niche"
      }
    },
    {
      "article": "die",
      "word": "Not",
      "translation": {
        "tr": "sıkıntı",
        "en": "distress"
      }
    },
    {
      "article": "der",
      "word": "Notfall",
      "translation": {
        "tr": "Acil Durum",
        "en": "Emergency"
      }
    },
    {
      "article": "der",
      "word": "Nutzer",
      "translation": {
        "tr": "Kullanıcı",
        "en": "User"
      }
    },
    {
      "article": "die",
      "word": "Oase",
      "translation": {
        "tr": "Vaha",
        "en": "Oasis"
      }
    },
    {
      "article": "die",
      "word": "Oberfläche",
      "translation": {
        "tr": "yüzey",
        "en": "surface"
      }
    },
    {
      "article": "der",
      "word": "Oberkörper",
      "translation": {
        "tr": "üst vücut",
        "en": "upper body"
      }
    },
    {
      "article": "der",
      "word": "Oberschenkel",
      "translation": {
        "tr": "Uyluk",
        "en": "Thigh"
      }
    },
    {
      "article": "der",
      "word": "Offizier",
      "translation": {
        "tr": "memur",
        "en": "officer"
      }
    },
    {
      "article": "die",
      "word": "Öffnung",
      "translation": {
        "tr": "Açılış",
        "en": "Opening"
      }
    },
    {
      "article": "die",
      "word": "Oper",
      "translation": {
        "tr": "Opera",
        "en": "Opera"
      }
    },
    {
      "article": "das",
      "word": "Opfer",
      "translation": {
        "tr": "Kurban",
        "en": "Victim"
      }
    },
    {
      "article": "das",
      "word": "Orchester",
      "translation": {
        "tr": "Orkestra",
        "en": "Orchestra"
      }
    },
    {
      "article": "das",
      "word": "Organ",
      "translation": {
        "tr": "org",
        "en": "organ"
      }
    },
    {
      "article": "die",
      "word": "Organisation",
      "translation": {
        "tr": "Organizasyon",
        "en": "Organization"
      }
    },
    {
      "article": "die",
      "word": "Orgel",
      "translation": {
        "tr": "org",
        "en": "organ"
      }
    },
    {
      "article": "die",
      "word": "Orientierung",
      "translation": {
        "tr": "Oryantasyon",
        "en": "Orientation"
      }
    },
    {
      "article": "das",
      "word": "Original",
      "translation": {
        "tr": "Orijinal",
        "en": "Original"
      }
    },
    {
      "article": "der",
      "word": "Palast",
      "translation": {
        "tr": "Saray",
        "en": "Palace"
      }
    },
    {
      "article": "die",
      "word": "Panik",
      "translation": {
        "tr": "Panik",
        "en": "Panic"
      }
    },
    {
      "article": "die",
      "word": "Panne",
      "translation": {
        "tr": "aksaklık",
        "en": "glitch"
      }
    },
    {
      "article": "der",
      "word": "Panther",
      "translation": {
        "tr": "Panterler",
        "en": "Panthers"
      }
    },
    {
      "article": "der",
      "word": "Panzer",
      "translation": {
        "tr": "Tankı",
        "en": "Tank"
      }
    },
    {
      "article": "der",
      "word": "Papagei",
      "translation": {
        "tr": "Papağan",
        "en": "Parrot"
      }
    },
    {
      "article": "die",
      "word": "Pappe",
      "translation": {
        "tr": "karton",
        "en": "cardboard"
      }
    },
    {
      "article": "das",
      "word": "Parlament",
      "translation": {
        "tr": "Parlamento",
        "en": "Parliament"
      }
    },
    {
      "article": "die",
      "word": "Partei",
      "translation": {
        "tr": "parti",
        "en": "party"
      }
    },
    {
      "article": "die",
      "word": "Pasta",
      "translation": {
        "tr": "Makarna",
        "en": "Pasta"
      }
    },
    {
      "article": "die",
      "word": "Pension",
      "translation": {
        "tr": "Emeklilik",
        "en": "Pension"
      }
    },
    {
      "article": "der",
      "word": "Pfarrer",
      "translation": {
        "tr": "papaz",
        "en": "Pastor"
      }
    },
    {
      "article": "die",
      "word": "Pflege",
      "translation": {
        "tr": "Bakım",
        "en": "Care"
      }
    },
    {
      "article": "der",
      "word": "Pfleger",
      "translation": {
        "tr": "Hemşire",
        "en": "Nurse"
      }
    },
    {
      "article": "die",
      "word": "Pflicht",
      "translation": {
        "tr": "Görev",
        "en": "Duty"
      }
    },
    {
      "article": "das",
      "word": "Pfund",
      "translation": {
        "tr": "pound",
        "en": "pounds"
      }
    },
    {
      "article": "der",
      "word": "Pilot",
      "translation": {
        "tr": "pilot",
        "en": "Pilot"
      }
    },
    {
      "article": "der",
      "word": "Pinguin",
      "translation": {
        "tr": "Penguen",
        "en": "Penguin"
      }
    },
    {
      "article": "der",
      "word": "Pinsel",
      "translation": {
        "tr": "Fırça",
        "en": "Brush"
      }
    },
    {
      "article": "die",
      "word": "Piste",
      "translation": {
        "tr": "eğim",
        "en": "slope"
      }
    },
    {
      "article": "die",
      "word": "Pleite",
      "translation": {
        "tr": "İflas",
        "en": "Bankruptcy"
      }
    },
    {
      "article": "das",
      "word": "Plus",
      "translation": {
        "tr": "Artı",
        "en": "Plus"
      }
    },
    {
      "article": "die",
      "word": "Politik",
      "translation": {
        "tr": "Politika",
        "en": "Politics"
      }
    },
    {
      "article": "das",
      "word": "Portal",
      "translation": {
        "tr": "Portal",
        "en": "Portal"
      }
    },
    {
      "article": "das",
      "word": "Porzellan",
      "translation": {
        "tr": "Porselen",
        "en": "Porcelain"
      }
    },
    {
      "article": "die",
      "word": "Post",
      "translation": {
        "tr": "Gönderi",
        "en": "Post"
      }
    },
    {
      "article": "die",
      "word": "Präsentation",
      "translation": {
        "tr": "Sunum",
        "en": "Presentation"
      }
    },
    {
      "article": "der",
      "word": "Priester",
      "translation": {
        "tr": "Rahip",
        "en": "Priest"
      }
    },
    {
      "article": "das",
      "word": "Prinzip",
      "translation": {
        "tr": "Prensip",
        "en": "Principle"
      }
    },
    {
      "article": "die",
      "word": "Probe",
      "translation": {
        "tr": "Örnek",
        "en": "Sample"
      }
    },
    {
      "article": "die",
      "word": "Produktion",
      "translation": {
        "tr": "Üretim",
        "en": "Production"
      }
    },
    {
      "article": "der",
      "word": "Profi",
      "translation": {
        "tr": "Profesyonel",
        "en": "Professional"
      }
    },
    {
      "article": "das",
      "word": "Profil",
      "translation": {
        "tr": "Profil",
        "en": "Profile"
      }
    },
    {
      "article": "der",
      "word": "Protest",
      "translation": {
        "tr": "protesto",
        "en": "protest"
      }
    },
    {
      "article": "das",
      "word": "Protokoll",
      "translation": {
        "tr": "Protokol",
        "en": "Protocol"
      }
    }
  ],
  "B2": [
    {
      "article": "die",
      "word": "Abbildung",
      "translation": {
        "tr": "İllüstrasyon",
        "en": "Illustration"
      }
    },
    {
      "article": "der",
      "word": "Abbruch",
      "translation": {
        "tr": "İptal et",
        "en": "Abort"
      }
    },
    {
      "article": "der",
      "word": "Abfluss",
      "translation": {
        "tr": "drenaj",
        "en": "drain"
      }
    },
    {
      "article": "die",
      "word": "Abfrage",
      "translation": {
        "tr": "sorgu",
        "en": "query"
      }
    },
    {
      "article": "der",
      "word": "Abgrund",
      "translation": {
        "tr": "Uçurum",
        "en": "Abyss"
      }
    },
    {
      "article": "das",
      "word": "Abkommen",
      "translation": {
        "tr": "Anlaşma",
        "en": "Agreement"
      }
    },
    {
      "article": "die",
      "word": "Ablage",
      "translation": {
        "tr": "dosyalama",
        "en": "filing"
      }
    },
    {
      "article": "der",
      "word": "Ablauf",
      "translation": {
        "tr": "Süreç",
        "en": "Process"
      }
    },
    {
      "article": "die",
      "word": "Abneigung",
      "translation": {
        "tr": "Beğenmedim",
        "en": "Dislike"
      }
    },
    {
      "article": "der",
      "word": "Absatz",
      "translation": {
        "tr": "paragraf",
        "en": "paragraph"
      }
    },
    {
      "article": "der",
      "word": "Abstieg",
      "translation": {
        "tr": "İniş",
        "en": "Descent"
      }
    },
    {
      "article": "der",
      "word": "Absturz",
      "translation": {
        "tr": "Kaza",
        "en": "Crash"
      }
    },
    {
      "article": "die",
      "word": "Abtreibung",
      "translation": {
        "tr": "Kürtaj",
        "en": "Abortion"
      }
    },
    {
      "article": "die",
      "word": "Abwehr",
      "translation": {
        "tr": "Savunma",
        "en": "Defense"
      }
    },
    {
      "article": "die",
      "word": "Acht",
      "translation": {
        "tr": "sekiz",
        "en": "Eight"
      }
    },
    {
      "article": "die",
      "word": "Addition",
      "translation": {
        "tr": "ekleme",
        "en": "addition"
      }
    },
    {
      "article": "der",
      "word": "Administrator",
      "translation": {
        "tr": "Yönetici",
        "en": "Admin"
      }
    },
    {
      "article": "die",
      "word": "Adoption",
      "translation": {
        "tr": "Evlat edinme",
        "en": "Adoption"
      }
    },
    {
      "article": "die",
      "word": "Affäre",
      "translation": {
        "tr": "ilişki",
        "en": "affair"
      }
    },
    {
      "article": "die",
      "word": "Akademie",
      "translation": {
        "tr": "Akademi",
        "en": "Academy"
      }
    },
    {
      "article": "der",
      "word": "Akt",
      "translation": {
        "tr": "eylem",
        "en": "act"
      }
    },
    {
      "article": "die",
      "word": "Akte",
      "translation": {
        "tr": "dosya",
        "en": "file"
      }
    },
    {
      "article": "der",
      "word": "Akteur",
      "translation": {
        "tr": "aktör",
        "en": "actor"
      }
    },
    {
      "article": "die",
      "word": "Aktie",
      "translation": {
        "tr": "Paylaş",
        "en": "Share"
      }
    },
    {
      "article": "die",
      "word": "Aktion",
      "translation": {
        "tr": "Eylem",
        "en": "Action"
      }
    },
    {
      "article": "der",
      "word": "Aktionär",
      "translation": {
        "tr": "hissedar",
        "en": "shareholder"
      }
    },
    {
      "article": "die",
      "word": "Aktivität",
      "translation": {
        "tr": "Etkinlik",
        "en": "Activity"
      }
    },
    {
      "article": "der",
      "word": "Akzent",
      "translation": {
        "tr": "Aksan",
        "en": "Accent"
      }
    },
    {
      "article": "die",
      "word": "Akzeptanz",
      "translation": {
        "tr": "Kabul",
        "en": "Acceptance"
      }
    },
    {
      "article": "der",
      "word": "Algorithmus",
      "translation": {
        "tr": "Algoritma",
        "en": "Algorithm"
      }
    },
    {
      "article": "das",
      "word": "All",
      "translation": {
        "tr": "Hepsi",
        "en": "All"
      }
    },
    {
      "article": "die",
      "word": "Allianz",
      "translation": {
        "tr": "İttifak",
        "en": "Alliance"
      }
    },
    {
      "article": "das",
      "word": "Alpha",
      "translation": {
        "tr": "Alfa",
        "en": "Alpha"
      }
    },
    {
      "article": "das",
      "word": "Aluminium",
      "translation": {
        "tr": "Alüminyum",
        "en": "Aluminum"
      }
    },
    {
      "article": "der",
      "word": "Alzheimer",
      "translation": {
        "tr": "Alzheimer",
        "en": "Alzheimer's"
      }
    },
    {
      "article": "die",
      "word": "Amtszeit",
      "translation": {
        "tr": "Dönem",
        "en": "Term"
      }
    },
    {
      "article": "die",
      "word": "Analyse",
      "translation": {
        "tr": "Analiz",
        "en": "Analysis"
      }
    },
    {
      "article": "der",
      "word": "Analyst",
      "translation": {
        "tr": "Analist",
        "en": "Analyst"
      }
    },
    {
      "article": "die",
      "word": "Anatomie",
      "translation": {
        "tr": "Anatomi",
        "en": "Anatomy"
      }
    },
    {
      "article": "die",
      "word": "Änderung",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      }
    },
    {
      "article": "der",
      "word": "Andrang",
      "translation": {
        "tr": "acele",
        "en": "Rush"
      }
    },
    {
      "article": "die",
      "word": "Anforderung",
      "translation": {
        "tr": "gereksinim",
        "en": "requirement"
      }
    },
    {
      "article": "die",
      "word": "Angabe",
      "translation": {
        "tr": "Bilgi",
        "en": "Information"
      }
    },
    {
      "article": "der",
      "word": "Angehörige",
      "translation": {
        "tr": "akrabalar",
        "en": "relatives"
      }
    },
    {
      "article": "der",
      "word": "Angeklagte",
      "translation": {
        "tr": "Davalı",
        "en": "Defendant"
      }
    },
    {
      "article": "der",
      "word": "Angreifer",
      "translation": {
        "tr": "saldırgan",
        "en": "attacker"
      }
    },
    {
      "article": "der",
      "word": "Anhang",
      "translation": {
        "tr": "Ek",
        "en": "Appendix"
      }
    },
    {
      "article": "der",
      "word": "Anhänger",
      "translation": {
        "tr": "römork",
        "en": "trailer"
      }
    },
    {
      "article": "die",
      "word": "Animation",
      "translation": {
        "tr": "animasyon",
        "en": "animation"
      }
    },
    {
      "article": "die",
      "word": "Anklage",
      "translation": {
        "tr": "suçlama",
        "en": "Accusation"
      }
    },
    {
      "article": "der",
      "word": "Anlass",
      "translation": {
        "tr": "fırsat",
        "en": "occasion"
      }
    },
    {
      "article": "der",
      "word": "Anlauf",
      "translation": {
        "tr": "Başlangıç",
        "en": "Start-up"
      }
    },
    {
      "article": "der",
      "word": "Anleger",
      "translation": {
        "tr": "yatırımcı",
        "en": "investor"
      }
    },
    {
      "article": "die",
      "word": "Anleihe",
      "translation": {
        "tr": "Tahvil",
        "en": "Bond"
      }
    },
    {
      "article": "das",
      "word": "Anliegen",
      "translation": {
        "tr": "endişeler",
        "en": "concerns"
      }
    },
    {
      "article": "die",
      "word": "Anmerkung",
      "translation": {
        "tr": "Not",
        "en": "Note"
      }
    },
    {
      "article": "die",
      "word": "Annahme",
      "translation": {
        "tr": "Kabul",
        "en": "Acceptance"
      }
    },
    {
      "article": "die",
      "word": "Anrede",
      "translation": {
        "tr": "selamlama",
        "en": "Salutation"
      }
    },
    {
      "article": "die",
      "word": "Anregung",
      "translation": {
        "tr": "Öneri",
        "en": "Suggestion"
      }
    },
    {
      "article": "der",
      "word": "Anreiz",
      "translation": {
        "tr": "teşvik",
        "en": "incentive"
      }
    },
    {
      "article": "der",
      "word": "Ansatz",
      "translation": {
        "tr": "yaklaşma",
        "en": "approach"
      }
    },
    {
      "article": "der",
      "word": "Anschlag",
      "translation": {
        "tr": "dur",
        "en": "stop"
      }
    },
    {
      "article": "die",
      "word": "Ansicht",
      "translation": {
        "tr": "Görüntüle",
        "en": "View"
      }
    },
    {
      "article": "der",
      "word": "Ansprechpartner",
      "translation": {
        "tr": "İrtibat kişisi",
        "en": "Contact person"
      }
    },
    {
      "article": "der",
      "word": "Anspruch",
      "translation": {
        "tr": "iddia",
        "en": "claim"
      }
    },
    {
      "article": "der",
      "word": "Anstand",
      "translation": {
        "tr": "Terbiye",
        "en": "Decency"
      }
    },
    {
      "article": "die",
      "word": "Anstellung",
      "translation": {
        "tr": "İstihdam",
        "en": "Employment"
      }
    },
    {
      "article": "der",
      "word": "Ansturm",
      "translation": {
        "tr": "acele",
        "en": "Rush"
      }
    },
    {
      "article": "der",
      "word": "Anteil",
      "translation": {
        "tr": "paylaş",
        "en": "share"
      }
    },
    {
      "article": "die",
      "word": "Antike",
      "translation": {
        "tr": "Antik Çağ",
        "en": "Antiquity"
      }
    },
    {
      "article": "der",
      "word": "Antrieb",
      "translation": {
        "tr": "Sürüş",
        "en": "Drive"
      }
    },
    {
      "article": "die",
      "word": "Anweisung",
      "translation": {
        "tr": "Talimat",
        "en": "Instruction"
      }
    },
    {
      "article": "die",
      "word": "Anwendung",
      "translation": {
        "tr": "Başvuru",
        "en": "Application"
      }
    },
    {
      "article": "das",
      "word": "Anwesen",
      "translation": {
        "tr": "Emlak",
        "en": "Estate"
      }
    },
    {
      "article": "der",
      "word": "Anwohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      }
    },
    {
      "article": "der",
      "word": "Appell",
      "translation": {
        "tr": "İtiraz",
        "en": "Appeal"
      }
    },
    {
      "article": "die",
      "word": "Ära",
      "translation": {
        "tr": "çağ",
        "en": "era"
      }
    },
    {
      "article": "die",
      "word": "Arbeitskraft",
      "translation": {
        "tr": "İşgücü",
        "en": "Workforce"
      }
    },
    {
      "article": "die",
      "word": "Arbeitslosigkeit",
      "translation": {
        "tr": "İşsizlik",
        "en": "Unemployment"
      }
    },
    {
      "article": "der",
      "word": "Arbeitsmarkt",
      "translation": {
        "tr": "İşgücü piyasası",
        "en": "Labor market"
      }
    },
    {
      "article": "der",
      "word": "Architekt",
      "translation": {
        "tr": "Mimar",
        "en": "Architect"
      }
    },
    {
      "article": "die",
      "word": "Architektur",
      "translation": {
        "tr": "Mimarlık",
        "en": "Architecture"
      }
    },
    {
      "article": "das",
      "word": "Archiv",
      "translation": {
        "tr": "Arşiv",
        "en": "Archive"
      }
    },
    {
      "article": "das",
      "word": "Areal",
      "translation": {
        "tr": "alan",
        "en": "area"
      }
    },
    {
      "article": "die",
      "word": "Arena",
      "translation": {
        "tr": "Arena",
        "en": "Arena"
      }
    },
    {
      "article": "der",
      "word": "Ärger",
      "translation": {
        "tr": "Sorun",
        "en": "Trouble"
      }
    },
    {
      "article": "das",
      "word": "Argument",
      "translation": {
        "tr": "Tartışma",
        "en": "Argument"
      }
    },
    {
      "article": "die",
      "word": "Arroganz",
      "translation": {
        "tr": "Kibir",
        "en": "Arrogance"
      }
    },
    {
      "article": "der",
      "word": "Aspekt",
      "translation": {
        "tr": "yön",
        "en": "aspect"
      }
    },
    {
      "article": "der",
      "word": "Asphalt",
      "translation": {
        "tr": "Asfalt",
        "en": "Asphalt"
      }
    },
    {
      "article": "der",
      "word": "Asteroid",
      "translation": {
        "tr": "asteroit",
        "en": "asteroid"
      }
    },
    {
      "article": "das",
      "word": "Asyl",
      "translation": {
        "tr": "İltica",
        "en": "Asylum"
      }
    },
    {
      "article": "das",
      "word": "Atelier",
      "translation": {
        "tr": "stüdyo",
        "en": "Studio"
      }
    },
    {
      "article": "der",
      "word": "Atemzug",
      "translation": {
        "tr": "nefes",
        "en": "breath"
      }
    },
    {
      "article": "die",
      "word": "Atmosphäre",
      "translation": {
        "tr": "Atmosfer",
        "en": "Atmosphere"
      }
    },
    {
      "article": "die",
      "word": "Atmung",
      "translation": {
        "tr": "Nefes alma",
        "en": "Breathing"
      }
    },
    {
      "article": "die",
      "word": "Attacke",
      "translation": {
        "tr": "Saldırı",
        "en": "Attack"
      }
    },
    {
      "article": "das",
      "word": "Attentat",
      "translation": {
        "tr": "suikast girişimi",
        "en": "assassination attempt"
      }
    },
    {
      "article": "die",
      "word": "Attraktion",
      "translation": {
        "tr": "cazibe",
        "en": "attraction"
      }
    },
    {
      "article": "das",
      "word": "Attribut",
      "translation": {
        "tr": "Özellik",
        "en": "Attribute"
      }
    },
    {
      "article": "der",
      "word": "Aufbruch",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      }
    },
    {
      "article": "die",
      "word": "Auffassung",
      "translation": {
        "tr": "görüş",
        "en": "opinion"
      }
    },
    {
      "article": "die",
      "word": "Aufführung",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      }
    },
    {
      "article": "der",
      "word": "Aufgang",
      "translation": {
        "tr": "Yüksel",
        "en": "Rise"
      }
    },
    {
      "article": "die",
      "word": "Aufklärung",
      "translation": {
        "tr": "Aydınlanma",
        "en": "Enlightenment"
      }
    },
    {
      "article": "die",
      "word": "Auflösung",
      "translation": {
        "tr": "Çözünürlük",
        "en": "Resolution"
      }
    },
    {
      "article": "das",
      "word": "Aufsehen",
      "translation": {
        "tr": "dikkat",
        "en": "attention"
      }
    },
    {
      "article": "der",
      "word": "Aufstand",
      "translation": {
        "tr": "Ayaklanma",
        "en": "Uprising"
      }
    },
    {
      "article": "der",
      "word": "Auftrag",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      }
    },
    {
      "article": "das",
      "word": "Auftreten",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      }
    },
    {
      "article": "der",
      "word": "Auftritt",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      }
    },
    {
      "article": "der",
      "word": "Aufwand",
      "translation": {
        "tr": "Çaba",
        "en": "Effort"
      }
    },
    {
      "article": "der",
      "word": "Aufzug",
      "translation": {
        "tr": "Asansör",
        "en": "Elevator"
      }
    },
    {
      "article": "die",
      "word": "Auktion",
      "translation": {
        "tr": "Açık artırma",
        "en": "Auction"
      }
    },
    {
      "article": "die",
      "word": "Aula",
      "translation": {
        "tr": "Oditoryum",
        "en": "Auditorium"
      }
    },
    {
      "article": "der",
      "word": "Ausbau",
      "translation": {
        "tr": "Genişleme",
        "en": "Expansion"
      }
    },
    {
      "article": "die",
      "word": "Ausbeutung",
      "translation": {
        "tr": "Sömürü",
        "en": "Exploitation"
      }
    },
    {
      "article": "der",
      "word": "Ausblick",
      "translation": {
        "tr": "Görünüm",
        "en": "Outlook"
      }
    },
    {
      "article": "der",
      "word": "Ausbruch",
      "translation": {
        "tr": "salgın",
        "en": "outbreak"
      }
    },
    {
      "article": "die",
      "word": "Ausfahrt",
      "translation": {
        "tr": "Çıkış",
        "en": "Exit"
      }
    },
    {
      "article": "der",
      "word": "Ausfall",
      "translation": {
        "tr": "başarısızlık",
        "en": "failure"
      }
    },
    {
      "article": "die",
      "word": "Ausfuhr",
      "translation": {
        "tr": "İhracat",
        "en": "Export"
      }
    },
    {
      "article": "die",
      "word": "Ausführung",
      "translation": {
        "tr": "Yürütme",
        "en": "Execution"
      }
    },
    {
      "article": "der",
      "word": "Ausgangspunkt",
      "translation": {
        "tr": "Başlangıç noktası",
        "en": "Starting point"
      }
    },
    {
      "article": "der",
      "word": "Auslöser",
      "translation": {
        "tr": "Tetikleyici",
        "en": "Trigger"
      }
    },
    {
      "article": "das",
      "word": "Ausmaß",
      "translation": {
        "tr": "Kapsam",
        "en": "Extent"
      }
    },
    {
      "article": "die",
      "word": "Ausrichtung",
      "translation": {
        "tr": "Hizalama",
        "en": "Alignment"
      }
    },
    {
      "article": "die",
      "word": "Ausrüstung",
      "translation": {
        "tr": "Ekipman",
        "en": "Equipment"
      }
    },
    {
      "article": "der",
      "word": "Ausschluss",
      "translation": {
        "tr": "Hariç Tutma",
        "en": "Exclusion"
      }
    },
    {
      "article": "der",
      "word": "Ausschnitt",
      "translation": {
        "tr": "Detay",
        "en": "Detail"
      }
    },
    {
      "article": "der",
      "word": "Ausschuss",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      }
    },
    {
      "article": "der",
      "word": "Außenminister",
      "translation": {
        "tr": "Dışişleri Bakanı",
        "en": "Foreign Minister"
      }
    },
    {
      "article": "die",
      "word": "Außenseite",
      "translation": {
        "tr": "Dışarıda",
        "en": "Outside"
      }
    },
    {
      "article": "der",
      "word": "Außenseiter",
      "translation": {
        "tr": "yabancı",
        "en": "outsider"
      }
    },
    {
      "article": "die",
      "word": "Äußerung",
      "translation": {
        "tr": "ifade",
        "en": "utterance"
      }
    },
    {
      "article": "die",
      "word": "Ausstattung",
      "translation": {
        "tr": "Ekipman",
        "en": "Equipment"
      }
    },
    {
      "article": "der",
      "word": "Ausstoß",
      "translation": {
        "tr": "Emisyon",
        "en": "Emission"
      }
    },
    {
      "article": "der",
      "word": "Austausch",
      "translation": {
        "tr": "Değişim",
        "en": "Exchange"
      }
    },
    {
      "article": "der",
      "word": "Ausweg",
      "translation": {
        "tr": "çıkış yolu",
        "en": "way out"
      }
    },
    {
      "article": "die",
      "word": "Auswertung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Evaluation"
      }
    },
    {
      "article": "die",
      "word": "Auswirkung",
      "translation": {
        "tr": "Etki",
        "en": "Impact"
      }
    },
    {
      "article": "die",
      "word": "Auszeichnung",
      "translation": {
        "tr": "Ödül",
        "en": "Award"
      }
    },
    {
      "article": "die",
      "word": "Auszeit",
      "translation": {
        "tr": "Zaman aşımı",
        "en": "Time out"
      }
    },
    {
      "article": "der",
      "word": "Auszug",
      "translation": {
        "tr": "Alıntı",
        "en": "Excerpt"
      }
    },
    {
      "article": "der",
      "word": "Autobauer",
      "translation": {
        "tr": "Araba üreticisi",
        "en": "Car manufacturer"
      }
    },
    {
      "article": "die",
      "word": "Autorität",
      "translation": {
        "tr": "Yetki",
        "en": "Authority"
      }
    },
    {
      "article": "die",
      "word": "Balance",
      "translation": {
        "tr": "Bakiye",
        "en": "Balance"
      }
    },
    {
      "article": "das",
      "word": "Ballett",
      "translation": {
        "tr": "Bale",
        "en": "Ballet"
      }
    },
    {
      "article": "der",
      "word": "Bambus",
      "translation": {
        "tr": "Bambu",
        "en": "Bamboo"
      }
    },
    {
      "article": "der",
      "word": "Band",
      "translation": {
        "tr": "Bant",
        "en": "Band"
      }
    },
    {
      "article": "die",
      "word": "Bande",
      "translation": {
        "tr": "çete",
        "en": "gang"
      }
    },
    {
      "article": "das",
      "word": "Banner",
      "translation": {
        "tr": "Afişler",
        "en": "Banners"
      }
    },
    {
      "article": "die",
      "word": "Barriere",
      "translation": {
        "tr": "bariyer",
        "en": "barrier"
      }
    },
    {
      "article": "die",
      "word": "Basis",
      "translation": {
        "tr": "baz",
        "en": "base"
      }
    },
    {
      "article": "der",
      "word": "Bass",
      "translation": {
        "tr": "bas",
        "en": "bass"
      }
    },
    {
      "article": "das",
      "word": "Bauwerk",
      "translation": {
        "tr": "Bina",
        "en": "Building"
      }
    },
    {
      "article": "die",
      "word": "Beachtung",
      "translation": {
        "tr": "Dikkat",
        "en": "Attention"
      }
    },
    {
      "article": "die",
      "word": "Bearbeitung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Editing"
      }
    },
    {
      "article": "der",
      "word": "Beat",
      "translation": {
        "tr": "Vuruş",
        "en": "Beat"
      }
    },
    {
      "article": "das",
      "word": "Becken",
      "translation": {
        "tr": "havza",
        "en": "basin"
      }
    },
    {
      "article": "der",
      "word": "Bedarf",
      "translation": {
        "tr": "İhtiyaç",
        "en": "Need"
      }
    },
    {
      "article": "das",
      "word": "Bedauern",
      "translation": {
        "tr": "pişmanlık",
        "en": "Regret"
      }
    },
    {
      "article": "die",
      "word": "Bedrohung",
      "translation": {
        "tr": "Tehdit",
        "en": "Threat"
      }
    },
    {
      "article": "die",
      "word": "Befragung",
      "translation": {
        "tr": "Anket",
        "en": "Survey"
      }
    },
    {
      "article": "die",
      "word": "Befreiung",
      "translation": {
        "tr": "Kurtuluş",
        "en": "Liberation"
      }
    },
    {
      "article": "der",
      "word": "Befund",
      "translation": {
        "tr": "Bulgular",
        "en": "Findings"
      }
    },
    {
      "article": "die",
      "word": "Begabung",
      "translation": {
        "tr": "Yetenek",
        "en": "Talent"
      }
    },
    {
      "article": "die",
      "word": "Begegnung",
      "translation": {
        "tr": "karşılaşma",
        "en": "encounter"
      }
    },
    {
      "article": "die",
      "word": "Begeisterung",
      "translation": {
        "tr": "Coşku",
        "en": "Enthusiasm"
      }
    },
    {
      "article": "die",
      "word": "Begründung",
      "translation": {
        "tr": "Gerekçe",
        "en": "Justification"
      }
    },
    {
      "article": "der",
      "word": "Beirat",
      "translation": {
        "tr": "Danışma Kurulu",
        "en": "Advisory Board"
      }
    },
    {
      "article": "der",
      "word": "Bekannte",
      "translation": {
        "tr": "tanıdıklar",
        "en": "acquaintances"
      }
    },
    {
      "article": "die",
      "word": "Bekanntmachung",
      "translation": {
        "tr": "Uyarı",
        "en": "Notice"
      }
    },
    {
      "article": "die",
      "word": "Belästigung",
      "translation": {
        "tr": "Taciz",
        "en": "Harassment"
      }
    },
    {
      "article": "die",
      "word": "Belastung",
      "translation": {
        "tr": "yük",
        "en": "burden"
      }
    },
    {
      "article": "der",
      "word": "Beleg",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      }
    },
    {
      "article": "die",
      "word": "Beobachtung",
      "translation": {
        "tr": "Gözlem",
        "en": "Observation"
      }
    },
    {
      "article": "die",
      "word": "Berechnung",
      "translation": {
        "tr": "Hesaplama",
        "en": "Calculation"
      }
    },
    {
      "article": "die",
      "word": "Bereitschaft",
      "translation": {
        "tr": "Hazırlık",
        "en": "Readiness"
      }
    },
    {
      "article": "der",
      "word": "Bergmann",
      "translation": {
        "tr": "madenci",
        "en": "Miner"
      }
    },
    {
      "article": "die",
      "word": "Berufung",
      "translation": {
        "tr": "Arama",
        "en": "Calling"
      }
    },
    {
      "article": "die",
      "word": "Berühmtheit",
      "translation": {
        "tr": "şöhret",
        "en": "celebrity"
      }
    },
    {
      "article": "die",
      "word": "Berührung",
      "translation": {
        "tr": "Dokunma",
        "en": "Touch"
      }
    },
    {
      "article": "die",
      "word": "Besatzung",
      "translation": {
        "tr": "mürettebat",
        "en": "crew"
      }
    },
    {
      "article": "der",
      "word": "Bescheid",
      "translation": {
        "tr": "ihbar",
        "en": "notice"
      }
    },
    {
      "article": "der",
      "word": "Beschluss",
      "translation": {
        "tr": "Karar",
        "en": "Decision"
      }
    },
    {
      "article": "die",
      "word": "Beschränkung",
      "translation": {
        "tr": "Sınırlama",
        "en": "Limitation"
      }
    },
    {
      "article": "die",
      "word": "Beschreibung",
      "translation": {
        "tr": "Açıklama",
        "en": "Description"
      }
    },
    {
      "article": "der",
      "word": "Beschützer",
      "translation": {
        "tr": "Koruyucu",
        "en": "Protector"
      }
    },
    {
      "article": "die",
      "word": "Beschwerde",
      "translation": {
        "tr": "Şikayet",
        "en": "Complaint"
      }
    },
    {
      "article": "die",
      "word": "Besetzung",
      "translation": {
        "tr": "Oyuncular",
        "en": "Cast"
      }
    },
    {
      "article": "die",
      "word": "Besonderheit",
      "translation": {
        "tr": "Özel özellik",
        "en": "Special feature"
      }
    },
    {
      "article": "der",
      "word": "Bestand",
      "translation": {
        "tr": "envanter",
        "en": "inventory"
      }
    },
    {
      "article": "der",
      "word": "Bestandteil",
      "translation": {
        "tr": "bileşen",
        "en": "component"
      }
    },
    {
      "article": "die",
      "word": "Bestätigung",
      "translation": {
        "tr": "Onay",
        "en": "Confirmation"
      }
    },
    {
      "article": "der",
      "word": "Beste",
      "translation": {
        "tr": "En iyi",
        "en": "Best"
      }
    },
    {
      "article": "die",
      "word": "Bestimmung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      }
    },
    {
      "article": "die",
      "word": "Bestrafung",
      "translation": {
        "tr": "ceza",
        "en": "Punishment"
      }
    },
    {
      "article": "der",
      "word": "Bestseller",
      "translation": {
        "tr": "En çok satanlar",
        "en": "Bestseller"
      }
    },
    {
      "article": "die",
      "word": "Beteiligung",
      "translation": {
        "tr": "Katılım",
        "en": "Participation"
      }
    },
    {
      "article": "der",
      "word": "Betrachter",
      "translation": {
        "tr": "izleyici",
        "en": "viewer"
      }
    },
    {
      "article": "die",
      "word": "Betrachtung",
      "translation": {
        "tr": "tefekkür",
        "en": "contemplation"
      }
    },
    {
      "article": "der",
      "word": "Betrag",
      "translation": {
        "tr": "miktar",
        "en": "amount"
      }
    },
    {
      "article": "der",
      "word": "Betreff",
      "translation": {
        "tr": "Konu",
        "en": "Subject"
      }
    },
    {
      "article": "der",
      "word": "Betreiber",
      "translation": {
        "tr": "Operatör",
        "en": "Operator"
      }
    },
    {
      "article": "die",
      "word": "Betreuung",
      "translation": {
        "tr": "Bakım",
        "en": "Care"
      }
    },
    {
      "article": "der",
      "word": "Betrieb",
      "translation": {
        "tr": "Operasyon",
        "en": "Operation"
      }
    },
    {
      "article": "das",
      "word": "Betriebssystem",
      "translation": {
        "tr": "İşletim sistemi",
        "en": "Operating system"
      }
    },
    {
      "article": "der",
      "word": "Betrug",
      "translation": {
        "tr": "Dolandırıcılık",
        "en": "Fraud"
      }
    },
    {
      "article": "der",
      "word": "Betrüger",
      "translation": {
        "tr": "Dolandırıcılar",
        "en": "Fraudsters"
      }
    },
    {
      "article": "die",
      "word": "Beurteilung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Assessment"
      }
    },
    {
      "article": "die",
      "word": "Beute",
      "translation": {
        "tr": "av",
        "en": "prey"
      }
    },
    {
      "article": "die",
      "word": "Bevölkerung",
      "translation": {
        "tr": "nüfus",
        "en": "population"
      }
    },
    {
      "article": "die",
      "word": "Bewegung",
      "translation": {
        "tr": "hareket",
        "en": "movement"
      }
    },
    {
      "article": "der",
      "word": "Beweis",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      }
    },
    {
      "article": "der",
      "word": "Bewerber",
      "translation": {
        "tr": "Başvuru sahibi",
        "en": "Applicant"
      }
    },
    {
      "article": "die",
      "word": "Bewertung",
      "translation": {
        "tr": "Derecelendirme",
        "en": "Rating"
      }
    },
    {
      "article": "der",
      "word": "Bewohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      }
    },
    {
      "article": "das",
      "word": "Bewusstsein",
      "translation": {
        "tr": "Bilinç",
        "en": "Consciousness"
      }
    },
    {
      "article": "die",
      "word": "Bezeichnung",
      "translation": {
        "tr": "Tanım",
        "en": "Designation"
      }
    },
    {
      "article": "die",
      "word": "Beziehung",
      "translation": {
        "tr": "ilişki",
        "en": "relationship"
      }
    },
    {
      "article": "der",
      "word": "Bezirk",
      "translation": {
        "tr": "bölge",
        "en": "district"
      }
    },
    {
      "article": "der",
      "word": "Bezug",
      "translation": {
        "tr": "referans",
        "en": "reference"
      }
    },
    {
      "article": "die",
      "word": "Bilanz",
      "translation": {
        "tr": "Bilanço",
        "en": "Balance sheet"
      }
    },
    {
      "article": "der",
      "word": "Bildband",
      "translation": {
        "tr": "Resimli kitap",
        "en": "Illustrated book"
      }
    },
    {
      "article": "der",
      "word": "Bildhauer",
      "translation": {
        "tr": "heykeltıraş",
        "en": "sculptor"
      }
    },
    {
      "article": "die",
      "word": "Bindung",
      "translation": {
        "tr": "bağlayıcı",
        "en": "Binding"
      }
    },
    {
      "article": "die",
      "word": "Biografie",
      "translation": {
        "tr": "Biyografi",
        "en": "Biography"
      }
    },
    {
      "article": "das",
      "word": "Blei",
      "translation": {
        "tr": "Kurşun",
        "en": "Lead"
      }
    },
    {
      "article": "die",
      "word": "Blockade",
      "translation": {
        "tr": "Abluka",
        "en": "Blockade"
      }
    },
    {
      "article": "der",
      "word": "Blutdruck",
      "translation": {
        "tr": "Kan basıncı",
        "en": "Blood pressure"
      }
    },
    {
      "article": "die",
      "word": "Blüte",
      "translation": {
        "tr": "çiçek",
        "en": "blossom"
      }
    },
    {
      "article": "der",
      "word": "Bord",
      "translation": {
        "tr": "tahta",
        "en": "board"
      }
    },
    {
      "article": "der",
      "word": "Botschafter",
      "translation": {
        "tr": "Büyükelçi",
        "en": "Ambassador"
      }
    },
    {
      "article": "der",
      "word": "Brauch",
      "translation": {
        "tr": "özel",
        "en": "custom"
      }
    },
    {
      "article": "die",
      "word": "Bronze",
      "translation": {
        "tr": "Bronz",
        "en": "Bronze"
      }
    },
    {
      "article": "der",
      "word": "Browser",
      "translation": {
        "tr": "Tarayıcı",
        "en": "Browser"
      }
    },
    {
      "article": "der",
      "word": "Bruch",
      "translation": {
        "tr": "kırık",
        "en": "fracture"
      }
    },
    {
      "article": "der",
      "word": "Brunnen",
      "translation": {
        "tr": "Çeşme",
        "en": "Fountain"
      }
    },
    {
      "article": "der",
      "word": "Buchhändler",
      "translation": {
        "tr": "Kitapçı",
        "en": "Bookseller"
      }
    },
    {
      "article": "die",
      "word": "Bucht",
      "translation": {
        "tr": "Körfez",
        "en": "Bay"
      }
    },
    {
      "article": "die",
      "word": "Buchung",
      "translation": {
        "tr": "Rezervasyon",
        "en": "Booking"
      }
    },
    {
      "article": "der",
      "word": "Buddhismus",
      "translation": {
        "tr": "Budizm",
        "en": "Buddhism"
      }
    },
    {
      "article": "das",
      "word": "Budget",
      "translation": {
        "tr": "Bütçe",
        "en": "Budget"
      }
    },
    {
      "article": "der",
      "word": "Bund",
      "translation": {
        "tr": "Federal",
        "en": "Federal"
      }
    },
    {
      "article": "das",
      "word": "Bündel",
      "translation": {
        "tr": "paket",
        "en": "bundle"
      }
    },
    {
      "article": "das",
      "word": "Bundesamt",
      "translation": {
        "tr": "Federal Ofis",
        "en": "Federal Office"
      }
    },
    {
      "article": "der",
      "word": "Bundeskanzler",
      "translation": {
        "tr": "Şansölye",
        "en": "Chancellor"
      }
    },
    {
      "article": "das",
      "word": "Bundesland",
      "translation": {
        "tr": "Eyalet",
        "en": "State"
      }
    },
    {
      "article": "die",
      "word": "Bundesliga",
      "translation": {
        "tr": "Bundesliga",
        "en": "Bundesliga"
      }
    },
    {
      "article": "der",
      "word": "Bundespräsident",
      "translation": {
        "tr": "Federal Başkan",
        "en": "Federal President"
      }
    },
    {
      "article": "der",
      "word": "Bundesrat",
      "translation": {
        "tr": "Federal Konsey",
        "en": "Federal Council"
      }
    },
    {
      "article": "die",
      "word": "Bundesregierung",
      "translation": {
        "tr": "Federal Hükümet",
        "en": "Federal Government"
      }
    },
    {
      "article": "die",
      "word": "Bundesrepublik",
      "translation": {
        "tr": "Federal Cumhuriyet",
        "en": "Federal Republic"
      }
    },
    {
      "article": "der",
      "word": "Bundesstaat",
      "translation": {
        "tr": "Eyalet",
        "en": "State"
      }
    },
    {
      "article": "der",
      "word": "Bundestag",
      "translation": {
        "tr": "Federal Meclis",
        "en": "Bundestag"
      }
    },
    {
      "article": "die",
      "word": "Bundeswehr",
      "translation": {
        "tr": "Bundeswehr",
        "en": "Bundeswehr"
      }
    },
    {
      "article": "das",
      "word": "Bündnis",
      "translation": {
        "tr": "İttifak",
        "en": "Alliance"
      }
    },
    {
      "article": "der",
      "word": "Bürgerkrieg",
      "translation": {
        "tr": "İç Savaş",
        "en": "Civil War"
      }
    },
    {
      "article": "die",
      "word": "Bürokratie",
      "translation": {
        "tr": "Bürokrasi",
        "en": "Bureaucracy"
      }
    },
    {
      "article": "das",
      "word": "Business",
      "translation": {
        "tr": "iş",
        "en": "Business"
      }
    },
    {
      "article": "der",
      "word": "Campus",
      "translation": {
        "tr": "Kampüs",
        "en": "Campus"
      }
    },
    {
      "article": "das",
      "word": "Celsius",
      "translation": {
        "tr": "santigrat",
        "en": "Celsius"
      }
    },
    {
      "article": "der",
      "word": "Center",
      "translation": {
        "tr": "Merkez",
        "en": "Center"
      }
    },
    {
      "article": "der",
      "word": "Champagner",
      "translation": {
        "tr": "Şampanya",
        "en": "Champagne"
      }
    },
    {
      "article": "das",
      "word": "Chaos",
      "translation": {
        "tr": "Kargaşa",
        "en": "Mayhem"
      }
    },
    {
      "article": "der",
      "word": "Charakter",
      "translation": {
        "tr": "Karakter",
        "en": "Character"
      }
    },
    {
      "article": "der",
      "word": "Charme",
      "translation": {
        "tr": "Cazibe",
        "en": "Charm"
      }
    },
    {
      "article": "der",
      "word": "Chat",
      "translation": {
        "tr": "Sohbet",
        "en": "Chat"
      }
    },
    {
      "article": "die",
      "word": "Chemie",
      "translation": {
        "tr": "Kimya",
        "en": "Chemistry"
      }
    },
    {
      "article": "die",
      "word": "Chemikalie",
      "translation": {
        "tr": "kimyasal",
        "en": "chemical"
      }
    },
    {
      "article": "der",
      "word": "Chemiker",
      "translation": {
        "tr": "Kimyager",
        "en": "Chemist"
      }
    },
    {
      "article": "der",
      "word": "Chinese",
      "translation": {
        "tr": "Çince",
        "en": "Chinese"
      }
    },
    {
      "article": "die",
      "word": "Chronik",
      "translation": {
        "tr": "Tarih",
        "en": "Chronicle"
      }
    },
    {
      "article": "die",
      "word": "City",
      "translation": {
        "tr": "Şehir",
        "en": "City"
      }
    },
    {
      "article": "der",
      "word": "Clip",
      "translation": {
        "tr": "Klip",
        "en": "Clip"
      }
    },
    {
      "article": "der",
      "word": "Coach",
      "translation": {
        "tr": "Antrenör",
        "en": "Coach"
      }
    },
    {
      "article": "der",
      "word": "Cocktail",
      "translation": {
        "tr": "Kokteyl",
        "en": "Cocktail"
      }
    },
    {
      "article": "der",
      "word": "Code",
      "translation": {
        "tr": "Kod",
        "en": "Code"
      }
    },
    {
      "article": "der",
      "word": "Container",
      "translation": {
        "tr": "Konteynerler",
        "en": "Containers"
      }
    },
    {
      "article": "die",
      "word": "Creme",
      "translation": {
        "tr": "Krem",
        "en": "Cream"
      }
    },
    {
      "article": "der",
      "word": "Dämon",
      "translation": {
        "tr": "Şeytan",
        "en": "Demon"
      }
    },
    {
      "article": "das",
      "word": "Darlehen",
      "translation": {
        "tr": "Kredi",
        "en": "Loan"
      }
    },
    {
      "article": "die",
      "word": "Darstellung",
      "translation": {
        "tr": "Sunum",
        "en": "Presentation"
      }
    },
    {
      "article": "die",
      "word": "Datenbank",
      "translation": {
        "tr": "Veritabanı",
        "en": "Database"
      }
    },
    {
      "article": "der",
      "word": "Deal",
      "translation": {
        "tr": "anlaşma",
        "en": "deal"
      }
    },
    {
      "article": "die",
      "word": "Debatte",
      "translation": {
        "tr": "Tartışma",
        "en": "Debate"
      }
    },
    {
      "article": "die",
      "word": "Definition",
      "translation": {
        "tr": "Tanım",
        "en": "Definition"
      }
    },
    {
      "article": "das",
      "word": "Defizit",
      "translation": {
        "tr": "Açık",
        "en": "Deficit"
      }
    },
    {
      "article": "der",
      "word": "Deich",
      "translation": {
        "tr": "Lezbiyen",
        "en": "Dyke"
      }
    },
    {
      "article": "die",
      "word": "Delegation",
      "translation": {
        "tr": "Delegasyon",
        "en": "Delegation"
      }
    },
    {
      "article": "der",
      "word": "Delegierte",
      "translation": {
        "tr": "delegeler",
        "en": "delegates"
      }
    },
    {
      "article": "das",
      "word": "Delikt",
      "translation": {
        "tr": "suç",
        "en": "offense"
      }
    },
    {
      "article": "die",
      "word": "Demenz",
      "translation": {
        "tr": "Demans",
        "en": "Dementia"
      }
    },
    {
      "article": "der",
      "word": "Demonstrant",
      "translation": {
        "tr": "protestocu",
        "en": "protester"
      }
    },
    {
      "article": "die",
      "word": "Demonstration",
      "translation": {
        "tr": "gösteri",
        "en": "demonstration"
      }
    },
    {
      "article": "das",
      "word": "Denken",
      "translation": {
        "tr": "Düşün",
        "en": "Think"
      }
    },
    {
      "article": "das",
      "word": "Denkmal",
      "translation": {
        "tr": "Anıt",
        "en": "Monument"
      }
    },
    {
      "article": "die",
      "word": "Depression",
      "translation": {
        "tr": "Depresyon",
        "en": "Depression"
      }
    },
    {
      "article": "das",
      "word": "Design",
      "translation": {
        "tr": "tasarım",
        "en": "design"
      }
    },
    {
      "article": "der",
      "word": "Desktop",
      "translation": {
        "tr": "Masaüstü",
        "en": "Desktop"
      }
    },
    {
      "article": "das",
      "word": "Detail",
      "translation": {
        "tr": "detay",
        "en": "detail"
      }
    },
    {
      "article": "der",
      "word": "Diabetes",
      "translation": {
        "tr": "Diyabet",
        "en": "Diabetes"
      }
    },
    {
      "article": "die",
      "word": "Diagnose",
      "translation": {
        "tr": "Teşhis",
        "en": "Diagnosis"
      }
    },
    {
      "article": "das",
      "word": "Diagramm",
      "translation": {
        "tr": "Diyagram",
        "en": "Diagram"
      }
    },
    {
      "article": "der",
      "word": "Dialekt",
      "translation": {
        "tr": "Lehçe",
        "en": "Dialect"
      }
    },
    {
      "article": "die",
      "word": "Diät",
      "translation": {
        "tr": "Diyet",
        "en": "Diet"
      }
    },
    {
      "article": "die",
      "word": "Dichtung",
      "translation": {
        "tr": "mühür",
        "en": "seal"
      }
    },
    {
      "article": "der",
      "word": "Diebstahl",
      "translation": {
        "tr": "Hırsızlık",
        "en": "Theft"
      }
    },
    {
      "article": "die",
      "word": "Dienstleistung",
      "translation": {
        "tr": "Hizmet",
        "en": "Service"
      }
    },
    {
      "article": "die",
      "word": "Differenz",
      "translation": {
        "tr": "Fark",
        "en": "Difference"
      }
    },
    {
      "article": "die",
      "word": "Digitalisierung",
      "translation": {
        "tr": "Dijitalleşme",
        "en": "Digitalization"
      }
    },
    {
      "article": "die",
      "word": "Diktatur",
      "translation": {
        "tr": "Diktatörlük",
        "en": "Dictatorship"
      }
    },
    {
      "article": "das",
      "word": "Dilemma",
      "translation": {
        "tr": "ikilem",
        "en": "dilemma"
      }
    },
    {
      "article": "die",
      "word": "Dimension",
      "translation": {
        "tr": "boyut",
        "en": "dimension"
      }
    },
    {
      "article": "der",
      "word": "Dirigent",
      "translation": {
        "tr": "İletken",
        "en": "Conductor"
      }
    },
    {
      "article": "die",
      "word": "Diskriminierung",
      "translation": {
        "tr": "Ayrımcılık",
        "en": "Discrimination"
      }
    },
    {
      "article": "der",
      "word": "Diskurs",
      "translation": {
        "tr": "Söylem",
        "en": "Discourse"
      }
    },
    {
      "article": "die",
      "word": "Distanz",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      }
    },
    {
      "article": "die",
      "word": "Disziplin",
      "translation": {
        "tr": "Disiplin",
        "en": "Discipline"
      }
    },
    {
      "article": "die",
      "word": "Dokumentation",
      "translation": {
        "tr": "Dokümantasyon",
        "en": "Documentation"
      }
    },
    {
      "article": "der",
      "word": "Dolmetscher",
      "translation": {
        "tr": "Tercüman",
        "en": "Interpreter"
      }
    },
    {
      "article": "die",
      "word": "Dosis",
      "translation": {
        "tr": "Doz",
        "en": "Dose"
      }
    },
    {
      "article": "der",
      "word": "Dozent",
      "translation": {
        "tr": "Öğretim Görevlisi",
        "en": "Lecturer"
      }
    },
    {
      "article": "der",
      "word": "Drang",
      "translation": {
        "tr": "Dürtü",
        "en": "Urge"
      }
    },
    {
      "article": "das",
      "word": "Drehbuch",
      "translation": {
        "tr": "Senaryo",
        "en": "Screenplay"
      }
    },
    {
      "article": "der",
      "word": "Druck",
      "translation": {
        "tr": "basınç",
        "en": "pressure"
      }
    },
    {
      "article": "das",
      "word": "Duell",
      "translation": {
        "tr": "Düello",
        "en": "Duel"
      }
    },
    {
      "article": "der",
      "word": "Dünger",
      "translation": {
        "tr": "gübre",
        "en": "fertilizer"
      }
    },
    {
      "article": "die",
      "word": "Dunkelheit",
      "translation": {
        "tr": "Karanlık",
        "en": "Darkness"
      }
    },
    {
      "article": "das",
      "word": "Duo",
      "translation": {
        "tr": "ikili",
        "en": "duo"
      }
    },
    {
      "article": "der",
      "word": "Durchbruch",
      "translation": {
        "tr": "Atılım",
        "en": "Breakthrough"
      }
    },
    {
      "article": "die",
      "word": "Durchführung",
      "translation": {
        "tr": "Uygulama",
        "en": "Implementation"
      }
    },
    {
      "article": "der",
      "word": "Durchmesser",
      "translation": {
        "tr": "çap",
        "en": "diameter"
      }
    },
    {
      "article": "der",
      "word": "Durchschnitt",
      "translation": {
        "tr": "Ortalama",
        "en": "Average"
      }
    },
    {
      "article": "die",
      "word": "Durchsetzung",
      "translation": {
        "tr": "Yaptırım",
        "en": "Enforcement"
      }
    },
    {
      "article": "die",
      "word": "Dürre",
      "translation": {
        "tr": "Kuraklık",
        "en": "Drought"
      }
    },
    {
      "article": "die",
      "word": "Dynamik",
      "translation": {
        "tr": "Dinamik",
        "en": "Dynamics"
      }
    },
    {
      "article": "die",
      "word": "Ebbe",
      "translation": {
        "tr": "Düşük gelgit",
        "en": "Low tide"
      }
    },
    {
      "article": "der",
      "word": "Editor",
      "translation": {
        "tr": "Editör",
        "en": "Editor"
      }
    },
    {
      "article": "der",
      "word": "Egoismus",
      "translation": {
        "tr": "Bencillik",
        "en": "Selfishness"
      }
    },
    {
      "article": "die",
      "word": "Ehre",
      "translation": {
        "tr": "onur",
        "en": "honor"
      }
    },
    {
      "article": "die",
      "word": "Ehrlichkeit",
      "translation": {
        "tr": "Dürüstlük",
        "en": "Honesty"
      }
    },
    {
      "article": "der",
      "word": "Einblick",
      "translation": {
        "tr": "içgörü",
        "en": "Insight"
      }
    },
    {
      "article": "der",
      "word": "Einbrecher",
      "translation": {
        "tr": "Hırsız",
        "en": "Burglar"
      }
    },
    {
      "article": "der",
      "word": "Einbruch",
      "translation": {
        "tr": "Hırsızlık",
        "en": "Burglary"
      }
    },
    {
      "article": "der",
      "word": "Eindruck",
      "translation": {
        "tr": "izlenim",
        "en": "impression"
      }
    },
    {
      "article": "der",
      "word": "Einfluss",
      "translation": {
        "tr": "Etki",
        "en": "Influence"
      }
    },
    {
      "article": "der",
      "word": "Eingriff",
      "translation": {
        "tr": "müdahale",
        "en": "intervention"
      }
    },
    {
      "article": "der",
      "word": "Einheimische",
      "translation": {
        "tr": "Yerliler",
        "en": "Locals"
      }
    },
    {
      "article": "die",
      "word": "Einigung",
      "translation": {
        "tr": "anlaşma",
        "en": "agreement"
      }
    },
    {
      "article": "der",
      "word": "Einklang",
      "translation": {
        "tr": "uyum",
        "en": "harmony"
      }
    },
    {
      "article": "die",
      "word": "Einleitung",
      "translation": {
        "tr": "Giriş",
        "en": "Introduction"
      }
    },
    {
      "article": "die",
      "word": "Einnahme",
      "translation": {
        "tr": "giriş",
        "en": "intake"
      }
    },
    {
      "article": "die",
      "word": "Einreise",
      "translation": {
        "tr": "Giriş",
        "en": "Entry"
      }
    },
    {
      "article": "der",
      "word": "Einsatzleiter",
      "translation": {
        "tr": "Operasyon Müdürü",
        "en": "Operations Manager"
      }
    },
    {
      "article": "die",
      "word": "Einschätzung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Assessment"
      }
    },
    {
      "article": "die",
      "word": "Einschränkung",
      "translation": {
        "tr": "Sınırlama",
        "en": "Limitation"
      }
    },
    {
      "article": "die",
      "word": "Einsicht",
      "translation": {
        "tr": "içgörü",
        "en": "insight"
      }
    },
    {
      "article": "der",
      "word": "Einstieg",
      "translation": {
        "tr": "Giriş",
        "en": "Entry"
      }
    },
    {
      "article": "die",
      "word": "Einteilung",
      "translation": {
        "tr": "sınıflandırma",
        "en": "Classification"
      }
    },
    {
      "article": "die",
      "word": "Eintragung",
      "translation": {
        "tr": "Kayıt",
        "en": "Registration"
      }
    },
    {
      "article": "der",
      "word": "Einwand",
      "translation": {
        "tr": "İtiraz",
        "en": "Objection"
      }
    },
    {
      "article": "der",
      "word": "Einzelfall",
      "translation": {
        "tr": "Bireysel vaka",
        "en": "Individual case"
      }
    },
    {
      "article": "der",
      "word": "Einzug",
      "translation": {
        "tr": "Taşınma",
        "en": "Move-in"
      }
    },
    {
      "article": "die",
      "word": "Eizelle",
      "translation": {
        "tr": "yumurta hücresi",
        "en": "egg cell"
      }
    },
    {
      "article": "der",
      "word": "Ekel",
      "translation": {
        "tr": "İğrenme",
        "en": "Disgust"
      }
    },
    {
      "article": "die",
      "word": "Elektronik",
      "translation": {
        "tr": "Elektronik",
        "en": "Electronics"
      }
    },
    {
      "article": "das",
      "word": "Elend",
      "translation": {
        "tr": "Sefalet",
        "en": "Misery"
      }
    },
    {
      "article": "der",
      "word": "Elfmeter",
      "translation": {
        "tr": "Penaltı",
        "en": "Penalty"
      }
    },
    {
      "article": "die",
      "word": "Elite",
      "translation": {
        "tr": "elit",
        "en": "elite"
      }
    },
    {
      "article": "das",
      "word": "Embargo",
      "translation": {
        "tr": "ambargo",
        "en": "embargo"
      }
    },
    {
      "article": "der",
      "word": "Embryo",
      "translation": {
        "tr": "embriyo",
        "en": "embryo"
      }
    },
    {
      "article": "die",
      "word": "Emission",
      "translation": {
        "tr": "Emisyon",
        "en": "Emission"
      }
    },
    {
      "article": "die",
      "word": "Emotion",
      "translation": {
        "tr": "duygu",
        "en": "emotion"
      }
    },
    {
      "article": "die",
      "word": "Empfehlung",
      "translation": {
        "tr": "Tavsiye",
        "en": "Recommendation"
      }
    },
    {
      "article": "der",
      "word": "Endverbraucher",
      "translation": {
        "tr": "son kullanıcı",
        "en": "end user"
      }
    },
    {
      "article": "das",
      "word": "Engagement",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      }
    },
    {
      "article": "das",
      "word": "Ensemble",
      "translation": {
        "tr": "topluluk",
        "en": "ensemble"
      }
    },
    {
      "article": "die",
      "word": "Entlassung",
      "translation": {
        "tr": "İşten çıkarılma",
        "en": "Dismissal"
      }
    },
    {
      "article": "die",
      "word": "Entschädigung",
      "translation": {
        "tr": "Tazminat",
        "en": "Compensation"
      }
    },
    {
      "article": "die",
      "word": "Entsorgung",
      "translation": {
        "tr": "Bertaraf",
        "en": "Disposal"
      }
    },
    {
      "article": "die",
      "word": "Entstehung",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      }
    },
    {
      "article": "der",
      "word": "Entwickler",
      "translation": {
        "tr": "Geliştirici",
        "en": "Developer"
      }
    },
    {
      "article": "das",
      "word": "Enzym",
      "translation": {
        "tr": "enzim",
        "en": "enzyme"
      }
    },
    {
      "article": "die",
      "word": "Epoche",
      "translation": {
        "tr": "Dönem",
        "en": "Epoch"
      }
    },
    {
      "article": "der",
      "word": "Erbe",
      "translation": {
        "tr": "Miras",
        "en": "Heritage"
      }
    },
    {
      "article": "das",
      "word": "Erdgas",
      "translation": {
        "tr": "Doğal gaz",
        "en": "Natural gas"
      }
    },
    {
      "article": "das",
      "word": "Erdöl",
      "translation": {
        "tr": "Petrol",
        "en": "Petroleum"
      }
    },
    {
      "article": "das",
      "word": "Ereignis",
      "translation": {
        "tr": "olay",
        "en": "event"
      }
    },
    {
      "article": "die",
      "word": "Erfassung",
      "translation": {
        "tr": "Yakala",
        "en": "Capture"
      }
    },
    {
      "article": "die",
      "word": "Erfüllung",
      "translation": {
        "tr": "yerine getirilmesi",
        "en": "fulfillment"
      }
    },
    {
      "article": "der",
      "word": "Erhalt",
      "translation": {
        "tr": "makbuz",
        "en": "receipt"
      }
    },
    {
      "article": "die",
      "word": "Erhaltung",
      "translation": {
        "tr": "Koruma",
        "en": "Conservation"
      }
    },
    {
      "article": "die",
      "word": "Erhebung",
      "translation": {
        "tr": "anket",
        "en": "survey"
      }
    },
    {
      "article": "die",
      "word": "Erhöhung",
      "translation": {
        "tr": "artış",
        "en": "increase"
      }
    },
    {
      "article": "die",
      "word": "Erholung",
      "translation": {
        "tr": "kurtarma",
        "en": "recovery"
      }
    },
    {
      "article": "die",
      "word": "Erkrankung",
      "translation": {
        "tr": "hastalık",
        "en": "disease"
      }
    },
    {
      "article": "die",
      "word": "Erkundung",
      "translation": {
        "tr": "Keşif",
        "en": "Exploration"
      }
    },
    {
      "article": "der",
      "word": "Erlös",
      "translation": {
        "tr": "Gelir",
        "en": "Revenue"
      }
    },
    {
      "article": "der",
      "word": "Ermittler",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Investigator"
      }
    },
    {
      "article": "die",
      "word": "Ermittlung",
      "translation": {
        "tr": "Soruşturma",
        "en": "Investigation"
      }
    },
    {
      "article": "die",
      "word": "Ermordung",
      "translation": {
        "tr": "Suikast",
        "en": "Assassination"
      }
    },
    {
      "article": "die",
      "word": "Ermutigung",
      "translation": {
        "tr": "Teşvik",
        "en": "Encouragement"
      }
    },
    {
      "article": "die",
      "word": "Eröffnung",
      "translation": {
        "tr": "Açılış",
        "en": "Opening"
      }
    },
    {
      "article": "der",
      "word": "Erreger",
      "translation": {
        "tr": "patojen",
        "en": "pathogen"
      }
    },
    {
      "article": "der",
      "word": "Ersatz",
      "translation": {
        "tr": "Değiştirme",
        "en": "Replacement"
      }
    },
    {
      "article": "die",
      "word": "Erscheinung",
      "translation": {
        "tr": "görünüm",
        "en": "appearance"
      }
    },
    {
      "article": "der",
      "word": "Ertrag",
      "translation": {
        "tr": "verim",
        "en": "yield"
      }
    },
    {
      "article": "die",
      "word": "Erwähnung",
      "translation": {
        "tr": "Mansiyon",
        "en": "Mention"
      }
    },
    {
      "article": "die",
      "word": "Erwärmung",
      "translation": {
        "tr": "ısınma",
        "en": "warming"
      }
    },
    {
      "article": "die",
      "word": "Erwartung",
      "translation": {
        "tr": "Beklenti",
        "en": "Expectation"
      }
    },
    {
      "article": "die",
      "word": "Erweiterung",
      "translation": {
        "tr": "Uzantı",
        "en": "Extension"
      }
    },
    {
      "article": "der",
      "word": "Erwerb",
      "translation": {
        "tr": "satın alma",
        "en": "acquisition"
      }
    },
    {
      "article": "die",
      "word": "Erzählung",
      "translation": {
        "tr": "Anlatım",
        "en": "Narration"
      }
    },
    {
      "article": "der",
      "word": "Erzieher",
      "translation": {
        "tr": "Eğitimci",
        "en": "Educator"
      }
    },
    {
      "article": "die",
      "word": "Erziehung",
      "translation": {
        "tr": "Eğitim",
        "en": "Education"
      }
    },
    {
      "article": "die",
      "word": "Essenz",
      "translation": {
        "tr": "Öz",
        "en": "Essence"
      }
    },
    {
      "article": "die",
      "word": "Ethik",
      "translation": {
        "tr": "Etik",
        "en": "Ethics"
      }
    },
    {
      "article": "die",
      "word": "Euphorie",
      "translation": {
        "tr": "Coşku",
        "en": "Euphoria"
      }
    },
    {
      "article": "die",
      "word": "Evolution",
      "translation": {
        "tr": "Evrim",
        "en": "Evolution"
      }
    },
    {
      "article": "die",
      "word": "Ewigkeit",
      "translation": {
        "tr": "sonsuzluk",
        "en": "eternity"
      }
    },
    {
      "article": "das",
      "word": "Examen",
      "translation": {
        "tr": "sınav",
        "en": "exam"
      }
    },
    {
      "article": "das",
      "word": "Exemplar",
      "translation": {
        "tr": "kopyala",
        "en": "copy"
      }
    },
    {
      "article": "das",
      "word": "Exil",
      "translation": {
        "tr": "Sürgün",
        "en": "Exile"
      }
    },
    {
      "article": "die",
      "word": "Existenz",
      "translation": {
        "tr": "varoluş",
        "en": "Existence"
      }
    },
    {
      "article": "die",
      "word": "Expedition",
      "translation": {
        "tr": "Sefer",
        "en": "Expedition"
      }
    },
    {
      "article": "der",
      "word": "Experte",
      "translation": {
        "tr": "Uzman",
        "en": "Expert"
      }
    },
    {
      "article": "die",
      "word": "Explosion",
      "translation": {
        "tr": "Patlama",
        "en": "Explosion"
      }
    },
    {
      "article": "der",
      "word": "Fachbereich",
      "translation": {
        "tr": "Departman",
        "en": "Department"
      }
    },
    {
      "article": "die",
      "word": "Fachhochschule",
      "translation": {
        "tr": "Uygulamalı Bilimler Üniversitesi",
        "en": "University of Applied Sciences"
      }
    },
    {
      "article": "der",
      "word": "Fachmann",
      "translation": {
        "tr": "Profesyonel",
        "en": "Professional"
      }
    },
    {
      "article": "die",
      "word": "Fähigkeit",
      "translation": {
        "tr": "yetenek",
        "en": "ability"
      }
    },
    {
      "article": "der",
      "word": "Fahnder",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Investigator"
      }
    },
    {
      "article": "die",
      "word": "Fahrbahn",
      "translation": {
        "tr": "karayolu",
        "en": "roadway"
      }
    },
    {
      "article": "die",
      "word": "Fairness",
      "translation": {
        "tr": "Adalet",
        "en": "Fairness"
      }
    },
    {
      "article": "die",
      "word": "Fakultät",
      "translation": {
        "tr": "Fakülte",
        "en": "Faculty"
      }
    },
    {
      "article": "der",
      "word": "Fang",
      "translation": {
        "tr": "Yakala",
        "en": "Catch"
      }
    },
    {
      "article": "die",
      "word": "Färbung",
      "translation": {
        "tr": "boyama",
        "en": "coloring"
      }
    },
    {
      "article": "die",
      "word": "Faser",
      "translation": {
        "tr": "lif",
        "en": "fiber"
      }
    },
    {
      "article": "die",
      "word": "Fassade",
      "translation": {
        "tr": "Cephe",
        "en": "Facade"
      }
    },
    {
      "article": "die",
      "word": "Fassung",
      "translation": {
        "tr": "versiyon",
        "en": "version"
      }
    },
    {
      "article": "das",
      "word": "Fazit",
      "translation": {
        "tr": "Sonuç",
        "en": "Conclusion"
      }
    },
    {
      "article": "der",
      "word": "Fehlschlag",
      "translation": {
        "tr": "Başarısızlık",
        "en": "Failure"
      }
    },
    {
      "article": "die",
      "word": "Feigheit",
      "translation": {
        "tr": "Korkaklık",
        "en": "Cowardice"
      }
    },
    {
      "article": "die",
      "word": "Ferne",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      }
    },
    {
      "article": "die",
      "word": "Fertigstellung",
      "translation": {
        "tr": "Tamamlama",
        "en": "Completion"
      }
    },
    {
      "article": "die",
      "word": "Fertigung",
      "translation": {
        "tr": "İmalat",
        "en": "Manufacturing"
      }
    },
    {
      "article": "das",
      "word": "Festland",
      "translation": {
        "tr": "anakara",
        "en": "mainland"
      }
    },
    {
      "article": "die",
      "word": "Festlegung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      }
    },
    {
      "article": "die",
      "word": "Festnahme",
      "translation": {
        "tr": "Tutuklama",
        "en": "Arrest"
      }
    },
    {
      "article": "das",
      "word": "Festnetz",
      "translation": {
        "tr": "Sabit hat",
        "en": "Landline"
      }
    },
    {
      "article": "die",
      "word": "Feststellung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      }
    },
    {
      "article": "die",
      "word": "Fiktion",
      "translation": {
        "tr": "Kurgu",
        "en": "Fiction"
      }
    },
    {
      "article": "der",
      "word": "Filmemacher",
      "translation": {
        "tr": "Film yapımcısı",
        "en": "Filmmaker"
      }
    },
    {
      "article": "das",
      "word": "Filmmaterial",
      "translation": {
        "tr": "görüntüleri",
        "en": "footage"
      }
    },
    {
      "article": "der",
      "word": "Filz",
      "translation": {
        "tr": "keçe",
        "en": "felt"
      }
    },
    {
      "article": "das",
      "word": "Finale",
      "translation": {
        "tr": "Final",
        "en": "Final"
      }
    },
    {
      "article": "die",
      "word": "Finanzierung",
      "translation": {
        "tr": "Finansman",
        "en": "Financing"
      }
    },
    {
      "article": "der",
      "word": "Finanzminister",
      "translation": {
        "tr": "Maliye Bakanı",
        "en": "Finance Minister"
      }
    },
    {
      "article": "die",
      "word": "Finsternis",
      "translation": {
        "tr": "Karanlık",
        "en": "Darkness"
      }
    },
    {
      "article": "die",
      "word": "Flexibilität",
      "translation": {
        "tr": "Esneklik",
        "en": "Flexibility"
      }
    },
    {
      "article": "die",
      "word": "Flotte",
      "translation": {
        "tr": "Filo",
        "en": "Fleet"
      }
    },
    {
      "article": "die",
      "word": "Flucht",
      "translation": {
        "tr": "Kaçış",
        "en": "Escape"
      }
    },
    {
      "article": "die",
      "word": "Fluggesellschaft",
      "translation": {
        "tr": "havayolu",
        "en": "airline"
      }
    },
    {
      "article": "der",
      "word": "Flur",
      "translation": {
        "tr": "koridor",
        "en": "hallway"
      }
    },
    {
      "article": "die",
      "word": "Flüssigkeit",
      "translation": {
        "tr": "sıvı",
        "en": "liquid"
      }
    },
    {
      "article": "die",
      "word": "Flut",
      "translation": {
        "tr": "sel",
        "en": "flood"
      }
    },
    {
      "article": "der",
      "word": "Flyer",
      "translation": {
        "tr": "El ilanları",
        "en": "Flyers"
      }
    },
    {
      "article": "der",
      "word": "Fond",
      "translation": {
        "tr": "Fon",
        "en": "Fund"
      }
    },
    {
      "article": "die",
      "word": "Forderung",
      "translation": {
        "tr": "talep",
        "en": "demand"
      }
    },
    {
      "article": "die",
      "word": "Förderung",
      "translation": {
        "tr": "Promosyon",
        "en": "Promotion"
      }
    },
    {
      "article": "die",
      "word": "Formulierung",
      "translation": {
        "tr": "Formülasyon",
        "en": "Formulation"
      }
    },
    {
      "article": "der",
      "word": "Forscher",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Researcher"
      }
    },
    {
      "article": "die",
      "word": "Forschung",
      "translation": {
        "tr": "Araştırma",
        "en": "Research"
      }
    },
    {
      "article": "der",
      "word": "Fortschritt",
      "translation": {
        "tr": "İlerleme",
        "en": "Progress"
      }
    },
    {
      "article": "die",
      "word": "Fortsetzung",
      "translation": {
        "tr": "Devamı",
        "en": "Continuation"
      }
    },
    {
      "article": "die",
      "word": "Fotografie",
      "translation": {
        "tr": "Fotoğrafçılık",
        "en": "Photography"
      }
    },
    {
      "article": "das",
      "word": "Foul",
      "translation": {
        "tr": "Faul",
        "en": "Foul"
      }
    },
    {
      "article": "der",
      "word": "Fragebogen",
      "translation": {
        "tr": "Anket",
        "en": "Questionnaire"
      }
    },
    {
      "article": "die",
      "word": "Fragestellung",
      "translation": {
        "tr": "Soru",
        "en": "Question"
      }
    },
    {
      "article": "die",
      "word": "Fraktion",
      "translation": {
        "tr": "hizip",
        "en": "faction"
      }
    },
    {
      "article": "der",
      "word": "Franzose",
      "translation": {
        "tr": "Fransız",
        "en": "Frenchman"
      }
    },
    {
      "article": "der",
      "word": "Freiberufler",
      "translation": {
        "tr": "Serbest çalışan",
        "en": "Freelancer"
      }
    },
    {
      "article": "die",
      "word": "Freigabe",
      "translation": {
        "tr": "Sürüm",
        "en": "Release"
      }
    },
    {
      "article": "die",
      "word": "Frequenz",
      "translation": {
        "tr": "Frekans",
        "en": "Frequency"
      }
    },
    {
      "article": "der",
      "word": "Frust",
      "translation": {
        "tr": "hayal kırıklığı",
        "en": "frustration"
      }
    },
    {
      "article": "die",
      "word": "Frustration",
      "translation": {
        "tr": "hayal kırıklığı",
        "en": "frustration"
      }
    },
    {
      "article": "die",
      "word": "Führung",
      "translation": {
        "tr": "Liderlik",
        "en": "Leadership"
      }
    },
    {
      "article": "die",
      "word": "Fülle",
      "translation": {
        "tr": "bolluk",
        "en": "abundance"
      }
    },
    {
      "article": "die",
      "word": "Furcht",
      "translation": {
        "tr": "Korku",
        "en": "Fear"
      }
    },
    {
      "article": "der",
      "word": "Fürst",
      "translation": {
        "tr": "Prens",
        "en": "Prince"
      }
    },
    {
      "article": "die",
      "word": "Fusion",
      "translation": {
        "tr": "Füzyon",
        "en": "Fusion"
      }
    },
    {
      "article": "die",
      "word": "Galerie",
      "translation": {
        "tr": "Galeri",
        "en": "Gallery"
      }
    },
    {
      "article": "der",
      "word": "Garant",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      }
    },
    {
      "article": "die",
      "word": "Garantie",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      }
    },
    {
      "article": "die",
      "word": "Gattin",
      "translation": {
        "tr": "eş",
        "en": "wife"
      }
    },
    {
      "article": "der",
      "word": "Gaumen",
      "translation": {
        "tr": "damak",
        "en": "palate"
      }
    },
    {
      "article": "das",
      "word": "Gebiet",
      "translation": {
        "tr": "alan",
        "en": "area"
      }
    },
    {
      "article": "das",
      "word": "Gebirge",
      "translation": {
        "tr": "Dağlar",
        "en": "Mountains"
      }
    }
  ],
  "C1": [
    {
      "article": "die",
      "word": "Aktiengesellschaft",
      "translation": {
        "tr": "Halka açık şirket",
        "en": "Public company"
      }
    },
    {
      "article": "das",
      "word": "Ambiente",
      "translation": {
        "tr": "Ambiyans",
        "en": "Ambiance"
      }
    },
    {
      "article": "die",
      "word": "Analogie",
      "translation": {
        "tr": "analoji",
        "en": "Analogy"
      }
    },
    {
      "article": "die",
      "word": "Angleichung",
      "translation": {
        "tr": "Hizalama",
        "en": "Alignment"
      }
    },
    {
      "article": "die",
      "word": "Ästhetik",
      "translation": {
        "tr": "Estetik",
        "en": "Aesthetics"
      }
    },
    {
      "article": "der",
      "word": "Aufsichtsrat",
      "translation": {
        "tr": "Denetleme Kurulu",
        "en": "Supervisory Board"
      }
    },
    {
      "article": "die",
      "word": "Aufzucht",
      "translation": {
        "tr": "yetiştirme",
        "en": "rearing"
      }
    },
    {
      "article": "die",
      "word": "Ausprägung",
      "translation": {
        "tr": "ifade",
        "en": "expression"
      }
    },
    {
      "article": "der",
      "word": "Baron",
      "translation": {
        "tr": "Baron",
        "en": "Baron"
      }
    },
    {
      "article": "die",
      "word": "Berücksichtigung",
      "translation": {
        "tr": "dikkate alma",
        "en": "consideration"
      }
    },
    {
      "article": "die",
      "word": "Beschleunigung",
      "translation": {
        "tr": "Hızlanma",
        "en": "Acceleration"
      }
    },
    {
      "article": "das",
      "word": "Bruttoinlandsprodukt",
      "translation": {
        "tr": "Gayri safi yurtiçi hasıla",
        "en": "Gross domestic product"
      }
    },
    {
      "article": "der",
      "word": "Datensatz",
      "translation": {
        "tr": "Veri kümesi",
        "en": "Dataset"
      }
    },
    {
      "article": "die",
      "word": "Datenverarbeitung",
      "translation": {
        "tr": "Veri işleme",
        "en": "Data processing"
      }
    },
    {
      "article": "die",
      "word": "Deutung",
      "translation": {
        "tr": "Yorumlama",
        "en": "Interpretation"
      }
    },
    {
      "article": "die",
      "word": "Dichte",
      "translation": {
        "tr": "yoğunluk",
        "en": "density"
      }
    },
    {
      "article": "die",
      "word": "Diskretion",
      "translation": {
        "tr": "Takdir",
        "en": "Discretion"
      }
    },
    {
      "article": "die",
      "word": "Division",
      "translation": {
        "tr": "bölme",
        "en": "division"
      }
    },
    {
      "article": "die",
      "word": "Domäne",
      "translation": {
        "tr": "etki alanı",
        "en": "domain"
      }
    },
    {
      "article": "die",
      "word": "Dominanz",
      "translation": {
        "tr": "Hakimiyet",
        "en": "Dominance"
      }
    },
    {
      "article": "die",
      "word": "Echtzeit",
      "translation": {
        "tr": "Gerçek zamanlı",
        "en": "Real time"
      }
    },
    {
      "article": "die",
      "word": "Effizienz",
      "translation": {
        "tr": "Verimlilik",
        "en": "Efficiency"
      }
    },
    {
      "article": "die",
      "word": "Ekstase",
      "translation": {
        "tr": "Ecstasy",
        "en": "Ecstasy"
      }
    },
    {
      "article": "die",
      "word": "Empfindlichkeit",
      "translation": {
        "tr": "Hassasiyet",
        "en": "Sensitivity"
      }
    },
    {
      "article": "die",
      "word": "Empörung",
      "translation": {
        "tr": "Öfke",
        "en": "Outrage"
      }
    },
    {
      "article": "der",
      "word": "Energieträger",
      "translation": {
        "tr": "enerji kaynağı",
        "en": "energy source"
      }
    },
    {
      "article": "die",
      "word": "Energiewirtschaft",
      "translation": {
        "tr": "Enerji endüstrisi",
        "en": "Energy industry"
      }
    },
    {
      "article": "die",
      "word": "Entscheidungsfindung",
      "translation": {
        "tr": "Karar verme",
        "en": "Decision making"
      }
    },
    {
      "article": "die",
      "word": "Entschlossenheit",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      }
    },
    {
      "article": "das",
      "word": "Erbgut",
      "translation": {
        "tr": "Genetik materyal",
        "en": "Genetic material"
      }
    },
    {
      "article": "die",
      "word": "Erkenntnis",
      "translation": {
        "tr": "bilgi",
        "en": "knowledge"
      }
    },
    {
      "article": "die",
      "word": "Erkennung",
      "translation": {
        "tr": "Algılama",
        "en": "Detection"
      }
    },
    {
      "article": "die",
      "word": "Erregung",
      "translation": {
        "tr": "Heyecan",
        "en": "Excitement"
      }
    },
    {
      "article": "die",
      "word": "Erstellung",
      "translation": {
        "tr": "Yaratılış",
        "en": "Creation"
      }
    },
    {
      "article": "die",
      "word": "Erwägung",
      "translation": {
        "tr": "dikkate alma",
        "en": "consideration"
      }
    },
    {
      "article": "der",
      "word": "Fokus",
      "translation": {
        "tr": "Odaklanma",
        "en": "Focus"
      }
    },
    {
      "article": "das",
      "word": "Gebot",
      "translation": {
        "tr": "emir",
        "en": "Commandment"
      }
    },
    {
      "article": "der",
      "word": "Gebrauch",
      "translation": {
        "tr": "Kullanım",
        "en": "Use"
      }
    },
    {
      "article": "das",
      "word": "Gedächtnis",
      "translation": {
        "tr": "hafıza",
        "en": "memory"
      }
    },
    {
      "article": "der",
      "word": "Gedanke",
      "translation": {
        "tr": "düşünce",
        "en": "thought"
      }
    },
    {
      "article": "das",
      "word": "Gefallen",
      "translation": {
        "tr": "Beğendim",
        "en": "Liked"
      }
    },
    {
      "article": "das",
      "word": "Gefäß",
      "translation": {
        "tr": "damar",
        "en": "vessel"
      }
    },
    {
      "article": "das",
      "word": "Gefühl",
      "translation": {
        "tr": "duygu",
        "en": "feeling"
      }
    },
    {
      "article": "der",
      "word": "Gegensatz",
      "translation": {
        "tr": "Kontrast",
        "en": "Contrast"
      }
    },
    {
      "article": "das",
      "word": "Gegenstück",
      "translation": {
        "tr": "muadili",
        "en": "counterpart"
      }
    },
    {
      "article": "der",
      "word": "Geheimdienst",
      "translation": {
        "tr": "Gizli Servis",
        "en": "Secret Service"
      }
    },
    {
      "article": "das",
      "word": "Gehör",
      "translation": {
        "tr": "işitme",
        "en": "hearing"
      }
    },
    {
      "article": "die",
      "word": "Geisel",
      "translation": {
        "tr": "rehine",
        "en": "hostage"
      }
    },
    {
      "article": "die",
      "word": "Geldstrafe",
      "translation": {
        "tr": "iyi",
        "en": "Fine"
      }
    },
    {
      "article": "der",
      "word": "Gemeinderat",
      "translation": {
        "tr": "Belediye meclisi",
        "en": "Municipal council"
      }
    },
    {
      "article": "die",
      "word": "Gemeinsamkeit",
      "translation": {
        "tr": "ortak nokta",
        "en": "Commonality"
      }
    },
    {
      "article": "das",
      "word": "Gemisch",
      "translation": {
        "tr": "Karışım",
        "en": "Mixture"
      }
    },
    {
      "article": "das",
      "word": "Gemüt",
      "translation": {
        "tr": "zihin",
        "en": "mind"
      }
    },
    {
      "article": "das",
      "word": "Gen",
      "translation": {
        "tr": "Gen",
        "en": "Gen"
      }
    },
    {
      "article": "die",
      "word": "Genauigkeit",
      "translation": {
        "tr": "doğruluk",
        "en": "Accuracy"
      }
    },
    {
      "article": "die",
      "word": "Genehmigung",
      "translation": {
        "tr": "Onay",
        "en": "Approval"
      }
    },
    {
      "article": "der",
      "word": "Generalsekretär",
      "translation": {
        "tr": "Genel Sekreter",
        "en": "Secretary General"
      }
    },
    {
      "article": "die",
      "word": "Generation",
      "translation": {
        "tr": "nesil",
        "en": "generation"
      }
    },
    {
      "article": "der",
      "word": "Generator",
      "translation": {
        "tr": "jeneratör",
        "en": "generator"
      }
    },
    {
      "article": "das",
      "word": "Genie",
      "translation": {
        "tr": "Dahi",
        "en": "Genius"
      }
    },
    {
      "article": "das",
      "word": "Genre",
      "translation": {
        "tr": "Tür",
        "en": "Genre"
      }
    },
    {
      "article": "der",
      "word": "Gentleman",
      "translation": {
        "tr": "Beyefendi",
        "en": "Gentleman"
      }
    },
    {
      "article": "der",
      "word": "Genuss",
      "translation": {
        "tr": "Zevk",
        "en": "Enjoyment"
      }
    },
    {
      "article": "die",
      "word": "Geografie",
      "translation": {
        "tr": "Coğrafya",
        "en": "Geography"
      }
    },
    {
      "article": "die",
      "word": "Geometrie",
      "translation": {
        "tr": "Geometri",
        "en": "Geometry"
      }
    },
    {
      "article": "die",
      "word": "Gerechtigkeit",
      "translation": {
        "tr": "Adalet",
        "en": "Justice"
      }
    },
    {
      "article": "das",
      "word": "Gerede",
      "translation": {
        "tr": "Konuşma",
        "en": "Talk"
      }
    },
    {
      "article": "das",
      "word": "Gericht",
      "translation": {
        "tr": "mahkeme",
        "en": "court"
      }
    },
    {
      "article": "die",
      "word": "Gerichtsbarkeit",
      "translation": {
        "tr": "Yargı yetkisi",
        "en": "Jurisdiction"
      }
    },
    {
      "article": "die",
      "word": "Germanistik",
      "translation": {
        "tr": "Almanca çalışmaları",
        "en": "German studies"
      }
    },
    {
      "article": "die",
      "word": "Gesamtsumme",
      "translation": {
        "tr": "Toplam",
        "en": "Total"
      }
    },
    {
      "article": "der",
      "word": "Geschäftsführer",
      "translation": {
        "tr": "Genel Müdür",
        "en": "Managing Director"
      }
    },
    {
      "article": "das",
      "word": "Geschäftsjahr",
      "translation": {
        "tr": "mali yıl",
        "en": "fiscal year"
      }
    },
    {
      "article": "der",
      "word": "Geschäftsmann",
      "translation": {
        "tr": "İş adamı",
        "en": "Businessman"
      }
    },
    {
      "article": "das",
      "word": "Geschehen",
      "translation": {
        "tr": "oldu",
        "en": "Happened"
      }
    },
    {
      "article": "das",
      "word": "Geschlecht",
      "translation": {
        "tr": "Cinsiyet",
        "en": "Gender"
      }
    },
    {
      "article": "das",
      "word": "Geschrei",
      "translation": {
        "tr": "Bağırmak",
        "en": "Yelling"
      }
    },
    {
      "article": "die",
      "word": "Geschwindigkeit",
      "translation": {
        "tr": "Hız",
        "en": "Speed"
      }
    },
    {
      "article": "der",
      "word": "Gesellschafter",
      "translation": {
        "tr": "hissedar",
        "en": "shareholder"
      }
    },
    {
      "article": "der",
      "word": "Gesetzgeber",
      "translation": {
        "tr": "Yasama Meclisi",
        "en": "Legislature"
      }
    },
    {
      "article": "die",
      "word": "Gesetzgebung",
      "translation": {
        "tr": "Mevzuat",
        "en": "Legislation"
      }
    },
    {
      "article": "der",
      "word": "Gesichtspunkt",
      "translation": {
        "tr": "bakış açısı",
        "en": "point of view"
      }
    },
    {
      "article": "das",
      "word": "Gespür",
      "translation": {
        "tr": "yetenek",
        "en": "flair"
      }
    },
    {
      "article": "die",
      "word": "Gestalt",
      "translation": {
        "tr": "şekil",
        "en": "shape"
      }
    },
    {
      "article": "die",
      "word": "Gestaltung",
      "translation": {
        "tr": "Tasarım",
        "en": "Design"
      }
    },
    {
      "article": "das",
      "word": "Geständnis",
      "translation": {
        "tr": "İtiraf",
        "en": "Confession"
      }
    },
    {
      "article": "der",
      "word": "Gestank",
      "translation": {
        "tr": "Kokuşmuş",
        "en": "Stink"
      }
    },
    {
      "article": "die",
      "word": "Gewähr",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      }
    },
    {
      "article": "die",
      "word": "Gewalt",
      "translation": {
        "tr": "Şiddet",
        "en": "Violence"
      }
    },
    {
      "article": "das",
      "word": "Gewand",
      "translation": {
        "tr": "elbise",
        "en": "robe"
      }
    },
    {
      "article": "das",
      "word": "Gewebe",
      "translation": {
        "tr": "Doku",
        "en": "Tissue"
      }
    },
    {
      "article": "der",
      "word": "Gewinn",
      "translation": {
        "tr": "kâr",
        "en": "profit"
      }
    },
    {
      "article": "der",
      "word": "Gewinner",
      "translation": {
        "tr": "Kazanan",
        "en": "Winner"
      }
    },
    {
      "article": "das",
      "word": "Gewissen",
      "translation": {
        "tr": "vicdan",
        "en": "conscience"
      }
    },
    {
      "article": "die",
      "word": "Gewissheit",
      "translation": {
        "tr": "kesinlik",
        "en": "Certainty"
      }
    },
    {
      "article": "die",
      "word": "Gier",
      "translation": {
        "tr": "Açgözlülük",
        "en": "Greed"
      }
    },
    {
      "article": "der",
      "word": "Gipfel",
      "translation": {
        "tr": "Zirve",
        "en": "Summit"
      }
    },
    {
      "article": "der",
      "word": "Glaube",
      "translation": {
        "tr": "inanç",
        "en": "Faith"
      }
    },
    {
      "article": "der",
      "word": "Gläubiger",
      "translation": {
        "tr": "alacaklı",
        "en": "creditor"
      }
    },
    {
      "article": "die",
      "word": "Glaubwürdigkeit",
      "translation": {
        "tr": "Güvenilirlik",
        "en": "Credibility"
      }
    },
    {
      "article": "das",
      "word": "Gleichgewicht",
      "translation": {
        "tr": "Bakiye",
        "en": "Balance"
      }
    },
    {
      "article": "die",
      "word": "Gleichheit",
      "translation": {
        "tr": "Eşitlik",
        "en": "Equality"
      }
    },
    {
      "article": "das",
      "word": "Glied",
      "translation": {
        "tr": "uzuv",
        "en": "limb"
      }
    },
    {
      "article": "die",
      "word": "Gliederung",
      "translation": {
        "tr": "Taslak",
        "en": "Outline"
      }
    },
    {
      "article": "die",
      "word": "Globalisierung",
      "translation": {
        "tr": "Küreselleşme",
        "en": "Globalization"
      }
    },
    {
      "article": "der",
      "word": "Glücksbringer",
      "translation": {
        "tr": "Şanslı çekicilik",
        "en": "Lucky charm"
      }
    },
    {
      "article": "das",
      "word": "Glücksspiel",
      "translation": {
        "tr": "Kumar",
        "en": "Gambling"
      }
    },
    {
      "article": "die",
      "word": "Gnade",
      "translation": {
        "tr": "zarafet",
        "en": "Grace"
      }
    },
    {
      "article": "der",
      "word": "Gouverneur",
      "translation": {
        "tr": "Vali",
        "en": "Governor"
      }
    },
    {
      "article": "der",
      "word": "Graf",
      "translation": {
        "tr": "Sayım",
        "en": "Count"
      }
    },
    {
      "article": "die",
      "word": "Grafik",
      "translation": {
        "tr": "Grafik",
        "en": "Graphics"
      }
    },
    {
      "article": "der",
      "word": "Grafiker",
      "translation": {
        "tr": "Grafik sanatçısı",
        "en": "Graphic artist"
      }
    },
    {
      "article": "die",
      "word": "Grafschaft",
      "translation": {
        "tr": "ilçe",
        "en": "county"
      }
    },
    {
      "article": "der",
      "word": "Granit",
      "translation": {
        "tr": "Granit",
        "en": "Granite"
      }
    },
    {
      "article": "das",
      "word": "Gremium",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      }
    },
    {
      "article": "der",
      "word": "Grenzwert",
      "translation": {
        "tr": "sınır",
        "en": "limit"
      }
    },
    {
      "article": "das",
      "word": "Grinsen",
      "translation": {
        "tr": "sırıtış",
        "en": "Grin"
      }
    },
    {
      "article": "die",
      "word": "Größenordnung",
      "translation": {
        "tr": "Büyüklük",
        "en": "Magnitude"
      }
    },
    {
      "article": "der",
      "word": "Großteil",
      "translation": {
        "tr": "Çoğunluk",
        "en": "Majority"
      }
    },
    {
      "article": "die",
      "word": "Gruft",
      "translation": {
        "tr": "Kripto",
        "en": "Crypt"
      }
    },
    {
      "article": "das",
      "word": "Grundrecht",
      "translation": {
        "tr": "Temel hak",
        "en": "Fundamental right"
      }
    },
    {
      "article": "der",
      "word": "Grundsatz",
      "translation": {
        "tr": "prensip",
        "en": "principle"
      }
    },
    {
      "article": "das",
      "word": "Grundstück",
      "translation": {
        "tr": "Mülkiyet",
        "en": "Property"
      }
    },
    {
      "article": "die",
      "word": "Gründung",
      "translation": {
        "tr": "Kurucu",
        "en": "Founding"
      }
    },
    {
      "article": "das",
      "word": "Grüne",
      "translation": {
        "tr": "Yeşiller",
        "en": "Greens"
      }
    },
    {
      "article": "die",
      "word": "Guerilla",
      "translation": {
        "tr": "Gerilla",
        "en": "Guerrilla"
      }
    },
    {
      "article": "die",
      "word": "Gültigkeit",
      "translation": {
        "tr": "Geçerlilik",
        "en": "Validity"
      }
    },
    {
      "article": "die",
      "word": "Gunst",
      "translation": {
        "tr": "iyilik",
        "en": "Favor"
      }
    },
    {
      "article": "der",
      "word": "Guru",
      "translation": {
        "tr": "guru",
        "en": "Guru"
      }
    },
    {
      "article": "das",
      "word": "Gutachten",
      "translation": {
        "tr": "Rapor",
        "en": "Report"
      }
    },
    {
      "article": "die",
      "word": "Haft",
      "translation": {
        "tr": "Gözaltı",
        "en": "Detention"
      }
    },
    {
      "article": "der",
      "word": "Haftbefehl",
      "translation": {
        "tr": "Tutuklama emri",
        "en": "Arrest warrant"
      }
    },
    {
      "article": "der",
      "word": "Häftling",
      "translation": {
        "tr": "Mahkum",
        "en": "Prisoner"
      }
    },
    {
      "article": "die",
      "word": "Haftung",
      "translation": {
        "tr": "Sorumluluk",
        "en": "Liability"
      }
    },
    {
      "article": "die",
      "word": "Haltung",
      "translation": {
        "tr": "Tutum",
        "en": "Attitude"
      }
    },
    {
      "article": "die",
      "word": "Handvoll",
      "translation": {
        "tr": "bir avuç",
        "en": "handful"
      }
    },
    {
      "article": "die",
      "word": "Hardware",
      "translation": {
        "tr": "Donanım",
        "en": "Hardware"
      }
    },
    {
      "article": "die",
      "word": "Harmonie",
      "translation": {
        "tr": "Uyum",
        "en": "Harmony"
      }
    },
    {
      "article": "der",
      "word": "Hass",
      "translation": {
        "tr": "Nefret",
        "en": "Hate"
      }
    },
    {
      "article": "die",
      "word": "Hast",
      "translation": {
        "tr": "sen",
        "en": "You"
      }
    },
    {
      "article": "die",
      "word": "Häufigkeit",
      "translation": {
        "tr": "Frekans",
        "en": "Frequency"
      }
    },
    {
      "article": "das",
      "word": "Hauptquartier",
      "translation": {
        "tr": "Karargah",
        "en": "Headquarters"
      }
    },
    {
      "article": "die",
      "word": "Heide",
      "translation": {
        "tr": "Heath",
        "en": "Heath"
      }
    },
    {
      "article": "das",
      "word": "Heilmittel",
      "translation": {
        "tr": "Çözüm",
        "en": "Remedy"
      }
    },
    {
      "article": "das",
      "word": "Heimatland",
      "translation": {
        "tr": "vatan",
        "en": "homeland"
      }
    },
    {
      "article": "das",
      "word": "Heimweh",
      "translation": {
        "tr": "Ev hasreti",
        "en": "Homesickness"
      }
    },
    {
      "article": "der",
      "word": "Hektar",
      "translation": {
        "tr": "hektar",
        "en": "hectares"
      }
    },
    {
      "article": "die",
      "word": "Hektik",
      "translation": {
        "tr": "koşuşturma",
        "en": "hustle and bustle"
      }
    },
    {
      "article": "die",
      "word": "Herausforderung",
      "translation": {
        "tr": "Mücadele",
        "en": "Challenge"
      }
    },
    {
      "article": "der",
      "word": "Herausgeber",
      "translation": {
        "tr": "Editör",
        "en": "Editor"
      }
    },
    {
      "article": "die",
      "word": "Herkunft",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      }
    },
    {
      "article": "die",
      "word": "Herrschaft",
      "translation": {
        "tr": "Hakimiyet",
        "en": "Domination"
      }
    },
    {
      "article": "die",
      "word": "Herstellung",
      "translation": {
        "tr": "İmalat",
        "en": "Manufacturing"
      }
    },
    {
      "article": "der",
      "word": "Herzog",
      "translation": {
        "tr": "Dük",
        "en": "Duke"
      }
    },
    {
      "article": "die",
      "word": "Hexerei",
      "translation": {
        "tr": "Büyücülük",
        "en": "Witchcraft"
      }
    },
    {
      "article": "das",
      "word": "Highlight",
      "translation": {
        "tr": "Vurgula",
        "en": "Highlight"
      }
    },
    {
      "article": "das",
      "word": "Hilfsmittel",
      "translation": {
        "tr": "Yardımlar",
        "en": "Aids"
      }
    },
    {
      "article": "der",
      "word": "Hinblick",
      "translation": {
        "tr": "görünüm",
        "en": "view"
      }
    },
    {
      "article": "das",
      "word": "Hindernis",
      "translation": {
        "tr": "Engel",
        "en": "Obstacle"
      }
    },
    {
      "article": "die",
      "word": "Hinrichtung",
      "translation": {
        "tr": "Yürütme",
        "en": "Execution"
      }
    },
    {
      "article": "die",
      "word": "Hinsicht",
      "translation": {
        "tr": "saygı",
        "en": "respect"
      }
    },
    {
      "article": "der",
      "word": "Historiker",
      "translation": {
        "tr": "Tarihçi",
        "en": "Historian"
      }
    },
    {
      "article": "die",
      "word": "Hochschule",
      "translation": {
        "tr": "üniversite",
        "en": "College"
      }
    },
    {
      "article": "das",
      "word": "Hochwasser",
      "translation": {
        "tr": "Sel",
        "en": "Flood"
      }
    },
    {
      "article": "der",
      "word": "Humor",
      "translation": {
        "tr": "mizah",
        "en": "humor"
      }
    },
    {
      "article": "die",
      "word": "Hypothek",
      "translation": {
        "tr": "İpotek",
        "en": "Mortgage"
      }
    },
    {
      "article": "die",
      "word": "Hypothese",
      "translation": {
        "tr": "Hipotez",
        "en": "Hypothesis"
      }
    },
    {
      "article": "die",
      "word": "Hysterie",
      "translation": {
        "tr": "Histeri",
        "en": "Hysteria"
      }
    },
    {
      "article": "das",
      "word": "Ideal",
      "translation": {
        "tr": "İdeal",
        "en": "Ideal"
      }
    },
    {
      "article": "die",
      "word": "Identität",
      "translation": {
        "tr": "Kimlik",
        "en": "Identity"
      }
    },
    {
      "article": "die",
      "word": "Illusion",
      "translation": {
        "tr": "yanılsama",
        "en": "illusion"
      }
    },
    {
      "article": "die",
      "word": "Illustration",
      "translation": {
        "tr": "illüstrasyon",
        "en": "illustration"
      }
    },
    {
      "article": "das",
      "word": "Image",
      "translation": {
        "tr": "Resim",
        "en": "Image"
      }
    },
    {
      "article": "das",
      "word": "Immunsystem",
      "translation": {
        "tr": "bağışıklık sistemi",
        "en": "immune system"
      }
    },
    {
      "article": "der",
      "word": "Import",
      "translation": {
        "tr": "İthalat",
        "en": "Import"
      }
    },
    {
      "article": "der",
      "word": "Impuls",
      "translation": {
        "tr": "Dürtü",
        "en": "Impulse"
      }
    },
    {
      "article": "der",
      "word": "Index",
      "translation": {
        "tr": "Dizin",
        "en": "Index"
      }
    },
    {
      "article": "der",
      "word": "Indikator",
      "translation": {
        "tr": "Gösterge",
        "en": "Indicator"
      }
    },
    {
      "article": "das",
      "word": "Individuum",
      "translation": {
        "tr": "bireysel",
        "en": "individual"
      }
    },
    {
      "article": "das",
      "word": "Indiz",
      "translation": {
        "tr": "Endikasyon",
        "en": "Indication"
      }
    },
    {
      "article": "die",
      "word": "Infektion",
      "translation": {
        "tr": "enfeksiyon",
        "en": "infection"
      }
    },
    {
      "article": "das",
      "word": "Inferno",
      "translation": {
        "tr": "Cehennem",
        "en": "Inferno"
      }
    },
    {
      "article": "die",
      "word": "Inflation",
      "translation": {
        "tr": "Enflasyon",
        "en": "Inflation"
      }
    },
    {
      "article": "die",
      "word": "Inflationsrate",
      "translation": {
        "tr": "Enflasyon oranı",
        "en": "Inflation rate"
      }
    },
    {
      "article": "die",
      "word": "Informatik",
      "translation": {
        "tr": "Bilgisayar Bilimi",
        "en": "Computer Science"
      }
    },
    {
      "article": "die",
      "word": "Infrastruktur",
      "translation": {
        "tr": "Altyapı",
        "en": "Infrastructure"
      }
    },
    {
      "article": "der",
      "word": "Ingenieur",
      "translation": {
        "tr": "Mühendis",
        "en": "Engineer"
      }
    },
    {
      "article": "die",
      "word": "Initiative",
      "translation": {
        "tr": "girişim",
        "en": "initiative"
      }
    },
    {
      "article": "der",
      "word": "Innenminister",
      "translation": {
        "tr": "İçişleri Bakanı",
        "en": "Interior Minister"
      }
    },
    {
      "article": "der",
      "word": "Innenraum",
      "translation": {
        "tr": "İç mekan",
        "en": "Interior"
      }
    },
    {
      "article": "die",
      "word": "Innenstadt",
      "translation": {
        "tr": "Şehir merkezi",
        "en": "Downtown"
      }
    },
    {
      "article": "die",
      "word": "Innovation",
      "translation": {
        "tr": "Yenilik",
        "en": "Innovation"
      }
    },
    {
      "article": "der",
      "word": "Insasse",
      "translation": {
        "tr": "mahkum",
        "en": "inmate"
      }
    },
    {
      "article": "der",
      "word": "Insider",
      "translation": {
        "tr": "İçeriden öğrenenler",
        "en": "Insiders"
      }
    },
    {
      "article": "die",
      "word": "Inspektion",
      "translation": {
        "tr": "Muayene",
        "en": "Inspection"
      }
    },
    {
      "article": "der",
      "word": "Inspektor",
      "translation": {
        "tr": "Müfettiş",
        "en": "Inspector"
      }
    },
    {
      "article": "die",
      "word": "Inspiration",
      "translation": {
        "tr": "İlham",
        "en": "Inspiration"
      }
    },
    {
      "article": "die",
      "word": "Installation",
      "translation": {
        "tr": "Kurulum",
        "en": "Installation"
      }
    },
    {
      "article": "die",
      "word": "Instanz",
      "translation": {
        "tr": "örnek",
        "en": "instance"
      }
    },
    {
      "article": "der",
      "word": "Instinkt",
      "translation": {
        "tr": "İçgüdü",
        "en": "Instinct"
      }
    },
    {
      "article": "das",
      "word": "Institut",
      "translation": {
        "tr": "Enstitü",
        "en": "Institute"
      }
    },
    {
      "article": "die",
      "word": "Institution",
      "translation": {
        "tr": "kurum",
        "en": "institution"
      }
    },
    {
      "article": "das",
      "word": "Insulin",
      "translation": {
        "tr": "insülin",
        "en": "Insulin"
      }
    },
    {
      "article": "die",
      "word": "Inszenierung",
      "translation": {
        "tr": "Evreleme",
        "en": "Staging"
      }
    },
    {
      "article": "die",
      "word": "Integration",
      "translation": {
        "tr": "Entegrasyon",
        "en": "Integration"
      }
    },
    {
      "article": "die",
      "word": "Integrität",
      "translation": {
        "tr": "Dürüstlük",
        "en": "Integrity"
      }
    },
    {
      "article": "die",
      "word": "Intelligenz",
      "translation": {
        "tr": "İstihbarat",
        "en": "Intelligence"
      }
    },
    {
      "article": "die",
      "word": "Intensität",
      "translation": {
        "tr": "Yoğunluk",
        "en": "Intensity"
      }
    },
    {
      "article": "die",
      "word": "Interaktion",
      "translation": {
        "tr": "Etkileşim",
        "en": "Interaction"
      }
    },
    {
      "article": "die",
      "word": "Interpretation",
      "translation": {
        "tr": "Yorumlama",
        "en": "Interpretation"
      }
    },
    {
      "article": "die",
      "word": "Intervention",
      "translation": {
        "tr": "Müdahale",
        "en": "Intervention"
      }
    },
    {
      "article": "die",
      "word": "Invasion",
      "translation": {
        "tr": "istila",
        "en": "invasion"
      }
    },
    {
      "article": "die",
      "word": "Investition",
      "translation": {
        "tr": "Yatırım",
        "en": "Investment"
      }
    },
    {
      "article": "der",
      "word": "Investor",
      "translation": {
        "tr": "yatırımcı",
        "en": "investor"
      }
    },
    {
      "article": "die",
      "word": "Ironie",
      "translation": {
        "tr": "ironi",
        "en": "Irony"
      }
    },
    {
      "article": "der",
      "word": "Irrtum",
      "translation": {
        "tr": "hata",
        "en": "Mistake"
      }
    },
    {
      "article": "die",
      "word": "Isolation",
      "translation": {
        "tr": "izolasyon",
        "en": "Isolation"
      }
    },
    {
      "article": "die",
      "word": "Jagd",
      "translation": {
        "tr": "Avcılık",
        "en": "Hunting"
      }
    },
    {
      "article": "der",
      "word": "Jahrestag",
      "translation": {
        "tr": "yıldönümü",
        "en": "anniversary"
      }
    },
    {
      "article": "der",
      "word": "Jahrgang",
      "translation": {
        "tr": "vintage",
        "en": "vintage"
      }
    },
    {
      "article": "der",
      "word": "Jazz",
      "translation": {
        "tr": "Caz",
        "en": "Jazz"
      }
    },
    {
      "article": "der",
      "word": "Jubel",
      "translation": {
        "tr": "Şerefe",
        "en": "Cheers"
      }
    },
    {
      "article": "das",
      "word": "Jubiläum",
      "translation": {
        "tr": "yıldönümü",
        "en": "anniversary"
      }
    },
    {
      "article": "der",
      "word": "Jude",
      "translation": {
        "tr": "Yahudi",
        "en": "Jew"
      }
    },
    {
      "article": "die",
      "word": "Jugend",
      "translation": {
        "tr": "Gençlik",
        "en": "Youth"
      }
    },
    {
      "article": "der",
      "word": "Jurist",
      "translation": {
        "tr": "avukat",
        "en": "lawyer"
      }
    },
    {
      "article": "die",
      "word": "Jury",
      "translation": {
        "tr": "Jüri",
        "en": "Jury"
      }
    },
    {
      "article": "die",
      "word": "Justiz",
      "translation": {
        "tr": "Adalet",
        "en": "Justice"
      }
    },
    {
      "article": "das",
      "word": "Kabarett",
      "translation": {
        "tr": "Kabare",
        "en": "Cabaret"
      }
    },
    {
      "article": "das",
      "word": "Kabinett",
      "translation": {
        "tr": "Dolap",
        "en": "Cabinet"
      }
    },
    {
      "article": "der",
      "word": "Kaiser",
      "translation": {
        "tr": "İmparator",
        "en": "Emperor"
      }
    },
    {
      "article": "die",
      "word": "Kampagne",
      "translation": {
        "tr": "kampanya",
        "en": "campaign"
      }
    },
    {
      "article": "der",
      "word": "Kämpfer",
      "translation": {
        "tr": "Dövüşçü",
        "en": "Fighter"
      }
    },
    {
      "article": "der",
      "word": "Kampfgeist",
      "translation": {
        "tr": "mücadele ruhu",
        "en": "fighting spirit"
      }
    },
    {
      "article": "der",
      "word": "Kanton",
      "translation": {
        "tr": "Kanton",
        "en": "Canton"
      }
    },
    {
      "article": "die",
      "word": "Kanzlei",
      "translation": {
        "tr": "Hukuk firması",
        "en": "Law firm"
      }
    },
    {
      "article": "die",
      "word": "Kapazität",
      "translation": {
        "tr": "Kapasite",
        "en": "Capacity"
      }
    },
    {
      "article": "das",
      "word": "Kapital",
      "translation": {
        "tr": "Sermaye",
        "en": "Capital"
      }
    },
    {
      "article": "der",
      "word": "Kapitalismus",
      "translation": {
        "tr": "Kapitalizm",
        "en": "Capitalism"
      }
    },
    {
      "article": "die",
      "word": "Karriere",
      "translation": {
        "tr": "Kariyer",
        "en": "Career"
      }
    },
    {
      "article": "der",
      "word": "Katalysator",
      "translation": {
        "tr": "Katalizör",
        "en": "Catalyst"
      }
    },
    {
      "article": "die",
      "word": "Katastrophe",
      "translation": {
        "tr": "Felaket",
        "en": "Catastrophe"
      }
    },
    {
      "article": "die",
      "word": "Kategorie",
      "translation": {
        "tr": "Kategori",
        "en": "Category"
      }
    },
    {
      "article": "die",
      "word": "Kaution",
      "translation": {
        "tr": "Mevduat",
        "en": "Deposit"
      }
    },
    {
      "article": "die",
      "word": "Kenntnis",
      "translation": {
        "tr": "Bilgi",
        "en": "Knowledge"
      }
    },
    {
      "article": "der",
      "word": "Killer",
      "translation": {
        "tr": "Katiller",
        "en": "Killers"
      }
    },
    {
      "article": "die",
      "word": "Klage",
      "translation": {
        "tr": "dava",
        "en": "Lawsuit"
      }
    },
    {
      "article": "die",
      "word": "Klassifizierung",
      "translation": {
        "tr": "sınıflandırma",
        "en": "Classification"
      }
    },
    {
      "article": "der",
      "word": "Klassiker",
      "translation": {
        "tr": "Klasik",
        "en": "Classic"
      }
    },
    {
      "article": "die",
      "word": "Klausel",
      "translation": {
        "tr": "madde",
        "en": "clause"
      }
    },
    {
      "article": "die",
      "word": "Klausur",
      "translation": {
        "tr": "Sınav",
        "en": "Exam"
      }
    },
    {
      "article": "der",
      "word": "Klimawandel",
      "translation": {
        "tr": "İklim değişikliği",
        "en": "Climate change"
      }
    },
    {
      "article": "der",
      "word": "Klotz",
      "translation": {
        "tr": "Klotz",
        "en": "Klotz"
      }
    },
    {
      "article": "die",
      "word": "Kluft",
      "translation": {
        "tr": "Böl",
        "en": "Divide"
      }
    },
    {
      "article": "die",
      "word": "Koalition",
      "translation": {
        "tr": "Koalisyon",
        "en": "Coalition"
      }
    },
    {
      "article": "der",
      "word": "Kohlenstoff",
      "translation": {
        "tr": "Karbon",
        "en": "Carbon"
      }
    },
    {
      "article": "der",
      "word": "Kollaps",
      "translation": {
        "tr": "Daralt",
        "en": "Collapse"
      }
    },
    {
      "article": "die",
      "word": "Kollision",
      "translation": {
        "tr": "çarpışma",
        "en": "collision"
      }
    },
    {
      "article": "die",
      "word": "Kombination",
      "translation": {
        "tr": "Kombinasyon",
        "en": "Combination"
      }
    },
    {
      "article": "das",
      "word": "Komitee",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      }
    },
    {
      "article": "der",
      "word": "Kommandant",
      "translation": {
        "tr": "Komutan",
        "en": "Commander"
      }
    },
    {
      "article": "das",
      "word": "Kommando",
      "translation": {
        "tr": "Komut",
        "en": "Command"
      }
    },
    {
      "article": "die",
      "word": "Kommission",
      "translation": {
        "tr": "Komisyon",
        "en": "Commission"
      }
    },
    {
      "article": "die",
      "word": "Kommune",
      "translation": {
        "tr": "komün",
        "en": "commune"
      }
    },
    {
      "article": "die",
      "word": "Kommunikation",
      "translation": {
        "tr": "İletişim",
        "en": "Communication"
      }
    },
    {
      "article": "die",
      "word": "Komödie",
      "translation": {
        "tr": "Komedi",
        "en": "Comedy"
      }
    },
    {
      "article": "die",
      "word": "Kompetenz",
      "translation": {
        "tr": "Yetkinlik",
        "en": "Competence"
      }
    },
    {
      "article": "der",
      "word": "Komplex",
      "translation": {
        "tr": "Karmaşık",
        "en": "Complex"
      }
    },
    {
      "article": "die",
      "word": "Komponente",
      "translation": {
        "tr": "bileşen",
        "en": "component"
      }
    },
    {
      "article": "der",
      "word": "Komponist",
      "translation": {
        "tr": "Besteci",
        "en": "Composer"
      }
    },
    {
      "article": "der",
      "word": "Kompromiss",
      "translation": {
        "tr": "Uzlaşma",
        "en": "Compromise"
      }
    },
    {
      "article": "die",
      "word": "Konferenz",
      "translation": {
        "tr": "Konferans",
        "en": "Conference"
      }
    },
    {
      "article": "die",
      "word": "Konfiguration",
      "translation": {
        "tr": "Yapılandırma",
        "en": "Configuration"
      }
    },
    {
      "article": "die",
      "word": "Konfrontation",
      "translation": {
        "tr": "Yüzleşme",
        "en": "Confrontation"
      }
    },
    {
      "article": "der",
      "word": "Kongress",
      "translation": {
        "tr": "Kongre",
        "en": "Congress"
      }
    },
    {
      "article": "die",
      "word": "Konjunktur",
      "translation": {
        "tr": "ekonomik durum",
        "en": "economic situation"
      }
    },
    {
      "article": "der",
      "word": "Konkurrent",
      "translation": {
        "tr": "rakip",
        "en": "competitor"
      }
    },
    {
      "article": "die",
      "word": "Konkurrenz",
      "translation": {
        "tr": "Rekabet",
        "en": "Competition"
      }
    },
    {
      "article": "das",
      "word": "Können",
      "translation": {
        "tr": "Yapabilir",
        "en": "Can"
      }
    },
    {
      "article": "der",
      "word": "Konsens",
      "translation": {
        "tr": "Konsensüs",
        "en": "Consensus"
      }
    },
    {
      "article": "die",
      "word": "Konsequenz",
      "translation": {
        "tr": "Sonuç",
        "en": "Consequence"
      }
    },
    {
      "article": "die",
      "word": "Konsistenz",
      "translation": {
        "tr": "Tutarlılık",
        "en": "Consistency"
      }
    },
    {
      "article": "die",
      "word": "Konstante",
      "translation": {
        "tr": "Sabit",
        "en": "Constant"
      }
    },
    {
      "article": "die",
      "word": "Konstruktion",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      }
    },
    {
      "article": "das",
      "word": "Konsulat",
      "translation": {
        "tr": "Konsolosluk",
        "en": "Consulate"
      }
    },
    {
      "article": "der",
      "word": "Konsument",
      "translation": {
        "tr": "tüketici",
        "en": "consumer"
      }
    },
    {
      "article": "der",
      "word": "Kontext",
      "translation": {
        "tr": "Bağlam",
        "en": "Context"
      }
    },
    {
      "article": "die",
      "word": "Kontroverse",
      "translation": {
        "tr": "Tartışma",
        "en": "Controversy"
      }
    },
    {
      "article": "die",
      "word": "Konzentration",
      "translation": {
        "tr": "Konsantrasyon",
        "en": "Concentration"
      }
    },
    {
      "article": "die",
      "word": "Konzeption",
      "translation": {
        "tr": "gebelik",
        "en": "Conception"
      }
    },
    {
      "article": "der",
      "word": "Konzern",
      "translation": {
        "tr": "Grup",
        "en": "Group"
      }
    },
    {
      "article": "die",
      "word": "Kooperation",
      "translation": {
        "tr": "İşbirliği",
        "en": "Cooperation"
      }
    },
    {
      "article": "die",
      "word": "Koordination",
      "translation": {
        "tr": "Koordinasyon",
        "en": "Coordination"
      }
    },
    {
      "article": "der",
      "word": "Koordinator",
      "translation": {
        "tr": "Koordinatör",
        "en": "Coordinator"
      }
    },
    {
      "article": "die",
      "word": "Körpersprache",
      "translation": {
        "tr": "Beden dili",
        "en": "Body language"
      }
    },
    {
      "article": "die",
      "word": "Korrelation",
      "translation": {
        "tr": "Korelasyon",
        "en": "Correlation"
      }
    },
    {
      "article": "die",
      "word": "Korrespondenz",
      "translation": {
        "tr": "Yazışma",
        "en": "Correspondence"
      }
    },
    {
      "article": "die",
      "word": "Korruption",
      "translation": {
        "tr": "Yolsuzluk",
        "en": "Corruption"
      }
    },
    {
      "article": "der",
      "word": "Kosmos",
      "translation": {
        "tr": "Evren",
        "en": "Cosmos"
      }
    },
    {
      "article": "der",
      "word": "Kratzer",
      "translation": {
        "tr": "çizikler",
        "en": "Scratches"
      }
    },
    {
      "article": "die",
      "word": "Kreation",
      "translation": {
        "tr": "Yaratılış",
        "en": "Creation"
      }
    },
    {
      "article": "die",
      "word": "Kreativität",
      "translation": {
        "tr": "Yaratıcılık",
        "en": "Creativity"
      }
    },
    {
      "article": "der",
      "word": "Krebs",
      "translation": {
        "tr": "Kanser",
        "en": "Cancer"
      }
    },
    {
      "article": "der",
      "word": "Kreislauf",
      "translation": {
        "tr": "Dolaşım",
        "en": "Circulation"
      }
    },
    {
      "article": "die",
      "word": "Kreuzfahrt",
      "translation": {
        "tr": "Yolculuk",
        "en": "Cruise"
      }
    },
    {
      "article": "der",
      "word": "Krieger",
      "translation": {
        "tr": "Savaşçı",
        "en": "Warrior"
      }
    },
    {
      "article": "der",
      "word": "Kristall",
      "translation": {
        "tr": "Kristal",
        "en": "Crystal"
      }
    },
    {
      "article": "das",
      "word": "Kriterium",
      "translation": {
        "tr": "kriter",
        "en": "criterion"
      }
    },
    {
      "article": "die",
      "word": "Kulisse",
      "translation": {
        "tr": "Arka plan",
        "en": "Backdrop"
      }
    },
    {
      "article": "der",
      "word": "Kult",
      "translation": {
        "tr": "Kült",
        "en": "Cult"
      }
    },
    {
      "article": "die",
      "word": "Kündigung",
      "translation": {
        "tr": "Fesih",
        "en": "Termination"
      }
    },
    {
      "article": "der",
      "word": "Kunststoff",
      "translation": {
        "tr": "Plastik",
        "en": "Plastic"
      }
    },
    {
      "article": "das",
      "word": "Kunstwerk",
      "translation": {
        "tr": "Sanat eseri",
        "en": "Artwork"
      }
    },
    {
      "article": "das",
      "word": "Kupfer",
      "translation": {
        "tr": "Bakır",
        "en": "Copper"
      }
    },
    {
      "article": "der",
      "word": "Kurfürst",
      "translation": {
        "tr": "Seçmen",
        "en": "Elector"
      }
    },
    {
      "article": "das",
      "word": "Lächeln",
      "translation": {
        "tr": "Gülümseme",
        "en": "Smile"
      }
    },
    {
      "article": "die",
      "word": "Ladung",
      "translation": {
        "tr": "Şarj",
        "en": "Charge"
      }
    },
    {
      "article": "die",
      "word": "Lähmung",
      "translation": {
        "tr": "felç",
        "en": "paralysis"
      }
    },
    {
      "article": "die",
      "word": "Landesregierung",
      "translation": {
        "tr": "Eyalet hükümeti",
        "en": "State government"
      }
    },
    {
      "article": "der",
      "word": "Landkreis",
      "translation": {
        "tr": "Bölge",
        "en": "District"
      }
    },
    {
      "article": "der",
      "word": "Landtag",
      "translation": {
        "tr": "Eyalet Parlamentosu",
        "en": "State Parliament"
      }
    },
    {
      "article": "der",
      "word": "Laser",
      "translation": {
        "tr": "Lazerler",
        "en": "Lasers"
      }
    },
    {
      "article": "die",
      "word": "Laufbahn",
      "translation": {
        "tr": "Kariyer",
        "en": "Career"
      }
    },
    {
      "article": "die",
      "word": "Laufzeit",
      "translation": {
        "tr": "Süre",
        "en": "Duration"
      }
    },
    {
      "article": "das",
      "word": "Lebensjahr",
      "translation": {
        "tr": "yaşam yılı",
        "en": "year of life"
      }
    },
    {
      "article": "der",
      "word": "Lebenslauf",
      "translation": {
        "tr": "CV",
        "en": "CV"
      }
    },
    {
      "article": "die",
      "word": "Legende",
      "translation": {
        "tr": "Efsane",
        "en": "Legend"
      }
    },
    {
      "article": "der",
      "word": "Lehrmeister",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      }
    },
    {
      "article": "der",
      "word": "Lehrstuhl",
      "translation": {
        "tr": "Sandalye",
        "en": "Chair"
      }
    },
    {
      "article": "der",
      "word": "Leib",
      "translation": {
        "tr": "vücut",
        "en": "body"
      }
    },
    {
      "article": "die",
      "word": "Leiche",
      "translation": {
        "tr": "Ceset",
        "en": "Corpse"
      }
    },
    {
      "article": "die",
      "word": "Leichtigkeit",
      "translation": {
        "tr": "hafiflik",
        "en": "lightness"
      }
    },
    {
      "article": "das",
      "word": "Leiden",
      "translation": {
        "tr": "acı çekmek",
        "en": "suffering"
      }
    },
    {
      "article": "die",
      "word": "Leidenschaft",
      "translation": {
        "tr": "Tutku",
        "en": "Passion"
      }
    },
    {
      "article": "die",
      "word": "Leistungsfähigkeit",
      "translation": {
        "tr": "performans",
        "en": "performance"
      }
    },
    {
      "article": "die",
      "word": "Leitung",
      "translation": {
        "tr": "yönetim",
        "en": "management"
      }
    },
    {
      "article": "die",
      "word": "Lektüre",
      "translation": {
        "tr": "Okuma",
        "en": "Reading"
      }
    },
    {
      "article": "die",
      "word": "Lesung",
      "translation": {
        "tr": "Okuma",
        "en": "Reading"
      }
    },
    {
      "article": "das",
      "word": "Letzte",
      "translation": {
        "tr": "Sonuncusu",
        "en": "Last one"
      }
    },
    {
      "article": "der",
      "word": "Liebeskummer",
      "translation": {
        "tr": "Aşk hastalığı",
        "en": "Lovesickness"
      }
    },
    {
      "article": "der",
      "word": "Liebhaber",
      "translation": {
        "tr": "Sevgili",
        "en": "Lover"
      }
    },
    {
      "article": "der",
      "word": "Lifestyle",
      "translation": {
        "tr": "Yaşam Tarzı",
        "en": "Lifestyle"
      }
    },
    {
      "article": "das",
      "word": "Limit",
      "translation": {
        "tr": "sınır",
        "en": "limit"
      }
    },
    {
      "article": "der",
      "word": "Link",
      "translation": {
        "tr": "Bağlantı",
        "en": "Link"
      }
    },
    {
      "article": "die",
      "word": "Linke",
      "translation": {
        "tr": "Sol",
        "en": "Left"
      }
    },
    {
      "article": "die",
      "word": "Literatur",
      "translation": {
        "tr": "Edebiyat",
        "en": "Literature"
      }
    },
    {
      "article": "die",
      "word": "Lizenz",
      "translation": {
        "tr": "Lisans",
        "en": "License"
      }
    },
    {
      "article": "die",
      "word": "Logik",
      "translation": {
        "tr": "Mantık",
        "en": "Logic"
      }
    },
    {
      "article": "die",
      "word": "Loyalität",
      "translation": {
        "tr": "Sadakat",
        "en": "Loyalty"
      }
    },
    {
      "article": "der",
      "word": "Luxus",
      "translation": {
        "tr": "Lüks",
        "en": "Luxury"
      }
    },
    {
      "article": "die",
      "word": "Lyrik",
      "translation": {
        "tr": "Şiir",
        "en": "Poetry"
      }
    },
    {
      "article": "die",
      "word": "Magie",
      "translation": {
        "tr": "Büyü",
        "en": "Magic"
      }
    },
    {
      "article": "der",
      "word": "Magier",
      "translation": {
        "tr": "Sihirbaz",
        "en": "Magician"
      }
    },
    {
      "article": "der",
      "word": "Magistrat",
      "translation": {
        "tr": "Yargıç",
        "en": "Magistrate"
      }
    },
    {
      "article": "das",
      "word": "Magnetfeld",
      "translation": {
        "tr": "Manyetik alan",
        "en": "Magnetic field"
      }
    },
    {
      "article": "die",
      "word": "Mahnung",
      "translation": {
        "tr": "Hatırlatma",
        "en": "Reminder"
      }
    },
    {
      "article": "der",
      "word": "Mais",
      "translation": {
        "tr": "mısır",
        "en": "corn"
      }
    },
    {
      "article": "der",
      "word": "Makler",
      "translation": {
        "tr": "Komisyoncu",
        "en": "Broker"
      }
    },
    {
      "article": "die",
      "word": "Malerei",
      "translation": {
        "tr": "Boyama",
        "en": "Painting"
      }
    },
    {
      "article": "das",
      "word": "Management",
      "translation": {
        "tr": "yönetim",
        "en": "management"
      }
    },
    {
      "article": "das",
      "word": "Mandat",
      "translation": {
        "tr": "Yetki",
        "en": "Mandate"
      }
    },
    {
      "article": "der",
      "word": "Mangel",
      "translation": {
        "tr": "eksiklik",
        "en": "lack"
      }
    },
    {
      "article": "die",
      "word": "Manipulation",
      "translation": {
        "tr": "Manipülasyon",
        "en": "Manipulation"
      }
    },
    {
      "article": "das",
      "word": "Manuskript",
      "translation": {
        "tr": "El yazması",
        "en": "Manuscript"
      }
    },
    {
      "article": "die",
      "word": "Marine",
      "translation": {
        "tr": "Denizcilik",
        "en": "Marine"
      }
    },
    {
      "article": "die",
      "word": "Mark",
      "translation": {
        "tr": "işaret",
        "en": "Mark"
      }
    },
    {
      "article": "das",
      "word": "Marketing",
      "translation": {
        "tr": "Pazarlama",
        "en": "Marketing"
      }
    },
    {
      "article": "der",
      "word": "Marktanteil",
      "translation": {
        "tr": "Pazar payı",
        "en": "Market share"
      }
    },
    {
      "article": "die",
      "word": "Marktwirtschaft",
      "translation": {
        "tr": "Pazar ekonomisi",
        "en": "Market economy"
      }
    },
    {
      "article": "der",
      "word": "Marsch",
      "translation": {
        "tr": "Mart",
        "en": "March"
      }
    },
    {
      "article": "das",
      "word": "Maß",
      "translation": {
        "tr": "Boyut",
        "en": "Dimension"
      }
    },
    {
      "article": "das",
      "word": "Massaker",
      "translation": {
        "tr": "katliam",
        "en": "massacre"
      }
    },
    {
      "article": "die",
      "word": "Masse",
      "translation": {
        "tr": "kütle",
        "en": "mass"
      }
    },
    {
      "article": "der",
      "word": "Maßstab",
      "translation": {
        "tr": "ölçek",
        "en": "scale"
      }
    },
    {
      "article": "die",
      "word": "Materie",
      "translation": {
        "tr": "madde",
        "en": "matter"
      }
    },
    {
      "article": "die",
      "word": "Matrix",
      "translation": {
        "tr": "Matris",
        "en": "Matrix"
      }
    },
    {
      "article": "die",
      "word": "Maut",
      "translation": {
        "tr": "geçiş ücreti",
        "en": "toll"
      }
    },
    {
      "article": "das",
      "word": "Maximum",
      "translation": {
        "tr": "Maksimum",
        "en": "Maximum"
      }
    },
    {
      "article": "die",
      "word": "Mechanik",
      "translation": {
        "tr": "Mekanik",
        "en": "Mechanics"
      }
    },
    {
      "article": "der",
      "word": "Mechanismus",
      "translation": {
        "tr": "mekanizma",
        "en": "mechanism"
      }
    },
    {
      "article": "die",
      "word": "Meditation",
      "translation": {
        "tr": "Meditasyon",
        "en": "Meditation"
      }
    },
    {
      "article": "das",
      "word": "Medium",
      "translation": {
        "tr": "orta",
        "en": "medium"
      }
    },
    {
      "article": "der",
      "word": "Mediziner",
      "translation": {
        "tr": "tıp uzmanları",
        "en": "medical professionals"
      }
    },
    {
      "article": "der",
      "word": "Mehrwert",
      "translation": {
        "tr": "Katma değer",
        "en": "Added value"
      }
    },
    {
      "article": "die",
      "word": "Meisterschaft",
      "translation": {
        "tr": "Şampiyona",
        "en": "Championship"
      }
    },
    {
      "article": "die",
      "word": "Membran",
      "translation": {
        "tr": "Membran",
        "en": "Membrane"
      }
    },
    {
      "article": "das",
      "word": "Menschenrecht",
      "translation": {
        "tr": "İnsan hakkı",
        "en": "Human right"
      }
    },
    {
      "article": "die",
      "word": "Menschheit",
      "translation": {
        "tr": "insanlık",
        "en": "humanity"
      }
    },
    {
      "article": "die",
      "word": "Menschlichkeit",
      "translation": {
        "tr": "insanlık",
        "en": "humanity"
      }
    },
    {
      "article": "die",
      "word": "Metapher",
      "translation": {
        "tr": "Metafor",
        "en": "Metaphor"
      }
    },
    {
      "article": "die",
      "word": "Metropole",
      "translation": {
        "tr": "metropol",
        "en": "metropolis"
      }
    },
    {
      "article": "die",
      "word": "Migration",
      "translation": {
        "tr": "Göç",
        "en": "Migration"
      }
    },
    {
      "article": "die",
      "word": "Minderheit",
      "translation": {
        "tr": "azınlık",
        "en": "minority"
      }
    },
    {
      "article": "das",
      "word": "Minimum",
      "translation": {
        "tr": "Asgari",
        "en": "Minimum"
      }
    },
    {
      "article": "das",
      "word": "Ministerium",
      "translation": {
        "tr": "Bakanlık",
        "en": "Ministry"
      }
    },
    {
      "article": "der",
      "word": "Ministerpräsident",
      "translation": {
        "tr": "Başbakan",
        "en": "Prime Minister"
      }
    },
    {
      "article": "die",
      "word": "Misere",
      "translation": {
        "tr": "sefalet",
        "en": "misery"
      }
    },
    {
      "article": "der",
      "word": "Missbrauch",
      "translation": {
        "tr": "Kötüye kullanım",
        "en": "Abuse"
      }
    },
    {
      "article": "das",
      "word": "Missverständnis",
      "translation": {
        "tr": "Yanlış anlama",
        "en": "Misunderstanding"
      }
    },
    {
      "article": "der",
      "word": "Mitbewerber",
      "translation": {
        "tr": "Rakipler",
        "en": "Competitors"
      }
    },
    {
      "article": "das",
      "word": "Mitgefühl",
      "translation": {
        "tr": "Şefkat",
        "en": "Compassion"
      }
    },
    {
      "article": "die",
      "word": "Mitgliedschaft",
      "translation": {
        "tr": "Üyelik",
        "en": "Membership"
      }
    },
    {
      "article": "das",
      "word": "Mitleid",
      "translation": {
        "tr": "Yazık",
        "en": "Pity"
      }
    },
    {
      "article": "die",
      "word": "Mitteilung",
      "translation": {
        "tr": "Uyarı",
        "en": "Notice"
      }
    },
    {
      "article": "das",
      "word": "Mittelalter",
      "translation": {
        "tr": "Orta Çağ",
        "en": "Middle Ages"
      }
    },
    {
      "article": "das",
      "word": "Mittelmeer",
      "translation": {
        "tr": "Akdeniz",
        "en": "Mediterranean"
      }
    },
    {
      "article": "der",
      "word": "Mittelpunkt",
      "translation": {
        "tr": "Merkez noktası",
        "en": "Center point"
      }
    },
    {
      "article": "der",
      "word": "Mittelwert",
      "translation": {
        "tr": "ortalama",
        "en": "Mean"
      }
    },
    {
      "article": "die",
      "word": "Mitternacht",
      "translation": {
        "tr": "Gece yarısı",
        "en": "Midnight"
      }
    },
    {
      "article": "der",
      "word": "Mob",
      "translation": {
        "tr": "Mafya",
        "en": "Mob"
      }
    },
    {
      "article": "die",
      "word": "Mobilität",
      "translation": {
        "tr": "Hareketlilik",
        "en": "Mobility"
      }
    },
    {
      "article": "das",
      "word": "Modell",
      "translation": {
        "tr": "modeli",
        "en": "model"
      }
    },
    {
      "article": "der",
      "word": "Moderator",
      "translation": {
        "tr": "Moderatör",
        "en": "Moderator"
      }
    },
    {
      "article": "die",
      "word": "Moderne",
      "translation": {
        "tr": "Modernite",
        "en": "Modernity"
      }
    },
    {
      "article": "das",
      "word": "Modul",
      "translation": {
        "tr": "Modül",
        "en": "Module"
      }
    },
    {
      "article": "der",
      "word": "Modus",
      "translation": {
        "tr": "mod",
        "en": "mode"
      }
    },
    {
      "article": "der",
      "word": "Mönch",
      "translation": {
        "tr": "Keşiş",
        "en": "Monk"
      }
    },
    {
      "article": "das",
      "word": "Monopol",
      "translation": {
        "tr": "Tekel",
        "en": "Monopoly"
      }
    },
    {
      "article": "die",
      "word": "Moral",
      "translation": {
        "tr": "Ahlak",
        "en": "Morality"
      }
    },
    {
      "article": "die",
      "word": "Motivation",
      "translation": {
        "tr": "Motivasyon",
        "en": "Motivation"
      }
    },
    {
      "article": "die",
      "word": "Muskulatur",
      "translation": {
        "tr": "Kas yapısı",
        "en": "Musculature"
      }
    },
    {
      "article": "der",
      "word": "Mythos",
      "translation": {
        "tr": "efsane",
        "en": "Myth"
      }
    },
    {
      "article": "der",
      "word": "Nachahmer",
      "translation": {
        "tr": "taklitçi",
        "en": "copycat"
      }
    },
    {
      "article": "die",
      "word": "Nachbarschaft",
      "translation": {
        "tr": "Mahalle",
        "en": "Neighborhood"
      }
    },
    {
      "article": "die",
      "word": "Nachfolge",
      "translation": {
        "tr": "Veraset",
        "en": "Succession"
      }
    },
    {
      "article": "der",
      "word": "Nachfolger",
      "translation": {
        "tr": "halef",
        "en": "successor"
      }
    },
    {
      "article": "die",
      "word": "Nachrichtenagentur",
      "translation": {
        "tr": "Haber ajansı",
        "en": "News agency"
      }
    },
    {
      "article": "der",
      "word": "Nachweis",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      }
    },
    {
      "article": "der",
      "word": "Nachwuchs",
      "translation": {
        "tr": "yavru",
        "en": "offspring"
      }
    },
    {
      "article": "die",
      "word": "Nähe",
      "translation": {
        "tr": "Yakınlık",
        "en": "Proximity"
      }
    },
    {
      "article": "der",
      "word": "Nationalpark",
      "translation": {
        "tr": "Milli Park",
        "en": "National Park"
      }
    },
    {
      "article": "die",
      "word": "Navigation",
      "translation": {
        "tr": "Navigasyon",
        "en": "Navigation"
      }
    },
    {
      "article": "die",
      "word": "Neigung",
      "translation": {
        "tr": "Eğim",
        "en": "Inclination"
      }
    },
    {
      "article": "das",
      "word": "Nervensystem",
      "translation": {
        "tr": "Sinir sistemi",
        "en": "Nervous system"
      }
    },
    {
      "article": "das",
      "word": "Netzwerk",
      "translation": {
        "tr": "Ağ",
        "en": "Network"
      }
    },
    {
      "article": "die",
      "word": "Neugier",
      "translation": {
        "tr": "Merak",
        "en": "Curiosity"
      }
    },
    {
      "article": "die",
      "word": "Neuheit",
      "translation": {
        "tr": "yenilik",
        "en": "Novelty"
      }
    },
    {
      "article": "der",
      "word": "Niederschlag",
      "translation": {
        "tr": "Yağış",
        "en": "Precipitation"
      }
    },
    {
      "article": "das",
      "word": "Niveau",
      "translation": {
        "tr": "seviye",
        "en": "level"
      }
    },
    {
      "article": "die",
      "word": "Nominierung",
      "translation": {
        "tr": "Adaylık",
        "en": "Nomination"
      }
    },
    {
      "article": "die",
      "word": "Norm",
      "translation": {
        "tr": "Norm",
        "en": "Norm"
      }
    },
    {
      "article": "die",
      "word": "Nostalgie",
      "translation": {
        "tr": "Nostalji",
        "en": "Nostalgia"
      }
    },
    {
      "article": "die",
      "word": "Notwendigkeit",
      "translation": {
        "tr": "gereklilik",
        "en": "necessity"
      }
    },
    {
      "article": "die",
      "word": "Nutzung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      }
    },
    {
      "article": "der",
      "word": "Oberst",
      "translation": {
        "tr": "Albay",
        "en": "Colonel"
      }
    },
    {
      "article": "die",
      "word": "Offenbarung",
      "translation": {
        "tr": "Vahiy",
        "en": "Revelation"
      }
    },
    {
      "article": "die",
      "word": "Offenheit",
      "translation": {
        "tr": "Açıklık",
        "en": "Openness"
      }
    },
    {
      "article": "die",
      "word": "Öffentlichkeit",
      "translation": {
        "tr": "kamu",
        "en": "public"
      }
    },
    {
      "article": "die",
      "word": "Ohnmacht",
      "translation": {
        "tr": "bayılma",
        "en": "fainting"
      }
    },
    {
      "article": "die",
      "word": "Ökonomie",
      "translation": {
        "tr": "Ekonomi",
        "en": "Economics"
      }
    },
    {
      "article": "die",
      "word": "Operation",
      "translation": {
        "tr": "Operasyon",
        "en": "Operation"
      }
    },
    {
      "article": "die",
      "word": "Opposition",
      "translation": {
        "tr": "muhalefet",
        "en": "opposition"
      }
    },
    {
      "article": "der",
      "word": "Optimismus",
      "translation": {
        "tr": "İyimserlik",
        "en": "Optimism"
      }
    },
    {
      "article": "der",
      "word": "Organismus",
      "translation": {
        "tr": "organizma",
        "en": "organism"
      }
    },
    {
      "article": "der",
      "word": "Orient",
      "translation": {
        "tr": "Doğu",
        "en": "Orient"
      }
    },
    {
      "article": "der",
      "word": "Palästinenser",
      "translation": {
        "tr": "Filistinliler",
        "en": "Palestinians"
      }
    },
    {
      "article": "der",
      "word": "Papst",
      "translation": {
        "tr": "Papa",
        "en": "Pope"
      }
    },
    {
      "article": "die",
      "word": "Parade",
      "translation": {
        "tr": "geçit töreni",
        "en": "parade"
      }
    },
    {
      "article": "das",
      "word": "Paradies",
      "translation": {
        "tr": "Cennet",
        "en": "Paradise"
      }
    },
    {
      "article": "die",
      "word": "Parallele",
      "translation": {
        "tr": "paralel",
        "en": "Parallel"
      }
    },
    {
      "article": "der",
      "word": "Parameter",
      "translation": {
        "tr": "Parametreler",
        "en": "Parameters"
      }
    },
    {
      "article": "das",
      "word": "Parkett",
      "translation": {
        "tr": "Parke",
        "en": "Parquet"
      }
    },
    {
      "article": "der",
      "word": "Parteitag",
      "translation": {
        "tr": "Parti konferansı",
        "en": "Party conference"
      }
    },
    {
      "article": "die",
      "word": "Partie",
      "translation": {
        "tr": "oyun",
        "en": "game"
      }
    },
    {
      "article": "die",
      "word": "Partnerschaft",
      "translation": {
        "tr": "ortaklık",
        "en": "partnership"
      }
    },
    {
      "article": "die",
      "word": "Passage",
      "translation": {
        "tr": "geçit",
        "en": "passage"
      }
    },
    {
      "article": "der",
      "word": "Pastor",
      "translation": {
        "tr": "papaz",
        "en": "Pastor"
      }
    },
    {
      "article": "der",
      "word": "Patch",
      "translation": {
        "tr": "Yama",
        "en": "Patch"
      }
    },
    {
      "article": "das",
      "word": "Patent",
      "translation": {
        "tr": "patent",
        "en": "Patent"
      }
    },
    {
      "article": "die",
      "word": "Patrouille",
      "translation": {
        "tr": "Devriye",
        "en": "Patrol"
      }
    },
    {
      "article": "der",
      "word": "Pavillon",
      "translation": {
        "tr": "köşk",
        "en": "Pavilion"
      }
    },
    {
      "article": "die",
      "word": "Performance",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      }
    },
    {
      "article": "die",
      "word": "Periode",
      "translation": {
        "tr": "dönem",
        "en": "period"
      }
    },
    {
      "article": "das",
      "word": "Personal",
      "translation": {
        "tr": "Personel",
        "en": "Personnel"
      }
    },
    {
      "article": "die",
      "word": "Persönlichkeit",
      "translation": {
        "tr": "kişilik",
        "en": "personality"
      }
    },
    {
      "article": "die",
      "word": "Perspektive",
      "translation": {
        "tr": "perspektif",
        "en": "perspective"
      }
    },
    {
      "article": "die",
      "word": "Pest",
      "translation": {
        "tr": "Veba",
        "en": "Plague"
      }
    },
    {
      "article": "das",
      "word": "Phänomen",
      "translation": {
        "tr": "fenomen",
        "en": "phenomenon"
      }
    },
    {
      "article": "die",
      "word": "Phantasie",
      "translation": {
        "tr": "hayal gücü",
        "en": "imagination"
      }
    },
    {
      "article": "die",
      "word": "Phase",
      "translation": {
        "tr": "aşama",
        "en": "phase"
      }
    },
    {
      "article": "der",
      "word": "Philosoph",
      "translation": {
        "tr": "filozof",
        "en": "philosopher"
      }
    },
    {
      "article": "die",
      "word": "Philosophie",
      "translation": {
        "tr": "Felsefe",
        "en": "Philosophy"
      }
    },
    {
      "article": "die",
      "word": "Physik",
      "translation": {
        "tr": "Fizik",
        "en": "Physics"
      }
    },
    {
      "article": "der",
      "word": "Physiker",
      "translation": {
        "tr": "Fizikçi",
        "en": "Physicist"
      }
    },
    {
      "article": "der",
      "word": "Pilger",
      "translation": {
        "tr": "Hacı",
        "en": "Pilgrim"
      }
    },
    {
      "article": "der",
      "word": "Pionier",
      "translation": {
        "tr": "Öncü",
        "en": "Pioneer"
      }
    },
    {
      "article": "die",
      "word": "Pipeline",
      "translation": {
        "tr": "boru hattı",
        "en": "pipeline"
      }
    },
    {
      "article": "das",
      "word": "Plädoyer",
      "translation": {
        "tr": "savunma",
        "en": "Plea"
      }
    },
    {
      "article": "die",
      "word": "Plantage",
      "translation": {
        "tr": "plantasyon",
        "en": "plantation"
      }
    },
    {
      "article": "die",
      "word": "Planung",
      "translation": {
        "tr": "Planlama",
        "en": "Planning"
      }
    },
    {
      "article": "das",
      "word": "Plastik",
      "translation": {
        "tr": "Plastik",
        "en": "Plastic"
      }
    },
    {
      "article": "die",
      "word": "Plattform",
      "translation": {
        "tr": "platformu",
        "en": "Platform"
      }
    },
    {
      "article": "der",
      "word": "Platzhalter",
      "translation": {
        "tr": "Yer tutucu",
        "en": "Placeholder"
      }
    },
    {
      "article": "die",
      "word": "Poesie",
      "translation": {
        "tr": "Şiir",
        "en": "Poetry"
      }
    },
    {
      "article": "der",
      "word": "Pole",
      "translation": {
        "tr": "Direkler",
        "en": "Poles"
      }
    },
    {
      "article": "der",
      "word": "Politiker",
      "translation": {
        "tr": "Politikacı",
        "en": "Politician"
      }
    },
    {
      "article": "die",
      "word": "Population",
      "translation": {
        "tr": "Nüfus",
        "en": "Population"
      }
    },
    {
      "article": "das",
      "word": "Portfolio",
      "translation": {
        "tr": "Portföy",
        "en": "Portfolio"
      }
    },
    {
      "article": "das",
      "word": "Porträt",
      "translation": {
        "tr": "Portre",
        "en": "Portrait"
      }
    },
    {
      "article": "die",
      "word": "Pose",
      "translation": {
        "tr": "poz",
        "en": "pose"
      }
    }
  ],
  "C2": [
    {
      "article": "der",
      "word": "Posten",
      "translation": {
        "tr": "Gönderi",
        "en": "Post"
      }
    },
    {
      "article": "das",
      "word": "Potenzial",
      "translation": {
        "tr": "Potansiyel",
        "en": "Potential"
      }
    },
    {
      "article": "das",
      "word": "Präparat",
      "translation": {
        "tr": "hazırlık",
        "en": "preparation"
      }
    },
    {
      "article": "die",
      "word": "Präsidentschaft",
      "translation": {
        "tr": "başkanlık",
        "en": "Presidency"
      }
    },
    {
      "article": "die",
      "word": "Prävention",
      "translation": {
        "tr": "Önleme",
        "en": "Prevention"
      }
    },
    {
      "article": "die",
      "word": "Praxis",
      "translation": {
        "tr": "Alıştırma",
        "en": "Practice"
      }
    },
    {
      "article": "der",
      "word": "Präzedenzfall",
      "translation": {
        "tr": "emsal",
        "en": "Precedent"
      }
    },
    {
      "article": "die",
      "word": "Präzision",
      "translation": {
        "tr": "Hassasiyet",
        "en": "Precision"
      }
    },
    {
      "article": "der",
      "word": "Premier",
      "translation": {
        "tr": "Premier",
        "en": "Premier"
      }
    },
    {
      "article": "die",
      "word": "Premiere",
      "translation": {
        "tr": "Prömiyer",
        "en": "Premiere"
      }
    },
    {
      "article": "der",
      "word": "Premierminister",
      "translation": {
        "tr": "Başbakan",
        "en": "Prime Minister"
      }
    },
    {
      "article": "die",
      "word": "Presse",
      "translation": {
        "tr": "Basın",
        "en": "Press"
      }
    },
    {
      "article": "die",
      "word": "Pressekonferenz",
      "translation": {
        "tr": "Basın toplantısı",
        "en": "Press conference"
      }
    },
    {
      "article": "die",
      "word": "Priorität",
      "translation": {
        "tr": "Öncelik",
        "en": "Priority"
      }
    },
    {
      "article": "die",
      "word": "Privatisierung",
      "translation": {
        "tr": "Özelleştirme",
        "en": "Privatization"
      }
    },
    {
      "article": "die",
      "word": "Privatsphäre",
      "translation": {
        "tr": "Gizlilik",
        "en": "Privacy"
      }
    },
    {
      "article": "das",
      "word": "Privileg",
      "translation": {
        "tr": "Ayrıcalık",
        "en": "Privilege"
      }
    },
    {
      "article": "die",
      "word": "Problematik",
      "translation": {
        "tr": "Sorun",
        "en": "Problem"
      }
    },
    {
      "article": "die",
      "word": "Produktivität",
      "translation": {
        "tr": "Verimlilik",
        "en": "Productivity"
      }
    },
    {
      "article": "der",
      "word": "Produzent",
      "translation": {
        "tr": "yapımcı",
        "en": "producer"
      }
    },
    {
      "article": "der",
      "word": "Profit",
      "translation": {
        "tr": "Kâr",
        "en": "Profit"
      }
    },
    {
      "article": "die",
      "word": "Prognose",
      "translation": {
        "tr": "prognoz",
        "en": "Prognosis"
      }
    },
    {
      "article": "die",
      "word": "Programmierung",
      "translation": {
        "tr": "Programlama",
        "en": "Programming"
      }
    },
    {
      "article": "die",
      "word": "Projektion",
      "translation": {
        "tr": "Projeksiyon",
        "en": "Projection"
      }
    },
    {
      "article": "der",
      "word": "Projektor",
      "translation": {
        "tr": "Projektör",
        "en": "Projector"
      }
    },
    {
      "article": "der",
      "word": "Prominente",
      "translation": {
        "tr": "ünlüler",
        "en": "Celebrities"
      }
    },
    {
      "article": "die",
      "word": "Propaganda",
      "translation": {
        "tr": "propaganda",
        "en": "propaganda"
      }
    },
    {
      "article": "der",
      "word": "Protagonist",
      "translation": {
        "tr": "kahraman",
        "en": "protagonist"
      }
    },
    {
      "article": "das",
      "word": "Protein",
      "translation": {
        "tr": "proteini",
        "en": "Protein"
      }
    },
    {
      "article": "der",
      "word": "Prozess",
      "translation": {
        "tr": "Süreç",
        "en": "Process"
      }
    },
    {
      "article": "der",
      "word": "Prozessor",
      "translation": {
        "tr": "işlemci",
        "en": "processor"
      }
    },
    {
      "article": "die",
      "word": "Psyche",
      "translation": {
        "tr": "Ruh",
        "en": "Psyche"
      }
    },
    {
      "article": "der",
      "word": "Psychologe",
      "translation": {
        "tr": "Psikolog",
        "en": "Psychologist"
      }
    },
    {
      "article": "die",
      "word": "Psychologie",
      "translation": {
        "tr": "Psikoloji",
        "en": "Psychology"
      }
    },
    {
      "article": "der",
      "word": "Puffer",
      "translation": {
        "tr": "Tampon",
        "en": "Buffer"
      }
    },
    {
      "article": "der",
      "word": "Punk",
      "translation": {
        "tr": "Punk",
        "en": "Punk"
      }
    },
    {
      "article": "die",
      "word": "Qualifikation",
      "translation": {
        "tr": "Yeterlilik",
        "en": "Qualification"
      }
    },
    {
      "article": "das",
      "word": "Quartier",
      "translation": {
        "tr": "Çeyrek",
        "en": "Quarter"
      }
    },
    {
      "article": "die",
      "word": "Quote",
      "translation": {
        "tr": "Kota",
        "en": "Quota"
      }
    },
    {
      "article": "das",
      "word": "Radar",
      "translation": {
        "tr": "radar",
        "en": "radar"
      }
    },
    {
      "article": "der",
      "word": "Radius",
      "translation": {
        "tr": "yarıçap",
        "en": "radius"
      }
    },
    {
      "article": "der",
      "word": "Radsport",
      "translation": {
        "tr": "Bisiklete binme",
        "en": "Cycling"
      }
    },
    {
      "article": "die",
      "word": "Rallye",
      "translation": {
        "tr": "miting",
        "en": "Rally"
      }
    },
    {
      "article": "das",
      "word": "Rampenlicht",
      "translation": {
        "tr": "Gündem",
        "en": "Spotlight"
      }
    },
    {
      "article": "der",
      "word": "Raub",
      "translation": {
        "tr": "Soygun",
        "en": "Robbery"
      }
    },
    {
      "article": "die",
      "word": "Räumung",
      "translation": {
        "tr": "Tahliye",
        "en": "Eviction"
      }
    },
    {
      "article": "der",
      "word": "Rausch",
      "translation": {
        "tr": "Zehirlenme",
        "en": "Intoxication"
      }
    },
    {
      "article": "der",
      "word": "Reaktor",
      "translation": {
        "tr": "reaktör",
        "en": "reactor"
      }
    },
    {
      "article": "die",
      "word": "Realisierung",
      "translation": {
        "tr": "Gerçekleşme",
        "en": "Realization"
      }
    },
    {
      "article": "die",
      "word": "Realität",
      "translation": {
        "tr": "Gerçeklik",
        "en": "Reality"
      }
    },
    {
      "article": "die",
      "word": "Recherche",
      "translation": {
        "tr": "Araştırma",
        "en": "Research"
      }
    },
    {
      "article": "die",
      "word": "Rechtfertigung",
      "translation": {
        "tr": "Gerekçe",
        "en": "Justification"
      }
    },
    {
      "article": "der",
      "word": "Rechtsanwalt",
      "translation": {
        "tr": "Avukat",
        "en": "Lawyer"
      }
    },
    {
      "article": "die",
      "word": "Rechtsprechung",
      "translation": {
        "tr": "içtihat",
        "en": "jurisprudence"
      }
    },
    {
      "article": "die",
      "word": "Reduktion",
      "translation": {
        "tr": "Azaltma",
        "en": "Reduction"
      }
    },
    {
      "article": "die",
      "word": "Reduzierung",
      "translation": {
        "tr": "Azaltma",
        "en": "Reduction"
      }
    },
    {
      "article": "das",
      "word": "Referendum",
      "translation": {
        "tr": "Referandum",
        "en": "Referendum"
      }
    },
    {
      "article": "der",
      "word": "Referent",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      }
    },
    {
      "article": "die",
      "word": "Referenz",
      "translation": {
        "tr": "Referans",
        "en": "Reference"
      }
    },
    {
      "article": "die",
      "word": "Reflexion",
      "translation": {
        "tr": "Yansıma",
        "en": "Reflection"
      }
    },
    {
      "article": "die",
      "word": "Reform",
      "translation": {
        "tr": "reform",
        "en": "reform"
      }
    },
    {
      "article": "die",
      "word": "Regelung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Regulation"
      }
    },
    {
      "article": "der",
      "word": "Regenschauer",
      "translation": {
        "tr": "Sağanak yağmur",
        "en": "Rain showers"
      }
    },
    {
      "article": "die",
      "word": "Regierung",
      "translation": {
        "tr": "Hükümet",
        "en": "Government"
      }
    },
    {
      "article": "der",
      "word": "Regierungschef",
      "translation": {
        "tr": "Hükümet Başkanı",
        "en": "Head of Government"
      }
    },
    {
      "article": "das",
      "word": "Regime",
      "translation": {
        "tr": "rejim",
        "en": "regime"
      }
    },
    {
      "article": "der",
      "word": "Regisseur",
      "translation": {
        "tr": "Direktör",
        "en": "Director"
      }
    },
    {
      "article": "das",
      "word": "Register",
      "translation": {
        "tr": "Kayıt ol",
        "en": "Register"
      }
    },
    {
      "article": "das",
      "word": "Reich",
      "translation": {
        "tr": "Zengin",
        "en": "Rich"
      }
    },
    {
      "article": "der",
      "word": "Reichtum",
      "translation": {
        "tr": "zenginlik",
        "en": "wealth"
      }
    },
    {
      "article": "die",
      "word": "Reichweite",
      "translation": {
        "tr": "Aralık",
        "en": "Range"
      }
    },
    {
      "article": "die",
      "word": "Reihenfolge",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      }
    },
    {
      "article": "die",
      "word": "Reinheit",
      "translation": {
        "tr": "saflık",
        "en": "Purity"
      }
    },
    {
      "article": "der",
      "word": "Reisende",
      "translation": {
        "tr": "gezginler",
        "en": "travelers"
      }
    },
    {
      "article": "der",
      "word": "Reiz",
      "translation": {
        "tr": "uyarıcı",
        "en": "stimulus"
      }
    },
    {
      "article": "der",
      "word": "Rektor",
      "translation": {
        "tr": "Rektör",
        "en": "Rector"
      }
    },
    {
      "article": "die",
      "word": "Relation",
      "translation": {
        "tr": "ilişki",
        "en": "relation"
      }
    },
    {
      "article": "die",
      "word": "Relevanz",
      "translation": {
        "tr": "Alaka düzeyi",
        "en": "Relevance"
      }
    },
    {
      "article": "das",
      "word": "Relief",
      "translation": {
        "tr": "kabartma",
        "en": "relief"
      }
    },
    {
      "article": "die",
      "word": "Rendite",
      "translation": {
        "tr": "Dönüş",
        "en": "Return"
      }
    },
    {
      "article": "die",
      "word": "Reproduktion",
      "translation": {
        "tr": "Üreme",
        "en": "Reproduction"
      }
    },
    {
      "article": "die",
      "word": "Republik",
      "translation": {
        "tr": "Cumhuriyet",
        "en": "Republic"
      }
    },
    {
      "article": "der",
      "word": "Republikaner",
      "translation": {
        "tr": "Cumhuriyetçiler",
        "en": "Republicans"
      }
    },
    {
      "article": "die",
      "word": "Reserve",
      "translation": {
        "tr": "Rezerv",
        "en": "Reserve"
      }
    },
    {
      "article": "die",
      "word": "Reservierung",
      "translation": {
        "tr": "Rezervasyon",
        "en": "Reservation"
      }
    },
    {
      "article": "die",
      "word": "Residenz",
      "translation": {
        "tr": "İkamet",
        "en": "Residence"
      }
    },
    {
      "article": "das",
      "word": "Resort",
      "translation": {
        "tr": "çare",
        "en": "resort"
      }
    },
    {
      "article": "das",
      "word": "Ressort",
      "translation": {
        "tr": "departman",
        "en": "department"
      }
    },
    {
      "article": "die",
      "word": "Ressource",
      "translation": {
        "tr": "Kaynak",
        "en": "Resource"
      }
    },
    {
      "article": "das",
      "word": "Resultat",
      "translation": {
        "tr": "Sonuç",
        "en": "Result"
      }
    },
    {
      "article": "die",
      "word": "Reue",
      "translation": {
        "tr": "pişmanlık",
        "en": "Regret"
      }
    },
    {
      "article": "die",
      "word": "Revolution",
      "translation": {
        "tr": "devrim",
        "en": "revolution"
      }
    },
    {
      "article": "die",
      "word": "Rezession",
      "translation": {
        "tr": "Durgunluk",
        "en": "Recession"
      }
    },
    {
      "article": "die",
      "word": "Rhetorik",
      "translation": {
        "tr": "Retorik",
        "en": "Rhetoric"
      }
    },
    {
      "article": "das",
      "word": "Rheuma",
      "translation": {
        "tr": "Romatizma",
        "en": "Rheumatism"
      }
    },
    {
      "article": "der",
      "word": "Rhythmus",
      "translation": {
        "tr": "ritim",
        "en": "rhythm"
      }
    },
    {
      "article": "die",
      "word": "Richtlinie",
      "translation": {
        "tr": "Politika",
        "en": "Policy"
      }
    },
    {
      "article": "das",
      "word": "Riff",
      "translation": {
        "tr": "Resif",
        "en": "Reef"
      }
    },
    {
      "article": "das",
      "word": "Ringen",
      "translation": {
        "tr": "Güreş",
        "en": "Wrestling"
      }
    },
    {
      "article": "das",
      "word": "Ritual",
      "translation": {
        "tr": "ritüel",
        "en": "ritual"
      }
    },
    {
      "article": "der",
      "word": "Rivale",
      "translation": {
        "tr": "Rakip",
        "en": "Rival"
      }
    },
    {
      "article": "der",
      "word": "Rohstoff",
      "translation": {
        "tr": "hammadde",
        "en": "raw material"
      }
    },
    {
      "article": "die",
      "word": "Romanze",
      "translation": {
        "tr": "romantik",
        "en": "Romance"
      }
    },
    {
      "article": "der",
      "word": "Römer",
      "translation": {
        "tr": "Romalılar",
        "en": "Romans"
      }
    },
    {
      "article": "die",
      "word": "Rotation",
      "translation": {
        "tr": "rotasyon",
        "en": "rotation"
      }
    },
    {
      "article": "die",
      "word": "Routine",
      "translation": {
        "tr": "rutin",
        "en": "routine"
      }
    },
    {
      "article": "die",
      "word": "Rubrik",
      "translation": {
        "tr": "Değerlendirme tablosu",
        "en": "Rubric"
      }
    },
    {
      "article": "der",
      "word": "Rückgang",
      "translation": {
        "tr": "düşüş",
        "en": "decline"
      }
    },
    {
      "article": "der",
      "word": "Rückhalt",
      "translation": {
        "tr": "destek",
        "en": "support"
      }
    },
    {
      "article": "die",
      "word": "Rückkehr",
      "translation": {
        "tr": "Dönüş",
        "en": "Return"
      }
    },
    {
      "article": "die",
      "word": "Rückmeldung",
      "translation": {
        "tr": "Geribildirim",
        "en": "Feedback"
      }
    },
    {
      "article": "der",
      "word": "Rückruf",
      "translation": {
        "tr": "Geri arama",
        "en": "Callback"
      }
    },
    {
      "article": "die",
      "word": "Rücksicht",
      "translation": {
        "tr": "dikkate alma",
        "en": "Consideration"
      }
    },
    {
      "article": "der",
      "word": "Rückstand",
      "translation": {
        "tr": "birikmiş iş yığını",
        "en": "backlog"
      }
    },
    {
      "article": "der",
      "word": "Rücktritt",
      "translation": {
        "tr": "istifa",
        "en": "Resignation"
      }
    },
    {
      "article": "der",
      "word": "Rückzug",
      "translation": {
        "tr": "geri çekilmek",
        "en": "retreat"
      }
    },
    {
      "article": "der",
      "word": "Ruhm",
      "translation": {
        "tr": "Şöhret",
        "en": "Fame"
      }
    },
    {
      "article": "die",
      "word": "Ruine",
      "translation": {
        "tr": "harabe",
        "en": "Ruin"
      }
    },
    {
      "article": "die",
      "word": "Runde",
      "translation": {
        "tr": "yuvarlak",
        "en": "round"
      }
    },
    {
      "article": "der",
      "word": "Rundfunk",
      "translation": {
        "tr": "Yayıncılık",
        "en": "Broadcasting"
      }
    },
    {
      "article": "der",
      "word": "Russe",
      "translation": {
        "tr": "Rusça",
        "en": "Russian"
      }
    },
    {
      "article": "die",
      "word": "Rutsche",
      "translation": {
        "tr": "slayt",
        "en": "slide"
      }
    },
    {
      "article": "der",
      "word": "Saal",
      "translation": {
        "tr": "salon",
        "en": "hall"
      }
    },
    {
      "article": "das",
      "word": "Saatgut",
      "translation": {
        "tr": "Tohumlar",
        "en": "Seeds"
      }
    },
    {
      "article": "der",
      "word": "Sachverhalt",
      "translation": {
        "tr": "Gerçekler",
        "en": "Facts"
      }
    },
    {
      "article": "der",
      "word": "Safe",
      "translation": {
        "tr": "Güvenli",
        "en": "Safe"
      }
    },
    {
      "article": "das",
      "word": "Sagen",
      "translation": {
        "tr": "Söyle",
        "en": "Say"
      }
    },
    {
      "article": "die",
      "word": "Saison",
      "translation": {
        "tr": "sezon",
        "en": "season"
      }
    },
    {
      "article": "der",
      "word": "Salon",
      "translation": {
        "tr": "salon",
        "en": "Salon"
      }
    },
    {
      "article": "der",
      "word": "Satellit",
      "translation": {
        "tr": "Uydu",
        "en": "Satellite"
      }
    },
    {
      "article": "der",
      "word": "Säugling",
      "translation": {
        "tr": "bebek",
        "en": "infant"
      }
    },
    {
      "article": "die",
      "word": "Säule",
      "translation": {
        "tr": "sütun",
        "en": "pillar"
      }
    },
    {
      "article": "die",
      "word": "Säure",
      "translation": {
        "tr": "Asit",
        "en": "Acid"
      }
    },
    {
      "article": "der",
      "word": "Schädel",
      "translation": {
        "tr": "kafatası",
        "en": "skull"
      }
    },
    {
      "article": "der",
      "word": "Schadenersatz",
      "translation": {
        "tr": "Hasarlar",
        "en": "Damages"
      }
    },
    {
      "article": "die",
      "word": "Scham",
      "translation": {
        "tr": "Utanç verici",
        "en": "Shame"
      }
    },
    {
      "article": "die",
      "word": "Schande",
      "translation": {
        "tr": "Utanç verici",
        "en": "Shame"
      }
    },
    {
      "article": "die",
      "word": "Schätzung",
      "translation": {
        "tr": "Tahmin",
        "en": "Estimate"
      }
    },
    {
      "article": "die",
      "word": "Schau",
      "translation": {
        "tr": "Bak",
        "en": "Look"
      }
    },
    {
      "article": "der",
      "word": "Schauer",
      "translation": {
        "tr": "Duş",
        "en": "Shower"
      }
    },
    {
      "article": "die",
      "word": "Scheidung",
      "translation": {
        "tr": "Boşanma",
        "en": "Divorce"
      }
    },
    {
      "article": "das",
      "word": "Schema",
      "translation": {
        "tr": "Şema",
        "en": "Scheme"
      }
    },
    {
      "article": "der",
      "word": "Scherz",
      "translation": {
        "tr": "Şaka",
        "en": "Joke"
      }
    },
    {
      "article": "die",
      "word": "Scheu",
      "translation": {
        "tr": "Utangaç",
        "en": "Shy"
      }
    },
    {
      "article": "die",
      "word": "Schicht",
      "translation": {
        "tr": "katman",
        "en": "layer"
      }
    },
    {
      "article": "das",
      "word": "Schicksal",
      "translation": {
        "tr": "Kader",
        "en": "Fate"
      }
    },
    {
      "article": "der",
      "word": "Schiedsrichter",
      "translation": {
        "tr": "Hakem",
        "en": "Referee"
      }
    },
    {
      "article": "der",
      "word": "Schilling",
      "translation": {
        "tr": "Şilin",
        "en": "Shilling"
      }
    },
    {
      "article": "die",
      "word": "Schlacht",
      "translation": {
        "tr": "savaş",
        "en": "battle"
      }
    },
    {
      "article": "das",
      "word": "Schlachtfeld",
      "translation": {
        "tr": "Savaş Alanı",
        "en": "Battlefield"
      }
    },
    {
      "article": "der",
      "word": "Schlag",
      "translation": {
        "tr": "Darbe",
        "en": "Blow"
      }
    },
    {
      "article": "der",
      "word": "Schläger",
      "translation": {
        "tr": "Eşkıya",
        "en": "Thug"
      }
    },
    {
      "article": "die",
      "word": "Schlägerei",
      "translation": {
        "tr": "Kavga",
        "en": "Brawl"
      }
    },
    {
      "article": "die",
      "word": "Schlagzeile",
      "translation": {
        "tr": "Başlık",
        "en": "Headline"
      }
    },
    {
      "article": "die",
      "word": "Schleuse",
      "translation": {
        "tr": "kilit",
        "en": "lock"
      }
    },
    {
      "article": "die",
      "word": "Schließung",
      "translation": {
        "tr": "Kapatma",
        "en": "Closure"
      }
    },
    {
      "article": "der",
      "word": "Schluss",
      "translation": {
        "tr": "Bitiş",
        "en": "End"
      }
    },
    {
      "article": "die",
      "word": "Schnittstelle",
      "translation": {
        "tr": "Arayüz",
        "en": "Interface"
      }
    },
    {
      "article": "der",
      "word": "Schock",
      "translation": {
        "tr": "Şok",
        "en": "Shock"
      }
    },
    {
      "article": "die",
      "word": "Schönheit",
      "translation": {
        "tr": "Güzellik",
        "en": "Beauty"
      }
    },
    {
      "article": "der",
      "word": "Schöpfer",
      "translation": {
        "tr": "Yaratıcı",
        "en": "Creator"
      }
    },
    {
      "article": "die",
      "word": "Schreibweise",
      "translation": {
        "tr": "Gösterim",
        "en": "Notation"
      }
    },
    {
      "article": "die",
      "word": "Schrift",
      "translation": {
        "tr": "yazı tipi",
        "en": "font"
      }
    },
    {
      "article": "der",
      "word": "Schriftsteller",
      "translation": {
        "tr": "yazar",
        "en": "Writer"
      }
    },
    {
      "article": "der",
      "word": "Schrott",
      "translation": {
        "tr": "Hurda",
        "en": "Scrap"
      }
    },
    {
      "article": "die",
      "word": "Schuld",
      "translation": {
        "tr": "suçluluk",
        "en": "guilt"
      }
    },
    {
      "article": "die",
      "word": "Schwerkraft",
      "translation": {
        "tr": "Yerçekimi",
        "en": "Gravity"
      }
    },
    {
      "article": "der",
      "word": "Schwerpunkt",
      "translation": {
        "tr": "Odaklanma",
        "en": "Focus"
      }
    },
    {
      "article": "die",
      "word": "Schwingung",
      "translation": {
        "tr": "Titreşim",
        "en": "Vibration"
      }
    },
    {
      "article": "der",
      "word": "Schwung",
      "translation": {
        "tr": "ivme",
        "en": "Momentum"
      }
    },
    {
      "article": "die",
      "word": "Seele",
      "translation": {
        "tr": "ruh",
        "en": "soul"
      }
    },
    {
      "article": "der",
      "word": "Segen",
      "translation": {
        "tr": "Nimet",
        "en": "Blessing"
      }
    },
    {
      "article": "das",
      "word": "Segment",
      "translation": {
        "tr": "bölüm",
        "en": "segment"
      }
    },
    {
      "article": "die",
      "word": "Sehnsucht",
      "translation": {
        "tr": "Özlem",
        "en": "Longing"
      }
    },
    {
      "article": "die",
      "word": "Seide",
      "translation": {
        "tr": "İpek",
        "en": "Silk"
      }
    },
    {
      "article": "das",
      "word": "Sein",
      "translation": {
        "tr": "Onun",
        "en": "His"
      }
    },
    {
      "article": "die",
      "word": "Sektion",
      "translation": {
        "tr": "Bölüm",
        "en": "Section"
      }
    },
    {
      "article": "der",
      "word": "Sektor",
      "translation": {
        "tr": "Sektör",
        "en": "Sector"
      }
    },
    {
      "article": "die",
      "word": "Selbstständigkeit",
      "translation": {
        "tr": "Bağımsızlık",
        "en": "Independence"
      }
    },
    {
      "article": "der",
      "word": "Senat",
      "translation": {
        "tr": "Senato",
        "en": "Senate"
      }
    },
    {
      "article": "der",
      "word": "Senator",
      "translation": {
        "tr": "Senatör",
        "en": "Senator"
      }
    },
    {
      "article": "die",
      "word": "Senkung",
      "translation": {
        "tr": "İndirme",
        "en": "Lowering"
      }
    },
    {
      "article": "die",
      "word": "Sequenz",
      "translation": {
        "tr": "sıra",
        "en": "sequence"
      }
    },
    {
      "article": "der",
      "word": "Service",
      "translation": {
        "tr": "Hizmet",
        "en": "Service"
      }
    },
    {
      "article": "die",
      "word": "Sexualität",
      "translation": {
        "tr": "Cinsellik",
        "en": "Sexuality"
      }
    },
    {
      "article": "die",
      "word": "Sicherung",
      "translation": {
        "tr": "Yedekleme",
        "en": "Backup"
      }
    },
    {
      "article": "die",
      "word": "Sicht",
      "translation": {
        "tr": "görünüm",
        "en": "view"
      }
    },
    {
      "article": "die",
      "word": "Simulation",
      "translation": {
        "tr": "Simülasyon",
        "en": "Simulation"
      }
    },
    {
      "article": "die",
      "word": "Single",
      "translation": {
        "tr": "Tek",
        "en": "Single"
      }
    },
    {
      "article": "der",
      "word": "Sir",
      "translation": {
        "tr": "Efendim",
        "en": "Sir"
      }
    },
    {
      "article": "die",
      "word": "Skala",
      "translation": {
        "tr": "ölçek",
        "en": "scale"
      }
    },
    {
      "article": "der",
      "word": "Skandal",
      "translation": {
        "tr": "Skandal",
        "en": "Scandal"
      }
    },
    {
      "article": "das",
      "word": "Skelett",
      "translation": {
        "tr": "İskelet",
        "en": "Skeleton"
      }
    },
    {
      "article": "die",
      "word": "Skepsis",
      "translation": {
        "tr": "şüphecilik",
        "en": "Skepticism"
      }
    },
    {
      "article": "die",
      "word": "Sklaverei",
      "translation": {
        "tr": "Kölelik",
        "en": "Slavery"
      }
    },
    {
      "article": "das",
      "word": "Skript",
      "translation": {
        "tr": "senaryo",
        "en": "script"
      }
    },
    {
      "article": "die",
      "word": "Skulptur",
      "translation": {
        "tr": "Heykel",
        "en": "Sculpture"
      }
    },
    {
      "article": "die",
      "word": "Software",
      "translation": {
        "tr": "Yazılım",
        "en": "Software"
      }
    },
    {
      "article": "die",
      "word": "Solidarität",
      "translation": {
        "tr": "Dayanışma",
        "en": "Solidarity"
      }
    },
    {
      "article": "das",
      "word": "Solo",
      "translation": {
        "tr": "Yalnız",
        "en": "Solo"
      }
    },
    {
      "article": "die",
      "word": "Sonde",
      "translation": {
        "tr": "sonda",
        "en": "probe"
      }
    },
    {
      "article": "die",
      "word": "Souveränität",
      "translation": {
        "tr": "Egemenlik",
        "en": "Sovereignty"
      }
    },
    {
      "article": "der",
      "word": "Sozialarbeiter",
      "translation": {
        "tr": "Sosyal hizmet uzmanı",
        "en": "Social worker"
      }
    },
    {
      "article": "der",
      "word": "Sozialdemokrat",
      "translation": {
        "tr": "Sosyal Demokrat",
        "en": "Social Democrat"
      }
    },
    {
      "article": "die",
      "word": "Soziologie",
      "translation": {
        "tr": "Sosyoloji",
        "en": "Sociology"
      }
    },
    {
      "article": "der",
      "word": "Spalt",
      "translation": {
        "tr": "boşluk",
        "en": "gap"
      }
    },
    {
      "article": "die",
      "word": "Spalte",
      "translation": {
        "tr": "Sütun",
        "en": "Column"
      }
    },
    {
      "article": "die",
      "word": "Spaltung",
      "translation": {
        "tr": "Bölüm",
        "en": "Division"
      }
    },
    {
      "article": "der",
      "word": "Spam",
      "translation": {
        "tr": "Spam",
        "en": "Spam"
      }
    },
    {
      "article": "die",
      "word": "Spannung",
      "translation": {
        "tr": "gerilim",
        "en": "tension"
      }
    },
    {
      "article": "die",
      "word": "Spannweite",
      "translation": {
        "tr": "Kanat açıklığı",
        "en": "Wingspan"
      }
    },
    {
      "article": "das",
      "word": "Spektakel",
      "translation": {
        "tr": "gösteri",
        "en": "spectacle"
      }
    },
    {
      "article": "das",
      "word": "Spektrum",
      "translation": {
        "tr": "Spektrum",
        "en": "Spectrum"
      }
    },
    {
      "article": "die",
      "word": "Spekulation",
      "translation": {
        "tr": "spekülasyon",
        "en": "speculation"
      }
    },
    {
      "article": "die",
      "word": "Spezies",
      "translation": {
        "tr": "türler",
        "en": "species"
      }
    },
    {
      "article": "die",
      "word": "Spezifikation",
      "translation": {
        "tr": "Şartname",
        "en": "Specification"
      }
    },
    {
      "article": "der",
      "word": "Spielraum",
      "translation": {
        "tr": "hareket alanı",
        "en": "leeway"
      }
    },
    {
      "article": "der",
      "word": "Spion",
      "translation": {
        "tr": "Casus",
        "en": "Spy"
      }
    },
    {
      "article": "die",
      "word": "Spionage",
      "translation": {
        "tr": "Casusluk",
        "en": "Espionage"
      }
    },
    {
      "article": "der",
      "word": "Spott",
      "translation": {
        "tr": "alay",
        "en": "mockery"
      }
    },
    {
      "article": "der",
      "word": "Sprengstoff",
      "translation": {
        "tr": "Patlayıcılar",
        "en": "Explosives"
      }
    },
    {
      "article": "der",
      "word": "Spruch",
      "translation": {
        "tr": "söyleyerek",
        "en": "saying"
      }
    },
    {
      "article": "der",
      "word": "Spuk",
      "translation": {
        "tr": "Ürkütücü",
        "en": "Spooky"
      }
    },
    {
      "article": "der",
      "word": "Staatsanwalt",
      "translation": {
        "tr": "Savcı",
        "en": "Prosecutor"
      }
    },
    {
      "article": "die",
      "word": "Staatsbürgerschaft",
      "translation": {
        "tr": "Vatandaşlık",
        "en": "Citizenship"
      }
    },
    {
      "article": "die",
      "word": "Stabilität",
      "translation": {
        "tr": "Kararlılık",
        "en": "Stability"
      }
    },
    {
      "article": "das",
      "word": "Stadium",
      "translation": {
        "tr": "sahne",
        "en": "stage"
      }
    },
    {
      "article": "der",
      "word": "Stadtrat",
      "translation": {
        "tr": "Kent Konseyi",
        "en": "City Council"
      }
    },
    {
      "article": "der",
      "word": "Stamm",
      "translation": {
        "tr": "kabile",
        "en": "tribe"
      }
    },
    {
      "article": "der",
      "word": "Stand",
      "translation": {
        "tr": "Stand",
        "en": "Stand"
      }
    },
    {
      "article": "der",
      "word": "Standard",
      "translation": {
        "tr": "Varsayılan",
        "en": "Default"
      }
    },
    {
      "article": "der",
      "word": "Standort",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      }
    },
    {
      "article": "der",
      "word": "Standpunkt",
      "translation": {
        "tr": "bakış açısı",
        "en": "point of view"
      }
    },
    {
      "article": "die",
      "word": "Starre",
      "translation": {
        "tr": "Sert",
        "en": "Rigid"
      }
    },
    {
      "article": "die",
      "word": "Statistik",
      "translation": {
        "tr": "İstatistikler",
        "en": "Statistics"
      }
    },
    {
      "article": "die",
      "word": "Statue",
      "translation": {
        "tr": "Heykel",
        "en": "Statue"
      }
    },
    {
      "article": "der",
      "word": "Status",
      "translation": {
        "tr": "durum",
        "en": "status"
      }
    },
    {
      "article": "die",
      "word": "Steigerung",
      "translation": {
        "tr": "Artış",
        "en": "Increase"
      }
    },
    {
      "article": "die",
      "word": "Steigung",
      "translation": {
        "tr": "eğim",
        "en": "slope"
      }
    },
    {
      "article": "die",
      "word": "Stellung",
      "translation": {
        "tr": "konum",
        "en": "position"
      }
    },
    {
      "article": "die",
      "word": "Stellungnahme",
      "translation": {
        "tr": "Görüş",
        "en": "Opinion"
      }
    },
    {
      "article": "der",
      "word": "Stellvertreter",
      "translation": {
        "tr": "Yardımcısı",
        "en": "Deputy"
      }
    },
    {
      "article": "der",
      "word": "Steuerberater",
      "translation": {
        "tr": "Vergi danışmanı",
        "en": "Tax advisor"
      }
    },
    {
      "article": "die",
      "word": "Steuerung",
      "translation": {
        "tr": "Kontrol",
        "en": "Control"
      }
    },
    {
      "article": "der",
      "word": "Steuerzahler",
      "translation": {
        "tr": "Vergi mükellefi",
        "en": "Taxpayer"
      }
    },
    {
      "article": "der",
      "word": "Stich",
      "translation": {
        "tr": "Dikiş",
        "en": "Stitch"
      }
    },
    {
      "article": "die",
      "word": "Stichprobe",
      "translation": {
        "tr": "Örnek",
        "en": "Sample"
      }
    },
    {
      "article": "das",
      "word": "Stichwort",
      "translation": {
        "tr": "Anahtar kelime",
        "en": "Keyword"
      }
    },
    {
      "article": "der",
      "word": "Stickstoff",
      "translation": {
        "tr": "Azot",
        "en": "Nitrogen"
      }
    },
    {
      "article": "die",
      "word": "Stiftung",
      "translation": {
        "tr": "Vakıf",
        "en": "Foundation"
      }
    },
    {
      "article": "der",
      "word": "Stil",
      "translation": {
        "tr": "stil",
        "en": "style"
      }
    },
    {
      "article": "die",
      "word": "Stille",
      "translation": {
        "tr": "Sessizlik",
        "en": "Silence"
      }
    },
    {
      "article": "der",
      "word": "Stimmzettel",
      "translation": {
        "tr": "oy pusulası",
        "en": "Ballot"
      }
    },
    {
      "article": "das",
      "word": "Stipendium",
      "translation": {
        "tr": "Burs",
        "en": "Scholarship"
      }
    },
    {
      "article": "der",
      "word": "Stoffwechsel",
      "translation": {
        "tr": "Metabolizma",
        "en": "Metabolism"
      }
    },
    {
      "article": "der",
      "word": "Stolz",
      "translation": {
        "tr": "Gurur",
        "en": "Pride"
      }
    },
    {
      "article": "die",
      "word": "Störung",
      "translation": {
        "tr": "Rahatsızlık",
        "en": "Disturbance"
      }
    },
    {
      "article": "die",
      "word": "Straftat",
      "translation": {
        "tr": "suç",
        "en": "crime"
      }
    },
    {
      "article": "der",
      "word": "Straftäter",
      "translation": {
        "tr": "suçlular",
        "en": "criminals"
      }
    },
    {
      "article": "die",
      "word": "Strafverfolgung",
      "translation": {
        "tr": "Kanun yaptırımı",
        "en": "Law enforcement"
      }
    },
    {
      "article": "die",
      "word": "Strahlung",
      "translation": {
        "tr": "Radyasyon",
        "en": "Radiation"
      }
    },
    {
      "article": "die",
      "word": "Strategie",
      "translation": {
        "tr": "Strateji",
        "en": "Strategy"
      }
    },
    {
      "article": "der",
      "word": "Strauß",
      "translation": {
        "tr": "Devekuşu",
        "en": "Ostrich"
      }
    },
    {
      "article": "das",
      "word": "Streben",
      "translation": {
        "tr": "Çabala",
        "en": "Strive"
      }
    },
    {
      "article": "die",
      "word": "Strömung",
      "translation": {
        "tr": "Akış",
        "en": "Flow"
      }
    },
    {
      "article": "die",
      "word": "Struktur",
      "translation": {
        "tr": "Yapı",
        "en": "Structure"
      }
    },
    {
      "article": "die",
      "word": "Studie",
      "translation": {
        "tr": "çalışma",
        "en": "Study"
      }
    },
    {
      "article": "der",
      "word": "Studiengang",
      "translation": {
        "tr": "Çalışma kursu",
        "en": "Course of study"
      }
    },
    {
      "article": "das",
      "word": "Studium",
      "translation": {
        "tr": "çalışma",
        "en": "Study"
      }
    },
    {
      "article": "der",
      "word": "Stürmer",
      "translation": {
        "tr": "Forvet",
        "en": "Striker"
      }
    },
    {
      "article": "der",
      "word": "Sturz",
      "translation": {
        "tr": "Güz",
        "en": "Fall"
      }
    },
    {
      "article": "die",
      "word": "Stütze",
      "translation": {
        "tr": "Destek",
        "en": "Support"
      }
    },
    {
      "article": "die",
      "word": "Substanz",
      "translation": {
        "tr": "madde",
        "en": "substance"
      }
    },
    {
      "article": "das",
      "word": "Substrat",
      "translation": {
        "tr": "Yüzey",
        "en": "Substrate"
      }
    },
    {
      "article": "die",
      "word": "Subvention",
      "translation": {
        "tr": "Sübvansiyon",
        "en": "Subsidy"
      }
    },
    {
      "article": "die",
      "word": "Sucht",
      "translation": {
        "tr": "Bağımlılık",
        "en": "Addiction"
      }
    },
    {
      "article": "die",
      "word": "Suite",
      "translation": {
        "tr": "süit",
        "en": "suite"
      }
    },
    {
      "article": "der",
      "word": "Sumpf",
      "translation": {
        "tr": "bataklık",
        "en": "swamp"
      }
    },
    {
      "article": "die",
      "word": "Synthese",
      "translation": {
        "tr": "Sentez",
        "en": "Synthesis"
      }
    },
    {
      "article": "das",
      "word": "Szenario",
      "translation": {
        "tr": "Senaryo",
        "en": "Scenario"
      }
    },
    {
      "article": "der",
      "word": "Tadel",
      "translation": {
        "tr": "Suçlama",
        "en": "Blame"
      }
    },
    {
      "article": "die",
      "word": "Tagesmutter",
      "translation": {
        "tr": "çocuk bakıcısı",
        "en": "childminder"
      }
    },
    {
      "article": "die",
      "word": "Tagesordnung",
      "translation": {
        "tr": "Gündem",
        "en": "Agenda"
      }
    },
    {
      "article": "die",
      "word": "Taktik",
      "translation": {
        "tr": "Taktikler",
        "en": "Tactics"
      }
    },
    {
      "article": "der",
      "word": "Tarif",
      "translation": {
        "tr": "Tarife",
        "en": "Tariff"
      }
    },
    {
      "article": "die",
      "word": "Tätigkeit",
      "translation": {
        "tr": "aktivite",
        "en": "activity"
      }
    },
    {
      "article": "der",
      "word": "Tatort",
      "translation": {
        "tr": "Suç mahalli",
        "en": "Crime scene"
      }
    },
    {
      "article": "die",
      "word": "Technologie",
      "translation": {
        "tr": "Teknoloji",
        "en": "Technology"
      }
    },
    {
      "article": "die",
      "word": "Teilung",
      "translation": {
        "tr": "bölme",
        "en": "division"
      }
    },
    {
      "article": "die",
      "word": "Tendenz",
      "translation": {
        "tr": "eğilim",
        "en": "tendency"
      }
    },
    {
      "article": "der",
      "word": "Tenor",
      "translation": {
        "tr": "Tenor",
        "en": "Tenor"
      }
    },
    {
      "article": "das",
      "word": "Territorium",
      "translation": {
        "tr": "bölge",
        "en": "territory"
      }
    },
    {
      "article": "der",
      "word": "Terror",
      "translation": {
        "tr": "Terör",
        "en": "Terror"
      }
    },
    {
      "article": "das",
      "word": "Testament",
      "translation": {
        "tr": "irade",
        "en": "Will"
      }
    },
    {
      "article": "die",
      "word": "Theorie",
      "translation": {
        "tr": "Teori",
        "en": "Theory"
      }
    },
    {
      "article": "die",
      "word": "Therapie",
      "translation": {
        "tr": "Terapi",
        "en": "Therapy"
      }
    },
    {
      "article": "die",
      "word": "These",
      "translation": {
        "tr": "Tez",
        "en": "Thesis"
      }
    },
    {
      "article": "der",
      "word": "Thriller",
      "translation": {
        "tr": "Gerilim",
        "en": "Thriller"
      }
    },
    {
      "article": "der",
      "word": "Thron",
      "translation": {
        "tr": "taht",
        "en": "throne"
      }
    },
    {
      "article": "die",
      "word": "Tierwelt",
      "translation": {
        "tr": "yaban hayatı",
        "en": "wildlife"
      }
    },
    {
      "article": "das",
      "word": "Timing",
      "translation": {
        "tr": "Zamanlama",
        "en": "Timing"
      }
    },
    {
      "article": "die",
      "word": "Toleranz",
      "translation": {
        "tr": "Hoşgörü",
        "en": "Tolerance"
      }
    },
    {
      "article": "der",
      "word": "Tonfall",
      "translation": {
        "tr": "Ses tonu",
        "en": "Tone of voice"
      }
    },
    {
      "article": "das",
      "word": "Top",
      "translation": {
        "tr": "Harika",
        "en": "Great"
      }
    },
    {
      "article": "der",
      "word": "Tornado",
      "translation": {
        "tr": "Kasırga",
        "en": "Tornado"
      }
    },
    {
      "article": "der",
      "word": "Torwart",
      "translation": {
        "tr": "Kaleci",
        "en": "Goalkeeper"
      }
    },
    {
      "article": "der",
      "word": "Tote",
      "translation": {
        "tr": "ölü",
        "en": "dead"
      }
    },
    {
      "article": "der",
      "word": "Tourismus",
      "translation": {
        "tr": "Turizm",
        "en": "Tourism"
      }
    },
    {
      "article": "der",
      "word": "Träger",
      "translation": {
        "tr": "Taşıyıcı",
        "en": "Carrier"
      }
    },
    {
      "article": "die",
      "word": "Trägheit",
      "translation": {
        "tr": "eylemsizlik",
        "en": "inertia"
      }
    },
    {
      "article": "die",
      "word": "Tragödie",
      "translation": {
        "tr": "Trajedi",
        "en": "Tragedy"
      }
    },
    {
      "article": "die",
      "word": "Transaktion",
      "translation": {
        "tr": "işlem",
        "en": "transaction"
      }
    },
    {
      "article": "der",
      "word": "Transfer",
      "translation": {
        "tr": "aktarma",
        "en": "transfer"
      }
    },
    {
      "article": "die",
      "word": "Transformation",
      "translation": {
        "tr": "Dönüşüm",
        "en": "Transformation"
      }
    },
    {
      "article": "die",
      "word": "Transparenz",
      "translation": {
        "tr": "Şeffaflık",
        "en": "Transparency"
      }
    },
    {
      "article": "die",
      "word": "Trauer",
      "translation": {
        "tr": "Yas",
        "en": "Mourning"
      }
    },
    {
      "article": "das",
      "word": "Trauma",
      "translation": {
        "tr": "travma",
        "en": "trauma"
      }
    },
    {
      "article": "die",
      "word": "Trauung",
      "translation": {
        "tr": "Düğün töreni",
        "en": "Wedding ceremony"
      }
    },
    {
      "article": "der",
      "word": "Treffer",
      "translation": {
        "tr": "Vur",
        "en": "Hit"
      }
    },
    {
      "article": "der",
      "word": "Treibstoff",
      "translation": {
        "tr": "Yakıt",
        "en": "Fuel"
      }
    },
    {
      "article": "der",
      "word": "Tresor",
      "translation": {
        "tr": "Güvenli",
        "en": "Safe"
      }
    },
    {
      "article": "das",
      "word": "Tribunal",
      "translation": {
        "tr": "Mahkeme",
        "en": "Tribunal"
      }
    },
    {
      "article": "der",
      "word": "Tribut",
      "translation": {
        "tr": "haraç",
        "en": "Tribute"
      }
    },
    {
      "article": "die",
      "word": "Trilogie",
      "translation": {
        "tr": "üçleme",
        "en": "trilogy"
      }
    },
    {
      "article": "der",
      "word": "Triumph",
      "translation": {
        "tr": "Zafer",
        "en": "Triumph"
      }
    },
    {
      "article": "der",
      "word": "Trost",
      "translation": {
        "tr": "teselli",
        "en": "Consolation"
      }
    },
    {
      "article": "die",
      "word": "Tugend",
      "translation": {
        "tr": "Fazilet",
        "en": "Virtue"
      }
    },
    {
      "article": "das",
      "word": "Übel",
      "translation": {
        "tr": "Kötülük",
        "en": "Evil"
      }
    },
    {
      "article": "die",
      "word": "Übelkeit",
      "translation": {
        "tr": "Bulantı",
        "en": "Nausea"
      }
    },
    {
      "article": "der",
      "word": "Überblick",
      "translation": {
        "tr": "Genel Bakış",
        "en": "Overview"
      }
    },
    {
      "article": "die",
      "word": "Übereinstimmung",
      "translation": {
        "tr": "Maç",
        "en": "Match"
      }
    },
    {
      "article": "der",
      "word": "Überfall",
      "translation": {
        "tr": "baskın",
        "en": "raid"
      }
    },
    {
      "article": "die",
      "word": "Übergabe",
      "translation": {
        "tr": "Devir teslim",
        "en": "Handover"
      }
    },
    {
      "article": "der",
      "word": "Überlebende",
      "translation": {
        "tr": "Hayatta kalanlar",
        "en": "Survivors"
      }
    },
    {
      "article": "die",
      "word": "Übernahme",
      "translation": {
        "tr": "Devralma",
        "en": "Takeover"
      }
    },
    {
      "article": "der",
      "word": "Überschuss",
      "translation": {
        "tr": "fazlalık",
        "en": "surplus"
      }
    },
    {
      "article": "die",
      "word": "Übertragung",
      "translation": {
        "tr": "İletim",
        "en": "Transmission"
      }
    },
    {
      "article": "die",
      "word": "Überwachung",
      "translation": {
        "tr": "İzleme",
        "en": "Monitoring"
      }
    },
    {
      "article": "die",
      "word": "Überzeugung",
      "translation": {
        "tr": "Mahkumiyet",
        "en": "Conviction"
      }
    },
    {
      "article": "das",
      "word": "Ultimatum",
      "translation": {
        "tr": "Ültimatom",
        "en": "Ultimatum"
      }
    },
    {
      "article": "der",
      "word": "Umfang",
      "translation": {
        "tr": "Kapsam",
        "en": "Scope"
      }
    },
    {
      "article": "das",
      "word": "Umfeld",
      "translation": {
        "tr": "Çevre",
        "en": "Environment"
      }
    },
    {
      "article": "der",
      "word": "Umgang",
      "translation": {
        "tr": "elleçleme",
        "en": "handling"
      }
    },
    {
      "article": "der",
      "word": "Umsatz",
      "translation": {
        "tr": "Satış",
        "en": "Sales"
      }
    },
    {
      "article": "die",
      "word": "Umsetzung",
      "translation": {
        "tr": "Uygulama",
        "en": "Implementation"
      }
    },
    {
      "article": "der",
      "word": "Umstand",
      "translation": {
        "tr": "durum",
        "en": "circumstance"
      }
    },
    {
      "article": "die",
      "word": "Umwandlung",
      "translation": {
        "tr": "Dönüşüm",
        "en": "Conversion"
      }
    },
    {
      "article": "die",
      "word": "Unabhängigkeit",
      "translation": {
        "tr": "Bağımsızlık",
        "en": "Independence"
      }
    },
    {
      "article": "das",
      "word": "Ungeheuer",
      "translation": {
        "tr": "canavar",
        "en": "monster"
      }
    },
    {
      "article": "das",
      "word": "Unglück",
      "translation": {
        "tr": "Talihsizlik",
        "en": "Misfortune"
      }
    },
    {
      "article": "die",
      "word": "Union",
      "translation": {
        "tr": "Birlik",
        "en": "Union"
      }
    },
    {
      "article": "die",
      "word": "Universität",
      "translation": {
        "tr": "Üniversite",
        "en": "University"
      }
    },
    {
      "article": "der",
      "word": "Unmut",
      "translation": {
        "tr": "hoşnutsuzluk",
        "en": "displeasure"
      }
    },
    {
      "article": "die",
      "word": "Unordnung",
      "translation": {
        "tr": "Dağınıklık",
        "en": "Clutter"
      }
    },
    {
      "article": "das",
      "word": "Unrecht",
      "translation": {
        "tr": "Adaletsizlik",
        "en": "Injustice"
      }
    },
    {
      "article": "die",
      "word": "Unruhe",
      "translation": {
        "tr": "huzursuzluk",
        "en": "restlessness"
      }
    },
    {
      "article": "die",
      "word": "Unsicherheit",
      "translation": {
        "tr": "Belirsizlik",
        "en": "Uncertainty"
      }
    },
    {
      "article": "der",
      "word": "Unsinn",
      "translation": {
        "tr": "saçmalık",
        "en": "Nonsense"
      }
    },
    {
      "article": "die",
      "word": "Unterschrift",
      "translation": {
        "tr": "İmza",
        "en": "Signature"
      }
    },
    {
      "article": "der",
      "word": "Unterstützer",
      "translation": {
        "tr": "Destekçi",
        "en": "Supporter"
      }
    },
    {
      "article": "die",
      "word": "Unterstützung",
      "translation": {
        "tr": "Destek",
        "en": "Support"
      }
    },
    {
      "article": "die",
      "word": "Untersuchung",
      "translation": {
        "tr": "Soruşturma",
        "en": "Investigation"
      }
    },
    {
      "article": "die",
      "word": "Unterwäsche",
      "translation": {
        "tr": "İç çamaşırı",
        "en": "Underwear"
      }
    },
    {
      "article": "das",
      "word": "Unwetter",
      "translation": {
        "tr": "Fırtına",
        "en": "Storm"
      }
    },
    {
      "article": "die",
      "word": "Unwissenheit",
      "translation": {
        "tr": "Cehalet",
        "en": "Ignorance"
      }
    },
    {
      "article": "das",
      "word": "Uran",
      "translation": {
        "tr": "Uranyum",
        "en": "Uranium"
      }
    },
    {
      "article": "das",
      "word": "Urheberrecht",
      "translation": {
        "tr": "Telif hakkı",
        "en": "Copyright"
      }
    },
    {
      "article": "die",
      "word": "Urkunde",
      "translation": {
        "tr": "Sertifika",
        "en": "Certificate"
      }
    },
    {
      "article": "der",
      "word": "Ursprung",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      }
    },
    {
      "article": "das",
      "word": "Urteil",
      "translation": {
        "tr": "Yargı",
        "en": "Judgment"
      }
    },
    {
      "article": "die",
      "word": "Utopie",
      "translation": {
        "tr": "Ütopya",
        "en": "Utopia"
      }
    },
    {
      "article": "der",
      "word": "Vandalismus",
      "translation": {
        "tr": "Vandalizm",
        "en": "Vandalism"
      }
    },
    {
      "article": "die",
      "word": "Variable",
      "translation": {
        "tr": "değişken",
        "en": "variable"
      }
    },
    {
      "article": "die",
      "word": "Variante",
      "translation": {
        "tr": "Varyant",
        "en": "Variant"
      }
    },
    {
      "article": "die",
      "word": "Variation",
      "translation": {
        "tr": "Varyasyon",
        "en": "Variation"
      }
    },
    {
      "article": "die",
      "word": "Verachtung",
      "translation": {
        "tr": "küçümseme",
        "en": "Contempt"
      }
    },
    {
      "article": "die",
      "word": "Veränderung",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      }
    },
    {
      "article": "der",
      "word": "Veranstalter",
      "translation": {
        "tr": "Organizatör",
        "en": "Organizer"
      }
    },
    {
      "article": "die",
      "word": "Verarbeitung",
      "translation": {
        "tr": "İşleme",
        "en": "Processing"
      }
    },
    {
      "article": "der",
      "word": "Verband",
      "translation": {
        "tr": "Dernek",
        "en": "Association"
      }
    },
    {
      "article": "die",
      "word": "Verbesserung",
      "translation": {
        "tr": "İyileştirme",
        "en": "Improvement"
      }
    },
    {
      "article": "die",
      "word": "Verbindlichkeit",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      }
    },
    {
      "article": "das",
      "word": "Verbrechen",
      "translation": {
        "tr": "Suç",
        "en": "Crime"
      }
    },
    {
      "article": "die",
      "word": "Verbreitung",
      "translation": {
        "tr": "Yayılma",
        "en": "Spread"
      }
    },
    {
      "article": "der",
      "word": "Verbündete",
      "translation": {
        "tr": "Müttefikler",
        "en": "Allies"
      }
    },
    {
      "article": "der",
      "word": "Verdacht",
      "translation": {
        "tr": "şüphe",
        "en": "Suspicion"
      }
    },
    {
      "article": "der",
      "word": "Verdächtige",
      "translation": {
        "tr": "Şüpheliler",
        "en": "Suspects"
      }
    },
    {
      "article": "die",
      "word": "Vereinbarung",
      "translation": {
        "tr": "anlaşma",
        "en": "agreement"
      }
    },
    {
      "article": "die",
      "word": "Vereinigung",
      "translation": {
        "tr": "Dernek",
        "en": "Association"
      }
    },
    {
      "article": "das",
      "word": "Verfahren",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      }
    },
    {
      "article": "die",
      "word": "Verfassung",
      "translation": {
        "tr": "Anayasa",
        "en": "Constitution"
      }
    },
    {
      "article": "die",
      "word": "Verfolgung",
      "translation": {
        "tr": "Zulüm",
        "en": "Persecution"
      }
    },
    {
      "article": "die",
      "word": "Verfügbarkeit",
      "translation": {
        "tr": "Kullanılabilirlik",
        "en": "Availability"
      }
    },
    {
      "article": "die",
      "word": "Verfügung",
      "translation": {
        "tr": "mevcut",
        "en": "available"
      }
    },
    {
      "article": "die",
      "word": "Vergangenheit",
      "translation": {
        "tr": "geçmiş",
        "en": "past"
      }
    },
    {
      "article": "der",
      "word": "Vergleich",
      "translation": {
        "tr": "Karşılaştırma",
        "en": "Comparison"
      }
    },
    {
      "article": "das",
      "word": "Verhältnis",
      "translation": {
        "tr": "oran",
        "en": "ratio"
      }
    },
    {
      "article": "die",
      "word": "Verhandlung",
      "translation": {
        "tr": "müzakere",
        "en": "Negotiation"
      }
    },
    {
      "article": "das",
      "word": "Verhör",
      "translation": {
        "tr": "Sorgulama",
        "en": "Interrogation"
      }
    },
    {
      "article": "die",
      "word": "Verknüpfung",
      "translation": {
        "tr": "Bağlantı",
        "en": "Link"
      }
    },
    {
      "article": "der",
      "word": "Verlag",
      "translation": {
        "tr": "Yayıncı",
        "en": "Publisher"
      }
    },
    {
      "article": "das",
      "word": "Verlangen",
      "translation": {
        "tr": "arzu",
        "en": "Desire"
      }
    },
    {
      "article": "die",
      "word": "Verlängerung",
      "translation": {
        "tr": "Uzantı",
        "en": "Extension"
      }
    },
    {
      "article": "der",
      "word": "Verlauf",
      "translation": {
        "tr": "Tarih",
        "en": "History"
      }
    },
    {
      "article": "der",
      "word": "Verletzte",
      "translation": {
        "tr": "Yaralı",
        "en": "Injured"
      }
    },
    {
      "article": "die",
      "word": "Verletzung",
      "translation": {
        "tr": "yaralanma",
        "en": "injury"
      }
    },
    {
      "article": "der",
      "word": "Verlust",
      "translation": {
        "tr": "kayıp",
        "en": "loss"
      }
    },
    {
      "article": "das",
      "word": "Vermächtnis",
      "translation": {
        "tr": "Eski",
        "en": "Legacy"
      }
    },
    {
      "article": "der",
      "word": "Vermieter",
      "translation": {
        "tr": "Ev sahibi",
        "en": "Landlord"
      }
    },
    {
      "article": "die",
      "word": "Vermittlung",
      "translation": {
        "tr": "Arabuluculuk",
        "en": "Mediation"
      }
    },
    {
      "article": "das",
      "word": "Vermögen",
      "translation": {
        "tr": "Varlıklar",
        "en": "Assets"
      }
    },
    {
      "article": "die",
      "word": "Vermutung",
      "translation": {
        "tr": "Tahmin et",
        "en": "Guess"
      }
    },
    {
      "article": "die",
      "word": "Vernachlässigung",
      "translation": {
        "tr": "İhmal",
        "en": "Neglect"
      }
    },
    {
      "article": "die",
      "word": "Vernunft",
      "translation": {
        "tr": "Sebep",
        "en": "Reason"
      }
    },
    {
      "article": "die",
      "word": "Veröffentlichung",
      "translation": {
        "tr": "Yayın",
        "en": "Publication"
      }
    },
    {
      "article": "die",
      "word": "Verordnung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Regulation"
      }
    },
    {
      "article": "die",
      "word": "Verpflichtung",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      }
    },
    {
      "article": "der",
      "word": "Versager",
      "translation": {
        "tr": "Başarısızlık",
        "en": "Failure"
      }
    },
    {
      "article": "der",
      "word": "Versand",
      "translation": {
        "tr": "Nakliye",
        "en": "Shipping"
      }
    },
    {
      "article": "die",
      "word": "Verschiebung",
      "translation": {
        "tr": "Shift",
        "en": "Shift"
      }
    },
    {
      "article": "die",
      "word": "Verschmutzung",
      "translation": {
        "tr": "Kirlilik",
        "en": "Pollution"
      }
    },
    {
      "article": "die",
      "word": "Verschwörung",
      "translation": {
        "tr": "Komplo",
        "en": "Conspiracy"
      }
    },
    {
      "article": "die",
      "word": "Verstärkung",
      "translation": {
        "tr": "Takviye",
        "en": "Reinforcement"
      }
    },
    {
      "article": "der",
      "word": "Verstoß",
      "translation": {
        "tr": "İhlal",
        "en": "Violation"
      }
    },
    {
      "article": "der",
      "word": "Verteidiger",
      "translation": {
        "tr": "Defans",
        "en": "Defender"
      }
    },
    {
      "article": "die",
      "word": "Verteidigung",
      "translation": {
        "tr": "Savunma",
        "en": "Defense"
      }
    },
    {
      "article": "die",
      "word": "Verteilung",
      "translation": {
        "tr": "Dağıtım",
        "en": "Distribution"
      }
    },
    {
      "article": "der",
      "word": "Vertreter",
      "translation": {
        "tr": "Temsilci",
        "en": "Representative"
      }
    },
    {
      "article": "die",
      "word": "Vertretung",
      "translation": {
        "tr": "Temsil",
        "en": "Representation"
      }
    },
    {
      "article": "der",
      "word": "Vertrieb",
      "translation": {
        "tr": "Satış",
        "en": "Sales"
      }
    },
    {
      "article": "die",
      "word": "Verwaltung",
      "translation": {
        "tr": "Yönetim",
        "en": "Administration"
      }
    },
    {
      "article": "der",
      "word": "Verwandte",
      "translation": {
        "tr": "akrabalar",
        "en": "relatives"
      }
    },
    {
      "article": "der",
      "word": "Verweis",
      "translation": {
        "tr": "Referans",
        "en": "Reference"
      }
    },
    {
      "article": "die",
      "word": "Verwendung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      }
    },
    {
      "article": "die",
      "word": "Verzögerung",
      "translation": {
        "tr": "gecikme",
        "en": "delay"
      }
    },
    {
      "article": "die",
      "word": "Verzweiflung",
      "translation": {
        "tr": "Çaresizlik",
        "en": "Desperation"
      }
    },
    {
      "article": "die",
      "word": "Vielfalt",
      "translation": {
        "tr": "Çeşitlilik",
        "en": "Diversity"
      }
    },
    {
      "article": "die",
      "word": "Vielzahl",
      "translation": {
        "tr": "çeşitlilik",
        "en": "Variety"
      }
    },
    {
      "article": "das",
      "word": "Visier",
      "translation": {
        "tr": "Vizör",
        "en": "Visor"
      }
    },
    {
      "article": "die",
      "word": "Vision",
      "translation": {
        "tr": "vizyon",
        "en": "vision"
      }
    },
    {
      "article": "die",
      "word": "Vita",
      "translation": {
        "tr": "Hayat",
        "en": "Vita"
      }
    },
    {
      "article": "der",
      "word": "Vizepräsident",
      "translation": {
        "tr": "Başkan Yardımcısı",
        "en": "Vice President"
      }
    },
    {
      "article": "der",
      "word": "Völkermord",
      "translation": {
        "tr": "Soykırım",
        "en": "Genocide"
      }
    },
    {
      "article": "der",
      "word": "Volkswagen",
      "translation": {
        "tr": "volkswagen",
        "en": "Volkswagen"
      }
    },
    {
      "article": "die",
      "word": "Volkswirtschaft",
      "translation": {
        "tr": "Ekonomi",
        "en": "Economics"
      }
    },
    {
      "article": "die",
      "word": "Vollmacht",
      "translation": {
        "tr": "Vekaletname",
        "en": "Power of attorney"
      }
    },
    {
      "article": "die",
      "word": "Voraussetzung",
      "translation": {
        "tr": "Gereksinim",
        "en": "Requirement"
      }
    },
    {
      "article": "die",
      "word": "Vorbereitung",
      "translation": {
        "tr": "Hazırlık",
        "en": "Preparation"
      }
    },
    {
      "article": "der",
      "word": "Vorfall",
      "translation": {
        "tr": "Olay",
        "en": "Incident"
      }
    },
    {
      "article": "das",
      "word": "Vorfeld",
      "translation": {
        "tr": "Önlük",
        "en": "Apron"
      }
    },
    {
      "article": "die",
      "word": "Vorgabe",
      "translation": {
        "tr": "Varsayılan",
        "en": "Default"
      }
    },
    {
      "article": "der",
      "word": "Vorgang",
      "translation": {
        "tr": "süreç",
        "en": "process"
      }
    },
    {
      "article": "der",
      "word": "Vorgänger",
      "translation": {
        "tr": "öncül",
        "en": "predecessor"
      }
    },
    {
      "article": "das",
      "word": "Vorgehen",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      }
    },
    {
      "article": "die",
      "word": "Vorgehensweise",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      }
    },
    {
      "article": "der",
      "word": "Vorgesetzte",
      "translation": {
        "tr": "Üstler",
        "en": "Superiors"
      }
    },
    {
      "article": "das",
      "word": "Vorhaben",
      "translation": {
        "tr": "Projeler",
        "en": "Projects"
      }
    },
    {
      "article": "die",
      "word": "Vorhersage",
      "translation": {
        "tr": "Tahmin",
        "en": "Prediction"
      }
    },
    {
      "article": "die",
      "word": "Vorlage",
      "translation": {
        "tr": "Şablon",
        "en": "Template"
      }
    },
    {
      "article": "der",
      "word": "Vormarsch",
      "translation": {
        "tr": "avans",
        "en": "advance"
      }
    },
    {
      "article": "der",
      "word": "Vorort",
      "translation": {
        "tr": "Banliyö",
        "en": "Suburb"
      }
    },
    {
      "article": "der",
      "word": "Vorrat",
      "translation": {
        "tr": "Stok",
        "en": "Stock"
      }
    },
    {
      "article": "der",
      "word": "Vorsitz",
      "translation": {
        "tr": "Sandalye",
        "en": "Chair"
      }
    },
    {
      "article": "der",
      "word": "Vorsitzende",
      "translation": {
        "tr": "Başkan",
        "en": "Chairman"
      }
    },
    {
      "article": "der",
      "word": "Vorsprung",
      "translation": {
        "tr": "Avantajlı başlangıç",
        "en": "Head start"
      }
    },
    {
      "article": "die",
      "word": "Vorstadt",
      "translation": {
        "tr": "Banliyö",
        "en": "Suburbia"
      }
    },
    {
      "article": "der",
      "word": "Vorstand",
      "translation": {
        "tr": "Yönetim Kurulu",
        "en": "Board of Directors"
      }
    },
    {
      "article": "der",
      "word": "Vorstoß",
      "translation": {
        "tr": "avans",
        "en": "advance"
      }
    },
    {
      "article": "der",
      "word": "Vortrag",
      "translation": {
        "tr": "Ders",
        "en": "Lecture"
      }
    },
    {
      "article": "das",
      "word": "Vorurteil",
      "translation": {
        "tr": "Önyargı",
        "en": "Prejudice"
      }
    },
    {
      "article": "der",
      "word": "Vorwurf",
      "translation": {
        "tr": "suçlama",
        "en": "accusation"
      }
    },
    {
      "article": "das",
      "word": "Vorzeichen",
      "translation": {
        "tr": "işaret",
        "en": "sign"
      }
    },
    {
      "article": "das",
      "word": "Wachstum",
      "translation": {
        "tr": "Büyüme",
        "en": "Growth"
      }
    },
    {
      "article": "der",
      "word": "Wahlkampf",
      "translation": {
        "tr": "Seçim kampanyası",
        "en": "Election campaign"
      }
    },
    {
      "article": "die",
      "word": "Wahlperiode",
      "translation": {
        "tr": "seçim dönemi",
        "en": "election period"
      }
    },
    {
      "article": "der",
      "word": "Wahn",
      "translation": {
        "tr": "sanrı",
        "en": "delusion"
      }
    },
    {
      "article": "der",
      "word": "Wahnsinn",
      "translation": {
        "tr": "Delilik",
        "en": "Madness"
      }
    },
    {
      "article": "die",
      "word": "Wahrnehmung",
      "translation": {
        "tr": "Algı",
        "en": "Perception"
      }
    },
    {
      "article": "die",
      "word": "Wahrscheinlichkeit",
      "translation": {
        "tr": "Olasılık",
        "en": "Probability"
      }
    },
    {
      "article": "der",
      "word": "Wandel",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      }
    },
    {
      "article": "der",
      "word": "Wasserstoff",
      "translation": {
        "tr": "Hidrojen",
        "en": "Hydrogen"
      }
    },
    {
      "article": "der",
      "word": "Wechsel",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      }
    },
    {
      "article": "der",
      "word": "Wechselkurs",
      "translation": {
        "tr": "Döviz kuru",
        "en": "Exchange rate"
      }
    },
    {
      "article": "die",
      "word": "Wechselwirkung",
      "translation": {
        "tr": "etkileşim",
        "en": "interaction"
      }
    },
    {
      "article": "das",
      "word": "Weib",
      "translation": {
        "tr": "kadın",
        "en": "woman"
      }
    },
    {
      "article": "das",
      "word": "Weibchen",
      "translation": {
        "tr": "Dişiler",
        "en": "Females"
      }
    },
    {
      "article": "die",
      "word": "Weiche",
      "translation": {
        "tr": "Yumuşak",
        "en": "Soft"
      }
    },
    {
      "article": "die",
      "word": "Weide",
      "translation": {
        "tr": "mera",
        "en": "pasture"
      }
    },
    {
      "article": "die",
      "word": "Weile",
      "translation": {
        "tr": "süre",
        "en": "while"
      }
    },
    {
      "article": "die",
      "word": "Weise",
      "translation": {
        "tr": "yol",
        "en": "way"
      }
    },
    {
      "article": "die",
      "word": "Weisheit",
      "translation": {
        "tr": "Bilgelik",
        "en": "Wisdom"
      }
    },
    {
      "article": "die",
      "word": "Weiterbildung",
      "translation": {
        "tr": "İleri eğitim",
        "en": "Further training"
      }
    },
    {
      "article": "die",
      "word": "Weiterentwicklung",
      "translation": {
        "tr": "Daha fazla gelişme",
        "en": "Further development"
      }
    },
    {
      "article": "die",
      "word": "Wellenlänge",
      "translation": {
        "tr": "dalga boyu",
        "en": "wavelength"
      }
    },
    {
      "article": "der",
      "word": "Weltkrieg",
      "translation": {
        "tr": "Dünya Savaşı",
        "en": "World War"
      }
    },
    {
      "article": "die",
      "word": "Wendung",
      "translation": {
        "tr": "büküm",
        "en": "twist"
      }
    },
    {
      "article": "die",
      "word": "Wertschätzung",
      "translation": {
        "tr": "Takdir",
        "en": "Appreciation"
      }
    },
    {
      "article": "das",
      "word": "Wesen",
      "translation": {
        "tr": "varlıklar",
        "en": "beings"
      }
    },
    {
      "article": "die",
      "word": "Wichtigkeit",
      "translation": {
        "tr": "Önem",
        "en": "Importance"
      }
    },
    {
      "article": "der",
      "word": "Widerspruch",
      "translation": {
        "tr": "çelişki",
        "en": "contradiction"
      }
    }
  ]
};
