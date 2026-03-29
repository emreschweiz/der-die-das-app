export type WordListLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type CasePromptSet = {
  nominative: string;
  accusative: string;
  dative: string;
};

export type WordListEntry = {
  article: 'der' | 'die' | 'das';
  word: string;
  translation: {
    tr: string;
    en: string;
  };
  casePrompts: CasePromptSet;
};

export const WORD_LISTS: Record<WordListLevel, WordListEntry[]> = {
  "A1": [
    {
      "article": "der",
      "word": "Abend",
      "translation": {
        "tr": "akşam",
        "en": "evening"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Abend.",
        "accusative": "Ich erwarte ___ Abend.",
        "dative": "Vor ___ Abend bin ich nervös."
      }
    },
    {
      "article": "das",
      "word": "Abendessen",
      "translation": {
        "tr": "Akşam Yemeği",
        "en": "Dinner"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Abendessen.",
        "accusative": "Ich esse ___ Abendessen.",
        "dative": "Zu ___ Abendessen nehme ich ein Getränk."
      }
    },
    {
      "article": "das",
      "word": "Abenteuer",
      "translation": {
        "tr": "Macera",
        "en": "Adventure"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Abenteuer.",
        "accusative": "Ich kaufe ___ Abenteuer.",
        "dative": "Mit ___ Abenteuer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Abfall",
      "translation": {
        "tr": "Atık",
        "en": "Waste"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Abfall.",
        "accusative": "Ich suche ___ Abfall.",
        "dative": "Neben ___ Abfall liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Abitur",
      "translation": {
        "tr": "Lise diploması",
        "en": "High school diploma"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Abitur.",
        "accusative": "Ich sehe ___ Abitur.",
        "dative": "Ich bleibe in ___ Abitur."
      }
    },
    {
      "article": "die",
      "word": "Absicht",
      "translation": {
        "tr": "Niyet",
        "en": "Intention"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Absicht.",
        "accusative": "Ich brauche ___ Absicht.",
        "dative": "Ich beschäftige mich mit ___ Absicht."
      }
    },
    {
      "article": "der",
      "word": "Abstand",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Abstand.",
        "accusative": "Ich erkläre ___ Abstand.",
        "dative": "An ___ Abstand arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Adler",
      "translation": {
        "tr": "Kartal",
        "en": "Eagle"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Adler.",
        "accusative": "Ich beobachte ___ Adler.",
        "dative": "Ich stehe neben ___ Adler."
      }
    },
    {
      "article": "die",
      "word": "Adresse",
      "translation": {
        "tr": "Adres",
        "en": "Address"
      },
      "casePrompts": {
        "nominative": "Im Laden ist ___ Adresse.",
        "accusative": "Ich kaufe ___ Adresse.",
        "dative": "Zu ___ Adresse passt die Tasche."
      }
    },
    {
      "article": "der",
      "word": "Affe",
      "translation": {
        "tr": "Maymun",
        "en": "Monkey"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Affe.",
        "accusative": "Ich streichle ___ Affe.",
        "dative": "Ich bin bei ___ Affe."
      }
    },
    {
      "article": "die",
      "word": "Ahnung",
      "translation": {
        "tr": "Önsezi",
        "en": "Hunch"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ahnung.",
        "accusative": "Ich nehme ___ Ahnung.",
        "dative": "Vor ___ Ahnung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Album",
      "translation": {
        "tr": "albüm",
        "en": "album"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Album.",
        "accusative": "Ich öffne ___ Album.",
        "dative": "Ich arbeite mit ___ Album."
      }
    },
    {
      "article": "der",
      "word": "Alkohol",
      "translation": {
        "tr": "Alkol",
        "en": "Alcohol"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch steht ___ Alkohol.",
        "accusative": "Ich trinke ___ Alkohol.",
        "dative": "Zu ___ Alkohol passt ein Dessert."
      }
    },
    {
      "article": "der",
      "word": "Alltag",
      "translation": {
        "tr": "Günlük yaşam",
        "en": "Everyday life"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Alltag.",
        "accusative": "Ich sehe ___ Alltag.",
        "dative": "Ich gehe mit ___ Alltag."
      }
    },
    {
      "article": "das",
      "word": "Alphabet",
      "translation": {
        "tr": "alfabe",
        "en": "Alphabet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Alphabet.",
        "accusative": "Ich suche ___ Alphabet.",
        "dative": "Neben ___ Alphabet liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Alter",
      "translation": {
        "tr": "dostum",
        "en": "Dude"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Alter.",
        "accusative": "Ich suche ___ Alter.",
        "dative": "Neben ___ Alter liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Alternative",
      "translation": {
        "tr": "Alternatif",
        "en": "Alternative"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Alternative.",
        "accusative": "Ich suche ___ Alternative.",
        "dative": "Neben ___ Alternative liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Amerikaner",
      "translation": {
        "tr": "Amerikan",
        "en": "American"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Amerikaner.",
        "accusative": "Ich nehme ___ Amerikaner.",
        "dative": "Vor ___ Amerikaner steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ampel",
      "translation": {
        "tr": "Trafik ışığı",
        "en": "Traffic light"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ampel.",
        "accusative": "Ich suche ___ Ampel.",
        "dative": "Neben ___ Ampel liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Amt",
      "translation": {
        "tr": "ofis",
        "en": "office"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Amt.",
        "accusative": "Ich fotografiere ___ Amt.",
        "dative": "Wir treffen uns bei ___ Amt."
      }
    },
    {
      "article": "die",
      "word": "Ananas",
      "translation": {
        "tr": "Ananas",
        "en": "Pineapple"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Ananas.",
        "accusative": "Ich bestelle ___ Ananas.",
        "dative": "Mit ___ Ananas koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Anfang",
      "translation": {
        "tr": "başlangıç",
        "en": "beginning"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anfang.",
        "accusative": "Ich suche ___ Anfang.",
        "dative": "Neben ___ Anfang liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Angebot",
      "translation": {
        "tr": "Teklif",
        "en": "Offer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Angebot.",
        "accusative": "Ich sehe ___ Angebot.",
        "dative": "Ich gehe mit ___ Angebot."
      }
    },
    {
      "article": "die",
      "word": "Angst",
      "translation": {
        "tr": "Korku",
        "en": "Fear"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Angst zentral.",
        "accusative": "Wir besprechen ___ Angst.",
        "dative": "Mit ___ Angst wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Ankunft",
      "translation": {
        "tr": "Varış",
        "en": "Arrival"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ankunft.",
        "accusative": "Ich suche ___ Ankunft.",
        "dative": "Neben ___ Ankunft liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Anruf",
      "translation": {
        "tr": "Ara",
        "en": "Call"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anruf.",
        "accusative": "Ich suche ___ Anruf.",
        "dative": "Neben ___ Anruf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ansage",
      "translation": {
        "tr": "Duyuru",
        "en": "Announcement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ansage.",
        "accusative": "Ich sehe ___ Ansage.",
        "dative": "Ich gehe mit ___ Ansage."
      }
    },
    {
      "article": "der",
      "word": "Anstieg",
      "translation": {
        "tr": "artış",
        "en": "increase"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anstieg.",
        "accusative": "Ich kaufe ___ Anstieg.",
        "dative": "Mit ___ Anstieg arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Antwort",
      "translation": {
        "tr": "Cevap",
        "en": "Answer"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Antwort zentral.",
        "accusative": "Wir besprechen ___ Antwort.",
        "dative": "Mit ___ Antwort wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Anwalt",
      "translation": {
        "tr": "Avukat",
        "en": "Lawyer"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anwalt.",
        "accusative": "Ich kaufe ___ Anwalt.",
        "dative": "Mit ___ Anwalt arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Anzeige",
      "translation": {
        "tr": "Reklam",
        "en": "Advertisement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anzeige.",
        "accusative": "Ich sehe ___ Anzeige.",
        "dative": "Ich gehe mit ___ Anzeige."
      }
    },
    {
      "article": "der",
      "word": "Anzug",
      "translation": {
        "tr": "takım elbise",
        "en": "suit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anzug.",
        "accusative": "Ich sehe ___ Anzug.",
        "dative": "Ich gehe mit ___ Anzug."
      }
    },
    {
      "article": "der",
      "word": "Apfel",
      "translation": {
        "tr": "elma",
        "en": "Apple"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Apfel.",
        "accusative": "Ich esse ___ Apfel.",
        "dative": "Zu ___ Apfel nehme ich ein Getränk."
      }
    },
    {
      "article": "die",
      "word": "Apotheke",
      "translation": {
        "tr": "Eczane",
        "en": "Pharmacy"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Apotheke.",
        "accusative": "Ich suche ___ Apotheke.",
        "dative": "Neben ___ Apotheke liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Apparat",
      "translation": {
        "tr": "aparat",
        "en": "apparatus"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Apparat.",
        "accusative": "Ich sehe ___ Apparat.",
        "dative": "Ich gehe mit ___ Apparat."
      }
    },
    {
      "article": "der",
      "word": "Appetit",
      "translation": {
        "tr": "iştah",
        "en": "appetite"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Appetit.",
        "accusative": "Ich nehme ___ Appetit.",
        "dative": "Vor ___ Appetit steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Applaus",
      "translation": {
        "tr": "Alkış",
        "en": "Applause"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Applaus.",
        "accusative": "Ich kaufe ___ Applaus.",
        "dative": "Mit ___ Applaus arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "April",
      "translation": {
        "tr": "Nisan",
        "en": "April"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ April.",
        "accusative": "Ich sehe ___ April.",
        "dative": "Ich gehe mit ___ April."
      }
    },
    {
      "article": "die",
      "word": "Arbeit",
      "translation": {
        "tr": "iş",
        "en": "work"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Arbeit.",
        "accusative": "Ich sehe ___ Arbeit.",
        "dative": "Ich gehe mit ___ Arbeit."
      }
    },
    {
      "article": "der",
      "word": "Arbeiter",
      "translation": {
        "tr": "işçiler",
        "en": "workers"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Arbeiter.",
        "accusative": "Ich sehe ___ Arbeiter.",
        "dative": "Ich antworte ___ Arbeiter."
      }
    },
    {
      "article": "der",
      "word": "Arm",
      "translation": {
        "tr": "Zayıf",
        "en": "Poor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Arm.",
        "accusative": "Ich sehe ___ Arm.",
        "dative": "Ich gehe mit ___ Arm."
      }
    },
    {
      "article": "die",
      "word": "Art",
      "translation": {
        "tr": "Sanat",
        "en": "Art"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Art.",
        "accusative": "Ich suche ___ Art.",
        "dative": "Neben ___ Art liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Artikel",
      "translation": {
        "tr": "Makale",
        "en": "Article"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Artikel.",
        "accusative": "Ich öffne ___ Artikel.",
        "dative": "Ich arbeite mit ___ Artikel."
      }
    },
    {
      "article": "der",
      "word": "Arzt",
      "translation": {
        "tr": "doktor",
        "en": "doctor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Arzt.",
        "accusative": "Ich besuche ___ Arzt.",
        "dative": "Ich danke ___ Arzt."
      }
    },
    {
      "article": "die",
      "word": "Asche",
      "translation": {
        "tr": "kül",
        "en": "Ash"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Asche.",
        "accusative": "Ich sehe ___ Asche.",
        "dative": "Ich gehe mit ___ Asche."
      }
    },
    {
      "article": "der",
      "word": "Assistent",
      "translation": {
        "tr": "Asistan",
        "en": "Assistant"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Assistent.",
        "accusative": "Ich sehe ___ Assistent.",
        "dative": "Ich gehe mit ___ Assistent."
      }
    },
    {
      "article": "der",
      "word": "Ast",
      "translation": {
        "tr": "şube",
        "en": "branch"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ast.",
        "accusative": "Ich suche ___ Ast.",
        "dative": "Neben ___ Ast liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aufgabe",
      "translation": {
        "tr": "görev",
        "en": "task"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aufgabe.",
        "accusative": "Ich sehe ___ Aufgabe.",
        "dative": "Ich gehe mit ___ Aufgabe."
      }
    },
    {
      "article": "der",
      "word": "Aufsatz",
      "translation": {
        "tr": "Deneme",
        "en": "Essay"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufsatz.",
        "accusative": "Ich kaufe ___ Aufsatz.",
        "dative": "Mit ___ Aufsatz arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Auge",
      "translation": {
        "tr": "göz",
        "en": "eye"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Auge.",
        "accusative": "Ich kaufe ___ Auge.",
        "dative": "Mit ___ Auge arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Augenblick",
      "translation": {
        "tr": "an",
        "en": "moment"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Augenblick.",
        "accusative": "Ich kaufe ___ Augenblick.",
        "dative": "Mit ___ Augenblick arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "August",
      "translation": {
        "tr": "Ağustos",
        "en": "Aug"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ August.",
        "accusative": "Ich suche ___ August.",
        "dative": "Neben ___ August liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ausbildung",
      "translation": {
        "tr": "Eğitim",
        "en": "Training"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Ausbildung.",
        "accusative": "Ich nehme ___ Ausbildung.",
        "dative": "Ich reise mit ___ Ausbildung."
      }
    },
    {
      "article": "der",
      "word": "Ausflug",
      "translation": {
        "tr": "gezi",
        "en": "excursion"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausflug.",
        "accusative": "Ich nehme ___ Ausflug.",
        "dative": "Vor ___ Ausflug steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ausgabe",
      "translation": {
        "tr": "Sürüm",
        "en": "Edition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausgabe.",
        "accusative": "Ich suche ___ Ausgabe.",
        "dative": "Neben ___ Ausgabe liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ausgang",
      "translation": {
        "tr": "çıkış",
        "en": "exit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausgang.",
        "accusative": "Ich suche ___ Ausgang.",
        "dative": "Neben ___ Ausgang liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ausland",
      "translation": {
        "tr": "Yurtdışında",
        "en": "Abroad"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausland.",
        "accusative": "Ich nehme ___ Ausland.",
        "dative": "Vor ___ Ausland steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ausländer",
      "translation": {
        "tr": "Yabancılar",
        "en": "Foreigners"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausländer.",
        "accusative": "Ich suche ___ Ausländer.",
        "dative": "Neben ___ Ausländer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ausnahme",
      "translation": {
        "tr": "İstisna",
        "en": "Exception"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausnahme.",
        "accusative": "Ich nehme ___ Ausnahme.",
        "dative": "Vor ___ Ausnahme steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Aussehen",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aussehen.",
        "accusative": "Ich suche ___ Aussehen.",
        "dative": "Neben ___ Aussehen liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Auto",
      "translation": {
        "tr": "araba",
        "en": "car"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Auto.",
        "accusative": "Ich miete ___ Auto.",
        "dative": "Ich fahre mit ___ Auto."
      }
    },
    {
      "article": "die",
      "word": "Autobahn",
      "translation": {
        "tr": "otoyol",
        "en": "highway"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Autobahn.",
        "accusative": "Ich nehme ___ Autobahn.",
        "dative": "Vor ___ Autobahn steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Autofahrer",
      "translation": {
        "tr": "Sürücü",
        "en": "Driver"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Autofahrer.",
        "accusative": "Ich sehe ___ Autofahrer.",
        "dative": "Ich antworte ___ Autofahrer."
      }
    },
    {
      "article": "der",
      "word": "Autor",
      "translation": {
        "tr": "Yazar",
        "en": "Author"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Autor.",
        "accusative": "Ich besuche ___ Autor.",
        "dative": "Ich danke ___ Autor."
      }
    },
    {
      "article": "das",
      "word": "Baby",
      "translation": {
        "tr": "Bebek",
        "en": "Baby"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Baby.",
        "accusative": "Ich suche ___ Baby.",
        "dative": "Neben ___ Baby liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bäcker",
      "translation": {
        "tr": "Fırıncı",
        "en": "Baker"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bäcker.",
        "accusative": "Ich sehe ___ Bäcker.",
        "dative": "Ich gehe mit ___ Bäcker."
      }
    },
    {
      "article": "die",
      "word": "Bäckerei",
      "translation": {
        "tr": "Fırın",
        "en": "Bakery"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bäckerei.",
        "accusative": "Ich kaufe ___ Bäckerei.",
        "dative": "Mit ___ Bäckerei arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Backofen",
      "translation": {
        "tr": "Fırın",
        "en": "Oven"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Backofen.",
        "accusative": "Ich kaufe ___ Backofen.",
        "dative": "Mit ___ Backofen arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Bad",
      "translation": {
        "tr": "banyo",
        "en": "bathroom"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Bad.",
        "accusative": "Ich suche ___ Bad.",
        "dative": "Ich bin in ___ Bad."
      }
    },
    {
      "article": "die",
      "word": "Bahn",
      "translation": {
        "tr": "tren",
        "en": "train"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Bahn.",
        "accusative": "Ich sehe ___ Bahn.",
        "dative": "Ich sitze in ___ Bahn."
      }
    },
    {
      "article": "der",
      "word": "Bahnhof",
      "translation": {
        "tr": "Tren istasyonu",
        "en": "Train station"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Bahnhof.",
        "accusative": "Ich parke ___ Bahnhof.",
        "dative": "Ich komme mit ___ Bahnhof."
      }
    },
    {
      "article": "der",
      "word": "Balkon",
      "translation": {
        "tr": "Balkon",
        "en": "Balcony"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Balkon.",
        "accusative": "Ich nehme ___ Balkon.",
        "dative": "Vor ___ Balkon steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ball",
      "translation": {
        "tr": "Top",
        "en": "Ball"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ball.",
        "accusative": "Ich suche ___ Ball.",
        "dative": "Neben ___ Ball liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Banane",
      "translation": {
        "tr": "Muz",
        "en": "Banana"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Banane.",
        "accusative": "Ich bestelle ___ Banane.",
        "dative": "Mit ___ Banane koche ich heute."
      }
    },
    {
      "article": "die",
      "word": "Bank",
      "translation": {
        "tr": "Bank",
        "en": "Bench"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Bank.",
        "accusative": "Ich besuche ___ Bank.",
        "dative": "Ich warte vor ___ Bank."
      }
    },
    {
      "article": "die",
      "word": "Bar",
      "translation": {
        "tr": "Bar",
        "en": "Bar"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bar.",
        "accusative": "Ich suche ___ Bar.",
        "dative": "Neben ___ Bar liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bär",
      "translation": {
        "tr": "Ayı",
        "en": "Bear"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Bär.",
        "accusative": "Ich beobachte ___ Bär.",
        "dative": "Ich stehe neben ___ Bär."
      }
    },
    {
      "article": "der",
      "word": "Bart",
      "translation": {
        "tr": "Sakal",
        "en": "Beard"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Bart.",
        "accusative": "Ich streichle ___ Bart.",
        "dative": "Ich bin bei ___ Bart."
      }
    },
    {
      "article": "der",
      "word": "Baseball",
      "translation": {
        "tr": "Beyzbol",
        "en": "Baseball"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Baseball.",
        "accusative": "Ich suche ___ Baseball.",
        "dative": "Neben ___ Baseball liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Basketball",
      "translation": {
        "tr": "Basketbol",
        "en": "Basketball"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Basketball.",
        "accusative": "Ich suche ___ Basketball.",
        "dative": "Neben ___ Basketball liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Batterie",
      "translation": {
        "tr": "Pil",
        "en": "Battery"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Batterie.",
        "accusative": "Ich suche ___ Batterie.",
        "dative": "Ich telefoniere mit ___ Batterie."
      }
    },
    {
      "article": "der",
      "word": "Bauch",
      "translation": {
        "tr": "göbek",
        "en": "belly"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bauch.",
        "accusative": "Ich nehme ___ Bauch.",
        "dative": "Vor ___ Bauch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bauer",
      "translation": {
        "tr": "çiftçi",
        "en": "farmer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bauer.",
        "accusative": "Ich suche ___ Bauer.",
        "dative": "Neben ___ Bauer liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bauernhof",
      "translation": {
        "tr": "Çiftlik",
        "en": "Farm"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bauernhof.",
        "accusative": "Ich sehe ___ Bauernhof.",
        "dative": "Ich gehe mit ___ Bauernhof."
      }
    },
    {
      "article": "der",
      "word": "Baum",
      "translation": {
        "tr": "ağaç",
        "en": "tree"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Baum.",
        "accusative": "Ich entdecke ___ Baum.",
        "dative": "Ich gehe zu ___ Baum."
      }
    },
    {
      "article": "der",
      "word": "Becher",
      "translation": {
        "tr": "Kupa",
        "en": "Mug"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Becher.",
        "accusative": "Ich sehe ___ Becher.",
        "dative": "Ich gehe mit ___ Becher."
      }
    },
    {
      "article": "die",
      "word": "Bedingung",
      "translation": {
        "tr": "Durum",
        "en": "Condition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bedingung.",
        "accusative": "Ich kaufe ___ Bedingung.",
        "dative": "Hinter ___ Bedingung ist ein Fenster."
      }
    },
    {
      "article": "der",
      "word": "Beginn",
      "translation": {
        "tr": "başlangıç",
        "en": "beginning"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beginn.",
        "accusative": "Ich suche ___ Beginn.",
        "dative": "Neben ___ Beginn liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Beifall",
      "translation": {
        "tr": "Alkış",
        "en": "Applause"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beifall.",
        "accusative": "Ich suche ___ Beifall.",
        "dative": "Neben ___ Beifall liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Bein",
      "translation": {
        "tr": "bacak",
        "en": "leg"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bein.",
        "accusative": "Ich suche ___ Bein.",
        "dative": "Neben ___ Bein liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Beispiel",
      "translation": {
        "tr": "Örnek",
        "en": "Example"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Beispiel.",
        "accusative": "Ich organisiere ___ Beispiel.",
        "dative": "Nach ___ Beispiel fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Bekleidung",
      "translation": {
        "tr": "Giyim",
        "en": "Clothing"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bekleidung.",
        "accusative": "Ich sehe ___ Bekleidung.",
        "dative": "Ich gehe mit ___ Bekleidung."
      }
    },
    {
      "article": "das",
      "word": "Benzin",
      "translation": {
        "tr": "Benzin",
        "en": "Gasoline"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Benzin.",
        "accusative": "Ich sehe ___ Benzin.",
        "dative": "Ich gehe mit ___ Benzin."
      }
    },
    {
      "article": "der",
      "word": "Berg",
      "translation": {
        "tr": "dağ",
        "en": "Mt"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Berg.",
        "accusative": "Ich nehme ___ Berg.",
        "dative": "Vor ___ Berg steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Berliner",
      "translation": {
        "tr": "Berlinli",
        "en": "Berliner"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Berliner.",
        "accusative": "Ich suche ___ Berliner.",
        "dative": "Neben ___ Berliner liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Beruf",
      "translation": {
        "tr": "Meslek",
        "en": "Profession"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beruf.",
        "accusative": "Ich suche ___ Beruf.",
        "dative": "Neben ___ Beruf liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Besen",
      "translation": {
        "tr": "Süpürge",
        "en": "Broom"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Besen.",
        "accusative": "Ich fotografiere ___ Besen.",
        "dative": "Wir treffen uns bei ___ Besen."
      }
    },
    {
      "article": "die",
      "word": "Bestellung",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bestellung.",
        "accusative": "Ich kaufe ___ Bestellung.",
        "dative": "Mit ___ Bestellung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Besuch",
      "translation": {
        "tr": "Ziyaret edin",
        "en": "Visit"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Besuch.",
        "accusative": "Ich nehme ___ Besuch.",
        "dative": "Vor ___ Besuch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Besucher",
      "translation": {
        "tr": "Ziyaretçiler",
        "en": "Visitors"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Besucher.",
        "accusative": "Ich kenne ___ Besucher.",
        "dative": "Ich spreche mit ___ Besucher."
      }
    },
    {
      "article": "der",
      "word": "Beton",
      "translation": {
        "tr": "Beton",
        "en": "Concrete"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Beton.",
        "accusative": "Ich kaufe ___ Beton.",
        "dative": "Mit ___ Beton arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Bett",
      "translation": {
        "tr": "yatak",
        "en": "bed"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bett.",
        "accusative": "Ich kaufe ___ Bett.",
        "dative": "Hinter ___ Bett ist ein Fenster."
      }
    },
    {
      "article": "die",
      "word": "Bibliothek",
      "translation": {
        "tr": "Kütüphane",
        "en": "Library"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Bibliothek.",
        "accusative": "Ich besuche ___ Bibliothek.",
        "dative": "Ich warte vor ___ Bibliothek."
      }
    },
    {
      "article": "die",
      "word": "Biene",
      "translation": {
        "tr": "Arı",
        "en": "Bee"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Biene.",
        "accusative": "Ich füttere ___ Biene.",
        "dative": "Ich spiele mit ___ Biene."
      }
    },
    {
      "article": "das",
      "word": "Bier",
      "translation": {
        "tr": "Bira",
        "en": "Beer"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Bier.",
        "accusative": "Ich beobachte ___ Bier.",
        "dative": "Ich stehe neben ___ Bier."
      }
    },
    {
      "article": "das",
      "word": "Bild",
      "translation": {
        "tr": "Resim",
        "en": "Image"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Bild.",
        "accusative": "Ich öffne ___ Bild.",
        "dative": "Ich arbeite mit ___ Bild."
      }
    },
    {
      "article": "der",
      "word": "Bildschirm",
      "translation": {
        "tr": "ekran",
        "en": "screen"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bildschirm.",
        "accusative": "Ich kaufe ___ Bildschirm.",
        "dative": "Mit ___ Bildschirm arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Birke",
      "translation": {
        "tr": "Huş ağacı",
        "en": "Birch"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Birke.",
        "accusative": "Ich nehme ___ Birke.",
        "dative": "Vor ___ Birke steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Birne",
      "translation": {
        "tr": "Armut",
        "en": "Pear"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Birne.",
        "accusative": "Ich suche ___ Birne.",
        "dative": "Neben ___ Birne liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bischof",
      "translation": {
        "tr": "Piskopos",
        "en": "Bishop"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Bischof.",
        "accusative": "Ich suche ___ Bischof.",
        "dative": "Ich bin in ___ Bischof."
      }
    },
    {
      "article": "die",
      "word": "Bitte",
      "translation": {
        "tr": "lütfen",
        "en": "Please"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bitte.",
        "accusative": "Ich suche ___ Bitte.",
        "dative": "Neben ___ Bitte liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Blatt",
      "translation": {
        "tr": "levha",
        "en": "sheet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blatt.",
        "accusative": "Ich suche ___ Blatt.",
        "dative": "Neben ___ Blatt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bleistift",
      "translation": {
        "tr": "kalem",
        "en": "pencil"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Bleistift.",
        "accusative": "Ich kaufe ___ Bleistift.",
        "dative": "Ich arbeite mit ___ Bleistift."
      }
    },
    {
      "article": "der",
      "word": "Blick",
      "translation": {
        "tr": "Bak",
        "en": "Look"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blick.",
        "accusative": "Ich suche ___ Blick.",
        "dative": "Neben ___ Blick liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Blitz",
      "translation": {
        "tr": "Yıldırım",
        "en": "Lightning"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Blitz.",
        "accusative": "Ich kaufe ___ Blitz.",
        "dative": "Mit ___ Blitz arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Block",
      "translation": {
        "tr": "blok",
        "en": "block"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Block.",
        "accusative": "Ich suche ___ Block.",
        "dative": "Neben ___ Block liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Blume",
      "translation": {
        "tr": "çiçek",
        "en": "flower"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Blume.",
        "accusative": "Ich beobachte ___ Blume.",
        "dative": "Ich stehe vor ___ Blume."
      }
    },
    {
      "article": "die",
      "word": "Bluse",
      "translation": {
        "tr": "bluz",
        "en": "blouse"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bluse.",
        "accusative": "Ich kaufe ___ Bluse.",
        "dative": "Mit ___ Bluse arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Blut",
      "translation": {
        "tr": "Kan",
        "en": "Blood"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Blut.",
        "accusative": "Ich kaufe ___ Blut.",
        "dative": "Mit ___ Blut arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bock",
      "translation": {
        "tr": "Buck",
        "en": "Buck"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bock.",
        "accusative": "Ich sehe ___ Bock.",
        "dative": "Ich gehe mit ___ Bock."
      }
    },
    {
      "article": "der",
      "word": "Boden",
      "translation": {
        "tr": "kat",
        "en": "floor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Boden.",
        "accusative": "Ich sehe ___ Boden.",
        "dative": "Ich gehe mit ___ Boden."
      }
    },
    {
      "article": "der",
      "word": "Bogen",
      "translation": {
        "tr": "yay",
        "en": "bow"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bogen.",
        "accusative": "Ich nehme ___ Bogen.",
        "dative": "Vor ___ Bogen steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bombe",
      "translation": {
        "tr": "Bomba",
        "en": "Bomb"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bombe.",
        "accusative": "Ich nehme ___ Bombe.",
        "dative": "Vor ___ Bombe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Bonbon",
      "translation": {
        "tr": "Şeker",
        "en": "Candy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bonbon.",
        "accusative": "Ich nehme ___ Bonbon.",
        "dative": "Vor ___ Bonbon steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Boot",
      "translation": {
        "tr": "tekne",
        "en": "boat"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Boot.",
        "accusative": "Ich sehe ___ Boot.",
        "dative": "Ich gehe mit ___ Boot."
      }
    },
    {
      "article": "der",
      "word": "Bote",
      "translation": {
        "tr": "haberci",
        "en": "messenger"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bote.",
        "accusative": "Ich nehme ___ Bote.",
        "dative": "Vor ___ Bote steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Box",
      "translation": {
        "tr": "kutu",
        "en": "box"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Box.",
        "accusative": "Ich suche ___ Box.",
        "dative": "Vor ___ Box liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Brand",
      "translation": {
        "tr": "Marka",
        "en": "Brand"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brand.",
        "accusative": "Ich suche ___ Brand.",
        "dative": "Neben ___ Brand liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Braten",
      "translation": {
        "tr": "kızartma",
        "en": "Roast"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Braten.",
        "accusative": "Ich nehme ___ Braten.",
        "dative": "Vor ___ Braten steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Brauerei",
      "translation": {
        "tr": "Bira fabrikası",
        "en": "Brewery"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Brauerei.",
        "accusative": "Ich kaufe ___ Brauerei.",
        "dative": "Mit ___ Brauerei arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Braut",
      "translation": {
        "tr": "gelin",
        "en": "bride"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Braut.",
        "accusative": "Ich suche ___ Braut.",
        "dative": "Neben ___ Braut liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Brei",
      "translation": {
        "tr": "yulaf lapası",
        "en": "Porridge"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brei.",
        "accusative": "Ich suche ___ Brei.",
        "dative": "Neben ___ Brei liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Breite",
      "translation": {
        "tr": "genişlik",
        "en": "width"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Breite.",
        "accusative": "Ich kaufe ___ Breite.",
        "dative": "Mit ___ Breite arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Bremse",
      "translation": {
        "tr": "fren",
        "en": "brake"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bremse.",
        "accusative": "Ich nehme ___ Bremse.",
        "dative": "Vor ___ Bremse steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Brett",
      "translation": {
        "tr": "tahta",
        "en": "board"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Brett.",
        "accusative": "Ich kaufe ___ Brett.",
        "dative": "Mit ___ Brett arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Brief",
      "translation": {
        "tr": "mektup",
        "en": "letter"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Brief.",
        "accusative": "Ich öffne ___ Brief.",
        "dative": "Ich arbeite mit ___ Brief."
      }
    },
    {
      "article": "die",
      "word": "Brille",
      "translation": {
        "tr": "Gözlük",
        "en": "Glasses"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Brille.",
        "accusative": "Ich suche ___ Brille.",
        "dative": "Ich gehe mit ___ Brille raus."
      }
    },
    {
      "article": "das",
      "word": "Brot",
      "translation": {
        "tr": "Ekmek",
        "en": "Bread"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brot.",
        "accusative": "Ich probiere ___ Brot.",
        "dative": "Ich beginne mit ___ Brot."
      }
    },
    {
      "article": "das",
      "word": "Brötchen",
      "translation": {
        "tr": "Çörekler",
        "en": "Buns"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brötchen.",
        "accusative": "Ich suche ___ Brötchen.",
        "dative": "Neben ___ Brötchen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Brücke",
      "translation": {
        "tr": "Köprü",
        "en": "Bridge"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brücke.",
        "accusative": "Ich suche ___ Brücke.",
        "dative": "Neben ___ Brücke liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bruder",
      "translation": {
        "tr": "erkek kardeş",
        "en": "Brother"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bruder.",
        "accusative": "Ich sehe ___ Bruder.",
        "dative": "Ich gehe mit ___ Bruder."
      }
    },
    {
      "article": "die",
      "word": "Brust",
      "translation": {
        "tr": "göğüs",
        "en": "chest"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Brust.",
        "accusative": "Ich kaufe ___ Brust.",
        "dative": "Mit ___ Brust arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Buch",
      "translation": {
        "tr": "kitap",
        "en": "book"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Buch.",
        "accusative": "Ich schreibe ___ Buch.",
        "dative": "In ___ Buch steht alles."
      }
    },
    {
      "article": "der",
      "word": "Buchstabe",
      "translation": {
        "tr": "mektup",
        "en": "letter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Buchstabe.",
        "accusative": "Ich drucke ___ Buchstabe.",
        "dative": "Aus ___ Buchstabe lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Burg",
      "translation": {
        "tr": "Kale",
        "en": "Castle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Burg.",
        "accusative": "Ich suche ___ Burg.",
        "dative": "Neben ___ Burg liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Büro",
      "translation": {
        "tr": "ofis",
        "en": "office"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Büro.",
        "accusative": "Ich suche ___ Büro.",
        "dative": "Ich bin in ___ Büro."
      }
    },
    {
      "article": "der",
      "word": "Bus",
      "translation": {
        "tr": "otobüs",
        "en": "bus"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Bus.",
        "accusative": "Ich nehme ___ Bus.",
        "dative": "Ich reise mit ___ Bus."
      }
    },
    {
      "article": "der",
      "word": "Busch",
      "translation": {
        "tr": "Çalı",
        "en": "Bush"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Busch.",
        "accusative": "Ich sehe ___ Busch.",
        "dative": "Ich sitze in ___ Busch."
      }
    },
    {
      "article": "die",
      "word": "Butter",
      "translation": {
        "tr": "tereyağı",
        "en": "butter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Butter.",
        "accusative": "Ich suche ___ Butter.",
        "dative": "Neben ___ Butter liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Cent",
      "translation": {
        "tr": "sent",
        "en": "cents"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Cent.",
        "accusative": "Ich kaufe ___ Cent.",
        "dative": "Mit ___ Cent arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Chef",
      "translation": {
        "tr": "Patron",
        "en": "Boss"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Chef.",
        "accusative": "Ich sehe ___ Chef.",
        "dative": "Ich antworte ___ Chef."
      }
    },
    {
      "article": "die",
      "word": "Cola",
      "translation": {
        "tr": "Kola",
        "en": "Cola"
      },
      "casePrompts": {
        "nominative": "Im Glas ist ___ Cola.",
        "accusative": "Ich kaufe ___ Cola.",
        "dative": "Mit ___ Cola stoßen wir an."
      }
    },
    {
      "article": "der",
      "word": "Computer",
      "translation": {
        "tr": "Bilgisayarlar",
        "en": "Computers"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Computer.",
        "accusative": "Ich kaufe ___ Computer.",
        "dative": "Ich arbeite mit ___ Computer."
      }
    },
    {
      "article": "der",
      "word": "Cousin",
      "translation": {
        "tr": "kuzen",
        "en": "cousin"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Cousin.",
        "accusative": "Ich suche ___ Cousin.",
        "dative": "Neben ___ Cousin liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Dach",
      "translation": {
        "tr": "çatı",
        "en": "roof"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dach.",
        "accusative": "Ich sehe ___ Dach.",
        "dative": "Ich gehe mit ___ Dach."
      }
    },
    {
      "article": "die",
      "word": "Dame",
      "translation": {
        "tr": "Bayan",
        "en": "lady"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dame.",
        "accusative": "Ich kaufe ___ Dame.",
        "dative": "Mit ___ Dame arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Dampf",
      "translation": {
        "tr": "buhar",
        "en": "steam"
      },
      "casePrompts": {
        "nominative": "Im Glas ist ___ Dampf.",
        "accusative": "Ich kaufe ___ Dampf.",
        "dative": "Mit ___ Dampf stoßen wir an."
      }
    },
    {
      "article": "das",
      "word": "Datum",
      "translation": {
        "tr": "Tarih",
        "en": "Date"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Datum.",
        "accusative": "Ich nehme ___ Datum.",
        "dative": "Vor ___ Datum steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Daumen",
      "translation": {
        "tr": "Başparmak",
        "en": "Thumb"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Daumen.",
        "accusative": "Ich sehe ___ Daumen.",
        "dative": "Ich gehe mit ___ Daumen."
      }
    },
    {
      "article": "die",
      "word": "Decke",
      "translation": {
        "tr": "battaniye",
        "en": "blanket"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Decke.",
        "accusative": "Ich kaufe ___ Decke.",
        "dative": "Mit ___ Decke arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Dezember",
      "translation": {
        "tr": "Aralık",
        "en": "December"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dezember.",
        "accusative": "Ich nehme ___ Dezember.",
        "dative": "Vor ___ Dezember steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Dienstag",
      "translation": {
        "tr": "Salı",
        "en": "Tuesday"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dienstag.",
        "accusative": "Ich suche ___ Dienstag.",
        "dative": "Neben ___ Dienstag liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ding",
      "translation": {
        "tr": "şey",
        "en": "thing"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ding.",
        "accusative": "Ich sehe ___ Ding.",
        "dative": "Ich gehe mit ___ Ding."
      }
    },
    {
      "article": "die",
      "word": "Diskussion",
      "translation": {
        "tr": "Tartışma",
        "en": "Discussion"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Diskussion.",
        "accusative": "Ich erwarte ___ Diskussion.",
        "dative": "Vor ___ Diskussion bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Doktor",
      "translation": {
        "tr": "Doktor",
        "en": "Doctor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Doktor.",
        "accusative": "Ich besuche ___ Doktor.",
        "dative": "Ich danke ___ Doktor."
      }
    },
    {
      "article": "das",
      "word": "Dokument",
      "translation": {
        "tr": "belge",
        "en": "document"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Dokument.",
        "accusative": "Ich öffne ___ Dokument.",
        "dative": "Ich arbeite mit ___ Dokument."
      }
    },
    {
      "article": "der",
      "word": "Dollar",
      "translation": {
        "tr": "dolar",
        "en": "dollars"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dollar.",
        "accusative": "Ich kaufe ___ Dollar.",
        "dative": "Mit ___ Dollar arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Donner",
      "translation": {
        "tr": "Gök gürültüsü",
        "en": "Thunder"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Donner.",
        "accusative": "Ich sehe ___ Donner.",
        "dative": "Ich gehe mit ___ Donner."
      }
    },
    {
      "article": "der",
      "word": "Donnerstag",
      "translation": {
        "tr": "perşembe",
        "en": "Thursday"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Donnerstag.",
        "accusative": "Ich nehme ___ Donnerstag.",
        "dative": "Vor ___ Donnerstag steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Doppelzimmer",
      "translation": {
        "tr": "Çift kişilik oda",
        "en": "Double room"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Doppelzimmer.",
        "accusative": "Ich besuche ___ Doppelzimmer.",
        "dative": "Ich warte vor ___ Doppelzimmer."
      }
    },
    {
      "article": "das",
      "word": "Dorf",
      "translation": {
        "tr": "Köy",
        "en": "Village"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Dorf.",
        "accusative": "Ich suche ___ Dorf.",
        "dative": "Ich bin in ___ Dorf."
      }
    },
    {
      "article": "die",
      "word": "Dose",
      "translation": {
        "tr": "yapabilir",
        "en": "can"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dose.",
        "accusative": "Ich nehme ___ Dose.",
        "dative": "Vor ___ Dose steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Drache",
      "translation": {
        "tr": "Ejderha",
        "en": "Dragon"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Drache.",
        "accusative": "Ich sehe ___ Drache.",
        "dative": "Ich gehe mit ___ Drache."
      }
    },
    {
      "article": "die",
      "word": "Drogerie",
      "translation": {
        "tr": "eczane",
        "en": "drugstore"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Drogerie.",
        "accusative": "Ich sehe ___ Drogerie.",
        "dative": "Ich gehe mit ___ Drogerie."
      }
    },
    {
      "article": "der",
      "word": "Drucker",
      "translation": {
        "tr": "Yazıcı",
        "en": "Printer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Drucker.",
        "accusative": "Ich repariere ___ Drucker.",
        "dative": "Ich schreibe mit ___ Drucker."
      }
    },
    {
      "article": "der",
      "word": "Durst",
      "translation": {
        "tr": "susuzluk",
        "en": "Thirst"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Durst.",
        "accusative": "Ich suche ___ Durst.",
        "dative": "Neben ___ Durst liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Dusche",
      "translation": {
        "tr": "duş",
        "en": "shower"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dusche.",
        "accusative": "Ich suche ___ Dusche.",
        "dative": "Neben ___ Dusche liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Dutzend",
      "translation": {
        "tr": "düzine",
        "en": "dozen"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Dutzend.",
        "accusative": "Ich plane ___ Dutzend.",
        "dative": "Nach ___ Dutzend mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Ecke",
      "translation": {
        "tr": "köşe",
        "en": "corner"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ecke.",
        "accusative": "Ich kaufe ___ Ecke.",
        "dative": "Mit ___ Ecke arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Ehe",
      "translation": {
        "tr": "Evlilik",
        "en": "Marriage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ehe.",
        "accusative": "Ich suche ___ Ehe.",
        "dative": "Neben ___ Ehe liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ehefrau",
      "translation": {
        "tr": "eş",
        "en": "wife"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ehefrau.",
        "accusative": "Ich nehme ___ Ehefrau.",
        "dative": "Vor ___ Ehefrau steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ehemann",
      "translation": {
        "tr": "koca",
        "en": "husband"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Ehemann.",
        "accusative": "Ich sehe ___ Ehemann.",
        "dative": "Ich antworte ___ Ehemann."
      }
    },
    {
      "article": "das",
      "word": "Ehepaar",
      "translation": {
        "tr": "evli çift",
        "en": "married couple"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ehepaar.",
        "accusative": "Ich suche ___ Ehepaar.",
        "dative": "Neben ___ Ehepaar liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ei",
      "translation": {
        "tr": "Yumurta",
        "en": "Egg"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ei.",
        "accusative": "Ich probiere ___ Ei.",
        "dative": "Ich beginne mit ___ Ei."
      }
    },
    {
      "article": "das",
      "word": "Eichhörnchen",
      "translation": {
        "tr": "sincap",
        "en": "Squirrel"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eichhörnchen.",
        "accusative": "Ich suche ___ Eichhörnchen.",
        "dative": "Neben ___ Eichhörnchen liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Einkauf",
      "translation": {
        "tr": "Satın alma",
        "en": "Purchasing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einkauf.",
        "accusative": "Ich kaufe ___ Einkauf.",
        "dative": "Mit ___ Einkauf arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Einkaufszentrum",
      "translation": {
        "tr": "Alışveriş merkezi",
        "en": "Shopping center"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Einkaufszentrum.",
        "accusative": "Ich besuche ___ Einkaufszentrum.",
        "dative": "Ich warte vor ___ Einkaufszentrum."
      }
    },
    {
      "article": "das",
      "word": "Einkommen",
      "translation": {
        "tr": "Gelir",
        "en": "Income"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einkommen.",
        "accusative": "Ich sehe ___ Einkommen.",
        "dative": "Ich gehe mit ___ Einkommen."
      }
    },
    {
      "article": "die",
      "word": "Einladung",
      "translation": {
        "tr": "Davet",
        "en": "Invitation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Einladung.",
        "accusative": "Ich suche ___ Einladung.",
        "dative": "Neben ___ Einladung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Eins",
      "translation": {
        "tr": "Bir",
        "en": "One"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Eins.",
        "accusative": "Ich kaufe ___ Eins.",
        "dative": "Mit ___ Eins arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Einwohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einwohner.",
        "accusative": "Ich sehe ___ Einwohner.",
        "dative": "Ich gehe mit ___ Einwohner."
      }
    },
    {
      "article": "das",
      "word": "Eis",
      "translation": {
        "tr": "Dondurma",
        "en": "Ice cream"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Eis.",
        "accusative": "Ich esse ___ Eis.",
        "dative": "Zu ___ Eis nehme ich ein Getränk."
      }
    },
    {
      "article": "der",
      "word": "Eisbär",
      "translation": {
        "tr": "Kutup ayısı",
        "en": "Polar bear"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Eisbär.",
        "accusative": "Ich füttere ___ Eisbär.",
        "dative": "Ich spiele mit ___ Eisbär."
      }
    },
    {
      "article": "das",
      "word": "Eisen",
      "translation": {
        "tr": "Demir",
        "en": "Iron"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eisen.",
        "accusative": "Ich suche ___ Eisen.",
        "dative": "Neben ___ Eisen liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Elefant",
      "translation": {
        "tr": "Fil",
        "en": "Elephant"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Elefant.",
        "accusative": "Ich sehe ___ Elefant.",
        "dative": "Ich gehe mit ___ Elefant."
      }
    },
    {
      "article": "der",
      "word": "Elektriker",
      "translation": {
        "tr": "Elektrikçi",
        "en": "Electrician"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Elektriker.",
        "accusative": "Ich kaufe ___ Elektriker.",
        "dative": "Mit ___ Elektriker arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Element",
      "translation": {
        "tr": "Öğe",
        "en": "Element"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Element.",
        "accusative": "Ich sehe ___ Element.",
        "dative": "Ich gehe mit ___ Element."
      }
    },
    {
      "article": "das",
      "word": "Ende",
      "translation": {
        "tr": "son",
        "en": "end"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Ende.",
        "accusative": "Ich sehe ___ Ende.",
        "dative": "Ich antworte ___ Ende."
      }
    },
    {
      "article": "die",
      "word": "Energie",
      "translation": {
        "tr": "Enerji",
        "en": "Energy"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Energie wichtig.",
        "accusative": "Wir verstehen ___ Energie.",
        "dative": "Bei ___ Energie brauche ich Hilfe."
      }
    },
    {
      "article": "der",
      "word": "Engel",
      "translation": {
        "tr": "Melek",
        "en": "Angel"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Engel.",
        "accusative": "Ich suche ___ Engel.",
        "dative": "Neben ___ Engel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Enkel",
      "translation": {
        "tr": "Torunlar",
        "en": "Grandchildren"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Enkel.",
        "accusative": "Ich kenne ___ Enkel.",
        "dative": "Ich spreche mit ___ Enkel."
      }
    },
    {
      "article": "die",
      "word": "Ente",
      "translation": {
        "tr": "Ördek",
        "en": "Duck"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ente.",
        "accusative": "Ich nehme ___ Ente.",
        "dative": "Vor ___ Ente steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Entschuldigung",
      "translation": {
        "tr": "Üzgünüm",
        "en": "Sorry"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Entschuldigung.",
        "accusative": "Ich nehme ___ Entschuldigung.",
        "dative": "Vor ___ Entschuldigung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Erde",
      "translation": {
        "tr": "Dünya",
        "en": "Earth"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Erde.",
        "accusative": "Ich sehe ___ Erde.",
        "dative": "Ich sitze an ___ Erde."
      }
    },
    {
      "article": "der",
      "word": "Erfolg",
      "translation": {
        "tr": "Başarı",
        "en": "Success"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erfolg.",
        "accusative": "Ich sehe ___ Erfolg.",
        "dative": "Ich gehe mit ___ Erfolg."
      }
    },
    {
      "article": "das",
      "word": "Ergebnis",
      "translation": {
        "tr": "Sonuç",
        "en": "Result"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ergebnis.",
        "accusative": "Ich besuche ___ Ergebnis.",
        "dative": "Ich danke ___ Ergebnis."
      }
    },
    {
      "article": "die",
      "word": "Erkältung",
      "translation": {
        "tr": "soğuk",
        "en": "cold"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erkältung.",
        "accusative": "Ich suche ___ Erkältung.",
        "dative": "Neben ___ Erkältung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Erste",
      "translation": {
        "tr": "İlk",
        "en": "First"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erste.",
        "accusative": "Ich kaufe ___ Erste.",
        "dative": "Mit ___ Erste arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Erwachsene",
      "translation": {
        "tr": "Yetişkinler",
        "en": "adults"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erwachsene.",
        "accusative": "Ich suche ___ Erwachsene.",
        "dative": "Neben ___ Erwachsene liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Espresso",
      "translation": {
        "tr": "Espresso",
        "en": "Espresso"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Espresso.",
        "accusative": "Ich suche ___ Espresso.",
        "dative": "Neben ___ Espresso liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Essen",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Essen.",
        "accusative": "Ich bestelle ___ Essen.",
        "dative": "Mit ___ Essen koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Essig",
      "translation": {
        "tr": "Sirke",
        "en": "Vinegar"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Essig.",
        "accusative": "Ich nehme ___ Essig.",
        "dative": "Vor ___ Essig steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Etage",
      "translation": {
        "tr": "kat",
        "en": "floor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Etage.",
        "accusative": "Ich sehe ___ Etage.",
        "dative": "Ich gehe mit ___ Etage."
      }
    },
    {
      "article": "das",
      "word": "Etikett",
      "translation": {
        "tr": "Etiket",
        "en": "Label"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Etikett.",
        "accusative": "Ich sehe ___ Etikett.",
        "dative": "Ich gehe mit ___ Etikett."
      }
    },
    {
      "article": "der",
      "word": "Euro",
      "translation": {
        "tr": "euro",
        "en": "euros"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Euro.",
        "accusative": "Ich kaufe ___ Euro.",
        "dative": "Mit ___ Euro arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Fahrrad",
      "translation": {
        "tr": "Bisiklet",
        "en": "Bicycle"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Fahrrad.",
        "accusative": "Ich miete ___ Fahrrad.",
        "dative": "Ich fahre mit ___ Fahrrad."
      }
    },
    {
      "article": "die",
      "word": "Familie",
      "translation": {
        "tr": "aile",
        "en": "family"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Familie.",
        "accusative": "Ich nehme ___ Familie.",
        "dative": "Vor ___ Familie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Farbe",
      "translation": {
        "tr": "renk",
        "en": "color"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Farbe.",
        "accusative": "Ich nehme ___ Farbe.",
        "dative": "Vor ___ Farbe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Februar",
      "translation": {
        "tr": "Şubat",
        "en": "February"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Februar.",
        "accusative": "Ich nehme ___ Februar.",
        "dative": "Vor ___ Februar steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fehler",
      "translation": {
        "tr": "Hata",
        "en": "Error"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Fehler.",
        "accusative": "Ich trage ___ Fehler.",
        "dative": "Neben ___ Fehler liegt ein Schal."
      }
    },
    {
      "article": "der",
      "word": "Feiertag",
      "translation": {
        "tr": "Tatil",
        "en": "Holiday"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Feiertag.",
        "accusative": "Ich organisiere ___ Feiertag.",
        "dative": "Nach ___ Feiertag fahre ich nach Hause."
      }
    },
    {
      "article": "das",
      "word": "Feld",
      "translation": {
        "tr": "alan",
        "en": "field"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Feld.",
        "accusative": "Ich sehe ___ Feld.",
        "dative": "Ich bleibe in ___ Feld."
      }
    },
    {
      "article": "das",
      "word": "Fenster",
      "translation": {
        "tr": "pencere",
        "en": "window"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fenster.",
        "accusative": "Ich suche ___ Fenster.",
        "dative": "Ich telefoniere mit ___ Fenster."
      }
    },
    {
      "article": "das",
      "word": "Fett",
      "translation": {
        "tr": "Şişman",
        "en": "Fat"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Fett.",
        "accusative": "Ich kenne ___ Fett.",
        "dative": "Ich spreche mit ___ Fett."
      }
    },
    {
      "article": "das",
      "word": "Feuer",
      "translation": {
        "tr": "Ateş",
        "en": "Fire"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Feuer.",
        "accusative": "Ich entdecke ___ Feuer.",
        "dative": "Ich gehe zu ___ Feuer."
      }
    },
    {
      "article": "der",
      "word": "Film",
      "translation": {
        "tr": "Film",
        "en": "Movie"
      },
      "casePrompts": {
        "nominative": "Im Regal steht ___ Film.",
        "accusative": "Ich lese ___ Film.",
        "dative": "Ich suche in ___ Film nach Infos."
      }
    },
    {
      "article": "der",
      "word": "Finger",
      "translation": {
        "tr": "parmaklar",
        "en": "fingers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Finger.",
        "accusative": "Ich kaufe ___ Finger.",
        "dative": "Mit ___ Finger arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Fisch",
      "translation": {
        "tr": "Balık",
        "en": "Fish"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Fisch.",
        "accusative": "Ich streichle ___ Fisch.",
        "dative": "Ich bin bei ___ Fisch."
      }
    },
    {
      "article": "die",
      "word": "Flasche",
      "translation": {
        "tr": "şişe",
        "en": "bottle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Flasche.",
        "accusative": "Ich kaufe ___ Flasche.",
        "dative": "Hinter ___ Flasche ist ein Fenster."
      }
    },
    {
      "article": "das",
      "word": "Fleisch",
      "translation": {
        "tr": "et",
        "en": "meat"
      },
      "casePrompts": {
        "nominative": "Auf dem Teller liegt ___ Fleisch.",
        "accusative": "Ich kaufe ___ Fleisch.",
        "dative": "Zu ___ Fleisch passt Brot."
      }
    },
    {
      "article": "der",
      "word": "Flug",
      "translation": {
        "tr": "uçuş",
        "en": "flight"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Flug.",
        "accusative": "Ich suche ___ Flug.",
        "dative": "Neben ___ Flug liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Flugzeug",
      "translation": {
        "tr": "Uçak",
        "en": "Airplane"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Flugzeug.",
        "accusative": "Ich miete ___ Flugzeug.",
        "dative": "Ich fahre mit ___ Flugzeug."
      }
    },
    {
      "article": "der",
      "word": "Fluss",
      "translation": {
        "tr": "nehir",
        "en": "river"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Fluss.",
        "accusative": "Ich suche ___ Fluss.",
        "dative": "Ich bin in ___ Fluss."
      }
    },
    {
      "article": "das",
      "word": "Foto",
      "translation": {
        "tr": "Fotoğraf",
        "en": "Photo"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Foto.",
        "accusative": "Ich öffne ___ Foto.",
        "dative": "Ich arbeite mit ___ Foto."
      }
    },
    {
      "article": "die",
      "word": "Frage",
      "translation": {
        "tr": "Soru",
        "en": "Question"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Frage wichtig.",
        "accusative": "Wir verstehen ___ Frage.",
        "dative": "Bei ___ Frage brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Frau",
      "translation": {
        "tr": "Bayan",
        "en": "Ms"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Frau.",
        "accusative": "Ich sehe ___ Frau.",
        "dative": "Ich gehe mit ___ Frau."
      }
    },
    {
      "article": "der",
      "word": "Freitag",
      "translation": {
        "tr": "Cuma",
        "en": "Friday"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Freitag.",
        "accusative": "Ich kaufe ___ Freitag.",
        "dative": "Mit ___ Freitag arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Freund",
      "translation": {
        "tr": "arkadaş",
        "en": "friend"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Freund.",
        "accusative": "Ich besuche ___ Freund.",
        "dative": "Ich danke ___ Freund."
      }
    },
    {
      "article": "die",
      "word": "Freundin",
      "translation": {
        "tr": "kız arkadaş",
        "en": "girlfriend"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Freundin.",
        "accusative": "Ich sehe ___ Freundin.",
        "dative": "Ich antworte ___ Freundin."
      }
    },
    {
      "article": "der",
      "word": "Friseur",
      "translation": {
        "tr": "Kuaför",
        "en": "Hairdresser"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Friseur.",
        "accusative": "Ich suche ___ Friseur.",
        "dative": "Ich gehe mit ___ Friseur raus."
      }
    },
    {
      "article": "der",
      "word": "Frosch",
      "translation": {
        "tr": "Kurbağa",
        "en": "Frog"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Frosch.",
        "accusative": "Ich nehme ___ Frosch.",
        "dative": "Vor ___ Frosch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Frühling",
      "translation": {
        "tr": "Bahar",
        "en": "Spring"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Frühling.",
        "accusative": "Ich wasche ___ Frühling.",
        "dative": "In ___ Frühling fühle ich mich wohl."
      }
    },
    {
      "article": "das",
      "word": "Frühstück",
      "translation": {
        "tr": "Kahvaltı",
        "en": "Breakfast"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Frühstück.",
        "accusative": "Ich bestelle ___ Frühstück.",
        "dative": "Mit ___ Frühstück koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Fuchs",
      "translation": {
        "tr": "Tilki",
        "en": "Fox"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fuchs.",
        "accusative": "Ich suche ___ Fuchs.",
        "dative": "Neben ___ Fuchs liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fuß",
      "translation": {
        "tr": "ayak",
        "en": "foot"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fuß.",
        "accusative": "Ich sehe ___ Fuß.",
        "dative": "Ich gehe mit ___ Fuß."
      }
    },
    {
      "article": "der",
      "word": "Fußball",
      "translation": {
        "tr": "Futbol",
        "en": "Football"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fußball.",
        "accusative": "Ich sehe ___ Fußball.",
        "dative": "Ich gehe mit ___ Fußball."
      }
    },
    {
      "article": "die",
      "word": "Gabel",
      "translation": {
        "tr": "çatal",
        "en": "fork"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gabel.",
        "accusative": "Ich nehme ___ Gabel.",
        "dative": "Vor ___ Gabel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gans",
      "translation": {
        "tr": "Kaz",
        "en": "Goose"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gans.",
        "accusative": "Ich sehe ___ Gans.",
        "dative": "Ich gehe mit ___ Gans."
      }
    },
    {
      "article": "der",
      "word": "Garten",
      "translation": {
        "tr": "Bahçe",
        "en": "Garden"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Garten.",
        "accusative": "Ich fotografiere ___ Garten.",
        "dative": "Wir treffen uns bei ___ Garten."
      }
    },
    {
      "article": "der",
      "word": "Gast",
      "translation": {
        "tr": "Misafir",
        "en": "Guest"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Gast.",
        "accusative": "Ich treffe ___ Gast.",
        "dative": "Ich helfe ___ Gast."
      }
    },
    {
      "article": "der",
      "word": "Geburtstag",
      "translation": {
        "tr": "doğum günü",
        "en": "birthday"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geburtstag.",
        "accusative": "Ich nehme ___ Geburtstag.",
        "dative": "Vor ___ Geburtstag steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Geld",
      "translation": {
        "tr": "para",
        "en": "money"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geld.",
        "accusative": "Ich suche ___ Geld.",
        "dative": "Neben ___ Geld liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gemüse",
      "translation": {
        "tr": "sebzeler",
        "en": "vegetables"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gemüse.",
        "accusative": "Ich probiere ___ Gemüse.",
        "dative": "Ich beginne mit ___ Gemüse."
      }
    },
    {
      "article": "das",
      "word": "Geschenk",
      "translation": {
        "tr": "Hediye",
        "en": "Gift"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geschenk.",
        "accusative": "Ich suche ___ Geschenk.",
        "dative": "Neben ___ Geschenk liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gesicht",
      "translation": {
        "tr": "yüz",
        "en": "face"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesicht.",
        "accusative": "Ich sehe ___ Gesicht.",
        "dative": "Ich gehe mit ___ Gesicht."
      }
    },
    {
      "article": "die",
      "word": "Gitarre",
      "translation": {
        "tr": "gitar",
        "en": "guitar"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gitarre.",
        "accusative": "Ich suche ___ Gitarre.",
        "dative": "Neben ___ Gitarre liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Glas",
      "translation": {
        "tr": "Cam",
        "en": "Glass"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Glas.",
        "accusative": "Ich kaufe ___ Glas.",
        "dative": "Mit ___ Glas arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gott",
      "translation": {
        "tr": "Tanrı",
        "en": "God"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gott.",
        "accusative": "Ich sehe ___ Gott.",
        "dative": "Ich gehe mit ___ Gott."
      }
    },
    {
      "article": "die",
      "word": "Großmutter",
      "translation": {
        "tr": "büyükanne",
        "en": "Grandmother"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Großmutter.",
        "accusative": "Ich treffe ___ Großmutter.",
        "dative": "Ich helfe ___ Großmutter."
      }
    },
    {
      "article": "der",
      "word": "Großvater",
      "translation": {
        "tr": "Büyükbaba",
        "en": "Grandfather"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Großvater.",
        "accusative": "Ich treffe ___ Großvater.",
        "dative": "Ich helfe ___ Großvater."
      }
    },
    {
      "article": "die",
      "word": "Grundschule",
      "translation": {
        "tr": "İlkokul",
        "en": "Elementary school"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Grundschule.",
        "accusative": "Ich fotografiere ___ Grundschule.",
        "dative": "Wir treffen uns bei ___ Grundschule."
      }
    },
    {
      "article": "das",
      "word": "Haar",
      "translation": {
        "tr": "saç",
        "en": "hair"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Haar.",
        "accusative": "Ich beobachte ___ Haar.",
        "dative": "Ich stehe vor ___ Haar."
      }
    },
    {
      "article": "der",
      "word": "Hals",
      "translation": {
        "tr": "boyun",
        "en": "neck"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Hals.",
        "accusative": "Ich sehe ___ Hals.",
        "dative": "Ich antworte ___ Hals."
      }
    },
    {
      "article": "der",
      "word": "Hammer",
      "translation": {
        "tr": "Çekiç",
        "en": "Hammer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Hammer.",
        "accusative": "Ich repariere ___ Hammer.",
        "dative": "Ich schreibe mit ___ Hammer."
      }
    },
    {
      "article": "die",
      "word": "Hand",
      "translation": {
        "tr": "el",
        "en": "hand"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hand.",
        "accusative": "Ich suche ___ Hand.",
        "dative": "Neben ___ Hand liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Handtuch",
      "translation": {
        "tr": "havlu",
        "en": "towel"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Handtuch.",
        "accusative": "Ich sehe ___ Handtuch.",
        "dative": "Ich gehe mit ___ Handtuch."
      }
    },
    {
      "article": "das",
      "word": "Handy",
      "translation": {
        "tr": "cep telefonu",
        "en": "cell phone"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Handy.",
        "accusative": "Ich benutze ___ Handy.",
        "dative": "Ich lerne mit ___ Handy."
      }
    },
    {
      "article": "der",
      "word": "Hase",
      "translation": {
        "tr": "tavşan",
        "en": "Bunny"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hase.",
        "accusative": "Ich nehme ___ Hase.",
        "dative": "Vor ___ Hase steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Haus",
      "translation": {
        "tr": "ev",
        "en": "house"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Haus.",
        "accusative": "Ich suche ___ Haus.",
        "dative": "Ich bin in ___ Haus."
      }
    },
    {
      "article": "das",
      "word": "Haustier",
      "translation": {
        "tr": "evcil hayvan",
        "en": "pet"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Haustier.",
        "accusative": "Ich sehe ___ Haustier.",
        "dative": "Ich gehe mit ___ Haustier."
      }
    },
    {
      "article": "das",
      "word": "Hemd",
      "translation": {
        "tr": "gömlek",
        "en": "shirt"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Hemd.",
        "accusative": "Ich suche ___ Hemd.",
        "dative": "Ich gehe mit ___ Hemd raus."
      }
    },
    {
      "article": "der",
      "word": "Herbst",
      "translation": {
        "tr": "Sonbahar",
        "en": "Autumn"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Herbst.",
        "accusative": "Ich besuche ___ Herbst.",
        "dative": "Ich danke ___ Herbst."
      }
    },
    {
      "article": "der",
      "word": "Herr",
      "translation": {
        "tr": "Efendim",
        "en": "Sir"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Herr.",
        "accusative": "Ich starte ___ Herr.",
        "dative": "Bei ___ Herr lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Herz",
      "translation": {
        "tr": "kalp",
        "en": "heart"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Herz.",
        "accusative": "Ich kaufe ___ Herz.",
        "dative": "Mit ___ Herz arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Himmel",
      "translation": {
        "tr": "Cennet",
        "en": "Heaven"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Himmel.",
        "accusative": "Ich nehme ___ Himmel.",
        "dative": "Vor ___ Himmel steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Holz",
      "translation": {
        "tr": "Ahşap",
        "en": "Wood"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Holz.",
        "accusative": "Ich beobachte ___ Holz.",
        "dative": "Ich stehe vor ___ Holz."
      }
    },
    {
      "article": "der",
      "word": "Honig",
      "translation": {
        "tr": "tatlım",
        "en": "honey"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Honig.",
        "accusative": "Ich sehe ___ Honig.",
        "dative": "Ich gehe mit ___ Honig."
      }
    },
    {
      "article": "die",
      "word": "Hose",
      "translation": {
        "tr": "Pantolon",
        "en": "Pants"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hose.",
        "accusative": "Ich wasche ___ Hose.",
        "dative": "In ___ Hose fühle ich mich wohl."
      }
    },
    {
      "article": "das",
      "word": "Hotel",
      "translation": {
        "tr": "Otel",
        "en": "Hotel"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Hotel.",
        "accusative": "Ich besuche ___ Hotel.",
        "dative": "Ich warte vor ___ Hotel."
      }
    },
    {
      "article": "das",
      "word": "Huhn",
      "translation": {
        "tr": "tavuk",
        "en": "chicken"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Huhn.",
        "accusative": "Ich sehe ___ Huhn.",
        "dative": "Ich komme mit ___ Huhn."
      }
    },
    {
      "article": "der",
      "word": "Hund",
      "translation": {
        "tr": "Köpek",
        "en": "Dog"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Hund.",
        "accusative": "Ich füttere ___ Hund.",
        "dative": "Ich spiele mit ___ Hund."
      }
    },
    {
      "article": "der",
      "word": "Hut",
      "translation": {
        "tr": "şapka",
        "en": "hat"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Hut.",
        "accusative": "Ich suche ___ Hut.",
        "dative": "Ich gehe mit ___ Hut raus."
      }
    },
    {
      "article": "der",
      "word": "Igel",
      "translation": {
        "tr": "kirpi",
        "en": "hedgehog"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Igel.",
        "accusative": "Ich sehe ___ Igel.",
        "dative": "Ich gehe mit ___ Igel."
      }
    },
    {
      "article": "das",
      "word": "Insekt",
      "translation": {
        "tr": "böcek",
        "en": "insect"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Insekt.",
        "accusative": "Ich beobachte ___ Insekt.",
        "dative": "Ich stehe neben ___ Insekt."
      }
    },
    {
      "article": "das",
      "word": "Interesse",
      "translation": {
        "tr": "faiz",
        "en": "interest"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Interesse.",
        "accusative": "Ich sehe ___ Interesse.",
        "dative": "Ich gehe mit ___ Interesse."
      }
    },
    {
      "article": "das",
      "word": "Internet",
      "translation": {
        "tr": "internet",
        "en": "Internet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Internet.",
        "accusative": "Ich suche ___ Internet.",
        "dative": "Neben ___ Internet liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Jacke",
      "translation": {
        "tr": "ceket",
        "en": "jacket"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Jacke.",
        "accusative": "Ich suche ___ Jacke.",
        "dative": "Ich gehe mit ___ Jacke raus."
      }
    },
    {
      "article": "das",
      "word": "Jahr",
      "translation": {
        "tr": "yıl",
        "en": "year"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jahr.",
        "accusative": "Ich suche ___ Jahr.",
        "dative": "Neben ___ Jahr liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Januar",
      "translation": {
        "tr": "Ocak",
        "en": "January"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Januar.",
        "accusative": "Ich nehme ___ Januar.",
        "dative": "Vor ___ Januar steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Juli",
      "translation": {
        "tr": "Temmuz",
        "en": "July"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Juli.",
        "accusative": "Ich suche ___ Juli.",
        "dative": "Neben ___ Juli liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Junge",
      "translation": {
        "tr": "oğlan",
        "en": "Boy"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Junge.",
        "accusative": "Ich sehe ___ Junge.",
        "dative": "Ich antworte ___ Junge."
      }
    },
    {
      "article": "der",
      "word": "Juni",
      "translation": {
        "tr": "Haziran",
        "en": "June"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Juni.",
        "accusative": "Ich suche ___ Juni.",
        "dative": "Neben ___ Juni liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kaffee",
      "translation": {
        "tr": "Kahve",
        "en": "Coffee"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch steht ___ Kaffee.",
        "accusative": "Ich trinke ___ Kaffee.",
        "dative": "Zu ___ Kaffee passt ein Dessert."
      }
    },
    {
      "article": "das",
      "word": "Kaninchen",
      "translation": {
        "tr": "Tavşan",
        "en": "Rabbit"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Kaninchen.",
        "accusative": "Ich streichle ___ Kaninchen.",
        "dative": "Ich bin bei ___ Kaninchen."
      }
    },
    {
      "article": "die",
      "word": "Karte",
      "translation": {
        "tr": "Harita",
        "en": "Map"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Karte.",
        "accusative": "Ich nehme ___ Karte.",
        "dative": "Vor ___ Karte steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kartoffel",
      "translation": {
        "tr": "Patates",
        "en": "Potato"
      },
      "casePrompts": {
        "nominative": "Auf dem Teller liegt ___ Kartoffel.",
        "accusative": "Ich kaufe ___ Kartoffel.",
        "dative": "Zu ___ Kartoffel passt Brot."
      }
    },
    {
      "article": "der",
      "word": "Käse",
      "translation": {
        "tr": "Peynir",
        "en": "Cheese"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Käse.",
        "accusative": "Ich bestelle ___ Käse.",
        "dative": "Mit ___ Käse koche ich heute."
      }
    },
    {
      "article": "die",
      "word": "Katze",
      "translation": {
        "tr": "kedi",
        "en": "cat"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Katze.",
        "accusative": "Ich füttere ___ Katze.",
        "dative": "Ich spiele mit ___ Katze."
      }
    },
    {
      "article": "die",
      "word": "Kerze",
      "translation": {
        "tr": "mum",
        "en": "candle"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kerze.",
        "accusative": "Ich sehe ___ Kerze.",
        "dative": "Ich gehe mit ___ Kerze."
      }
    },
    {
      "article": "das",
      "word": "Kind",
      "translation": {
        "tr": "çocuk",
        "en": "child"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Kind.",
        "accusative": "Ich kenne ___ Kind.",
        "dative": "Ich spreche mit ___ Kind."
      }
    },
    {
      "article": "der",
      "word": "Kindergarten",
      "translation": {
        "tr": "Anaokulu",
        "en": "Kindergarten"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kindergarten.",
        "accusative": "Ich suche ___ Kindergarten.",
        "dative": "Neben ___ Kindergarten liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Kino",
      "translation": {
        "tr": "Sinema",
        "en": "Cinema"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Kino.",
        "accusative": "Ich besuche ___ Kino.",
        "dative": "Ich warte vor ___ Kino."
      }
    },
    {
      "article": "die",
      "word": "Kirche",
      "translation": {
        "tr": "Kilise",
        "en": "Church"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Kirche.",
        "accusative": "Ich sehe ___ Kirche.",
        "dative": "Ich bleibe in ___ Kirche."
      }
    },
    {
      "article": "das",
      "word": "Kissen",
      "translation": {
        "tr": "Yastık",
        "en": "Pillow"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kissen.",
        "accusative": "Ich sehe ___ Kissen.",
        "dative": "Ich gehe mit ___ Kissen."
      }
    },
    {
      "article": "das",
      "word": "Kleid",
      "translation": {
        "tr": "elbise",
        "en": "dress"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Kleid.",
        "accusative": "Ich suche ___ Kleid.",
        "dative": "Ich gehe mit ___ Kleid raus."
      }
    },
    {
      "article": "das",
      "word": "Klo",
      "translation": {
        "tr": "Tuvalet",
        "en": "Loo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Klo.",
        "accusative": "Ich suche ___ Klo.",
        "dative": "Neben ___ Klo liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Koch",
      "translation": {
        "tr": "Aşçı",
        "en": "Cook"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Koch.",
        "accusative": "Ich nehme ___ Koch.",
        "dative": "Vor ___ Koch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Koffer",
      "translation": {
        "tr": "bavul",
        "en": "suitcase"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Koffer.",
        "accusative": "Ich suche ___ Koffer.",
        "dative": "Neben ___ Koffer liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "König",
      "translation": {
        "tr": "Kral",
        "en": "King"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ König.",
        "accusative": "Ich sehe ___ König.",
        "dative": "Ich gehe mit ___ König."
      }
    },
    {
      "article": "die",
      "word": "Königin",
      "translation": {
        "tr": "Kraliçe",
        "en": "Queen"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Königin.",
        "accusative": "Ich sehe ___ Königin.",
        "dative": "Ich gehe mit ___ Königin."
      }
    },
    {
      "article": "der",
      "word": "Kopf",
      "translation": {
        "tr": "kafa",
        "en": "head"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kopf.",
        "accusative": "Ich sehe ___ Kopf.",
        "dative": "Ich gehe mit ___ Kopf."
      }
    },
    {
      "article": "der",
      "word": "Körper",
      "translation": {
        "tr": "vücut",
        "en": "body"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Körper.",
        "accusative": "Ich suche ___ Körper.",
        "dative": "Neben ___ Körper liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Krokodil",
      "translation": {
        "tr": "Timsah",
        "en": "Crocodile"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Krokodil.",
        "accusative": "Ich nehme ___ Krokodil.",
        "dative": "Vor ___ Krokodil steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Küche",
      "translation": {
        "tr": "Mutfak",
        "en": "Kitchen"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Küche.",
        "accusative": "Ich suche ___ Küche.",
        "dative": "Ich bin in ___ Küche."
      }
    },
    {
      "article": "der",
      "word": "Kuchen",
      "translation": {
        "tr": "Kek",
        "en": "Cake"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Kuchen.",
        "accusative": "Ich bestelle ___ Kuchen.",
        "dative": "Mit ___ Kuchen koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Kugelschreiber",
      "translation": {
        "tr": "Tükenmez kalem",
        "en": "Ballpoint pen"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Kugelschreiber.",
        "accusative": "Ich kaufe ___ Kugelschreiber.",
        "dative": "Ich arbeite mit ___ Kugelschreiber."
      }
    },
    {
      "article": "die",
      "word": "Kuh",
      "translation": {
        "tr": "İnek",
        "en": "Cow"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Kuh.",
        "accusative": "Ich streichle ___ Kuh.",
        "dative": "Ich bin bei ___ Kuh."
      }
    },
    {
      "article": "der",
      "word": "Kühlschrank",
      "translation": {
        "tr": "Buzdolabı",
        "en": "Refrigerator"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kühlschrank.",
        "accusative": "Ich kaufe ___ Kühlschrank.",
        "dative": "Mit ___ Kühlschrank arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lampe",
      "translation": {
        "tr": "lamba",
        "en": "lamp"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Lampe.",
        "accusative": "Ich sehe ___ Lampe.",
        "dative": "Ich stehe bei ___ Lampe."
      }
    },
    {
      "article": "das",
      "word": "Land",
      "translation": {
        "tr": "ülke",
        "en": "country"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Land.",
        "accusative": "Ich sehe ___ Land.",
        "dative": "Ich bleibe in ___ Land."
      }
    },
    {
      "article": "das",
      "word": "Leben",
      "translation": {
        "tr": "hayat",
        "en": "life"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Leben.",
        "accusative": "Ich sehe ___ Leben.",
        "dative": "Ich gehe mit ___ Leben."
      }
    },
    {
      "article": "das",
      "word": "Lebensmittel",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Lebensmittel.",
        "accusative": "Ich esse ___ Lebensmittel.",
        "dative": "Zu ___ Lebensmittel nehme ich ein Getränk."
      }
    },
    {
      "article": "der",
      "word": "Lehrer",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lehrer.",
        "accusative": "Ich besuche ___ Lehrer.",
        "dative": "Ich danke ___ Lehrer."
      }
    },
    {
      "article": "die",
      "word": "Lehrerin",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Lehrerin.",
        "accusative": "Ich treffe ___ Lehrerin.",
        "dative": "Ich helfe ___ Lehrerin."
      }
    },
    {
      "article": "das",
      "word": "Licht",
      "translation": {
        "tr": "Işık",
        "en": "Light"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Licht.",
        "accusative": "Ich sehe ___ Licht.",
        "dative": "Ich gehe mit ___ Licht."
      }
    },
    {
      "article": "die",
      "word": "Liebe",
      "translation": {
        "tr": "aşk",
        "en": "Love"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Liebe wichtig.",
        "accusative": "Wir verstehen ___ Liebe.",
        "dative": "Bei ___ Liebe brauche ich Hilfe."
      }
    },
    {
      "article": "das",
      "word": "Lied",
      "translation": {
        "tr": "şarkı",
        "en": "song"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Lied.",
        "accusative": "Ich treffe ___ Lied.",
        "dative": "Ich helfe ___ Lied."
      }
    },
    {
      "article": "die",
      "word": "Lippe",
      "translation": {
        "tr": "Dudak",
        "en": "Lip"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lippe.",
        "accusative": "Ich kaufe ___ Lippe.",
        "dative": "Mit ___ Lippe arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Liter",
      "translation": {
        "tr": "litre",
        "en": "liters"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Liter.",
        "accusative": "Ich nehme ___ Liter.",
        "dative": "Vor ___ Liter steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Loch",
      "translation": {
        "tr": "delik",
        "en": "hole"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Loch.",
        "accusative": "Ich suche ___ Loch.",
        "dative": "Neben ___ Loch liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Löffel",
      "translation": {
        "tr": "kaşık",
        "en": "spoon"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Löffel.",
        "accusative": "Ich suche ___ Löffel.",
        "dative": "Neben ___ Löffel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Löwe",
      "translation": {
        "tr": "Aslan",
        "en": "Leo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Löwe.",
        "accusative": "Ich suche ___ Löwe.",
        "dative": "Neben ___ Löwe liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Luft",
      "translation": {
        "tr": "hava",
        "en": "air"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Luft.",
        "accusative": "Ich entdecke ___ Luft.",
        "dative": "Ich gehe zu ___ Luft."
      }
    },
    {
      "article": "das",
      "word": "Mädchen",
      "translation": {
        "tr": "Kızlar",
        "en": "Girls"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mädchen.",
        "accusative": "Ich besuche ___ Mädchen.",
        "dative": "Ich danke ___ Mädchen."
      }
    },
    {
      "article": "der",
      "word": "Magen",
      "translation": {
        "tr": "mide",
        "en": "stomach"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Magen.",
        "accusative": "Ich kaufe ___ Magen.",
        "dative": "Mit ___ Magen arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Mahlzeit",
      "translation": {
        "tr": "yemek",
        "en": "meal"
      },
      "casePrompts": {
        "nominative": "Auf dem Teller liegt ___ Mahlzeit.",
        "accusative": "Ich kaufe ___ Mahlzeit.",
        "dative": "Zu ___ Mahlzeit passt Brot."
      }
    },
    {
      "article": "der",
      "word": "Mai",
      "translation": {
        "tr": "Mayıs",
        "en": "May"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mai.",
        "accusative": "Ich suche ___ Mai.",
        "dative": "Neben ___ Mai liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mama",
      "translation": {
        "tr": "Anne",
        "en": "Mom"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mama.",
        "accusative": "Ich kaufe ___ Mama.",
        "dative": "Mit ___ Mama arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mann",
      "translation": {
        "tr": "adam",
        "en": "Man"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mann.",
        "accusative": "Ich besuche ___ Mann.",
        "dative": "Ich danke ___ Mann."
      }
    },
    {
      "article": "das",
      "word": "Märchen",
      "translation": {
        "tr": "peri masalları",
        "en": "fairy tales"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Märchen.",
        "accusative": "Ich fotografiere ___ Märchen.",
        "dative": "Ich bin bei ___ Märchen."
      }
    },
    {
      "article": "der",
      "word": "Markt",
      "translation": {
        "tr": "pazar",
        "en": "market"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Markt.",
        "accusative": "Ich suche ___ Markt.",
        "dative": "Ich bin in ___ Markt."
      }
    },
    {
      "article": "der",
      "word": "März",
      "translation": {
        "tr": "Mart",
        "en": "March"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ März.",
        "accusative": "Ich suche ___ März.",
        "dative": "Neben ___ März liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Maus",
      "translation": {
        "tr": "Fare",
        "en": "Mouse"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Maus.",
        "accusative": "Ich füttere ___ Maus.",
        "dative": "Ich spiele mit ___ Maus."
      }
    },
    {
      "article": "das",
      "word": "Meer",
      "translation": {
        "tr": "deniz",
        "en": "sea"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Meer.",
        "accusative": "Ich besuche ___ Meer.",
        "dative": "Ich warte vor ___ Meer."
      }
    },
    {
      "article": "das",
      "word": "Mehl",
      "translation": {
        "tr": "un",
        "en": "flour"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mehl.",
        "accusative": "Ich suche ___ Mehl.",
        "dative": "Neben ___ Mehl liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Mensch",
      "translation": {
        "tr": "İnsan",
        "en": "Human"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Mensch.",
        "accusative": "Ich treffe ___ Mensch.",
        "dative": "Ich helfe ___ Mensch."
      }
    },
    {
      "article": "das",
      "word": "Messer",
      "translation": {
        "tr": "Bıçak",
        "en": "Knife"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Messer.",
        "accusative": "Ich suche ___ Messer.",
        "dative": "Neben ___ Messer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Milch",
      "translation": {
        "tr": "süt",
        "en": "milk"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch steht ___ Milch.",
        "accusative": "Ich trinke ___ Milch.",
        "dative": "Zu ___ Milch passt ein Dessert."
      }
    },
    {
      "article": "das",
      "word": "Mineralwasser",
      "translation": {
        "tr": "Maden suyu",
        "en": "Mineral water"
      },
      "casePrompts": {
        "nominative": "Im Glas ist ___ Mineralwasser.",
        "accusative": "Ich kaufe ___ Mineralwasser.",
        "dative": "Mit ___ Mineralwasser stoßen wir an."
      }
    },
    {
      "article": "die",
      "word": "Minute",
      "translation": {
        "tr": "dakika",
        "en": "minute"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Minute.",
        "accusative": "Ich suche ___ Minute.",
        "dative": "Neben ___ Minute liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Mittwoch",
      "translation": {
        "tr": "Çarşamba",
        "en": "Wednesday"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mittwoch.",
        "accusative": "Ich kaufe ___ Mittwoch.",
        "dative": "Mit ___ Mittwoch arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mond",
      "translation": {
        "tr": "Ay",
        "en": "Moon"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Mond.",
        "accusative": "Ich fotografiere ___ Mond.",
        "dative": "Ich bin bei ___ Mond."
      }
    },
    {
      "article": "der",
      "word": "Montag",
      "translation": {
        "tr": "Pazartesi",
        "en": "Monday"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Montag.",
        "accusative": "Ich sehe ___ Montag.",
        "dative": "Ich gehe mit ___ Montag."
      }
    },
    {
      "article": "der",
      "word": "Morgen",
      "translation": {
        "tr": "Yarın",
        "en": "Tomorrow"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Morgen.",
        "accusative": "Ich kaufe ___ Morgen.",
        "dative": "Mit ___ Morgen arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mund",
      "translation": {
        "tr": "ağız",
        "en": "mouth"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mund.",
        "accusative": "Ich nehme ___ Mund.",
        "dative": "Vor ___ Mund steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Musik",
      "translation": {
        "tr": "Müzik",
        "en": "Music"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Musik.",
        "accusative": "Ich suche ___ Musik.",
        "dative": "Neben ___ Musik liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mutter",
      "translation": {
        "tr": "anne",
        "en": "mother"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Mutter.",
        "accusative": "Ich kenne ___ Mutter.",
        "dative": "Ich spreche mit ___ Mutter."
      }
    },
    {
      "article": "die",
      "word": "Mütze",
      "translation": {
        "tr": "Şapka",
        "en": "Hat"
      },
      "casePrompts": {
        "nominative": "Im Laden ist ___ Mütze.",
        "accusative": "Ich kaufe ___ Mütze.",
        "dative": "Zu ___ Mütze passt die Tasche."
      }
    },
    {
      "article": "der",
      "word": "Nachbar",
      "translation": {
        "tr": "komşu",
        "en": "neighbor"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Nachbar.",
        "accusative": "Ich sehe ___ Nachbar.",
        "dative": "Ich antworte ___ Nachbar."
      }
    },
    {
      "article": "der",
      "word": "Nachmittag",
      "translation": {
        "tr": "öğleden sonra",
        "en": "afternoon"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nachmittag.",
        "accusative": "Ich besuche ___ Nachmittag.",
        "dative": "Ich danke ___ Nachmittag."
      }
    },
    {
      "article": "die",
      "word": "Nachricht",
      "translation": {
        "tr": "Mesaj",
        "en": "Message"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Nachricht.",
        "accusative": "Ich schreibe ___ Nachricht.",
        "dative": "In ___ Nachricht steht alles."
      }
    },
    {
      "article": "die",
      "word": "Nacht",
      "translation": {
        "tr": "gece",
        "en": "night"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nacht.",
        "accusative": "Ich sehe ___ Nacht.",
        "dative": "Ich gehe mit ___ Nacht."
      }
    },
    {
      "article": "der",
      "word": "Nagel",
      "translation": {
        "tr": "Çivi",
        "en": "Nail"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nagel.",
        "accusative": "Ich nehme ___ Nagel.",
        "dative": "Vor ___ Nagel steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Name",
      "translation": {
        "tr": "isim",
        "en": "name"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Name.",
        "accusative": "Ich suche ___ Name.",
        "dative": "Neben ___ Name liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Nase",
      "translation": {
        "tr": "burun",
        "en": "nose"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nase.",
        "accusative": "Ich sehe ___ Nase.",
        "dative": "Ich gehe mit ___ Nase."
      }
    },
    {
      "article": "das",
      "word": "Nest",
      "translation": {
        "tr": "yuva",
        "en": "nest"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nest.",
        "accusative": "Ich suche ___ Nest.",
        "dative": "Neben ___ Nest liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Norden",
      "translation": {
        "tr": "Kuzey",
        "en": "North"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Norden.",
        "accusative": "Ich nehme ___ Norden.",
        "dative": "Vor ___ Norden steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "November",
      "translation": {
        "tr": "Kasım",
        "en": "November"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ November.",
        "accusative": "Ich suche ___ November.",
        "dative": "Neben ___ November liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Null",
      "translation": {
        "tr": "Sıfır",
        "en": "Zero"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Null.",
        "accusative": "Ich kaufe ___ Null.",
        "dative": "Mit ___ Null arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Obst",
      "translation": {
        "tr": "meyve",
        "en": "fruit"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Obst.",
        "accusative": "Ich esse ___ Obst.",
        "dative": "Zu ___ Obst nehme ich ein Getränk."
      }
    },
    {
      "article": "der",
      "word": "Ofen",
      "translation": {
        "tr": "Fırın",
        "en": "Oven"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ofen.",
        "accusative": "Ich suche ___ Ofen.",
        "dative": "Neben ___ Ofen liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ohr",
      "translation": {
        "tr": "kulak",
        "en": "ear"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ohr.",
        "accusative": "Ich kaufe ___ Ohr.",
        "dative": "Mit ___ Ohr arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Oktober",
      "translation": {
        "tr": "Ekim",
        "en": "October"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Oktober.",
        "accusative": "Ich sehe ___ Oktober.",
        "dative": "Ich gehe mit ___ Oktober."
      }
    },
    {
      "article": "das",
      "word": "Öl",
      "translation": {
        "tr": "yağ",
        "en": "oil"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Öl.",
        "accusative": "Ich sehe ___ Öl.",
        "dative": "Ich gehe mit ___ Öl."
      }
    },
    {
      "article": "die",
      "word": "Oma",
      "translation": {
        "tr": "büyükanne",
        "en": "Grandma"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Oma.",
        "accusative": "Ich kaufe ___ Oma.",
        "dative": "Mit ___ Oma arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Onkel",
      "translation": {
        "tr": "amca",
        "en": "Uncle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Onkel.",
        "accusative": "Ich suche ___ Onkel.",
        "dative": "Neben ___ Onkel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Opa",
      "translation": {
        "tr": "büyükbaba",
        "en": "Grandpa"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Opa.",
        "accusative": "Ich nehme ___ Opa.",
        "dative": "Vor ___ Opa steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Orange",
      "translation": {
        "tr": "Turuncu",
        "en": "Orange"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Orange.",
        "accusative": "Ich bestelle ___ Orange.",
        "dative": "Mit ___ Orange koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Ort",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Ort.",
        "accusative": "Ich beobachte ___ Ort.",
        "dative": "Ich stehe neben ___ Ort."
      }
    },
    {
      "article": "der",
      "word": "Osten",
      "translation": {
        "tr": "Doğu",
        "en": "East"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Osten.",
        "accusative": "Ich suche ___ Osten.",
        "dative": "Neben ___ Osten liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Papa",
      "translation": {
        "tr": "baba",
        "en": "Dad"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Papa.",
        "accusative": "Ich nehme ___ Papa.",
        "dative": "Vor ___ Papa steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Papier",
      "translation": {
        "tr": "kağıt",
        "en": "paper"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Papier.",
        "accusative": "Ich schreibe ___ Papier.",
        "dative": "In ___ Papier steht alles."
      }
    },
    {
      "article": "die",
      "word": "Pause",
      "translation": {
        "tr": "Mola",
        "en": "Break"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Pause.",
        "accusative": "Ich starte ___ Pause.",
        "dative": "Bei ___ Pause lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Pferd",
      "translation": {
        "tr": "at",
        "en": "horse"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Pferd.",
        "accusative": "Ich beobachte ___ Pferd.",
        "dative": "Ich stehe neben ___ Pferd."
      }
    },
    {
      "article": "die",
      "word": "Pflanze",
      "translation": {
        "tr": "bitki",
        "en": "plant"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Pflanze.",
        "accusative": "Ich starte ___ Pflanze.",
        "dative": "Bei ___ Pflanze lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Pizza",
      "translation": {
        "tr": "pizza",
        "en": "Pizza"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Pizza.",
        "accusative": "Ich esse ___ Pizza.",
        "dative": "Zu ___ Pizza nehme ich ein Getränk."
      }
    },
    {
      "article": "der",
      "word": "Platz",
      "translation": {
        "tr": "yer",
        "en": "place"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Platz.",
        "accusative": "Ich suche ___ Platz.",
        "dative": "Neben ___ Platz liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Polizei",
      "translation": {
        "tr": "Polis",
        "en": "Police"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Polizei.",
        "accusative": "Ich besuche ___ Polizei.",
        "dative": "Ich danke ___ Polizei."
      }
    },
    {
      "article": "der",
      "word": "Polizist",
      "translation": {
        "tr": "Polis",
        "en": "Policeman"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Polizist.",
        "accusative": "Ich kenne ___ Polizist.",
        "dative": "Ich spreche mit ___ Polizist."
      }
    },
    {
      "article": "der",
      "word": "Punkt",
      "translation": {
        "tr": "Dönem",
        "en": "Period"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Punkt.",
        "accusative": "Ich nehme ___ Punkt.",
        "dative": "Vor ___ Punkt steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Puppe",
      "translation": {
        "tr": "oyuncak bebek",
        "en": "doll"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Puppe.",
        "accusative": "Ich nehme ___ Puppe.",
        "dative": "Vor ___ Puppe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Rad",
      "translation": {
        "tr": "tekerlek",
        "en": "wheel"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rad.",
        "accusative": "Ich sehe ___ Rad.",
        "dative": "Ich gehe mit ___ Rad."
      }
    },
    {
      "article": "der",
      "word": "Raum",
      "translation": {
        "tr": "uzay",
        "en": "space"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Raum.",
        "accusative": "Ich nehme ___ Raum.",
        "dative": "Vor ___ Raum steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Regal",
      "translation": {
        "tr": "Raf",
        "en": "Shelf"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Regal.",
        "accusative": "Ich sehe ___ Regal.",
        "dative": "Ich stehe bei ___ Regal."
      }
    },
    {
      "article": "der",
      "word": "Regen",
      "translation": {
        "tr": "Yağmur",
        "en": "Rain"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Regen.",
        "accusative": "Ich entdecke ___ Regen.",
        "dative": "Ich gehe zu ___ Regen."
      }
    },
    {
      "article": "der",
      "word": "Reis",
      "translation": {
        "tr": "Pirinç",
        "en": "Rice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Reis.",
        "accusative": "Ich bestelle ___ Reis.",
        "dative": "Mit ___ Reis koche ich heute."
      }
    },
    {
      "article": "die",
      "word": "Reise",
      "translation": {
        "tr": "gezi",
        "en": "trip"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Reise.",
        "accusative": "Ich organisiere ___ Reise.",
        "dative": "Nach ___ Reise fahre ich nach Hause."
      }
    },
    {
      "article": "der",
      "word": "Saft",
      "translation": {
        "tr": "meyve suyu",
        "en": "Juice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch steht ___ Saft.",
        "accusative": "Ich trinke ___ Saft.",
        "dative": "Zu ___ Saft passt ein Dessert."
      }
    },
    {
      "article": "der",
      "word": "Salat",
      "translation": {
        "tr": "Salata",
        "en": "Salad"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Salat.",
        "accusative": "Ich bestelle ___ Salat.",
        "dative": "Mit ___ Salat koche ich heute."
      }
    },
    {
      "article": "das",
      "word": "Salz",
      "translation": {
        "tr": "Tuz",
        "en": "Salt"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Salz.",
        "accusative": "Ich sehe ___ Salz.",
        "dative": "Ich gehe mit ___ Salz."
      }
    },
    {
      "article": "der",
      "word": "Samstag",
      "translation": {
        "tr": "cumartesi",
        "en": "Saturday"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Samstag.",
        "accusative": "Ich nehme ___ Samstag.",
        "dative": "Vor ___ Samstag steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Schaf",
      "translation": {
        "tr": "Koyun",
        "en": "Sheep"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Schaf.",
        "accusative": "Ich sehe ___ Schaf.",
        "dative": "Ich komme mit ___ Schaf."
      }
    },
    {
      "article": "das",
      "word": "Schiff",
      "translation": {
        "tr": "gemi",
        "en": "ship"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Schiff.",
        "accusative": "Ich sehe ___ Schiff.",
        "dative": "Ich sitze in ___ Schiff."
      }
    },
    {
      "article": "der",
      "word": "Schirm",
      "translation": {
        "tr": "Ekran",
        "en": "Screen"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schirm.",
        "accusative": "Ich suche ___ Schirm.",
        "dative": "Neben ___ Schirm liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schlaf",
      "translation": {
        "tr": "Uyku",
        "en": "Sleep"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schlaf.",
        "accusative": "Ich sehe ___ Schlaf.",
        "dative": "Ich gehe mit ___ Schlaf."
      }
    },
    {
      "article": "das",
      "word": "Schlafzimmer",
      "translation": {
        "tr": "yatak odası",
        "en": "bedroom"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Schlafzimmer.",
        "accusative": "Ich sehe ___ Schlafzimmer.",
        "dative": "Ich stehe bei ___ Schlafzimmer."
      }
    },
    {
      "article": "die",
      "word": "Schlange",
      "translation": {
        "tr": "Yılan",
        "en": "Snake"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Schlange.",
        "accusative": "Ich füttere ___ Schlange.",
        "dative": "Ich spiele mit ___ Schlange."
      }
    },
    {
      "article": "das",
      "word": "Schloss",
      "translation": {
        "tr": "Kale",
        "en": "Castle"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schloss.",
        "accusative": "Ich kaufe ___ Schloss.",
        "dative": "Mit ___ Schloss arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Schlüssel",
      "translation": {
        "tr": "anahtar",
        "en": "key"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Schlüssel.",
        "accusative": "Ich repariere ___ Schlüssel.",
        "dative": "Ich schreibe mit ___ Schlüssel."
      }
    },
    {
      "article": "der",
      "word": "Schmetterling",
      "translation": {
        "tr": "Kelebek",
        "en": "Butterfly"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Schmetterling.",
        "accusative": "Ich beobachte ___ Schmetterling.",
        "dative": "Ich stehe neben ___ Schmetterling."
      }
    },
    {
      "article": "der",
      "word": "Schnee",
      "translation": {
        "tr": "kar",
        "en": "snow"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Schnee.",
        "accusative": "Ich fotografiere ___ Schnee.",
        "dative": "Ich bin bei ___ Schnee."
      }
    },
    {
      "article": "die",
      "word": "Schokolade",
      "translation": {
        "tr": "Çikolata",
        "en": "Chocolate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schokolade.",
        "accusative": "Ich probiere ___ Schokolade.",
        "dative": "Ich beginne mit ___ Schokolade."
      }
    },
    {
      "article": "der",
      "word": "Schuh",
      "translation": {
        "tr": "Ayakkabı",
        "en": "Shoe"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Schuh.",
        "accusative": "Ich suche ___ Schuh.",
        "dative": "Ich gehe mit ___ Schuh raus."
      }
    },
    {
      "article": "die",
      "word": "Schule",
      "translation": {
        "tr": "okul",
        "en": "school"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Schule.",
        "accusative": "Ich besuche ___ Schule.",
        "dative": "Ich warte vor ___ Schule."
      }
    },
    {
      "article": "der",
      "word": "Schüler",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Schüler.",
        "accusative": "Ich kenne ___ Schüler.",
        "dative": "Ich spreche mit ___ Schüler."
      }
    },
    {
      "article": "die",
      "word": "Schülerin",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Schülerin.",
        "accusative": "Ich sehe ___ Schülerin.",
        "dative": "Ich antworte ___ Schülerin."
      }
    },
    {
      "article": "die",
      "word": "Schulter",
      "translation": {
        "tr": "omuz",
        "en": "shoulder"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schulter.",
        "accusative": "Ich sehe ___ Schulter.",
        "dative": "Ich gehe mit ___ Schulter."
      }
    },
    {
      "article": "das",
      "word": "Schwein",
      "translation": {
        "tr": "Domuz",
        "en": "Pig"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Schwein.",
        "accusative": "Ich streichle ___ Schwein.",
        "dative": "Ich bin bei ___ Schwein."
      }
    },
    {
      "article": "die",
      "word": "Schwester",
      "translation": {
        "tr": "kız kardeş",
        "en": "Sister"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schwester.",
        "accusative": "Ich suche ___ Schwester.",
        "dative": "Neben ___ Schwester liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Seife",
      "translation": {
        "tr": "sabun",
        "en": "soap"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Seife.",
        "accusative": "Ich kaufe ___ Seife.",
        "dative": "Mit ___ Seife arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Seite",
      "translation": {
        "tr": "Sayfa",
        "en": "Page"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Seite.",
        "accusative": "Ich nehme ___ Seite.",
        "dative": "Vor ___ Seite steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Sekunde",
      "translation": {
        "tr": "ikinci",
        "en": "second"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Sekunde.",
        "accusative": "Ich kaufe ___ Sekunde.",
        "dative": "Mit ___ Sekunde arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "September",
      "translation": {
        "tr": "Eylül",
        "en": "September"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ September.",
        "accusative": "Ich suche ___ September.",
        "dative": "Neben ___ September liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Sofa",
      "translation": {
        "tr": "Kanepe",
        "en": "Sofa"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Sofa.",
        "accusative": "Ich suche ___ Sofa.",
        "dative": "Vor ___ Sofa liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Sohn",
      "translation": {
        "tr": "oğul",
        "en": "son"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Sohn.",
        "accusative": "Ich kenne ___ Sohn.",
        "dative": "Ich spreche mit ___ Sohn."
      }
    },
    {
      "article": "der",
      "word": "Sommer",
      "translation": {
        "tr": "Yaz",
        "en": "Summer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sommer.",
        "accusative": "Ich sehe ___ Sommer.",
        "dative": "Ich gehe mit ___ Sommer."
      }
    },
    {
      "article": "der",
      "word": "Sonntag",
      "translation": {
        "tr": "Pazar",
        "en": "Sunday"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Sonntag.",
        "accusative": "Ich kenne ___ Sonntag.",
        "dative": "Ich spreche mit ___ Sonntag."
      }
    },
    {
      "article": "der",
      "word": "Spiegel",
      "translation": {
        "tr": "Ayna",
        "en": "Mirror"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spiegel.",
        "accusative": "Ich kaufe ___ Spiegel.",
        "dative": "Hinter ___ Spiegel ist ein Fenster."
      }
    },
    {
      "article": "das",
      "word": "Spiel",
      "translation": {
        "tr": "oyun",
        "en": "game"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Spiel.",
        "accusative": "Ich starte ___ Spiel.",
        "dative": "Bei ___ Spiel lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Spieler",
      "translation": {
        "tr": "Oyuncu",
        "en": "Player"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spieler.",
        "accusative": "Ich kaufe ___ Spieler.",
        "dative": "Mit ___ Spieler arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Spielzeug",
      "translation": {
        "tr": "oyuncaklar",
        "en": "toys"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spielzeug.",
        "accusative": "Ich kaufe ___ Spielzeug.",
        "dative": "Mit ___ Spielzeug arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Sprache",
      "translation": {
        "tr": "dil",
        "en": "language"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Sprache.",
        "accusative": "Ich erkläre ___ Sprache.",
        "dative": "An ___ Sprache arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Stadt",
      "translation": {
        "tr": "şehir",
        "en": "city"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Stadt.",
        "accusative": "Ich sehe ___ Stadt.",
        "dative": "Ich bleibe in ___ Stadt."
      }
    },
    {
      "article": "der",
      "word": "Staub",
      "translation": {
        "tr": "toz",
        "en": "dust"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Staub.",
        "accusative": "Ich kaufe ___ Staub.",
        "dative": "Mit ___ Staub arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Stern",
      "translation": {
        "tr": "yıldız",
        "en": "star"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Stern.",
        "accusative": "Ich sehe ___ Stern.",
        "dative": "Ich sitze an ___ Stern."
      }
    },
    {
      "article": "der",
      "word": "Stift",
      "translation": {
        "tr": "Kalem",
        "en": "Pen"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Stift.",
        "accusative": "Ich kaufe ___ Stift.",
        "dative": "Ich arbeite mit ___ Stift."
      }
    },
    {
      "article": "die",
      "word": "Stimme",
      "translation": {
        "tr": "ses",
        "en": "voice"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stimme.",
        "accusative": "Ich kaufe ___ Stimme.",
        "dative": "Mit ___ Stimme arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Straße",
      "translation": {
        "tr": "sokak",
        "en": "street"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Straße.",
        "accusative": "Ich suche ___ Straße.",
        "dative": "Ich bin in ___ Straße."
      }
    },
    {
      "article": "das",
      "word": "Stück",
      "translation": {
        "tr": "parça",
        "en": "piece"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stück.",
        "accusative": "Ich nehme ___ Stück.",
        "dative": "Vor ___ Stück steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Student",
      "translation": {
        "tr": "öğrenci",
        "en": "student"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Student.",
        "accusative": "Ich besuche ___ Student.",
        "dative": "Ich danke ___ Student."
      }
    },
    {
      "article": "der",
      "word": "Stuhl",
      "translation": {
        "tr": "sandalye",
        "en": "chair"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Stuhl.",
        "accusative": "Ich sehe ___ Stuhl.",
        "dative": "Ich stehe bei ___ Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Stunde",
      "translation": {
        "tr": "saat",
        "en": "hour"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stunde.",
        "accusative": "Ich kaufe ___ Stunde.",
        "dative": "Mit ___ Stunde arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Suppe",
      "translation": {
        "tr": "Çorba",
        "en": "Soup"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Suppe.",
        "accusative": "Ich bestelle ___ Suppe.",
        "dative": "Mit ___ Suppe koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Tag",
      "translation": {
        "tr": "gün",
        "en": "day"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tag.",
        "accusative": "Ich suche ___ Tag.",
        "dative": "Neben ___ Tag liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Tante",
      "translation": {
        "tr": "Teyze",
        "en": "Aunt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tante.",
        "accusative": "Ich suche ___ Tante.",
        "dative": "Neben ___ Tante liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tanz",
      "translation": {
        "tr": "Dans",
        "en": "Dance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tanz.",
        "accusative": "Ich sehe ___ Tanz.",
        "dative": "Ich gehe mit ___ Tanz."
      }
    },
    {
      "article": "die",
      "word": "Tasche",
      "translation": {
        "tr": "çanta",
        "en": "bag"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Tasche.",
        "accusative": "Ich suche ___ Tasche.",
        "dative": "Ich gehe mit ___ Tasche raus."
      }
    },
    {
      "article": "die",
      "word": "Tasse",
      "translation": {
        "tr": "fincan",
        "en": "cup"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Tasse.",
        "accusative": "Ich suche ___ Tasse.",
        "dative": "Vor ___ Tasse liegt ein Teppich."
      }
    },
    {
      "article": "die",
      "word": "Tastatur",
      "translation": {
        "tr": "Klavye",
        "en": "Keyboard"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Tastatur.",
        "accusative": "Ich kaufe ___ Tastatur.",
        "dative": "Ich arbeite mit ___ Tastatur."
      }
    },
    {
      "article": "das",
      "word": "Taxi",
      "translation": {
        "tr": "Taksi",
        "en": "Taxi"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Taxi.",
        "accusative": "Ich parke ___ Taxi.",
        "dative": "Ich komme mit ___ Taxi."
      }
    },
    {
      "article": "der",
      "word": "Tee",
      "translation": {
        "tr": "Çay",
        "en": "Tea"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch steht ___ Tee.",
        "accusative": "Ich trinke ___ Tee.",
        "dative": "Zu ___ Tee passt ein Dessert."
      }
    },
    {
      "article": "das",
      "word": "Telefon",
      "translation": {
        "tr": "Telefon",
        "en": "Telephone"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Telefon.",
        "accusative": "Ich kaufe ___ Telefon.",
        "dative": "Ich arbeite mit ___ Telefon."
      }
    },
    {
      "article": "das",
      "word": "Tennis",
      "translation": {
        "tr": "Tenis",
        "en": "Tennis"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tennis.",
        "accusative": "Ich suche ___ Tennis.",
        "dative": "Neben ___ Tennis liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Teppich",
      "translation": {
        "tr": "Halı",
        "en": "Carpet"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Teppich.",
        "accusative": "Ich nehme ___ Teppich.",
        "dative": "Ich reise mit ___ Teppich."
      }
    },
    {
      "article": "das",
      "word": "Ticket",
      "translation": {
        "tr": "bilet",
        "en": "ticket"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Ticket.",
        "accusative": "Ich öffne ___ Ticket.",
        "dative": "Ich arbeite mit ___ Ticket."
      }
    },
    {
      "article": "das",
      "word": "Tier",
      "translation": {
        "tr": "hayvan",
        "en": "animal"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Tier.",
        "accusative": "Ich sehe ___ Tier.",
        "dative": "Ich komme mit ___ Tier."
      }
    },
    {
      "article": "die",
      "word": "Tinte",
      "translation": {
        "tr": "Mürekkep",
        "en": "Ink"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tinte.",
        "accusative": "Ich sehe ___ Tinte.",
        "dative": "Ich gehe mit ___ Tinte."
      }
    },
    {
      "article": "der",
      "word": "Tisch",
      "translation": {
        "tr": "masa",
        "en": "table"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Tisch.",
        "accusative": "Ich sehe ___ Tisch.",
        "dative": "Ich stehe bei ___ Tisch."
      }
    },
    {
      "article": "die",
      "word": "Tochter",
      "translation": {
        "tr": "kızı",
        "en": "daughter"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Tochter.",
        "accusative": "Ich sehe ___ Tochter.",
        "dative": "Ich antworte ___ Tochter."
      }
    },
    {
      "article": "die",
      "word": "Toilette",
      "translation": {
        "tr": "tuvalet",
        "en": "toilet"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Toilette.",
        "accusative": "Ich nehme ___ Toilette.",
        "dative": "Vor ___ Toilette steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Tourist",
      "translation": {
        "tr": "Turist",
        "en": "Tourist"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Tourist.",
        "accusative": "Ich kenne ___ Tourist.",
        "dative": "Ich spreche mit ___ Tourist."
      }
    },
    {
      "article": "die",
      "word": "Träne",
      "translation": {
        "tr": "Gözyaşı",
        "en": "Tear"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Träne.",
        "accusative": "Ich bestelle ___ Träne.",
        "dative": "Zu ___ Träne esse ich Kuchen."
      }
    },
    {
      "article": "der",
      "word": "Traum",
      "translation": {
        "tr": "rüya",
        "en": "dream"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Traum.",
        "accusative": "Ich suche ___ Traum.",
        "dative": "Neben ___ Traum liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Tuch",
      "translation": {
        "tr": "kumaş",
        "en": "cloth"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tuch.",
        "accusative": "Ich sehe ___ Tuch.",
        "dative": "Ich gehe mit ___ Tuch."
      }
    },
    {
      "article": "der",
      "word": "Tunnel",
      "translation": {
        "tr": "tüneller",
        "en": "tunnels"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Tunnel.",
        "accusative": "Ich kaufe ___ Tunnel.",
        "dative": "Mit ___ Tunnel arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Tür",
      "translation": {
        "tr": "kapı",
        "en": "door"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Tür.",
        "accusative": "Ich suche ___ Tür.",
        "dative": "Vor ___ Tür liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Turm",
      "translation": {
        "tr": "kule",
        "en": "tower"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Turm.",
        "accusative": "Ich nehme ___ Turm.",
        "dative": "Vor ___ Turm steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Uhr",
      "translation": {
        "tr": "saat",
        "en": "clock"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Uhr.",
        "accusative": "Ich nehme ___ Uhr.",
        "dative": "Vor ___ Uhr steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Unterricht",
      "translation": {
        "tr": "dersler",
        "en": "lessons"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Unterricht.",
        "accusative": "Ich treffe ___ Unterricht.",
        "dative": "Ich helfe ___ Unterricht."
      }
    },
    {
      "article": "der",
      "word": "Vater",
      "translation": {
        "tr": "baba",
        "en": "Father"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Vater.",
        "accusative": "Ich kenne ___ Vater.",
        "dative": "Ich spreche mit ___ Vater."
      }
    },
    {
      "article": "der",
      "word": "Vogel",
      "translation": {
        "tr": "kuş",
        "en": "bird"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Vogel.",
        "accusative": "Ich beobachte ___ Vogel.",
        "dative": "Ich stehe neben ___ Vogel."
      }
    },
    {
      "article": "der",
      "word": "Wald",
      "translation": {
        "tr": "Orman",
        "en": "Forest"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Wald.",
        "accusative": "Ich sehe ___ Wald.",
        "dative": "Ich antworte ___ Wald."
      }
    },
    {
      "article": "die",
      "word": "Wand",
      "translation": {
        "tr": "duvar",
        "en": "wall"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Wand.",
        "accusative": "Ich sehe ___ Wand.",
        "dative": "Ich gehe mit ___ Wand."
      }
    },
    {
      "article": "das",
      "word": "Wasser",
      "translation": {
        "tr": "su",
        "en": "water"
      },
      "casePrompts": {
        "nominative": "Im Glas ist ___ Wasser.",
        "accusative": "Ich kaufe ___ Wasser.",
        "dative": "Mit ___ Wasser stoßen wir an."
      }
    },
    {
      "article": "der",
      "word": "Weg",
      "translation": {
        "tr": "yol",
        "en": "way"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Weg.",
        "accusative": "Ich sehe ___ Weg.",
        "dative": "Ich gehe mit ___ Weg."
      }
    },
    {
      "article": "das",
      "word": "Weihnachten",
      "translation": {
        "tr": "Noel",
        "en": "Christmas"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Weihnachten.",
        "accusative": "Ich suche ___ Weihnachten.",
        "dative": "Neben ___ Weihnachten liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Welt",
      "translation": {
        "tr": "dünya",
        "en": "world"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Welt.",
        "accusative": "Ich besuche ___ Welt.",
        "dative": "Ich warte vor ___ Welt."
      }
    },
    {
      "article": "das",
      "word": "Wetter",
      "translation": {
        "tr": "Hava Durumu",
        "en": "Weather"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Wetter.",
        "accusative": "Ich kaufe ___ Wetter.",
        "dative": "Mit ___ Wetter arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Winter",
      "translation": {
        "tr": "Kış",
        "en": "Winter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Winter.",
        "accusative": "Ich suche ___ Winter.",
        "dative": "Neben ___ Winter liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Woche",
      "translation": {
        "tr": "hafta",
        "en": "week"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Woche.",
        "accusative": "Ich suche ___ Woche.",
        "dative": "Neben ___ Woche liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Wochenende",
      "translation": {
        "tr": "hafta sonu",
        "en": "weekend"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Wochenende.",
        "accusative": "Ich treffe ___ Wochenende.",
        "dative": "Ich helfe ___ Wochenende."
      }
    },
    {
      "article": "das",
      "word": "Wohnzimmer",
      "translation": {
        "tr": "Oturma odası",
        "en": "Living room"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Wohnzimmer.",
        "accusative": "Ich besuche ___ Wohnzimmer.",
        "dative": "Ich warte vor ___ Wohnzimmer."
      }
    },
    {
      "article": "der",
      "word": "Wolf",
      "translation": {
        "tr": "Kurt",
        "en": "Wolf"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Wolf.",
        "accusative": "Ich beobachte ___ Wolf.",
        "dative": "Ich stehe neben ___ Wolf."
      }
    },
    {
      "article": "die",
      "word": "Wolke",
      "translation": {
        "tr": "bulut",
        "en": "cloud"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Wolke.",
        "accusative": "Ich kaufe ___ Wolke.",
        "dative": "Mit ___ Wolke arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Wort",
      "translation": {
        "tr": "kelime",
        "en": "word"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wort.",
        "accusative": "Ich suche ___ Wort.",
        "dative": "Neben ___ Wort liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Wörterbuch",
      "translation": {
        "tr": "Sözlük",
        "en": "Dictionary"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wörterbuch.",
        "accusative": "Ich suche ___ Wörterbuch.",
        "dative": "Neben ___ Wörterbuch liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Wunde",
      "translation": {
        "tr": "yara",
        "en": "wound"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Wunde.",
        "accusative": "Ich sehe ___ Wunde.",
        "dative": "Ich gehe mit ___ Wunde."
      }
    },
    {
      "article": "das",
      "word": "Wunder",
      "translation": {
        "tr": "Mucize",
        "en": "Miracle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wunder.",
        "accusative": "Ich suche ___ Wunder.",
        "dative": "Neben ___ Wunder liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Wunsch",
      "translation": {
        "tr": "arzu",
        "en": "desire"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Wunsch.",
        "accusative": "Ich sehe ___ Wunsch.",
        "dative": "Ich gehe mit ___ Wunsch."
      }
    },
    {
      "article": "die",
      "word": "Wurst",
      "translation": {
        "tr": "Sosis",
        "en": "Sausage"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Wurst.",
        "accusative": "Ich sehe ___ Wurst.",
        "dative": "Ich gehe mit ___ Wurst."
      }
    },
    {
      "article": "die",
      "word": "Zahl",
      "translation": {
        "tr": "sayı",
        "en": "number"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Zahl.",
        "accusative": "Ich sehe ___ Zahl.",
        "dative": "Ich gehe mit ___ Zahl."
      }
    },
    {
      "article": "der",
      "word": "Zahn",
      "translation": {
        "tr": "diş",
        "en": "tooth"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Zahn.",
        "accusative": "Ich nehme ___ Zahn.",
        "dative": "Vor ___ Zahn steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Zeichen",
      "translation": {
        "tr": "karakterler",
        "en": "characters"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Zeichen.",
        "accusative": "Ich sehe ___ Zeichen.",
        "dative": "Ich gehe mit ___ Zeichen."
      }
    },
    {
      "article": "die",
      "word": "Zeit",
      "translation": {
        "tr": "zaman",
        "en": "time"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Zeit.",
        "accusative": "Ich sehe ___ Zeit.",
        "dative": "Ich antworte ___ Zeit."
      }
    },
    {
      "article": "das",
      "word": "Zimmer",
      "translation": {
        "tr": "Oda",
        "en": "Room"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Zimmer.",
        "accusative": "Ich sehe ___ Zimmer.",
        "dative": "Ich bleibe in ___ Zimmer."
      }
    },
    {
      "article": "die",
      "word": "Zitrone",
      "translation": {
        "tr": "Limon",
        "en": "Lemon"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Zitrone.",
        "accusative": "Ich sehe ___ Zitrone.",
        "dative": "Ich gehe mit ___ Zitrone."
      }
    },
    {
      "article": "der",
      "word": "Zoo",
      "translation": {
        "tr": "Hayvanat Bahçesi",
        "en": "Zoo"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Zoo.",
        "accusative": "Ich sehe ___ Zoo.",
        "dative": "Ich gehe mit ___ Zoo."
      }
    },
    {
      "article": "der",
      "word": "Zucker",
      "translation": {
        "tr": "şeker",
        "en": "sugar"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Zucker.",
        "accusative": "Ich suche ___ Zucker.",
        "dative": "Neben ___ Zucker liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Zug",
      "translation": {
        "tr": "tren",
        "en": "train"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Zug.",
        "accusative": "Ich nehme ___ Zug.",
        "dative": "Ich reise mit ___ Zug."
      }
    },
    {
      "article": "die",
      "word": "Zunge",
      "translation": {
        "tr": "dil",
        "en": "tongue"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Zunge.",
        "accusative": "Ich nehme ___ Zunge.",
        "dative": "Vor ___ Zunge steht ein Stuhl."
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
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Europäer.",
        "accusative": "Ich suche ___ Europäer.",
        "dative": "Neben ___ Europäer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fabrik",
      "translation": {
        "tr": "Fabrika",
        "en": "Factory"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Fabrik.",
        "accusative": "Ich suche ___ Fabrik.",
        "dative": "Ich bin in ___ Fabrik."
      }
    },
    {
      "article": "das",
      "word": "Fach",
      "translation": {
        "tr": "bölme",
        "en": "compartment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fach.",
        "accusative": "Ich suche ___ Fach.",
        "dative": "Neben ___ Fach liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Faden",
      "translation": {
        "tr": "iplik",
        "en": "thread"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Faden.",
        "accusative": "Ich suche ___ Faden.",
        "dative": "Neben ___ Faden liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fahne",
      "translation": {
        "tr": "bayrak",
        "en": "flag"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fahne.",
        "accusative": "Ich suche ___ Fahne.",
        "dative": "Neben ___ Fahne liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fähre",
      "translation": {
        "tr": "Feribot",
        "en": "Ferry"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fähre.",
        "accusative": "Ich kaufe ___ Fähre.",
        "dative": "Mit ___ Fähre arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Fahren",
      "translation": {
        "tr": "Araba kullanmak",
        "en": "Driving"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fahren.",
        "accusative": "Ich nehme ___ Fahren.",
        "dative": "Vor ___ Fahren steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fahrer",
      "translation": {
        "tr": "Sürücü",
        "en": "Driver"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Fahrer.",
        "accusative": "Ich kenne ___ Fahrer.",
        "dative": "Ich spreche mit ___ Fahrer."
      }
    },
    {
      "article": "der",
      "word": "Fahrplan",
      "translation": {
        "tr": "Zaman çizelgesi",
        "en": "Timetable"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Fahrplan.",
        "accusative": "Ich treffe ___ Fahrplan.",
        "dative": "Ich helfe ___ Fahrplan."
      }
    },
    {
      "article": "der",
      "word": "Fahrpreis",
      "translation": {
        "tr": "Ücret",
        "en": "Fare"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fahrpreis.",
        "accusative": "Ich sehe ___ Fahrpreis.",
        "dative": "Ich gehe mit ___ Fahrpreis."
      }
    },
    {
      "article": "die",
      "word": "Fahrt",
      "translation": {
        "tr": "binmek",
        "en": "ride"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fahrt.",
        "accusative": "Ich kaufe ___ Fahrt.",
        "dative": "Mit ___ Fahrt arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Fahrzeug",
      "translation": {
        "tr": "araç",
        "en": "vehicle"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Fahrzeug.",
        "accusative": "Ich parke ___ Fahrzeug.",
        "dative": "Ich komme mit ___ Fahrzeug."
      }
    },
    {
      "article": "der",
      "word": "Fall",
      "translation": {
        "tr": "dava",
        "en": "case"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fall.",
        "accusative": "Ich kaufe ___ Fall.",
        "dative": "Mit ___ Fall arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Fan",
      "translation": {
        "tr": "hayran",
        "en": "Fan"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fan.",
        "accusative": "Ich suche ___ Fan.",
        "dative": "Neben ___ Fan liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Fass",
      "translation": {
        "tr": "varil",
        "en": "barrel"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fass.",
        "accusative": "Ich nehme ___ Fass.",
        "dative": "Vor ___ Fass steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Faust",
      "translation": {
        "tr": "Yumruk",
        "en": "Fist"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Faust.",
        "accusative": "Ich kaufe ___ Faust.",
        "dative": "Mit ___ Faust arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Fax",
      "translation": {
        "tr": "Faks",
        "en": "Fax"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fax.",
        "accusative": "Ich suche ___ Fax.",
        "dative": "Neben ___ Fax liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Feder",
      "translation": {
        "tr": "tüy",
        "en": "Feather"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Feder.",
        "accusative": "Ich nehme ___ Feder.",
        "dative": "Vor ___ Feder steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fee",
      "translation": {
        "tr": "Peri",
        "en": "Fairy"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Fee.",
        "accusative": "Ich fotografiere ___ Fee.",
        "dative": "Ich bin bei ___ Fee."
      }
    },
    {
      "article": "die",
      "word": "Feier",
      "translation": {
        "tr": "kutlama",
        "en": "celebration"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Feier.",
        "accusative": "Ich starte ___ Feier.",
        "dative": "Bei ___ Feier lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Feige",
      "translation": {
        "tr": "incir",
        "en": "Fig"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Feige.",
        "accusative": "Ich sehe ___ Feige.",
        "dative": "Ich gehe mit ___ Feige."
      }
    },
    {
      "article": "der",
      "word": "Feind",
      "translation": {
        "tr": "düşman",
        "en": "enemy"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Feind.",
        "accusative": "Ich kenne ___ Feind.",
        "dative": "Ich spreche mit ___ Feind."
      }
    },
    {
      "article": "das",
      "word": "Fell",
      "translation": {
        "tr": "kürk",
        "en": "fur"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fell.",
        "accusative": "Ich suche ___ Fell.",
        "dative": "Neben ___ Fell liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fernseher",
      "translation": {
        "tr": "televizyon",
        "en": "TV"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Fernseher.",
        "accusative": "Ich benutze ___ Fernseher.",
        "dative": "Ich lerne mit ___ Fernseher."
      }
    },
    {
      "article": "das",
      "word": "Fest",
      "translation": {
        "tr": "Katı",
        "en": "Solid"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fest.",
        "accusative": "Ich kaufe ___ Fest.",
        "dative": "Mit ___ Fest arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Feuerwehrmann",
      "translation": {
        "tr": "İtfaiyeci",
        "en": "Firefighter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Feuerwehrmann.",
        "accusative": "Ich besuche ___ Feuerwehrmann.",
        "dative": "Ich danke ___ Feuerwehrmann."
      }
    },
    {
      "article": "das",
      "word": "Feuerwerk",
      "translation": {
        "tr": "havai fişek",
        "en": "Fireworks"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Feuerwerk.",
        "accusative": "Ich beobachte ___ Feuerwerk.",
        "dative": "Ich stehe vor ___ Feuerwerk."
      }
    },
    {
      "article": "das",
      "word": "Fieber",
      "translation": {
        "tr": "Ateş",
        "en": "Fever"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fieber.",
        "accusative": "Ich nehme ___ Fieber.",
        "dative": "Vor ___ Fieber steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Figur",
      "translation": {
        "tr": "şekil",
        "en": "figure"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Figur.",
        "accusative": "Ich nehme ___ Figur.",
        "dative": "Vor ___ Figur steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Firma",
      "translation": {
        "tr": "şirket",
        "en": "company"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Firma.",
        "accusative": "Ich sehe ___ Firma.",
        "dative": "Ich gehe mit ___ Firma."
      }
    },
    {
      "article": "der",
      "word": "Fischer",
      "translation": {
        "tr": "Balıkçı",
        "en": "Fisherman"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Fischer.",
        "accusative": "Ich treffe ___ Fischer.",
        "dative": "Ich helfe ___ Fischer."
      }
    },
    {
      "article": "die",
      "word": "Flagge",
      "translation": {
        "tr": "Bayrak",
        "en": "Flag"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Flagge.",
        "accusative": "Ich sehe ___ Flagge.",
        "dative": "Ich gehe mit ___ Flagge."
      }
    },
    {
      "article": "die",
      "word": "Flamme",
      "translation": {
        "tr": "Alev",
        "en": "Flame"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flamme.",
        "accusative": "Ich nehme ___ Flamme.",
        "dative": "Vor ___ Flamme steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fleck",
      "translation": {
        "tr": "leke",
        "en": "stain"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fleck.",
        "accusative": "Ich sehe ___ Fleck.",
        "dative": "Ich gehe mit ___ Fleck."
      }
    },
    {
      "article": "die",
      "word": "Fledermaus",
      "translation": {
        "tr": "Yarasa",
        "en": "Bat"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fledermaus.",
        "accusative": "Ich nehme ___ Fledermaus.",
        "dative": "Vor ___ Fledermaus steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fliege",
      "translation": {
        "tr": "Uçmak",
        "en": "Fly"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fliege.",
        "accusative": "Ich kaufe ___ Fliege.",
        "dative": "Mit ___ Fliege arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Flöte",
      "translation": {
        "tr": "flüt",
        "en": "flute"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flöte.",
        "accusative": "Ich nehme ___ Flöte.",
        "dative": "Vor ___ Flöte steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Flügel",
      "translation": {
        "tr": "Kanatlar",
        "en": "Wings"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Flügel.",
        "accusative": "Ich sehe ___ Flügel.",
        "dative": "Ich gehe mit ___ Flügel."
      }
    },
    {
      "article": "der",
      "word": "Flughafen",
      "translation": {
        "tr": "Havaalanı",
        "en": "Airport"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Flughafen.",
        "accusative": "Ich sehe ___ Flughafen.",
        "dative": "Ich bleibe in ___ Flughafen."
      }
    },
    {
      "article": "die",
      "word": "Folie",
      "translation": {
        "tr": "Folyo",
        "en": "Foil"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Folie.",
        "accusative": "Ich kaufe ___ Folie.",
        "dative": "Mit ___ Folie arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Form",
      "translation": {
        "tr": "şekil",
        "en": "shape"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Form.",
        "accusative": "Ich nehme ___ Form.",
        "dative": "Vor ___ Form steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Format",
      "translation": {
        "tr": "biçim",
        "en": "format"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Format.",
        "accusative": "Ich suche ___ Format.",
        "dative": "Neben ___ Format liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Formular",
      "translation": {
        "tr": "formu",
        "en": "Form"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Formular.",
        "accusative": "Ich suche ___ Formular.",
        "dative": "Neben ___ Formular liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fotograf",
      "translation": {
        "tr": "Fotoğrafçı",
        "en": "Photographer"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Fotograf.",
        "accusative": "Ich schreibe ___ Fotograf.",
        "dative": "In ___ Fotograf steht alles."
      }
    },
    {
      "article": "das",
      "word": "Französisch",
      "translation": {
        "tr": "Fransızca",
        "en": "French"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Französisch.",
        "accusative": "Ich kaufe ___ Französisch.",
        "dative": "Mit ___ Französisch arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Freiheit",
      "translation": {
        "tr": "Özgürlük",
        "en": "Freedom"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Freiheit.",
        "accusative": "Ich erkläre ___ Freiheit.",
        "dative": "An ___ Freiheit arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Freizeit",
      "translation": {
        "tr": "Boş zaman",
        "en": "Leisure"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Freizeit.",
        "accusative": "Ich treffe ___ Freizeit.",
        "dative": "Ich helfe ___ Freizeit."
      }
    },
    {
      "article": "die",
      "word": "Fremdsprache",
      "translation": {
        "tr": "Yabancı dil",
        "en": "Foreign language"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Fremdsprache.",
        "accusative": "Ich erkläre ___ Fremdsprache.",
        "dative": "An ___ Fremdsprache arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Freude",
      "translation": {
        "tr": "sevinç",
        "en": "joy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Freude.",
        "accusative": "Ich nehme ___ Freude.",
        "dative": "Vor ___ Freude steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Freundschaft",
      "translation": {
        "tr": "Dostluk",
        "en": "Friendship"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Freundschaft.",
        "accusative": "Ich treffe ___ Freundschaft.",
        "dative": "Ich helfe ___ Freundschaft."
      }
    },
    {
      "article": "der",
      "word": "Friedhof",
      "translation": {
        "tr": "Mezarlık",
        "en": "Cemetery"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Friedhof.",
        "accusative": "Ich nehme ___ Friedhof.",
        "dative": "Vor ___ Friedhof steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Frucht",
      "translation": {
        "tr": "meyve",
        "en": "fruit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Frucht.",
        "accusative": "Ich bestelle ___ Frucht.",
        "dative": "Mit ___ Frucht koche ich heute."
      }
    },
    {
      "article": "das",
      "word": "Frühjahr",
      "translation": {
        "tr": "Bahar",
        "en": "Spring"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Frühjahr.",
        "accusative": "Ich suche ___ Frühjahr.",
        "dative": "Ich gehe mit ___ Frühjahr raus."
      }
    },
    {
      "article": "der",
      "word": "Führer",
      "translation": {
        "tr": "Lider",
        "en": "Leader"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Führer.",
        "accusative": "Ich besuche ___ Führer.",
        "dative": "Ich danke ___ Führer."
      }
    },
    {
      "article": "der",
      "word": "Fußgänger",
      "translation": {
        "tr": "Yayalar",
        "en": "Pedestrians"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fußgänger.",
        "accusative": "Ich kaufe ___ Fußgänger.",
        "dative": "Mit ___ Fußgänger arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Futter",
      "translation": {
        "tr": "beslemek",
        "en": "feed"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Futter.",
        "accusative": "Ich sehe ___ Futter.",
        "dative": "Ich gehe mit ___ Futter."
      }
    },
    {
      "article": "die",
      "word": "Garage",
      "translation": {
        "tr": "Garaj",
        "en": "Garage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Garage.",
        "accusative": "Ich suche ___ Garage.",
        "dative": "Neben ___ Garage liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gärtner",
      "translation": {
        "tr": "bahçıvan",
        "en": "gardener"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Gärtner.",
        "accusative": "Ich besuche ___ Gärtner.",
        "dative": "Ich warte vor ___ Gärtner."
      }
    },
    {
      "article": "das",
      "word": "Gas",
      "translation": {
        "tr": "gaz",
        "en": "gas"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gas.",
        "accusative": "Ich suche ___ Gas.",
        "dative": "Neben ___ Gas liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Gasse",
      "translation": {
        "tr": "Sokak",
        "en": "Alley"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gasse.",
        "accusative": "Ich sehe ___ Gasse.",
        "dative": "Ich gehe mit ___ Gasse."
      }
    },
    {
      "article": "das",
      "word": "Gebäude",
      "translation": {
        "tr": "Bina",
        "en": "Building"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Gebäude.",
        "accusative": "Ich besuche ___ Gebäude.",
        "dative": "Ich warte vor ___ Gebäude."
      }
    },
    {
      "article": "das",
      "word": "Gebet",
      "translation": {
        "tr": "Dua",
        "en": "Prayer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gebet.",
        "accusative": "Ich suche ___ Gebet.",
        "dative": "Neben ___ Gebet liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Gegend",
      "translation": {
        "tr": "alan",
        "en": "area"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Gegend.",
        "accusative": "Ich starte ___ Gegend.",
        "dative": "Bei ___ Gegend lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Gegenstand",
      "translation": {
        "tr": "konu",
        "en": "subject"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gegenstand.",
        "accusative": "Ich sehe ___ Gegenstand.",
        "dative": "Ich gehe mit ___ Gegenstand."
      }
    },
    {
      "article": "das",
      "word": "Gegenteil",
      "translation": {
        "tr": "Karşıt",
        "en": "Opposite"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gegenteil.",
        "accusative": "Ich kaufe ___ Gegenteil.",
        "dative": "Mit ___ Gegenteil arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gegner",
      "translation": {
        "tr": "Rakip",
        "en": "Opponent"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gegner.",
        "accusative": "Ich nehme ___ Gegner.",
        "dative": "Vor ___ Gegner steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gehalt",
      "translation": {
        "tr": "Maaş",
        "en": "Salary"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gehalt.",
        "accusative": "Ich nehme ___ Gehalt.",
        "dative": "Vor ___ Gehalt steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Geheimnis",
      "translation": {
        "tr": "Gizli",
        "en": "Secret"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geheimnis.",
        "accusative": "Ich nehme ___ Geheimnis.",
        "dative": "Vor ___ Geheimnis steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gehirn",
      "translation": {
        "tr": "Beyin",
        "en": "Brain"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Gehirn.",
        "accusative": "Ich entdecke ___ Gehirn.",
        "dative": "Ich gehe zu ___ Gehirn."
      }
    },
    {
      "article": "der",
      "word": "Geist",
      "translation": {
        "tr": "Ruh",
        "en": "Spirit"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Geist.",
        "accusative": "Ich kaufe ___ Geist.",
        "dative": "Mit ___ Geist arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Gepäck",
      "translation": {
        "tr": "Bagaj",
        "en": "Luggage"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Gepäck.",
        "accusative": "Ich trage ___ Gepäck.",
        "dative": "Neben ___ Gepäck liegt ein Schal."
      }
    },
    {
      "article": "das",
      "word": "Gerät",
      "translation": {
        "tr": "cihaz",
        "en": "device"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gerät.",
        "accusative": "Ich sehe ___ Gerät.",
        "dative": "Ich gehe mit ___ Gerät."
      }
    },
    {
      "article": "das",
      "word": "Geräusch",
      "translation": {
        "tr": "gürültü",
        "en": "noise"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geräusch.",
        "accusative": "Ich nehme ___ Geräusch.",
        "dative": "Vor ___ Geräusch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Geruch",
      "translation": {
        "tr": "koku",
        "en": "smell"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geruch.",
        "accusative": "Ich nehme ___ Geruch.",
        "dative": "Vor ___ Geruch steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Geschäft",
      "translation": {
        "tr": "iş",
        "en": "business"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Geschäft.",
        "accusative": "Ich parke ___ Geschäft.",
        "dative": "Ich komme mit ___ Geschäft."
      }
    },
    {
      "article": "die",
      "word": "Geschichte",
      "translation": {
        "tr": "hikaye",
        "en": "story"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geschichte.",
        "accusative": "Ich suche ___ Geschichte.",
        "dative": "Neben ___ Geschichte liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Geschirr",
      "translation": {
        "tr": "Yemekler",
        "en": "Dishes"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Geschirr.",
        "accusative": "Ich kaufe ___ Geschirr.",
        "dative": "Mit ___ Geschirr arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Geschmack",
      "translation": {
        "tr": "tat",
        "en": "taste"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geschmack.",
        "accusative": "Ich nehme ___ Geschmack.",
        "dative": "Vor ___ Geschmack steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gesetz",
      "translation": {
        "tr": "Hukuk",
        "en": "Law"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesetz.",
        "accusative": "Ich sehe ___ Gesetz.",
        "dative": "Ich gehe mit ___ Gesetz."
      }
    },
    {
      "article": "das",
      "word": "Gespenst",
      "translation": {
        "tr": "Hayalet",
        "en": "Ghost"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Gespenst.",
        "accusative": "Ich benutze ___ Gespenst.",
        "dative": "Ich lerne mit ___ Gespenst."
      }
    },
    {
      "article": "das",
      "word": "Gespräch",
      "translation": {
        "tr": "konuşma",
        "en": "conversation"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Gespräch.",
        "accusative": "Ich organisiere ___ Gespräch.",
        "dative": "Nach ___ Gespräch fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Geste",
      "translation": {
        "tr": "jest",
        "en": "gesture"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Geste.",
        "accusative": "Ich kaufe ___ Geste.",
        "dative": "Mit ___ Geste arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gesundheit",
      "translation": {
        "tr": "Sağlık",
        "en": "Health"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Gesundheit.",
        "accusative": "Ich sehe ___ Gesundheit.",
        "dative": "Ich sitze an ___ Gesundheit."
      }
    },
    {
      "article": "das",
      "word": "Getränk",
      "translation": {
        "tr": "içki",
        "en": "drink"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Getränk.",
        "accusative": "Ich nehme ___ Getränk.",
        "dative": "Vor ___ Getränk steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gewicht",
      "translation": {
        "tr": "Ağırlık",
        "en": "Weight"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gewicht.",
        "accusative": "Ich kaufe ___ Gewicht.",
        "dative": "Mit ___ Gewicht arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Gewitter",
      "translation": {
        "tr": "Fırtına",
        "en": "Thunderstorm"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gewitter.",
        "accusative": "Ich suche ___ Gewitter.",
        "dative": "Neben ___ Gewitter liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gift",
      "translation": {
        "tr": "Zehir",
        "en": "Poison"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gift.",
        "accusative": "Ich besuche ___ Gift.",
        "dative": "Ich danke ___ Gift."
      }
    },
    {
      "article": "das",
      "word": "Gitter",
      "translation": {
        "tr": "Izgara",
        "en": "Grid"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gitter.",
        "accusative": "Ich nehme ___ Gitter.",
        "dative": "Vor ___ Gitter steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gleis",
      "translation": {
        "tr": "Parça",
        "en": "Track"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gleis.",
        "accusative": "Ich nehme ___ Gleis.",
        "dative": "Vor ___ Gleis steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Globus",
      "translation": {
        "tr": "Küre",
        "en": "Globe"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Globus.",
        "accusative": "Ich miete ___ Globus.",
        "dative": "Ich fahre mit ___ Globus."
      }
    },
    {
      "article": "die",
      "word": "Glocke",
      "translation": {
        "tr": "Çan",
        "en": "Bell"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Glocke.",
        "accusative": "Ich suche ___ Glocke.",
        "dative": "Neben ___ Glocke liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Glotze",
      "translation": {
        "tr": "televizyon",
        "en": "telly"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Glotze.",
        "accusative": "Ich nehme ___ Glotze.",
        "dative": "Vor ___ Glotze steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Glück",
      "translation": {
        "tr": "Mutluluk",
        "en": "Happiness"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Glück.",
        "accusative": "Ich suche ___ Glück.",
        "dative": "Neben ___ Glück liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gold",
      "translation": {
        "tr": "Altın",
        "en": "Gold"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gold.",
        "accusative": "Ich suche ___ Gold.",
        "dative": "Neben ___ Gold liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Golf",
      "translation": {
        "tr": "golf",
        "en": "Golf"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Golf.",
        "accusative": "Ich suche ___ Golf.",
        "dative": "Neben ___ Golf liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Grab",
      "translation": {
        "tr": "Mezar",
        "en": "Grave"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Grab.",
        "accusative": "Ich nehme ___ Grab.",
        "dative": "Vor ___ Grab steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Grad",
      "translation": {
        "tr": "derece",
        "en": "degree"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grad.",
        "accusative": "Ich sehe ___ Grad.",
        "dative": "Ich gehe mit ___ Grad."
      }
    },
    {
      "article": "das",
      "word": "Gramm",
      "translation": {
        "tr": "gram",
        "en": "grams"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gramm.",
        "accusative": "Ich suche ___ Gramm.",
        "dative": "Neben ___ Gramm liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gras",
      "translation": {
        "tr": "Çim",
        "en": "Grass"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Gras.",
        "accusative": "Ich fotografiere ___ Gras.",
        "dative": "Ich bin bei ___ Gras."
      }
    },
    {
      "article": "die",
      "word": "Grenze",
      "translation": {
        "tr": "sınır",
        "en": "border"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Grenze.",
        "accusative": "Ich kaufe ___ Grenze.",
        "dative": "Mit ___ Grenze arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Großstadt",
      "translation": {
        "tr": "Büyük şehir",
        "en": "Big city"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Großstadt.",
        "accusative": "Ich besuche ___ Großstadt.",
        "dative": "Ich warte vor ___ Großstadt."
      }
    },
    {
      "article": "das",
      "word": "Grün",
      "translation": {
        "tr": "Yeşil",
        "en": "Green"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grün.",
        "accusative": "Ich sehe ___ Grün.",
        "dative": "Ich gehe mit ___ Grün."
      }
    },
    {
      "article": "der",
      "word": "Grund",
      "translation": {
        "tr": "sebep",
        "en": "reason"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grund.",
        "accusative": "Ich besuche ___ Grund.",
        "dative": "Ich danke ___ Grund."
      }
    },
    {
      "article": "die",
      "word": "Grundlage",
      "translation": {
        "tr": "Vakıf",
        "en": "Foundation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grundlage.",
        "accusative": "Ich suche ___ Grundlage.",
        "dative": "Neben ___ Grundlage liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Gruppe",
      "translation": {
        "tr": "grup",
        "en": "group"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gruppe.",
        "accusative": "Ich suche ___ Gruppe.",
        "dative": "Neben ___ Gruppe liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gruß",
      "translation": {
        "tr": "selamlar",
        "en": "Greetings"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gruß.",
        "accusative": "Ich kaufe ___ Gruß.",
        "dative": "Mit ___ Gruß arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gurt",
      "translation": {
        "tr": "Kemer",
        "en": "Belt"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gurt.",
        "accusative": "Ich nehme ___ Gurt.",
        "dative": "Vor ___ Gurt steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Gürtel",
      "translation": {
        "tr": "Kemer",
        "en": "Belt"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gürtel.",
        "accusative": "Ich kaufe ___ Gürtel.",
        "dative": "Mit ___ Gürtel arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Gut",
      "translation": {
        "tr": "iyi",
        "en": "Good"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gut.",
        "accusative": "Ich nehme ___ Gut.",
        "dative": "Vor ___ Gut steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gymnasium",
      "translation": {
        "tr": "Lise",
        "en": "High school"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Gymnasium.",
        "accusative": "Ich fotografiere ___ Gymnasium.",
        "dative": "Wir treffen uns bei ___ Gymnasium."
      }
    },
    {
      "article": "der",
      "word": "Hafen",
      "translation": {
        "tr": "Liman",
        "en": "Port"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Hafen.",
        "accusative": "Ich sehe ___ Hafen.",
        "dative": "Ich antworte ___ Hafen."
      }
    },
    {
      "article": "der",
      "word": "Hahn",
      "translation": {
        "tr": "Horoz",
        "en": "Rooster"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hahn.",
        "accusative": "Ich kaufe ___ Hahn.",
        "dative": "Mit ___ Hahn arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Hai",
      "translation": {
        "tr": "Merhaba",
        "en": "Hai"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hai.",
        "accusative": "Ich sehe ___ Hai.",
        "dative": "Ich gehe mit ___ Hai."
      }
    },
    {
      "article": "der",
      "word": "Haken",
      "translation": {
        "tr": "Kanca",
        "en": "Hook"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Haken.",
        "accusative": "Ich suche ___ Haken.",
        "dative": "Neben ___ Haken liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hälfte",
      "translation": {
        "tr": "yarım",
        "en": "half"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hälfte.",
        "accusative": "Ich suche ___ Hälfte.",
        "dative": "Neben ___ Hälfte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Halle",
      "translation": {
        "tr": "Salon",
        "en": "Hall"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Halle.",
        "accusative": "Ich kaufe ___ Halle.",
        "dative": "Mit ___ Halle arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Hamster",
      "translation": {
        "tr": "Hamsterler",
        "en": "Hamsters"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hamster.",
        "accusative": "Ich nehme ___ Hamster.",
        "dative": "Vor ___ Hamster steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Handgelenk",
      "translation": {
        "tr": "bilek",
        "en": "wrist"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Handgelenk.",
        "accusative": "Ich suche ___ Handgelenk.",
        "dative": "Neben ___ Handgelenk liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Handschrift",
      "translation": {
        "tr": "El yazısı",
        "en": "Handwriting"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Handschrift.",
        "accusative": "Ich kaufe ___ Handschrift.",
        "dative": "Mit ___ Handschrift arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Handwerker",
      "translation": {
        "tr": "Zanaatkar",
        "en": "Craftsman"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Handwerker.",
        "accusative": "Ich besuche ___ Handwerker.",
        "dative": "Ich danke ___ Handwerker."
      }
    },
    {
      "article": "die",
      "word": "Hauptstadt",
      "translation": {
        "tr": "Sermaye",
        "en": "Capital"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hauptstadt.",
        "accusative": "Ich sehe ___ Hauptstadt.",
        "dative": "Ich gehe mit ___ Hauptstadt."
      }
    },
    {
      "article": "die",
      "word": "Hausfrau",
      "translation": {
        "tr": "ev hanımı",
        "en": "housewife"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Hausfrau.",
        "accusative": "Ich besuche ___ Hausfrau.",
        "dative": "Ich warte vor ___ Hausfrau."
      }
    },
    {
      "article": "der",
      "word": "Hausmeister",
      "translation": {
        "tr": "bekçi",
        "en": "caretaker"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Hausmeister.",
        "accusative": "Ich parke ___ Hausmeister.",
        "dative": "Ich komme mit ___ Hausmeister."
      }
    },
    {
      "article": "die",
      "word": "Haustür",
      "translation": {
        "tr": "Ön kapı",
        "en": "Front door"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Haustür.",
        "accusative": "Ich kaufe ___ Haustür.",
        "dative": "Hinter ___ Haustür ist ein Fenster."
      }
    },
    {
      "article": "die",
      "word": "Haut",
      "translation": {
        "tr": "cilt",
        "en": "skin"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Haut.",
        "accusative": "Ich kaufe ___ Haut.",
        "dative": "Mit ___ Haut arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Heft",
      "translation": {
        "tr": "Kitapçık",
        "en": "Booklet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Heft.",
        "accusative": "Ich drucke ___ Heft.",
        "dative": "Aus ___ Heft lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Held",
      "translation": {
        "tr": "Kahraman",
        "en": "Hero"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Held.",
        "accusative": "Ich treffe ___ Held.",
        "dative": "Ich helfe ___ Held."
      }
    },
    {
      "article": "der",
      "word": "Helm",
      "translation": {
        "tr": "Kask",
        "en": "Helmet"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Helm.",
        "accusative": "Ich nehme ___ Helm.",
        "dative": "Vor ___ Helm steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Herd",
      "translation": {
        "tr": "Soba",
        "en": "Stove"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Herd.",
        "accusative": "Ich sehe ___ Herd.",
        "dative": "Ich gehe mit ___ Herd."
      }
    },
    {
      "article": "die",
      "word": "Hilfe",
      "translation": {
        "tr": "Yardım",
        "en": "Help"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hilfe.",
        "accusative": "Ich nehme ___ Hilfe.",
        "dative": "Vor ___ Hilfe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Hirsch",
      "translation": {
        "tr": "Geyik",
        "en": "Deer"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Hirsch.",
        "accusative": "Ich streichle ___ Hirsch.",
        "dative": "Ich bin bei ___ Hirsch."
      }
    },
    {
      "article": "der",
      "word": "Hit",
      "translation": {
        "tr": "Vur",
        "en": "Hit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hit.",
        "accusative": "Ich suche ___ Hit.",
        "dative": "Neben ___ Hit liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hitze",
      "translation": {
        "tr": "Isı",
        "en": "Heat"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hitze.",
        "accusative": "Ich sehe ___ Hitze.",
        "dative": "Ich gehe mit ___ Hitze."
      }
    },
    {
      "article": "das",
      "word": "Hobby",
      "translation": {
        "tr": "hobi",
        "en": "hobby"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hobby.",
        "accusative": "Ich sehe ___ Hobby.",
        "dative": "Ich gehe mit ___ Hobby."
      }
    },
    {
      "article": "die",
      "word": "Hochzeit",
      "translation": {
        "tr": "düğün",
        "en": "wedding"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hochzeit.",
        "accusative": "Ich suche ___ Hochzeit.",
        "dative": "Neben ___ Hochzeit liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Hockey",
      "translation": {
        "tr": "Hokey",
        "en": "Hockey"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Hockey.",
        "accusative": "Ich repariere ___ Hockey.",
        "dative": "Ich schreibe mit ___ Hockey."
      }
    },
    {
      "article": "der",
      "word": "Hof",
      "translation": {
        "tr": "avlu",
        "en": "yard"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hof.",
        "accusative": "Ich nehme ___ Hof.",
        "dative": "Vor ___ Hof steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Hoffnung",
      "translation": {
        "tr": "umut",
        "en": "Hope"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Hoffnung zentral.",
        "accusative": "Wir besprechen ___ Hoffnung.",
        "dative": "Mit ___ Hoffnung wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Höhe",
      "translation": {
        "tr": "Yükseklik",
        "en": "Height"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Höhe.",
        "accusative": "Ich suche ___ Höhe.",
        "dative": "Neben ___ Höhe liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Höhle",
      "translation": {
        "tr": "mağara",
        "en": "cave"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Höhle.",
        "accusative": "Ich sehe ___ Höhle.",
        "dative": "Ich gehe mit ___ Höhle."
      }
    },
    {
      "article": "das",
      "word": "Horn",
      "translation": {
        "tr": "boynuz",
        "en": "horn"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Horn.",
        "accusative": "Ich besuche ___ Horn.",
        "dative": "Ich danke ___ Horn."
      }
    },
    {
      "article": "das",
      "word": "Hotelzimmer",
      "translation": {
        "tr": "Otel odası",
        "en": "Hotel room"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Hotelzimmer.",
        "accusative": "Ich sehe ___ Hotelzimmer.",
        "dative": "Ich bleibe in ___ Hotelzimmer."
      }
    },
    {
      "article": "der",
      "word": "Hubschrauber",
      "translation": {
        "tr": "helikopter",
        "en": "Helicopter"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hubschrauber.",
        "accusative": "Ich nehme ___ Hubschrauber.",
        "dative": "Vor ___ Hubschrauber steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Hügel",
      "translation": {
        "tr": "tepe",
        "en": "hill"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hügel.",
        "accusative": "Ich nehme ___ Hügel.",
        "dative": "Vor ___ Hügel steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Hunger",
      "translation": {
        "tr": "Açlık",
        "en": "Hunger"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hunger.",
        "accusative": "Ich suche ___ Hunger.",
        "dative": "Neben ___ Hunger liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hütte",
      "translation": {
        "tr": "kulübe",
        "en": "Hut"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hütte.",
        "accusative": "Ich sehe ___ Hütte.",
        "dative": "Ich gehe mit ___ Hütte."
      }
    },
    {
      "article": "die",
      "word": "Idee",
      "translation": {
        "tr": "fikir",
        "en": "idea"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Idee.",
        "accusative": "Ich erkläre ___ Idee.",
        "dative": "An ___ Idee arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Idiot",
      "translation": {
        "tr": "Aptal",
        "en": "Idiot"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Idiot.",
        "accusative": "Ich suche ___ Idiot.",
        "dative": "Neben ___ Idiot liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Imbiss",
      "translation": {
        "tr": "Aperatif",
        "en": "Snack"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Imbiss.",
        "accusative": "Ich nehme ___ Imbiss.",
        "dative": "Vor ___ Imbiss steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Information",
      "translation": {
        "tr": "bilgi",
        "en": "information"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Information.",
        "accusative": "Ich sehe ___ Information.",
        "dative": "Ich gehe mit ___ Information."
      }
    },
    {
      "article": "die",
      "word": "Insel",
      "translation": {
        "tr": "ada",
        "en": "island"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Insel.",
        "accusative": "Ich fotografiere ___ Insel.",
        "dative": "Wir treffen uns bei ___ Insel."
      }
    },
    {
      "article": "das",
      "word": "Instrument",
      "translation": {
        "tr": "enstrüman",
        "en": "instrument"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Instrument.",
        "accusative": "Ich besuche ___ Instrument.",
        "dative": "Ich danke ___ Instrument."
      }
    },
    {
      "article": "die",
      "word": "Jahreszeit",
      "translation": {
        "tr": "sezon",
        "en": "season"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Jahreszeit.",
        "accusative": "Ich kenne ___ Jahreszeit.",
        "dative": "Ich spreche mit ___ Jahreszeit."
      }
    },
    {
      "article": "die",
      "word": "Jeans",
      "translation": {
        "tr": "Kot pantolon",
        "en": "Jeans"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jeans.",
        "accusative": "Ich suche ___ Jeans.",
        "dative": "Neben ___ Jeans liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Job",
      "translation": {
        "tr": "İş",
        "en": "Job"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Job.",
        "accusative": "Ich suche ___ Job.",
        "dative": "Neben ___ Job liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Kabel",
      "translation": {
        "tr": "Kablo",
        "en": "Cable"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kabel.",
        "accusative": "Ich sehe ___ Kabel.",
        "dative": "Ich gehe mit ___ Kabel."
      }
    },
    {
      "article": "die",
      "word": "Kabine",
      "translation": {
        "tr": "kabin",
        "en": "cabin"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kabine.",
        "accusative": "Ich nehme ___ Kabine.",
        "dative": "Vor ___ Kabine steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Käfer",
      "translation": {
        "tr": "Böcek",
        "en": "Beetle"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Käfer.",
        "accusative": "Ich füttere ___ Käfer.",
        "dative": "Ich spiele mit ___ Käfer."
      }
    },
    {
      "article": "der",
      "word": "Kalender",
      "translation": {
        "tr": "Takvim",
        "en": "Calendar"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Kalender.",
        "accusative": "Ich erwarte ___ Kalender.",
        "dative": "Vor ___ Kalender bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Kälte",
      "translation": {
        "tr": "Soğuk",
        "en": "Cold"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kälte.",
        "accusative": "Ich suche ___ Kälte.",
        "dative": "Neben ___ Kälte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kamera",
      "translation": {
        "tr": "Kamera",
        "en": "Camera"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Kamera.",
        "accusative": "Ich repariere ___ Kamera.",
        "dative": "Ich schreibe mit ___ Kamera."
      }
    },
    {
      "article": "der",
      "word": "Kamin",
      "translation": {
        "tr": "Şömine",
        "en": "Fireplace"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Kamin.",
        "accusative": "Ich entdecke ___ Kamin.",
        "dative": "Ich gehe zu ___ Kamin."
      }
    },
    {
      "article": "die",
      "word": "Kammer",
      "translation": {
        "tr": "Oda",
        "en": "Chamber"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kammer.",
        "accusative": "Ich nehme ___ Kammer.",
        "dative": "Vor ___ Kammer steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kampf",
      "translation": {
        "tr": "kavga",
        "en": "fight"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kampf.",
        "accusative": "Ich nehme ___ Kampf.",
        "dative": "Vor ___ Kampf steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kanal",
      "translation": {
        "tr": "Kanal",
        "en": "Channel"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kanal.",
        "accusative": "Ich suche ___ Kanal.",
        "dative": "Neben ___ Kanal liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kanne",
      "translation": {
        "tr": "saksı",
        "en": "pot"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kanne.",
        "accusative": "Ich sehe ___ Kanne.",
        "dative": "Ich gehe mit ___ Kanne."
      }
    },
    {
      "article": "die",
      "word": "Kante",
      "translation": {
        "tr": "Kenar",
        "en": "Edge"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kante.",
        "accusative": "Ich suche ___ Kante.",
        "dative": "Neben ___ Kante liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kantine",
      "translation": {
        "tr": "kantin",
        "en": "Canteen"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kantine.",
        "accusative": "Ich suche ___ Kantine.",
        "dative": "Neben ___ Kantine liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Kapitel",
      "translation": {
        "tr": "Bölüm",
        "en": "Chapter"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kapitel.",
        "accusative": "Ich nehme ___ Kapitel.",
        "dative": "Vor ___ Kapitel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kappe",
      "translation": {
        "tr": "kap",
        "en": "cap"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kappe.",
        "accusative": "Ich nehme ___ Kappe.",
        "dative": "Vor ___ Kappe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Karton",
      "translation": {
        "tr": "karton",
        "en": "Cardboard"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Karton.",
        "accusative": "Ich sehe ___ Karton.",
        "dative": "Ich sitze in ___ Karton."
      }
    },
    {
      "article": "die",
      "word": "Kasse",
      "translation": {
        "tr": "Ödeme",
        "en": "Checkout"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kasse.",
        "accusative": "Ich nehme ___ Kasse.",
        "dative": "Vor ___ Kasse steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kassette",
      "translation": {
        "tr": "kaset",
        "en": "cassette"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kassette.",
        "accusative": "Ich suche ___ Kassette.",
        "dative": "Neben ___ Kassette liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kasten",
      "translation": {
        "tr": "kutu",
        "en": "box"
      },
      "casePrompts": {
        "nominative": "Neben der Tür steht ___ Kasten.",
        "accusative": "Ich putze ___ Kasten.",
        "dative": "Neben ___ Kasten steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Kätzchen",
      "translation": {
        "tr": "yavru kedi",
        "en": "kitten"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kätzchen.",
        "accusative": "Ich sehe ___ Kätzchen.",
        "dative": "Ich gehe mit ___ Kätzchen."
      }
    },
    {
      "article": "der",
      "word": "Käufer",
      "translation": {
        "tr": "Alıcı",
        "en": "Buyer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Käufer.",
        "accusative": "Ich suche ___ Käufer.",
        "dative": "Neben ___ Käufer liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Keks",
      "translation": {
        "tr": "Çerez",
        "en": "Cookie"
      },
      "casePrompts": {
        "nominative": "Im Kühlschrank ist ___ Keks.",
        "accusative": "Ich esse ___ Keks.",
        "dative": "Zu ___ Keks nehme ich ein Getränk."
      }
    },
    {
      "article": "der",
      "word": "Keller",
      "translation": {
        "tr": "Bodrum",
        "en": "Basement"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Keller.",
        "accusative": "Ich suche ___ Keller.",
        "dative": "Neben ___ Keller liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kellner",
      "translation": {
        "tr": "Garson",
        "en": "Waiter"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Kellner.",
        "accusative": "Ich treffe ___ Kellner.",
        "dative": "Ich helfe ___ Kellner."
      }
    },
    {
      "article": "die",
      "word": "Kette",
      "translation": {
        "tr": "zincir",
        "en": "chain"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kette.",
        "accusative": "Ich sehe ___ Kette.",
        "dative": "Ich gehe mit ___ Kette."
      }
    },
    {
      "article": "das",
      "word": "Kinderzimmer",
      "translation": {
        "tr": "Çocuk odası",
        "en": "Children's room"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Kinderzimmer.",
        "accusative": "Ich sehe ___ Kinderzimmer.",
        "dative": "Ich antworte ___ Kinderzimmer."
      }
    },
    {
      "article": "das",
      "word": "Kinn",
      "translation": {
        "tr": "Çene",
        "en": "Chin"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kinn.",
        "accusative": "Ich suche ___ Kinn.",
        "dative": "Neben ___ Kinn liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kiosk",
      "translation": {
        "tr": "kiosk",
        "en": "kiosk"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kiosk.",
        "accusative": "Ich suche ___ Kiosk.",
        "dative": "Neben ___ Kiosk liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kirsche",
      "translation": {
        "tr": "Kiraz",
        "en": "Cherry"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kirsche.",
        "accusative": "Ich suche ___ Kirsche.",
        "dative": "Neben ___ Kirsche liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kiste",
      "translation": {
        "tr": "kutu",
        "en": "box"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Kiste.",
        "accusative": "Ich sehe ___ Kiste.",
        "dative": "Ich stehe bei ___ Kiste."
      }
    },
    {
      "article": "die",
      "word": "Klasse",
      "translation": {
        "tr": "sınıf",
        "en": "class"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klasse.",
        "accusative": "Ich nehme ___ Klasse.",
        "dative": "Vor ___ Klasse steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Klassenzimmer",
      "translation": {
        "tr": "sınıf",
        "en": "classroom"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Klassenzimmer.",
        "accusative": "Ich besuche ___ Klassenzimmer.",
        "dative": "Ich warte vor ___ Klassenzimmer."
      }
    },
    {
      "article": "das",
      "word": "Klavier",
      "translation": {
        "tr": "Piyano",
        "en": "Piano"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klavier.",
        "accusative": "Ich nehme ___ Klavier.",
        "dative": "Vor ___ Klavier steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kleidung",
      "translation": {
        "tr": "Giyim",
        "en": "Clothing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kleidung.",
        "accusative": "Ich kaufe ___ Kleidung.",
        "dative": "Mit ___ Kleidung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Klingel",
      "translation": {
        "tr": "Çan",
        "en": "Bell"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klingel.",
        "accusative": "Ich nehme ___ Klingel.",
        "dative": "Vor ___ Klingel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Klinik",
      "translation": {
        "tr": "Klinik",
        "en": "Clinic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Klinik.",
        "accusative": "Ich suche ___ Klinik.",
        "dative": "Neben ___ Klinik liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kneipe",
      "translation": {
        "tr": "birahane",
        "en": "pub"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kneipe.",
        "accusative": "Ich nehme ___ Kneipe.",
        "dative": "Vor ___ Kneipe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Knie",
      "translation": {
        "tr": "Dizler",
        "en": "Knees"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Knie.",
        "accusative": "Ich kaufe ___ Knie.",
        "dative": "Mit ___ Knie arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Knoblauch",
      "translation": {
        "tr": "Sarımsak",
        "en": "Garlic"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Knoblauch.",
        "accusative": "Ich nehme ___ Knoblauch.",
        "dative": "Vor ___ Knoblauch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Knochen",
      "translation": {
        "tr": "Kemikler",
        "en": "Bones"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Knochen.",
        "accusative": "Ich nehme ___ Knochen.",
        "dative": "Vor ___ Knochen steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Knopf",
      "translation": {
        "tr": "düğme",
        "en": "button"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Knopf.",
        "accusative": "Ich suche ___ Knopf.",
        "dative": "Neben ___ Knopf liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Kochen",
      "translation": {
        "tr": "Yemek Pişirme",
        "en": "Cooking"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kochen.",
        "accusative": "Ich sehe ___ Kochen.",
        "dative": "Ich gehe mit ___ Kochen."
      }
    },
    {
      "article": "der",
      "word": "Kollege",
      "translation": {
        "tr": "meslektaş",
        "en": "colleague"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kollege.",
        "accusative": "Ich besuche ___ Kollege.",
        "dative": "Ich danke ___ Kollege."
      }
    },
    {
      "article": "die",
      "word": "Kollegin",
      "translation": {
        "tr": "meslektaş",
        "en": "colleague"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kollegin.",
        "accusative": "Ich besuche ___ Kollegin.",
        "dative": "Ich danke ___ Kollegin."
      }
    },
    {
      "article": "das",
      "word": "Komma",
      "translation": {
        "tr": "Virgül",
        "en": "Comma"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Komma.",
        "accusative": "Ich suche ___ Komma.",
        "dative": "Neben ___ Komma liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kompass",
      "translation": {
        "tr": "Pusula",
        "en": "Compass"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kompass.",
        "accusative": "Ich sehe ___ Kompass.",
        "dative": "Ich gehe mit ___ Kompass."
      }
    },
    {
      "article": "der",
      "word": "Kontakt",
      "translation": {
        "tr": "İletişim",
        "en": "Contact"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kontakt.",
        "accusative": "Ich sehe ___ Kontakt.",
        "dative": "Ich gehe mit ___ Kontakt."
      }
    },
    {
      "article": "der",
      "word": "Kontinent",
      "translation": {
        "tr": "kıta",
        "en": "continent"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kontinent.",
        "accusative": "Ich sehe ___ Kontinent.",
        "dative": "Ich gehe mit ___ Kontinent."
      }
    },
    {
      "article": "das",
      "word": "Konto",
      "translation": {
        "tr": "hesap",
        "en": "account"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Konto.",
        "accusative": "Ich suche ___ Konto.",
        "dative": "Neben ___ Konto liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kontrolle",
      "translation": {
        "tr": "Kontrol",
        "en": "Control"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kontrolle.",
        "accusative": "Ich kaufe ___ Kontrolle.",
        "dative": "Mit ___ Kontrolle arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Konzert",
      "translation": {
        "tr": "Konser",
        "en": "Concert"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Konzert.",
        "accusative": "Ich nehme ___ Konzert.",
        "dative": "Vor ___ Konzert steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kopie",
      "translation": {
        "tr": "Kopyala",
        "en": "Copy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kopie.",
        "accusative": "Ich kaufe ___ Kopie.",
        "dative": "Mit ___ Kopie arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Korb",
      "translation": {
        "tr": "sepet",
        "en": "basket"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Korb.",
        "accusative": "Ich sehe ___ Korb.",
        "dative": "Ich gehe mit ___ Korb."
      }
    },
    {
      "article": "das",
      "word": "Korn",
      "translation": {
        "tr": "tahıl",
        "en": "grain"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Korn.",
        "accusative": "Ich fotografiere ___ Korn.",
        "dative": "Ich bin bei ___ Korn."
      }
    },
    {
      "article": "das",
      "word": "Kostüm",
      "translation": {
        "tr": "kostüm",
        "en": "costume"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kostüm.",
        "accusative": "Ich suche ___ Kostüm.",
        "dative": "Neben ___ Kostüm liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kraft",
      "translation": {
        "tr": "Güç",
        "en": "Strength"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kraft.",
        "accusative": "Ich kaufe ___ Kraft.",
        "dative": "Mit ___ Kraft arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Kran",
      "translation": {
        "tr": "vinç",
        "en": "crane"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kran.",
        "accusative": "Ich nehme ___ Kran.",
        "dative": "Vor ___ Kran steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Krankenhaus",
      "translation": {
        "tr": "Hastane",
        "en": "Hospital"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Krankenhaus.",
        "accusative": "Ich sehe ___ Krankenhaus.",
        "dative": "Ich bleibe in ___ Krankenhaus."
      }
    },
    {
      "article": "die",
      "word": "Krankenkasse",
      "translation": {
        "tr": "Sağlık sigortası",
        "en": "Health insurance"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Krankenkasse wichtig.",
        "accusative": "Wir verstehen ___ Krankenkasse.",
        "dative": "Bei ___ Krankenkasse brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Krankenschwester",
      "translation": {
        "tr": "Hemşire",
        "en": "Nurse"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Krankenschwester.",
        "accusative": "Ich nehme ___ Krankenschwester.",
        "dative": "Vor ___ Krankenschwester steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Krankenwagen",
      "translation": {
        "tr": "Ambulans",
        "en": "Ambulance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Krankenwagen.",
        "accusative": "Ich suche ___ Krankenwagen.",
        "dative": "Neben ___ Krankenwagen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Krankheit",
      "translation": {
        "tr": "hastalık",
        "en": "disease"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Krankheit.",
        "accusative": "Ich suche ___ Krankheit.",
        "dative": "Ich bin in ___ Krankheit."
      }
    },
    {
      "article": "das",
      "word": "Kraut",
      "translation": {
        "tr": "bitki",
        "en": "herb"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kraut.",
        "accusative": "Ich suche ___ Kraut.",
        "dative": "Neben ___ Kraut liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Krawatte",
      "translation": {
        "tr": "Kravat",
        "en": "Tie"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Krawatte.",
        "accusative": "Ich nehme ___ Krawatte.",
        "dative": "Vor ___ Krawatte steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kreis",
      "translation": {
        "tr": "daire",
        "en": "circle"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Kreis.",
        "accusative": "Ich beobachte ___ Kreis.",
        "dative": "Ich stehe vor ___ Kreis."
      }
    },
    {
      "article": "das",
      "word": "Kreuz",
      "translation": {
        "tr": "Çapraz",
        "en": "Cross"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kreuz.",
        "accusative": "Ich kaufe ___ Kreuz.",
        "dative": "Mit ___ Kreuz arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Kreuzung",
      "translation": {
        "tr": "kavşak",
        "en": "intersection"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kreuzung.",
        "accusative": "Ich sehe ___ Kreuzung.",
        "dative": "Ich gehe mit ___ Kreuzung."
      }
    },
    {
      "article": "der",
      "word": "Krieg",
      "translation": {
        "tr": "savaş",
        "en": "war"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Krieg.",
        "accusative": "Ich brauche ___ Krieg.",
        "dative": "Ich beschäftige mich mit ___ Krieg."
      }
    },
    {
      "article": "die",
      "word": "Krone",
      "translation": {
        "tr": "Taç",
        "en": "Crown"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Krone.",
        "accusative": "Ich suche ___ Krone.",
        "dative": "Neben ___ Krone liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kugel",
      "translation": {
        "tr": "top",
        "en": "ball"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kugel.",
        "accusative": "Ich nehme ___ Kugel.",
        "dative": "Vor ___ Kugel steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Küken",
      "translation": {
        "tr": "Civcivler",
        "en": "Chicks"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Küken.",
        "accusative": "Ich suche ___ Küken.",
        "dative": "Neben ___ Küken liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kunde",
      "translation": {
        "tr": "müşteri",
        "en": "customer"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Kunde.",
        "accusative": "Ich treffe ___ Kunde.",
        "dative": "Ich helfe ___ Kunde."
      }
    },
    {
      "article": "der",
      "word": "Kurs",
      "translation": {
        "tr": "Kurs",
        "en": "Course"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Kurs.",
        "accusative": "Ich erwarte ___ Kurs.",
        "dative": "Vor ___ Kurs bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Kurve",
      "translation": {
        "tr": "eğri",
        "en": "curve"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kurve.",
        "accusative": "Ich suche ___ Kurve.",
        "dative": "Neben ___ Kurve liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kuss",
      "translation": {
        "tr": "Öpücük",
        "en": "Kiss"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kuss.",
        "accusative": "Ich suche ___ Kuss.",
        "dative": "Neben ___ Kuss liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Küste",
      "translation": {
        "tr": "sahil",
        "en": "coast"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Küste.",
        "accusative": "Ich nehme ___ Küste.",
        "dative": "Vor ___ Küste steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lachen",
      "translation": {
        "tr": "Gülmek",
        "en": "Laugh"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lachen.",
        "accusative": "Ich sehe ___ Lachen.",
        "dative": "Ich gehe mit ___ Lachen."
      }
    },
    {
      "article": "der",
      "word": "Lachs",
      "translation": {
        "tr": "Somon",
        "en": "Salmon"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lachs.",
        "accusative": "Ich kaufe ___ Lachs.",
        "dative": "Mit ___ Lachs arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Laden",
      "translation": {
        "tr": "Yükleniyor",
        "en": "Loading"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Laden.",
        "accusative": "Ich sehe ___ Laden.",
        "dative": "Ich gehe mit ___ Laden."
      }
    },
    {
      "article": "das",
      "word": "Lamm",
      "translation": {
        "tr": "Kuzu",
        "en": "Lamb"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lamm.",
        "accusative": "Ich kaufe ___ Lamm.",
        "dative": "Mit ___ Lamm arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Landung",
      "translation": {
        "tr": "iniş",
        "en": "landing"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Landung.",
        "accusative": "Ich erwarte ___ Landung.",
        "dative": "Vor ___ Landung bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Länge",
      "translation": {
        "tr": "Uzunluk",
        "en": "Length"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Länge.",
        "accusative": "Ich sehe ___ Länge.",
        "dative": "Ich gehe mit ___ Länge."
      }
    },
    {
      "article": "der",
      "word": "Laptop",
      "translation": {
        "tr": "Dizüstü bilgisayar",
        "en": "Laptop"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Laptop.",
        "accusative": "Ich repariere ___ Laptop.",
        "dative": "Ich schreibe mit ___ Laptop."
      }
    },
    {
      "article": "der",
      "word": "Lastwagen",
      "translation": {
        "tr": "Kamyonlar",
        "en": "Trucks"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Lastwagen.",
        "accusative": "Ich parke ___ Lastwagen.",
        "dative": "Ich komme mit ___ Lastwagen."
      }
    },
    {
      "article": "die",
      "word": "Laterne",
      "translation": {
        "tr": "fener",
        "en": "lantern"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Laterne.",
        "accusative": "Ich nehme ___ Laterne.",
        "dative": "Vor ___ Laterne steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Lauf",
      "translation": {
        "tr": "Çalıştır",
        "en": "Run"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lauf.",
        "accusative": "Ich nehme ___ Lauf.",
        "dative": "Vor ___ Lauf steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Laune",
      "translation": {
        "tr": "Ruh hali",
        "en": "Mood"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Laune.",
        "accusative": "Ich suche ___ Laune.",
        "dative": "Neben ___ Laune liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Laut",
      "translation": {
        "tr": "Yüksek sesle",
        "en": "Loud"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Laut.",
        "accusative": "Ich sehe ___ Laut.",
        "dative": "Ich gehe mit ___ Laut."
      }
    },
    {
      "article": "der",
      "word": "Lautsprecher",
      "translation": {
        "tr": "Hoparlörler",
        "en": "Speakers"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lautsprecher.",
        "accusative": "Ich sehe ___ Lautsprecher.",
        "dative": "Ich gehe mit ___ Lautsprecher."
      }
    },
    {
      "article": "die",
      "word": "Leber",
      "translation": {
        "tr": "Karaciğer",
        "en": "Liver"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Leber.",
        "accusative": "Ich sehe ___ Leber.",
        "dative": "Ich gehe mit ___ Leber."
      }
    },
    {
      "article": "das",
      "word": "Leder",
      "translation": {
        "tr": "Deri",
        "en": "Leather"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Leder.",
        "accusative": "Ich nehme ___ Leder.",
        "dative": "Vor ___ Leder steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lehrbuch",
      "translation": {
        "tr": "Ders Kitabı",
        "en": "Textbook"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lehrbuch.",
        "accusative": "Ich drucke ___ Lehrbuch.",
        "dative": "Aus ___ Lehrbuch lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Leim",
      "translation": {
        "tr": "tutkal",
        "en": "glue"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Leim.",
        "accusative": "Ich suche ___ Leim.",
        "dative": "Neben ___ Leim liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Leinwand",
      "translation": {
        "tr": "tuval",
        "en": "canvas"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Leinwand.",
        "accusative": "Ich sehe ___ Leinwand.",
        "dative": "Ich gehe mit ___ Leinwand."
      }
    },
    {
      "article": "die",
      "word": "Leistung",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Leistung.",
        "accusative": "Ich sehe ___ Leistung.",
        "dative": "Ich antworte ___ Leistung."
      }
    },
    {
      "article": "der",
      "word": "Leser",
      "translation": {
        "tr": "Okuyucu",
        "en": "Reader"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Leser.",
        "accusative": "Ich suche ___ Leser.",
        "dative": "Neben ___ Leser liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Liebling",
      "translation": {
        "tr": "sevgilim",
        "en": "Darling"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Liebling.",
        "accusative": "Ich kaufe ___ Liebling.",
        "dative": "Mit ___ Liebling arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lieferung",
      "translation": {
        "tr": "Teslimat",
        "en": "Delivery"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lieferung.",
        "accusative": "Ich kaufe ___ Lieferung.",
        "dative": "Mit ___ Lieferung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Lift",
      "translation": {
        "tr": "Asansör",
        "en": "Elevator"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lift.",
        "accusative": "Ich nehme ___ Lift.",
        "dative": "Vor ___ Lift steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lila",
      "translation": {
        "tr": "Mor",
        "en": "Purple"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lila.",
        "accusative": "Ich sehe ___ Lila.",
        "dative": "Ich gehe mit ___ Lila."
      }
    },
    {
      "article": "die",
      "word": "Linie",
      "translation": {
        "tr": "çizgi",
        "en": "line"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Linie.",
        "accusative": "Ich nehme ___ Linie.",
        "dative": "Vor ___ Linie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Linse",
      "translation": {
        "tr": "mercek",
        "en": "lens"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Linse.",
        "accusative": "Ich nehme ___ Linse.",
        "dative": "Vor ___ Linse steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Liste",
      "translation": {
        "tr": "Liste",
        "en": "List"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Liste.",
        "accusative": "Ich nehme ___ Liste.",
        "dative": "Vor ___ Liste steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lob",
      "translation": {
        "tr": "Övgü",
        "en": "Praise"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lob.",
        "accusative": "Ich kaufe ___ Lob.",
        "dative": "Mit ___ Lob arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Logo",
      "translation": {
        "tr": "logo",
        "en": "Logo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Logo.",
        "accusative": "Ich suche ___ Logo.",
        "dative": "Neben ___ Logo liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Lohn",
      "translation": {
        "tr": "ücretler",
        "en": "wages"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lohn.",
        "accusative": "Ich sehe ___ Lohn.",
        "dative": "Ich gehe mit ___ Lohn."
      }
    },
    {
      "article": "das",
      "word": "Lokal",
      "translation": {
        "tr": "Yerel",
        "en": "Local"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lokal.",
        "accusative": "Ich suche ___ Lokal.",
        "dative": "Neben ___ Lokal liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Los",
      "translation": {
        "tr": "Git",
        "en": "Go"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Los.",
        "accusative": "Ich suche ___ Los.",
        "dative": "Neben ___ Los liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Lotto",
      "translation": {
        "tr": "Piyango",
        "en": "Lottery"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lotto.",
        "accusative": "Ich nehme ___ Lotto.",
        "dative": "Vor ___ Lotto steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Lücke",
      "translation": {
        "tr": "boşluk",
        "en": "gap"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lücke.",
        "accusative": "Ich kaufe ___ Lücke.",
        "dative": "Mit ___ Lücke arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lüge",
      "translation": {
        "tr": "yalan söylemek",
        "en": "lie"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lüge.",
        "accusative": "Ich suche ___ Lüge.",
        "dative": "Neben ___ Lüge liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Lügner",
      "translation": {
        "tr": "Yalancı",
        "en": "Liar"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lügner.",
        "accusative": "Ich sehe ___ Lügner.",
        "dative": "Ich gehe mit ___ Lügner."
      }
    },
    {
      "article": "die",
      "word": "Lunge",
      "translation": {
        "tr": "akciğerler",
        "en": "lungs"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lunge.",
        "accusative": "Ich sehe ___ Lunge.",
        "dative": "Ich gehe mit ___ Lunge."
      }
    },
    {
      "article": "die",
      "word": "Lust",
      "translation": {
        "tr": "Şehvet",
        "en": "Lust"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lust.",
        "accusative": "Ich suche ___ Lust.",
        "dative": "Neben ___ Lust liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Magazin",
      "translation": {
        "tr": "Dergi",
        "en": "Magazine"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Magazin.",
        "accusative": "Ich drucke ___ Magazin.",
        "dative": "Aus ___ Magazin lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Mal",
      "translation": {
        "tr": "kez",
        "en": "times"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mal.",
        "accusative": "Ich suche ___ Mal.",
        "dative": "Neben ___ Mal liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Maler",
      "translation": {
        "tr": "Ressam",
        "en": "Painter"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Maler.",
        "accusative": "Ich sehe ___ Maler.",
        "dative": "Ich gehe mit ___ Maler."
      }
    },
    {
      "article": "der",
      "word": "Mantel",
      "translation": {
        "tr": "ceket",
        "en": "coat"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Mantel.",
        "accusative": "Ich kenne ___ Mantel.",
        "dative": "Ich spreche mit ___ Mantel."
      }
    },
    {
      "article": "die",
      "word": "Marke",
      "translation": {
        "tr": "Marka",
        "en": "Brand"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Marke.",
        "accusative": "Ich kaufe ___ Marke.",
        "dative": "Mit ___ Marke arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Marmelade",
      "translation": {
        "tr": "reçel",
        "en": "jam"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Marmelade.",
        "accusative": "Ich suche ___ Marmelade.",
        "dative": "Neben ___ Marmelade liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Maschine",
      "translation": {
        "tr": "makine",
        "en": "machine"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Maschine.",
        "accusative": "Ich kaufe ___ Maschine.",
        "dative": "Ich arbeite mit ___ Maschine."
      }
    },
    {
      "article": "die",
      "word": "Maske",
      "translation": {
        "tr": "Maske",
        "en": "Mask"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Maske.",
        "accusative": "Ich nehme ___ Maske.",
        "dative": "Vor ___ Maske steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Material",
      "translation": {
        "tr": "malzeme",
        "en": "material"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Material.",
        "accusative": "Ich suche ___ Material.",
        "dative": "Neben ___ Material liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Matte",
      "translation": {
        "tr": "mat",
        "en": "mat"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Matte.",
        "accusative": "Ich nehme ___ Matte.",
        "dative": "Vor ___ Matte steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Mauer",
      "translation": {
        "tr": "duvar",
        "en": "wall"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mauer.",
        "accusative": "Ich suche ___ Mauer.",
        "dative": "Neben ___ Mauer liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Maul",
      "translation": {
        "tr": "Ağız",
        "en": "Mouth"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Maul.",
        "accusative": "Ich suche ___ Maul.",
        "dative": "Neben ___ Maul liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Medizin",
      "translation": {
        "tr": "Tıp",
        "en": "Medicine"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Medizin.",
        "accusative": "Ich suche ___ Medizin.",
        "dative": "Neben ___ Medizin liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Meinung",
      "translation": {
        "tr": "görüş",
        "en": "opinion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Meinung.",
        "accusative": "Ich kaufe ___ Meinung.",
        "dative": "Mit ___ Meinung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Meister",
      "translation": {
        "tr": "usta",
        "en": "Master"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Meister.",
        "accusative": "Ich nehme ___ Meister.",
        "dative": "Vor ___ Meister steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Meldung",
      "translation": {
        "tr": "Mesaj",
        "en": "Message"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Meldung.",
        "accusative": "Ich drucke ___ Meldung.",
        "dative": "Aus ___ Meldung lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Melodie",
      "translation": {
        "tr": "Melodi",
        "en": "Melody"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Melodie.",
        "accusative": "Ich nehme ___ Melodie.",
        "dative": "Vor ___ Melodie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Menge",
      "translation": {
        "tr": "miktar",
        "en": "quantity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Menge.",
        "accusative": "Ich nehme ___ Menge.",
        "dative": "Vor ___ Menge steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Menü",
      "translation": {
        "tr": "Menü",
        "en": "Menu"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Menü.",
        "accusative": "Ich kaufe ___ Menü.",
        "dative": "Mit ___ Menü arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Metall",
      "translation": {
        "tr": "maden",
        "en": "metal"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Metall.",
        "accusative": "Ich sehe ___ Metall.",
        "dative": "Ich gehe mit ___ Metall."
      }
    },
    {
      "article": "die",
      "word": "Miete",
      "translation": {
        "tr": "Kiralık",
        "en": "Rent"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Miete.",
        "accusative": "Ich nehme ___ Miete.",
        "dative": "Vor ___ Miete steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Mieter",
      "translation": {
        "tr": "kiracı",
        "en": "tenant"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mieter.",
        "accusative": "Ich sehe ___ Mieter.",
        "dative": "Ich gehe mit ___ Mieter."
      }
    },
    {
      "article": "das",
      "word": "Mikrofon",
      "translation": {
        "tr": "Mikrofon",
        "en": "Microphone"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Mikrofon.",
        "accusative": "Ich kaufe ___ Mikrofon.",
        "dative": "Ich arbeite mit ___ Mikrofon."
      }
    },
    {
      "article": "die",
      "word": "Mine",
      "translation": {
        "tr": "benim",
        "en": "mine"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mine.",
        "accusative": "Ich suche ___ Mine.",
        "dative": "Neben ___ Mine liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Minus",
      "translation": {
        "tr": "Eksi",
        "en": "Minus"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Minus.",
        "accusative": "Ich sehe ___ Minus.",
        "dative": "Ich gehe mit ___ Minus."
      }
    },
    {
      "article": "der",
      "word": "Mist",
      "translation": {
        "tr": "saçmalık",
        "en": "Crap"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mist.",
        "accusative": "Ich kaufe ___ Mist.",
        "dative": "Mit ___ Mist arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mitarbeiter",
      "translation": {
        "tr": "Çalışanlar",
        "en": "Employees"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Mitarbeiter.",
        "accusative": "Ich sehe ___ Mitarbeiter.",
        "dative": "Ich antworte ___ Mitarbeiter."
      }
    },
    {
      "article": "der",
      "word": "Mittag",
      "translation": {
        "tr": "Öğlen",
        "en": "Noon"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mittag.",
        "accusative": "Ich sehe ___ Mittag.",
        "dative": "Ich gehe mit ___ Mittag."
      }
    },
    {
      "article": "das",
      "word": "Mittagessen",
      "translation": {
        "tr": "Öğle yemeği",
        "en": "Lunch"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Mittagessen.",
        "accusative": "Ich bestelle ___ Mittagessen.",
        "dative": "Mit ___ Mittagessen koche ich heute."
      }
    },
    {
      "article": "die",
      "word": "Mitte",
      "translation": {
        "tr": "orta",
        "en": "middle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mitte.",
        "accusative": "Ich suche ___ Mitte.",
        "dative": "Neben ___ Mitte liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Möbel",
      "translation": {
        "tr": "Mobilya",
        "en": "Furniture"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Möbel.",
        "accusative": "Ich suche ___ Möbel.",
        "dative": "Neben ___ Möbel liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mode",
      "translation": {
        "tr": "Moda",
        "en": "Fashion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mode.",
        "accusative": "Ich kaufe ___ Mode.",
        "dative": "Mit ___ Mode arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Moment",
      "translation": {
        "tr": "Bekle",
        "en": "Wait"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Moment.",
        "accusative": "Ich kaufe ___ Moment.",
        "dative": "Mit ___ Moment arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Monster",
      "translation": {
        "tr": "Canavarlar",
        "en": "Monsters"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Monster.",
        "accusative": "Ich nehme ___ Monster.",
        "dative": "Vor ___ Monster steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Motor",
      "translation": {
        "tr": "motor",
        "en": "engine"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Motor.",
        "accusative": "Ich kaufe ___ Motor.",
        "dative": "Mit ___ Motor arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Motorrad",
      "translation": {
        "tr": "Motosiklet",
        "en": "Motorcycle"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Motorrad.",
        "accusative": "Ich miete ___ Motorrad.",
        "dative": "Ich fahre mit ___ Motorrad."
      }
    },
    {
      "article": "der",
      "word": "Mülleimer",
      "translation": {
        "tr": "Çöp kutusu",
        "en": "Trash can"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mülleimer.",
        "accusative": "Ich kaufe ___ Mülleimer.",
        "dative": "Mit ___ Mülleimer arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Museum",
      "translation": {
        "tr": "Müze",
        "en": "Museum"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Museum.",
        "accusative": "Ich fotografiere ___ Museum.",
        "dative": "Wir treffen uns bei ___ Museum."
      }
    },
    {
      "article": "der",
      "word": "Musiker",
      "translation": {
        "tr": "Müzisyen",
        "en": "Musician"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Musiker.",
        "accusative": "Ich sehe ___ Musiker.",
        "dative": "Ich antworte ___ Musiker."
      }
    },
    {
      "article": "das",
      "word": "Muster",
      "translation": {
        "tr": "Desen",
        "en": "Pattern"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Muster.",
        "accusative": "Ich suche ___ Muster.",
        "dative": "Neben ___ Muster liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Mut",
      "translation": {
        "tr": "Cesaret",
        "en": "Courage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mut.",
        "accusative": "Ich suche ___ Mut.",
        "dative": "Neben ___ Mut liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Nachteil",
      "translation": {
        "tr": "Dezavantaj",
        "en": "Disadvantage"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Nachteil.",
        "accusative": "Ich kaufe ___ Nachteil.",
        "dative": "Mit ___ Nachteil arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Nacken",
      "translation": {
        "tr": "Boyun",
        "en": "Neck"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Nacken.",
        "accusative": "Ich sehe ___ Nacken.",
        "dative": "Ich antworte ___ Nacken."
      }
    },
    {
      "article": "die",
      "word": "Nadel",
      "translation": {
        "tr": "iğne",
        "en": "needle"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nadel.",
        "accusative": "Ich nehme ___ Nadel.",
        "dative": "Vor ___ Nadel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Nahrung",
      "translation": {
        "tr": "yiyecek",
        "en": "food"
      },
      "casePrompts": {
        "nominative": "Auf dem Teller liegt ___ Nahrung.",
        "accusative": "Ich kaufe ___ Nahrung.",
        "dative": "Zu ___ Nahrung passt Brot."
      }
    },
    {
      "article": "das",
      "word": "Nahrungsmittel",
      "translation": {
        "tr": "Gıda",
        "en": "Food"
      },
      "casePrompts": {
        "nominative": "Auf dem Teller liegt ___ Nahrungsmittel.",
        "accusative": "Ich kaufe ___ Nahrungsmittel.",
        "dative": "Zu ___ Nahrungsmittel passt Brot."
      }
    },
    {
      "article": "die",
      "word": "Natur",
      "translation": {
        "tr": "Doğa",
        "en": "Nature"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Natur.",
        "accusative": "Ich kaufe ___ Natur.",
        "dative": "Mit ___ Natur arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Nebel",
      "translation": {
        "tr": "Sis",
        "en": "Fog"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nebel.",
        "accusative": "Ich sehe ___ Nebel.",
        "dative": "Ich gehe mit ___ Nebel."
      }
    },
    {
      "article": "der",
      "word": "Neffe",
      "translation": {
        "tr": "Yeğen",
        "en": "Nephew"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Neffe.",
        "accusative": "Ich nehme ___ Neffe.",
        "dative": "Vor ___ Neffe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Nerv",
      "translation": {
        "tr": "sinir",
        "en": "nerve"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nerv.",
        "accusative": "Ich nehme ___ Nerv.",
        "dative": "Vor ___ Nerv steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Nichte",
      "translation": {
        "tr": "yeğen",
        "en": "niece"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nichte.",
        "accusative": "Ich nehme ___ Nichte.",
        "dative": "Vor ___ Nichte steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Niere",
      "translation": {
        "tr": "böbrek",
        "en": "kidney"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Niere.",
        "accusative": "Ich nehme ___ Niere.",
        "dative": "Vor ___ Niere steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Note",
      "translation": {
        "tr": "not",
        "en": "grade"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Note.",
        "accusative": "Ich drucke ___ Note.",
        "dative": "Aus ___ Note lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Notebook",
      "translation": {
        "tr": "Defter",
        "en": "Notebook"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Notebook.",
        "accusative": "Ich öffne ___ Notebook.",
        "dative": "Ich arbeite mit ___ Notebook."
      }
    },
    {
      "article": "die",
      "word": "Notiz",
      "translation": {
        "tr": "Not",
        "en": "Note"
      },
      "casePrompts": {
        "nominative": "Im Regal steht ___ Notiz.",
        "accusative": "Ich lese ___ Notiz.",
        "dative": "Ich suche in ___ Notiz nach Infos."
      }
    },
    {
      "article": "der",
      "word": "Notruf",
      "translation": {
        "tr": "Acil arama",
        "en": "Emergency call"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Notruf.",
        "accusative": "Ich kaufe ___ Notruf.",
        "dative": "Mit ___ Notruf arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Nummer",
      "translation": {
        "tr": "sayı",
        "en": "number"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Nummer.",
        "accusative": "Ich kaufe ___ Nummer.",
        "dative": "Mit ___ Nummer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Nuss",
      "translation": {
        "tr": "Somun",
        "en": "Nut"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nuss.",
        "accusative": "Ich sehe ___ Nuss.",
        "dative": "Ich gehe mit ___ Nuss."
      }
    },
    {
      "article": "das",
      "word": "Objekt",
      "translation": {
        "tr": "Nesne",
        "en": "Object"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Objekt.",
        "accusative": "Ich suche ___ Objekt.",
        "dative": "Neben ___ Objekt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Option",
      "translation": {
        "tr": "seçenek",
        "en": "option"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Option.",
        "accusative": "Ich suche ___ Option.",
        "dative": "Neben ___ Option liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ordner",
      "translation": {
        "tr": "klasör",
        "en": "folder"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ordner.",
        "accusative": "Ich suche ___ Ordner.",
        "dative": "Neben ___ Ordner liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ordnung",
      "translation": {
        "tr": "tamam",
        "en": "Okay"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ordnung.",
        "accusative": "Ich nehme ___ Ordnung.",
        "dative": "Vor ___ Ordnung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Österreicher",
      "translation": {
        "tr": "Avusturyalılar",
        "en": "Austrians"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Österreicher.",
        "accusative": "Ich suche ___ Österreicher.",
        "dative": "Neben ___ Österreicher liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ozean",
      "translation": {
        "tr": "Okyanus",
        "en": "Ocean"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ozean.",
        "accusative": "Ich nehme ___ Ozean.",
        "dative": "Vor ___ Ozean steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Paar",
      "translation": {
        "tr": "Çift",
        "en": "Couple"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Paar.",
        "accusative": "Ich sehe ___ Paar.",
        "dative": "Ich gehe mit ___ Paar."
      }
    },
    {
      "article": "die",
      "word": "Packung",
      "translation": {
        "tr": "paket",
        "en": "pack"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Packung.",
        "accusative": "Ich suche ___ Packung.",
        "dative": "Neben ___ Packung liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Paket",
      "translation": {
        "tr": "paket",
        "en": "package"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Paket.",
        "accusative": "Ich kaufe ___ Paket.",
        "dative": "Mit ___ Paket arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Palme",
      "translation": {
        "tr": "palmiye ağacı",
        "en": "palm tree"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Palme.",
        "accusative": "Ich fotografiere ___ Palme.",
        "dative": "Ich bin bei ___ Palme."
      }
    },
    {
      "article": "der",
      "word": "Park",
      "translation": {
        "tr": "Parkı",
        "en": "Park"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Park.",
        "accusative": "Ich fotografiere ___ Park.",
        "dative": "Wir treffen uns bei ___ Park."
      }
    },
    {
      "article": "der",
      "word": "Parkplatz",
      "translation": {
        "tr": "Otopark",
        "en": "Parking lot"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Parkplatz.",
        "accusative": "Ich fotografiere ___ Parkplatz.",
        "dative": "Wir treffen uns bei ___ Parkplatz."
      }
    },
    {
      "article": "der",
      "word": "Partner",
      "translation": {
        "tr": "Ortak",
        "en": "Partner"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Partner.",
        "accusative": "Ich sehe ___ Partner.",
        "dative": "Ich gehe mit ___ Partner."
      }
    },
    {
      "article": "die",
      "word": "Party",
      "translation": {
        "tr": "Parti",
        "en": "Party"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Party.",
        "accusative": "Ich sehe ___ Party.",
        "dative": "Ich gehe mit ___ Party."
      }
    },
    {
      "article": "der",
      "word": "Pass",
      "translation": {
        "tr": "Geçmek",
        "en": "Pass"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pass.",
        "accusative": "Ich suche ___ Pass.",
        "dative": "Neben ___ Pass liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Passagier",
      "translation": {
        "tr": "yolcu",
        "en": "passenger"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Passagier.",
        "accusative": "Ich nehme ___ Passagier.",
        "dative": "Vor ___ Passagier steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Passwort",
      "translation": {
        "tr": "Şifre",
        "en": "Password"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Passwort.",
        "accusative": "Ich suche ___ Passwort.",
        "dative": "Neben ___ Passwort liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Patient",
      "translation": {
        "tr": "hasta",
        "en": "patient"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Patient.",
        "accusative": "Ich besuche ___ Patient.",
        "dative": "Ich danke ___ Patient."
      }
    },
    {
      "article": "das",
      "word": "Pech",
      "translation": {
        "tr": "Kötü şans",
        "en": "Bad luck"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pech.",
        "accusative": "Ich sehe ___ Pech.",
        "dative": "Ich gehe mit ___ Pech."
      }
    },
    {
      "article": "die",
      "word": "Person",
      "translation": {
        "tr": "kişi",
        "en": "person"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Person.",
        "accusative": "Ich besuche ___ Person.",
        "dative": "Ich danke ___ Person."
      }
    },
    {
      "article": "die",
      "word": "Pfanne",
      "translation": {
        "tr": "tava",
        "en": "pan"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pfanne.",
        "accusative": "Ich kaufe ___ Pfanne.",
        "dative": "Mit ___ Pfanne arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Pfeffer",
      "translation": {
        "tr": "biber",
        "en": "pepper"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pfeffer.",
        "accusative": "Ich sehe ___ Pfeffer.",
        "dative": "Ich gehe mit ___ Pfeffer."
      }
    },
    {
      "article": "der",
      "word": "Pfeil",
      "translation": {
        "tr": "Ok",
        "en": "Arrow"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pfeil.",
        "accusative": "Ich kaufe ___ Pfeil.",
        "dative": "Mit ___ Pfeil arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Pflaster",
      "translation": {
        "tr": "Alçı",
        "en": "Plaster"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pflaster.",
        "accusative": "Ich sehe ___ Pflaster.",
        "dative": "Ich gehe mit ___ Pflaster."
      }
    },
    {
      "article": "die",
      "word": "Pille",
      "translation": {
        "tr": "hap",
        "en": "pill"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pille.",
        "accusative": "Ich kaufe ___ Pille.",
        "dative": "Mit ___ Pille arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Pilz",
      "translation": {
        "tr": "Mantar",
        "en": "Mushroom"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Pilz.",
        "accusative": "Ich treffe ___ Pilz.",
        "dative": "Ich helfe ___ Pilz."
      }
    },
    {
      "article": "die",
      "word": "Pistole",
      "translation": {
        "tr": "Tabanca",
        "en": "Pistol"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pistole.",
        "accusative": "Ich kaufe ___ Pistole.",
        "dative": "Mit ___ Pistole arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Plakat",
      "translation": {
        "tr": "Poster",
        "en": "Poster"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Plakat.",
        "accusative": "Ich suche ___ Plakat.",
        "dative": "Neben ___ Plakat liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Plan",
      "translation": {
        "tr": "Planı",
        "en": "Plan"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Plan.",
        "accusative": "Ich erwarte ___ Plan.",
        "dative": "Vor ___ Plan bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Planet",
      "translation": {
        "tr": "Gezegen",
        "en": "Planet"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Planet.",
        "accusative": "Ich parke ___ Planet.",
        "dative": "Ich komme mit ___ Planet."
      }
    },
    {
      "article": "die",
      "word": "Platte",
      "translation": {
        "tr": "plaka",
        "en": "plate"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Platte.",
        "accusative": "Ich suche ___ Platte.",
        "dative": "Vor ___ Platte liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Pokal",
      "translation": {
        "tr": "Fincan",
        "en": "Cup"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Pokal.",
        "accusative": "Ich sehe ___ Pokal.",
        "dative": "Ich stehe bei ___ Pokal."
      }
    },
    {
      "article": "das",
      "word": "Pony",
      "translation": {
        "tr": "Patlama",
        "en": "Bangs"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Pony.",
        "accusative": "Ich nehme ___ Pony.",
        "dative": "Vor ___ Pony steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Pool",
      "translation": {
        "tr": "Havuz",
        "en": "Pool"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pool.",
        "accusative": "Ich suche ___ Pool.",
        "dative": "Neben ___ Pool liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Portion",
      "translation": {
        "tr": "porsiyon",
        "en": "portion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Portion.",
        "accusative": "Ich suche ___ Portion.",
        "dative": "Neben ___ Portion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Position",
      "translation": {
        "tr": "konum",
        "en": "position"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Position.",
        "accusative": "Ich suche ___ Position.",
        "dative": "Neben ___ Position liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Poster",
      "translation": {
        "tr": "Posterler",
        "en": "Posters"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Poster.",
        "accusative": "Ich kaufe ___ Poster.",
        "dative": "Mit ___ Poster arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Praktikum",
      "translation": {
        "tr": "Staj",
        "en": "Internship"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Praktikum.",
        "accusative": "Ich parke ___ Praktikum.",
        "dative": "Ich komme mit ___ Praktikum."
      }
    },
    {
      "article": "der",
      "word": "Präsident",
      "translation": {
        "tr": "Başkan",
        "en": "President"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Präsident.",
        "accusative": "Ich kaufe ___ Präsident.",
        "dative": "Mit ___ Präsident arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Preis",
      "translation": {
        "tr": "Fiyat",
        "en": "Price"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Preis.",
        "accusative": "Ich bestelle ___ Preis.",
        "dative": "Mit ___ Preis koche ich heute."
      }
    },
    {
      "article": "der",
      "word": "Prinz",
      "translation": {
        "tr": "Prens",
        "en": "Prince"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Prinz.",
        "accusative": "Ich sehe ___ Prinz.",
        "dative": "Ich gehe mit ___ Prinz."
      }
    },
    {
      "article": "die",
      "word": "Prinzessin",
      "translation": {
        "tr": "Prenses",
        "en": "Princess"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Prinzessin.",
        "accusative": "Ich sehe ___ Prinzessin.",
        "dative": "Ich gehe mit ___ Prinzessin."
      }
    },
    {
      "article": "das",
      "word": "Problem",
      "translation": {
        "tr": "sorun",
        "en": "problem"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Problem.",
        "accusative": "Ich erkläre ___ Problem.",
        "dative": "An ___ Problem arbeiten wir."
      }
    },
    {
      "article": "das",
      "word": "Produkt",
      "translation": {
        "tr": "ürün",
        "en": "product"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Produkt.",
        "accusative": "Ich suche ___ Produkt.",
        "dative": "Neben ___ Produkt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Professor",
      "translation": {
        "tr": "Profesör",
        "en": "Professor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Professor.",
        "accusative": "Ich besuche ___ Professor.",
        "dative": "Ich danke ___ Professor."
      }
    },
    {
      "article": "das",
      "word": "Programm",
      "translation": {
        "tr": "programı",
        "en": "program"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Programm.",
        "accusative": "Ich starte ___ Programm.",
        "dative": "Bei ___ Programm lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Projekt",
      "translation": {
        "tr": "Proje",
        "en": "Project"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Projekt.",
        "accusative": "Ich erwarte ___ Projekt.",
        "dative": "Vor ___ Projekt bin ich nervös."
      }
    },
    {
      "article": "das",
      "word": "Prozent",
      "translation": {
        "tr": "yüzde",
        "en": "percent"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Prozent.",
        "accusative": "Ich kaufe ___ Prozent.",
        "dative": "Mit ___ Prozent arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Pullover",
      "translation": {
        "tr": "Kazak",
        "en": "Sweater"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Pullover.",
        "accusative": "Ich erkläre ___ Pullover.",
        "dative": "An ___ Pullover arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Pumpe",
      "translation": {
        "tr": "pompa",
        "en": "pump"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Pumpe.",
        "accusative": "Ich nehme ___ Pumpe.",
        "dative": "Vor ___ Pumpe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Puzzle",
      "translation": {
        "tr": "Bulmaca",
        "en": "Puzzle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Puzzle.",
        "accusative": "Ich suche ___ Puzzle.",
        "dative": "Neben ___ Puzzle liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Quadrat",
      "translation": {
        "tr": "kare",
        "en": "square"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Quadrat.",
        "accusative": "Ich sehe ___ Quadrat.",
        "dative": "Ich bleibe in ___ Quadrat."
      }
    },
    {
      "article": "der",
      "word": "Quark",
      "translation": {
        "tr": "Kuark",
        "en": "Quark"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Quark.",
        "accusative": "Ich sehe ___ Quark.",
        "dative": "Ich gehe mit ___ Quark."
      }
    },
    {
      "article": "die",
      "word": "Quelle",
      "translation": {
        "tr": "Kaynak",
        "en": "Source"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Quelle.",
        "accusative": "Ich nehme ___ Quelle.",
        "dative": "Vor ___ Quelle steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rabatt",
      "translation": {
        "tr": "İndirim",
        "en": "Discount"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rabatt.",
        "accusative": "Ich nehme ___ Rabatt.",
        "dative": "Vor ___ Rabatt steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rabe",
      "translation": {
        "tr": "Kuzgun",
        "en": "Raven"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rabe.",
        "accusative": "Ich suche ___ Rabe.",
        "dative": "Neben ___ Rabe liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Radfahrer",
      "translation": {
        "tr": "Bisikletçi",
        "en": "Cyclist"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Radfahrer.",
        "accusative": "Ich suche ___ Radfahrer.",
        "dative": "Neben ___ Radfahrer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rakete",
      "translation": {
        "tr": "roket",
        "en": "rocket"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rakete.",
        "accusative": "Ich sehe ___ Rakete.",
        "dative": "Ich gehe mit ___ Rakete."
      }
    },
    {
      "article": "der",
      "word": "Rap",
      "translation": {
        "tr": "rap",
        "en": "Rap"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rap.",
        "accusative": "Ich suche ___ Rap.",
        "dative": "Neben ___ Rap liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rasen",
      "translation": {
        "tr": "çim",
        "en": "lawn"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rasen.",
        "accusative": "Ich nehme ___ Rasen.",
        "dative": "Vor ___ Rasen steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Rathaus",
      "translation": {
        "tr": "Belediye Binası",
        "en": "City Hall"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Rathaus.",
        "accusative": "Ich fotografiere ___ Rathaus.",
        "dative": "Wir treffen uns bei ___ Rathaus."
      }
    },
    {
      "article": "das",
      "word": "Rätsel",
      "translation": {
        "tr": "Bulmacalar",
        "en": "Puzzles"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rätsel.",
        "accusative": "Ich nehme ___ Rätsel.",
        "dative": "Vor ___ Rätsel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ratte",
      "translation": {
        "tr": "Sıçan",
        "en": "Rat"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ratte.",
        "accusative": "Ich kaufe ___ Ratte.",
        "dative": "Mit ___ Ratte arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Rauch",
      "translation": {
        "tr": "duman",
        "en": "smoke"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rauch.",
        "accusative": "Ich besuche ___ Rauch.",
        "dative": "Ich danke ___ Rauch."
      }
    },
    {
      "article": "die",
      "word": "Reaktion",
      "translation": {
        "tr": "tepki",
        "en": "reaction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reaktion.",
        "accusative": "Ich suche ___ Reaktion.",
        "dative": "Neben ___ Reaktion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rechner",
      "translation": {
        "tr": "Hesap Makinesi",
        "en": "Calculator"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rechner.",
        "accusative": "Ich nehme ___ Rechner.",
        "dative": "Vor ___ Rechner steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Rechnung",
      "translation": {
        "tr": "Fatura",
        "en": "Invoice"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rechnung.",
        "accusative": "Ich nehme ___ Rechnung.",
        "dative": "Vor ___ Rechnung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Recht",
      "translation": {
        "tr": "Sağ",
        "en": "Right"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Recht.",
        "accusative": "Ich sehe ___ Recht.",
        "dative": "Ich gehe mit ___ Recht."
      }
    },
    {
      "article": "die",
      "word": "Rede",
      "translation": {
        "tr": "Konuşma",
        "en": "Speech"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rede.",
        "accusative": "Ich sehe ___ Rede.",
        "dative": "Ich gehe mit ___ Rede."
      }
    },
    {
      "article": "die",
      "word": "Regel",
      "translation": {
        "tr": "Kural",
        "en": "Rule"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Regel.",
        "accusative": "Ich kaufe ___ Regel.",
        "dative": "Mit ___ Regel arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Reifen",
      "translation": {
        "tr": "lastikler",
        "en": "tires"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Reifen.",
        "accusative": "Ich sehe ___ Reifen.",
        "dative": "Ich gehe mit ___ Reifen."
      }
    },
    {
      "article": "die",
      "word": "Reihe",
      "translation": {
        "tr": "sıra",
        "en": "row"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Reihe.",
        "accusative": "Ich nehme ___ Reihe.",
        "dative": "Vor ___ Reihe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Reiter",
      "translation": {
        "tr": "binici",
        "en": "Rider"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Reiter.",
        "accusative": "Ich nehme ___ Reiter.",
        "dative": "Vor ___ Reiter steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rekord",
      "translation": {
        "tr": "Kayıt",
        "en": "Record"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rekord.",
        "accusative": "Ich suche ___ Rekord.",
        "dative": "Neben ___ Rekord liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Religion",
      "translation": {
        "tr": "din",
        "en": "religion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Religion.",
        "accusative": "Ich suche ___ Religion.",
        "dative": "Neben ___ Religion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Respekt",
      "translation": {
        "tr": "saygı",
        "en": "Respect"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Respekt.",
        "accusative": "Ich sehe ___ Respekt.",
        "dative": "Ich gehe mit ___ Respekt."
      }
    },
    {
      "article": "der",
      "word": "Rest",
      "translation": {
        "tr": "Dinlenme",
        "en": "Rest"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rest.",
        "accusative": "Ich suche ___ Rest.",
        "dative": "Neben ___ Rest liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Restaurant",
      "translation": {
        "tr": "Restoran",
        "en": "Restaurant"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Restaurant.",
        "accusative": "Ich fotografiere ___ Restaurant.",
        "dative": "Wir treffen uns bei ___ Restaurant."
      }
    },
    {
      "article": "das",
      "word": "Rezept",
      "translation": {
        "tr": "Tarif",
        "en": "Recipe"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rezept.",
        "accusative": "Ich suche ___ Rezept.",
        "dative": "Neben ___ Rezept liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Richter",
      "translation": {
        "tr": "Yargıç",
        "en": "Judge"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Richter.",
        "accusative": "Ich sehe ___ Richter.",
        "dative": "Ich gehe mit ___ Richter."
      }
    },
    {
      "article": "die",
      "word": "Richtung",
      "translation": {
        "tr": "yön",
        "en": "direction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Richtung.",
        "accusative": "Ich nehme ___ Richtung.",
        "dative": "Vor ___ Richtung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ring",
      "translation": {
        "tr": "halka",
        "en": "ring"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Ring.",
        "accusative": "Ich suche ___ Ring.",
        "dative": "Ich gehe mit ___ Ring raus."
      }
    },
    {
      "article": "der",
      "word": "Roboter",
      "translation": {
        "tr": "robot",
        "en": "Robot"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Roboter.",
        "accusative": "Ich nehme ___ Roboter.",
        "dative": "Vor ___ Roboter steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rock",
      "translation": {
        "tr": "Kaya",
        "en": "Rock"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rock.",
        "accusative": "Ich suche ___ Rock.",
        "dative": "Neben ___ Rock liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Rohr",
      "translation": {
        "tr": "boru",
        "en": "pipe"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rohr.",
        "accusative": "Ich nehme ___ Rohr.",
        "dative": "Vor ___ Rohr steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Röhre",
      "translation": {
        "tr": "tüp",
        "en": "tube"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Röhre.",
        "accusative": "Ich kaufe ___ Röhre.",
        "dative": "Mit ___ Röhre arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Rolle",
      "translation": {
        "tr": "rol",
        "en": "role"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rolle.",
        "accusative": "Ich sehe ___ Rolle.",
        "dative": "Ich gehe mit ___ Rolle."
      }
    },
    {
      "article": "der",
      "word": "Roman",
      "translation": {
        "tr": "roman",
        "en": "novel"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Roman.",
        "accusative": "Ich sehe ___ Roman.",
        "dative": "Ich antworte ___ Roman."
      }
    },
    {
      "article": "die",
      "word": "Rose",
      "translation": {
        "tr": "Gül",
        "en": "Rose"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rose.",
        "accusative": "Ich suche ___ Rose.",
        "dative": "Neben ___ Rose liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rücken",
      "translation": {
        "tr": "geri",
        "en": "back"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rücken.",
        "accusative": "Ich suche ___ Rücken.",
        "dative": "Neben ___ Rücken liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rucksack",
      "translation": {
        "tr": "Sırt çantası",
        "en": "Backpack"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rucksack.",
        "accusative": "Ich wasche ___ Rucksack.",
        "dative": "In ___ Rucksack fühle ich mich wohl."
      }
    },
    {
      "article": "das",
      "word": "Ruder",
      "translation": {
        "tr": "Dümen",
        "en": "Rudder"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ruder.",
        "accusative": "Ich sehe ___ Ruder.",
        "dative": "Ich gehe mit ___ Ruder."
      }
    },
    {
      "article": "der",
      "word": "Ruf",
      "translation": {
        "tr": "İtibar",
        "en": "Reputation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ruf.",
        "accusative": "Ich sehe ___ Ruf.",
        "dative": "Ich gehe mit ___ Ruf."
      }
    },
    {
      "article": "die",
      "word": "Sache",
      "translation": {
        "tr": "şey",
        "en": "thing"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sache.",
        "accusative": "Ich sehe ___ Sache.",
        "dative": "Ich gehe mit ___ Sache."
      }
    },
    {
      "article": "der",
      "word": "Sack",
      "translation": {
        "tr": "çuval",
        "en": "sack"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sack.",
        "accusative": "Ich suche ___ Sack.",
        "dative": "Neben ___ Sack liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sahne",
      "translation": {
        "tr": "krem",
        "en": "cream"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Sahne.",
        "accusative": "Ich kaufe ___ Sahne.",
        "dative": "Mit ___ Sahne arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Sand",
      "translation": {
        "tr": "Kum",
        "en": "Sand"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sand.",
        "accusative": "Ich suche ___ Sand.",
        "dative": "Neben ___ Sand liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Satz",
      "translation": {
        "tr": "Cümle",
        "en": "Sentence"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Satz.",
        "accusative": "Ich nehme ___ Satz.",
        "dative": "Vor ___ Satz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schachtel",
      "translation": {
        "tr": "Kutu",
        "en": "Box"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schachtel.",
        "accusative": "Ich kaufe ___ Schachtel.",
        "dative": "Hinter ___ Schachtel ist ein Fenster."
      }
    },
    {
      "article": "der",
      "word": "Schaden",
      "translation": {
        "tr": "Hasar",
        "en": "Damage"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schaden.",
        "accusative": "Ich nehme ___ Schaden.",
        "dative": "Vor ___ Schaden steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schal",
      "translation": {
        "tr": "Eşarp",
        "en": "Scarf"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Schal.",
        "accusative": "Ich trage ___ Schal.",
        "dative": "Neben ___ Schal liegt ein Schal."
      }
    },
    {
      "article": "der",
      "word": "Schalter",
      "translation": {
        "tr": "Anahtar",
        "en": "Switch"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schalter.",
        "accusative": "Ich sehe ___ Schalter.",
        "dative": "Ich gehe mit ___ Schalter."
      }
    },
    {
      "article": "der",
      "word": "Schatten",
      "translation": {
        "tr": "Gölge",
        "en": "Shadow"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Schatten.",
        "accusative": "Ich trage ___ Schatten.",
        "dative": "Neben ___ Schatten liegt ein Schal."
      }
    },
    {
      "article": "der",
      "word": "Schatz",
      "translation": {
        "tr": "tatlım",
        "en": "Sweetheart"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schatz.",
        "accusative": "Ich wasche ___ Schatz.",
        "dative": "In ___ Schatz fühle ich mich wohl."
      }
    },
    {
      "article": "das",
      "word": "Schaufenster",
      "translation": {
        "tr": "Vitrin",
        "en": "Shop window"
      },
      "casePrompts": {
        "nominative": "Neben der Tür steht ___ Schaufenster.",
        "accusative": "Ich putze ___ Schaufenster.",
        "dative": "Neben ___ Schaufenster steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schaukel",
      "translation": {
        "tr": "salıncak",
        "en": "swing"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schaukel.",
        "accusative": "Ich sehe ___ Schaukel.",
        "dative": "Ich gehe mit ___ Schaukel."
      }
    },
    {
      "article": "der",
      "word": "Schauspieler",
      "translation": {
        "tr": "aktör",
        "en": "actor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schauspieler.",
        "accusative": "Ich nehme ___ Schauspieler.",
        "dative": "Vor ___ Schauspieler steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schauspielerin",
      "translation": {
        "tr": "aktris",
        "en": "actress"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schauspielerin.",
        "accusative": "Ich suche ___ Schauspielerin.",
        "dative": "Neben ___ Schauspielerin liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Scheibe",
      "translation": {
        "tr": "disk",
        "en": "disc"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Scheibe.",
        "accusative": "Ich sehe ___ Scheibe.",
        "dative": "Ich gehe mit ___ Scheibe."
      }
    },
    {
      "article": "die",
      "word": "Schere",
      "translation": {
        "tr": "Makas",
        "en": "Scissors"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schere.",
        "accusative": "Ich suche ___ Schere.",
        "dative": "Ich telefoniere mit ___ Schere."
      }
    },
    {
      "article": "die",
      "word": "Schiene",
      "translation": {
        "tr": "demiryolu",
        "en": "rail"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schiene.",
        "accusative": "Ich nehme ___ Schiene.",
        "dative": "Vor ___ Schiene steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Schild",
      "translation": {
        "tr": "Kalkan",
        "en": "Shield"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schild.",
        "accusative": "Ich besuche ___ Schild.",
        "dative": "Ich danke ___ Schild."
      }
    },
    {
      "article": "die",
      "word": "Schildkröte",
      "translation": {
        "tr": "Kaplumbağa",
        "en": "Turtle"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Schildkröte.",
        "accusative": "Ich treffe ___ Schildkröte.",
        "dative": "Ich helfe ___ Schildkröte."
      }
    },
    {
      "article": "der",
      "word": "Schmerz",
      "translation": {
        "tr": "ağrı",
        "en": "pain"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schmerz.",
        "accusative": "Ich sehe ___ Schmerz.",
        "dative": "Ich gehe mit ___ Schmerz."
      }
    },
    {
      "article": "der",
      "word": "Schmutz",
      "translation": {
        "tr": "Kir",
        "en": "Dirt"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schmutz.",
        "accusative": "Ich kaufe ___ Schmutz.",
        "dative": "Mit ___ Schmutz arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Schnaps",
      "translation": {
        "tr": "Likör",
        "en": "Liquor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schnaps.",
        "accusative": "Ich sehe ___ Schnaps.",
        "dative": "Ich gehe mit ___ Schnaps."
      }
    },
    {
      "article": "die",
      "word": "Schnecke",
      "translation": {
        "tr": "salyangoz",
        "en": "snail"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schnecke.",
        "accusative": "Ich kaufe ___ Schnecke.",
        "dative": "Mit ___ Schnecke arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Schrank",
      "translation": {
        "tr": "dolap",
        "en": "closet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schrank.",
        "accusative": "Ich suche ___ Schrank.",
        "dative": "Neben ___ Schrank liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schraube",
      "translation": {
        "tr": "vida",
        "en": "screw"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schraube.",
        "accusative": "Ich nehme ___ Schraube.",
        "dative": "Vor ___ Schraube steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schrei",
      "translation": {
        "tr": "Çığlık",
        "en": "Scream"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schrei.",
        "accusative": "Ich kaufe ___ Schrei.",
        "dative": "Mit ___ Schrei arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Schreibtisch",
      "translation": {
        "tr": "Çalışma masası",
        "en": "Desk"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schreibtisch.",
        "accusative": "Ich sehe ___ Schreibtisch.",
        "dative": "Ich gehe mit ___ Schreibtisch."
      }
    },
    {
      "article": "der",
      "word": "Schritt",
      "translation": {
        "tr": "adım",
        "en": "step"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schritt.",
        "accusative": "Ich kaufe ___ Schritt.",
        "dative": "Mit ___ Schritt arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schublade",
      "translation": {
        "tr": "çekmece",
        "en": "drawer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schublade.",
        "accusative": "Ich sehe ___ Schublade.",
        "dative": "Ich gehe mit ___ Schublade."
      }
    },
    {
      "article": "der",
      "word": "Schuss",
      "translation": {
        "tr": "atış",
        "en": "Shot"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schuss.",
        "accusative": "Ich kaufe ___ Schuss.",
        "dative": "Mit ___ Schuss arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schüssel",
      "translation": {
        "tr": "kase",
        "en": "bowl"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schüssel.",
        "accusative": "Ich nehme ___ Schüssel.",
        "dative": "Vor ___ Schüssel steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schutz",
      "translation": {
        "tr": "Koruma",
        "en": "Protection"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schutz.",
        "accusative": "Ich sehe ___ Schutz.",
        "dative": "Ich gehe mit ___ Schutz."
      }
    },
    {
      "article": "der",
      "word": "Schwan",
      "translation": {
        "tr": "Kuğu",
        "en": "Swan"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schwan.",
        "accusative": "Ich kaufe ___ Schwan.",
        "dative": "Mit ___ Schwan arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schwangerschaft",
      "translation": {
        "tr": "hamilelik",
        "en": "pregnancy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schwangerschaft.",
        "accusative": "Ich sehe ___ Schwangerschaft.",
        "dative": "Ich gehe mit ___ Schwangerschaft."
      }
    },
    {
      "article": "der",
      "word": "Schwanz",
      "translation": {
        "tr": "kuyruk",
        "en": "tail"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schwanz.",
        "accusative": "Ich sehe ___ Schwanz.",
        "dative": "Ich gehe mit ___ Schwanz."
      }
    },
    {
      "article": "das",
      "word": "Schwert",
      "translation": {
        "tr": "Kılıç",
        "en": "Sword"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schwert.",
        "accusative": "Ich nehme ___ Schwert.",
        "dative": "Vor ___ Schwert steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Schwimmen",
      "translation": {
        "tr": "Yüzme",
        "en": "Swimming"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schwimmen.",
        "accusative": "Ich sehe ___ Schwimmen.",
        "dative": "Ich gehe mit ___ Schwimmen."
      }
    },
    {
      "article": "der",
      "word": "See",
      "translation": {
        "tr": "Göl",
        "en": "Lake"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ See.",
        "accusative": "Ich fotografiere ___ See.",
        "dative": "Wir treffen uns bei ___ See."
      }
    },
    {
      "article": "das",
      "word": "Segel",
      "translation": {
        "tr": "yelken",
        "en": "sail"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Segel.",
        "accusative": "Ich kaufe ___ Segel.",
        "dative": "Mit ___ Segel arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Seil",
      "translation": {
        "tr": "halat",
        "en": "rope"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Seil.",
        "accusative": "Ich kaufe ___ Seil.",
        "dative": "Mit ___ Seil arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Sekretär",
      "translation": {
        "tr": "Sekreter",
        "en": "Secretary"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sekretär.",
        "accusative": "Ich suche ___ Sekretär.",
        "dative": "Neben ___ Sekretär liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sekt",
      "translation": {
        "tr": "köpüklü şarap",
        "en": "sparkling wine"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sekt.",
        "accusative": "Ich probiere ___ Sekt.",
        "dative": "Ich beginne mit ___ Sekt."
      }
    },
    {
      "article": "das",
      "word": "Semester",
      "translation": {
        "tr": "dönem",
        "en": "semester"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Semester.",
        "accusative": "Ich suche ___ Semester.",
        "dative": "Neben ___ Semester liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Seminar",
      "translation": {
        "tr": "Seminer",
        "en": "Seminar"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Seminar.",
        "accusative": "Ich suche ___ Seminar.",
        "dative": "Neben ___ Seminar liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sender",
      "translation": {
        "tr": "verici",
        "en": "transmitter"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Sender.",
        "accusative": "Ich erwarte ___ Sender.",
        "dative": "Vor ___ Sender bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Sessel",
      "translation": {
        "tr": "Koltuk",
        "en": "Armchair"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Sessel.",
        "accusative": "Ich suche ___ Sessel.",
        "dative": "Vor ___ Sessel liegt ein Teppich."
      }
    },
    {
      "article": "die",
      "word": "Sicherheit",
      "translation": {
        "tr": "Güvenlik",
        "en": "Security"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sicherheit.",
        "accusative": "Ich suche ___ Sicherheit.",
        "dative": "Neben ___ Sicherheit liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Sieb",
      "translation": {
        "tr": "elek",
        "en": "Sieve"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sieb.",
        "accusative": "Ich nehme ___ Sieb.",
        "dative": "Vor ___ Sieb steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Sieg",
      "translation": {
        "tr": "Zafer",
        "en": "Victory"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sieg.",
        "accusative": "Ich suche ___ Sieg.",
        "dative": "Neben ___ Sieg liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Signal",
      "translation": {
        "tr": "sinyal",
        "en": "signal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Signal.",
        "accusative": "Ich suche ___ Signal.",
        "dative": "Neben ___ Signal liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Silber",
      "translation": {
        "tr": "Gümüş",
        "en": "Silver"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Silber.",
        "accusative": "Ich suche ___ Silber.",
        "dative": "Neben ___ Silber liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sinn",
      "translation": {
        "tr": "Anlam",
        "en": "sense"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sinn.",
        "accusative": "Ich sehe ___ Sinn.",
        "dative": "Ich gehe mit ___ Sinn."
      }
    },
    {
      "article": "die",
      "word": "Situation",
      "translation": {
        "tr": "durum",
        "en": "situation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Situation.",
        "accusative": "Ich sehe ___ Situation.",
        "dative": "Ich gehe mit ___ Situation."
      }
    },
    {
      "article": "der",
      "word": "Sitz",
      "translation": {
        "tr": "Koltuk",
        "en": "Seat"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Sitz.",
        "accusative": "Ich suche ___ Sitz.",
        "dative": "Ich bin in ___ Sitz."
      }
    },
    {
      "article": "der",
      "word": "Ski",
      "translation": {
        "tr": "Kayaklar",
        "en": "Skis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ski.",
        "accusative": "Ich kaufe ___ Ski.",
        "dative": "Mit ___ Ski arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Smartphone",
      "translation": {
        "tr": "Akıllı telefon",
        "en": "Smartphone"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Smartphone.",
        "accusative": "Ich repariere ___ Smartphone.",
        "dative": "Ich schreibe mit ___ Smartphone."
      }
    },
    {
      "article": "der",
      "word": "Soldat",
      "translation": {
        "tr": "Asker",
        "en": "Soldier"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Soldat.",
        "accusative": "Ich nehme ___ Soldat.",
        "dative": "Vor ___ Soldat steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Sonnenaufgang",
      "translation": {
        "tr": "Gündoğumu",
        "en": "Sunrise"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Sonnenaufgang.",
        "accusative": "Ich sehe ___ Sonnenaufgang.",
        "dative": "Ich antworte ___ Sonnenaufgang."
      }
    },
    {
      "article": "die",
      "word": "Soße",
      "translation": {
        "tr": "Sos",
        "en": "Sauce"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Soße.",
        "accusative": "Ich kaufe ___ Soße.",
        "dative": "Mit ___ Soße arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Spanier",
      "translation": {
        "tr": "İspanyollar",
        "en": "Spaniards"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spanier.",
        "accusative": "Ich kaufe ___ Spanier.",
        "dative": "Mit ___ Spanier arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Spanisch",
      "translation": {
        "tr": "İspanyolca",
        "en": "Spanish"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Spanisch.",
        "accusative": "Ich nehme ___ Spanisch.",
        "dative": "Vor ___ Spanisch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Spargel",
      "translation": {
        "tr": "Kuşkonmaz",
        "en": "Asparagus"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spargel.",
        "accusative": "Ich kaufe ___ Spargel.",
        "dative": "Mit ___ Spargel arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Spaziergang",
      "translation": {
        "tr": "Yürümek",
        "en": "Walk"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Spaziergang.",
        "accusative": "Ich sehe ___ Spaziergang.",
        "dative": "Ich gehe mit ___ Spaziergang."
      }
    },
    {
      "article": "die",
      "word": "Spende",
      "translation": {
        "tr": "Bağış yap",
        "en": "Donate"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Spende.",
        "accusative": "Ich repariere ___ Spende.",
        "dative": "Ich schreibe mit ___ Spende."
      }
    },
    {
      "article": "der",
      "word": "Spinat",
      "translation": {
        "tr": "Ispanak",
        "en": "Spinach"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Spinat.",
        "accusative": "Ich nehme ___ Spinat.",
        "dative": "Vor ___ Spinat steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Spinne",
      "translation": {
        "tr": "Örümcek",
        "en": "Spider"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spinne.",
        "accusative": "Ich suche ___ Spinne.",
        "dative": "Neben ___ Spinne liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sport",
      "translation": {
        "tr": "Spor",
        "en": "Sports"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sport.",
        "accusative": "Ich nehme ___ Sport.",
        "dative": "Vor ___ Sport steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Sportler",
      "translation": {
        "tr": "Atlet",
        "en": "Athlete"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sportler.",
        "accusative": "Ich sehe ___ Sportler.",
        "dative": "Ich gehe mit ___ Sportler."
      }
    },
    {
      "article": "der",
      "word": "Sprecher",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sprecher.",
        "accusative": "Ich nehme ___ Sprecher.",
        "dative": "Vor ___ Sprecher steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Sprecherin",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sprecherin.",
        "accusative": "Ich suche ___ Sprecherin.",
        "dative": "Neben ___ Sprecherin liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Spritze",
      "translation": {
        "tr": "Şırınga",
        "en": "Syringe"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Spritze.",
        "accusative": "Ich suche ___ Spritze.",
        "dative": "Ich gehe mit ___ Spritze raus."
      }
    },
    {
      "article": "das",
      "word": "Stadion",
      "translation": {
        "tr": "Stadyum",
        "en": "Stadium"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Stadion.",
        "accusative": "Ich sehe ___ Stadion.",
        "dative": "Ich bleibe in ___ Stadion."
      }
    },
    {
      "article": "der",
      "word": "Stall",
      "translation": {
        "tr": "istikrarlı",
        "en": "stable"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Stall.",
        "accusative": "Ich sehe ___ Stall.",
        "dative": "Ich stehe bei ___ Stall."
      }
    },
    {
      "article": "die",
      "word": "Stange",
      "translation": {
        "tr": "çubuk",
        "en": "rod"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stange.",
        "accusative": "Ich kaufe ___ Stange.",
        "dative": "Mit ___ Stange arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Stau",
      "translation": {
        "tr": "trafik sıkışıklığı",
        "en": "traffic jam"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Stau.",
        "accusative": "Ich sehe ___ Stau.",
        "dative": "Ich gehe mit ___ Stau."
      }
    },
    {
      "article": "die",
      "word": "Steckdose",
      "translation": {
        "tr": "Soket",
        "en": "Socket"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Steckdose.",
        "accusative": "Ich trage ___ Steckdose.",
        "dative": "Neben ___ Steckdose liegt ein Schal."
      }
    },
    {
      "article": "der",
      "word": "Stecker",
      "translation": {
        "tr": "Fiş",
        "en": "Plug"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stecker.",
        "accusative": "Ich kaufe ___ Stecker.",
        "dative": "Mit ___ Stecker arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Stein",
      "translation": {
        "tr": "Taş",
        "en": "Stone"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Stein.",
        "accusative": "Ich beobachte ___ Stein.",
        "dative": "Ich stehe vor ___ Stein."
      }
    },
    {
      "article": "der",
      "word": "Stiefel",
      "translation": {
        "tr": "bot",
        "en": "Boots"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stiefel.",
        "accusative": "Ich nehme ___ Stiefel.",
        "dative": "Vor ___ Stiefel steht ein Stuhl."
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
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aal.",
        "accusative": "Ich sehe ___ Aal.",
        "dative": "Ich gehe mit ___ Aal."
      }
    },
    {
      "article": "die",
      "word": "Abfahrt",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Abfahrt.",
        "accusative": "Ich erwarte ___ Abfahrt.",
        "dative": "Vor ___ Abfahrt bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Abflug",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Abflug.",
        "accusative": "Ich starte ___ Abflug.",
        "dative": "Bei ___ Abflug lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Abgabe",
      "translation": {
        "tr": "vergi",
        "en": "levy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Abgabe.",
        "accusative": "Ich sehe ___ Abgabe.",
        "dative": "Ich gehe mit ___ Abgabe."
      }
    },
    {
      "article": "der",
      "word": "Abgeordnete",
      "translation": {
        "tr": "milletvekilleri",
        "en": "MPs"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Abgeordnete.",
        "accusative": "Ich repariere ___ Abgeordnete.",
        "dative": "Ich schreibe mit ___ Abgeordnete."
      }
    },
    {
      "article": "die",
      "word": "Abkürzung",
      "translation": {
        "tr": "Kısaltma",
        "en": "Abbreviation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Abkürzung.",
        "accusative": "Ich sehe ___ Abkürzung.",
        "dative": "Ich gehe mit ___ Abkürzung."
      }
    },
    {
      "article": "das",
      "word": "Abonnement",
      "translation": {
        "tr": "Abonelik",
        "en": "Subscription"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Abonnement.",
        "accusative": "Ich suche ___ Abonnement.",
        "dative": "Neben ___ Abonnement liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Abschied",
      "translation": {
        "tr": "veda",
        "en": "Farewell"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Abschied.",
        "accusative": "Ich nehme ___ Abschied.",
        "dative": "Vor ___ Abschied steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Abschluss",
      "translation": {
        "tr": "Mezuniyet",
        "en": "Graduation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Abschluss.",
        "accusative": "Ich sehe ___ Abschluss.",
        "dative": "Ich gehe mit ___ Abschluss."
      }
    },
    {
      "article": "der",
      "word": "Abschnitt",
      "translation": {
        "tr": "Bölüm",
        "en": "Section"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Abschnitt.",
        "accusative": "Ich kaufe ___ Abschnitt.",
        "dative": "Mit ___ Abschnitt arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Absender",
      "translation": {
        "tr": "Gönderen",
        "en": "Sender"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Absender.",
        "accusative": "Ich starte ___ Absender.",
        "dative": "Bei ___ Absender lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Abstimmung",
      "translation": {
        "tr": "Oy ver",
        "en": "Vote"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Abstimmung.",
        "accusative": "Ich nehme ___ Abstimmung.",
        "dative": "Vor ___ Abstimmung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Abteilung",
      "translation": {
        "tr": "Departman",
        "en": "Department"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Abteilung.",
        "accusative": "Ich treffe ___ Abteilung.",
        "dative": "Ich helfe ___ Abteilung."
      }
    },
    {
      "article": "die",
      "word": "Abwesenheit",
      "translation": {
        "tr": "devamsızlık",
        "en": "Absence"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Abwesenheit.",
        "accusative": "Ich suche ___ Abwesenheit.",
        "dative": "Neben ___ Abwesenheit liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Achse",
      "translation": {
        "tr": "eksen",
        "en": "axis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Achse.",
        "accusative": "Ich kaufe ___ Achse.",
        "dative": "Mit ___ Achse arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Achtung",
      "translation": {
        "tr": "Dikkat",
        "en": "Attention"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Achtung.",
        "accusative": "Ich suche ___ Achtung.",
        "dative": "Neben ___ Achtung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Agent",
      "translation": {
        "tr": "ajan",
        "en": "agent"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Agent.",
        "accusative": "Ich suche ___ Agent.",
        "dative": "Neben ___ Agent liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Agentur",
      "translation": {
        "tr": "Ajans",
        "en": "Agency"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Agentur.",
        "accusative": "Ich nehme ___ Agentur.",
        "dative": "Vor ___ Agentur steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ägypter",
      "translation": {
        "tr": "Mısırlılar",
        "en": "Egyptians"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ägypter.",
        "accusative": "Ich kaufe ___ Ägypter.",
        "dative": "Mit ___ Ägypter arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Alarm",
      "translation": {
        "tr": "uyarı",
        "en": "Alert"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Alarm.",
        "accusative": "Ich nehme ___ Alarm.",
        "dative": "Vor ___ Alarm steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Albtraum",
      "translation": {
        "tr": "Kabus",
        "en": "Nightmare"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Albtraum.",
        "accusative": "Ich miete ___ Albtraum.",
        "dative": "Ich fahre mit ___ Albtraum."
      }
    },
    {
      "article": "die",
      "word": "Altstadt",
      "translation": {
        "tr": "Eski şehir",
        "en": "Old town"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Altstadt.",
        "accusative": "Ich suche ___ Altstadt.",
        "dative": "Neben ___ Altstadt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Amateur",
      "translation": {
        "tr": "amatör",
        "en": "Amateur"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Amateur.",
        "accusative": "Ich suche ___ Amateur.",
        "dative": "Neben ___ Amateur liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Anbieter",
      "translation": {
        "tr": "sağlayıcı",
        "en": "Provider"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anbieter.",
        "accusative": "Ich kaufe ___ Anbieter.",
        "dative": "Mit ___ Anbieter arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Anfrage",
      "translation": {
        "tr": "istek",
        "en": "request"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anfrage.",
        "accusative": "Ich nehme ___ Anfrage.",
        "dative": "Vor ___ Anfrage steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Angelegenheit",
      "translation": {
        "tr": "madde",
        "en": "matter"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Angelegenheit.",
        "accusative": "Ich kaufe ___ Angelegenheit.",
        "dative": "Mit ___ Angelegenheit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Angestellte",
      "translation": {
        "tr": "çalışanlar",
        "en": "employees"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Angestellte.",
        "accusative": "Ich treffe ___ Angestellte.",
        "dative": "Ich helfe ___ Angestellte."
      }
    },
    {
      "article": "der",
      "word": "Angriff",
      "translation": {
        "tr": "Saldırı",
        "en": "Attack"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Angriff.",
        "accusative": "Ich nehme ___ Angriff.",
        "dative": "Vor ___ Angriff steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Anker",
      "translation": {
        "tr": "Çapa",
        "en": "Anchor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anker.",
        "accusative": "Ich sehe ___ Anker.",
        "dative": "Ich gehe mit ___ Anker."
      }
    },
    {
      "article": "die",
      "word": "Ankündigung",
      "translation": {
        "tr": "Duyuru",
        "en": "Announcement"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ankündigung.",
        "accusative": "Ich nehme ___ Ankündigung.",
        "dative": "Vor ___ Ankündigung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Anlage",
      "translation": {
        "tr": "Tesis",
        "en": "Facility"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anlage.",
        "accusative": "Ich nehme ___ Anlage.",
        "dative": "Vor ___ Anlage steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Anleitung",
      "translation": {
        "tr": "Talimatlar",
        "en": "Instructions"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anleitung.",
        "accusative": "Ich suche ___ Anleitung.",
        "dative": "Neben ___ Anleitung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Anschluss",
      "translation": {
        "tr": "Bağlantı",
        "en": "Connection"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anschluss.",
        "accusative": "Ich sehe ___ Anschluss.",
        "dative": "Ich gehe mit ___ Anschluss."
      }
    },
    {
      "article": "das",
      "word": "Antibiotikum",
      "translation": {
        "tr": "antibiyotik",
        "en": "antibiotic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Antibiotikum.",
        "accusative": "Ich suche ___ Antibiotikum.",
        "dative": "Neben ___ Antibiotikum liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Antrag",
      "translation": {
        "tr": "Başvuru",
        "en": "Application"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Antrag.",
        "accusative": "Ich streichle ___ Antrag.",
        "dative": "Ich bin bei ___ Antrag."
      }
    },
    {
      "article": "die",
      "word": "Anwesenheit",
      "translation": {
        "tr": "Mevcudiyet",
        "en": "Presence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anwesenheit.",
        "accusative": "Ich sehe ___ Anwesenheit.",
        "dative": "Ich gehe mit ___ Anwesenheit."
      }
    },
    {
      "article": "die",
      "word": "Anzahl",
      "translation": {
        "tr": "sayı",
        "en": "number"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anzahl.",
        "accusative": "Ich kaufe ___ Anzahl.",
        "dative": "Mit ___ Anzahl arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Anzahlung",
      "translation": {
        "tr": "mevduat",
        "en": "deposit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anzahlung.",
        "accusative": "Ich sehe ___ Anzahlung.",
        "dative": "Ich gehe mit ___ Anzahlung."
      }
    },
    {
      "article": "das",
      "word": "Aquarium",
      "translation": {
        "tr": "Akvaryum",
        "en": "Aquarium"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aquarium.",
        "accusative": "Ich suche ___ Aquarium.",
        "dative": "Neben ___ Aquarium liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Araber",
      "translation": {
        "tr": "Araplar",
        "en": "Arabs"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Araber.",
        "accusative": "Ich sehe ___ Araber.",
        "dative": "Ich gehe mit ___ Araber."
      }
    },
    {
      "article": "der",
      "word": "Arbeitgeber",
      "translation": {
        "tr": "İşveren",
        "en": "Employer"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Arbeitgeber.",
        "accusative": "Ich kaufe ___ Arbeitgeber.",
        "dative": "Mit ___ Arbeitgeber arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Arbeitnehmer",
      "translation": {
        "tr": "çalışanlar",
        "en": "employees"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Arbeitnehmer.",
        "accusative": "Ich sehe ___ Arbeitnehmer.",
        "dative": "Ich antworte ___ Arbeitnehmer."
      }
    },
    {
      "article": "das",
      "word": "Arbeitsamt",
      "translation": {
        "tr": "İstihdam ofisi",
        "en": "Employment office"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Arbeitsamt.",
        "accusative": "Ich besuche ___ Arbeitsamt.",
        "dative": "Ich warte vor ___ Arbeitsamt."
      }
    },
    {
      "article": "die",
      "word": "Armee",
      "translation": {
        "tr": "Ordu",
        "en": "Army"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Armee.",
        "accusative": "Ich kaufe ___ Armee.",
        "dative": "Mit ___ Armee arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Armut",
      "translation": {
        "tr": "Yoksulluk",
        "en": "Poverty"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Armut.",
        "accusative": "Ich sehe ___ Armut.",
        "dative": "Ich gehe mit ___ Armut."
      }
    },
    {
      "article": "das",
      "word": "Aroma",
      "translation": {
        "tr": "aroma",
        "en": "aroma"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aroma.",
        "accusative": "Ich sehe ___ Aroma.",
        "dative": "Ich gehe mit ___ Aroma."
      }
    },
    {
      "article": "das",
      "word": "Arzneimittel",
      "translation": {
        "tr": "İlaçlar",
        "en": "Medicines"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Arzneimittel.",
        "accusative": "Ich nehme ___ Arzneimittel.",
        "dative": "Vor ___ Arzneimittel steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Atem",
      "translation": {
        "tr": "Nefes",
        "en": "Breath"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Atem.",
        "accusative": "Ich kaufe ___ Atem.",
        "dative": "Mit ___ Atem arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Athlet",
      "translation": {
        "tr": "Atlet",
        "en": "Athlete"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Athlet.",
        "accusative": "Ich nehme ___ Athlet.",
        "dative": "Vor ___ Athlet steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Aufbau",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufbau.",
        "accusative": "Ich kaufe ___ Aufbau.",
        "dative": "Mit ___ Aufbau arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Aufenthalt",
      "translation": {
        "tr": "Kal",
        "en": "Stay"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aufenthalt.",
        "accusative": "Ich nehme ___ Aufenthalt.",
        "dative": "Vor ___ Aufenthalt steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Auflage",
      "translation": {
        "tr": "baskı",
        "en": "edition"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Auflage.",
        "accusative": "Ich kaufe ___ Auflage.",
        "dative": "Mit ___ Auflage arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Auflistung",
      "translation": {
        "tr": "İlan",
        "en": "Listing"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Auflistung.",
        "accusative": "Ich suche ___ Auflistung.",
        "dative": "Neben ___ Auflistung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aufmerksamkeit",
      "translation": {
        "tr": "dikkat",
        "en": "attention"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufmerksamkeit.",
        "accusative": "Ich kaufe ___ Aufmerksamkeit.",
        "dative": "Mit ___ Aufmerksamkeit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Aufnahme",
      "translation": {
        "tr": "Kayıt",
        "en": "Recording"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aufnahme.",
        "accusative": "Ich sehe ___ Aufnahme.",
        "dative": "Ich gehe mit ___ Aufnahme."
      }
    },
    {
      "article": "der",
      "word": "Aufprall",
      "translation": {
        "tr": "Etki",
        "en": "Impact"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufprall.",
        "accusative": "Ich kaufe ___ Aufprall.",
        "dative": "Mit ___ Aufprall arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Aufregung",
      "translation": {
        "tr": "Heyecan",
        "en": "Excitement"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aufregung.",
        "accusative": "Ich suche ___ Aufregung.",
        "dative": "Neben ___ Aufregung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aufsicht",
      "translation": {
        "tr": "Denetim",
        "en": "Supervision"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aufsicht.",
        "accusative": "Ich suche ___ Aufsicht.",
        "dative": "Neben ___ Aufsicht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aufstellung",
      "translation": {
        "tr": "Kadro",
        "en": "Lineup"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aufstellung.",
        "accusative": "Ich nehme ___ Aufstellung.",
        "dative": "Vor ___ Aufstellung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Aufstieg",
      "translation": {
        "tr": "Yükseliş",
        "en": "Ascension"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufstieg.",
        "accusative": "Ich kaufe ___ Aufstieg.",
        "dative": "Mit ___ Aufstieg arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Auftakt",
      "translation": {
        "tr": "Prelüd",
        "en": "Prelude"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Auftakt.",
        "accusative": "Ich nehme ___ Auftakt.",
        "dative": "Vor ___ Auftakt steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ausdauer",
      "translation": {
        "tr": "Dayanıklılık",
        "en": "Endurance"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Ausdauer.",
        "accusative": "Ich starte ___ Ausdauer.",
        "dative": "Bei ___ Ausdauer lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Ausdruck",
      "translation": {
        "tr": "ifade",
        "en": "expression"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausdruck.",
        "accusative": "Ich suche ___ Ausdruck.",
        "dative": "Neben ___ Ausdruck liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Auskunft",
      "translation": {
        "tr": "Bilgi",
        "en": "Information"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Auskunft.",
        "accusative": "Ich kaufe ___ Auskunft.",
        "dative": "Mit ___ Auskunft arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Aussage",
      "translation": {
        "tr": "beyan",
        "en": "statement"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aussage.",
        "accusative": "Ich suche ___ Aussage.",
        "dative": "Neben ___ Aussage liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aussicht",
      "translation": {
        "tr": "Görüntüle",
        "en": "View"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aussicht.",
        "accusative": "Ich nehme ___ Aussicht.",
        "dative": "Vor ___ Aussicht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ausstellung",
      "translation": {
        "tr": "Sergi",
        "en": "Exhibition"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausstellung.",
        "accusative": "Ich sehe ___ Ausstellung.",
        "dative": "Ich gehe mit ___ Ausstellung."
      }
    },
    {
      "article": "die",
      "word": "Auswahl",
      "translation": {
        "tr": "Seçim",
        "en": "Selection"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Auswahl.",
        "accusative": "Ich nehme ___ Auswahl.",
        "dative": "Vor ___ Auswahl steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ausweis",
      "translation": {
        "tr": "Kimlik kartı",
        "en": "ID card"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Ausweis.",
        "accusative": "Ich nehme ___ Ausweis.",
        "dative": "Ich reise mit ___ Ausweis."
      }
    },
    {
      "article": "das",
      "word": "Autogramm",
      "translation": {
        "tr": "İmza",
        "en": "Autograph"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Autogramm.",
        "accusative": "Ich suche ___ Autogramm.",
        "dative": "Neben ___ Autogramm liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Automat",
      "translation": {
        "tr": "otomat",
        "en": "automat"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Automat.",
        "accusative": "Ich suche ___ Automat.",
        "dative": "Neben ___ Automat liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bach",
      "translation": {
        "tr": "Bach",
        "en": "Bach"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bach.",
        "accusative": "Ich suche ___ Bach.",
        "dative": "Neben ___ Bach liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ballon",
      "translation": {
        "tr": "Balon",
        "en": "Balloon"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ballon.",
        "accusative": "Ich nehme ___ Ballon.",
        "dative": "Vor ___ Ballon steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Bargeld",
      "translation": {
        "tr": "Nakit",
        "en": "Cash"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bargeld.",
        "accusative": "Ich sehe ___ Bargeld.",
        "dative": "Ich gehe mit ___ Bargeld."
      }
    },
    {
      "article": "der",
      "word": "Bau",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bau.",
        "accusative": "Ich nehme ___ Bau.",
        "dative": "Vor ___ Bau steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Baumwolle",
      "translation": {
        "tr": "Pamuk",
        "en": "Cotton"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Baumwolle.",
        "accusative": "Ich kaufe ___ Baumwolle.",
        "dative": "Mit ___ Baumwolle arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Baustelle",
      "translation": {
        "tr": "İnşaat alanı",
        "en": "Construction site"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Baustelle.",
        "accusative": "Ich nehme ___ Baustelle.",
        "dative": "Vor ___ Baustelle steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bedeutung",
      "translation": {
        "tr": "Anlamı",
        "en": "Meaning"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bedeutung.",
        "accusative": "Ich kaufe ___ Bedeutung.",
        "dative": "Hinter ___ Bedeutung ist ein Fenster."
      }
    },
    {
      "article": "das",
      "word": "Bedürfnis",
      "translation": {
        "tr": "ihtiyaç",
        "en": "need"
      },
      "casePrompts": {
        "nominative": "Neben der Tür steht ___ Bedürfnis.",
        "accusative": "Ich putze ___ Bedürfnis.",
        "dative": "Neben ___ Bedürfnis steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Beerdigung",
      "translation": {
        "tr": "Cenaze",
        "en": "Funeral"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Beerdigung.",
        "accusative": "Ich füttere ___ Beerdigung.",
        "dative": "Ich spiele mit ___ Beerdigung."
      }
    },
    {
      "article": "der",
      "word": "Befehl",
      "translation": {
        "tr": "Komut",
        "en": "Command"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Befehl.",
        "accusative": "Ich sehe ___ Befehl.",
        "dative": "Ich antworte ___ Befehl."
      }
    },
    {
      "article": "der",
      "word": "Begriff",
      "translation": {
        "tr": "dönem",
        "en": "term"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Begriff.",
        "accusative": "Ich kaufe ___ Begriff.",
        "dative": "Mit ___ Begriff arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Behandlung",
      "translation": {
        "tr": "Tedavi",
        "en": "Treatment"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Behandlung.",
        "accusative": "Ich sehe ___ Behandlung.",
        "dative": "Ich gehe mit ___ Behandlung."
      }
    },
    {
      "article": "die",
      "word": "Behinderung",
      "translation": {
        "tr": "Engellilik",
        "en": "Disability"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Behinderung.",
        "accusative": "Ich kaufe ___ Behinderung.",
        "dative": "Mit ___ Behinderung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Behörde",
      "translation": {
        "tr": "Yetki",
        "en": "Authority"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Behörde.",
        "accusative": "Ich sehe ___ Behörde.",
        "dative": "Ich antworte ___ Behörde."
      }
    },
    {
      "article": "der",
      "word": "Beitrag",
      "translation": {
        "tr": "Gönderi",
        "en": "Post"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Beitrag.",
        "accusative": "Ich sehe ___ Beitrag.",
        "dative": "Ich gehe mit ___ Beitrag."
      }
    },
    {
      "article": "die",
      "word": "Beleuchtung",
      "translation": {
        "tr": "Aydınlatma",
        "en": "Lighting"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beleuchtung.",
        "accusative": "Ich suche ___ Beleuchtung.",
        "dative": "Neben ___ Beleuchtung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Belohnung",
      "translation": {
        "tr": "ödül",
        "en": "reward"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Belohnung zentral.",
        "accusative": "Wir besprechen ___ Belohnung.",
        "dative": "Mit ___ Belohnung wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Bemerkung",
      "translation": {
        "tr": "Açıklama",
        "en": "Remark"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bemerkung.",
        "accusative": "Ich sehe ___ Bemerkung.",
        "dative": "Ich gehe mit ___ Bemerkung."
      }
    },
    {
      "article": "der",
      "word": "Benutzer",
      "translation": {
        "tr": "Kullanıcı",
        "en": "User"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Benutzer.",
        "accusative": "Ich sehe ___ Benutzer.",
        "dative": "Ich gehe mit ___ Benutzer."
      }
    },
    {
      "article": "die",
      "word": "Benutzung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Benutzung.",
        "accusative": "Ich kaufe ___ Benutzung.",
        "dative": "Mit ___ Benutzung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Berater",
      "translation": {
        "tr": "Danışman",
        "en": "Consultant"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Berater.",
        "accusative": "Ich besuche ___ Berater.",
        "dative": "Ich danke ___ Berater."
      }
    },
    {
      "article": "der",
      "word": "Bereich",
      "translation": {
        "tr": "alan",
        "en": "area"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bereich.",
        "accusative": "Ich kaufe ___ Bereich.",
        "dative": "Mit ___ Bereich arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bericht",
      "translation": {
        "tr": "Rapor",
        "en": "Report"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bericht.",
        "accusative": "Ich drucke ___ Bericht.",
        "dative": "Aus ___ Bericht lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Besitz",
      "translation": {
        "tr": "Topa sahip olma",
        "en": "Possession"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Besitz.",
        "accusative": "Ich nehme ___ Besitz.",
        "dative": "Vor ___ Besitz steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Besitzer",
      "translation": {
        "tr": "Sahip",
        "en": "Owner"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Besitzer.",
        "accusative": "Ich kaufe ___ Besitzer.",
        "dative": "Mit ___ Besitzer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Beutel",
      "translation": {
        "tr": "kese",
        "en": "pouch"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Beutel.",
        "accusative": "Ich sehe ___ Beutel.",
        "dative": "Ich gehe mit ___ Beutel."
      }
    },
    {
      "article": "die",
      "word": "Bezahlung",
      "translation": {
        "tr": "Ödeme",
        "en": "Payment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bezahlung.",
        "accusative": "Ich suche ___ Bezahlung.",
        "dative": "Neben ___ Bezahlung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bibel",
      "translation": {
        "tr": "İncil",
        "en": "Bible"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bibel.",
        "accusative": "Ich suche ___ Bibel.",
        "dative": "Neben ___ Bibel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Biber",
      "translation": {
        "tr": "kunduz",
        "en": "Beaver"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Biber.",
        "accusative": "Ich kaufe ___ Biber.",
        "dative": "Mit ___ Biber arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Bildung",
      "translation": {
        "tr": "Eğitim",
        "en": "Education"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Bildung.",
        "accusative": "Ich füttere ___ Bildung.",
        "dative": "Ich spiele mit ___ Bildung."
      }
    },
    {
      "article": "die",
      "word": "Biologie",
      "translation": {
        "tr": "Biyoloji",
        "en": "Biology"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Biologie.",
        "accusative": "Ich nehme ___ Biologie.",
        "dative": "Vor ___ Biologie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Biss",
      "translation": {
        "tr": "ısırık",
        "en": "Bite"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Biss.",
        "accusative": "Ich kaufe ___ Biss.",
        "dative": "Mit ___ Biss arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Blase",
      "translation": {
        "tr": "Kabarcık",
        "en": "Bubble"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Blase.",
        "accusative": "Ich nehme ___ Blase.",
        "dative": "Vor ___ Blase steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Blech",
      "translation": {
        "tr": "metal levha",
        "en": "sheet metal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blech.",
        "accusative": "Ich suche ___ Blech.",
        "dative": "Neben ___ Blech liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Blog",
      "translation": {
        "tr": "Blog",
        "en": "Blog"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blog.",
        "accusative": "Ich suche ___ Blog.",
        "dative": "Neben ___ Blog liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bonus",
      "translation": {
        "tr": "Bonus",
        "en": "Bonus"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bonus.",
        "accusative": "Ich suche ___ Bonus.",
        "dative": "Neben ___ Bonus liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Börse",
      "translation": {
        "tr": "Borsa",
        "en": "Stock market"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Börse.",
        "accusative": "Ich besuche ___ Börse.",
        "dative": "Ich warte vor ___ Börse."
      }
    },
    {
      "article": "die",
      "word": "Botschaft",
      "translation": {
        "tr": "Elçilik",
        "en": "Embassy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Botschaft.",
        "accusative": "Ich sehe ___ Botschaft.",
        "dative": "Ich gehe mit ___ Botschaft."
      }
    },
    {
      "article": "das",
      "word": "Boxen",
      "translation": {
        "tr": "Boks",
        "en": "Boxing"
      },
      "casePrompts": {
        "nominative": "Im Haus ist ___ Boxen.",
        "accusative": "Ich sehe ___ Boxen.",
        "dative": "Ich stehe bei ___ Boxen."
      }
    },
    {
      "article": "die",
      "word": "Branche",
      "translation": {
        "tr": "Endüstri",
        "en": "Industry"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Branche.",
        "accusative": "Ich starte ___ Branche.",
        "dative": "Bei ___ Branche lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Brite",
      "translation": {
        "tr": "İngiliz",
        "en": "Brit"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Brite.",
        "accusative": "Ich kaufe ___ Brite.",
        "dative": "Mit ___ Brite arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Bücherei",
      "translation": {
        "tr": "Kütüphane",
        "en": "Library"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Bücherei.",
        "accusative": "Ich suche ___ Bücherei.",
        "dative": "Ich bin in ___ Bücherei."
      }
    },
    {
      "article": "die",
      "word": "Bude",
      "translation": {
        "tr": "Kabin",
        "en": "Booth"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bude.",
        "accusative": "Ich suche ___ Bude.",
        "dative": "Neben ___ Bude liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bügel",
      "translation": {
        "tr": "Askı",
        "en": "Hanger"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bügel.",
        "accusative": "Ich nehme ___ Bügel.",
        "dative": "Vor ___ Bügel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bühne",
      "translation": {
        "tr": "sahne",
        "en": "stage"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bühne.",
        "accusative": "Ich kaufe ___ Bühne.",
        "dative": "Mit ___ Bühne arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bunker",
      "translation": {
        "tr": "Bunkerler",
        "en": "Bunkers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bunker.",
        "accusative": "Ich kaufe ___ Bunker.",
        "dative": "Mit ___ Bunker arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bürger",
      "translation": {
        "tr": "Vatandaş",
        "en": "Citizen"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Bürger.",
        "accusative": "Ich kenne ___ Bürger.",
        "dative": "Ich spreche mit ___ Bürger."
      }
    },
    {
      "article": "der",
      "word": "Bürgermeister",
      "translation": {
        "tr": "Belediye Başkanı",
        "en": "Mayor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bürgermeister.",
        "accusative": "Ich kaufe ___ Bürgermeister.",
        "dative": "Mit ___ Bürgermeister arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bursche",
      "translation": {
        "tr": "arkadaş",
        "en": "fellow"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bursche.",
        "accusative": "Ich nehme ___ Bursche.",
        "dative": "Vor ___ Bursche steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Café",
      "translation": {
        "tr": "Kafe",
        "en": "Cafe"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Café.",
        "accusative": "Ich fotografiere ___ Café.",
        "dative": "Wir treffen uns bei ___ Café."
      }
    },
    {
      "article": "das",
      "word": "Camp",
      "translation": {
        "tr": "Kamp",
        "en": "Camp"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Camp.",
        "accusative": "Ich suche ___ Camp.",
        "dative": "Neben ___ Camp liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Camping",
      "translation": {
        "tr": "Kamp yapmak",
        "en": "Camping"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Camping.",
        "accusative": "Ich suche ___ Camping.",
        "dative": "Neben ___ Camping liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Casino",
      "translation": {
        "tr": "Kumarhane",
        "en": "Casino"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Casino.",
        "accusative": "Ich suche ___ Casino.",
        "dative": "Neben ___ Casino liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Champion",
      "translation": {
        "tr": "Şampiyon",
        "en": "Champion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Champion.",
        "accusative": "Ich suche ___ Champion.",
        "dative": "Neben ___ Champion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Chance",
      "translation": {
        "tr": "Şans",
        "en": "Chance"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Chance.",
        "accusative": "Ich erkläre ___ Chance.",
        "dative": "An ___ Chance arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Check",
      "translation": {
        "tr": "Kontrol et",
        "en": "Check"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Check.",
        "accusative": "Ich sehe ___ Check.",
        "dative": "Ich gehe mit ___ Check."
      }
    },
    {
      "article": "die",
      "word": "Chefin",
      "translation": {
        "tr": "patron",
        "en": "boss"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Chefin.",
        "accusative": "Ich kenne ___ Chefin.",
        "dative": "Ich spreche mit ___ Chefin."
      }
    },
    {
      "article": "der",
      "word": "Chip",
      "translation": {
        "tr": "çip",
        "en": "chip"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Chip.",
        "accusative": "Ich suche ___ Chip.",
        "dative": "Neben ___ Chip liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Chor",
      "translation": {
        "tr": "Koro",
        "en": "Choir"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Chor.",
        "accusative": "Ich kaufe ___ Chor.",
        "dative": "Mit ___ Chor arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Clown",
      "translation": {
        "tr": "palyaço",
        "en": "clown"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Clown.",
        "accusative": "Ich suche ___ Clown.",
        "dative": "Neben ___ Clown liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Club",
      "translation": {
        "tr": "Kulüp",
        "en": "Club"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Club.",
        "accusative": "Ich suche ___ Club.",
        "dative": "Neben ___ Club liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Comic",
      "translation": {
        "tr": "komik",
        "en": "Comic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Comic.",
        "accusative": "Ich suche ___ Comic.",
        "dative": "Neben ___ Comic liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Couch",
      "translation": {
        "tr": "kanepe",
        "en": "couch"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Couch.",
        "accusative": "Ich kaufe ___ Couch.",
        "dative": "Hinter ___ Couch ist ein Fenster."
      }
    },
    {
      "article": "der",
      "word": "Damm",
      "translation": {
        "tr": "Baraj",
        "en": "Dam"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Damm.",
        "accusative": "Ich nehme ___ Damm.",
        "dative": "Vor ___ Damm steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Dank",
      "translation": {
        "tr": "teşekkürler",
        "en": "Thanks"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dank.",
        "accusative": "Ich nehme ___ Dank.",
        "dative": "Vor ___ Dank steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Darm",
      "translation": {
        "tr": "bağırsaklar",
        "en": "intestines"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Darm.",
        "accusative": "Ich sehe ___ Darm.",
        "dative": "Ich gehe mit ___ Darm."
      }
    },
    {
      "article": "der",
      "word": "Darsteller",
      "translation": {
        "tr": "Aktör",
        "en": "Actor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Darsteller.",
        "accusative": "Ich nehme ___ Darsteller.",
        "dative": "Vor ___ Darsteller steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Datei",
      "translation": {
        "tr": "dosya",
        "en": "file"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Datei.",
        "accusative": "Ich kaufe ___ Datei.",
        "dative": "Mit ___ Datei arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Dauer",
      "translation": {
        "tr": "Süre",
        "en": "Duration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dauer.",
        "accusative": "Ich nehme ___ Dauer.",
        "dative": "Vor ___ Dauer steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Deck",
      "translation": {
        "tr": "güverte",
        "en": "deck"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Deck.",
        "accusative": "Ich suche ___ Deck.",
        "dative": "Neben ___ Deck liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Defekt",
      "translation": {
        "tr": "Kusur",
        "en": "Defect"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Defekt.",
        "accusative": "Ich suche ___ Defekt.",
        "dative": "Neben ___ Defekt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Demokratie",
      "translation": {
        "tr": "Demokrasi",
        "en": "Democracy"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Demokratie.",
        "accusative": "Ich suche ___ Demokratie.",
        "dative": "Neben ___ Demokratie liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Designer",
      "translation": {
        "tr": "Tasarımcılar",
        "en": "Designers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Designer.",
        "accusative": "Ich kaufe ___ Designer.",
        "dative": "Mit ___ Designer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Detektiv",
      "translation": {
        "tr": "Dedektif",
        "en": "Detective"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Detektiv.",
        "accusative": "Ich nehme ___ Detektiv.",
        "dative": "Vor ___ Detektiv steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Deutsch",
      "translation": {
        "tr": "Almanca",
        "en": "German"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Deutsch.",
        "accusative": "Ich kenne ___ Deutsch.",
        "dative": "Ich spreche mit ___ Deutsch."
      }
    },
    {
      "article": "der",
      "word": "Deutsche",
      "translation": {
        "tr": "Almanlar",
        "en": "Germans"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Deutsche.",
        "accusative": "Ich besuche ___ Deutsche.",
        "dative": "Ich danke ___ Deutsche."
      }
    },
    {
      "article": "der",
      "word": "Dialog",
      "translation": {
        "tr": "Diyalog",
        "en": "Dialogue"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dialog.",
        "accusative": "Ich suche ___ Dialog.",
        "dative": "Neben ___ Dialog liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Dichter",
      "translation": {
        "tr": "Şair",
        "en": "Poet"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Dichter.",
        "accusative": "Ich entdecke ___ Dichter.",
        "dative": "Ich gehe zu ___ Dichter."
      }
    },
    {
      "article": "der",
      "word": "Dieb",
      "translation": {
        "tr": "Hırsız",
        "en": "Thief"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dieb.",
        "accusative": "Ich sehe ___ Dieb.",
        "dative": "Ich gehe mit ___ Dieb."
      }
    },
    {
      "article": "der",
      "word": "Diener",
      "translation": {
        "tr": "hizmetçi",
        "en": "servant"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Diener.",
        "accusative": "Ich sehe ___ Diener.",
        "dative": "Ich gehe mit ___ Diener."
      }
    },
    {
      "article": "der",
      "word": "Dienst",
      "translation": {
        "tr": "hizmet",
        "en": "service"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dienst.",
        "accusative": "Ich sehe ___ Dienst.",
        "dative": "Ich gehe mit ___ Dienst."
      }
    },
    {
      "article": "der",
      "word": "Diktator",
      "translation": {
        "tr": "Diktatör",
        "en": "Dictator"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Diktator.",
        "accusative": "Ich suche ___ Diktator.",
        "dative": "Neben ___ Diktator liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Dinosaurier",
      "translation": {
        "tr": "Dinozorlar",
        "en": "Dinosaurs"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dinosaurier.",
        "accusative": "Ich kaufe ___ Dinosaurier.",
        "dative": "Mit ___ Dinosaurier arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Diplom",
      "translation": {
        "tr": "Diploma",
        "en": "Diploma"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Diplom.",
        "accusative": "Ich nehme ___ Diplom.",
        "dative": "Vor ___ Diplom steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Direktor",
      "translation": {
        "tr": "Direktör",
        "en": "Director"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Direktor.",
        "accusative": "Ich suche ___ Direktor.",
        "dative": "Neben ___ Direktor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Disco",
      "translation": {
        "tr": "Disko",
        "en": "Disco"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Disco.",
        "accusative": "Ich sehe ___ Disco.",
        "dative": "Ich gehe mit ___ Disco."
      }
    },
    {
      "article": "der",
      "word": "Dom",
      "translation": {
        "tr": "Katedral",
        "en": "Cathedral"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Dom.",
        "accusative": "Ich beobachte ___ Dom.",
        "dative": "Ich stehe neben ___ Dom."
      }
    },
    {
      "article": "der",
      "word": "Dorfbewohner",
      "translation": {
        "tr": "köylüler",
        "en": "villagers"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Dorfbewohner.",
        "accusative": "Ich fotografiere ___ Dorfbewohner.",
        "dative": "Wir treffen uns bei ___ Dorfbewohner."
      }
    },
    {
      "article": "der",
      "word": "Draht",
      "translation": {
        "tr": "tel",
        "en": "wire"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Draht.",
        "accusative": "Ich sehe ___ Draht.",
        "dative": "Ich gehe mit ___ Draht."
      }
    },
    {
      "article": "das",
      "word": "Drama",
      "translation": {
        "tr": "dram",
        "en": "drama"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Drama.",
        "accusative": "Ich suche ___ Drama.",
        "dative": "Neben ___ Drama liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Dreck",
      "translation": {
        "tr": "Kir",
        "en": "Dirt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dreck.",
        "accusative": "Ich suche ___ Dreck.",
        "dative": "Neben ___ Dreck liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Drittel",
      "translation": {
        "tr": "üçüncü",
        "en": "third"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Drittel.",
        "accusative": "Ich nehme ___ Drittel.",
        "dative": "Vor ___ Drittel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Droge",
      "translation": {
        "tr": "ilaç",
        "en": "drug"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Droge.",
        "accusative": "Ich kaufe ___ Droge.",
        "dative": "Mit ___ Droge arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Drohung",
      "translation": {
        "tr": "Tehdit",
        "en": "Threat"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Drohung.",
        "accusative": "Ich nehme ___ Drohung.",
        "dative": "Vor ___ Drohung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Duft",
      "translation": {
        "tr": "Koku",
        "en": "Fragrance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Duft.",
        "accusative": "Ich suche ___ Duft.",
        "dative": "Neben ___ Duft liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ebene",
      "translation": {
        "tr": "seviye",
        "en": "level"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ebene.",
        "accusative": "Ich kaufe ___ Ebene.",
        "dative": "Mit ___ Ebene arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "ec-Karte",
      "translation": {
        "tr": "EC kartı",
        "en": "EC card"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ ec-Karte.",
        "accusative": "Ich nehme ___ ec-Karte.",
        "dative": "Ich reise mit ___ ec-Karte."
      }
    },
    {
      "article": "das",
      "word": "Echo",
      "translation": {
        "tr": "yankı",
        "en": "Echo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Echo.",
        "accusative": "Ich suche ___ Echo.",
        "dative": "Neben ___ Echo liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Effekt",
      "translation": {
        "tr": "Etki",
        "en": "Effect"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Effekt.",
        "accusative": "Ich suche ___ Effekt.",
        "dative": "Neben ___ Effekt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ehepartner",
      "translation": {
        "tr": "eş",
        "en": "spouse"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ehepartner.",
        "accusative": "Ich nehme ___ Ehepartner.",
        "dative": "Vor ___ Ehepartner steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Eiche",
      "translation": {
        "tr": "Meşe",
        "en": "Oak"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Eiche.",
        "accusative": "Ich nehme ___ Eiche.",
        "dative": "Vor ___ Eiche steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Eigenschaft",
      "translation": {
        "tr": "mülk",
        "en": "property"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Eigenschaft.",
        "accusative": "Ich sehe ___ Eigenschaft.",
        "dative": "Ich gehe mit ___ Eigenschaft."
      }
    },
    {
      "article": "das",
      "word": "Eigentum",
      "translation": {
        "tr": "mülk",
        "en": "property"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Eigentum.",
        "accusative": "Ich kaufe ___ Eigentum.",
        "dative": "Mit ___ Eigentum arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Eigentümer",
      "translation": {
        "tr": "Sahip",
        "en": "Owner"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Eigentümer.",
        "accusative": "Ich nehme ___ Eigentümer.",
        "dative": "Vor ___ Eigentümer steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Eile",
      "translation": {
        "tr": "Acele et",
        "en": "Hurry"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Eile.",
        "accusative": "Ich nehme ___ Eile.",
        "dative": "Vor ___ Eile steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Einfahrt",
      "translation": {
        "tr": "Giriş",
        "en": "Entrance"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einfahrt.",
        "accusative": "Ich kaufe ___ Einfahrt.",
        "dative": "Mit ___ Einfahrt arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Einfall",
      "translation": {
        "tr": "fikir",
        "en": "idea"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Einfall.",
        "accusative": "Ich brauche ___ Einfall.",
        "dative": "Ich beschäftige mich mit ___ Einfall."
      }
    },
    {
      "article": "die",
      "word": "Einführung",
      "translation": {
        "tr": "Giriş",
        "en": "Introduction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einführung.",
        "accusative": "Ich sehe ___ Einführung.",
        "dative": "Ich gehe mit ___ Einführung."
      }
    },
    {
      "article": "die",
      "word": "Eingabe",
      "translation": {
        "tr": "Giriş",
        "en": "Input"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Eingabe.",
        "accusative": "Ich nehme ___ Eingabe.",
        "dative": "Vor ___ Eingabe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Eingang",
      "translation": {
        "tr": "Giriş",
        "en": "Entrance"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Eingang.",
        "accusative": "Ich kaufe ___ Eingang.",
        "dative": "Mit ___ Eingang arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Einheit",
      "translation": {
        "tr": "Birlik",
        "en": "Unity"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einheit.",
        "accusative": "Ich kaufe ___ Einheit.",
        "dative": "Mit ___ Einheit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Einrichtung",
      "translation": {
        "tr": "Tesis",
        "en": "Facility"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einrichtung.",
        "accusative": "Ich nehme ___ Einrichtung.",
        "dative": "Vor ___ Einrichtung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Einsatz",
      "translation": {
        "tr": "Kullanım",
        "en": "Use"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einsatz.",
        "accusative": "Ich nehme ___ Einsatz.",
        "dative": "Vor ___ Einsatz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Einstellung",
      "translation": {
        "tr": "Ayar",
        "en": "Setting"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einstellung.",
        "accusative": "Ich sehe ___ Einstellung.",
        "dative": "Ich gehe mit ___ Einstellung."
      }
    },
    {
      "article": "der",
      "word": "Eintritt",
      "translation": {
        "tr": "Giriş",
        "en": "Admission"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eintritt.",
        "accusative": "Ich suche ___ Eintritt.",
        "dative": "Neben ___ Eintritt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Einwanderung",
      "translation": {
        "tr": "Göçmenlik",
        "en": "Immigration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einwanderung.",
        "accusative": "Ich nehme ___ Einwanderung.",
        "dative": "Vor ___ Einwanderung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Einzelhandel",
      "translation": {
        "tr": "Perakende",
        "en": "Retail"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Einzelhandel.",
        "accusative": "Ich plane ___ Einzelhandel.",
        "dative": "Nach ___ Einzelhandel mache ich eine Pause."
      }
    },
    {
      "article": "das",
      "word": "Einzelzimmer",
      "translation": {
        "tr": "Tek kişilik oda",
        "en": "Single room"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Einzelzimmer.",
        "accusative": "Ich fotografiere ___ Einzelzimmer.",
        "dative": "Wir treffen uns bei ___ Einzelzimmer."
      }
    },
    {
      "article": "die",
      "word": "Eisenbahn",
      "translation": {
        "tr": "Demiryolu",
        "en": "Railway"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eisenbahn.",
        "accusative": "Ich suche ___ Eisenbahn.",
        "dative": "Neben ___ Eisenbahn liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Elektroauto",
      "translation": {
        "tr": "Elektrikli araba",
        "en": "Electric car"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Elektroauto.",
        "accusative": "Ich nehme ___ Elektroauto.",
        "dative": "Ich reise mit ___ Elektroauto."
      }
    },
    {
      "article": "der",
      "word": "Ellbogen",
      "translation": {
        "tr": "Dirsek",
        "en": "Elbow"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ellbogen.",
        "accusative": "Ich nehme ___ Ellbogen.",
        "dative": "Vor ___ Ellbogen steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Empfang",
      "translation": {
        "tr": "Resepsiyon",
        "en": "Reception"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Empfang.",
        "accusative": "Ich kaufe ___ Empfang.",
        "dative": "Mit ___ Empfang arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Empfänger",
      "translation": {
        "tr": "Alıcı",
        "en": "Receiver"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Empfänger.",
        "accusative": "Ich nehme ___ Empfänger.",
        "dative": "Vor ___ Empfänger steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Engländer",
      "translation": {
        "tr": "İngiliz",
        "en": "Englishman"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Engländer.",
        "accusative": "Ich treffe ___ Engländer.",
        "dative": "Ich helfe ___ Engländer."
      }
    },
    {
      "article": "die",
      "word": "Entdeckung",
      "translation": {
        "tr": "Keşif",
        "en": "Discovery"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Entdeckung.",
        "accusative": "Ich suche ___ Entdeckung.",
        "dative": "Neben ___ Entdeckung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Entfernung",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Entfernung zentral.",
        "accusative": "Wir besprechen ___ Entfernung.",
        "dative": "Mit ___ Entfernung wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Entscheidung",
      "translation": {
        "tr": "karar",
        "en": "decision"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Entscheidung.",
        "accusative": "Ich kaufe ___ Entscheidung.",
        "dative": "Mit ___ Entscheidung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Enttäuschung",
      "translation": {
        "tr": "Hayal kırıklığı",
        "en": "Disappointment"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Enttäuschung.",
        "accusative": "Ich organisiere ___ Enttäuschung.",
        "dative": "Nach ___ Enttäuschung fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Entwicklung",
      "translation": {
        "tr": "Geliştirme",
        "en": "Development"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Entwicklung.",
        "accusative": "Ich suche ___ Entwicklung.",
        "dative": "Neben ___ Entwicklung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Entwurf",
      "translation": {
        "tr": "Taslak",
        "en": "Draft"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Entwurf.",
        "accusative": "Ich suche ___ Entwurf.",
        "dative": "Neben ___ Entwurf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erfahrung",
      "translation": {
        "tr": "Deneyim",
        "en": "Experience"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Erfahrung.",
        "accusative": "Ich brauche ___ Erfahrung.",
        "dative": "Ich beschäftige mich mit ___ Erfahrung."
      }
    },
    {
      "article": "der",
      "word": "Erfinder",
      "translation": {
        "tr": "Mucit",
        "en": "Inventor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erfinder.",
        "accusative": "Ich sehe ___ Erfinder.",
        "dative": "Ich gehe mit ___ Erfinder."
      }
    },
    {
      "article": "die",
      "word": "Erfindung",
      "translation": {
        "tr": "Buluş",
        "en": "Invention"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erfindung.",
        "accusative": "Ich suche ___ Erfindung.",
        "dative": "Neben ___ Erfindung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ergänzung",
      "translation": {
        "tr": "Ek",
        "en": "Supplement"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ergänzung.",
        "accusative": "Ich kaufe ___ Ergänzung.",
        "dative": "Mit ___ Ergänzung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erinnerung",
      "translation": {
        "tr": "Bellek",
        "en": "Memory"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erinnerung.",
        "accusative": "Ich suche ___ Erinnerung.",
        "dative": "Neben ___ Erinnerung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erklärung",
      "translation": {
        "tr": "açıklama",
        "en": "explanation"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Erklärung.",
        "accusative": "Ich organisiere ___ Erklärung.",
        "dative": "Nach ___ Erklärung fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Erlaubnis",
      "translation": {
        "tr": "izin",
        "en": "permission"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erlaubnis.",
        "accusative": "Ich sehe ___ Erlaubnis.",
        "dative": "Ich gehe mit ___ Erlaubnis."
      }
    },
    {
      "article": "das",
      "word": "Erlebnis",
      "translation": {
        "tr": "Deneyim",
        "en": "Experience"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Erlebnis.",
        "accusative": "Ich brauche ___ Erlebnis.",
        "dative": "Ich beschäftige mich mit ___ Erlebnis."
      }
    },
    {
      "article": "die",
      "word": "Erleichterung",
      "translation": {
        "tr": "Rahatlama",
        "en": "Relief"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Erleichterung.",
        "accusative": "Ich suche ___ Erleichterung.",
        "dative": "Ich gehe mit ___ Erleichterung raus."
      }
    },
    {
      "article": "die",
      "word": "Ernährung",
      "translation": {
        "tr": "Beslenme",
        "en": "Nutrition"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ernährung.",
        "accusative": "Ich nehme ___ Ernährung.",
        "dative": "Vor ___ Ernährung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ernte",
      "translation": {
        "tr": "Hasat",
        "en": "Harvest"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ernte.",
        "accusative": "Ich kaufe ___ Ernte.",
        "dative": "Mit ___ Ernte arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Erzähler",
      "translation": {
        "tr": "Anlatıcı",
        "en": "Narrator"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erzähler.",
        "accusative": "Ich kaufe ___ Erzähler.",
        "dative": "Mit ___ Erzähler arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Esel",
      "translation": {
        "tr": "Eşek",
        "en": "Donkey"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Esel.",
        "accusative": "Ich suche ___ Esel.",
        "dative": "Ich telefoniere mit ___ Esel."
      }
    },
    {
      "article": "das",
      "word": "Experiment",
      "translation": {
        "tr": "Deney",
        "en": "Experiment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Experiment.",
        "accusative": "Ich suche ___ Experiment.",
        "dative": "Neben ___ Experiment liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Export",
      "translation": {
        "tr": "İhracat",
        "en": "Export"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Export.",
        "accusative": "Ich beobachte ___ Export.",
        "dative": "Ich stehe neben ___ Export."
      }
    },
    {
      "article": "das",
      "word": "Extra",
      "translation": {
        "tr": "Ekstra",
        "en": "Extra"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Extra.",
        "accusative": "Ich sehe ___ Extra.",
        "dative": "Ich gehe mit ___ Extra."
      }
    },
    {
      "article": "der",
      "word": "Fakt",
      "translation": {
        "tr": "Gerçek",
        "en": "Fact"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fakt.",
        "accusative": "Ich suche ___ Fakt.",
        "dative": "Neben ___ Fakt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Faktor",
      "translation": {
        "tr": "faktör",
        "en": "factor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Faktor.",
        "accusative": "Ich suche ___ Faktor.",
        "dative": "Neben ___ Faktor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Falle",
      "translation": {
        "tr": "tuzak",
        "en": "trap"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Falle.",
        "accusative": "Ich nehme ___ Falle.",
        "dative": "Vor ___ Falle steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fantasie",
      "translation": {
        "tr": "fantezi",
        "en": "fantasy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fantasie.",
        "accusative": "Ich nehme ___ Fantasie.",
        "dative": "Vor ___ Fantasie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Favorit",
      "translation": {
        "tr": "Favori",
        "en": "Favorite"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Favorit.",
        "accusative": "Ich nehme ___ Favorit.",
        "dative": "Vor ___ Favorit steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Fernsehen",
      "translation": {
        "tr": "Televizyon",
        "en": "Television"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Fernsehen.",
        "accusative": "Ich benutze ___ Fernsehen.",
        "dative": "Ich lerne mit ___ Fernsehen."
      }
    },
    {
      "article": "das",
      "word": "Festival",
      "translation": {
        "tr": "Festival",
        "en": "Festival"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Festival.",
        "accusative": "Ich suche ___ Festival.",
        "dative": "Neben ___ Festival liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Feuerwehr",
      "translation": {
        "tr": "İtfaiye",
        "en": "Fire department"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Feuerwehr.",
        "accusative": "Ich fotografiere ___ Feuerwehr.",
        "dative": "Ich bin bei ___ Feuerwehr."
      }
    },
    {
      "article": "der",
      "word": "Filter",
      "translation": {
        "tr": "Filtreler",
        "en": "Filters"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Filter.",
        "accusative": "Ich kaufe ___ Filter.",
        "dative": "Mit ___ Filter arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Fitness",
      "translation": {
        "tr": "Fitness",
        "en": "Fitness"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fitness.",
        "accusative": "Ich sehe ___ Fitness.",
        "dative": "Ich gehe mit ___ Fitness."
      }
    },
    {
      "article": "die",
      "word": "Fläche",
      "translation": {
        "tr": "alan",
        "en": "area"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fläche.",
        "accusative": "Ich nehme ___ Fläche.",
        "dative": "Vor ___ Fläche steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Folge",
      "translation": {
        "tr": "Bölüm",
        "en": "Episode"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Folge.",
        "accusative": "Ich sehe ___ Folge.",
        "dative": "Ich gehe mit ___ Folge."
      }
    },
    {
      "article": "die",
      "word": "Formel",
      "translation": {
        "tr": "Formül",
        "en": "Formula"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Formel.",
        "accusative": "Ich nehme ___ Formel.",
        "dative": "Vor ___ Formel steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Forum",
      "translation": {
        "tr": "Forum",
        "en": "Forum"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Forum.",
        "accusative": "Ich suche ___ Forum.",
        "dative": "Neben ___ Forum liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fracht",
      "translation": {
        "tr": "Navlun",
        "en": "Freight"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fracht.",
        "accusative": "Ich nehme ___ Fracht.",
        "dative": "Vor ___ Fracht steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fremde",
      "translation": {
        "tr": "Yabancılar",
        "en": "Strangers"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fremde.",
        "accusative": "Ich suche ___ Fremde.",
        "dative": "Neben ___ Fremde liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Frieden",
      "translation": {
        "tr": "Barış",
        "en": "Peace"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Frieden zentral.",
        "accusative": "Wir besprechen ___ Frieden.",
        "dative": "Mit ___ Frieden wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Frist",
      "translation": {
        "tr": "son tarih",
        "en": "deadline"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Frist.",
        "accusative": "Ich kenne ___ Frist.",
        "dative": "Ich spreche mit ___ Frist."
      }
    },
    {
      "article": "die",
      "word": "Front",
      "translation": {
        "tr": "ön",
        "en": "front"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Front.",
        "accusative": "Ich suche ___ Front.",
        "dative": "Neben ___ Front liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fund",
      "translation": {
        "tr": "Bul",
        "en": "Find"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fund.",
        "accusative": "Ich suche ___ Fund.",
        "dative": "Neben ___ Fund liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Funk",
      "translation": {
        "tr": "Funk",
        "en": "Funk"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Funk.",
        "accusative": "Ich suche ___ Funk.",
        "dative": "Neben ___ Funk liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Funke",
      "translation": {
        "tr": "Kıvılcım",
        "en": "Spark"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Funke.",
        "accusative": "Ich fotografiere ___ Funke.",
        "dative": "Wir treffen uns bei ___ Funke."
      }
    },
    {
      "article": "die",
      "word": "Funktion",
      "translation": {
        "tr": "İşlev",
        "en": "Function"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Funktion.",
        "accusative": "Ich suche ___ Funktion.",
        "dative": "Neben ___ Funktion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gang",
      "translation": {
        "tr": "dişli",
        "en": "gear"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gang.",
        "accusative": "Ich suche ___ Gang.",
        "dative": "Neben ___ Gang liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gastgeber",
      "translation": {
        "tr": "Sunucu",
        "en": "Host"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Gastgeber.",
        "accusative": "Ich sehe ___ Gastgeber.",
        "dative": "Ich sitze an ___ Gastgeber."
      }
    },
    {
      "article": "das",
      "word": "Gebäck",
      "translation": {
        "tr": "hamur işleri",
        "en": "pastries"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gebäck.",
        "accusative": "Ich nehme ___ Gebäck.",
        "dative": "Vor ___ Gebäck steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gebühr",
      "translation": {
        "tr": "Ücret",
        "en": "Fee"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gebühr.",
        "accusative": "Ich sehe ___ Gebühr.",
        "dative": "Ich gehe mit ___ Gebühr."
      }
    },
    {
      "article": "die",
      "word": "Geburt",
      "translation": {
        "tr": "doğum",
        "en": "birth"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geburt.",
        "accusative": "Ich suche ___ Geburt.",
        "dative": "Neben ___ Geburt liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gedicht",
      "translation": {
        "tr": "Şiir",
        "en": "Poem"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gedicht.",
        "accusative": "Ich nehme ___ Gedicht.",
        "dative": "Vor ___ Gedicht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Geduld",
      "translation": {
        "tr": "Sabır",
        "en": "Patience"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Geduld.",
        "accusative": "Ich sehe ___ Geduld.",
        "dative": "Ich gehe mit ___ Geduld."
      }
    },
    {
      "article": "die",
      "word": "Gefahr",
      "translation": {
        "tr": "Tehlike",
        "en": "Danger"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gefahr.",
        "accusative": "Ich suche ___ Gefahr.",
        "dative": "Neben ___ Gefahr liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gefängnis",
      "translation": {
        "tr": "Hapishane",
        "en": "Prison"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gefängnis.",
        "accusative": "Ich besuche ___ Gefängnis.",
        "dative": "Ich danke ___ Gefängnis."
      }
    },
    {
      "article": "die",
      "word": "Gegenwart",
      "translation": {
        "tr": "mevcut",
        "en": "present"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Gegenwart wichtig.",
        "accusative": "Wir verstehen ___ Gegenwart.",
        "dative": "Bei ___ Gegenwart brauche ich Hilfe."
      }
    },
    {
      "article": "das",
      "word": "Gehäuse",
      "translation": {
        "tr": "Konut",
        "en": "Housing"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gehäuse.",
        "accusative": "Ich suche ___ Gehäuse.",
        "dative": "Neben ___ Gehäuse liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gelände",
      "translation": {
        "tr": "Arazi",
        "en": "Terrain"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Gelände.",
        "accusative": "Ich beobachte ___ Gelände.",
        "dative": "Ich stehe vor ___ Gelände."
      }
    },
    {
      "article": "die",
      "word": "Gelegenheit",
      "translation": {
        "tr": "fırsat",
        "en": "opportunity"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gelegenheit.",
        "accusative": "Ich sehe ___ Gelegenheit.",
        "dative": "Ich gehe mit ___ Gelegenheit."
      }
    },
    {
      "article": "der",
      "word": "Geliebte",
      "translation": {
        "tr": "sevgili",
        "en": "Beloved"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Geliebte.",
        "accusative": "Ich brauche ___ Geliebte.",
        "dative": "Ich beschäftige mich mit ___ Geliebte."
      }
    },
    {
      "article": "das",
      "word": "Gemälde",
      "translation": {
        "tr": "Tablolar",
        "en": "Paintings"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gemälde.",
        "accusative": "Ich kaufe ___ Gemälde.",
        "dative": "Mit ___ Gemälde arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gemeinde",
      "translation": {
        "tr": "topluluk",
        "en": "community"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gemeinde.",
        "accusative": "Ich nehme ___ Gemeinde.",
        "dative": "Vor ___ Gemeinde steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gemeinschaft",
      "translation": {
        "tr": "Topluluk",
        "en": "Community"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gemeinschaft.",
        "accusative": "Ich kaufe ___ Gemeinschaft.",
        "dative": "Mit ___ Gemeinschaft arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "General",
      "translation": {
        "tr": "Genel",
        "en": "General"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ General.",
        "accusative": "Ich sehe ___ General.",
        "dative": "Ich gehe mit ___ General."
      }
    },
    {
      "article": "das",
      "word": "Gerücht",
      "translation": {
        "tr": "Söylenti",
        "en": "Rumor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gerücht.",
        "accusative": "Ich sehe ___ Gerücht.",
        "dative": "Ich gehe mit ___ Gerücht."
      }
    },
    {
      "article": "das",
      "word": "Gerüst",
      "translation": {
        "tr": "iskele",
        "en": "scaffolding"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gerüst.",
        "accusative": "Ich nehme ___ Gerüst.",
        "dative": "Vor ___ Gerüst steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Gesang",
      "translation": {
        "tr": "şarkı söylemek",
        "en": "singing"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesang.",
        "accusative": "Ich sehe ___ Gesang.",
        "dative": "Ich gehe mit ___ Gesang."
      }
    },
    {
      "article": "die",
      "word": "Gesellschaft",
      "translation": {
        "tr": "Toplum",
        "en": "Society"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Gesellschaft zentral.",
        "accusative": "Wir besprechen ___ Gesellschaft.",
        "dative": "Mit ___ Gesellschaft wird alles leichter."
      }
    },
    {
      "article": "das",
      "word": "Getreide",
      "translation": {
        "tr": "Tahıllar",
        "en": "Cereals"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Getreide.",
        "accusative": "Ich sehe ___ Getreide.",
        "dative": "Ich gehe mit ___ Getreide."
      }
    },
    {
      "article": "das",
      "word": "Gewächshaus",
      "translation": {
        "tr": "sera",
        "en": "greenhouse"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Gewächshaus.",
        "accusative": "Ich sehe ___ Gewächshaus.",
        "dative": "Ich bleibe in ___ Gewächshaus."
      }
    },
    {
      "article": "das",
      "word": "Gewehr",
      "translation": {
        "tr": "tüfek",
        "en": "rifle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gewehr.",
        "accusative": "Ich suche ___ Gewehr.",
        "dative": "Neben ___ Gewehr liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gewerbe",
      "translation": {
        "tr": "Ticari",
        "en": "Commercial"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Gewerbe.",
        "accusative": "Ich miete ___ Gewerbe.",
        "dative": "Ich fahre mit ___ Gewerbe."
      }
    },
    {
      "article": "die",
      "word": "Gewerkschaft",
      "translation": {
        "tr": "Birlik",
        "en": "Union"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gewerkschaft.",
        "accusative": "Ich kaufe ___ Gewerkschaft.",
        "dative": "Mit ___ Gewerkschaft arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gleichung",
      "translation": {
        "tr": "Denklem",
        "en": "Equation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gleichung.",
        "accusative": "Ich suche ___ Gleichung.",
        "dative": "Neben ___ Gleichung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Griff",
      "translation": {
        "tr": "sap",
        "en": "handle"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Griff.",
        "accusative": "Ich sehe ___ Griff.",
        "dative": "Ich gehe mit ___ Griff."
      }
    },
    {
      "article": "der",
      "word": "Grill",
      "translation": {
        "tr": "Izgara",
        "en": "Grill"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grill.",
        "accusative": "Ich sehe ___ Grill.",
        "dative": "Ich gehe mit ___ Grill."
      }
    },
    {
      "article": "die",
      "word": "Grippe",
      "translation": {
        "tr": "Grip",
        "en": "Flu"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grippe.",
        "accusative": "Ich suche ___ Grippe.",
        "dative": "Neben ___ Grippe liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Größe",
      "translation": {
        "tr": "boyut",
        "en": "size"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Größe.",
        "accusative": "Ich besuche ___ Größe.",
        "dative": "Ich danke ___ Größe."
      }
    },
    {
      "article": "die",
      "word": "Grube",
      "translation": {
        "tr": "çukur",
        "en": "pit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grube.",
        "accusative": "Ich sehe ___ Grube.",
        "dative": "Ich gehe mit ___ Grube."
      }
    },
    {
      "article": "der",
      "word": "Gründer",
      "translation": {
        "tr": "Kurucu",
        "en": "Founder"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gründer.",
        "accusative": "Ich kaufe ___ Gründer.",
        "dative": "Mit ___ Gründer arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Grundgesetz",
      "translation": {
        "tr": "Temel Hukuk",
        "en": "Basic Law"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grundgesetz.",
        "accusative": "Ich suche ___ Grundgesetz.",
        "dative": "Neben ___ Grundgesetz liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Hacker",
      "translation": {
        "tr": "Bilgisayar korsanları",
        "en": "Hackers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hacker.",
        "accusative": "Ich kaufe ___ Hacker.",
        "dative": "Mit ___ Hacker arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Hagel",
      "translation": {
        "tr": "dolu",
        "en": "Hail"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hagel.",
        "accusative": "Ich nehme ___ Hagel.",
        "dative": "Vor ___ Hagel steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Halbfinale",
      "translation": {
        "tr": "Yarı finaller",
        "en": "Semifinals"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Halbfinale.",
        "accusative": "Ich kaufe ___ Halbfinale.",
        "dative": "Mit ___ Halbfinale arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Halbzeit",
      "translation": {
        "tr": "İlk yarı",
        "en": "Halftime"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Halbzeit.",
        "accusative": "Ich nehme ___ Halbzeit.",
        "dative": "Vor ___ Halbzeit steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Halt",
      "translation": {
        "tr": "Durdur",
        "en": "Stop"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Halt.",
        "accusative": "Ich kaufe ___ Halt.",
        "dative": "Mit ___ Halt arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Handel",
      "translation": {
        "tr": "Ticaret",
        "en": "Trade"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Handel.",
        "accusative": "Ich parke ___ Handel.",
        "dative": "Ich komme mit ___ Handel."
      }
    },
    {
      "article": "der",
      "word": "Händler",
      "translation": {
        "tr": "Bayi",
        "en": "Dealer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Händler.",
        "accusative": "Ich sehe ___ Händler.",
        "dative": "Ich gehe mit ___ Händler."
      }
    },
    {
      "article": "die",
      "word": "Handlung",
      "translation": {
        "tr": "arsa",
        "en": "plot"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Handlung.",
        "accusative": "Ich suche ___ Handlung.",
        "dative": "Neben ___ Handlung liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Handwerk",
      "translation": {
        "tr": "El sanatları",
        "en": "Crafts"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Handwerk.",
        "accusative": "Ich kaufe ___ Handwerk.",
        "dative": "Mit ___ Handwerk arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Hanf",
      "translation": {
        "tr": "kenevir",
        "en": "Hemp"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hanf.",
        "accusative": "Ich nehme ___ Hanf.",
        "dative": "Vor ___ Hanf steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Hang",
      "translation": {
        "tr": "Asın",
        "en": "Hang"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hang.",
        "accusative": "Ich suche ___ Hang.",
        "dative": "Neben ___ Hang liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Haube",
      "translation": {
        "tr": "başlık",
        "en": "hood"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Haube.",
        "accusative": "Ich kaufe ___ Haube.",
        "dative": "Mit ___ Haube arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Haufen",
      "translation": {
        "tr": "yığın",
        "en": "Heap"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Haufen.",
        "accusative": "Ich kaufe ___ Haufen.",
        "dative": "Mit ___ Haufen arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Hauptsache",
      "translation": {
        "tr": "Ana şey",
        "en": "Main thing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hauptsache.",
        "accusative": "Ich kaufe ___ Hauptsache.",
        "dative": "Mit ___ Hauptsache arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Haushalt",
      "translation": {
        "tr": "ev",
        "en": "household"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Haushalt.",
        "accusative": "Ich suche ___ Haushalt.",
        "dative": "Ich bin in ___ Haushalt."
      }
    },
    {
      "article": "das",
      "word": "Heim",
      "translation": {
        "tr": "Ana Sayfa",
        "en": "Home"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Heim.",
        "accusative": "Ich besuche ___ Heim.",
        "dative": "Ich warte vor ___ Heim."
      }
    },
    {
      "article": "die",
      "word": "Heimat",
      "translation": {
        "tr": "Vatan",
        "en": "Homeland"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Heimat.",
        "accusative": "Ich besuche ___ Heimat.",
        "dative": "Ich warte vor ___ Heimat."
      }
    },
    {
      "article": "die",
      "word": "Heizung",
      "translation": {
        "tr": "Isıtma",
        "en": "Heating"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Heizung.",
        "accusative": "Ich suche ___ Heizung.",
        "dative": "Neben ___ Heizung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Helfer",
      "translation": {
        "tr": "yardımcı",
        "en": "helper"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Helfer.",
        "accusative": "Ich sehe ___ Helfer.",
        "dative": "Ich gehe mit ___ Helfer."
      }
    },
    {
      "article": "der",
      "word": "Hersteller",
      "translation": {
        "tr": "Üretici",
        "en": "Manufacturer"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Hersteller.",
        "accusative": "Ich treffe ___ Hersteller.",
        "dative": "Ich helfe ___ Hersteller."
      }
    },
    {
      "article": "das",
      "word": "Heu",
      "translation": {
        "tr": "Saman",
        "en": "Hay"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Heu.",
        "accusative": "Ich kenne ___ Heu.",
        "dative": "Ich spreche mit ___ Heu."
      }
    },
    {
      "article": "der",
      "word": "Hintergrund",
      "translation": {
        "tr": "arka plan",
        "en": "background"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Hintergrund.",
        "accusative": "Ich plane ___ Hintergrund.",
        "dative": "Nach ___ Hintergrund mache ich eine Pause."
      }
    },
    {
      "article": "der",
      "word": "Hinweis",
      "translation": {
        "tr": "Not",
        "en": "Note"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Hinweis.",
        "accusative": "Ich schreibe ___ Hinweis.",
        "dative": "In ___ Hinweis steht alles."
      }
    },
    {
      "article": "das",
      "word": "Hirn",
      "translation": {
        "tr": "beyin",
        "en": "brain"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Hirn.",
        "accusative": "Ich fotografiere ___ Hirn.",
        "dative": "Ich bin bei ___ Hirn."
      }
    },
    {
      "article": "die",
      "word": "Höflichkeit",
      "translation": {
        "tr": "Nezaket",
        "en": "Courtesy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Höflichkeit.",
        "accusative": "Ich kaufe ___ Höflichkeit.",
        "dative": "Mit ___ Höflichkeit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Hölle",
      "translation": {
        "tr": "Cehennem",
        "en": "Hell"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hölle.",
        "accusative": "Ich sehe ___ Hölle.",
        "dative": "Ich gehe mit ___ Hölle."
      }
    },
    {
      "article": "der",
      "word": "Hörer",
      "translation": {
        "tr": "dinleyici",
        "en": "listener"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hörer.",
        "accusative": "Ich nehme ___ Hörer.",
        "dative": "Vor ___ Hörer steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Horizont",
      "translation": {
        "tr": "ufuk",
        "en": "horizon"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Horizont.",
        "accusative": "Ich sehe ___ Horizont.",
        "dative": "Ich gehe mit ___ Horizont."
      }
    },
    {
      "article": "das",
      "word": "Hormon",
      "translation": {
        "tr": "hormon",
        "en": "hormone"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hormon.",
        "accusative": "Ich nehme ___ Hormon.",
        "dative": "Vor ___ Hormon steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Horoskop",
      "translation": {
        "tr": "Burç",
        "en": "Horoscope"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Horoskop.",
        "accusative": "Ich nehme ___ Horoskop.",
        "dative": "Vor ___ Horoskop steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Horror",
      "translation": {
        "tr": "Korku",
        "en": "Horror"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Horror.",
        "accusative": "Ich suche ___ Horror.",
        "dative": "Neben ___ Horror liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Hörsaal",
      "translation": {
        "tr": "konferans salonu",
        "en": "lecture hall"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hörsaal.",
        "accusative": "Ich sehe ___ Hörsaal.",
        "dative": "Ich gehe mit ___ Hörsaal."
      }
    },
    {
      "article": "die",
      "word": "Hüfte",
      "translation": {
        "tr": "kalça",
        "en": "hip"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hüfte.",
        "accusative": "Ich suche ___ Hüfte.",
        "dative": "Neben ___ Hüfte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hülle",
      "translation": {
        "tr": "kapak",
        "en": "cover"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hülle.",
        "accusative": "Ich sehe ___ Hülle.",
        "dative": "Ich gehe mit ___ Hülle."
      }
    },
    {
      "article": "der",
      "word": "Hummer",
      "translation": {
        "tr": "Istakoz",
        "en": "Lobster"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hummer.",
        "accusative": "Ich kaufe ___ Hummer.",
        "dative": "Mit ___ Hummer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Hürde",
      "translation": {
        "tr": "engel",
        "en": "hurdle"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hürde.",
        "accusative": "Ich kaufe ___ Hürde.",
        "dative": "Mit ___ Hürde arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Idol",
      "translation": {
        "tr": "İdol",
        "en": "Idol"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Idol.",
        "accusative": "Ich suche ___ Idol.",
        "dative": "Neben ___ Idol liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Indianer",
      "translation": {
        "tr": "Hintliler",
        "en": "Indians"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Indianer.",
        "accusative": "Ich sehe ___ Indianer.",
        "dative": "Ich gehe mit ___ Indianer."
      }
    },
    {
      "article": "die",
      "word": "Industrie",
      "translation": {
        "tr": "Endüstri",
        "en": "Industry"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Industrie.",
        "accusative": "Ich starte ___ Industrie.",
        "dative": "Bei ___ Industrie lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Inhalt",
      "translation": {
        "tr": "İçerik",
        "en": "Content"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Inhalt.",
        "accusative": "Ich kaufe ___ Inhalt.",
        "dative": "Mit ___ Inhalt arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Interview",
      "translation": {
        "tr": "Röportaj",
        "en": "Interview"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Interview.",
        "accusative": "Ich erwarte ___ Interview.",
        "dative": "Vor ___ Interview bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Islam",
      "translation": {
        "tr": "İslâm",
        "en": "Islam"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Islam.",
        "accusative": "Ich sehe ___ Islam.",
        "dative": "Ich gehe mit ___ Islam."
      }
    },
    {
      "article": "der",
      "word": "Italiener",
      "translation": {
        "tr": "İtalyanlar",
        "en": "Italians"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Italiener.",
        "accusative": "Ich sehe ___ Italiener.",
        "dative": "Ich gehe mit ___ Italiener."
      }
    },
    {
      "article": "der",
      "word": "Jäger",
      "translation": {
        "tr": "avcı",
        "en": "hunter"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Jäger.",
        "accusative": "Ich sehe ___ Jäger.",
        "dative": "Ich gehe mit ___ Jäger."
      }
    },
    {
      "article": "das",
      "word": "Jahrhundert",
      "translation": {
        "tr": "yüzyıl",
        "en": "century"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Jahrhundert.",
        "accusative": "Ich kaufe ___ Jahrhundert.",
        "dative": "Mit ___ Jahrhundert arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Jahrzehnt",
      "translation": {
        "tr": "on yıl",
        "en": "decade"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Jahrzehnt.",
        "accusative": "Ich sehe ___ Jahrzehnt.",
        "dative": "Ich gehe mit ___ Jahrzehnt."
      }
    },
    {
      "article": "das",
      "word": "Japanisch",
      "translation": {
        "tr": "Japonca",
        "en": "Japanese"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Japanisch.",
        "accusative": "Ich suche ___ Japanisch.",
        "dative": "Neben ___ Japanisch liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Jet",
      "translation": {
        "tr": "Jet",
        "en": "Jet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jet.",
        "accusative": "Ich suche ___ Jet.",
        "dative": "Neben ___ Jet liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Journalist",
      "translation": {
        "tr": "Gazeteci",
        "en": "Journalist"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Journalist.",
        "accusative": "Ich besuche ___ Journalist.",
        "dative": "Ich danke ___ Journalist."
      }
    },
    {
      "article": "der",
      "word": "Jugendliche",
      "translation": {
        "tr": "gençler",
        "en": "teenagers"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Jugendliche.",
        "accusative": "Ich erwarte ___ Jugendliche.",
        "dative": "Vor ___ Jugendliche bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Kandidat",
      "translation": {
        "tr": "aday",
        "en": "candidate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kandidat.",
        "accusative": "Ich nehme ___ Kandidat.",
        "dative": "Vor ___ Kandidat steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kanzler",
      "translation": {
        "tr": "Şansölye",
        "en": "Chancellor"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Kanzler.",
        "accusative": "Ich erkläre ___ Kanzler.",
        "dative": "An ___ Kanzler arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Kapitän",
      "translation": {
        "tr": "Kaptan",
        "en": "Captain"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kapitän.",
        "accusative": "Ich kaufe ___ Kapitän.",
        "dative": "Mit ___ Kapitän arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Karate",
      "translation": {
        "tr": "karate",
        "en": "karate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Karate.",
        "accusative": "Ich suche ___ Karate.",
        "dative": "Neben ___ Karate liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Katalog",
      "translation": {
        "tr": "Katalog",
        "en": "Catalog"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Katalog.",
        "accusative": "Ich beobachte ___ Katalog.",
        "dative": "Ich stehe neben ___ Katalog."
      }
    },
    {
      "article": "der",
      "word": "Kauf",
      "translation": {
        "tr": "satın alma",
        "en": "purchase"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kauf.",
        "accusative": "Ich sehe ___ Kauf.",
        "dative": "Ich gehe mit ___ Kauf."
      }
    },
    {
      "article": "der",
      "word": "Kegel",
      "translation": {
        "tr": "Koni",
        "en": "Cone"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kegel.",
        "accusative": "Ich nehme ___ Kegel.",
        "dative": "Vor ___ Kegel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kehle",
      "translation": {
        "tr": "boğaz",
        "en": "throat"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kehle.",
        "accusative": "Ich kaufe ___ Kehle.",
        "dative": "Mit ___ Kehle arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Kerl",
      "translation": {
        "tr": "adam",
        "en": "guy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kerl.",
        "accusative": "Ich kaufe ___ Kerl.",
        "dative": "Mit ___ Kerl arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Kern",
      "translation": {
        "tr": "çekirdek",
        "en": "core"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kern.",
        "accusative": "Ich kaufe ___ Kern.",
        "dative": "Mit ___ Kern arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Kilogramm",
      "translation": {
        "tr": "kilogram",
        "en": "kilograms"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kilogramm.",
        "accusative": "Ich sehe ___ Kilogramm.",
        "dative": "Ich gehe mit ___ Kilogramm."
      }
    },
    {
      "article": "die",
      "word": "Kindheit",
      "translation": {
        "tr": "çocukluk",
        "en": "childhood"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Kindheit.",
        "accusative": "Ich kenne ___ Kindheit.",
        "dative": "Ich spreche mit ___ Kindheit."
      }
    },
    {
      "article": "der",
      "word": "Klang",
      "translation": {
        "tr": "ses",
        "en": "sound"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Klang.",
        "accusative": "Ich sehe ___ Klang.",
        "dative": "Ich gehe mit ___ Klang."
      }
    },
    {
      "article": "der",
      "word": "Klick",
      "translation": {
        "tr": "Tıklayın",
        "en": "Click"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Klick.",
        "accusative": "Ich sehe ___ Klick.",
        "dative": "Ich gehe mit ___ Klick."
      }
    },
    {
      "article": "das",
      "word": "Klima",
      "translation": {
        "tr": "İklim",
        "en": "Climate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klima.",
        "accusative": "Ich nehme ___ Klima.",
        "dative": "Vor ___ Klima steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Klinge",
      "translation": {
        "tr": "Bıçak",
        "en": "Blade"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Klinge.",
        "accusative": "Ich sehe ___ Klinge.",
        "dative": "Ich gehe mit ___ Klinge."
      }
    },
    {
      "article": "das",
      "word": "Kloster",
      "translation": {
        "tr": "Manastır",
        "en": "Monastery"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kloster.",
        "accusative": "Ich besuche ___ Kloster.",
        "dative": "Ich danke ___ Kloster."
      }
    },
    {
      "article": "der",
      "word": "Klub",
      "translation": {
        "tr": "Kulüp",
        "en": "Club"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Klub.",
        "accusative": "Ich suche ___ Klub.",
        "dative": "Neben ___ Klub liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Knabe",
      "translation": {
        "tr": "oğlan",
        "en": "boy"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Knabe.",
        "accusative": "Ich sehe ___ Knabe.",
        "dative": "Ich antworte ___ Knabe."
      }
    },
    {
      "article": "der",
      "word": "Knall",
      "translation": {
        "tr": "Patlama",
        "en": "Bang"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Knall.",
        "accusative": "Ich sehe ___ Knall.",
        "dative": "Ich gehe mit ___ Knall."
      }
    },
    {
      "article": "der",
      "word": "Knast",
      "translation": {
        "tr": "Hapishane",
        "en": "Jail"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Knast.",
        "accusative": "Ich nehme ___ Knast.",
        "dative": "Vor ___ Knast steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Knöchel",
      "translation": {
        "tr": "ayak bileği",
        "en": "ankle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Knöchel.",
        "accusative": "Ich suche ___ Knöchel.",
        "dative": "Neben ___ Knöchel liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kohle",
      "translation": {
        "tr": "Kömür",
        "en": "Coal"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kohle.",
        "accusative": "Ich sehe ___ Kohle.",
        "dative": "Ich gehe mit ___ Kohle."
      }
    },
    {
      "article": "die",
      "word": "Kolonie",
      "translation": {
        "tr": "koloni",
        "en": "colony"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kolonie.",
        "accusative": "Ich nehme ___ Kolonie.",
        "dative": "Vor ___ Kolonie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Komfort",
      "translation": {
        "tr": "Konfor",
        "en": "Comfort"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Komfort.",
        "accusative": "Ich sehe ___ Komfort.",
        "dative": "Ich gehe mit ___ Komfort."
      }
    },
    {
      "article": "der",
      "word": "Kommentar",
      "translation": {
        "tr": "Yorum",
        "en": "Comment"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kommentar.",
        "accusative": "Ich kaufe ___ Kommentar.",
        "dative": "Mit ___ Kommentar arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Kondom",
      "translation": {
        "tr": "prezervatif",
        "en": "condom"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kondom.",
        "accusative": "Ich suche ___ Kondom.",
        "dative": "Neben ___ Kondom liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Konflikt",
      "translation": {
        "tr": "Çatışma",
        "en": "Conflict"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Konflikt.",
        "accusative": "Ich suche ___ Konflikt.",
        "dative": "Neben ___ Konflikt liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Königreich",
      "translation": {
        "tr": "Krallık",
        "en": "Kingdom"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Königreich.",
        "accusative": "Ich nehme ___ Königreich.",
        "dative": "Vor ___ Königreich steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Konsum",
      "translation": {
        "tr": "Tüketim",
        "en": "Consumption"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konsum.",
        "accusative": "Ich sehe ___ Konsum.",
        "dative": "Ich gehe mit ___ Konsum."
      }
    },
    {
      "article": "das",
      "word": "Konzept",
      "translation": {
        "tr": "kavram",
        "en": "concept"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Konzept.",
        "accusative": "Ich nehme ___ Konzept.",
        "dative": "Vor ___ Konzept steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Korrektur",
      "translation": {
        "tr": "Düzeltme",
        "en": "Correction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Korrektur.",
        "accusative": "Ich nehme ___ Korrektur.",
        "dative": "Vor ___ Korrektur steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Korridor",
      "translation": {
        "tr": "Koridor",
        "en": "Corridor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Korridor.",
        "accusative": "Ich suche ___ Korridor.",
        "dative": "Neben ___ Korridor liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Kraftwerk",
      "translation": {
        "tr": "enerji santrali",
        "en": "power plant"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Kraftwerk.",
        "accusative": "Ich organisiere ___ Kraftwerk.",
        "dative": "Nach ___ Kraftwerk fahre ich nach Hause."
      }
    },
    {
      "article": "der",
      "word": "Krampf",
      "translation": {
        "tr": "kramp",
        "en": "cramp"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Krampf.",
        "accusative": "Ich suche ___ Krampf.",
        "dative": "Neben ___ Krampf liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kranke",
      "translation": {
        "tr": "Hasta",
        "en": "Sick"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kranke.",
        "accusative": "Ich suche ___ Kranke.",
        "dative": "Neben ___ Kranke liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kredit",
      "translation": {
        "tr": "Kredi",
        "en": "Credit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kredit.",
        "accusative": "Ich suche ___ Kredit.",
        "dative": "Neben ___ Kredit liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kreide",
      "translation": {
        "tr": "Tebeşir",
        "en": "Chalk"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kreide.",
        "accusative": "Ich kaufe ___ Kreide.",
        "dative": "Mit ___ Kreide arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Krimi",
      "translation": {
        "tr": "Suç",
        "en": "Crime"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Krimi.",
        "accusative": "Ich sehe ___ Krimi.",
        "dative": "Ich gehe mit ___ Krimi."
      }
    },
    {
      "article": "der",
      "word": "Kriminelle",
      "translation": {
        "tr": "Suçlular",
        "en": "Criminals"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kriminelle.",
        "accusative": "Ich sehe ___ Kriminelle.",
        "dative": "Ich gehe mit ___ Kriminelle."
      }
    },
    {
      "article": "die",
      "word": "Krise",
      "translation": {
        "tr": "Kriz",
        "en": "Crisis"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Krise.",
        "accusative": "Ich nehme ___ Krise.",
        "dative": "Vor ___ Krise steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kritik",
      "translation": {
        "tr": "Eleştiri",
        "en": "Criticism"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kritik.",
        "accusative": "Ich kaufe ___ Kritik.",
        "dative": "Mit ___ Kritik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Kritiker",
      "translation": {
        "tr": "Eleştirmen",
        "en": "Critic"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kritiker.",
        "accusative": "Ich nehme ___ Kritiker.",
        "dative": "Vor ___ Kritiker steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kultur",
      "translation": {
        "tr": "Kültür",
        "en": "Culture"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Kultur wichtig.",
        "accusative": "Wir verstehen ___ Kultur.",
        "dative": "Bei ___ Kultur brauche ich Hilfe."
      }
    },
    {
      "article": "der",
      "word": "Kumpel",
      "translation": {
        "tr": "dostum",
        "en": "Buddy"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kumpel.",
        "accusative": "Ich suche ___ Kumpel.",
        "dative": "Neben ___ Kumpel liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kunst",
      "translation": {
        "tr": "Sanat",
        "en": "Art"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kunst.",
        "accusative": "Ich sehe ___ Kunst.",
        "dative": "Ich gehe mit ___ Kunst."
      }
    },
    {
      "article": "der",
      "word": "Künstler",
      "translation": {
        "tr": "Sanatçı",
        "en": "Artist"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Künstler.",
        "accusative": "Ich besuche ___ Künstler.",
        "dative": "Ich danke ___ Künstler."
      }
    },
    {
      "article": "die",
      "word": "Kur",
      "translation": {
        "tr": "tedavi",
        "en": "cure"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kur.",
        "accusative": "Ich kaufe ___ Kur.",
        "dative": "Mit ___ Kur arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Labor",
      "translation": {
        "tr": "Laboratuvar",
        "en": "Laboratory"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Labor.",
        "accusative": "Ich nehme ___ Labor.",
        "dative": "Vor ___ Labor steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Lage",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Lage.",
        "accusative": "Ich sehe ___ Lage.",
        "dative": "Ich komme mit ___ Lage."
      }
    },
    {
      "article": "das",
      "word": "Lager",
      "translation": {
        "tr": "Depo",
        "en": "Warehouse"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Lager.",
        "accusative": "Ich fotografiere ___ Lager.",
        "dative": "Wir treffen uns bei ___ Lager."
      }
    },
    {
      "article": "die",
      "word": "Landschaft",
      "translation": {
        "tr": "manzara",
        "en": "landscape"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Landschaft.",
        "accusative": "Ich sehe ___ Landschaft.",
        "dative": "Ich antworte ___ Landschaft."
      }
    },
    {
      "article": "der",
      "word": "Landwirt",
      "translation": {
        "tr": "çiftçi",
        "en": "farmer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Landwirt.",
        "accusative": "Ich suche ___ Landwirt.",
        "dative": "Neben ___ Landwirt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Landwirtschaft",
      "translation": {
        "tr": "Tarım",
        "en": "Agriculture"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Landwirtschaft zentral.",
        "accusative": "Wir besprechen ___ Landwirtschaft.",
        "dative": "Mit ___ Landwirtschaft wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Lärm",
      "translation": {
        "tr": "gürültü",
        "en": "noise"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lärm.",
        "accusative": "Ich nehme ___ Lärm.",
        "dative": "Vor ___ Lärm steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Last",
      "translation": {
        "tr": "yük",
        "en": "load"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Last.",
        "accusative": "Ich suche ___ Last.",
        "dative": "Neben ___ Last liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Laster",
      "translation": {
        "tr": "Yardımcısı",
        "en": "Vice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Laster.",
        "accusative": "Ich sehe ___ Laster.",
        "dative": "Ich gehe mit ___ Laster."
      }
    },
    {
      "article": "die",
      "word": "Latte",
      "translation": {
        "tr": "Latte",
        "en": "Latte"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Latte.",
        "accusative": "Ich sehe ___ Latte.",
        "dative": "Ich gehe mit ___ Latte."
      }
    },
    {
      "article": "die",
      "word": "Lautstärke",
      "translation": {
        "tr": "Hacim",
        "en": "Volume"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Lautstärke.",
        "accusative": "Ich kaufe ___ Lautstärke.",
        "dative": "Mit ___ Lautstärke arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Lebewesen",
      "translation": {
        "tr": "canlılar",
        "en": "living beings"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lebewesen.",
        "accusative": "Ich nehme ___ Lebewesen.",
        "dative": "Vor ___ Lebewesen steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Leck",
      "translation": {
        "tr": "Sızıntı",
        "en": "Leak"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Leck.",
        "accusative": "Ich sehe ___ Leck.",
        "dative": "Ich gehe mit ___ Leck."
      }
    },
    {
      "article": "die",
      "word": "Leere",
      "translation": {
        "tr": "Boşluk",
        "en": "Emptiness"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Leere.",
        "accusative": "Ich kaufe ___ Leere.",
        "dative": "Mit ___ Leere arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lehre",
      "translation": {
        "tr": "öğretim",
        "en": "teaching"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lehre.",
        "accusative": "Ich probiere ___ Lehre.",
        "dative": "Ich beginne mit ___ Lehre."
      }
    },
    {
      "article": "das",
      "word": "Leid",
      "translation": {
        "tr": "Acı çekmek",
        "en": "Suffering"
      },
      "casePrompts": {
        "nominative": "Im Laden ist ___ Leid.",
        "accusative": "Ich kaufe ___ Leid.",
        "dative": "Zu ___ Leid passt die Tasche."
      }
    },
    {
      "article": "die",
      "word": "Leiter",
      "translation": {
        "tr": "Kafa",
        "en": "Head"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Leiter.",
        "accusative": "Ich nehme ___ Leiter.",
        "dative": "Vor ___ Leiter steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lesen",
      "translation": {
        "tr": "Oku",
        "en": "Read"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lesen.",
        "accusative": "Ich nehme ___ Lesen.",
        "dative": "Vor ___ Lesen steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Lexikon",
      "translation": {
        "tr": "Sözlük",
        "en": "Lexicon"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lexikon.",
        "accusative": "Ich sehe ___ Lexikon.",
        "dative": "Ich gehe mit ___ Lexikon."
      }
    },
    {
      "article": "der",
      "word": "Lieferant",
      "translation": {
        "tr": "Tedarikçi",
        "en": "Supplier"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lieferant.",
        "accusative": "Ich suche ___ Lieferant.",
        "dative": "Neben ___ Lieferant liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Liga",
      "translation": {
        "tr": "Lig",
        "en": "League"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Liga.",
        "accusative": "Ich suche ___ Liga.",
        "dative": "Neben ___ Liga liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Lkw",
      "translation": {
        "tr": "Kamyon",
        "en": "Truck"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Lkw.",
        "accusative": "Ich miete ___ Lkw.",
        "dative": "Ich fahre mit ___ Lkw."
      }
    },
    {
      "article": "der",
      "word": "Lokführer",
      "translation": {
        "tr": "Tren sürücüsü",
        "en": "Train driver"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Lokführer.",
        "accusative": "Ich sehe ___ Lokführer.",
        "dative": "Ich antworte ___ Lokführer."
      }
    },
    {
      "article": "die",
      "word": "Lösung",
      "translation": {
        "tr": "Çözüm",
        "en": "Solution"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Lösung.",
        "accusative": "Ich beobachte ___ Lösung.",
        "dative": "Ich stehe vor ___ Lösung."
      }
    },
    {
      "article": "die",
      "word": "Lotterie",
      "translation": {
        "tr": "Piyango",
        "en": "Lottery"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lotterie.",
        "accusative": "Ich nehme ___ Lotterie.",
        "dative": "Vor ___ Lotterie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Macht",
      "translation": {
        "tr": "Güç",
        "en": "Power"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Macht.",
        "accusative": "Ich sehe ___ Macht.",
        "dative": "Ich gehe mit ___ Macht."
      }
    },
    {
      "article": "das",
      "word": "Make-up",
      "translation": {
        "tr": "makyaj",
        "en": "makeup"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Make-up.",
        "accusative": "Ich nehme ___ Make-up.",
        "dative": "Vor ___ Make-up steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Manager",
      "translation": {
        "tr": "Yöneticiler",
        "en": "Managers"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Manager.",
        "accusative": "Ich treffe ___ Manager.",
        "dative": "Ich helfe ___ Manager."
      }
    },
    {
      "article": "das",
      "word": "Männchen",
      "translation": {
        "tr": "erkek",
        "en": "male"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Männchen.",
        "accusative": "Ich suche ___ Männchen.",
        "dative": "Neben ___ Männchen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mannschaft",
      "translation": {
        "tr": "takım",
        "en": "team"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Mannschaft.",
        "accusative": "Ich kenne ___ Mannschaft.",
        "dative": "Ich spreche mit ___ Mannschaft."
      }
    },
    {
      "article": "der",
      "word": "Marathon",
      "translation": {
        "tr": "Maraton",
        "en": "Marathon"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Marathon.",
        "accusative": "Ich suche ___ Marathon.",
        "dative": "Neben ___ Marathon liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Mars",
      "translation": {
        "tr": "Mars",
        "en": "Mars"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mars.",
        "accusative": "Ich suche ___ Mars.",
        "dative": "Neben ___ Mars liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Maßnahme",
      "translation": {
        "tr": "Ölçü",
        "en": "Measure"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Maßnahme.",
        "accusative": "Ich sehe ___ Maßnahme.",
        "dative": "Ich gehe mit ___ Maßnahme."
      }
    },
    {
      "article": "das",
      "word": "Match",
      "translation": {
        "tr": "Maç",
        "en": "Match"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Match.",
        "accusative": "Ich suche ___ Match.",
        "dative": "Neben ___ Match liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mathematik",
      "translation": {
        "tr": "Matematik",
        "en": "Mathematics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mathematik.",
        "accusative": "Ich kaufe ___ Mathematik.",
        "dative": "Mit ___ Mathematik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Maulwurf",
      "translation": {
        "tr": "Köstebek",
        "en": "Mole"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Maulwurf.",
        "accusative": "Ich sehe ___ Maulwurf.",
        "dative": "Ich gehe mit ___ Maulwurf."
      }
    },
    {
      "article": "der",
      "word": "Mechaniker",
      "translation": {
        "tr": "Tamirci",
        "en": "Mechanic"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mechaniker.",
        "accusative": "Ich nehme ___ Mechaniker.",
        "dative": "Vor ___ Mechaniker steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Medaille",
      "translation": {
        "tr": "Madalya",
        "en": "Medal"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Medaille.",
        "accusative": "Ich sehe ___ Medaille.",
        "dative": "Ich gehe mit ___ Medaille."
      }
    },
    {
      "article": "das",
      "word": "Medikament",
      "translation": {
        "tr": "ilaç",
        "en": "medication"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Medikament.",
        "accusative": "Ich sehe ___ Medikament.",
        "dative": "Ich komme mit ___ Medikament."
      }
    },
    {
      "article": "die",
      "word": "Mehrheit",
      "translation": {
        "tr": "Çoğunluk",
        "en": "Majority"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mehrheit.",
        "accusative": "Ich nehme ___ Mehrheit.",
        "dative": "Vor ___ Mehrheit steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Mehrwertsteuer",
      "translation": {
        "tr": "KDV",
        "en": "VAT"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mehrwertsteuer.",
        "accusative": "Ich nehme ___ Mehrwertsteuer.",
        "dative": "Vor ___ Mehrwertsteuer steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Merkmal",
      "translation": {
        "tr": "özellik",
        "en": "feature"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Merkmal.",
        "accusative": "Ich nehme ___ Merkmal.",
        "dative": "Vor ___ Merkmal steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Messe",
      "translation": {
        "tr": "Fuar",
        "en": "Fair"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Messe.",
        "accusative": "Ich entdecke ___ Messe.",
        "dative": "Ich gehe zu ___ Messe."
      }
    },
    {
      "article": "die",
      "word": "Messung",
      "translation": {
        "tr": "Ölçüm",
        "en": "Measurement"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Messung.",
        "accusative": "Ich beobachte ___ Messung.",
        "dative": "Ich stehe vor ___ Messung."
      }
    },
    {
      "article": "die",
      "word": "Methode",
      "translation": {
        "tr": "Yöntem",
        "en": "Method"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Methode zentral.",
        "accusative": "Wir besprechen ___ Methode.",
        "dative": "Mit ___ Methode wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Miene",
      "translation": {
        "tr": "Mien",
        "en": "Mien"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Miene.",
        "accusative": "Ich kaufe ___ Miene.",
        "dative": "Mit ___ Miene arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Mikroskop",
      "translation": {
        "tr": "Mikroskop",
        "en": "Microscope"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mikroskop.",
        "accusative": "Ich nehme ___ Mikroskop.",
        "dative": "Vor ___ Mikroskop steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Militär",
      "translation": {
        "tr": "askeri",
        "en": "military"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Militär.",
        "accusative": "Ich suche ___ Militär.",
        "dative": "Neben ___ Militär liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Milliarde",
      "translation": {
        "tr": "milyar",
        "en": "billion"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Milliarde.",
        "accusative": "Ich sehe ___ Milliarde.",
        "dative": "Ich komme mit ___ Milliarde."
      }
    },
    {
      "article": "die",
      "word": "Million",
      "translation": {
        "tr": "milyon",
        "en": "million"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Million.",
        "accusative": "Ich sehe ___ Million.",
        "dative": "Ich komme mit ___ Million."
      }
    },
    {
      "article": "der",
      "word": "Mindestlohn",
      "translation": {
        "tr": "Asgari ücret",
        "en": "Minimum wage"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mindestlohn.",
        "accusative": "Ich kaufe ___ Mindestlohn.",
        "dative": "Mit ___ Mindestlohn arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Minister",
      "translation": {
        "tr": "Bakan",
        "en": "Minister"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Minister.",
        "accusative": "Ich suche ___ Minister.",
        "dative": "Neben ___ Minister liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mischung",
      "translation": {
        "tr": "Karışım",
        "en": "Mixture"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mischung.",
        "accusative": "Ich suche ___ Mischung.",
        "dative": "Neben ___ Mischung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mission",
      "translation": {
        "tr": "Misyon",
        "en": "Mission"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mission.",
        "accusative": "Ich sehe ___ Mission.",
        "dative": "Ich gehe mit ___ Mission."
      }
    },
    {
      "article": "das",
      "word": "Mitglied",
      "translation": {
        "tr": "üye",
        "en": "member"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Mitglied.",
        "accusative": "Ich sehe ___ Mitglied.",
        "dative": "Ich antworte ___ Mitglied."
      }
    },
    {
      "article": "die",
      "word": "Möglichkeit",
      "translation": {
        "tr": "olasılık",
        "en": "possibility"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Möglichkeit.",
        "accusative": "Ich sehe ___ Möglichkeit.",
        "dative": "Ich gehe mit ___ Möglichkeit."
      }
    },
    {
      "article": "der",
      "word": "Monitor",
      "translation": {
        "tr": "monitör",
        "en": "monitor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Monitor.",
        "accusative": "Ich sehe ___ Monitor.",
        "dative": "Ich gehe mit ___ Monitor."
      }
    },
    {
      "article": "der",
      "word": "Mord",
      "translation": {
        "tr": "Cinayet",
        "en": "Murder"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mord.",
        "accusative": "Ich nehme ___ Mord.",
        "dative": "Vor ___ Mord steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Mörder",
      "translation": {
        "tr": "Katil",
        "en": "Murderer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mörder.",
        "accusative": "Ich suche ___ Mörder.",
        "dative": "Neben ___ Mörder liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Moschee",
      "translation": {
        "tr": "Cami",
        "en": "Mosque"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Moschee.",
        "accusative": "Ich sehe ___ Moschee.",
        "dative": "Ich gehe mit ___ Moschee."
      }
    },
    {
      "article": "das",
      "word": "Motiv",
      "translation": {
        "tr": "Motif",
        "en": "Motif"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Motiv.",
        "accusative": "Ich suche ___ Motiv.",
        "dative": "Neben ___ Motiv liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Motto",
      "translation": {
        "tr": "slogan",
        "en": "motto"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Motto.",
        "accusative": "Ich suche ___ Motto.",
        "dative": "Neben ___ Motto liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mühe",
      "translation": {
        "tr": "çaba",
        "en": "effort"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mühe.",
        "accusative": "Ich suche ___ Mühe.",
        "dative": "Neben ___ Mühe liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mühle",
      "translation": {
        "tr": "değirmen",
        "en": "mill"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mühle.",
        "accusative": "Ich sehe ___ Mühle.",
        "dative": "Ich gehe mit ___ Mühle."
      }
    },
    {
      "article": "der",
      "word": "Müll",
      "translation": {
        "tr": "Çöp",
        "en": "Garbage"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Müll.",
        "accusative": "Ich trage ___ Müll.",
        "dative": "Neben ___ Müll liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Münze",
      "translation": {
        "tr": "Madeni para",
        "en": "Coin"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Münze.",
        "accusative": "Ich nehme ___ Münze.",
        "dative": "Vor ___ Münze steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Muschel",
      "translation": {
        "tr": "Kabuk",
        "en": "Shell"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Muschel.",
        "accusative": "Ich kaufe ___ Muschel.",
        "dative": "Mit ___ Muschel arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Musical",
      "translation": {
        "tr": "Müzikal",
        "en": "Musical"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Musical.",
        "accusative": "Ich sehe ___ Musical.",
        "dative": "Ich gehe mit ___ Musical."
      }
    },
    {
      "article": "die",
      "word": "Nachfrage",
      "translation": {
        "tr": "talep",
        "en": "demand"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nachfrage.",
        "accusative": "Ich besuche ___ Nachfrage.",
        "dative": "Ich danke ___ Nachfrage."
      }
    },
    {
      "article": "die",
      "word": "Nation",
      "translation": {
        "tr": "ulus",
        "en": "nation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nation.",
        "accusative": "Ich suche ___ Nation.",
        "dative": "Neben ___ Nation liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Netz",
      "translation": {
        "tr": "ağ",
        "en": "Net"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Netz.",
        "accusative": "Ich suche ___ Netz.",
        "dative": "Neben ___ Netz liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Neubau",
      "translation": {
        "tr": "Yeni bina",
        "en": "New building"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Neubau.",
        "accusative": "Ich fotografiere ___ Neubau.",
        "dative": "Wir treffen uns bei ___ Neubau."
      }
    },
    {
      "article": "der",
      "word": "Nichtraucher",
      "translation": {
        "tr": "Sigara içmeyen",
        "en": "Non-smoker"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nichtraucher.",
        "accusative": "Ich nehme ___ Nichtraucher.",
        "dative": "Vor ___ Nichtraucher steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Niederlage",
      "translation": {
        "tr": "Yenilgi",
        "en": "Defeat"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Niederlage.",
        "accusative": "Ich kaufe ___ Niederlage.",
        "dative": "Mit ___ Niederlage arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Nische",
      "translation": {
        "tr": "niş",
        "en": "niche"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nische.",
        "accusative": "Ich nehme ___ Nische.",
        "dative": "Vor ___ Nische steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Not",
      "translation": {
        "tr": "sıkıntı",
        "en": "distress"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Not.",
        "accusative": "Ich sehe ___ Not.",
        "dative": "Ich gehe mit ___ Not."
      }
    },
    {
      "article": "der",
      "word": "Notfall",
      "translation": {
        "tr": "Acil Durum",
        "en": "Emergency"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Notfall.",
        "accusative": "Ich kaufe ___ Notfall.",
        "dative": "Mit ___ Notfall arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Nutzer",
      "translation": {
        "tr": "Kullanıcı",
        "en": "User"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Nutzer.",
        "accusative": "Ich kaufe ___ Nutzer.",
        "dative": "Mit ___ Nutzer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Oase",
      "translation": {
        "tr": "Vaha",
        "en": "Oasis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Oase.",
        "accusative": "Ich kaufe ___ Oase.",
        "dative": "Mit ___ Oase arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Oberfläche",
      "translation": {
        "tr": "yüzey",
        "en": "surface"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Oberfläche.",
        "accusative": "Ich kaufe ___ Oberfläche.",
        "dative": "Mit ___ Oberfläche arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Oberkörper",
      "translation": {
        "tr": "üst vücut",
        "en": "upper body"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Oberkörper.",
        "accusative": "Ich sehe ___ Oberkörper.",
        "dative": "Ich gehe mit ___ Oberkörper."
      }
    },
    {
      "article": "der",
      "word": "Oberschenkel",
      "translation": {
        "tr": "Uyluk",
        "en": "Thigh"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Oberschenkel.",
        "accusative": "Ich kaufe ___ Oberschenkel.",
        "dative": "Mit ___ Oberschenkel arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Offizier",
      "translation": {
        "tr": "memur",
        "en": "officer"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Offizier.",
        "accusative": "Ich besuche ___ Offizier.",
        "dative": "Ich warte vor ___ Offizier."
      }
    },
    {
      "article": "die",
      "word": "Öffnung",
      "translation": {
        "tr": "Açılış",
        "en": "Opening"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Öffnung.",
        "accusative": "Ich repariere ___ Öffnung.",
        "dative": "Ich schreibe mit ___ Öffnung."
      }
    },
    {
      "article": "die",
      "word": "Oper",
      "translation": {
        "tr": "Opera",
        "en": "Opera"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Oper.",
        "accusative": "Ich nehme ___ Oper.",
        "dative": "Vor ___ Oper steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Opfer",
      "translation": {
        "tr": "Kurban",
        "en": "Victim"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Opfer.",
        "accusative": "Ich sehe ___ Opfer.",
        "dative": "Ich gehe mit ___ Opfer."
      }
    },
    {
      "article": "das",
      "word": "Orchester",
      "translation": {
        "tr": "Orkestra",
        "en": "Orchestra"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Orchester.",
        "accusative": "Ich sehe ___ Orchester.",
        "dative": "Ich gehe mit ___ Orchester."
      }
    },
    {
      "article": "das",
      "word": "Organ",
      "translation": {
        "tr": "org",
        "en": "organ"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Organ.",
        "accusative": "Ich suche ___ Organ.",
        "dative": "Neben ___ Organ liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Organisation",
      "translation": {
        "tr": "Organizasyon",
        "en": "Organization"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Organisation.",
        "accusative": "Ich kaufe ___ Organisation.",
        "dative": "Mit ___ Organisation arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Orgel",
      "translation": {
        "tr": "org",
        "en": "organ"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Orgel.",
        "accusative": "Ich sehe ___ Orgel.",
        "dative": "Ich gehe mit ___ Orgel."
      }
    },
    {
      "article": "die",
      "word": "Orientierung",
      "translation": {
        "tr": "Oryantasyon",
        "en": "Orientation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Orientierung.",
        "accusative": "Ich nehme ___ Orientierung.",
        "dative": "Vor ___ Orientierung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Original",
      "translation": {
        "tr": "Orijinal",
        "en": "Original"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Original.",
        "accusative": "Ich suche ___ Original.",
        "dative": "Neben ___ Original liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Palast",
      "translation": {
        "tr": "Saray",
        "en": "Palace"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Palast.",
        "accusative": "Ich kaufe ___ Palast.",
        "dative": "Mit ___ Palast arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Panik",
      "translation": {
        "tr": "Panik",
        "en": "Panic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Panik.",
        "accusative": "Ich suche ___ Panik.",
        "dative": "Neben ___ Panik liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Panne",
      "translation": {
        "tr": "aksaklık",
        "en": "glitch"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Panne.",
        "accusative": "Ich kaufe ___ Panne.",
        "dative": "Mit ___ Panne arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Panther",
      "translation": {
        "tr": "Panterler",
        "en": "Panthers"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Panther.",
        "accusative": "Ich nehme ___ Panther.",
        "dative": "Vor ___ Panther steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Panzer",
      "translation": {
        "tr": "Tankı",
        "en": "Tank"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Panzer.",
        "accusative": "Ich suche ___ Panzer.",
        "dative": "Neben ___ Panzer liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Papagei",
      "translation": {
        "tr": "Papağan",
        "en": "Parrot"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Papagei.",
        "accusative": "Ich kaufe ___ Papagei.",
        "dative": "Mit ___ Papagei arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Pappe",
      "translation": {
        "tr": "karton",
        "en": "cardboard"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Pappe.",
        "accusative": "Ich parke ___ Pappe.",
        "dative": "Ich komme mit ___ Pappe."
      }
    },
    {
      "article": "das",
      "word": "Parlament",
      "translation": {
        "tr": "Parlamento",
        "en": "Parliament"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Parlament.",
        "accusative": "Ich kaufe ___ Parlament.",
        "dative": "Mit ___ Parlament arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Partei",
      "translation": {
        "tr": "parti",
        "en": "party"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Partei.",
        "accusative": "Ich nehme ___ Partei.",
        "dative": "Vor ___ Partei steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Pasta",
      "translation": {
        "tr": "Makarna",
        "en": "Pasta"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Pasta.",
        "accusative": "Ich bestelle ___ Pasta.",
        "dative": "Mit ___ Pasta koche ich heute."
      }
    },
    {
      "article": "die",
      "word": "Pension",
      "translation": {
        "tr": "Emeklilik",
        "en": "Pension"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Pension.",
        "accusative": "Ich benutze ___ Pension.",
        "dative": "Ich lerne mit ___ Pension."
      }
    },
    {
      "article": "der",
      "word": "Pfarrer",
      "translation": {
        "tr": "papaz",
        "en": "Pastor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pfarrer.",
        "accusative": "Ich kaufe ___ Pfarrer.",
        "dative": "Mit ___ Pfarrer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Pflege",
      "translation": {
        "tr": "Bakım",
        "en": "Care"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Pflege.",
        "accusative": "Ich parke ___ Pflege.",
        "dative": "Ich komme mit ___ Pflege."
      }
    },
    {
      "article": "der",
      "word": "Pfleger",
      "translation": {
        "tr": "Hemşire",
        "en": "Nurse"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pfleger.",
        "accusative": "Ich suche ___ Pfleger.",
        "dative": "Neben ___ Pfleger liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Pflicht",
      "translation": {
        "tr": "Görev",
        "en": "Duty"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pflicht.",
        "accusative": "Ich sehe ___ Pflicht.",
        "dative": "Ich gehe mit ___ Pflicht."
      }
    },
    {
      "article": "das",
      "word": "Pfund",
      "translation": {
        "tr": "pound",
        "en": "pounds"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pfund.",
        "accusative": "Ich sehe ___ Pfund.",
        "dative": "Ich gehe mit ___ Pfund."
      }
    },
    {
      "article": "der",
      "word": "Pilot",
      "translation": {
        "tr": "pilot",
        "en": "Pilot"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pilot.",
        "accusative": "Ich sehe ___ Pilot.",
        "dative": "Ich gehe mit ___ Pilot."
      }
    },
    {
      "article": "der",
      "word": "Pinguin",
      "translation": {
        "tr": "Penguen",
        "en": "Penguin"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Pinguin.",
        "accusative": "Ich benutze ___ Pinguin.",
        "dative": "Ich lerne mit ___ Pinguin."
      }
    },
    {
      "article": "der",
      "word": "Pinsel",
      "translation": {
        "tr": "Fırça",
        "en": "Brush"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Pinsel.",
        "accusative": "Ich kaufe ___ Pinsel.",
        "dative": "Ich arbeite mit ___ Pinsel."
      }
    },
    {
      "article": "die",
      "word": "Piste",
      "translation": {
        "tr": "eğim",
        "en": "slope"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Piste.",
        "accusative": "Ich suche ___ Piste.",
        "dative": "Neben ___ Piste liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Pleite",
      "translation": {
        "tr": "İflas",
        "en": "Bankruptcy"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Pleite.",
        "accusative": "Ich fotografiere ___ Pleite.",
        "dative": "Wir treffen uns bei ___ Pleite."
      }
    },
    {
      "article": "das",
      "word": "Plus",
      "translation": {
        "tr": "Artı",
        "en": "Plus"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Plus.",
        "accusative": "Ich suche ___ Plus.",
        "dative": "Neben ___ Plus liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Politik",
      "translation": {
        "tr": "Politika",
        "en": "Politics"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Politik.",
        "accusative": "Ich nehme ___ Politik.",
        "dative": "Vor ___ Politik steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Portal",
      "translation": {
        "tr": "Portal",
        "en": "Portal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Portal.",
        "accusative": "Ich suche ___ Portal.",
        "dative": "Neben ___ Portal liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Porzellan",
      "translation": {
        "tr": "Porselen",
        "en": "Porcelain"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Porzellan.",
        "accusative": "Ich suche ___ Porzellan.",
        "dative": "Neben ___ Porzellan liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Post",
      "translation": {
        "tr": "Gönderi",
        "en": "Post"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Post.",
        "accusative": "Ich suche ___ Post.",
        "dative": "Neben ___ Post liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Präsentation",
      "translation": {
        "tr": "Sunum",
        "en": "Presentation"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Präsentation.",
        "accusative": "Ich entdecke ___ Präsentation.",
        "dative": "Ich gehe zu ___ Präsentation."
      }
    },
    {
      "article": "der",
      "word": "Priester",
      "translation": {
        "tr": "Rahip",
        "en": "Priest"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Priester.",
        "accusative": "Ich nehme ___ Priester.",
        "dative": "Vor ___ Priester steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Prinzip",
      "translation": {
        "tr": "Prensip",
        "en": "Principle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Prinzip.",
        "accusative": "Ich suche ___ Prinzip.",
        "dative": "Neben ___ Prinzip liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Probe",
      "translation": {
        "tr": "Örnek",
        "en": "Sample"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Probe.",
        "accusative": "Ich sehe ___ Probe.",
        "dative": "Ich gehe mit ___ Probe."
      }
    },
    {
      "article": "die",
      "word": "Produktion",
      "translation": {
        "tr": "Üretim",
        "en": "Production"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Produktion.",
        "accusative": "Ich suche ___ Produktion.",
        "dative": "Neben ___ Produktion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Profi",
      "translation": {
        "tr": "Profesyonel",
        "en": "Professional"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Profi.",
        "accusative": "Ich nehme ___ Profi.",
        "dative": "Vor ___ Profi steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Profil",
      "translation": {
        "tr": "Profil",
        "en": "Profile"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Profil.",
        "accusative": "Ich nehme ___ Profil.",
        "dative": "Vor ___ Profil steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Protest",
      "translation": {
        "tr": "protesto",
        "en": "protest"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Protest.",
        "accusative": "Ich suche ___ Protest.",
        "dative": "Neben ___ Protest liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Protokoll",
      "translation": {
        "tr": "Protokol",
        "en": "Protocol"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Protokoll.",
        "accusative": "Ich suche ___ Protokoll.",
        "dative": "Neben ___ Protokoll liegt ein Heft."
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
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Abbildung.",
        "accusative": "Ich sehe ___ Abbildung.",
        "dative": "Ich gehe mit ___ Abbildung."
      }
    },
    {
      "article": "der",
      "word": "Abbruch",
      "translation": {
        "tr": "İptal et",
        "en": "Abort"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Abbruch.",
        "accusative": "Ich nehme ___ Abbruch.",
        "dative": "Vor ___ Abbruch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Abfluss",
      "translation": {
        "tr": "drenaj",
        "en": "drain"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Abfluss.",
        "accusative": "Ich beobachte ___ Abfluss.",
        "dative": "Ich stehe vor ___ Abfluss."
      }
    },
    {
      "article": "die",
      "word": "Abfrage",
      "translation": {
        "tr": "sorgu",
        "en": "query"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Abfrage.",
        "accusative": "Ich suche ___ Abfrage.",
        "dative": "Neben ___ Abfrage liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Abgrund",
      "translation": {
        "tr": "Uçurum",
        "en": "Abyss"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Abgrund.",
        "accusative": "Ich kaufe ___ Abgrund.",
        "dative": "Mit ___ Abgrund arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Abkommen",
      "translation": {
        "tr": "Anlaşma",
        "en": "Agreement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Abkommen.",
        "accusative": "Ich sehe ___ Abkommen.",
        "dative": "Ich gehe mit ___ Abkommen."
      }
    },
    {
      "article": "die",
      "word": "Ablage",
      "translation": {
        "tr": "dosyalama",
        "en": "filing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ablage.",
        "accusative": "Ich kaufe ___ Ablage.",
        "dative": "Mit ___ Ablage arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ablauf",
      "translation": {
        "tr": "Süreç",
        "en": "Process"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ablauf.",
        "accusative": "Ich suche ___ Ablauf.",
        "dative": "Neben ___ Ablauf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Abneigung",
      "translation": {
        "tr": "Beğenmedim",
        "en": "Dislike"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Abneigung.",
        "accusative": "Ich nehme ___ Abneigung.",
        "dative": "Vor ___ Abneigung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Absatz",
      "translation": {
        "tr": "paragraf",
        "en": "paragraph"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Absatz.",
        "accusative": "Ich kaufe ___ Absatz.",
        "dative": "Mit ___ Absatz arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Abstieg",
      "translation": {
        "tr": "İniş",
        "en": "Descent"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Abstieg.",
        "accusative": "Ich kaufe ___ Abstieg.",
        "dative": "Mit ___ Abstieg arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Absturz",
      "translation": {
        "tr": "Kaza",
        "en": "Crash"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Absturz.",
        "accusative": "Ich suche ___ Absturz.",
        "dative": "Neben ___ Absturz liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Abtreibung",
      "translation": {
        "tr": "Kürtaj",
        "en": "Abortion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Abtreibung.",
        "accusative": "Ich kaufe ___ Abtreibung.",
        "dative": "Mit ___ Abtreibung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Abwehr",
      "translation": {
        "tr": "Savunma",
        "en": "Defense"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Abwehr.",
        "accusative": "Ich nehme ___ Abwehr.",
        "dative": "Vor ___ Abwehr steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Acht",
      "translation": {
        "tr": "sekiz",
        "en": "Eight"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Acht.",
        "accusative": "Ich nehme ___ Acht.",
        "dative": "Vor ___ Acht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Addition",
      "translation": {
        "tr": "ekleme",
        "en": "addition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Addition.",
        "accusative": "Ich suche ___ Addition.",
        "dative": "Neben ___ Addition liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Administrator",
      "translation": {
        "tr": "Yönetici",
        "en": "Admin"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Administrator.",
        "accusative": "Ich sehe ___ Administrator.",
        "dative": "Ich gehe mit ___ Administrator."
      }
    },
    {
      "article": "die",
      "word": "Adoption",
      "translation": {
        "tr": "Evlat edinme",
        "en": "Adoption"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Adoption.",
        "accusative": "Ich suche ___ Adoption.",
        "dative": "Neben ___ Adoption liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Affäre",
      "translation": {
        "tr": "ilişki",
        "en": "affair"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Affäre.",
        "accusative": "Ich entdecke ___ Affäre.",
        "dative": "Ich gehe zu ___ Affäre."
      }
    },
    {
      "article": "die",
      "word": "Akademie",
      "translation": {
        "tr": "Akademi",
        "en": "Academy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Akademie.",
        "accusative": "Ich nehme ___ Akademie.",
        "dative": "Vor ___ Akademie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Akt",
      "translation": {
        "tr": "eylem",
        "en": "act"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Akt.",
        "accusative": "Ich sehe ___ Akt.",
        "dative": "Ich gehe mit ___ Akt."
      }
    },
    {
      "article": "die",
      "word": "Akte",
      "translation": {
        "tr": "dosya",
        "en": "file"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Akte.",
        "accusative": "Ich kaufe ___ Akte.",
        "dative": "Mit ___ Akte arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Akteur",
      "translation": {
        "tr": "aktör",
        "en": "actor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Akteur.",
        "accusative": "Ich nehme ___ Akteur.",
        "dative": "Vor ___ Akteur steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Aktie",
      "translation": {
        "tr": "Paylaş",
        "en": "Share"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aktie.",
        "accusative": "Ich nehme ___ Aktie.",
        "dative": "Vor ___ Aktie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Aktion",
      "translation": {
        "tr": "Eylem",
        "en": "Action"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aktion.",
        "accusative": "Ich suche ___ Aktion.",
        "dative": "Neben ___ Aktion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Aktionär",
      "translation": {
        "tr": "hissedar",
        "en": "shareholder"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aktionär.",
        "accusative": "Ich kaufe ___ Aktionär.",
        "dative": "Mit ___ Aktionär arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Aktivität",
      "translation": {
        "tr": "Etkinlik",
        "en": "Activity"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aktivität.",
        "accusative": "Ich kaufe ___ Aktivität.",
        "dative": "Mit ___ Aktivität arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Akzent",
      "translation": {
        "tr": "Aksan",
        "en": "Accent"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Akzent.",
        "accusative": "Ich nehme ___ Akzent.",
        "dative": "Vor ___ Akzent steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Akzeptanz",
      "translation": {
        "tr": "Kabul",
        "en": "Acceptance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Akzeptanz.",
        "accusative": "Ich nehme ___ Akzeptanz.",
        "dative": "Vor ___ Akzeptanz steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Algorithmus",
      "translation": {
        "tr": "Algoritma",
        "en": "Algorithm"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Algorithmus.",
        "accusative": "Ich sehe ___ Algorithmus.",
        "dative": "Ich gehe mit ___ Algorithmus."
      }
    },
    {
      "article": "das",
      "word": "All",
      "translation": {
        "tr": "Hepsi",
        "en": "All"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ All.",
        "accusative": "Ich suche ___ All.",
        "dative": "Neben ___ All liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Allianz",
      "translation": {
        "tr": "İttifak",
        "en": "Alliance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Allianz.",
        "accusative": "Ich sehe ___ Allianz.",
        "dative": "Ich gehe mit ___ Allianz."
      }
    },
    {
      "article": "das",
      "word": "Alpha",
      "translation": {
        "tr": "Alfa",
        "en": "Alpha"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Alpha.",
        "accusative": "Ich sehe ___ Alpha.",
        "dative": "Ich gehe mit ___ Alpha."
      }
    },
    {
      "article": "das",
      "word": "Aluminium",
      "translation": {
        "tr": "Alüminyum",
        "en": "Aluminum"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aluminium.",
        "accusative": "Ich nehme ___ Aluminium.",
        "dative": "Vor ___ Aluminium steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Alzheimer",
      "translation": {
        "tr": "Alzheimer",
        "en": "Alzheimer's"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Alzheimer.",
        "accusative": "Ich suche ___ Alzheimer.",
        "dative": "Neben ___ Alzheimer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Amtszeit",
      "translation": {
        "tr": "Dönem",
        "en": "Term"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Amtszeit.",
        "accusative": "Ich nehme ___ Amtszeit.",
        "dative": "Vor ___ Amtszeit steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Analyse",
      "translation": {
        "tr": "Analiz",
        "en": "Analysis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Analyse.",
        "accusative": "Ich kaufe ___ Analyse.",
        "dative": "Mit ___ Analyse arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Analyst",
      "translation": {
        "tr": "Analist",
        "en": "Analyst"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Analyst.",
        "accusative": "Ich sehe ___ Analyst.",
        "dative": "Ich gehe mit ___ Analyst."
      }
    },
    {
      "article": "die",
      "word": "Anatomie",
      "translation": {
        "tr": "Anatomi",
        "en": "Anatomy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anatomie.",
        "accusative": "Ich nehme ___ Anatomie.",
        "dative": "Vor ___ Anatomie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Änderung",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Änderung.",
        "accusative": "Ich kaufe ___ Änderung.",
        "dative": "Mit ___ Änderung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Andrang",
      "translation": {
        "tr": "acele",
        "en": "Rush"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Andrang.",
        "accusative": "Ich kaufe ___ Andrang.",
        "dative": "Mit ___ Andrang arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Anforderung",
      "translation": {
        "tr": "gereksinim",
        "en": "requirement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anforderung.",
        "accusative": "Ich sehe ___ Anforderung.",
        "dative": "Ich gehe mit ___ Anforderung."
      }
    },
    {
      "article": "die",
      "word": "Angabe",
      "translation": {
        "tr": "Bilgi",
        "en": "Information"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Angabe.",
        "accusative": "Ich suche ___ Angabe.",
        "dative": "Neben ___ Angabe liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Angehörige",
      "translation": {
        "tr": "akrabalar",
        "en": "relatives"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Angehörige.",
        "accusative": "Ich nehme ___ Angehörige.",
        "dative": "Vor ___ Angehörige steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Angeklagte",
      "translation": {
        "tr": "Davalı",
        "en": "Defendant"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Angeklagte.",
        "accusative": "Ich plane ___ Angeklagte.",
        "dative": "Nach ___ Angeklagte mache ich eine Pause."
      }
    },
    {
      "article": "der",
      "word": "Angreifer",
      "translation": {
        "tr": "saldırgan",
        "en": "attacker"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Angreifer.",
        "accusative": "Ich sehe ___ Angreifer.",
        "dative": "Ich gehe mit ___ Angreifer."
      }
    },
    {
      "article": "der",
      "word": "Anhang",
      "translation": {
        "tr": "Ek",
        "en": "Appendix"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Anhang.",
        "accusative": "Ich benutze ___ Anhang.",
        "dative": "Ich lerne mit ___ Anhang."
      }
    },
    {
      "article": "der",
      "word": "Anhänger",
      "translation": {
        "tr": "römork",
        "en": "trailer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anhänger.",
        "accusative": "Ich suche ___ Anhänger.",
        "dative": "Neben ___ Anhänger liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Animation",
      "translation": {
        "tr": "animasyon",
        "en": "animation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Animation.",
        "accusative": "Ich sehe ___ Animation.",
        "dative": "Ich gehe mit ___ Animation."
      }
    },
    {
      "article": "die",
      "word": "Anklage",
      "translation": {
        "tr": "suçlama",
        "en": "Accusation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anklage.",
        "accusative": "Ich kaufe ___ Anklage.",
        "dative": "Mit ___ Anklage arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Anlass",
      "translation": {
        "tr": "fırsat",
        "en": "occasion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anlass.",
        "accusative": "Ich kaufe ___ Anlass.",
        "dative": "Mit ___ Anlass arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Anlauf",
      "translation": {
        "tr": "Başlangıç",
        "en": "Start-up"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Anlauf.",
        "accusative": "Ich starte ___ Anlauf.",
        "dative": "Bei ___ Anlauf lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Anleger",
      "translation": {
        "tr": "yatırımcı",
        "en": "investor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anleger.",
        "accusative": "Ich sehe ___ Anleger.",
        "dative": "Ich gehe mit ___ Anleger."
      }
    },
    {
      "article": "die",
      "word": "Anleihe",
      "translation": {
        "tr": "Tahvil",
        "en": "Bond"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anleihe.",
        "accusative": "Ich nehme ___ Anleihe.",
        "dative": "Vor ___ Anleihe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Anliegen",
      "translation": {
        "tr": "endişeler",
        "en": "concerns"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Anliegen.",
        "accusative": "Ich plane ___ Anliegen.",
        "dative": "Nach ___ Anliegen mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Anmerkung",
      "translation": {
        "tr": "Not",
        "en": "Note"
      },
      "casePrompts": {
        "nominative": "Im Regal steht ___ Anmerkung.",
        "accusative": "Ich lese ___ Anmerkung.",
        "dative": "Ich suche in ___ Anmerkung nach Infos."
      }
    },
    {
      "article": "die",
      "word": "Annahme",
      "translation": {
        "tr": "Kabul",
        "en": "Acceptance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Annahme.",
        "accusative": "Ich nehme ___ Annahme.",
        "dative": "Vor ___ Annahme steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Anrede",
      "translation": {
        "tr": "selamlama",
        "en": "Salutation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anrede.",
        "accusative": "Ich nehme ___ Anrede.",
        "dative": "Vor ___ Anrede steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Anregung",
      "translation": {
        "tr": "Öneri",
        "en": "Suggestion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anregung.",
        "accusative": "Ich kaufe ___ Anregung.",
        "dative": "Mit ___ Anregung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Anreiz",
      "translation": {
        "tr": "teşvik",
        "en": "incentive"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anreiz.",
        "accusative": "Ich sehe ___ Anreiz.",
        "dative": "Ich gehe mit ___ Anreiz."
      }
    },
    {
      "article": "der",
      "word": "Ansatz",
      "translation": {
        "tr": "yaklaşma",
        "en": "approach"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ansatz.",
        "accusative": "Ich nehme ___ Ansatz.",
        "dative": "Vor ___ Ansatz steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Anschlag",
      "translation": {
        "tr": "dur",
        "en": "stop"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anschlag.",
        "accusative": "Ich nehme ___ Anschlag.",
        "dative": "Vor ___ Anschlag steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ansicht",
      "translation": {
        "tr": "Görüntüle",
        "en": "View"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ansicht.",
        "accusative": "Ich kaufe ___ Ansicht.",
        "dative": "Mit ___ Ansicht arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ansprechpartner",
      "translation": {
        "tr": "İrtibat kişisi",
        "en": "Contact person"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Ansprechpartner.",
        "accusative": "Ich sehe ___ Ansprechpartner.",
        "dative": "Ich antworte ___ Ansprechpartner."
      }
    },
    {
      "article": "der",
      "word": "Anspruch",
      "translation": {
        "tr": "iddia",
        "en": "claim"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anspruch.",
        "accusative": "Ich suche ___ Anspruch.",
        "dative": "Neben ___ Anspruch liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Anstand",
      "translation": {
        "tr": "Terbiye",
        "en": "Decency"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Anstand.",
        "accusative": "Ich suche ___ Anstand.",
        "dative": "Neben ___ Anstand liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Anstellung",
      "translation": {
        "tr": "İstihdam",
        "en": "Employment"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anstellung.",
        "accusative": "Ich kaufe ___ Anstellung.",
        "dative": "Mit ___ Anstellung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ansturm",
      "translation": {
        "tr": "acele",
        "en": "Rush"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ansturm.",
        "accusative": "Ich sehe ___ Ansturm.",
        "dative": "Ich gehe mit ___ Ansturm."
      }
    },
    {
      "article": "der",
      "word": "Anteil",
      "translation": {
        "tr": "paylaş",
        "en": "share"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Anteil.",
        "accusative": "Ich sehe ___ Anteil.",
        "dative": "Ich gehe mit ___ Anteil."
      }
    },
    {
      "article": "die",
      "word": "Antike",
      "translation": {
        "tr": "Antik Çağ",
        "en": "Antiquity"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Antike.",
        "accusative": "Ich sehe ___ Antike.",
        "dative": "Ich gehe mit ___ Antike."
      }
    },
    {
      "article": "der",
      "word": "Antrieb",
      "translation": {
        "tr": "Sürüş",
        "en": "Drive"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Antrieb.",
        "accusative": "Ich nehme ___ Antrieb.",
        "dative": "Vor ___ Antrieb steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Anweisung",
      "translation": {
        "tr": "Talimat",
        "en": "Instruction"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Anweisung.",
        "accusative": "Ich fotografiere ___ Anweisung.",
        "dative": "Ich bin bei ___ Anweisung."
      }
    },
    {
      "article": "die",
      "word": "Anwendung",
      "translation": {
        "tr": "Başvuru",
        "en": "Application"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Anwendung.",
        "accusative": "Ich streichle ___ Anwendung.",
        "dative": "Ich bin bei ___ Anwendung."
      }
    },
    {
      "article": "das",
      "word": "Anwesen",
      "translation": {
        "tr": "Emlak",
        "en": "Estate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Anwesen.",
        "accusative": "Ich nehme ___ Anwesen.",
        "dative": "Vor ___ Anwesen steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Anwohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Anwohner.",
        "accusative": "Ich kaufe ___ Anwohner.",
        "dative": "Mit ___ Anwohner arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Appell",
      "translation": {
        "tr": "İtiraz",
        "en": "Appeal"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Appell.",
        "accusative": "Ich nehme ___ Appell.",
        "dative": "Vor ___ Appell steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ära",
      "translation": {
        "tr": "çağ",
        "en": "era"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ära.",
        "accusative": "Ich kaufe ___ Ära.",
        "dative": "Mit ___ Ära arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Arbeitskraft",
      "translation": {
        "tr": "İşgücü",
        "en": "Workforce"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Arbeitskraft.",
        "accusative": "Ich suche ___ Arbeitskraft.",
        "dative": "Neben ___ Arbeitskraft liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Arbeitslosigkeit",
      "translation": {
        "tr": "İşsizlik",
        "en": "Unemployment"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Arbeitslosigkeit.",
        "accusative": "Ich sehe ___ Arbeitslosigkeit.",
        "dative": "Ich gehe mit ___ Arbeitslosigkeit."
      }
    },
    {
      "article": "der",
      "word": "Arbeitsmarkt",
      "translation": {
        "tr": "İşgücü piyasası",
        "en": "Labor market"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Arbeitsmarkt.",
        "accusative": "Ich suche ___ Arbeitsmarkt.",
        "dative": "Ich bin in ___ Arbeitsmarkt."
      }
    },
    {
      "article": "der",
      "word": "Architekt",
      "translation": {
        "tr": "Mimar",
        "en": "Architect"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Architekt.",
        "accusative": "Ich suche ___ Architekt.",
        "dative": "Neben ___ Architekt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Architektur",
      "translation": {
        "tr": "Mimarlık",
        "en": "Architecture"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Architektur.",
        "accusative": "Ich kaufe ___ Architektur.",
        "dative": "Mit ___ Architektur arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Archiv",
      "translation": {
        "tr": "Arşiv",
        "en": "Archive"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Archiv.",
        "accusative": "Ich nehme ___ Archiv.",
        "dative": "Vor ___ Archiv steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Areal",
      "translation": {
        "tr": "alan",
        "en": "area"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Areal.",
        "accusative": "Ich sehe ___ Areal.",
        "dative": "Ich gehe mit ___ Areal."
      }
    },
    {
      "article": "die",
      "word": "Arena",
      "translation": {
        "tr": "Arena",
        "en": "Arena"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Arena.",
        "accusative": "Ich suche ___ Arena.",
        "dative": "Neben ___ Arena liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Ärger",
      "translation": {
        "tr": "Sorun",
        "en": "Trouble"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ärger.",
        "accusative": "Ich nehme ___ Ärger.",
        "dative": "Vor ___ Ärger steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Argument",
      "translation": {
        "tr": "Tartışma",
        "en": "Argument"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Argument.",
        "accusative": "Ich suche ___ Argument.",
        "dative": "Neben ___ Argument liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Arroganz",
      "translation": {
        "tr": "Kibir",
        "en": "Arrogance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Arroganz.",
        "accusative": "Ich sehe ___ Arroganz.",
        "dative": "Ich gehe mit ___ Arroganz."
      }
    },
    {
      "article": "der",
      "word": "Aspekt",
      "translation": {
        "tr": "yön",
        "en": "aspect"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aspekt.",
        "accusative": "Ich suche ___ Aspekt.",
        "dative": "Neben ___ Aspekt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Asphalt",
      "translation": {
        "tr": "Asfalt",
        "en": "Asphalt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Asphalt.",
        "accusative": "Ich suche ___ Asphalt.",
        "dative": "Neben ___ Asphalt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Asteroid",
      "translation": {
        "tr": "asteroit",
        "en": "asteroid"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Asteroid.",
        "accusative": "Ich suche ___ Asteroid.",
        "dative": "Neben ___ Asteroid liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Asyl",
      "translation": {
        "tr": "İltica",
        "en": "Asylum"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Asyl.",
        "accusative": "Ich suche ___ Asyl.",
        "dative": "Neben ___ Asyl liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Atelier",
      "translation": {
        "tr": "stüdyo",
        "en": "Studio"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Atelier.",
        "accusative": "Ich sehe ___ Atelier.",
        "dative": "Ich gehe mit ___ Atelier."
      }
    },
    {
      "article": "der",
      "word": "Atemzug",
      "translation": {
        "tr": "nefes",
        "en": "breath"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Atemzug.",
        "accusative": "Ich nehme ___ Atemzug.",
        "dative": "Vor ___ Atemzug steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Atmosphäre",
      "translation": {
        "tr": "Atmosfer",
        "en": "Atmosphere"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Atmosphäre.",
        "accusative": "Ich kaufe ___ Atmosphäre.",
        "dative": "Mit ___ Atmosphäre arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Atmung",
      "translation": {
        "tr": "Nefes alma",
        "en": "Breathing"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Atmung.",
        "accusative": "Ich suche ___ Atmung.",
        "dative": "Neben ___ Atmung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Attacke",
      "translation": {
        "tr": "Saldırı",
        "en": "Attack"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Attacke.",
        "accusative": "Ich nehme ___ Attacke.",
        "dative": "Vor ___ Attacke steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Attentat",
      "translation": {
        "tr": "suikast girişimi",
        "en": "assassination attempt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Attentat.",
        "accusative": "Ich suche ___ Attentat.",
        "dative": "Neben ___ Attentat liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Attraktion",
      "translation": {
        "tr": "cazibe",
        "en": "attraction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Attraktion.",
        "accusative": "Ich suche ___ Attraktion.",
        "dative": "Neben ___ Attraktion liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Attribut",
      "translation": {
        "tr": "Özellik",
        "en": "Attribute"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Attribut.",
        "accusative": "Ich nehme ___ Attribut.",
        "dative": "Vor ___ Attribut steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Aufbruch",
      "translation": {
        "tr": "Kalkış",
        "en": "Departure"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Aufbruch.",
        "accusative": "Ich plane ___ Aufbruch.",
        "dative": "Nach ___ Aufbruch mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Auffassung",
      "translation": {
        "tr": "görüş",
        "en": "opinion"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Auffassung.",
        "accusative": "Ich fotografiere ___ Auffassung.",
        "dative": "Ich bin bei ___ Auffassung."
      }
    },
    {
      "article": "die",
      "word": "Aufführung",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Aufführung.",
        "accusative": "Ich kenne ___ Aufführung.",
        "dative": "Ich spreche mit ___ Aufführung."
      }
    },
    {
      "article": "der",
      "word": "Aufgang",
      "translation": {
        "tr": "Yüksel",
        "en": "Rise"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aufgang.",
        "accusative": "Ich suche ___ Aufgang.",
        "dative": "Neben ___ Aufgang liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aufklärung",
      "translation": {
        "tr": "Aydınlanma",
        "en": "Enlightenment"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aufklärung.",
        "accusative": "Ich nehme ___ Aufklärung.",
        "dative": "Vor ___ Aufklärung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Auflösung",
      "translation": {
        "tr": "Çözünürlük",
        "en": "Resolution"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Auflösung.",
        "accusative": "Ich fotografiere ___ Auflösung.",
        "dative": "Ich bin bei ___ Auflösung."
      }
    },
    {
      "article": "das",
      "word": "Aufsehen",
      "translation": {
        "tr": "dikkat",
        "en": "attention"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufsehen.",
        "accusative": "Ich kaufe ___ Aufsehen.",
        "dative": "Mit ___ Aufsehen arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Aufstand",
      "translation": {
        "tr": "Ayaklanma",
        "en": "Uprising"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Aufstand.",
        "accusative": "Ich kaufe ___ Aufstand.",
        "dative": "Mit ___ Aufstand arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Auftrag",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Auftrag.",
        "accusative": "Ich sehe ___ Auftrag.",
        "dative": "Ich gehe mit ___ Auftrag."
      }
    },
    {
      "article": "das",
      "word": "Auftreten",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Auftreten.",
        "accusative": "Ich suche ___ Auftreten.",
        "dative": "Neben ___ Auftreten liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Auftritt",
      "translation": {
        "tr": "Görünüm",
        "en": "Appearance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Auftritt.",
        "accusative": "Ich nehme ___ Auftritt.",
        "dative": "Vor ___ Auftritt steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Aufwand",
      "translation": {
        "tr": "Çaba",
        "en": "Effort"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aufwand.",
        "accusative": "Ich sehe ___ Aufwand.",
        "dative": "Ich gehe mit ___ Aufwand."
      }
    },
    {
      "article": "der",
      "word": "Aufzug",
      "translation": {
        "tr": "Asansör",
        "en": "Elevator"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Aufzug.",
        "accusative": "Ich suche ___ Aufzug.",
        "dative": "Neben ___ Aufzug liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Auktion",
      "translation": {
        "tr": "Açık artırma",
        "en": "Auction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Auktion.",
        "accusative": "Ich suche ___ Auktion.",
        "dative": "Neben ___ Auktion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Aula",
      "translation": {
        "tr": "Oditoryum",
        "en": "Auditorium"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aula.",
        "accusative": "Ich sehe ___ Aula.",
        "dative": "Ich gehe mit ___ Aula."
      }
    },
    {
      "article": "der",
      "word": "Ausbau",
      "translation": {
        "tr": "Genişleme",
        "en": "Expansion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausbau.",
        "accusative": "Ich suche ___ Ausbau.",
        "dative": "Neben ___ Ausbau liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ausbeutung",
      "translation": {
        "tr": "Sömürü",
        "en": "Exploitation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ausbeutung.",
        "accusative": "Ich kaufe ___ Ausbeutung.",
        "dative": "Mit ___ Ausbeutung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ausblick",
      "translation": {
        "tr": "Görünüm",
        "en": "Outlook"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausblick.",
        "accusative": "Ich nehme ___ Ausblick.",
        "dative": "Vor ___ Ausblick steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ausbruch",
      "translation": {
        "tr": "salgın",
        "en": "outbreak"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Ausbruch.",
        "accusative": "Ich plane ___ Ausbruch.",
        "dative": "Nach ___ Ausbruch mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Ausfahrt",
      "translation": {
        "tr": "Çıkış",
        "en": "Exit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausfahrt.",
        "accusative": "Ich sehe ___ Ausfahrt.",
        "dative": "Ich gehe mit ___ Ausfahrt."
      }
    },
    {
      "article": "der",
      "word": "Ausfall",
      "translation": {
        "tr": "başarısızlık",
        "en": "failure"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausfall.",
        "accusative": "Ich sehe ___ Ausfall.",
        "dative": "Ich gehe mit ___ Ausfall."
      }
    },
    {
      "article": "die",
      "word": "Ausfuhr",
      "translation": {
        "tr": "İhracat",
        "en": "Export"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Ausfuhr.",
        "accusative": "Ich beobachte ___ Ausfuhr.",
        "dative": "Ich stehe neben ___ Ausfuhr."
      }
    },
    {
      "article": "die",
      "word": "Ausführung",
      "translation": {
        "tr": "Yürütme",
        "en": "Execution"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ausführung.",
        "accusative": "Ich kaufe ___ Ausführung.",
        "dative": "Mit ___ Ausführung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ausgangspunkt",
      "translation": {
        "tr": "Başlangıç noktası",
        "en": "Starting point"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Ausgangspunkt.",
        "accusative": "Ich starte ___ Ausgangspunkt.",
        "dative": "Bei ___ Ausgangspunkt lerne ich viel."
      }
    },
    {
      "article": "der",
      "word": "Auslöser",
      "translation": {
        "tr": "Tetikleyici",
        "en": "Trigger"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Auslöser.",
        "accusative": "Ich kaufe ___ Auslöser.",
        "dative": "Mit ___ Auslöser arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Ausmaß",
      "translation": {
        "tr": "Kapsam",
        "en": "Extent"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausmaß.",
        "accusative": "Ich sehe ___ Ausmaß.",
        "dative": "Ich gehe mit ___ Ausmaß."
      }
    },
    {
      "article": "die",
      "word": "Ausrichtung",
      "translation": {
        "tr": "Hizalama",
        "en": "Alignment"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Ausrichtung.",
        "accusative": "Ich brauche ___ Ausrichtung.",
        "dative": "Ich beschäftige mich mit ___ Ausrichtung."
      }
    },
    {
      "article": "die",
      "word": "Ausrüstung",
      "translation": {
        "tr": "Ekipman",
        "en": "Equipment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ausrüstung.",
        "accusative": "Ich besuche ___ Ausrüstung.",
        "dative": "Ich danke ___ Ausrüstung."
      }
    },
    {
      "article": "der",
      "word": "Ausschluss",
      "translation": {
        "tr": "Hariç Tutma",
        "en": "Exclusion"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausschluss.",
        "accusative": "Ich sehe ___ Ausschluss.",
        "dative": "Ich gehe mit ___ Ausschluss."
      }
    },
    {
      "article": "der",
      "word": "Ausschnitt",
      "translation": {
        "tr": "Detay",
        "en": "Detail"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ausschnitt.",
        "accusative": "Ich kaufe ___ Ausschnitt.",
        "dative": "Mit ___ Ausschnitt arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ausschuss",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausschuss.",
        "accusative": "Ich nehme ___ Ausschuss.",
        "dative": "Vor ___ Ausschuss steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Außenminister",
      "translation": {
        "tr": "Dışişleri Bakanı",
        "en": "Foreign Minister"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Außenminister.",
        "accusative": "Ich suche ___ Außenminister.",
        "dative": "Neben ___ Außenminister liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Außenseite",
      "translation": {
        "tr": "Dışarıda",
        "en": "Outside"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Außenseite.",
        "accusative": "Ich nehme ___ Außenseite.",
        "dative": "Vor ___ Außenseite steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Außenseiter",
      "translation": {
        "tr": "yabancı",
        "en": "outsider"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Außenseiter.",
        "accusative": "Ich nehme ___ Außenseiter.",
        "dative": "Vor ___ Außenseiter steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Äußerung",
      "translation": {
        "tr": "ifade",
        "en": "utterance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Äußerung.",
        "accusative": "Ich sehe ___ Äußerung.",
        "dative": "Ich gehe mit ___ Äußerung."
      }
    },
    {
      "article": "die",
      "word": "Ausstattung",
      "translation": {
        "tr": "Ekipman",
        "en": "Equipment"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Ausstattung.",
        "accusative": "Ich treffe ___ Ausstattung.",
        "dative": "Ich helfe ___ Ausstattung."
      }
    },
    {
      "article": "der",
      "word": "Ausstoß",
      "translation": {
        "tr": "Emisyon",
        "en": "Emission"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ausstoß.",
        "accusative": "Ich nehme ___ Ausstoß.",
        "dative": "Vor ___ Ausstoß steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Austausch",
      "translation": {
        "tr": "Değişim",
        "en": "Exchange"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Austausch.",
        "accusative": "Ich erkläre ___ Austausch.",
        "dative": "An ___ Austausch arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Ausweg",
      "translation": {
        "tr": "çıkış yolu",
        "en": "way out"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ausweg.",
        "accusative": "Ich kaufe ___ Ausweg.",
        "dative": "Mit ___ Ausweg arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Auswertung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Evaluation"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Auswertung.",
        "accusative": "Ich organisiere ___ Auswertung.",
        "dative": "Nach ___ Auswertung fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Auswirkung",
      "translation": {
        "tr": "Etki",
        "en": "Impact"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Auswirkung.",
        "accusative": "Ich sehe ___ Auswirkung.",
        "dative": "Ich gehe mit ___ Auswirkung."
      }
    },
    {
      "article": "die",
      "word": "Auszeichnung",
      "translation": {
        "tr": "Ödül",
        "en": "Award"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Auszeichnung wichtig.",
        "accusative": "Wir verstehen ___ Auszeichnung.",
        "dative": "Bei ___ Auszeichnung brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Auszeit",
      "translation": {
        "tr": "Zaman aşımı",
        "en": "Time out"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Auszeit.",
        "accusative": "Ich kenne ___ Auszeit.",
        "dative": "Ich spreche mit ___ Auszeit."
      }
    },
    {
      "article": "der",
      "word": "Auszug",
      "translation": {
        "tr": "Alıntı",
        "en": "Excerpt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Auszug.",
        "accusative": "Ich suche ___ Auszug.",
        "dative": "Neben ___ Auszug liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Autobauer",
      "translation": {
        "tr": "Araba üreticisi",
        "en": "Car manufacturer"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Autobauer.",
        "accusative": "Ich treffe ___ Autobauer.",
        "dative": "Ich helfe ___ Autobauer."
      }
    },
    {
      "article": "die",
      "word": "Autorität",
      "translation": {
        "tr": "Yetki",
        "en": "Authority"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Autorität.",
        "accusative": "Ich sehe ___ Autorität.",
        "dative": "Ich antworte ___ Autorität."
      }
    },
    {
      "article": "die",
      "word": "Balance",
      "translation": {
        "tr": "Bakiye",
        "en": "Balance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Balance.",
        "accusative": "Ich sehe ___ Balance.",
        "dative": "Ich gehe mit ___ Balance."
      }
    },
    {
      "article": "das",
      "word": "Ballett",
      "translation": {
        "tr": "Bale",
        "en": "Ballet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ballett.",
        "accusative": "Ich suche ___ Ballett.",
        "dative": "Neben ___ Ballett liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bambus",
      "translation": {
        "tr": "Bambu",
        "en": "Bamboo"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Bambus.",
        "accusative": "Ich nehme ___ Bambus.",
        "dative": "Ich reise mit ___ Bambus."
      }
    },
    {
      "article": "der",
      "word": "Band",
      "translation": {
        "tr": "Bant",
        "en": "Band"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Band.",
        "accusative": "Ich suche ___ Band.",
        "dative": "Neben ___ Band liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bande",
      "translation": {
        "tr": "çete",
        "en": "gang"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bande.",
        "accusative": "Ich nehme ___ Bande.",
        "dative": "Vor ___ Bande steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Banner",
      "translation": {
        "tr": "Afişler",
        "en": "Banners"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Banner.",
        "accusative": "Ich kaufe ___ Banner.",
        "dative": "Mit ___ Banner arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Barriere",
      "translation": {
        "tr": "bariyer",
        "en": "barrier"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Barriere.",
        "accusative": "Ich nehme ___ Barriere.",
        "dative": "Vor ___ Barriere steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Basis",
      "translation": {
        "tr": "baz",
        "en": "base"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Basis.",
        "accusative": "Ich nehme ___ Basis.",
        "dative": "Vor ___ Basis steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bass",
      "translation": {
        "tr": "bas",
        "en": "bass"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bass.",
        "accusative": "Ich suche ___ Bass.",
        "dative": "Neben ___ Bass liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Bauwerk",
      "translation": {
        "tr": "Bina",
        "en": "Building"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Bauwerk.",
        "accusative": "Ich sehe ___ Bauwerk.",
        "dative": "Ich bleibe in ___ Bauwerk."
      }
    },
    {
      "article": "die",
      "word": "Beachtung",
      "translation": {
        "tr": "Dikkat",
        "en": "Attention"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Beachtung.",
        "accusative": "Ich suche ___ Beachtung.",
        "dative": "Ich bin in ___ Beachtung."
      }
    },
    {
      "article": "die",
      "word": "Bearbeitung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Editing"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Bearbeitung.",
        "accusative": "Ich sehe ___ Bearbeitung.",
        "dative": "Ich komme mit ___ Bearbeitung."
      }
    },
    {
      "article": "der",
      "word": "Beat",
      "translation": {
        "tr": "Vuruş",
        "en": "Beat"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beat.",
        "accusative": "Ich suche ___ Beat.",
        "dative": "Neben ___ Beat liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Becken",
      "translation": {
        "tr": "havza",
        "en": "basin"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Becken.",
        "accusative": "Ich nehme ___ Becken.",
        "dative": "Vor ___ Becken steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bedarf",
      "translation": {
        "tr": "İhtiyaç",
        "en": "Need"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bedarf.",
        "accusative": "Ich kaufe ___ Bedarf.",
        "dative": "Hinter ___ Bedarf ist ein Fenster."
      }
    },
    {
      "article": "das",
      "word": "Bedauern",
      "translation": {
        "tr": "pişmanlık",
        "en": "Regret"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Bedauern.",
        "accusative": "Ich treffe ___ Bedauern.",
        "dative": "Ich helfe ___ Bedauern."
      }
    },
    {
      "article": "die",
      "word": "Bedrohung",
      "translation": {
        "tr": "Tehdit",
        "en": "Threat"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bedrohung.",
        "accusative": "Ich kaufe ___ Bedrohung.",
        "dative": "Hinter ___ Bedrohung ist ein Fenster."
      }
    },
    {
      "article": "die",
      "word": "Befragung",
      "translation": {
        "tr": "Anket",
        "en": "Survey"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Befragung.",
        "accusative": "Ich kaufe ___ Befragung.",
        "dative": "Mit ___ Befragung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Befreiung",
      "translation": {
        "tr": "Kurtuluş",
        "en": "Liberation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Befreiung.",
        "accusative": "Ich suche ___ Befreiung.",
        "dative": "Neben ___ Befreiung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Befund",
      "translation": {
        "tr": "Bulgular",
        "en": "Findings"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Befund.",
        "accusative": "Ich sehe ___ Befund.",
        "dative": "Ich gehe mit ___ Befund."
      }
    },
    {
      "article": "die",
      "word": "Begabung",
      "translation": {
        "tr": "Yetenek",
        "en": "Talent"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Begabung.",
        "accusative": "Ich nehme ___ Begabung.",
        "dative": "Vor ___ Begabung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Begegnung",
      "translation": {
        "tr": "karşılaşma",
        "en": "encounter"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Begegnung.",
        "accusative": "Ich nehme ___ Begegnung.",
        "dative": "Vor ___ Begegnung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Begeisterung",
      "translation": {
        "tr": "Coşku",
        "en": "Enthusiasm"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Begeisterung.",
        "accusative": "Ich kaufe ___ Begeisterung.",
        "dative": "Mit ___ Begeisterung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Begründung",
      "translation": {
        "tr": "Gerekçe",
        "en": "Justification"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Begründung.",
        "accusative": "Ich sehe ___ Begründung.",
        "dative": "Ich komme mit ___ Begründung."
      }
    },
    {
      "article": "der",
      "word": "Beirat",
      "translation": {
        "tr": "Danışma Kurulu",
        "en": "Advisory Board"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beirat.",
        "accusative": "Ich suche ___ Beirat.",
        "dative": "Neben ___ Beirat liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bekannte",
      "translation": {
        "tr": "tanıdıklar",
        "en": "acquaintances"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bekannte.",
        "accusative": "Ich suche ___ Bekannte.",
        "dative": "Neben ___ Bekannte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bekanntmachung",
      "translation": {
        "tr": "Uyarı",
        "en": "Notice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bekanntmachung.",
        "accusative": "Ich sehe ___ Bekanntmachung.",
        "dative": "Ich gehe mit ___ Bekanntmachung."
      }
    },
    {
      "article": "die",
      "word": "Belästigung",
      "translation": {
        "tr": "Taciz",
        "en": "Harassment"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Belästigung.",
        "accusative": "Ich sehe ___ Belästigung.",
        "dative": "Ich gehe mit ___ Belästigung."
      }
    },
    {
      "article": "die",
      "word": "Belastung",
      "translation": {
        "tr": "yük",
        "en": "burden"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Belastung.",
        "accusative": "Ich kaufe ___ Belastung.",
        "dative": "Mit ___ Belastung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Beleg",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Beleg.",
        "accusative": "Ich kaufe ___ Beleg.",
        "dative": "Mit ___ Beleg arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Beobachtung",
      "translation": {
        "tr": "Gözlem",
        "en": "Observation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beobachtung.",
        "accusative": "Ich suche ___ Beobachtung.",
        "dative": "Neben ___ Beobachtung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Berechnung",
      "translation": {
        "tr": "Hesaplama",
        "en": "Calculation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Berechnung.",
        "accusative": "Ich sehe ___ Berechnung.",
        "dative": "Ich gehe mit ___ Berechnung."
      }
    },
    {
      "article": "die",
      "word": "Bereitschaft",
      "translation": {
        "tr": "Hazırlık",
        "en": "Readiness"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bereitschaft.",
        "accusative": "Ich suche ___ Bereitschaft.",
        "dative": "Neben ___ Bereitschaft liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bergmann",
      "translation": {
        "tr": "madenci",
        "en": "Miner"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Bergmann.",
        "accusative": "Ich treffe ___ Bergmann.",
        "dative": "Ich helfe ___ Bergmann."
      }
    },
    {
      "article": "die",
      "word": "Berufung",
      "translation": {
        "tr": "Arama",
        "en": "Calling"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Berufung.",
        "accusative": "Ich suche ___ Berufung.",
        "dative": "Neben ___ Berufung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Berühmtheit",
      "translation": {
        "tr": "şöhret",
        "en": "celebrity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Berühmtheit.",
        "accusative": "Ich nehme ___ Berühmtheit.",
        "dative": "Vor ___ Berühmtheit steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Berührung",
      "translation": {
        "tr": "Dokunma",
        "en": "Touch"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Berührung.",
        "accusative": "Ich suche ___ Berührung.",
        "dative": "Neben ___ Berührung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Besatzung",
      "translation": {
        "tr": "mürettebat",
        "en": "crew"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Besatzung.",
        "accusative": "Ich sehe ___ Besatzung.",
        "dative": "Ich gehe mit ___ Besatzung."
      }
    },
    {
      "article": "der",
      "word": "Bescheid",
      "translation": {
        "tr": "ihbar",
        "en": "notice"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bescheid.",
        "accusative": "Ich kaufe ___ Bescheid.",
        "dative": "Mit ___ Bescheid arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Beschluss",
      "translation": {
        "tr": "Karar",
        "en": "Decision"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Beschluss.",
        "accusative": "Ich sehe ___ Beschluss.",
        "dative": "Ich gehe mit ___ Beschluss."
      }
    },
    {
      "article": "die",
      "word": "Beschränkung",
      "translation": {
        "tr": "Sınırlama",
        "en": "Limitation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beschränkung.",
        "accusative": "Ich suche ___ Beschränkung.",
        "dative": "Neben ___ Beschränkung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Beschreibung",
      "translation": {
        "tr": "Açıklama",
        "en": "Description"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Beschreibung.",
        "accusative": "Ich nehme ___ Beschreibung.",
        "dative": "Vor ___ Beschreibung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Beschützer",
      "translation": {
        "tr": "Koruyucu",
        "en": "Protector"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Beschützer.",
        "accusative": "Ich sehe ___ Beschützer.",
        "dative": "Ich gehe mit ___ Beschützer."
      }
    },
    {
      "article": "die",
      "word": "Beschwerde",
      "translation": {
        "tr": "Şikayet",
        "en": "Complaint"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Beschwerde.",
        "accusative": "Ich kaufe ___ Beschwerde.",
        "dative": "Mit ___ Beschwerde arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Besetzung",
      "translation": {
        "tr": "Oyuncular",
        "en": "Cast"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Besetzung.",
        "accusative": "Ich suche ___ Besetzung.",
        "dative": "Neben ___ Besetzung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Besonderheit",
      "translation": {
        "tr": "Özel özellik",
        "en": "Special feature"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Besonderheit.",
        "accusative": "Ich sehe ___ Besonderheit.",
        "dative": "Ich antworte ___ Besonderheit."
      }
    },
    {
      "article": "der",
      "word": "Bestand",
      "translation": {
        "tr": "envanter",
        "en": "inventory"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bestand.",
        "accusative": "Ich kaufe ___ Bestand.",
        "dative": "Mit ___ Bestand arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bestandteil",
      "translation": {
        "tr": "bileşen",
        "en": "component"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bestandteil.",
        "accusative": "Ich sehe ___ Bestandteil.",
        "dative": "Ich gehe mit ___ Bestandteil."
      }
    },
    {
      "article": "die",
      "word": "Bestätigung",
      "translation": {
        "tr": "Onay",
        "en": "Confirmation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bestätigung.",
        "accusative": "Ich kaufe ___ Bestätigung.",
        "dative": "Mit ___ Bestätigung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Beste",
      "translation": {
        "tr": "En iyi",
        "en": "Best"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Beste.",
        "accusative": "Ich nehme ___ Beste.",
        "dative": "Vor ___ Beste steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bestimmung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bestimmung.",
        "accusative": "Ich sehe ___ Bestimmung.",
        "dative": "Ich gehe mit ___ Bestimmung."
      }
    },
    {
      "article": "die",
      "word": "Bestrafung",
      "translation": {
        "tr": "ceza",
        "en": "Punishment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bestrafung.",
        "accusative": "Ich suche ___ Bestrafung.",
        "dative": "Neben ___ Bestrafung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bestseller",
      "translation": {
        "tr": "En çok satanlar",
        "en": "Bestseller"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bestseller.",
        "accusative": "Ich suche ___ Bestseller.",
        "dative": "Neben ___ Bestseller liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Beteiligung",
      "translation": {
        "tr": "Katılım",
        "en": "Participation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Beteiligung.",
        "accusative": "Ich suche ___ Beteiligung.",
        "dative": "Neben ___ Beteiligung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Betrachter",
      "translation": {
        "tr": "izleyici",
        "en": "viewer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Betrachter.",
        "accusative": "Ich sehe ___ Betrachter.",
        "dative": "Ich gehe mit ___ Betrachter."
      }
    },
    {
      "article": "die",
      "word": "Betrachtung",
      "translation": {
        "tr": "tefekkür",
        "en": "contemplation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Betrachtung.",
        "accusative": "Ich suche ___ Betrachtung.",
        "dative": "Neben ___ Betrachtung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Betrag",
      "translation": {
        "tr": "miktar",
        "en": "amount"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Betrag.",
        "accusative": "Ich kaufe ___ Betrag.",
        "dative": "Mit ___ Betrag arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Betreff",
      "translation": {
        "tr": "Konu",
        "en": "Subject"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Betreff.",
        "accusative": "Ich sehe ___ Betreff.",
        "dative": "Ich gehe mit ___ Betreff."
      }
    },
    {
      "article": "der",
      "word": "Betreiber",
      "translation": {
        "tr": "Operatör",
        "en": "Operator"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Betreiber.",
        "accusative": "Ich sehe ___ Betreiber.",
        "dative": "Ich gehe mit ___ Betreiber."
      }
    },
    {
      "article": "die",
      "word": "Betreuung",
      "translation": {
        "tr": "Bakım",
        "en": "Care"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Betreuung.",
        "accusative": "Ich parke ___ Betreuung.",
        "dative": "Ich komme mit ___ Betreuung."
      }
    },
    {
      "article": "der",
      "word": "Betrieb",
      "translation": {
        "tr": "Operasyon",
        "en": "Operation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Betrieb.",
        "accusative": "Ich sehe ___ Betrieb.",
        "dative": "Ich gehe mit ___ Betrieb."
      }
    },
    {
      "article": "das",
      "word": "Betriebssystem",
      "translation": {
        "tr": "İşletim sistemi",
        "en": "Operating system"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Betriebssystem zentral.",
        "accusative": "Wir besprechen ___ Betriebssystem.",
        "dative": "Mit ___ Betriebssystem wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Betrug",
      "translation": {
        "tr": "Dolandırıcılık",
        "en": "Fraud"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Betrug.",
        "accusative": "Ich kaufe ___ Betrug.",
        "dative": "Mit ___ Betrug arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Betrüger",
      "translation": {
        "tr": "Dolandırıcılar",
        "en": "Fraudsters"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Betrüger.",
        "accusative": "Ich suche ___ Betrüger.",
        "dative": "Neben ___ Betrüger liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Beurteilung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Assessment"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Beurteilung.",
        "accusative": "Ich erwarte ___ Beurteilung.",
        "dative": "Vor ___ Beurteilung bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Beute",
      "translation": {
        "tr": "av",
        "en": "prey"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Beute.",
        "accusative": "Ich nehme ___ Beute.",
        "dative": "Vor ___ Beute steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bevölkerung",
      "translation": {
        "tr": "nüfus",
        "en": "population"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bevölkerung.",
        "accusative": "Ich sehe ___ Bevölkerung.",
        "dative": "Ich gehe mit ___ Bevölkerung."
      }
    },
    {
      "article": "die",
      "word": "Bewegung",
      "translation": {
        "tr": "hareket",
        "en": "movement"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bewegung.",
        "accusative": "Ich nehme ___ Bewegung.",
        "dative": "Vor ___ Bewegung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Beweis",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Beweis.",
        "accusative": "Ich kaufe ___ Beweis.",
        "dative": "Mit ___ Beweis arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bewerber",
      "translation": {
        "tr": "Başvuru sahibi",
        "en": "Applicant"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bewerber.",
        "accusative": "Ich sehe ___ Bewerber.",
        "dative": "Ich gehe mit ___ Bewerber."
      }
    },
    {
      "article": "die",
      "word": "Bewertung",
      "translation": {
        "tr": "Derecelendirme",
        "en": "Rating"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Bewertung.",
        "accusative": "Ich plane ___ Bewertung.",
        "dative": "Nach ___ Bewertung mache ich eine Pause."
      }
    },
    {
      "article": "der",
      "word": "Bewohner",
      "translation": {
        "tr": "sakinleri",
        "en": "residents"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bewohner.",
        "accusative": "Ich nehme ___ Bewohner.",
        "dative": "Vor ___ Bewohner steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Bewusstsein",
      "translation": {
        "tr": "Bilinç",
        "en": "Consciousness"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bewusstsein.",
        "accusative": "Ich kaufe ___ Bewusstsein.",
        "dative": "Mit ___ Bewusstsein arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Bezeichnung",
      "translation": {
        "tr": "Tanım",
        "en": "Designation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bezeichnung.",
        "accusative": "Ich kaufe ___ Bezeichnung.",
        "dative": "Mit ___ Bezeichnung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Beziehung",
      "translation": {
        "tr": "ilişki",
        "en": "relationship"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Beziehung.",
        "accusative": "Ich sehe ___ Beziehung.",
        "dative": "Ich sitze in ___ Beziehung."
      }
    },
    {
      "article": "der",
      "word": "Bezirk",
      "translation": {
        "tr": "bölge",
        "en": "district"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bezirk.",
        "accusative": "Ich nehme ___ Bezirk.",
        "dative": "Vor ___ Bezirk steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bezug",
      "translation": {
        "tr": "referans",
        "en": "reference"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bezug.",
        "accusative": "Ich sehe ___ Bezug.",
        "dative": "Ich gehe mit ___ Bezug."
      }
    },
    {
      "article": "die",
      "word": "Bilanz",
      "translation": {
        "tr": "Bilanço",
        "en": "Balance sheet"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bilanz.",
        "accusative": "Ich kaufe ___ Bilanz.",
        "dative": "Mit ___ Bilanz arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Bildband",
      "translation": {
        "tr": "Resimli kitap",
        "en": "Illustrated book"
      },
      "casePrompts": {
        "nominative": "Im Regal steht ___ Bildband.",
        "accusative": "Ich lese ___ Bildband.",
        "dative": "Ich suche in ___ Bildband nach Infos."
      }
    },
    {
      "article": "der",
      "word": "Bildhauer",
      "translation": {
        "tr": "heykeltıraş",
        "en": "sculptor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bildhauer.",
        "accusative": "Ich suche ___ Bildhauer.",
        "dative": "Neben ___ Bildhauer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bindung",
      "translation": {
        "tr": "bağlayıcı",
        "en": "Binding"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bindung.",
        "accusative": "Ich suche ___ Bindung.",
        "dative": "Neben ___ Bindung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Biografie",
      "translation": {
        "tr": "Biyografi",
        "en": "Biography"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Biografie.",
        "accusative": "Ich kaufe ___ Biografie.",
        "dative": "Mit ___ Biografie arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Blei",
      "translation": {
        "tr": "Kurşun",
        "en": "Lead"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Blei.",
        "accusative": "Ich sehe ___ Blei.",
        "dative": "Ich gehe mit ___ Blei."
      }
    },
    {
      "article": "die",
      "word": "Blockade",
      "translation": {
        "tr": "Abluka",
        "en": "Blockade"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blockade.",
        "accusative": "Ich suche ___ Blockade.",
        "dative": "Neben ___ Blockade liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Blutdruck",
      "translation": {
        "tr": "Kan basıncı",
        "en": "Blood pressure"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Blutdruck.",
        "accusative": "Ich kaufe ___ Blutdruck.",
        "dative": "Mit ___ Blutdruck arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Blüte",
      "translation": {
        "tr": "çiçek",
        "en": "blossom"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Blüte.",
        "accusative": "Ich suche ___ Blüte.",
        "dative": "Neben ___ Blüte liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bord",
      "translation": {
        "tr": "tahta",
        "en": "board"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bord.",
        "accusative": "Ich nehme ___ Bord.",
        "dative": "Vor ___ Bord steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Botschafter",
      "translation": {
        "tr": "Büyükelçi",
        "en": "Ambassador"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Botschafter.",
        "accusative": "Ich sehe ___ Botschafter.",
        "dative": "Ich gehe mit ___ Botschafter."
      }
    },
    {
      "article": "der",
      "word": "Brauch",
      "translation": {
        "tr": "özel",
        "en": "custom"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Brauch.",
        "accusative": "Ich suche ___ Brauch.",
        "dative": "Neben ___ Brauch liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bronze",
      "translation": {
        "tr": "Bronz",
        "en": "Bronze"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bronze.",
        "accusative": "Ich suche ___ Bronze.",
        "dative": "Neben ___ Bronze liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Browser",
      "translation": {
        "tr": "Tarayıcı",
        "en": "Browser"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Browser.",
        "accusative": "Ich sehe ___ Browser.",
        "dative": "Ich gehe mit ___ Browser."
      }
    },
    {
      "article": "der",
      "word": "Bruch",
      "translation": {
        "tr": "kırık",
        "en": "fracture"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bruch.",
        "accusative": "Ich suche ___ Bruch.",
        "dative": "Neben ___ Bruch liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Brunnen",
      "translation": {
        "tr": "Çeşme",
        "en": "Fountain"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Brunnen.",
        "accusative": "Ich sehe ___ Brunnen.",
        "dative": "Ich gehe mit ___ Brunnen."
      }
    },
    {
      "article": "der",
      "word": "Buchhändler",
      "translation": {
        "tr": "Kitapçı",
        "en": "Bookseller"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Buchhändler.",
        "accusative": "Ich schreibe ___ Buchhändler.",
        "dative": "In ___ Buchhändler steht alles."
      }
    },
    {
      "article": "die",
      "word": "Bucht",
      "translation": {
        "tr": "Körfez",
        "en": "Bay"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bucht.",
        "accusative": "Ich suche ___ Bucht.",
        "dative": "Neben ___ Bucht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Buchung",
      "translation": {
        "tr": "Rezervasyon",
        "en": "Booking"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Buchung.",
        "accusative": "Ich schreibe ___ Buchung.",
        "dative": "In ___ Buchung steht alles."
      }
    },
    {
      "article": "der",
      "word": "Buddhismus",
      "translation": {
        "tr": "Budizm",
        "en": "Buddhism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Buddhismus.",
        "accusative": "Ich sehe ___ Buddhismus.",
        "dative": "Ich gehe mit ___ Buddhismus."
      }
    },
    {
      "article": "das",
      "word": "Budget",
      "translation": {
        "tr": "Bütçe",
        "en": "Budget"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Budget.",
        "accusative": "Ich suche ___ Budget.",
        "dative": "Neben ___ Budget liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bund",
      "translation": {
        "tr": "Federal",
        "en": "Federal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bund.",
        "accusative": "Ich suche ___ Bund.",
        "dative": "Neben ___ Bund liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Bündel",
      "translation": {
        "tr": "paket",
        "en": "bundle"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bündel.",
        "accusative": "Ich nehme ___ Bündel.",
        "dative": "Vor ___ Bündel steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Bundesamt",
      "translation": {
        "tr": "Federal Ofis",
        "en": "Federal Office"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Bundesamt.",
        "accusative": "Ich besuche ___ Bundesamt.",
        "dative": "Ich warte vor ___ Bundesamt."
      }
    },
    {
      "article": "der",
      "word": "Bundeskanzler",
      "translation": {
        "tr": "Şansölye",
        "en": "Chancellor"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Bundeskanzler wichtig.",
        "accusative": "Wir verstehen ___ Bundeskanzler.",
        "dative": "Bei ___ Bundeskanzler brauche ich Hilfe."
      }
    },
    {
      "article": "das",
      "word": "Bundesland",
      "translation": {
        "tr": "Eyalet",
        "en": "State"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bundesland.",
        "accusative": "Ich kaufe ___ Bundesland.",
        "dative": "Mit ___ Bundesland arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Bundesliga",
      "translation": {
        "tr": "Bundesliga",
        "en": "Bundesliga"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bundesliga.",
        "accusative": "Ich suche ___ Bundesliga.",
        "dative": "Neben ___ Bundesliga liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bundespräsident",
      "translation": {
        "tr": "Federal Başkan",
        "en": "Federal President"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bundespräsident.",
        "accusative": "Ich nehme ___ Bundespräsident.",
        "dative": "Vor ___ Bundespräsident steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bundesrat",
      "translation": {
        "tr": "Federal Konsey",
        "en": "Federal Council"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Bundesrat.",
        "accusative": "Ich sehe ___ Bundesrat.",
        "dative": "Ich gehe mit ___ Bundesrat."
      }
    },
    {
      "article": "die",
      "word": "Bundesregierung",
      "translation": {
        "tr": "Federal Hükümet",
        "en": "Federal Government"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bundesregierung.",
        "accusative": "Ich nehme ___ Bundesregierung.",
        "dative": "Vor ___ Bundesregierung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Bundesrepublik",
      "translation": {
        "tr": "Federal Cumhuriyet",
        "en": "Federal Republic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bundesrepublik.",
        "accusative": "Ich suche ___ Bundesrepublik.",
        "dative": "Neben ___ Bundesrepublik liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Bundesstaat",
      "translation": {
        "tr": "Eyalet",
        "en": "State"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bundesstaat.",
        "accusative": "Ich nehme ___ Bundesstaat.",
        "dative": "Vor ___ Bundesstaat steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bundestag",
      "translation": {
        "tr": "Federal Meclis",
        "en": "Bundestag"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bundestag.",
        "accusative": "Ich suche ___ Bundestag.",
        "dative": "Neben ___ Bundestag liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Bundeswehr",
      "translation": {
        "tr": "Bundeswehr",
        "en": "Bundeswehr"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Bundeswehr.",
        "accusative": "Ich suche ___ Bundeswehr.",
        "dative": "Neben ___ Bundeswehr liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Bündnis",
      "translation": {
        "tr": "İttifak",
        "en": "Alliance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bündnis.",
        "accusative": "Ich nehme ___ Bündnis.",
        "dative": "Vor ___ Bündnis steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Bürgerkrieg",
      "translation": {
        "tr": "İç Savaş",
        "en": "Civil War"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Bürgerkrieg zentral.",
        "accusative": "Wir besprechen ___ Bürgerkrieg.",
        "dative": "Mit ___ Bürgerkrieg wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Bürokratie",
      "translation": {
        "tr": "Bürokrasi",
        "en": "Bureaucracy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Bürokratie.",
        "accusative": "Ich kaufe ___ Bürokratie.",
        "dative": "Mit ___ Bürokratie arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Business",
      "translation": {
        "tr": "iş",
        "en": "Business"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Business.",
        "accusative": "Ich parke ___ Business.",
        "dative": "Ich komme mit ___ Business."
      }
    },
    {
      "article": "der",
      "word": "Campus",
      "translation": {
        "tr": "Kampüs",
        "en": "Campus"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Campus.",
        "accusative": "Ich suche ___ Campus.",
        "dative": "Neben ___ Campus liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Celsius",
      "translation": {
        "tr": "santigrat",
        "en": "Celsius"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Celsius.",
        "accusative": "Ich sehe ___ Celsius.",
        "dative": "Ich gehe mit ___ Celsius."
      }
    },
    {
      "article": "der",
      "word": "Center",
      "translation": {
        "tr": "Merkez",
        "en": "Center"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Center.",
        "accusative": "Ich suche ___ Center.",
        "dative": "Neben ___ Center liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Champagner",
      "translation": {
        "tr": "Şampanya",
        "en": "Champagne"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Champagner.",
        "accusative": "Ich suche ___ Champagner.",
        "dative": "Neben ___ Champagner liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Chaos",
      "translation": {
        "tr": "Kargaşa",
        "en": "Mayhem"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Chaos.",
        "accusative": "Ich nehme ___ Chaos.",
        "dative": "Vor ___ Chaos steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Charakter",
      "translation": {
        "tr": "Karakter",
        "en": "Character"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Charakter.",
        "accusative": "Ich suche ___ Charakter.",
        "dative": "Neben ___ Charakter liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Charme",
      "translation": {
        "tr": "Cazibe",
        "en": "Charm"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Charme.",
        "accusative": "Ich nehme ___ Charme.",
        "dative": "Vor ___ Charme steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Chat",
      "translation": {
        "tr": "Sohbet",
        "en": "Chat"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Chat.",
        "accusative": "Ich suche ___ Chat.",
        "dative": "Ich gehe mit ___ Chat raus."
      }
    },
    {
      "article": "die",
      "word": "Chemie",
      "translation": {
        "tr": "Kimya",
        "en": "Chemistry"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Chemie.",
        "accusative": "Ich nehme ___ Chemie.",
        "dative": "Vor ___ Chemie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Chemikalie",
      "translation": {
        "tr": "kimyasal",
        "en": "chemical"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Chemikalie.",
        "accusative": "Ich suche ___ Chemikalie.",
        "dative": "Neben ___ Chemikalie liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Chemiker",
      "translation": {
        "tr": "Kimyager",
        "en": "Chemist"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Chemiker.",
        "accusative": "Ich nehme ___ Chemiker.",
        "dative": "Vor ___ Chemiker steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Chinese",
      "translation": {
        "tr": "Çince",
        "en": "Chinese"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Chinese.",
        "accusative": "Ich suche ___ Chinese.",
        "dative": "Neben ___ Chinese liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Chronik",
      "translation": {
        "tr": "Tarih",
        "en": "Chronicle"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Chronik.",
        "accusative": "Ich nehme ___ Chronik.",
        "dative": "Vor ___ Chronik steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "City",
      "translation": {
        "tr": "Şehir",
        "en": "City"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ City.",
        "accusative": "Ich fotografiere ___ City.",
        "dative": "Wir treffen uns bei ___ City."
      }
    },
    {
      "article": "der",
      "word": "Clip",
      "translation": {
        "tr": "Klip",
        "en": "Clip"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Clip.",
        "accusative": "Ich suche ___ Clip.",
        "dative": "Neben ___ Clip liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Coach",
      "translation": {
        "tr": "Antrenör",
        "en": "Coach"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Coach.",
        "accusative": "Ich sehe ___ Coach.",
        "dative": "Ich gehe mit ___ Coach."
      }
    },
    {
      "article": "der",
      "word": "Cocktail",
      "translation": {
        "tr": "Kokteyl",
        "en": "Cocktail"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Cocktail.",
        "accusative": "Ich suche ___ Cocktail.",
        "dative": "Neben ___ Cocktail liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Code",
      "translation": {
        "tr": "Kod",
        "en": "Code"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Code.",
        "accusative": "Ich suche ___ Code.",
        "dative": "Neben ___ Code liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Container",
      "translation": {
        "tr": "Konteynerler",
        "en": "Containers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Container.",
        "accusative": "Ich kaufe ___ Container.",
        "dative": "Mit ___ Container arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Creme",
      "translation": {
        "tr": "Krem",
        "en": "Cream"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Creme.",
        "accusative": "Ich sehe ___ Creme.",
        "dative": "Ich gehe mit ___ Creme."
      }
    },
    {
      "article": "der",
      "word": "Dämon",
      "translation": {
        "tr": "Şeytan",
        "en": "Demon"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dämon.",
        "accusative": "Ich kaufe ___ Dämon.",
        "dative": "Mit ___ Dämon arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Darlehen",
      "translation": {
        "tr": "Kredi",
        "en": "Loan"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Darlehen.",
        "accusative": "Ich kaufe ___ Darlehen.",
        "dative": "Mit ___ Darlehen arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Darstellung",
      "translation": {
        "tr": "Sunum",
        "en": "Presentation"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Darstellung.",
        "accusative": "Ich entdecke ___ Darstellung.",
        "dative": "Ich gehe zu ___ Darstellung."
      }
    },
    {
      "article": "die",
      "word": "Datenbank",
      "translation": {
        "tr": "Veritabanı",
        "en": "Database"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Datenbank.",
        "accusative": "Ich sehe ___ Datenbank.",
        "dative": "Ich bleibe in ___ Datenbank."
      }
    },
    {
      "article": "der",
      "word": "Deal",
      "translation": {
        "tr": "anlaşma",
        "en": "deal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Deal.",
        "accusative": "Ich suche ___ Deal.",
        "dative": "Neben ___ Deal liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Debatte",
      "translation": {
        "tr": "Tartışma",
        "en": "Debate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Debatte.",
        "accusative": "Ich suche ___ Debatte.",
        "dative": "Neben ___ Debatte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Definition",
      "translation": {
        "tr": "Tanım",
        "en": "Definition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Definition.",
        "accusative": "Ich suche ___ Definition.",
        "dative": "Neben ___ Definition liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Defizit",
      "translation": {
        "tr": "Açık",
        "en": "Deficit"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Defizit.",
        "accusative": "Ich kaufe ___ Defizit.",
        "dative": "Mit ___ Defizit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Deich",
      "translation": {
        "tr": "Lezbiyen",
        "en": "Dyke"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Deich.",
        "accusative": "Ich sehe ___ Deich.",
        "dative": "Ich gehe mit ___ Deich."
      }
    },
    {
      "article": "die",
      "word": "Delegation",
      "translation": {
        "tr": "Delegasyon",
        "en": "Delegation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Delegation.",
        "accusative": "Ich suche ___ Delegation.",
        "dative": "Neben ___ Delegation liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Delegierte",
      "translation": {
        "tr": "delegeler",
        "en": "delegates"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Delegierte.",
        "accusative": "Ich sehe ___ Delegierte.",
        "dative": "Ich gehe mit ___ Delegierte."
      }
    },
    {
      "article": "das",
      "word": "Delikt",
      "translation": {
        "tr": "suç",
        "en": "offense"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Delikt.",
        "accusative": "Ich nehme ___ Delikt.",
        "dative": "Vor ___ Delikt steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Demenz",
      "translation": {
        "tr": "Demans",
        "en": "Dementia"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Demenz.",
        "accusative": "Ich kenne ___ Demenz.",
        "dative": "Ich spreche mit ___ Demenz."
      }
    },
    {
      "article": "der",
      "word": "Demonstrant",
      "translation": {
        "tr": "protestocu",
        "en": "protester"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Demonstrant.",
        "accusative": "Ich nehme ___ Demonstrant.",
        "dative": "Vor ___ Demonstrant steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Demonstration",
      "translation": {
        "tr": "gösteri",
        "en": "demonstration"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Demonstration.",
        "accusative": "Ich suche ___ Demonstration.",
        "dative": "Neben ___ Demonstration liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Denken",
      "translation": {
        "tr": "Düşün",
        "en": "Think"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Denken.",
        "accusative": "Ich nehme ___ Denken.",
        "dative": "Vor ___ Denken steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Denkmal",
      "translation": {
        "tr": "Anıt",
        "en": "Monument"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Denkmal.",
        "accusative": "Ich kaufe ___ Denkmal.",
        "dative": "Mit ___ Denkmal arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Depression",
      "translation": {
        "tr": "Depresyon",
        "en": "Depression"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Depression.",
        "accusative": "Ich suche ___ Depression.",
        "dative": "Neben ___ Depression liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Design",
      "translation": {
        "tr": "tasarım",
        "en": "design"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Design.",
        "accusative": "Ich suche ___ Design.",
        "dative": "Neben ___ Design liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Desktop",
      "translation": {
        "tr": "Masaüstü",
        "en": "Desktop"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Desktop.",
        "accusative": "Ich sehe ___ Desktop.",
        "dative": "Ich gehe mit ___ Desktop."
      }
    },
    {
      "article": "das",
      "word": "Detail",
      "translation": {
        "tr": "detay",
        "en": "detail"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Detail.",
        "accusative": "Ich suche ___ Detail.",
        "dative": "Neben ___ Detail liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Diabetes",
      "translation": {
        "tr": "Diyabet",
        "en": "Diabetes"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Diabetes.",
        "accusative": "Ich suche ___ Diabetes.",
        "dative": "Neben ___ Diabetes liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Diagnose",
      "translation": {
        "tr": "Teşhis",
        "en": "Diagnosis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Diagnose.",
        "accusative": "Ich kaufe ___ Diagnose.",
        "dative": "Mit ___ Diagnose arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Diagramm",
      "translation": {
        "tr": "Diyagram",
        "en": "Diagram"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Diagramm.",
        "accusative": "Ich nehme ___ Diagramm.",
        "dative": "Vor ___ Diagramm steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Dialekt",
      "translation": {
        "tr": "Lehçe",
        "en": "Dialect"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dialekt.",
        "accusative": "Ich sehe ___ Dialekt.",
        "dative": "Ich gehe mit ___ Dialekt."
      }
    },
    {
      "article": "die",
      "word": "Diät",
      "translation": {
        "tr": "Diyet",
        "en": "Diet"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Diät.",
        "accusative": "Ich nehme ___ Diät.",
        "dative": "Vor ___ Diät steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Dichtung",
      "translation": {
        "tr": "mühür",
        "en": "seal"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Dichtung.",
        "accusative": "Ich suche ___ Dichtung.",
        "dative": "Ich bin in ___ Dichtung."
      }
    },
    {
      "article": "der",
      "word": "Diebstahl",
      "translation": {
        "tr": "Hırsızlık",
        "en": "Theft"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Diebstahl.",
        "accusative": "Ich nehme ___ Diebstahl.",
        "dative": "Vor ___ Diebstahl steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Dienstleistung",
      "translation": {
        "tr": "Hizmet",
        "en": "Service"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dienstleistung.",
        "accusative": "Ich nehme ___ Dienstleistung.",
        "dative": "Vor ___ Dienstleistung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Differenz",
      "translation": {
        "tr": "Fark",
        "en": "Difference"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Differenz.",
        "accusative": "Ich sehe ___ Differenz.",
        "dative": "Ich gehe mit ___ Differenz."
      }
    },
    {
      "article": "die",
      "word": "Digitalisierung",
      "translation": {
        "tr": "Dijitalleşme",
        "en": "Digitalization"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Digitalisierung.",
        "accusative": "Ich sehe ___ Digitalisierung.",
        "dative": "Ich gehe mit ___ Digitalisierung."
      }
    },
    {
      "article": "die",
      "word": "Diktatur",
      "translation": {
        "tr": "Diktatörlük",
        "en": "Dictatorship"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Diktatur.",
        "accusative": "Ich nehme ___ Diktatur.",
        "dative": "Ich reise mit ___ Diktatur."
      }
    },
    {
      "article": "das",
      "word": "Dilemma",
      "translation": {
        "tr": "ikilem",
        "en": "dilemma"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dilemma.",
        "accusative": "Ich suche ___ Dilemma.",
        "dative": "Neben ___ Dilemma liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Dimension",
      "translation": {
        "tr": "boyut",
        "en": "dimension"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Dimension.",
        "accusative": "Ich kenne ___ Dimension.",
        "dative": "Ich spreche mit ___ Dimension."
      }
    },
    {
      "article": "der",
      "word": "Dirigent",
      "translation": {
        "tr": "İletken",
        "en": "Conductor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dirigent.",
        "accusative": "Ich kaufe ___ Dirigent.",
        "dative": "Mit ___ Dirigent arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Diskriminierung",
      "translation": {
        "tr": "Ayrımcılık",
        "en": "Discrimination"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Diskriminierung.",
        "accusative": "Ich kaufe ___ Diskriminierung.",
        "dative": "Mit ___ Diskriminierung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Diskurs",
      "translation": {
        "tr": "Söylem",
        "en": "Discourse"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Diskurs.",
        "accusative": "Ich erwarte ___ Diskurs.",
        "dative": "Vor ___ Diskurs bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Distanz",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Distanz.",
        "accusative": "Ich brauche ___ Distanz.",
        "dative": "Ich beschäftige mich mit ___ Distanz."
      }
    },
    {
      "article": "die",
      "word": "Disziplin",
      "translation": {
        "tr": "Disiplin",
        "en": "Discipline"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Disziplin.",
        "accusative": "Ich sehe ___ Disziplin.",
        "dative": "Ich gehe mit ___ Disziplin."
      }
    },
    {
      "article": "die",
      "word": "Dokumentation",
      "translation": {
        "tr": "Dokümantasyon",
        "en": "Documentation"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Dokumentation.",
        "accusative": "Ich kenne ___ Dokumentation.",
        "dative": "Ich spreche mit ___ Dokumentation."
      }
    },
    {
      "article": "der",
      "word": "Dolmetscher",
      "translation": {
        "tr": "Tercüman",
        "en": "Interpreter"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Dolmetscher.",
        "accusative": "Ich kenne ___ Dolmetscher.",
        "dative": "Ich spreche mit ___ Dolmetscher."
      }
    },
    {
      "article": "die",
      "word": "Dosis",
      "translation": {
        "tr": "Doz",
        "en": "Dose"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Dosis.",
        "accusative": "Ich nehme ___ Dosis.",
        "dative": "Vor ___ Dosis steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Dozent",
      "translation": {
        "tr": "Öğretim Görevlisi",
        "en": "Lecturer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dozent.",
        "accusative": "Ich suche ___ Dozent.",
        "dative": "Neben ___ Dozent liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Drang",
      "translation": {
        "tr": "Dürtü",
        "en": "Urge"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Drang.",
        "accusative": "Ich nehme ___ Drang.",
        "dative": "Vor ___ Drang steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Drehbuch",
      "translation": {
        "tr": "Senaryo",
        "en": "Screenplay"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Drehbuch.",
        "accusative": "Ich nehme ___ Drehbuch.",
        "dative": "Vor ___ Drehbuch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Druck",
      "translation": {
        "tr": "basınç",
        "en": "pressure"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Druck.",
        "accusative": "Ich sehe ___ Druck.",
        "dative": "Ich gehe mit ___ Druck."
      }
    },
    {
      "article": "das",
      "word": "Duell",
      "translation": {
        "tr": "Düello",
        "en": "Duel"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Duell.",
        "accusative": "Ich suche ___ Duell.",
        "dative": "Neben ___ Duell liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Dünger",
      "translation": {
        "tr": "gübre",
        "en": "fertilizer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dünger.",
        "accusative": "Ich suche ___ Dünger.",
        "dative": "Neben ___ Dünger liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Dunkelheit",
      "translation": {
        "tr": "Karanlık",
        "en": "Darkness"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Dunkelheit.",
        "accusative": "Ich suche ___ Dunkelheit.",
        "dative": "Neben ___ Dunkelheit liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Duo",
      "translation": {
        "tr": "ikili",
        "en": "duo"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Duo.",
        "accusative": "Ich sehe ___ Duo.",
        "dative": "Ich gehe mit ___ Duo."
      }
    },
    {
      "article": "der",
      "word": "Durchbruch",
      "translation": {
        "tr": "Atılım",
        "en": "Breakthrough"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Durchbruch.",
        "accusative": "Ich plane ___ Durchbruch.",
        "dative": "Nach ___ Durchbruch mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Durchführung",
      "translation": {
        "tr": "Uygulama",
        "en": "Implementation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Durchführung.",
        "accusative": "Ich sehe ___ Durchführung.",
        "dative": "Ich gehe mit ___ Durchführung."
      }
    },
    {
      "article": "der",
      "word": "Durchmesser",
      "translation": {
        "tr": "çap",
        "en": "diameter"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Durchmesser.",
        "accusative": "Ich sehe ___ Durchmesser.",
        "dative": "Ich gehe mit ___ Durchmesser."
      }
    },
    {
      "article": "der",
      "word": "Durchschnitt",
      "translation": {
        "tr": "Ortalama",
        "en": "Average"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Durchschnitt.",
        "accusative": "Ich suche ___ Durchschnitt.",
        "dative": "Neben ___ Durchschnitt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Durchsetzung",
      "translation": {
        "tr": "Yaptırım",
        "en": "Enforcement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Durchsetzung.",
        "accusative": "Ich sehe ___ Durchsetzung.",
        "dative": "Ich gehe mit ___ Durchsetzung."
      }
    },
    {
      "article": "die",
      "word": "Dürre",
      "translation": {
        "tr": "Kuraklık",
        "en": "Drought"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dürre.",
        "accusative": "Ich sehe ___ Dürre.",
        "dative": "Ich gehe mit ___ Dürre."
      }
    },
    {
      "article": "die",
      "word": "Dynamik",
      "translation": {
        "tr": "Dinamik",
        "en": "Dynamics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dynamik.",
        "accusative": "Ich kaufe ___ Dynamik.",
        "dative": "Mit ___ Dynamik arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Ebbe",
      "translation": {
        "tr": "Düşük gelgit",
        "en": "Low tide"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ebbe.",
        "accusative": "Ich sehe ___ Ebbe.",
        "dative": "Ich gehe mit ___ Ebbe."
      }
    },
    {
      "article": "der",
      "word": "Editor",
      "translation": {
        "tr": "Editör",
        "en": "Editor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Editor.",
        "accusative": "Ich suche ___ Editor.",
        "dative": "Neben ___ Editor liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Egoismus",
      "translation": {
        "tr": "Bencillik",
        "en": "Selfishness"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Egoismus.",
        "accusative": "Ich streichle ___ Egoismus.",
        "dative": "Ich bin bei ___ Egoismus."
      }
    },
    {
      "article": "die",
      "word": "Ehre",
      "translation": {
        "tr": "onur",
        "en": "honor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ehre.",
        "accusative": "Ich sehe ___ Ehre.",
        "dative": "Ich gehe mit ___ Ehre."
      }
    },
    {
      "article": "die",
      "word": "Ehrlichkeit",
      "translation": {
        "tr": "Dürüstlük",
        "en": "Honesty"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ehrlichkeit.",
        "accusative": "Ich sehe ___ Ehrlichkeit.",
        "dative": "Ich gehe mit ___ Ehrlichkeit."
      }
    },
    {
      "article": "der",
      "word": "Einblick",
      "translation": {
        "tr": "içgörü",
        "en": "Insight"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einblick.",
        "accusative": "Ich nehme ___ Einblick.",
        "dative": "Vor ___ Einblick steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Einbrecher",
      "translation": {
        "tr": "Hırsız",
        "en": "Burglar"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Einbrecher.",
        "accusative": "Ich suche ___ Einbrecher.",
        "dative": "Neben ___ Einbrecher liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Einbruch",
      "translation": {
        "tr": "Hırsızlık",
        "en": "Burglary"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Einbruch.",
        "accusative": "Ich suche ___ Einbruch.",
        "dative": "Neben ___ Einbruch liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Eindruck",
      "translation": {
        "tr": "izlenim",
        "en": "impression"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eindruck.",
        "accusative": "Ich suche ___ Eindruck.",
        "dative": "Neben ___ Eindruck liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Einfluss",
      "translation": {
        "tr": "Etki",
        "en": "Influence"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Einfluss.",
        "accusative": "Ich suche ___ Einfluss.",
        "dative": "Neben ___ Einfluss liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Eingriff",
      "translation": {
        "tr": "müdahale",
        "en": "intervention"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Eingriff.",
        "accusative": "Ich nehme ___ Eingriff.",
        "dative": "Vor ___ Eingriff steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Einheimische",
      "translation": {
        "tr": "Yerliler",
        "en": "Locals"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einheimische.",
        "accusative": "Ich kaufe ___ Einheimische.",
        "dative": "Mit ___ Einheimische arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Einigung",
      "translation": {
        "tr": "anlaşma",
        "en": "agreement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einigung.",
        "accusative": "Ich sehe ___ Einigung.",
        "dative": "Ich gehe mit ___ Einigung."
      }
    },
    {
      "article": "der",
      "word": "Einklang",
      "translation": {
        "tr": "uyum",
        "en": "harmony"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einklang.",
        "accusative": "Ich nehme ___ Einklang.",
        "dative": "Vor ___ Einklang steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Einleitung",
      "translation": {
        "tr": "Giriş",
        "en": "Introduction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einleitung.",
        "accusative": "Ich sehe ___ Einleitung.",
        "dative": "Ich gehe mit ___ Einleitung."
      }
    },
    {
      "article": "die",
      "word": "Einnahme",
      "translation": {
        "tr": "giriş",
        "en": "intake"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einnahme.",
        "accusative": "Ich kaufe ___ Einnahme.",
        "dative": "Mit ___ Einnahme arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Einreise",
      "translation": {
        "tr": "Giriş",
        "en": "Entry"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Einreise.",
        "accusative": "Ich sehe ___ Einreise.",
        "dative": "Ich gehe mit ___ Einreise."
      }
    },
    {
      "article": "der",
      "word": "Einsatzleiter",
      "translation": {
        "tr": "Operasyon Müdürü",
        "en": "Operations Manager"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Einsatzleiter.",
        "accusative": "Ich kenne ___ Einsatzleiter.",
        "dative": "Ich spreche mit ___ Einsatzleiter."
      }
    },
    {
      "article": "die",
      "word": "Einschätzung",
      "translation": {
        "tr": "Değerlendirme",
        "en": "Assessment"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Einschätzung.",
        "accusative": "Ich erwarte ___ Einschätzung.",
        "dative": "Vor ___ Einschätzung bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Einschränkung",
      "translation": {
        "tr": "Sınırlama",
        "en": "Limitation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einschränkung.",
        "accusative": "Ich kaufe ___ Einschränkung.",
        "dative": "Mit ___ Einschränkung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Einsicht",
      "translation": {
        "tr": "içgörü",
        "en": "insight"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einsicht.",
        "accusative": "Ich kaufe ___ Einsicht.",
        "dative": "Mit ___ Einsicht arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Einstieg",
      "translation": {
        "tr": "Giriş",
        "en": "Entry"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Einstieg.",
        "accusative": "Ich suche ___ Einstieg.",
        "dative": "Neben ___ Einstieg liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Einteilung",
      "translation": {
        "tr": "sınıflandırma",
        "en": "Classification"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Einteilung.",
        "accusative": "Ich sehe ___ Einteilung.",
        "dative": "Ich komme mit ___ Einteilung."
      }
    },
    {
      "article": "die",
      "word": "Eintragung",
      "translation": {
        "tr": "Kayıt",
        "en": "Registration"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Eintragung.",
        "accusative": "Ich kaufe ___ Eintragung.",
        "dative": "Mit ___ Eintragung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Einwand",
      "translation": {
        "tr": "İtiraz",
        "en": "Objection"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einwand.",
        "accusative": "Ich kaufe ___ Einwand.",
        "dative": "Mit ___ Einwand arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Einzelfall",
      "translation": {
        "tr": "Bireysel vaka",
        "en": "Individual case"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Einzelfall.",
        "accusative": "Ich nehme ___ Einzelfall.",
        "dative": "Vor ___ Einzelfall steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Einzug",
      "translation": {
        "tr": "Taşınma",
        "en": "Move-in"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Einzug.",
        "accusative": "Ich kaufe ___ Einzug.",
        "dative": "Mit ___ Einzug arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Eizelle",
      "translation": {
        "tr": "yumurta hücresi",
        "en": "egg cell"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eizelle.",
        "accusative": "Ich probiere ___ Eizelle.",
        "dative": "Ich beginne mit ___ Eizelle."
      }
    },
    {
      "article": "der",
      "word": "Ekel",
      "translation": {
        "tr": "İğrenme",
        "en": "Disgust"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ekel.",
        "accusative": "Ich suche ___ Ekel.",
        "dative": "Neben ___ Ekel liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Elektronik",
      "translation": {
        "tr": "Elektronik",
        "en": "Electronics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Elektronik.",
        "accusative": "Ich kaufe ___ Elektronik.",
        "dative": "Mit ___ Elektronik arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Elend",
      "translation": {
        "tr": "Sefalet",
        "en": "Misery"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Elend.",
        "accusative": "Ich organisiere ___ Elend.",
        "dative": "Nach ___ Elend fahre ich nach Hause."
      }
    },
    {
      "article": "der",
      "word": "Elfmeter",
      "translation": {
        "tr": "Penaltı",
        "en": "Penalty"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Elfmeter.",
        "accusative": "Ich kaufe ___ Elfmeter.",
        "dative": "Ich arbeite mit ___ Elfmeter."
      }
    },
    {
      "article": "die",
      "word": "Elite",
      "translation": {
        "tr": "elit",
        "en": "elite"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Elite.",
        "accusative": "Ich suche ___ Elite.",
        "dative": "Neben ___ Elite liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Embargo",
      "translation": {
        "tr": "ambargo",
        "en": "embargo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Embargo.",
        "accusative": "Ich suche ___ Embargo.",
        "dative": "Neben ___ Embargo liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Embryo",
      "translation": {
        "tr": "embriyo",
        "en": "embryo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Embryo.",
        "accusative": "Ich suche ___ Embryo.",
        "dative": "Neben ___ Embryo liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Emission",
      "translation": {
        "tr": "Emisyon",
        "en": "Emission"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Emission.",
        "accusative": "Ich suche ___ Emission.",
        "dative": "Neben ___ Emission liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Emotion",
      "translation": {
        "tr": "duygu",
        "en": "emotion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Emotion.",
        "accusative": "Ich suche ___ Emotion.",
        "dative": "Neben ___ Emotion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Empfehlung",
      "translation": {
        "tr": "Tavsiye",
        "en": "Recommendation"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Empfehlung.",
        "accusative": "Ich plane ___ Empfehlung.",
        "dative": "Nach ___ Empfehlung mache ich eine Pause."
      }
    },
    {
      "article": "der",
      "word": "Endverbraucher",
      "translation": {
        "tr": "son kullanıcı",
        "en": "end user"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Endverbraucher.",
        "accusative": "Ich kenne ___ Endverbraucher.",
        "dative": "Ich spreche mit ___ Endverbraucher."
      }
    },
    {
      "article": "das",
      "word": "Engagement",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Engagement.",
        "accusative": "Ich sehe ___ Engagement.",
        "dative": "Ich gehe mit ___ Engagement."
      }
    },
    {
      "article": "das",
      "word": "Ensemble",
      "translation": {
        "tr": "topluluk",
        "en": "ensemble"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ensemble.",
        "accusative": "Ich suche ___ Ensemble.",
        "dative": "Neben ___ Ensemble liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Entlassung",
      "translation": {
        "tr": "İşten çıkarılma",
        "en": "Dismissal"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Entlassung.",
        "accusative": "Ich fotografiere ___ Entlassung.",
        "dative": "Ich bin bei ___ Entlassung."
      }
    },
    {
      "article": "die",
      "word": "Entschädigung",
      "translation": {
        "tr": "Tazminat",
        "en": "Compensation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Entschädigung.",
        "accusative": "Ich suche ___ Entschädigung.",
        "dative": "Ich telefoniere mit ___ Entschädigung."
      }
    },
    {
      "article": "die",
      "word": "Entsorgung",
      "translation": {
        "tr": "Bertaraf",
        "en": "Disposal"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Entsorgung.",
        "accusative": "Ich nehme ___ Entsorgung.",
        "dative": "Vor ___ Entsorgung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Entstehung",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Entstehung.",
        "accusative": "Ich nehme ___ Entstehung.",
        "dative": "Vor ___ Entstehung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Entwickler",
      "translation": {
        "tr": "Geliştirici",
        "en": "Developer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Entwickler.",
        "accusative": "Ich suche ___ Entwickler.",
        "dative": "Neben ___ Entwickler liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Enzym",
      "translation": {
        "tr": "enzim",
        "en": "enzyme"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Enzym.",
        "accusative": "Ich nehme ___ Enzym.",
        "dative": "Vor ___ Enzym steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Epoche",
      "translation": {
        "tr": "Dönem",
        "en": "Epoch"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Epoche.",
        "accusative": "Ich nehme ___ Epoche.",
        "dative": "Vor ___ Epoche steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Erbe",
      "translation": {
        "tr": "Miras",
        "en": "Heritage"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Erbe.",
        "accusative": "Ich nehme ___ Erbe.",
        "dative": "Vor ___ Erbe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Erdgas",
      "translation": {
        "tr": "Doğal gaz",
        "en": "Natural gas"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erdgas.",
        "accusative": "Ich sehe ___ Erdgas.",
        "dative": "Ich gehe mit ___ Erdgas."
      }
    },
    {
      "article": "das",
      "word": "Erdöl",
      "translation": {
        "tr": "Petrol",
        "en": "Petroleum"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erdöl.",
        "accusative": "Ich suche ___ Erdöl.",
        "dative": "Neben ___ Erdöl liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ereignis",
      "translation": {
        "tr": "olay",
        "en": "event"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ereignis.",
        "accusative": "Ich sehe ___ Ereignis.",
        "dative": "Ich gehe mit ___ Ereignis."
      }
    },
    {
      "article": "die",
      "word": "Erfassung",
      "translation": {
        "tr": "Yakala",
        "en": "Capture"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Erfassung.",
        "accusative": "Ich sehe ___ Erfassung.",
        "dative": "Ich sitze an ___ Erfassung."
      }
    },
    {
      "article": "die",
      "word": "Erfüllung",
      "translation": {
        "tr": "yerine getirilmesi",
        "en": "fulfillment"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Erfüllung.",
        "accusative": "Ich nehme ___ Erfüllung.",
        "dative": "Vor ___ Erfüllung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Erhalt",
      "translation": {
        "tr": "makbuz",
        "en": "receipt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erhalt.",
        "accusative": "Ich suche ___ Erhalt.",
        "dative": "Neben ___ Erhalt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erhaltung",
      "translation": {
        "tr": "Koruma",
        "en": "Conservation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erhaltung.",
        "accusative": "Ich kaufe ___ Erhaltung.",
        "dative": "Mit ___ Erhaltung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erhebung",
      "translation": {
        "tr": "anket",
        "en": "survey"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erhebung.",
        "accusative": "Ich suche ___ Erhebung.",
        "dative": "Neben ___ Erhebung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erhöhung",
      "translation": {
        "tr": "artış",
        "en": "increase"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erhöhung.",
        "accusative": "Ich kaufe ___ Erhöhung.",
        "dative": "Mit ___ Erhöhung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erholung",
      "translation": {
        "tr": "kurtarma",
        "en": "recovery"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Erholung.",
        "accusative": "Ich nehme ___ Erholung.",
        "dative": "Vor ___ Erholung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Erkrankung",
      "translation": {
        "tr": "hastalık",
        "en": "disease"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Erkrankung.",
        "accusative": "Ich besuche ___ Erkrankung.",
        "dative": "Ich warte vor ___ Erkrankung."
      }
    },
    {
      "article": "die",
      "word": "Erkundung",
      "translation": {
        "tr": "Keşif",
        "en": "Exploration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erkundung.",
        "accusative": "Ich sehe ___ Erkundung.",
        "dative": "Ich gehe mit ___ Erkundung."
      }
    },
    {
      "article": "der",
      "word": "Erlös",
      "translation": {
        "tr": "Gelir",
        "en": "Revenue"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erlös.",
        "accusative": "Ich sehe ___ Erlös.",
        "dative": "Ich gehe mit ___ Erlös."
      }
    },
    {
      "article": "der",
      "word": "Ermittler",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Investigator"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ermittler.",
        "accusative": "Ich kaufe ___ Ermittler.",
        "dative": "Mit ___ Ermittler arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Ermittlung",
      "translation": {
        "tr": "Soruşturma",
        "en": "Investigation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ermittlung.",
        "accusative": "Ich nehme ___ Ermittlung.",
        "dative": "Vor ___ Ermittlung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ermordung",
      "translation": {
        "tr": "Suikast",
        "en": "Assassination"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ermordung.",
        "accusative": "Ich nehme ___ Ermordung.",
        "dative": "Vor ___ Ermordung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ermutigung",
      "translation": {
        "tr": "Teşvik",
        "en": "Encouragement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ermutigung.",
        "accusative": "Ich sehe ___ Ermutigung.",
        "dative": "Ich gehe mit ___ Ermutigung."
      }
    },
    {
      "article": "die",
      "word": "Eröffnung",
      "translation": {
        "tr": "Açılış",
        "en": "Opening"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Eröffnung.",
        "accusative": "Ich suche ___ Eröffnung.",
        "dative": "Ich telefoniere mit ___ Eröffnung."
      }
    },
    {
      "article": "der",
      "word": "Erreger",
      "translation": {
        "tr": "patojen",
        "en": "pathogen"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erreger.",
        "accusative": "Ich sehe ___ Erreger.",
        "dative": "Ich gehe mit ___ Erreger."
      }
    },
    {
      "article": "der",
      "word": "Ersatz",
      "translation": {
        "tr": "Değiştirme",
        "en": "Replacement"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ersatz.",
        "accusative": "Ich kaufe ___ Ersatz.",
        "dative": "Mit ___ Ersatz arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erscheinung",
      "translation": {
        "tr": "görünüm",
        "en": "appearance"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erscheinung.",
        "accusative": "Ich kaufe ___ Erscheinung.",
        "dative": "Mit ___ Erscheinung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Ertrag",
      "translation": {
        "tr": "verim",
        "en": "yield"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ertrag.",
        "accusative": "Ich suche ___ Ertrag.",
        "dative": "Neben ___ Ertrag liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erwähnung",
      "translation": {
        "tr": "Mansiyon",
        "en": "Mention"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Erwähnung.",
        "accusative": "Ich kenne ___ Erwähnung.",
        "dative": "Ich spreche mit ___ Erwähnung."
      }
    },
    {
      "article": "die",
      "word": "Erwärmung",
      "translation": {
        "tr": "ısınma",
        "en": "warming"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Erwärmung.",
        "accusative": "Ich erkläre ___ Erwärmung.",
        "dative": "An ___ Erwärmung arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Erwartung",
      "translation": {
        "tr": "Beklenti",
        "en": "Expectation"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Erwartung wichtig.",
        "accusative": "Wir verstehen ___ Erwartung.",
        "dative": "Bei ___ Erwartung brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Erweiterung",
      "translation": {
        "tr": "Uzantı",
        "en": "Extension"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erweiterung.",
        "accusative": "Ich suche ___ Erweiterung.",
        "dative": "Neben ___ Erweiterung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Erwerb",
      "translation": {
        "tr": "satın alma",
        "en": "acquisition"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erwerb.",
        "accusative": "Ich sehe ___ Erwerb.",
        "dative": "Ich gehe mit ___ Erwerb."
      }
    },
    {
      "article": "die",
      "word": "Erzählung",
      "translation": {
        "tr": "Anlatım",
        "en": "Narration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Erzählung.",
        "accusative": "Ich nehme ___ Erzählung.",
        "dative": "Vor ___ Erzählung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Erzieher",
      "translation": {
        "tr": "Eğitimci",
        "en": "Educator"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Erzieher.",
        "accusative": "Ich streichle ___ Erzieher.",
        "dative": "Ich bin bei ___ Erzieher."
      }
    },
    {
      "article": "die",
      "word": "Erziehung",
      "translation": {
        "tr": "Eğitim",
        "en": "Education"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Erziehung.",
        "accusative": "Ich füttere ___ Erziehung.",
        "dative": "Ich spiele mit ___ Erziehung."
      }
    },
    {
      "article": "die",
      "word": "Essenz",
      "translation": {
        "tr": "Öz",
        "en": "Essence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Essenz.",
        "accusative": "Ich sehe ___ Essenz.",
        "dative": "Ich gehe mit ___ Essenz."
      }
    },
    {
      "article": "die",
      "word": "Ethik",
      "translation": {
        "tr": "Etik",
        "en": "Ethics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ethik.",
        "accusative": "Ich kaufe ___ Ethik.",
        "dative": "Mit ___ Ethik arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Euphorie",
      "translation": {
        "tr": "Coşku",
        "en": "Euphoria"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Euphorie.",
        "accusative": "Ich suche ___ Euphorie.",
        "dative": "Neben ___ Euphorie liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Evolution",
      "translation": {
        "tr": "Evrim",
        "en": "Evolution"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Evolution.",
        "accusative": "Ich suche ___ Evolution.",
        "dative": "Neben ___ Evolution liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ewigkeit",
      "translation": {
        "tr": "sonsuzluk",
        "en": "eternity"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Ewigkeit.",
        "accusative": "Ich sehe ___ Ewigkeit.",
        "dative": "Ich antworte ___ Ewigkeit."
      }
    },
    {
      "article": "das",
      "word": "Examen",
      "translation": {
        "tr": "sınav",
        "en": "exam"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Examen.",
        "accusative": "Ich starte ___ Examen.",
        "dative": "Bei ___ Examen lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Exemplar",
      "translation": {
        "tr": "kopyala",
        "en": "copy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Exemplar.",
        "accusative": "Ich kaufe ___ Exemplar.",
        "dative": "Mit ___ Exemplar arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Exil",
      "translation": {
        "tr": "Sürgün",
        "en": "Exile"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Exil.",
        "accusative": "Ich nehme ___ Exil.",
        "dative": "Vor ___ Exil steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Existenz",
      "translation": {
        "tr": "varoluş",
        "en": "Existence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Existenz.",
        "accusative": "Ich sehe ___ Existenz.",
        "dative": "Ich gehe mit ___ Existenz."
      }
    },
    {
      "article": "die",
      "word": "Expedition",
      "translation": {
        "tr": "Sefer",
        "en": "Expedition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Expedition.",
        "accusative": "Ich suche ___ Expedition.",
        "dative": "Neben ___ Expedition liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Experte",
      "translation": {
        "tr": "Uzman",
        "en": "Expert"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Experte.",
        "accusative": "Ich sehe ___ Experte.",
        "dative": "Ich antworte ___ Experte."
      }
    },
    {
      "article": "die",
      "word": "Explosion",
      "translation": {
        "tr": "Patlama",
        "en": "Explosion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Explosion.",
        "accusative": "Ich suche ___ Explosion.",
        "dative": "Neben ___ Explosion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fachbereich",
      "translation": {
        "tr": "Departman",
        "en": "Department"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Fachbereich.",
        "accusative": "Ich kenne ___ Fachbereich.",
        "dative": "Ich spreche mit ___ Fachbereich."
      }
    },
    {
      "article": "die",
      "word": "Fachhochschule",
      "translation": {
        "tr": "Uygulamalı Bilimler Üniversitesi",
        "en": "University of Applied Sciences"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Fachhochschule.",
        "accusative": "Ich sehe ___ Fachhochschule.",
        "dative": "Ich bleibe in ___ Fachhochschule."
      }
    },
    {
      "article": "der",
      "word": "Fachmann",
      "translation": {
        "tr": "Profesyonel",
        "en": "Professional"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Fachmann.",
        "accusative": "Ich sehe ___ Fachmann.",
        "dative": "Ich antworte ___ Fachmann."
      }
    },
    {
      "article": "die",
      "word": "Fähigkeit",
      "translation": {
        "tr": "yetenek",
        "en": "ability"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fähigkeit.",
        "accusative": "Ich kaufe ___ Fähigkeit.",
        "dative": "Mit ___ Fähigkeit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Fahnder",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Investigator"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fahnder.",
        "accusative": "Ich kaufe ___ Fahnder.",
        "dative": "Mit ___ Fahnder arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Fahrbahn",
      "translation": {
        "tr": "karayolu",
        "en": "roadway"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fahrbahn.",
        "accusative": "Ich nehme ___ Fahrbahn.",
        "dative": "Vor ___ Fahrbahn steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fairness",
      "translation": {
        "tr": "Adalet",
        "en": "Fairness"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Fairness.",
        "accusative": "Ich beobachte ___ Fairness.",
        "dative": "Ich stehe vor ___ Fairness."
      }
    },
    {
      "article": "die",
      "word": "Fakultät",
      "translation": {
        "tr": "Fakülte",
        "en": "Faculty"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fakultät.",
        "accusative": "Ich nehme ___ Fakultät.",
        "dative": "Vor ___ Fakultät steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fang",
      "translation": {
        "tr": "Yakala",
        "en": "Catch"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Fang.",
        "accusative": "Ich füttere ___ Fang.",
        "dative": "Ich spiele mit ___ Fang."
      }
    },
    {
      "article": "die",
      "word": "Färbung",
      "translation": {
        "tr": "boyama",
        "en": "coloring"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Färbung.",
        "accusative": "Ich sehe ___ Färbung.",
        "dative": "Ich antworte ___ Färbung."
      }
    },
    {
      "article": "die",
      "word": "Faser",
      "translation": {
        "tr": "lif",
        "en": "fiber"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Faser.",
        "accusative": "Ich nehme ___ Faser.",
        "dative": "Vor ___ Faser steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fassade",
      "translation": {
        "tr": "Cephe",
        "en": "Facade"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fassade.",
        "accusative": "Ich nehme ___ Fassade.",
        "dative": "Vor ___ Fassade steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fassung",
      "translation": {
        "tr": "versiyon",
        "en": "version"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Fassung.",
        "accusative": "Ich fotografiere ___ Fassung.",
        "dative": "Ich bin bei ___ Fassung."
      }
    },
    {
      "article": "das",
      "word": "Fazit",
      "translation": {
        "tr": "Sonuç",
        "en": "Conclusion"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Fazit.",
        "accusative": "Ich treffe ___ Fazit.",
        "dative": "Ich helfe ___ Fazit."
      }
    },
    {
      "article": "der",
      "word": "Fehlschlag",
      "translation": {
        "tr": "Başarısızlık",
        "en": "Failure"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Fehlschlag.",
        "accusative": "Ich kaufe ___ Fehlschlag.",
        "dative": "Mit ___ Fehlschlag arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Feigheit",
      "translation": {
        "tr": "Korkaklık",
        "en": "Cowardice"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Feigheit.",
        "accusative": "Ich sehe ___ Feigheit.",
        "dative": "Ich komme mit ___ Feigheit."
      }
    },
    {
      "article": "die",
      "word": "Ferne",
      "translation": {
        "tr": "Mesafe",
        "en": "Distance"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Ferne wichtig.",
        "accusative": "Wir verstehen ___ Ferne.",
        "dative": "Bei ___ Ferne brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Fertigstellung",
      "translation": {
        "tr": "Tamamlama",
        "en": "Completion"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Fertigstellung.",
        "accusative": "Ich nehme ___ Fertigstellung.",
        "dative": "Vor ___ Fertigstellung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fertigung",
      "translation": {
        "tr": "İmalat",
        "en": "Manufacturing"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Fertigung.",
        "accusative": "Ich sehe ___ Fertigung.",
        "dative": "Ich antworte ___ Fertigung."
      }
    },
    {
      "article": "das",
      "word": "Festland",
      "translation": {
        "tr": "anakara",
        "en": "mainland"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Festland.",
        "accusative": "Ich kaufe ___ Festland.",
        "dative": "Mit ___ Festland arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Festlegung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Festlegung.",
        "accusative": "Ich kaufe ___ Festlegung.",
        "dative": "Mit ___ Festlegung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Festnahme",
      "translation": {
        "tr": "Tutuklama",
        "en": "Arrest"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Festnahme.",
        "accusative": "Ich suche ___ Festnahme.",
        "dative": "Neben ___ Festnahme liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Festnetz",
      "translation": {
        "tr": "Sabit hat",
        "en": "Landline"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Festnetz.",
        "accusative": "Ich trage ___ Festnetz.",
        "dative": "Neben ___ Festnetz liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Feststellung",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Feststellung.",
        "accusative": "Ich nehme ___ Feststellung.",
        "dative": "Vor ___ Feststellung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Fiktion",
      "translation": {
        "tr": "Kurgu",
        "en": "Fiction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fiktion.",
        "accusative": "Ich sehe ___ Fiktion.",
        "dative": "Ich gehe mit ___ Fiktion."
      }
    },
    {
      "article": "der",
      "word": "Filmemacher",
      "translation": {
        "tr": "Film yapımcısı",
        "en": "Filmmaker"
      },
      "casePrompts": {
        "nominative": "Dort hängt ___ Filmemacher.",
        "accusative": "Ich schreibe ___ Filmemacher.",
        "dative": "In ___ Filmemacher steht alles."
      }
    },
    {
      "article": "das",
      "word": "Filmmaterial",
      "translation": {
        "tr": "görüntüleri",
        "en": "footage"
      },
      "casePrompts": {
        "nominative": "Im Regal steht ___ Filmmaterial.",
        "accusative": "Ich lese ___ Filmmaterial.",
        "dative": "Ich suche in ___ Filmmaterial nach Infos."
      }
    },
    {
      "article": "der",
      "word": "Filz",
      "translation": {
        "tr": "keçe",
        "en": "felt"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Filz.",
        "accusative": "Ich sehe ___ Filz.",
        "dative": "Ich gehe mit ___ Filz."
      }
    },
    {
      "article": "das",
      "word": "Finale",
      "translation": {
        "tr": "Final",
        "en": "Final"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Finale.",
        "accusative": "Ich nehme ___ Finale.",
        "dative": "Vor ___ Finale steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Finanzierung",
      "translation": {
        "tr": "Finansman",
        "en": "Financing"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Finanzierung.",
        "accusative": "Ich sehe ___ Finanzierung.",
        "dative": "Ich antworte ___ Finanzierung."
      }
    },
    {
      "article": "der",
      "word": "Finanzminister",
      "translation": {
        "tr": "Maliye Bakanı",
        "en": "Finance Minister"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Finanzminister.",
        "accusative": "Ich suche ___ Finanzminister.",
        "dative": "Neben ___ Finanzminister liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Finsternis",
      "translation": {
        "tr": "Karanlık",
        "en": "Darkness"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Finsternis.",
        "accusative": "Ich sehe ___ Finsternis.",
        "dative": "Ich gehe mit ___ Finsternis."
      }
    },
    {
      "article": "die",
      "word": "Flexibilität",
      "translation": {
        "tr": "Esneklik",
        "en": "Flexibility"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flexibilität.",
        "accusative": "Ich nehme ___ Flexibilität.",
        "dative": "Vor ___ Flexibilität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Flotte",
      "translation": {
        "tr": "Filo",
        "en": "Fleet"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Flotte.",
        "accusative": "Ich suche ___ Flotte.",
        "dative": "Neben ___ Flotte liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Flucht",
      "translation": {
        "tr": "Kaçış",
        "en": "Escape"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Flucht.",
        "accusative": "Ich kaufe ___ Flucht.",
        "dative": "Mit ___ Flucht arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Fluggesellschaft",
      "translation": {
        "tr": "havayolu",
        "en": "airline"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Fluggesellschaft.",
        "accusative": "Ich entdecke ___ Fluggesellschaft.",
        "dative": "Ich gehe zu ___ Fluggesellschaft."
      }
    },
    {
      "article": "der",
      "word": "Flur",
      "translation": {
        "tr": "koridor",
        "en": "hallway"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flur.",
        "accusative": "Ich nehme ___ Flur.",
        "dative": "Vor ___ Flur steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Flüssigkeit",
      "translation": {
        "tr": "sıvı",
        "en": "liquid"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flüssigkeit.",
        "accusative": "Ich nehme ___ Flüssigkeit.",
        "dative": "Vor ___ Flüssigkeit steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Flut",
      "translation": {
        "tr": "sel",
        "en": "flood"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Flut.",
        "accusative": "Ich kaufe ___ Flut.",
        "dative": "Mit ___ Flut arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Flyer",
      "translation": {
        "tr": "El ilanları",
        "en": "Flyers"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Flyer.",
        "accusative": "Ich nehme ___ Flyer.",
        "dative": "Vor ___ Flyer steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fond",
      "translation": {
        "tr": "Fon",
        "en": "Fund"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fond.",
        "accusative": "Ich sehe ___ Fond.",
        "dative": "Ich gehe mit ___ Fond."
      }
    },
    {
      "article": "die",
      "word": "Forderung",
      "translation": {
        "tr": "talep",
        "en": "demand"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Forderung.",
        "accusative": "Ich treffe ___ Forderung.",
        "dative": "Ich helfe ___ Forderung."
      }
    },
    {
      "article": "die",
      "word": "Förderung",
      "translation": {
        "tr": "Promosyon",
        "en": "Promotion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Förderung.",
        "accusative": "Ich suche ___ Förderung.",
        "dative": "Neben ___ Förderung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Formulierung",
      "translation": {
        "tr": "Formülasyon",
        "en": "Formulation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Formulierung.",
        "accusative": "Ich nehme ___ Formulierung.",
        "dative": "Vor ___ Formulierung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Forscher",
      "translation": {
        "tr": "Araştırmacı",
        "en": "Researcher"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Forscher.",
        "accusative": "Ich fotografiere ___ Forscher.",
        "dative": "Wir treffen uns bei ___ Forscher."
      }
    },
    {
      "article": "die",
      "word": "Forschung",
      "translation": {
        "tr": "Araştırma",
        "en": "Research"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Forschung.",
        "accusative": "Ich fotografiere ___ Forschung.",
        "dative": "Wir treffen uns bei ___ Forschung."
      }
    },
    {
      "article": "der",
      "word": "Fortschritt",
      "translation": {
        "tr": "İlerleme",
        "en": "Progress"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Fortschritt zentral.",
        "accusative": "Wir besprechen ___ Fortschritt.",
        "dative": "Mit ___ Fortschritt wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Fortsetzung",
      "translation": {
        "tr": "Devamı",
        "en": "Continuation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fortsetzung.",
        "accusative": "Ich suche ___ Fortsetzung.",
        "dative": "Neben ___ Fortsetzung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fotografie",
      "translation": {
        "tr": "Fotoğrafçılık",
        "en": "Photography"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fotografie.",
        "accusative": "Ich drucke ___ Fotografie.",
        "dative": "Aus ___ Fotografie lerne ich viel."
      }
    },
    {
      "article": "das",
      "word": "Foul",
      "translation": {
        "tr": "Faul",
        "en": "Foul"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Foul.",
        "accusative": "Ich suche ___ Foul.",
        "dative": "Neben ___ Foul liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Fragebogen",
      "translation": {
        "tr": "Anket",
        "en": "Questionnaire"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Fragebogen.",
        "accusative": "Ich fotografiere ___ Fragebogen.",
        "dative": "Ich bin bei ___ Fragebogen."
      }
    },
    {
      "article": "die",
      "word": "Fragestellung",
      "translation": {
        "tr": "Soru",
        "en": "Question"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Fragestellung zentral.",
        "accusative": "Wir besprechen ___ Fragestellung.",
        "dative": "Mit ___ Fragestellung wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Fraktion",
      "translation": {
        "tr": "hizip",
        "en": "faction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fraktion.",
        "accusative": "Ich suche ___ Fraktion.",
        "dative": "Neben ___ Fraktion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Franzose",
      "translation": {
        "tr": "Fransız",
        "en": "Frenchman"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Franzose.",
        "accusative": "Ich kenne ___ Franzose.",
        "dative": "Ich spreche mit ___ Franzose."
      }
    },
    {
      "article": "der",
      "word": "Freiberufler",
      "translation": {
        "tr": "Serbest çalışan",
        "en": "Freelancer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Freiberufler.",
        "accusative": "Ich sehe ___ Freiberufler.",
        "dative": "Ich gehe mit ___ Freiberufler."
      }
    },
    {
      "article": "die",
      "word": "Freigabe",
      "translation": {
        "tr": "Sürüm",
        "en": "Release"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Freigabe.",
        "accusative": "Ich sehe ___ Freigabe.",
        "dative": "Ich gehe mit ___ Freigabe."
      }
    },
    {
      "article": "die",
      "word": "Frequenz",
      "translation": {
        "tr": "Frekans",
        "en": "Frequency"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Frequenz.",
        "accusative": "Ich sehe ___ Frequenz.",
        "dative": "Ich gehe mit ___ Frequenz."
      }
    },
    {
      "article": "der",
      "word": "Frust",
      "translation": {
        "tr": "hayal kırıklığı",
        "en": "frustration"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Frust.",
        "accusative": "Ich kaufe ___ Frust.",
        "dative": "Mit ___ Frust arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Frustration",
      "translation": {
        "tr": "hayal kırıklığı",
        "en": "frustration"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Frustration.",
        "accusative": "Ich suche ___ Frustration.",
        "dative": "Neben ___ Frustration liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Führung",
      "translation": {
        "tr": "Liderlik",
        "en": "Leadership"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Führung.",
        "accusative": "Ich sehe ___ Führung.",
        "dative": "Ich antworte ___ Führung."
      }
    },
    {
      "article": "die",
      "word": "Fülle",
      "translation": {
        "tr": "bolluk",
        "en": "abundance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fülle.",
        "accusative": "Ich sehe ___ Fülle.",
        "dative": "Ich gehe mit ___ Fülle."
      }
    },
    {
      "article": "die",
      "word": "Furcht",
      "translation": {
        "tr": "Korku",
        "en": "Fear"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Furcht.",
        "accusative": "Ich erkläre ___ Furcht.",
        "dative": "An ___ Furcht arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Fürst",
      "translation": {
        "tr": "Prens",
        "en": "Prince"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fürst.",
        "accusative": "Ich suche ___ Fürst.",
        "dative": "Neben ___ Fürst liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Fusion",
      "translation": {
        "tr": "Füzyon",
        "en": "Fusion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Fusion.",
        "accusative": "Ich suche ___ Fusion.",
        "dative": "Neben ___ Fusion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Galerie",
      "translation": {
        "tr": "Galeri",
        "en": "Gallery"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Galerie.",
        "accusative": "Ich nehme ___ Galerie.",
        "dative": "Vor ___ Galerie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Garant",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Garant.",
        "accusative": "Ich kaufe ___ Garant.",
        "dative": "Mit ___ Garant arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Garantie",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Garantie.",
        "accusative": "Ich kaufe ___ Garantie.",
        "dative": "Mit ___ Garantie arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gattin",
      "translation": {
        "tr": "eş",
        "en": "wife"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gattin.",
        "accusative": "Ich sehe ___ Gattin.",
        "dative": "Ich gehe mit ___ Gattin."
      }
    },
    {
      "article": "der",
      "word": "Gaumen",
      "translation": {
        "tr": "damak",
        "en": "palate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gaumen.",
        "accusative": "Ich suche ___ Gaumen.",
        "dative": "Neben ___ Gaumen liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gebiet",
      "translation": {
        "tr": "alan",
        "en": "area"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gebiet.",
        "accusative": "Ich kaufe ___ Gebiet.",
        "dative": "Mit ___ Gebiet arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Gebirge",
      "translation": {
        "tr": "Dağlar",
        "en": "Mountains"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Gebirge.",
        "accusative": "Ich sehe ___ Gebirge.",
        "dative": "Ich bleibe in ___ Gebirge."
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
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Aktiengesellschaft.",
        "accusative": "Ich nehme ___ Aktiengesellschaft.",
        "dative": "Vor ___ Aktiengesellschaft steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Ambiente",
      "translation": {
        "tr": "Ambiyans",
        "en": "Ambiance"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ambiente.",
        "accusative": "Ich kaufe ___ Ambiente.",
        "dative": "Mit ___ Ambiente arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Analogie",
      "translation": {
        "tr": "analoji",
        "en": "Analogy"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Analogie wichtig.",
        "accusative": "Wir verstehen ___ Analogie.",
        "dative": "Bei ___ Analogie brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Angleichung",
      "translation": {
        "tr": "Hizalama",
        "en": "Alignment"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Angleichung.",
        "accusative": "Ich erkläre ___ Angleichung.",
        "dative": "An ___ Angleichung arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Ästhetik",
      "translation": {
        "tr": "Estetik",
        "en": "Aesthetics"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Ästhetik wichtig.",
        "accusative": "Wir verstehen ___ Ästhetik.",
        "dative": "Bei ___ Ästhetik brauche ich Hilfe."
      }
    },
    {
      "article": "der",
      "word": "Aufsichtsrat",
      "translation": {
        "tr": "Denetleme Kurulu",
        "en": "Supervisory Board"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Aufsichtsrat.",
        "accusative": "Ich sehe ___ Aufsichtsrat.",
        "dative": "Ich gehe mit ___ Aufsichtsrat."
      }
    },
    {
      "article": "die",
      "word": "Aufzucht",
      "translation": {
        "tr": "yetiştirme",
        "en": "rearing"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Aufzucht.",
        "accusative": "Ich trage ___ Aufzucht.",
        "dative": "Neben ___ Aufzucht liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Ausprägung",
      "translation": {
        "tr": "ifade",
        "en": "expression"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ausprägung.",
        "accusative": "Ich sehe ___ Ausprägung.",
        "dative": "Ich gehe mit ___ Ausprägung."
      }
    },
    {
      "article": "der",
      "word": "Baron",
      "translation": {
        "tr": "Baron",
        "en": "Baron"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Baron.",
        "accusative": "Ich sehe ___ Baron.",
        "dative": "Ich gehe mit ___ Baron."
      }
    },
    {
      "article": "die",
      "word": "Berücksichtigung",
      "translation": {
        "tr": "dikkate alma",
        "en": "consideration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Berücksichtigung.",
        "accusative": "Ich sehe ___ Berücksichtigung.",
        "dative": "Ich gehe mit ___ Berücksichtigung."
      }
    },
    {
      "article": "die",
      "word": "Beschleunigung",
      "translation": {
        "tr": "Hızlanma",
        "en": "Acceleration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Beschleunigung.",
        "accusative": "Ich nehme ___ Beschleunigung.",
        "dative": "Vor ___ Beschleunigung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Bruttoinlandsprodukt",
      "translation": {
        "tr": "Gayri safi yurtiçi hasıla",
        "en": "Gross domestic product"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Bruttoinlandsprodukt.",
        "accusative": "Ich nehme ___ Bruttoinlandsprodukt.",
        "dative": "Vor ___ Bruttoinlandsprodukt steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Datensatz",
      "translation": {
        "tr": "Veri kümesi",
        "en": "Dataset"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Datensatz.",
        "accusative": "Ich sehe ___ Datensatz.",
        "dative": "Ich gehe mit ___ Datensatz."
      }
    },
    {
      "article": "die",
      "word": "Datenverarbeitung",
      "translation": {
        "tr": "Veri işleme",
        "en": "Data processing"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Datenverarbeitung.",
        "accusative": "Ich nehme ___ Datenverarbeitung.",
        "dative": "Vor ___ Datenverarbeitung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Deutung",
      "translation": {
        "tr": "Yorumlama",
        "en": "Interpretation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Deutung.",
        "accusative": "Ich sehe ___ Deutung.",
        "dative": "Ich gehe mit ___ Deutung."
      }
    },
    {
      "article": "die",
      "word": "Dichte",
      "translation": {
        "tr": "yoğunluk",
        "en": "density"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Dichte.",
        "accusative": "Ich kaufe ___ Dichte.",
        "dative": "Mit ___ Dichte arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Diskretion",
      "translation": {
        "tr": "Takdir",
        "en": "Discretion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Diskretion.",
        "accusative": "Ich suche ___ Diskretion.",
        "dative": "Neben ___ Diskretion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Division",
      "translation": {
        "tr": "bölme",
        "en": "division"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Division.",
        "accusative": "Ich suche ___ Division.",
        "dative": "Neben ___ Division liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Domäne",
      "translation": {
        "tr": "etki alanı",
        "en": "domain"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Domäne.",
        "accusative": "Ich nehme ___ Domäne.",
        "dative": "Vor ___ Domäne steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Dominanz",
      "translation": {
        "tr": "Hakimiyet",
        "en": "Dominance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Dominanz.",
        "accusative": "Ich sehe ___ Dominanz.",
        "dative": "Ich gehe mit ___ Dominanz."
      }
    },
    {
      "article": "die",
      "word": "Echtzeit",
      "translation": {
        "tr": "Gerçek zamanlı",
        "en": "Real time"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Echtzeit.",
        "accusative": "Ich treffe ___ Echtzeit.",
        "dative": "Ich helfe ___ Echtzeit."
      }
    },
    {
      "article": "die",
      "word": "Effizienz",
      "translation": {
        "tr": "Verimlilik",
        "en": "Efficiency"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Effizienz.",
        "accusative": "Ich nehme ___ Effizienz.",
        "dative": "Vor ___ Effizienz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ekstase",
      "translation": {
        "tr": "Ecstasy",
        "en": "Ecstasy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ekstase.",
        "accusative": "Ich sehe ___ Ekstase.",
        "dative": "Ich gehe mit ___ Ekstase."
      }
    },
    {
      "article": "die",
      "word": "Empfindlichkeit",
      "translation": {
        "tr": "Hassasiyet",
        "en": "Sensitivity"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Empfindlichkeit.",
        "accusative": "Ich kaufe ___ Empfindlichkeit.",
        "dative": "Mit ___ Empfindlichkeit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Empörung",
      "translation": {
        "tr": "Öfke",
        "en": "Outrage"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Empörung.",
        "accusative": "Ich nehme ___ Empörung.",
        "dative": "Vor ___ Empörung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Energieträger",
      "translation": {
        "tr": "enerji kaynağı",
        "en": "energy source"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Energieträger.",
        "accusative": "Ich erkläre ___ Energieträger.",
        "dative": "An ___ Energieträger arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Energiewirtschaft",
      "translation": {
        "tr": "Enerji endüstrisi",
        "en": "Energy industry"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Energiewirtschaft.",
        "accusative": "Ich erwarte ___ Energiewirtschaft.",
        "dative": "Vor ___ Energiewirtschaft bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Entscheidungsfindung",
      "translation": {
        "tr": "Karar verme",
        "en": "Decision making"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Entscheidungsfindung.",
        "accusative": "Ich sehe ___ Entscheidungsfindung.",
        "dative": "Ich gehe mit ___ Entscheidungsfindung."
      }
    },
    {
      "article": "die",
      "word": "Entschlossenheit",
      "translation": {
        "tr": "Kararlılık",
        "en": "Determination"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Entschlossenheit.",
        "accusative": "Ich sehe ___ Entschlossenheit.",
        "dative": "Ich gehe mit ___ Entschlossenheit."
      }
    },
    {
      "article": "das",
      "word": "Erbgut",
      "translation": {
        "tr": "Genetik materyal",
        "en": "Genetic material"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erbgut.",
        "accusative": "Ich kaufe ___ Erbgut.",
        "dative": "Mit ___ Erbgut arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erkenntnis",
      "translation": {
        "tr": "bilgi",
        "en": "knowledge"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Erkenntnis wichtig.",
        "accusative": "Wir verstehen ___ Erkenntnis.",
        "dative": "Bei ___ Erkenntnis brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Erkennung",
      "translation": {
        "tr": "Algılama",
        "en": "Detection"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Erkennung.",
        "accusative": "Ich sehe ___ Erkennung.",
        "dative": "Ich gehe mit ___ Erkennung."
      }
    },
    {
      "article": "die",
      "word": "Erregung",
      "translation": {
        "tr": "Heyecan",
        "en": "Excitement"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Erregung.",
        "accusative": "Ich kaufe ___ Erregung.",
        "dative": "Mit ___ Erregung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Erstellung",
      "translation": {
        "tr": "Yaratılış",
        "en": "Creation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Erstellung.",
        "accusative": "Ich suche ___ Erstellung.",
        "dative": "Neben ___ Erstellung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Erwägung",
      "translation": {
        "tr": "dikkate alma",
        "en": "consideration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Erwägung.",
        "accusative": "Ich nehme ___ Erwägung.",
        "dative": "Vor ___ Erwägung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Fokus",
      "translation": {
        "tr": "Odaklanma",
        "en": "Focus"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Fokus.",
        "accusative": "Ich sehe ___ Fokus.",
        "dative": "Ich gehe mit ___ Fokus."
      }
    },
    {
      "article": "das",
      "word": "Gebot",
      "translation": {
        "tr": "emir",
        "en": "Commandment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gebot.",
        "accusative": "Ich besuche ___ Gebot.",
        "dative": "Ich danke ___ Gebot."
      }
    },
    {
      "article": "der",
      "word": "Gebrauch",
      "translation": {
        "tr": "Kullanım",
        "en": "Use"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gebrauch.",
        "accusative": "Ich suche ___ Gebrauch.",
        "dative": "Neben ___ Gebrauch liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gedächtnis",
      "translation": {
        "tr": "hafıza",
        "en": "memory"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gedächtnis.",
        "accusative": "Ich sehe ___ Gedächtnis.",
        "dative": "Ich gehe mit ___ Gedächtnis."
      }
    },
    {
      "article": "der",
      "word": "Gedanke",
      "translation": {
        "tr": "düşünce",
        "en": "thought"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gedanke.",
        "accusative": "Ich suche ___ Gedanke.",
        "dative": "Neben ___ Gedanke liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gefallen",
      "translation": {
        "tr": "Beğendim",
        "en": "Liked"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Gefallen.",
        "accusative": "Ich organisiere ___ Gefallen.",
        "dative": "Nach ___ Gefallen fahre ich nach Hause."
      }
    },
    {
      "article": "das",
      "word": "Gefäß",
      "translation": {
        "tr": "damar",
        "en": "vessel"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gefäß.",
        "accusative": "Ich nehme ___ Gefäß.",
        "dative": "Vor ___ Gefäß steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gefühl",
      "translation": {
        "tr": "duygu",
        "en": "feeling"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gefühl.",
        "accusative": "Ich sehe ___ Gefühl.",
        "dative": "Ich gehe mit ___ Gefühl."
      }
    },
    {
      "article": "der",
      "word": "Gegensatz",
      "translation": {
        "tr": "Kontrast",
        "en": "Contrast"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gegensatz.",
        "accusative": "Ich suche ___ Gegensatz.",
        "dative": "Neben ___ Gegensatz liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gegenstück",
      "translation": {
        "tr": "muadili",
        "en": "counterpart"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gegenstück.",
        "accusative": "Ich sehe ___ Gegenstück.",
        "dative": "Ich gehe mit ___ Gegenstück."
      }
    },
    {
      "article": "der",
      "word": "Geheimdienst",
      "translation": {
        "tr": "Gizli Servis",
        "en": "Secret Service"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geheimdienst.",
        "accusative": "Ich nehme ___ Geheimdienst.",
        "dative": "Vor ___ Geheimdienst steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gehör",
      "translation": {
        "tr": "işitme",
        "en": "hearing"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Gehör.",
        "accusative": "Ich suche ___ Gehör.",
        "dative": "Ich gehe mit ___ Gehör raus."
      }
    },
    {
      "article": "die",
      "word": "Geisel",
      "translation": {
        "tr": "rehine",
        "en": "hostage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geisel.",
        "accusative": "Ich suche ___ Geisel.",
        "dative": "Neben ___ Geisel liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Geldstrafe",
      "translation": {
        "tr": "iyi",
        "en": "Fine"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Geldstrafe.",
        "accusative": "Ich kaufe ___ Geldstrafe.",
        "dative": "Mit ___ Geldstrafe arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gemeinderat",
      "translation": {
        "tr": "Belediye meclisi",
        "en": "Municipal council"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gemeinderat.",
        "accusative": "Ich sehe ___ Gemeinderat.",
        "dative": "Ich gehe mit ___ Gemeinderat."
      }
    },
    {
      "article": "die",
      "word": "Gemeinsamkeit",
      "translation": {
        "tr": "ortak nokta",
        "en": "Commonality"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gemeinsamkeit.",
        "accusative": "Ich nehme ___ Gemeinsamkeit.",
        "dative": "Vor ___ Gemeinsamkeit steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gemisch",
      "translation": {
        "tr": "Karışım",
        "en": "Mixture"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gemisch.",
        "accusative": "Ich suche ___ Gemisch.",
        "dative": "Neben ___ Gemisch liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gemüt",
      "translation": {
        "tr": "zihin",
        "en": "mind"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gemüt.",
        "accusative": "Ich nehme ___ Gemüt.",
        "dative": "Vor ___ Gemüt steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gen",
      "translation": {
        "tr": "Gen",
        "en": "Gen"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gen.",
        "accusative": "Ich sehe ___ Gen.",
        "dative": "Ich gehe mit ___ Gen."
      }
    },
    {
      "article": "die",
      "word": "Genauigkeit",
      "translation": {
        "tr": "doğruluk",
        "en": "Accuracy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Genauigkeit.",
        "accusative": "Ich sehe ___ Genauigkeit.",
        "dative": "Ich gehe mit ___ Genauigkeit."
      }
    },
    {
      "article": "die",
      "word": "Genehmigung",
      "translation": {
        "tr": "Onay",
        "en": "Approval"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Genehmigung.",
        "accusative": "Ich kaufe ___ Genehmigung.",
        "dative": "Mit ___ Genehmigung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Generalsekretär",
      "translation": {
        "tr": "Genel Sekreter",
        "en": "Secretary General"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Generalsekretär.",
        "accusative": "Ich suche ___ Generalsekretär.",
        "dative": "Neben ___ Generalsekretär liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Generation",
      "translation": {
        "tr": "nesil",
        "en": "generation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Generation.",
        "accusative": "Ich suche ___ Generation.",
        "dative": "Neben ___ Generation liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Generator",
      "translation": {
        "tr": "jeneratör",
        "en": "generator"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Generator.",
        "accusative": "Ich suche ___ Generator.",
        "dative": "Neben ___ Generator liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Genie",
      "translation": {
        "tr": "Dahi",
        "en": "Genius"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Genie.",
        "accusative": "Ich nehme ___ Genie.",
        "dative": "Vor ___ Genie steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Genre",
      "translation": {
        "tr": "Tür",
        "en": "Genre"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Genre.",
        "accusative": "Ich suche ___ Genre.",
        "dative": "Neben ___ Genre liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gentleman",
      "translation": {
        "tr": "Beyefendi",
        "en": "Gentleman"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gentleman.",
        "accusative": "Ich besuche ___ Gentleman.",
        "dative": "Ich danke ___ Gentleman."
      }
    },
    {
      "article": "der",
      "word": "Genuss",
      "translation": {
        "tr": "Zevk",
        "en": "Enjoyment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Genuss.",
        "accusative": "Ich suche ___ Genuss.",
        "dative": "Neben ___ Genuss liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Geografie",
      "translation": {
        "tr": "Coğrafya",
        "en": "Geography"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geografie.",
        "accusative": "Ich nehme ___ Geografie.",
        "dative": "Vor ___ Geografie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Geometrie",
      "translation": {
        "tr": "Geometri",
        "en": "Geometry"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Geometrie.",
        "accusative": "Ich nehme ___ Geometrie.",
        "dative": "Vor ___ Geometrie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gerechtigkeit",
      "translation": {
        "tr": "Adalet",
        "en": "Justice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gerechtigkeit.",
        "accusative": "Ich sehe ___ Gerechtigkeit.",
        "dative": "Ich gehe mit ___ Gerechtigkeit."
      }
    },
    {
      "article": "das",
      "word": "Gerede",
      "translation": {
        "tr": "Konuşma",
        "en": "Talk"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gerede.",
        "accusative": "Ich sehe ___ Gerede.",
        "dative": "Ich gehe mit ___ Gerede."
      }
    },
    {
      "article": "das",
      "word": "Gericht",
      "translation": {
        "tr": "mahkeme",
        "en": "court"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gericht.",
        "accusative": "Ich nehme ___ Gericht.",
        "dative": "Vor ___ Gericht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gerichtsbarkeit",
      "translation": {
        "tr": "Yargı yetkisi",
        "en": "Jurisdiction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gerichtsbarkeit.",
        "accusative": "Ich sehe ___ Gerichtsbarkeit.",
        "dative": "Ich gehe mit ___ Gerichtsbarkeit."
      }
    },
    {
      "article": "die",
      "word": "Germanistik",
      "translation": {
        "tr": "Almanca çalışmaları",
        "en": "German studies"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Germanistik.",
        "accusative": "Ich sehe ___ Germanistik.",
        "dative": "Ich antworte ___ Germanistik."
      }
    },
    {
      "article": "die",
      "word": "Gesamtsumme",
      "translation": {
        "tr": "Toplam",
        "en": "Total"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesamtsumme.",
        "accusative": "Ich sehe ___ Gesamtsumme.",
        "dative": "Ich gehe mit ___ Gesamtsumme."
      }
    },
    {
      "article": "der",
      "word": "Geschäftsführer",
      "translation": {
        "tr": "Genel Müdür",
        "en": "Managing Director"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geschäftsführer.",
        "accusative": "Ich besuche ___ Geschäftsführer.",
        "dative": "Ich danke ___ Geschäftsführer."
      }
    },
    {
      "article": "das",
      "word": "Geschäftsjahr",
      "translation": {
        "tr": "mali yıl",
        "en": "fiscal year"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Geschäftsjahr.",
        "accusative": "Ich kaufe ___ Geschäftsjahr.",
        "dative": "Mit ___ Geschäftsjahr arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Geschäftsmann",
      "translation": {
        "tr": "İş adamı",
        "en": "Businessman"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Geschäftsmann.",
        "accusative": "Ich sehe ___ Geschäftsmann.",
        "dative": "Ich antworte ___ Geschäftsmann."
      }
    },
    {
      "article": "das",
      "word": "Geschehen",
      "translation": {
        "tr": "oldu",
        "en": "Happened"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geschehen.",
        "accusative": "Ich suche ___ Geschehen.",
        "dative": "Ich telefoniere mit ___ Geschehen."
      }
    },
    {
      "article": "das",
      "word": "Geschlecht",
      "translation": {
        "tr": "Cinsiyet",
        "en": "Gender"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Geschlecht.",
        "accusative": "Ich organisiere ___ Geschlecht.",
        "dative": "Nach ___ Geschlecht fahre ich nach Hause."
      }
    },
    {
      "article": "das",
      "word": "Geschrei",
      "translation": {
        "tr": "Bağırmak",
        "en": "Yelling"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Geschrei.",
        "accusative": "Ich suche ___ Geschrei.",
        "dative": "Neben ___ Geschrei liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Geschwindigkeit",
      "translation": {
        "tr": "Hız",
        "en": "Speed"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Geschwindigkeit.",
        "accusative": "Ich sehe ___ Geschwindigkeit.",
        "dative": "Ich sitze an ___ Geschwindigkeit."
      }
    },
    {
      "article": "der",
      "word": "Gesellschafter",
      "translation": {
        "tr": "hissedar",
        "en": "shareholder"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gesellschafter.",
        "accusative": "Ich kaufe ___ Gesellschafter.",
        "dative": "Mit ___ Gesellschafter arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gesetzgeber",
      "translation": {
        "tr": "Yasama Meclisi",
        "en": "Legislature"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesetzgeber.",
        "accusative": "Ich sehe ___ Gesetzgeber.",
        "dative": "Ich gehe mit ___ Gesetzgeber."
      }
    },
    {
      "article": "die",
      "word": "Gesetzgebung",
      "translation": {
        "tr": "Mevzuat",
        "en": "Legislation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gesetzgebung.",
        "accusative": "Ich nehme ___ Gesetzgebung.",
        "dative": "Vor ___ Gesetzgebung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Gesichtspunkt",
      "translation": {
        "tr": "bakış açısı",
        "en": "point of view"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gesichtspunkt.",
        "accusative": "Ich sehe ___ Gesichtspunkt.",
        "dative": "Ich gehe mit ___ Gesichtspunkt."
      }
    },
    {
      "article": "das",
      "word": "Gespür",
      "translation": {
        "tr": "yetenek",
        "en": "flair"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Gespür.",
        "accusative": "Ich entdecke ___ Gespür.",
        "dative": "Ich gehe zu ___ Gespür."
      }
    },
    {
      "article": "die",
      "word": "Gestalt",
      "translation": {
        "tr": "şekil",
        "en": "shape"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gestalt.",
        "accusative": "Ich kaufe ___ Gestalt.",
        "dative": "Mit ___ Gestalt arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gestaltung",
      "translation": {
        "tr": "Tasarım",
        "en": "Design"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gestaltung.",
        "accusative": "Ich sehe ___ Gestaltung.",
        "dative": "Ich gehe mit ___ Gestaltung."
      }
    },
    {
      "article": "das",
      "word": "Geständnis",
      "translation": {
        "tr": "İtiraf",
        "en": "Confession"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Geständnis.",
        "accusative": "Ich sehe ___ Geständnis.",
        "dative": "Ich gehe mit ___ Geständnis."
      }
    },
    {
      "article": "der",
      "word": "Gestank",
      "translation": {
        "tr": "Kokuşmuş",
        "en": "Stink"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gestank.",
        "accusative": "Ich sehe ___ Gestank.",
        "dative": "Ich gehe mit ___ Gestank."
      }
    },
    {
      "article": "die",
      "word": "Gewähr",
      "translation": {
        "tr": "Garanti",
        "en": "Guarantee"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gewähr.",
        "accusative": "Ich nehme ___ Gewähr.",
        "dative": "Vor ___ Gewähr steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gewalt",
      "translation": {
        "tr": "Şiddet",
        "en": "Violence"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gewalt.",
        "accusative": "Ich nehme ___ Gewalt.",
        "dative": "Vor ___ Gewalt steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gewand",
      "translation": {
        "tr": "elbise",
        "en": "robe"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gewand.",
        "accusative": "Ich sehe ___ Gewand.",
        "dative": "Ich gehe mit ___ Gewand."
      }
    },
    {
      "article": "das",
      "word": "Gewebe",
      "translation": {
        "tr": "Doku",
        "en": "Tissue"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gewebe.",
        "accusative": "Ich sehe ___ Gewebe.",
        "dative": "Ich gehe mit ___ Gewebe."
      }
    },
    {
      "article": "der",
      "word": "Gewinn",
      "translation": {
        "tr": "kâr",
        "en": "profit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gewinn.",
        "accusative": "Ich suche ___ Gewinn.",
        "dative": "Neben ___ Gewinn liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gewinner",
      "translation": {
        "tr": "Kazanan",
        "en": "Winner"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gewinner.",
        "accusative": "Ich sehe ___ Gewinner.",
        "dative": "Ich gehe mit ___ Gewinner."
      }
    },
    {
      "article": "das",
      "word": "Gewissen",
      "translation": {
        "tr": "vicdan",
        "en": "conscience"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gewissen.",
        "accusative": "Ich kaufe ___ Gewissen.",
        "dative": "Mit ___ Gewissen arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gewissheit",
      "translation": {
        "tr": "kesinlik",
        "en": "Certainty"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gewissheit.",
        "accusative": "Ich kaufe ___ Gewissheit.",
        "dative": "Mit ___ Gewissheit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Gier",
      "translation": {
        "tr": "Açgözlülük",
        "en": "Greed"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gier.",
        "accusative": "Ich sehe ___ Gier.",
        "dative": "Ich gehe mit ___ Gier."
      }
    },
    {
      "article": "der",
      "word": "Gipfel",
      "translation": {
        "tr": "Zirve",
        "en": "Summit"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gipfel.",
        "accusative": "Ich sehe ___ Gipfel.",
        "dative": "Ich gehe mit ___ Gipfel."
      }
    },
    {
      "article": "der",
      "word": "Glaube",
      "translation": {
        "tr": "inanç",
        "en": "Faith"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Glaube.",
        "accusative": "Ich suche ___ Glaube.",
        "dative": "Neben ___ Glaube liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Gläubiger",
      "translation": {
        "tr": "alacaklı",
        "en": "creditor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gläubiger.",
        "accusative": "Ich kaufe ___ Gläubiger.",
        "dative": "Mit ___ Gläubiger arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Glaubwürdigkeit",
      "translation": {
        "tr": "Güvenilirlik",
        "en": "Credibility"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Glaubwürdigkeit.",
        "accusative": "Ich kaufe ___ Glaubwürdigkeit.",
        "dative": "Mit ___ Glaubwürdigkeit arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Gleichgewicht",
      "translation": {
        "tr": "Bakiye",
        "en": "Balance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Gleichgewicht.",
        "accusative": "Ich nehme ___ Gleichgewicht.",
        "dative": "Vor ___ Gleichgewicht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gleichheit",
      "translation": {
        "tr": "Eşitlik",
        "en": "Equality"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Gleichheit.",
        "accusative": "Ich erkläre ___ Gleichheit.",
        "dative": "An ___ Gleichheit arbeiten wir."
      }
    },
    {
      "article": "das",
      "word": "Glied",
      "translation": {
        "tr": "uzuv",
        "en": "limb"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Glied.",
        "accusative": "Ich nehme ___ Glied.",
        "dative": "Vor ___ Glied steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Gliederung",
      "translation": {
        "tr": "Taslak",
        "en": "Outline"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gliederung.",
        "accusative": "Ich sehe ___ Gliederung.",
        "dative": "Ich gehe mit ___ Gliederung."
      }
    },
    {
      "article": "die",
      "word": "Globalisierung",
      "translation": {
        "tr": "Küreselleşme",
        "en": "Globalization"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Globalisierung.",
        "accusative": "Ich suche ___ Globalisierung.",
        "dative": "Neben ___ Globalisierung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Glücksbringer",
      "translation": {
        "tr": "Şanslı çekicilik",
        "en": "Lucky charm"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Glücksbringer.",
        "accusative": "Ich suche ___ Glücksbringer.",
        "dative": "Ich gehe mit ___ Glücksbringer raus."
      }
    },
    {
      "article": "das",
      "word": "Glücksspiel",
      "translation": {
        "tr": "Kumar",
        "en": "Gambling"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Glücksspiel.",
        "accusative": "Ich sehe ___ Glücksspiel.",
        "dative": "Ich gehe mit ___ Glücksspiel."
      }
    },
    {
      "article": "die",
      "word": "Gnade",
      "translation": {
        "tr": "zarafet",
        "en": "Grace"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gnade.",
        "accusative": "Ich kaufe ___ Gnade.",
        "dative": "Mit ___ Gnade arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Gouverneur",
      "translation": {
        "tr": "Vali",
        "en": "Governor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gouverneur.",
        "accusative": "Ich suche ___ Gouverneur.",
        "dative": "Neben ___ Gouverneur liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Graf",
      "translation": {
        "tr": "Sayım",
        "en": "Count"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Graf.",
        "accusative": "Ich kaufe ___ Graf.",
        "dative": "Mit ___ Graf arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Grafik",
      "translation": {
        "tr": "Grafik",
        "en": "Graphics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Grafik.",
        "accusative": "Ich kaufe ___ Grafik.",
        "dative": "Mit ___ Grafik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Grafiker",
      "translation": {
        "tr": "Grafik sanatçısı",
        "en": "Graphic artist"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grafiker.",
        "accusative": "Ich besuche ___ Grafiker.",
        "dative": "Ich danke ___ Grafiker."
      }
    },
    {
      "article": "die",
      "word": "Grafschaft",
      "translation": {
        "tr": "ilçe",
        "en": "county"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Grafschaft.",
        "accusative": "Ich nehme ___ Grafschaft.",
        "dative": "Vor ___ Grafschaft steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Granit",
      "translation": {
        "tr": "Granit",
        "en": "Granite"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Granit.",
        "accusative": "Ich nehme ___ Granit.",
        "dative": "Vor ___ Granit steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Gremium",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gremium.",
        "accusative": "Ich kaufe ___ Gremium.",
        "dative": "Mit ___ Gremium arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Grenzwert",
      "translation": {
        "tr": "sınır",
        "en": "limit"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Grenzwert.",
        "accusative": "Ich nehme ___ Grenzwert.",
        "dative": "Vor ___ Grenzwert steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Grinsen",
      "translation": {
        "tr": "sırıtış",
        "en": "Grin"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grinsen.",
        "accusative": "Ich suche ___ Grinsen.",
        "dative": "Neben ___ Grinsen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Größenordnung",
      "translation": {
        "tr": "Büyüklük",
        "en": "Magnitude"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Größenordnung.",
        "accusative": "Ich sehe ___ Größenordnung.",
        "dative": "Ich gehe mit ___ Größenordnung."
      }
    },
    {
      "article": "der",
      "word": "Großteil",
      "translation": {
        "tr": "Çoğunluk",
        "en": "Majority"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Großteil.",
        "accusative": "Ich sehe ___ Großteil.",
        "dative": "Ich gehe mit ___ Großteil."
      }
    },
    {
      "article": "die",
      "word": "Gruft",
      "translation": {
        "tr": "Kripto",
        "en": "Crypt"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gruft.",
        "accusative": "Ich suche ___ Gruft.",
        "dative": "Neben ___ Gruft liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Grundrecht",
      "translation": {
        "tr": "Temel hak",
        "en": "Fundamental right"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Grundrecht.",
        "accusative": "Ich nehme ___ Grundrecht.",
        "dative": "Vor ___ Grundrecht steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Grundsatz",
      "translation": {
        "tr": "prensip",
        "en": "principle"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grundsatz.",
        "accusative": "Ich sehe ___ Grundsatz.",
        "dative": "Ich gehe mit ___ Grundsatz."
      }
    },
    {
      "article": "das",
      "word": "Grundstück",
      "translation": {
        "tr": "Mülkiyet",
        "en": "Property"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Grundstück.",
        "accusative": "Ich sehe ___ Grundstück.",
        "dative": "Ich gehe mit ___ Grundstück."
      }
    },
    {
      "article": "die",
      "word": "Gründung",
      "translation": {
        "tr": "Kurucu",
        "en": "Founding"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gründung.",
        "accusative": "Ich kaufe ___ Gründung.",
        "dative": "Mit ___ Gründung arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Grüne",
      "translation": {
        "tr": "Yeşiller",
        "en": "Greens"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Grüne.",
        "accusative": "Ich suche ___ Grüne.",
        "dative": "Neben ___ Grüne liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Guerilla",
      "translation": {
        "tr": "Gerilla",
        "en": "Guerrilla"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Guerilla.",
        "accusative": "Ich suche ___ Guerilla.",
        "dative": "Neben ___ Guerilla liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Gültigkeit",
      "translation": {
        "tr": "Geçerlilik",
        "en": "Validity"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Gültigkeit.",
        "accusative": "Ich sehe ___ Gültigkeit.",
        "dative": "Ich gehe mit ___ Gültigkeit."
      }
    },
    {
      "article": "die",
      "word": "Gunst",
      "translation": {
        "tr": "iyilik",
        "en": "Favor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Gunst.",
        "accusative": "Ich kaufe ___ Gunst.",
        "dative": "Mit ___ Gunst arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Guru",
      "translation": {
        "tr": "guru",
        "en": "Guru"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Guru.",
        "accusative": "Ich suche ___ Guru.",
        "dative": "Neben ___ Guru liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Gutachten",
      "translation": {
        "tr": "Rapor",
        "en": "Report"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Gutachten.",
        "accusative": "Ich drucke ___ Gutachten.",
        "dative": "Aus ___ Gutachten lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Haft",
      "translation": {
        "tr": "Gözaltı",
        "en": "Detention"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Haft.",
        "accusative": "Ich kaufe ___ Haft.",
        "dative": "Mit ___ Haft arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Haftbefehl",
      "translation": {
        "tr": "Tutuklama emri",
        "en": "Arrest warrant"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Haftbefehl zentral.",
        "accusative": "Wir besprechen ___ Haftbefehl.",
        "dative": "Mit ___ Haftbefehl wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Häftling",
      "translation": {
        "tr": "Mahkum",
        "en": "Prisoner"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Häftling.",
        "accusative": "Ich besuche ___ Häftling.",
        "dative": "Ich danke ___ Häftling."
      }
    },
    {
      "article": "die",
      "word": "Haftung",
      "translation": {
        "tr": "Sorumluluk",
        "en": "Liability"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Haftung.",
        "accusative": "Ich sehe ___ Haftung.",
        "dative": "Ich gehe mit ___ Haftung."
      }
    },
    {
      "article": "die",
      "word": "Haltung",
      "translation": {
        "tr": "Tutum",
        "en": "Attitude"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Haltung.",
        "accusative": "Ich kaufe ___ Haltung.",
        "dative": "Mit ___ Haltung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Handvoll",
      "translation": {
        "tr": "bir avuç",
        "en": "handful"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Handvoll.",
        "accusative": "Ich suche ___ Handvoll.",
        "dative": "Neben ___ Handvoll liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hardware",
      "translation": {
        "tr": "Donanım",
        "en": "Hardware"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Hardware.",
        "accusative": "Ich erkläre ___ Hardware.",
        "dative": "An ___ Hardware arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Harmonie",
      "translation": {
        "tr": "Uyum",
        "en": "Harmony"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Harmonie.",
        "accusative": "Ich nehme ___ Harmonie.",
        "dative": "Vor ___ Harmonie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Hass",
      "translation": {
        "tr": "Nefret",
        "en": "Hate"
      },
      "casePrompts": {
        "nominative": "Im Laden ist ___ Hass.",
        "accusative": "Ich kaufe ___ Hass.",
        "dative": "Zu ___ Hass passt die Tasche."
      }
    },
    {
      "article": "die",
      "word": "Hast",
      "translation": {
        "tr": "sen",
        "en": "You"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hast.",
        "accusative": "Ich nehme ___ Hast.",
        "dative": "Vor ___ Hast steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Häufigkeit",
      "translation": {
        "tr": "Frekans",
        "en": "Frequency"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Häufigkeit.",
        "accusative": "Ich sehe ___ Häufigkeit.",
        "dative": "Ich gehe mit ___ Häufigkeit."
      }
    },
    {
      "article": "das",
      "word": "Hauptquartier",
      "translation": {
        "tr": "Karargah",
        "en": "Headquarters"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hauptquartier.",
        "accusative": "Ich suche ___ Hauptquartier.",
        "dative": "Neben ___ Hauptquartier liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Heide",
      "translation": {
        "tr": "Heath",
        "en": "Heath"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Heide.",
        "accusative": "Ich nehme ___ Heide.",
        "dative": "Vor ___ Heide steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Heilmittel",
      "translation": {
        "tr": "Çözüm",
        "en": "Remedy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Heilmittel.",
        "accusative": "Ich kaufe ___ Heilmittel.",
        "dative": "Mit ___ Heilmittel arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Heimatland",
      "translation": {
        "tr": "vatan",
        "en": "homeland"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Heimatland.",
        "accusative": "Ich sehe ___ Heimatland.",
        "dative": "Ich bleibe in ___ Heimatland."
      }
    },
    {
      "article": "das",
      "word": "Heimweh",
      "translation": {
        "tr": "Ev hasreti",
        "en": "Homesickness"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Heimweh.",
        "accusative": "Ich sehe ___ Heimweh.",
        "dative": "Ich bleibe in ___ Heimweh."
      }
    },
    {
      "article": "der",
      "word": "Hektar",
      "translation": {
        "tr": "hektar",
        "en": "hectares"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hektar.",
        "accusative": "Ich sehe ___ Hektar.",
        "dative": "Ich gehe mit ___ Hektar."
      }
    },
    {
      "article": "die",
      "word": "Hektik",
      "translation": {
        "tr": "koşuşturma",
        "en": "hustle and bustle"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Hektik.",
        "accusative": "Ich miete ___ Hektik.",
        "dative": "Ich fahre mit ___ Hektik."
      }
    },
    {
      "article": "die",
      "word": "Herausforderung",
      "translation": {
        "tr": "Mücadele",
        "en": "Challenge"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Herausforderung.",
        "accusative": "Ich kaufe ___ Herausforderung.",
        "dative": "Mit ___ Herausforderung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Herausgeber",
      "translation": {
        "tr": "Editör",
        "en": "Editor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Herausgeber.",
        "accusative": "Ich sehe ___ Herausgeber.",
        "dative": "Ich gehe mit ___ Herausgeber."
      }
    },
    {
      "article": "die",
      "word": "Herkunft",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Herkunft.",
        "accusative": "Ich kaufe ___ Herkunft.",
        "dative": "Mit ___ Herkunft arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Herrschaft",
      "translation": {
        "tr": "Hakimiyet",
        "en": "Domination"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Herrschaft.",
        "accusative": "Ich sehe ___ Herrschaft.",
        "dative": "Ich gehe mit ___ Herrschaft."
      }
    },
    {
      "article": "die",
      "word": "Herstellung",
      "translation": {
        "tr": "İmalat",
        "en": "Manufacturing"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Herstellung.",
        "accusative": "Ich sehe ___ Herstellung.",
        "dative": "Ich antworte ___ Herstellung."
      }
    },
    {
      "article": "der",
      "word": "Herzog",
      "translation": {
        "tr": "Dük",
        "en": "Duke"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Herzog.",
        "accusative": "Ich sehe ___ Herzog.",
        "dative": "Ich gehe mit ___ Herzog."
      }
    },
    {
      "article": "die",
      "word": "Hexerei",
      "translation": {
        "tr": "Büyücülük",
        "en": "Witchcraft"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hexerei.",
        "accusative": "Ich kaufe ___ Hexerei.",
        "dative": "Mit ___ Hexerei arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Highlight",
      "translation": {
        "tr": "Vurgula",
        "en": "Highlight"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Highlight.",
        "accusative": "Ich sehe ___ Highlight.",
        "dative": "Ich gehe mit ___ Highlight."
      }
    },
    {
      "article": "das",
      "word": "Hilfsmittel",
      "translation": {
        "tr": "Yardımlar",
        "en": "Aids"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hilfsmittel.",
        "accusative": "Ich suche ___ Hilfsmittel.",
        "dative": "Neben ___ Hilfsmittel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Hinblick",
      "translation": {
        "tr": "görünüm",
        "en": "view"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hinblick.",
        "accusative": "Ich nehme ___ Hinblick.",
        "dative": "Vor ___ Hinblick steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Hindernis",
      "translation": {
        "tr": "Engel",
        "en": "Obstacle"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hindernis.",
        "accusative": "Ich nehme ___ Hindernis.",
        "dative": "Vor ___ Hindernis steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Hinrichtung",
      "translation": {
        "tr": "Yürütme",
        "en": "Execution"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hinrichtung.",
        "accusative": "Ich kaufe ___ Hinrichtung.",
        "dative": "Mit ___ Hinrichtung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Hinsicht",
      "translation": {
        "tr": "saygı",
        "en": "respect"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hinsicht.",
        "accusative": "Ich suche ___ Hinsicht.",
        "dative": "Neben ___ Hinsicht liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Historiker",
      "translation": {
        "tr": "Tarihçi",
        "en": "Historian"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Historiker.",
        "accusative": "Ich nehme ___ Historiker.",
        "dative": "Vor ___ Historiker steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Hochschule",
      "translation": {
        "tr": "üniversite",
        "en": "College"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hochschule.",
        "accusative": "Ich nehme ___ Hochschule.",
        "dative": "Vor ___ Hochschule steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Hochwasser",
      "translation": {
        "tr": "Sel",
        "en": "Flood"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Hochwasser.",
        "accusative": "Ich nehme ___ Hochwasser.",
        "dative": "Vor ___ Hochwasser steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Humor",
      "translation": {
        "tr": "mizah",
        "en": "humor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Humor.",
        "accusative": "Ich suche ___ Humor.",
        "dative": "Neben ___ Humor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Hypothek",
      "translation": {
        "tr": "İpotek",
        "en": "Mortgage"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Hypothek.",
        "accusative": "Ich sehe ___ Hypothek.",
        "dative": "Ich gehe mit ___ Hypothek."
      }
    },
    {
      "article": "die",
      "word": "Hypothese",
      "translation": {
        "tr": "Hipotez",
        "en": "Hypothesis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Hypothese.",
        "accusative": "Ich kaufe ___ Hypothese.",
        "dative": "Mit ___ Hypothese arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Hysterie",
      "translation": {
        "tr": "Histeri",
        "en": "Hysteria"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Hysterie.",
        "accusative": "Ich suche ___ Hysterie.",
        "dative": "Neben ___ Hysterie liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ideal",
      "translation": {
        "tr": "İdeal",
        "en": "Ideal"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Ideal.",
        "accusative": "Ich erkläre ___ Ideal.",
        "dative": "An ___ Ideal arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Identität",
      "translation": {
        "tr": "Kimlik",
        "en": "Identity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Identität.",
        "accusative": "Ich nehme ___ Identität.",
        "dative": "Vor ___ Identität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Illusion",
      "translation": {
        "tr": "yanılsama",
        "en": "illusion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Illusion.",
        "accusative": "Ich suche ___ Illusion.",
        "dative": "Neben ___ Illusion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Illustration",
      "translation": {
        "tr": "illüstrasyon",
        "en": "illustration"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Illustration.",
        "accusative": "Ich suche ___ Illustration.",
        "dative": "Neben ___ Illustration liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Image",
      "translation": {
        "tr": "Resim",
        "en": "Image"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Image.",
        "accusative": "Ich öffne ___ Image.",
        "dative": "Ich arbeite mit ___ Image."
      }
    },
    {
      "article": "das",
      "word": "Immunsystem",
      "translation": {
        "tr": "bağışıklık sistemi",
        "en": "immune system"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Immunsystem wichtig.",
        "accusative": "Wir verstehen ___ Immunsystem.",
        "dative": "Bei ___ Immunsystem brauche ich Hilfe."
      }
    },
    {
      "article": "der",
      "word": "Import",
      "translation": {
        "tr": "İthalat",
        "en": "Import"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Import.",
        "accusative": "Ich suche ___ Import.",
        "dative": "Neben ___ Import liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Impuls",
      "translation": {
        "tr": "Dürtü",
        "en": "Impulse"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Impuls wichtig.",
        "accusative": "Wir verstehen ___ Impuls.",
        "dative": "Bei ___ Impuls brauche ich Hilfe."
      }
    },
    {
      "article": "der",
      "word": "Index",
      "translation": {
        "tr": "Dizin",
        "en": "Index"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Index.",
        "accusative": "Ich sehe ___ Index.",
        "dative": "Ich gehe mit ___ Index."
      }
    },
    {
      "article": "der",
      "word": "Indikator",
      "translation": {
        "tr": "Gösterge",
        "en": "Indicator"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Indikator.",
        "accusative": "Ich beobachte ___ Indikator.",
        "dative": "Ich stehe neben ___ Indikator."
      }
    },
    {
      "article": "das",
      "word": "Individuum",
      "translation": {
        "tr": "bireysel",
        "en": "individual"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Individuum.",
        "accusative": "Ich nehme ___ Individuum.",
        "dative": "Vor ___ Individuum steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Indiz",
      "translation": {
        "tr": "Endikasyon",
        "en": "Indication"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Indiz.",
        "accusative": "Ich beobachte ___ Indiz.",
        "dative": "Ich stehe neben ___ Indiz."
      }
    },
    {
      "article": "die",
      "word": "Infektion",
      "translation": {
        "tr": "enfeksiyon",
        "en": "infection"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Infektion.",
        "accusative": "Ich suche ___ Infektion.",
        "dative": "Neben ___ Infektion liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Inferno",
      "translation": {
        "tr": "Cehennem",
        "en": "Inferno"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Inferno.",
        "accusative": "Ich suche ___ Inferno.",
        "dative": "Neben ___ Inferno liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Inflation",
      "translation": {
        "tr": "Enflasyon",
        "en": "Inflation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Inflation.",
        "accusative": "Ich sehe ___ Inflation.",
        "dative": "Ich gehe mit ___ Inflation."
      }
    },
    {
      "article": "die",
      "word": "Inflationsrate",
      "translation": {
        "tr": "Enflasyon oranı",
        "en": "Inflation rate"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Inflationsrate.",
        "accusative": "Ich kaufe ___ Inflationsrate.",
        "dative": "Mit ___ Inflationsrate arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Informatik",
      "translation": {
        "tr": "Bilgisayar Bilimi",
        "en": "Computer Science"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Informatik.",
        "accusative": "Ich kaufe ___ Informatik.",
        "dative": "Ich arbeite mit ___ Informatik."
      }
    },
    {
      "article": "die",
      "word": "Infrastruktur",
      "translation": {
        "tr": "Altyapı",
        "en": "Infrastructure"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Infrastruktur zentral.",
        "accusative": "Wir besprechen ___ Infrastruktur.",
        "dative": "Mit ___ Infrastruktur wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Ingenieur",
      "translation": {
        "tr": "Mühendis",
        "en": "Engineer"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Ingenieur.",
        "accusative": "Ich starte ___ Ingenieur.",
        "dative": "Bei ___ Ingenieur lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Initiative",
      "translation": {
        "tr": "girişim",
        "en": "initiative"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Initiative.",
        "accusative": "Ich suche ___ Initiative.",
        "dative": "Neben ___ Initiative liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Innenminister",
      "translation": {
        "tr": "İçişleri Bakanı",
        "en": "Interior Minister"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Innenminister.",
        "accusative": "Ich sehe ___ Innenminister.",
        "dative": "Ich gehe mit ___ Innenminister."
      }
    },
    {
      "article": "der",
      "word": "Innenraum",
      "translation": {
        "tr": "İç mekan",
        "en": "Interior"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Innenraum.",
        "accusative": "Ich nehme ___ Innenraum.",
        "dative": "Vor ___ Innenraum steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Innenstadt",
      "translation": {
        "tr": "Şehir merkezi",
        "en": "Downtown"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Innenstadt.",
        "accusative": "Ich sehe ___ Innenstadt.",
        "dative": "Ich gehe mit ___ Innenstadt."
      }
    },
    {
      "article": "die",
      "word": "Innovation",
      "translation": {
        "tr": "Yenilik",
        "en": "Innovation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Innovation.",
        "accusative": "Ich suche ___ Innovation.",
        "dative": "Neben ___ Innovation liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Insasse",
      "translation": {
        "tr": "mahkum",
        "en": "inmate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Insasse.",
        "accusative": "Ich suche ___ Insasse.",
        "dative": "Neben ___ Insasse liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Insider",
      "translation": {
        "tr": "İçeriden öğrenenler",
        "en": "Insiders"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Insider.",
        "accusative": "Ich nehme ___ Insider.",
        "dative": "Vor ___ Insider steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Inspektion",
      "translation": {
        "tr": "Muayene",
        "en": "Inspection"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Inspektion.",
        "accusative": "Ich suche ___ Inspektion.",
        "dative": "Neben ___ Inspektion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Inspektor",
      "translation": {
        "tr": "Müfettiş",
        "en": "Inspector"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Inspektor.",
        "accusative": "Ich suche ___ Inspektor.",
        "dative": "Neben ___ Inspektor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Inspiration",
      "translation": {
        "tr": "İlham",
        "en": "Inspiration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Inspiration.",
        "accusative": "Ich sehe ___ Inspiration.",
        "dative": "Ich gehe mit ___ Inspiration."
      }
    },
    {
      "article": "die",
      "word": "Installation",
      "translation": {
        "tr": "Kurulum",
        "en": "Installation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Installation.",
        "accusative": "Ich suche ___ Installation.",
        "dative": "Neben ___ Installation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Instanz",
      "translation": {
        "tr": "örnek",
        "en": "instance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Instanz.",
        "accusative": "Ich sehe ___ Instanz.",
        "dative": "Ich gehe mit ___ Instanz."
      }
    },
    {
      "article": "der",
      "word": "Instinkt",
      "translation": {
        "tr": "İçgüdü",
        "en": "Instinct"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Instinkt.",
        "accusative": "Ich suche ___ Instinkt.",
        "dative": "Neben ___ Instinkt liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Institut",
      "translation": {
        "tr": "Enstitü",
        "en": "Institute"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Institut.",
        "accusative": "Ich nehme ___ Institut.",
        "dative": "Vor ___ Institut steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Institution",
      "translation": {
        "tr": "kurum",
        "en": "institution"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Institution.",
        "accusative": "Ich sehe ___ Institution.",
        "dative": "Ich gehe mit ___ Institution."
      }
    },
    {
      "article": "das",
      "word": "Insulin",
      "translation": {
        "tr": "insülin",
        "en": "Insulin"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Insulin.",
        "accusative": "Ich sehe ___ Insulin.",
        "dative": "Ich gehe mit ___ Insulin."
      }
    },
    {
      "article": "die",
      "word": "Inszenierung",
      "translation": {
        "tr": "Evreleme",
        "en": "Staging"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Inszenierung.",
        "accusative": "Ich sehe ___ Inszenierung.",
        "dative": "Ich gehe mit ___ Inszenierung."
      }
    },
    {
      "article": "die",
      "word": "Integration",
      "translation": {
        "tr": "Entegrasyon",
        "en": "Integration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Integration.",
        "accusative": "Ich sehe ___ Integration.",
        "dative": "Ich gehe mit ___ Integration."
      }
    },
    {
      "article": "die",
      "word": "Integrität",
      "translation": {
        "tr": "Dürüstlük",
        "en": "Integrity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Integrität.",
        "accusative": "Ich nehme ___ Integrität.",
        "dative": "Vor ___ Integrität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Intelligenz",
      "translation": {
        "tr": "İstihbarat",
        "en": "Intelligence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Intelligenz.",
        "accusative": "Ich sehe ___ Intelligenz.",
        "dative": "Ich gehe mit ___ Intelligenz."
      }
    },
    {
      "article": "die",
      "word": "Intensität",
      "translation": {
        "tr": "Yoğunluk",
        "en": "Intensity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Intensität.",
        "accusative": "Ich nehme ___ Intensität.",
        "dative": "Vor ___ Intensität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Interaktion",
      "translation": {
        "tr": "Etkileşim",
        "en": "Interaction"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Interaktion.",
        "accusative": "Ich brauche ___ Interaktion.",
        "dative": "Ich beschäftige mich mit ___ Interaktion."
      }
    },
    {
      "article": "die",
      "word": "Interpretation",
      "translation": {
        "tr": "Yorumlama",
        "en": "Interpretation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Interpretation.",
        "accusative": "Ich suche ___ Interpretation.",
        "dative": "Neben ___ Interpretation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Intervention",
      "translation": {
        "tr": "Müdahale",
        "en": "Intervention"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Intervention.",
        "accusative": "Ich suche ___ Intervention.",
        "dative": "Neben ___ Intervention liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Invasion",
      "translation": {
        "tr": "istila",
        "en": "invasion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Invasion.",
        "accusative": "Ich suche ___ Invasion.",
        "dative": "Neben ___ Invasion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Investition",
      "translation": {
        "tr": "Yatırım",
        "en": "Investment"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Investition.",
        "accusative": "Ich nehme ___ Investition.",
        "dative": "Vor ___ Investition steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Investor",
      "translation": {
        "tr": "yatırımcı",
        "en": "investor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Investor.",
        "accusative": "Ich suche ___ Investor.",
        "dative": "Neben ___ Investor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ironie",
      "translation": {
        "tr": "ironi",
        "en": "Irony"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ironie.",
        "accusative": "Ich nehme ___ Ironie.",
        "dative": "Vor ___ Ironie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Irrtum",
      "translation": {
        "tr": "hata",
        "en": "Mistake"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Irrtum.",
        "accusative": "Ich wasche ___ Irrtum.",
        "dative": "In ___ Irrtum fühle ich mich wohl."
      }
    },
    {
      "article": "die",
      "word": "Isolation",
      "translation": {
        "tr": "izolasyon",
        "en": "Isolation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Isolation.",
        "accusative": "Ich sehe ___ Isolation.",
        "dative": "Ich gehe mit ___ Isolation."
      }
    },
    {
      "article": "die",
      "word": "Jagd",
      "translation": {
        "tr": "Avcılık",
        "en": "Hunting"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Jagd.",
        "accusative": "Ich kaufe ___ Jagd.",
        "dative": "Mit ___ Jagd arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Jahrestag",
      "translation": {
        "tr": "yıldönümü",
        "en": "anniversary"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Jahrestag.",
        "accusative": "Ich kaufe ___ Jahrestag.",
        "dative": "Mit ___ Jahrestag arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Jahrgang",
      "translation": {
        "tr": "vintage",
        "en": "vintage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jahrgang.",
        "accusative": "Ich suche ___ Jahrgang.",
        "dative": "Neben ___ Jahrgang liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Jazz",
      "translation": {
        "tr": "Caz",
        "en": "Jazz"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jazz.",
        "accusative": "Ich suche ___ Jazz.",
        "dative": "Neben ___ Jazz liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Jubel",
      "translation": {
        "tr": "Şerefe",
        "en": "Cheers"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jubel.",
        "accusative": "Ich suche ___ Jubel.",
        "dative": "Neben ___ Jubel liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Jubiläum",
      "translation": {
        "tr": "yıldönümü",
        "en": "anniversary"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jubiläum.",
        "accusative": "Ich suche ___ Jubiläum.",
        "dative": "Neben ___ Jubiläum liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Jude",
      "translation": {
        "tr": "Yahudi",
        "en": "Jew"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Jude.",
        "accusative": "Ich sehe ___ Jude.",
        "dative": "Ich gehe mit ___ Jude."
      }
    },
    {
      "article": "die",
      "word": "Jugend",
      "translation": {
        "tr": "Gençlik",
        "en": "Youth"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Jugend.",
        "accusative": "Ich erwarte ___ Jugend.",
        "dative": "Vor ___ Jugend bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Jurist",
      "translation": {
        "tr": "avukat",
        "en": "lawyer"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Jurist.",
        "accusative": "Ich kaufe ___ Jurist.",
        "dative": "Mit ___ Jurist arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Jury",
      "translation": {
        "tr": "Jüri",
        "en": "Jury"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Jury.",
        "accusative": "Ich suche ___ Jury.",
        "dative": "Neben ___ Jury liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Justiz",
      "translation": {
        "tr": "Adalet",
        "en": "Justice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Justiz.",
        "accusative": "Ich sehe ___ Justiz.",
        "dative": "Ich gehe mit ___ Justiz."
      }
    },
    {
      "article": "das",
      "word": "Kabarett",
      "translation": {
        "tr": "Kabare",
        "en": "Cabaret"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kabarett.",
        "accusative": "Ich sehe ___ Kabarett.",
        "dative": "Ich gehe mit ___ Kabarett."
      }
    },
    {
      "article": "das",
      "word": "Kabinett",
      "translation": {
        "tr": "Dolap",
        "en": "Cabinet"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kabinett.",
        "accusative": "Ich sehe ___ Kabinett.",
        "dative": "Ich gehe mit ___ Kabinett."
      }
    },
    {
      "article": "der",
      "word": "Kaiser",
      "translation": {
        "tr": "İmparator",
        "en": "Emperor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kaiser.",
        "accusative": "Ich nehme ___ Kaiser.",
        "dative": "Vor ___ Kaiser steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kampagne",
      "translation": {
        "tr": "kampanya",
        "en": "campaign"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kampagne.",
        "accusative": "Ich sehe ___ Kampagne.",
        "dative": "Ich gehe mit ___ Kampagne."
      }
    },
    {
      "article": "der",
      "word": "Kämpfer",
      "translation": {
        "tr": "Dövüşçü",
        "en": "Fighter"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kämpfer.",
        "accusative": "Ich sehe ___ Kämpfer.",
        "dative": "Ich gehe mit ___ Kämpfer."
      }
    },
    {
      "article": "der",
      "word": "Kampfgeist",
      "translation": {
        "tr": "mücadele ruhu",
        "en": "fighting spirit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kampfgeist.",
        "accusative": "Ich suche ___ Kampfgeist.",
        "dative": "Neben ___ Kampfgeist liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kanton",
      "translation": {
        "tr": "Kanton",
        "en": "Canton"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kanton.",
        "accusative": "Ich suche ___ Kanton.",
        "dative": "Neben ___ Kanton liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kanzlei",
      "translation": {
        "tr": "Hukuk firması",
        "en": "Law firm"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kanzlei.",
        "accusative": "Ich sehe ___ Kanzlei.",
        "dative": "Ich gehe mit ___ Kanzlei."
      }
    },
    {
      "article": "die",
      "word": "Kapazität",
      "translation": {
        "tr": "Kapasite",
        "en": "Capacity"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Kapazität.",
        "accusative": "Ich fotografiere ___ Kapazität.",
        "dative": "Wir treffen uns bei ___ Kapazität."
      }
    },
    {
      "article": "das",
      "word": "Kapital",
      "translation": {
        "tr": "Sermaye",
        "en": "Capital"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kapital.",
        "accusative": "Ich sehe ___ Kapital.",
        "dative": "Ich gehe mit ___ Kapital."
      }
    },
    {
      "article": "der",
      "word": "Kapitalismus",
      "translation": {
        "tr": "Kapitalizm",
        "en": "Capitalism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kapitalismus.",
        "accusative": "Ich sehe ___ Kapitalismus.",
        "dative": "Ich gehe mit ___ Kapitalismus."
      }
    },
    {
      "article": "die",
      "word": "Karriere",
      "translation": {
        "tr": "Kariyer",
        "en": "Career"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Karriere.",
        "accusative": "Ich miete ___ Karriere.",
        "dative": "Ich fahre mit ___ Karriere."
      }
    },
    {
      "article": "der",
      "word": "Katalysator",
      "translation": {
        "tr": "Katalizör",
        "en": "Catalyst"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Katalysator.",
        "accusative": "Ich beobachte ___ Katalysator.",
        "dative": "Ich stehe neben ___ Katalysator."
      }
    },
    {
      "article": "die",
      "word": "Katastrophe",
      "translation": {
        "tr": "Felaket",
        "en": "Catastrophe"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Katastrophe.",
        "accusative": "Ich sehe ___ Katastrophe.",
        "dative": "Ich komme mit ___ Katastrophe."
      }
    },
    {
      "article": "die",
      "word": "Kategorie",
      "translation": {
        "tr": "Kategori",
        "en": "Category"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Kategorie.",
        "accusative": "Ich streichle ___ Kategorie.",
        "dative": "Ich bin bei ___ Kategorie."
      }
    },
    {
      "article": "die",
      "word": "Kaution",
      "translation": {
        "tr": "Mevduat",
        "en": "Deposit"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kaution.",
        "accusative": "Ich nehme ___ Kaution.",
        "dative": "Vor ___ Kaution steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kenntnis",
      "translation": {
        "tr": "Bilgi",
        "en": "Knowledge"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Kenntnis.",
        "accusative": "Ich brauche ___ Kenntnis.",
        "dative": "Ich beschäftige mich mit ___ Kenntnis."
      }
    },
    {
      "article": "der",
      "word": "Killer",
      "translation": {
        "tr": "Katiller",
        "en": "Killers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Killer.",
        "accusative": "Ich kaufe ___ Killer.",
        "dative": "Mit ___ Killer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Klage",
      "translation": {
        "tr": "dava",
        "en": "Lawsuit"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klage.",
        "accusative": "Ich nehme ___ Klage.",
        "dative": "Vor ___ Klage steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Klassifizierung",
      "translation": {
        "tr": "sınıflandırma",
        "en": "Classification"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Klassifizierung.",
        "accusative": "Ich beobachte ___ Klassifizierung.",
        "dative": "Ich stehe neben ___ Klassifizierung."
      }
    },
    {
      "article": "der",
      "word": "Klassiker",
      "translation": {
        "tr": "Klasik",
        "en": "Classic"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Klassiker.",
        "accusative": "Ich nehme ___ Klassiker.",
        "dative": "Vor ___ Klassiker steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Klausel",
      "translation": {
        "tr": "madde",
        "en": "clause"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Klausel.",
        "accusative": "Ich sehe ___ Klausel.",
        "dative": "Ich gehe mit ___ Klausel."
      }
    },
    {
      "article": "die",
      "word": "Klausur",
      "translation": {
        "tr": "Sınav",
        "en": "Exam"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Klausur.",
        "accusative": "Ich erwarte ___ Klausur.",
        "dative": "Vor ___ Klausur bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Klimawandel",
      "translation": {
        "tr": "İklim değişikliği",
        "en": "Climate change"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Klimawandel.",
        "accusative": "Ich suche ___ Klimawandel.",
        "dative": "Neben ___ Klimawandel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Klotz",
      "translation": {
        "tr": "Klotz",
        "en": "Klotz"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Klotz.",
        "accusative": "Ich sehe ___ Klotz.",
        "dative": "Ich gehe mit ___ Klotz."
      }
    },
    {
      "article": "die",
      "word": "Kluft",
      "translation": {
        "tr": "Böl",
        "en": "Divide"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kluft.",
        "accusative": "Ich nehme ___ Kluft.",
        "dative": "Vor ___ Kluft steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Koalition",
      "translation": {
        "tr": "Koalisyon",
        "en": "Coalition"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Koalition.",
        "accusative": "Ich sehe ___ Koalition.",
        "dative": "Ich gehe mit ___ Koalition."
      }
    },
    {
      "article": "der",
      "word": "Kohlenstoff",
      "translation": {
        "tr": "Karbon",
        "en": "Carbon"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Kohlenstoff.",
        "accusative": "Ich parke ___ Kohlenstoff.",
        "dative": "Ich komme mit ___ Kohlenstoff."
      }
    },
    {
      "article": "der",
      "word": "Kollaps",
      "translation": {
        "tr": "Daralt",
        "en": "Collapse"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kollaps.",
        "accusative": "Ich kaufe ___ Kollaps.",
        "dative": "Mit ___ Kollaps arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Kollision",
      "translation": {
        "tr": "çarpışma",
        "en": "collision"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kollision.",
        "accusative": "Ich sehe ___ Kollision.",
        "dative": "Ich gehe mit ___ Kollision."
      }
    },
    {
      "article": "die",
      "word": "Kombination",
      "translation": {
        "tr": "Kombinasyon",
        "en": "Combination"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kombination.",
        "accusative": "Ich suche ___ Kombination.",
        "dative": "Neben ___ Kombination liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Komitee",
      "translation": {
        "tr": "Komite",
        "en": "Committee"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Komitee.",
        "accusative": "Ich nehme ___ Komitee.",
        "dative": "Vor ___ Komitee steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kommandant",
      "translation": {
        "tr": "Komutan",
        "en": "Commander"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Kommandant.",
        "accusative": "Ich kenne ___ Kommandant.",
        "dative": "Ich spreche mit ___ Kommandant."
      }
    },
    {
      "article": "das",
      "word": "Kommando",
      "translation": {
        "tr": "Komut",
        "en": "Command"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Kommando.",
        "accusative": "Ich treffe ___ Kommando.",
        "dative": "Ich helfe ___ Kommando."
      }
    },
    {
      "article": "die",
      "word": "Kommission",
      "translation": {
        "tr": "Komisyon",
        "en": "Commission"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kommission.",
        "accusative": "Ich suche ___ Kommission.",
        "dative": "Neben ___ Kommission liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kommune",
      "translation": {
        "tr": "komün",
        "en": "commune"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kommune.",
        "accusative": "Ich sehe ___ Kommune.",
        "dative": "Ich gehe mit ___ Kommune."
      }
    },
    {
      "article": "die",
      "word": "Kommunikation",
      "translation": {
        "tr": "İletişim",
        "en": "Communication"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Kommunikation.",
        "accusative": "Ich sehe ___ Kommunikation.",
        "dative": "Ich komme mit ___ Kommunikation."
      }
    },
    {
      "article": "die",
      "word": "Komödie",
      "translation": {
        "tr": "Komedi",
        "en": "Comedy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Komödie.",
        "accusative": "Ich sehe ___ Komödie.",
        "dative": "Ich gehe mit ___ Komödie."
      }
    },
    {
      "article": "die",
      "word": "Kompetenz",
      "translation": {
        "tr": "Yetkinlik",
        "en": "Competence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kompetenz.",
        "accusative": "Ich sehe ___ Kompetenz.",
        "dative": "Ich gehe mit ___ Kompetenz."
      }
    },
    {
      "article": "der",
      "word": "Komplex",
      "translation": {
        "tr": "Karmaşık",
        "en": "Complex"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Komplex.",
        "accusative": "Ich sehe ___ Komplex.",
        "dative": "Ich gehe mit ___ Komplex."
      }
    },
    {
      "article": "die",
      "word": "Komponente",
      "translation": {
        "tr": "bileşen",
        "en": "component"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Komponente.",
        "accusative": "Ich nehme ___ Komponente.",
        "dative": "Vor ___ Komponente steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Komponist",
      "translation": {
        "tr": "Besteci",
        "en": "Composer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Komponist.",
        "accusative": "Ich suche ___ Komponist.",
        "dative": "Neben ___ Komponist liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kompromiss",
      "translation": {
        "tr": "Uzlaşma",
        "en": "Compromise"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kompromiss.",
        "accusative": "Ich sehe ___ Kompromiss.",
        "dative": "Ich gehe mit ___ Kompromiss."
      }
    },
    {
      "article": "die",
      "word": "Konferenz",
      "translation": {
        "tr": "Konferans",
        "en": "Conference"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Konferenz.",
        "accusative": "Ich erwarte ___ Konferenz.",
        "dative": "Vor ___ Konferenz bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Konfiguration",
      "translation": {
        "tr": "Yapılandırma",
        "en": "Configuration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konfiguration.",
        "accusative": "Ich sehe ___ Konfiguration.",
        "dative": "Ich gehe mit ___ Konfiguration."
      }
    },
    {
      "article": "die",
      "word": "Konfrontation",
      "translation": {
        "tr": "Yüzleşme",
        "en": "Confrontation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konfrontation.",
        "accusative": "Ich sehe ___ Konfrontation.",
        "dative": "Ich gehe mit ___ Konfrontation."
      }
    },
    {
      "article": "der",
      "word": "Kongress",
      "translation": {
        "tr": "Kongre",
        "en": "Congress"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kongress.",
        "accusative": "Ich suche ___ Kongress.",
        "dative": "Neben ___ Kongress liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Konjunktur",
      "translation": {
        "tr": "ekonomik durum",
        "en": "economic situation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Konjunktur.",
        "accusative": "Ich suche ___ Konjunktur.",
        "dative": "Neben ___ Konjunktur liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Konkurrent",
      "translation": {
        "tr": "rakip",
        "en": "competitor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Konkurrent.",
        "accusative": "Ich kaufe ___ Konkurrent.",
        "dative": "Mit ___ Konkurrent arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Konkurrenz",
      "translation": {
        "tr": "Rekabet",
        "en": "Competition"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konkurrenz.",
        "accusative": "Ich sehe ___ Konkurrenz.",
        "dative": "Ich gehe mit ___ Konkurrenz."
      }
    },
    {
      "article": "das",
      "word": "Können",
      "translation": {
        "tr": "Yapabilir",
        "en": "Can"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Können.",
        "accusative": "Ich sehe ___ Können.",
        "dative": "Ich gehe mit ___ Können."
      }
    },
    {
      "article": "der",
      "word": "Konsens",
      "translation": {
        "tr": "Konsensüs",
        "en": "Consensus"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Konsens.",
        "accusative": "Ich brauche ___ Konsens.",
        "dative": "Ich beschäftige mich mit ___ Konsens."
      }
    },
    {
      "article": "die",
      "word": "Konsequenz",
      "translation": {
        "tr": "Sonuç",
        "en": "Consequence"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Konsequenz.",
        "accusative": "Ich kenne ___ Konsequenz.",
        "dative": "Ich spreche mit ___ Konsequenz."
      }
    },
    {
      "article": "die",
      "word": "Konsistenz",
      "translation": {
        "tr": "Tutarlılık",
        "en": "Consistency"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konsistenz.",
        "accusative": "Ich sehe ___ Konsistenz.",
        "dative": "Ich gehe mit ___ Konsistenz."
      }
    },
    {
      "article": "die",
      "word": "Konstante",
      "translation": {
        "tr": "Sabit",
        "en": "Constant"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Konstante.",
        "accusative": "Ich nehme ___ Konstante.",
        "dative": "Vor ___ Konstante steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Konstruktion",
      "translation": {
        "tr": "İnşaat",
        "en": "Construction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Konstruktion.",
        "accusative": "Ich suche ___ Konstruktion.",
        "dative": "Neben ___ Konstruktion liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Konsulat",
      "translation": {
        "tr": "Konsolosluk",
        "en": "Consulate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Konsulat.",
        "accusative": "Ich nehme ___ Konsulat.",
        "dative": "Vor ___ Konsulat steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Konsument",
      "translation": {
        "tr": "tüketici",
        "en": "consumer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Konsument.",
        "accusative": "Ich suche ___ Konsument.",
        "dative": "Neben ___ Konsument liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kontext",
      "translation": {
        "tr": "Bağlam",
        "en": "Context"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch liegt ___ Kontext.",
        "accusative": "Ich öffne ___ Kontext.",
        "dative": "Ich arbeite mit ___ Kontext."
      }
    },
    {
      "article": "die",
      "word": "Kontroverse",
      "translation": {
        "tr": "Tartışma",
        "en": "Controversy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kontroverse.",
        "accusative": "Ich sehe ___ Kontroverse.",
        "dative": "Ich gehe mit ___ Kontroverse."
      }
    },
    {
      "article": "die",
      "word": "Konzentration",
      "translation": {
        "tr": "Konsantrasyon",
        "en": "Concentration"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Konzentration.",
        "accusative": "Ich kaufe ___ Konzentration.",
        "dative": "Mit ___ Konzentration arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Konzeption",
      "translation": {
        "tr": "gebelik",
        "en": "Conception"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Konzeption.",
        "accusative": "Ich kaufe ___ Konzeption.",
        "dative": "Mit ___ Konzeption arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Konzern",
      "translation": {
        "tr": "Grup",
        "en": "Group"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Konzern.",
        "accusative": "Ich sehe ___ Konzern.",
        "dative": "Ich gehe mit ___ Konzern."
      }
    },
    {
      "article": "die",
      "word": "Kooperation",
      "translation": {
        "tr": "İşbirliği",
        "en": "Cooperation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kooperation.",
        "accusative": "Ich suche ___ Kooperation.",
        "dative": "Neben ___ Kooperation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Koordination",
      "translation": {
        "tr": "Koordinasyon",
        "en": "Coordination"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Koordination.",
        "accusative": "Ich suche ___ Koordination.",
        "dative": "Neben ___ Koordination liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Koordinator",
      "translation": {
        "tr": "Koordinatör",
        "en": "Coordinator"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Koordinator.",
        "accusative": "Ich sehe ___ Koordinator.",
        "dative": "Ich gehe mit ___ Koordinator."
      }
    },
    {
      "article": "die",
      "word": "Körpersprache",
      "translation": {
        "tr": "Beden dili",
        "en": "Body language"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Körpersprache.",
        "accusative": "Ich kaufe ___ Körpersprache.",
        "dative": "Hinter ___ Körpersprache ist ein Fenster."
      }
    },
    {
      "article": "die",
      "word": "Korrelation",
      "translation": {
        "tr": "Korelasyon",
        "en": "Correlation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Korrelation.",
        "accusative": "Ich sehe ___ Korrelation.",
        "dative": "Ich gehe mit ___ Korrelation."
      }
    },
    {
      "article": "die",
      "word": "Korrespondenz",
      "translation": {
        "tr": "Yazışma",
        "en": "Correspondence"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Korrespondenz.",
        "accusative": "Ich suche ___ Korrespondenz.",
        "dative": "Neben ___ Korrespondenz liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Korruption",
      "translation": {
        "tr": "Yolsuzluk",
        "en": "Corruption"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Korruption.",
        "accusative": "Ich suche ___ Korruption.",
        "dative": "Neben ___ Korruption liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kosmos",
      "translation": {
        "tr": "Evren",
        "en": "Cosmos"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kosmos.",
        "accusative": "Ich suche ___ Kosmos.",
        "dative": "Neben ___ Kosmos liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kratzer",
      "translation": {
        "tr": "çizikler",
        "en": "Scratches"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kratzer.",
        "accusative": "Ich nehme ___ Kratzer.",
        "dative": "Vor ___ Kratzer steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kreation",
      "translation": {
        "tr": "Yaratılış",
        "en": "Creation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kreation.",
        "accusative": "Ich suche ___ Kreation.",
        "dative": "Neben ___ Kreation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kreativität",
      "translation": {
        "tr": "Yaratıcılık",
        "en": "Creativity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kreativität.",
        "accusative": "Ich nehme ___ Kreativität.",
        "dative": "Vor ___ Kreativität steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Krebs",
      "translation": {
        "tr": "Kanser",
        "en": "Cancer"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Krebs.",
        "accusative": "Ich kaufe ___ Krebs.",
        "dative": "Mit ___ Krebs arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Kreislauf",
      "translation": {
        "tr": "Dolaşım",
        "en": "Circulation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kreislauf.",
        "accusative": "Ich nehme ___ Kreislauf.",
        "dative": "Vor ___ Kreislauf steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Kreuzfahrt",
      "translation": {
        "tr": "Yolculuk",
        "en": "Cruise"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kreuzfahrt.",
        "accusative": "Ich kaufe ___ Kreuzfahrt.",
        "dative": "Mit ___ Kreuzfahrt arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Krieger",
      "translation": {
        "tr": "Savaşçı",
        "en": "Warrior"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Krieger zentral.",
        "accusative": "Wir besprechen ___ Krieger.",
        "dative": "Mit ___ Krieger wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Kristall",
      "translation": {
        "tr": "Kristal",
        "en": "Crystal"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kristall.",
        "accusative": "Ich sehe ___ Kristall.",
        "dative": "Ich gehe mit ___ Kristall."
      }
    },
    {
      "article": "das",
      "word": "Kriterium",
      "translation": {
        "tr": "kriter",
        "en": "criterion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kriterium.",
        "accusative": "Ich kaufe ___ Kriterium.",
        "dative": "Mit ___ Kriterium arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Kulisse",
      "translation": {
        "tr": "Arka plan",
        "en": "Backdrop"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Kulisse.",
        "accusative": "Ich erwarte ___ Kulisse.",
        "dative": "Vor ___ Kulisse bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Kult",
      "translation": {
        "tr": "Kült",
        "en": "Cult"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kult.",
        "accusative": "Ich suche ___ Kult.",
        "dative": "Neben ___ Kult liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Kündigung",
      "translation": {
        "tr": "Fesih",
        "en": "Termination"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kündigung.",
        "accusative": "Ich nehme ___ Kündigung.",
        "dative": "Vor ___ Kündigung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Kunststoff",
      "translation": {
        "tr": "Plastik",
        "en": "Plastic"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Kunststoff.",
        "accusative": "Ich nehme ___ Kunststoff.",
        "dative": "Vor ___ Kunststoff steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Kunstwerk",
      "translation": {
        "tr": "Sanat eseri",
        "en": "Artwork"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Kunstwerk.",
        "accusative": "Ich sehe ___ Kunstwerk.",
        "dative": "Ich gehe mit ___ Kunstwerk."
      }
    },
    {
      "article": "das",
      "word": "Kupfer",
      "translation": {
        "tr": "Bakır",
        "en": "Copper"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Kupfer.",
        "accusative": "Ich suche ___ Kupfer.",
        "dative": "Neben ___ Kupfer liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Kurfürst",
      "translation": {
        "tr": "Seçmen",
        "en": "Elector"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Kurfürst.",
        "accusative": "Ich kaufe ___ Kurfürst.",
        "dative": "Mit ___ Kurfürst arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Lächeln",
      "translation": {
        "tr": "Gülümseme",
        "en": "Smile"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lächeln.",
        "accusative": "Ich suche ___ Lächeln.",
        "dative": "Neben ___ Lächeln liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ladung",
      "translation": {
        "tr": "Şarj",
        "en": "Charge"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Ladung.",
        "accusative": "Ich kaufe ___ Ladung.",
        "dative": "Mit ___ Ladung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lähmung",
      "translation": {
        "tr": "felç",
        "en": "paralysis"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lähmung.",
        "accusative": "Ich nehme ___ Lähmung.",
        "dative": "Vor ___ Lähmung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Landesregierung",
      "translation": {
        "tr": "Eyalet hükümeti",
        "en": "State government"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Landesregierung.",
        "accusative": "Ich kaufe ___ Landesregierung.",
        "dative": "Mit ___ Landesregierung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Landkreis",
      "translation": {
        "tr": "Bölge",
        "en": "District"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Landkreis.",
        "accusative": "Ich kaufe ___ Landkreis.",
        "dative": "Mit ___ Landkreis arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Landtag",
      "translation": {
        "tr": "Eyalet Parlamentosu",
        "en": "State Parliament"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Landtag.",
        "accusative": "Ich kaufe ___ Landtag.",
        "dative": "Mit ___ Landtag arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Laser",
      "translation": {
        "tr": "Lazerler",
        "en": "Lasers"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Laser.",
        "accusative": "Ich kaufe ___ Laser.",
        "dative": "Mit ___ Laser arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Laufbahn",
      "translation": {
        "tr": "Kariyer",
        "en": "Career"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Laufbahn.",
        "accusative": "Ich sehe ___ Laufbahn.",
        "dative": "Ich sitze in ___ Laufbahn."
      }
    },
    {
      "article": "die",
      "word": "Laufzeit",
      "translation": {
        "tr": "Süre",
        "en": "Duration"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Laufzeit.",
        "accusative": "Ich suche ___ Laufzeit.",
        "dative": "Neben ___ Laufzeit liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Lebensjahr",
      "translation": {
        "tr": "yaşam yılı",
        "en": "year of life"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lebensjahr.",
        "accusative": "Ich suche ___ Lebensjahr.",
        "dative": "Neben ___ Lebensjahr liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Lebenslauf",
      "translation": {
        "tr": "CV",
        "en": "CV"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lebenslauf.",
        "accusative": "Ich suche ___ Lebenslauf.",
        "dative": "Neben ___ Lebenslauf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Legende",
      "translation": {
        "tr": "Efsane",
        "en": "Legend"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Legende.",
        "accusative": "Ich organisiere ___ Legende.",
        "dative": "Nach ___ Legende fahre ich nach Hause."
      }
    },
    {
      "article": "der",
      "word": "Lehrmeister",
      "translation": {
        "tr": "öğretmen",
        "en": "teacher"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lehrmeister.",
        "accusative": "Ich besuche ___ Lehrmeister.",
        "dative": "Ich danke ___ Lehrmeister."
      }
    },
    {
      "article": "der",
      "word": "Lehrstuhl",
      "translation": {
        "tr": "Sandalye",
        "en": "Chair"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Lehrstuhl.",
        "accusative": "Ich suche ___ Lehrstuhl.",
        "dative": "Vor ___ Lehrstuhl liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Leib",
      "translation": {
        "tr": "vücut",
        "en": "body"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Leib.",
        "accusative": "Ich suche ___ Leib.",
        "dative": "Neben ___ Leib liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Leiche",
      "translation": {
        "tr": "Ceset",
        "en": "Corpse"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Leiche.",
        "accusative": "Ich suche ___ Leiche.",
        "dative": "Neben ___ Leiche liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Leichtigkeit",
      "translation": {
        "tr": "hafiflik",
        "en": "lightness"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Leichtigkeit.",
        "accusative": "Ich kaufe ___ Leichtigkeit.",
        "dative": "Mit ___ Leichtigkeit arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Leiden",
      "translation": {
        "tr": "acı çekmek",
        "en": "suffering"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Leiden.",
        "accusative": "Ich trage ___ Leiden.",
        "dative": "Neben ___ Leiden liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Leidenschaft",
      "translation": {
        "tr": "Tutku",
        "en": "Passion"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Leidenschaft.",
        "accusative": "Ich kaufe ___ Leidenschaft.",
        "dative": "Mit ___ Leidenschaft arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Leistungsfähigkeit",
      "translation": {
        "tr": "performans",
        "en": "performance"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Leistungsfähigkeit.",
        "accusative": "Ich treffe ___ Leistungsfähigkeit.",
        "dative": "Ich helfe ___ Leistungsfähigkeit."
      }
    },
    {
      "article": "die",
      "word": "Leitung",
      "translation": {
        "tr": "yönetim",
        "en": "management"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Leitung.",
        "accusative": "Ich treffe ___ Leitung.",
        "dative": "Ich helfe ___ Leitung."
      }
    },
    {
      "article": "die",
      "word": "Lektüre",
      "translation": {
        "tr": "Okuma",
        "en": "Reading"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lektüre.",
        "accusative": "Ich nehme ___ Lektüre.",
        "dative": "Vor ___ Lektüre steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Lesung",
      "translation": {
        "tr": "Okuma",
        "en": "Reading"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Lesung.",
        "accusative": "Ich sehe ___ Lesung.",
        "dative": "Ich sitze an ___ Lesung."
      }
    },
    {
      "article": "das",
      "word": "Letzte",
      "translation": {
        "tr": "Sonuncusu",
        "en": "Last one"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Letzte.",
        "accusative": "Ich besuche ___ Letzte.",
        "dative": "Ich danke ___ Letzte."
      }
    },
    {
      "article": "der",
      "word": "Liebeskummer",
      "translation": {
        "tr": "Aşk hastalığı",
        "en": "Lovesickness"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Liebeskummer.",
        "accusative": "Ich erkläre ___ Liebeskummer.",
        "dative": "An ___ Liebeskummer arbeiten wir."
      }
    },
    {
      "article": "der",
      "word": "Liebhaber",
      "translation": {
        "tr": "Sevgili",
        "en": "Lover"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Liebhaber.",
        "accusative": "Ich brauche ___ Liebhaber.",
        "dative": "Ich beschäftige mich mit ___ Liebhaber."
      }
    },
    {
      "article": "der",
      "word": "Lifestyle",
      "translation": {
        "tr": "Yaşam Tarzı",
        "en": "Lifestyle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Lifestyle.",
        "accusative": "Ich suche ___ Lifestyle.",
        "dative": "Neben ___ Lifestyle liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Limit",
      "translation": {
        "tr": "sınır",
        "en": "limit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Limit.",
        "accusative": "Ich suche ___ Limit.",
        "dative": "Neben ___ Limit liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Link",
      "translation": {
        "tr": "Bağlantı",
        "en": "Link"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Link.",
        "accusative": "Ich suche ___ Link.",
        "dative": "Neben ___ Link liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Linke",
      "translation": {
        "tr": "Sol",
        "en": "Left"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Linke.",
        "accusative": "Ich suche ___ Linke.",
        "dative": "Neben ___ Linke liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Literatur",
      "translation": {
        "tr": "Edebiyat",
        "en": "Literature"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Literatur.",
        "accusative": "Ich kaufe ___ Literatur.",
        "dative": "Mit ___ Literatur arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Lizenz",
      "translation": {
        "tr": "Lisans",
        "en": "License"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Lizenz.",
        "accusative": "Ich nehme ___ Lizenz.",
        "dative": "Vor ___ Lizenz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Logik",
      "translation": {
        "tr": "Mantık",
        "en": "Logic"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Logik.",
        "accusative": "Ich kenne ___ Logik.",
        "dative": "Ich spreche mit ___ Logik."
      }
    },
    {
      "article": "die",
      "word": "Loyalität",
      "translation": {
        "tr": "Sadakat",
        "en": "Loyalty"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Loyalität.",
        "accusative": "Ich suche ___ Loyalität.",
        "dative": "Neben ___ Loyalität liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Luxus",
      "translation": {
        "tr": "Lüks",
        "en": "Luxury"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Luxus.",
        "accusative": "Ich suche ___ Luxus.",
        "dative": "Neben ___ Luxus liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Lyrik",
      "translation": {
        "tr": "Şiir",
        "en": "Poetry"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Lyrik.",
        "accusative": "Ich sehe ___ Lyrik.",
        "dative": "Ich gehe mit ___ Lyrik."
      }
    },
    {
      "article": "die",
      "word": "Magie",
      "translation": {
        "tr": "Büyü",
        "en": "Magic"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Magie.",
        "accusative": "Ich sehe ___ Magie.",
        "dative": "Ich gehe mit ___ Magie."
      }
    },
    {
      "article": "der",
      "word": "Magier",
      "translation": {
        "tr": "Sihirbaz",
        "en": "Magician"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Magier.",
        "accusative": "Ich sehe ___ Magier.",
        "dative": "Ich gehe mit ___ Magier."
      }
    },
    {
      "article": "der",
      "word": "Magistrat",
      "translation": {
        "tr": "Yargıç",
        "en": "Magistrate"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Magistrat.",
        "accusative": "Ich kaufe ___ Magistrat.",
        "dative": "Mit ___ Magistrat arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Magnetfeld",
      "translation": {
        "tr": "Manyetik alan",
        "en": "Magnetic field"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Magnetfeld.",
        "accusative": "Ich treffe ___ Magnetfeld.",
        "dative": "Ich helfe ___ Magnetfeld."
      }
    },
    {
      "article": "die",
      "word": "Mahnung",
      "translation": {
        "tr": "Hatırlatma",
        "en": "Reminder"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Mahnung.",
        "accusative": "Ich trage ___ Mahnung.",
        "dative": "Neben ___ Mahnung liegt ein Schal."
      }
    },
    {
      "article": "der",
      "word": "Mais",
      "translation": {
        "tr": "mısır",
        "en": "corn"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mais.",
        "accusative": "Ich sehe ___ Mais.",
        "dative": "Ich gehe mit ___ Mais."
      }
    },
    {
      "article": "der",
      "word": "Makler",
      "translation": {
        "tr": "Komisyoncu",
        "en": "Broker"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Makler.",
        "accusative": "Ich nehme ___ Makler.",
        "dative": "Vor ___ Makler steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Malerei",
      "translation": {
        "tr": "Boyama",
        "en": "Painting"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Malerei.",
        "accusative": "Ich sehe ___ Malerei.",
        "dative": "Ich antworte ___ Malerei."
      }
    },
    {
      "article": "das",
      "word": "Management",
      "translation": {
        "tr": "yönetim",
        "en": "management"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Management.",
        "accusative": "Ich besuche ___ Management.",
        "dative": "Ich danke ___ Management."
      }
    },
    {
      "article": "das",
      "word": "Mandat",
      "translation": {
        "tr": "Yetki",
        "en": "Mandate"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Mandat.",
        "accusative": "Ich sehe ___ Mandat.",
        "dative": "Ich antworte ___ Mandat."
      }
    },
    {
      "article": "der",
      "word": "Mangel",
      "translation": {
        "tr": "eksiklik",
        "en": "lack"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Mangel.",
        "accusative": "Ich treffe ___ Mangel.",
        "dative": "Ich helfe ___ Mangel."
      }
    },
    {
      "article": "die",
      "word": "Manipulation",
      "translation": {
        "tr": "Manipülasyon",
        "en": "Manipulation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Manipulation.",
        "accusative": "Ich besuche ___ Manipulation.",
        "dative": "Ich danke ___ Manipulation."
      }
    },
    {
      "article": "das",
      "word": "Manuskript",
      "translation": {
        "tr": "El yazması",
        "en": "Manuscript"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Manuskript.",
        "accusative": "Ich besuche ___ Manuskript.",
        "dative": "Ich danke ___ Manuskript."
      }
    },
    {
      "article": "die",
      "word": "Marine",
      "translation": {
        "tr": "Denizcilik",
        "en": "Marine"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Marine.",
        "accusative": "Ich suche ___ Marine.",
        "dative": "Neben ___ Marine liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Mark",
      "translation": {
        "tr": "işaret",
        "en": "Mark"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mark.",
        "accusative": "Ich suche ___ Mark.",
        "dative": "Neben ___ Mark liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Marketing",
      "translation": {
        "tr": "Pazarlama",
        "en": "Marketing"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Marketing.",
        "accusative": "Ich besuche ___ Marketing.",
        "dative": "Ich warte vor ___ Marketing."
      }
    },
    {
      "article": "der",
      "word": "Marktanteil",
      "translation": {
        "tr": "Pazar payı",
        "en": "Market share"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Marktanteil.",
        "accusative": "Ich sehe ___ Marktanteil.",
        "dative": "Ich bleibe in ___ Marktanteil."
      }
    },
    {
      "article": "die",
      "word": "Marktwirtschaft",
      "translation": {
        "tr": "Pazar ekonomisi",
        "en": "Market economy"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Marktwirtschaft.",
        "accusative": "Ich fotografiere ___ Marktwirtschaft.",
        "dative": "Wir treffen uns bei ___ Marktwirtschaft."
      }
    },
    {
      "article": "der",
      "word": "Marsch",
      "translation": {
        "tr": "Mart",
        "en": "March"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Marsch.",
        "accusative": "Ich nehme ___ Marsch.",
        "dative": "Vor ___ Marsch steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Maß",
      "translation": {
        "tr": "Boyut",
        "en": "Dimension"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Maß.",
        "accusative": "Ich sehe ___ Maß.",
        "dative": "Ich antworte ___ Maß."
      }
    },
    {
      "article": "das",
      "word": "Massaker",
      "translation": {
        "tr": "katliam",
        "en": "massacre"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Massaker.",
        "accusative": "Ich sehe ___ Massaker.",
        "dative": "Ich gehe mit ___ Massaker."
      }
    },
    {
      "article": "die",
      "word": "Masse",
      "translation": {
        "tr": "kütle",
        "en": "mass"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Masse.",
        "accusative": "Ich nehme ___ Masse.",
        "dative": "Vor ___ Masse steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Maßstab",
      "translation": {
        "tr": "ölçek",
        "en": "scale"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Maßstab.",
        "accusative": "Ich kaufe ___ Maßstab.",
        "dative": "Mit ___ Maßstab arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Materie",
      "translation": {
        "tr": "madde",
        "en": "matter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Materie.",
        "accusative": "Ich suche ___ Materie.",
        "dative": "Neben ___ Materie liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Matrix",
      "translation": {
        "tr": "Matris",
        "en": "Matrix"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Matrix.",
        "accusative": "Ich suche ___ Matrix.",
        "dative": "Neben ___ Matrix liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Maut",
      "translation": {
        "tr": "geçiş ücreti",
        "en": "toll"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Maut.",
        "accusative": "Ich suche ___ Maut.",
        "dative": "Neben ___ Maut liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Maximum",
      "translation": {
        "tr": "Maksimum",
        "en": "Maximum"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Maximum.",
        "accusative": "Ich sehe ___ Maximum.",
        "dative": "Ich gehe mit ___ Maximum."
      }
    },
    {
      "article": "die",
      "word": "Mechanik",
      "translation": {
        "tr": "Mekanik",
        "en": "Mechanics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mechanik.",
        "accusative": "Ich kaufe ___ Mechanik.",
        "dative": "Mit ___ Mechanik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mechanismus",
      "translation": {
        "tr": "mekanizma",
        "en": "mechanism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mechanismus.",
        "accusative": "Ich sehe ___ Mechanismus.",
        "dative": "Ich gehe mit ___ Mechanismus."
      }
    },
    {
      "article": "die",
      "word": "Meditation",
      "translation": {
        "tr": "Meditasyon",
        "en": "Meditation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Meditation.",
        "accusative": "Ich suche ___ Meditation.",
        "dative": "Neben ___ Meditation liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Medium",
      "translation": {
        "tr": "orta",
        "en": "medium"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Medium.",
        "accusative": "Ich suche ___ Medium.",
        "dative": "Neben ___ Medium liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Mediziner",
      "translation": {
        "tr": "tıp uzmanları",
        "en": "medical professionals"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Mediziner.",
        "accusative": "Ich kenne ___ Mediziner.",
        "dative": "Ich spreche mit ___ Mediziner."
      }
    },
    {
      "article": "der",
      "word": "Mehrwert",
      "translation": {
        "tr": "Katma değer",
        "en": "Added value"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mehrwert.",
        "accusative": "Ich kaufe ___ Mehrwert.",
        "dative": "Mit ___ Mehrwert arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Meisterschaft",
      "translation": {
        "tr": "Şampiyona",
        "en": "Championship"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Meisterschaft.",
        "accusative": "Ich sehe ___ Meisterschaft.",
        "dative": "Ich sitze in ___ Meisterschaft."
      }
    },
    {
      "article": "die",
      "word": "Membran",
      "translation": {
        "tr": "Membran",
        "en": "Membrane"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Membran.",
        "accusative": "Ich kaufe ___ Membran.",
        "dative": "Mit ___ Membran arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Menschenrecht",
      "translation": {
        "tr": "İnsan hakkı",
        "en": "Human right"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Menschenrecht.",
        "accusative": "Ich besuche ___ Menschenrecht.",
        "dative": "Ich danke ___ Menschenrecht."
      }
    },
    {
      "article": "die",
      "word": "Menschheit",
      "translation": {
        "tr": "insanlık",
        "en": "humanity"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Menschheit.",
        "accusative": "Ich sehe ___ Menschheit.",
        "dative": "Ich antworte ___ Menschheit."
      }
    },
    {
      "article": "die",
      "word": "Menschlichkeit",
      "translation": {
        "tr": "insanlık",
        "en": "humanity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Menschlichkeit.",
        "accusative": "Ich besuche ___ Menschlichkeit.",
        "dative": "Ich danke ___ Menschlichkeit."
      }
    },
    {
      "article": "die",
      "word": "Metapher",
      "translation": {
        "tr": "Metafor",
        "en": "Metaphor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Metapher.",
        "accusative": "Ich sehe ___ Metapher.",
        "dative": "Ich gehe mit ___ Metapher."
      }
    },
    {
      "article": "die",
      "word": "Metropole",
      "translation": {
        "tr": "metropol",
        "en": "metropolis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Metropole.",
        "accusative": "Ich kaufe ___ Metropole.",
        "dative": "Mit ___ Metropole arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Migration",
      "translation": {
        "tr": "Göç",
        "en": "Migration"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Migration.",
        "accusative": "Ich sehe ___ Migration.",
        "dative": "Ich gehe mit ___ Migration."
      }
    },
    {
      "article": "die",
      "word": "Minderheit",
      "translation": {
        "tr": "azınlık",
        "en": "minority"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Minderheit.",
        "accusative": "Ich sehe ___ Minderheit.",
        "dative": "Ich gehe mit ___ Minderheit."
      }
    },
    {
      "article": "das",
      "word": "Minimum",
      "translation": {
        "tr": "Asgari",
        "en": "Minimum"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Minimum.",
        "accusative": "Ich sehe ___ Minimum.",
        "dative": "Ich gehe mit ___ Minimum."
      }
    },
    {
      "article": "das",
      "word": "Ministerium",
      "translation": {
        "tr": "Bakanlık",
        "en": "Ministry"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ministerium.",
        "accusative": "Ich nehme ___ Ministerium.",
        "dative": "Vor ___ Ministerium steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ministerpräsident",
      "translation": {
        "tr": "Başbakan",
        "en": "Prime Minister"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ministerpräsident.",
        "accusative": "Ich suche ___ Ministerpräsident.",
        "dative": "Neben ___ Ministerpräsident liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Misere",
      "translation": {
        "tr": "sefalet",
        "en": "misery"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Misere.",
        "accusative": "Ich suche ___ Misere.",
        "dative": "Neben ___ Misere liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Missbrauch",
      "translation": {
        "tr": "Kötüye kullanım",
        "en": "Abuse"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Missbrauch.",
        "accusative": "Ich miete ___ Missbrauch.",
        "dative": "Ich fahre mit ___ Missbrauch."
      }
    },
    {
      "article": "das",
      "word": "Missverständnis",
      "translation": {
        "tr": "Yanlış anlama",
        "en": "Misunderstanding"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Missverständnis.",
        "accusative": "Ich entdecke ___ Missverständnis.",
        "dative": "Ich gehe zu ___ Missverständnis."
      }
    },
    {
      "article": "der",
      "word": "Mitbewerber",
      "translation": {
        "tr": "Rakipler",
        "en": "Competitors"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Mitbewerber.",
        "accusative": "Ich nehme ___ Mitbewerber.",
        "dative": "Vor ___ Mitbewerber steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Mitgefühl",
      "translation": {
        "tr": "Şefkat",
        "en": "Compassion"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mitgefühl.",
        "accusative": "Ich sehe ___ Mitgefühl.",
        "dative": "Ich gehe mit ___ Mitgefühl."
      }
    },
    {
      "article": "die",
      "word": "Mitgliedschaft",
      "translation": {
        "tr": "Üyelik",
        "en": "Membership"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mitgliedschaft.",
        "accusative": "Ich besuche ___ Mitgliedschaft.",
        "dative": "Ich danke ___ Mitgliedschaft."
      }
    },
    {
      "article": "das",
      "word": "Mitleid",
      "translation": {
        "tr": "Yazık",
        "en": "Pity"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mitleid.",
        "accusative": "Ich sehe ___ Mitleid.",
        "dative": "Ich gehe mit ___ Mitleid."
      }
    },
    {
      "article": "die",
      "word": "Mitteilung",
      "translation": {
        "tr": "Uyarı",
        "en": "Notice"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mitteilung.",
        "accusative": "Ich sehe ___ Mitteilung.",
        "dative": "Ich gehe mit ___ Mitteilung."
      }
    },
    {
      "article": "das",
      "word": "Mittelalter",
      "translation": {
        "tr": "Orta Çağ",
        "en": "Middle Ages"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mittelalter.",
        "accusative": "Ich suche ___ Mittelalter.",
        "dative": "Neben ___ Mittelalter liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Mittelmeer",
      "translation": {
        "tr": "Akdeniz",
        "en": "Mediterranean"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mittelmeer.",
        "accusative": "Ich kaufe ___ Mittelmeer.",
        "dative": "Mit ___ Mittelmeer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mittelpunkt",
      "translation": {
        "tr": "Merkez noktası",
        "en": "Center point"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mittelpunkt.",
        "accusative": "Ich sehe ___ Mittelpunkt.",
        "dative": "Ich gehe mit ___ Mittelpunkt."
      }
    },
    {
      "article": "der",
      "word": "Mittelwert",
      "translation": {
        "tr": "ortalama",
        "en": "Mean"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mittelwert.",
        "accusative": "Ich sehe ___ Mittelwert.",
        "dative": "Ich gehe mit ___ Mittelwert."
      }
    },
    {
      "article": "die",
      "word": "Mitternacht",
      "translation": {
        "tr": "Gece yarısı",
        "en": "Midnight"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mitternacht.",
        "accusative": "Ich kaufe ___ Mitternacht.",
        "dative": "Mit ___ Mitternacht arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Mob",
      "translation": {
        "tr": "Mafya",
        "en": "Mob"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Mob.",
        "accusative": "Ich sehe ___ Mob.",
        "dative": "Ich gehe mit ___ Mob."
      }
    },
    {
      "article": "die",
      "word": "Mobilität",
      "translation": {
        "tr": "Hareketlilik",
        "en": "Mobility"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mobilität.",
        "accusative": "Ich kaufe ___ Mobilität.",
        "dative": "Mit ___ Mobilität arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Modell",
      "translation": {
        "tr": "modeli",
        "en": "model"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Modell.",
        "accusative": "Ich sehe ___ Modell.",
        "dative": "Ich gehe mit ___ Modell."
      }
    },
    {
      "article": "der",
      "word": "Moderator",
      "translation": {
        "tr": "Moderatör",
        "en": "Moderator"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Moderator.",
        "accusative": "Ich suche ___ Moderator.",
        "dative": "Neben ___ Moderator liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Moderne",
      "translation": {
        "tr": "Modernite",
        "en": "Modernity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Moderne.",
        "accusative": "Ich nehme ___ Moderne.",
        "dative": "Vor ___ Moderne steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Modul",
      "translation": {
        "tr": "Modül",
        "en": "Module"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Modul.",
        "accusative": "Ich nehme ___ Modul.",
        "dative": "Vor ___ Modul steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Modus",
      "translation": {
        "tr": "mod",
        "en": "mode"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Modus.",
        "accusative": "Ich nehme ___ Modus.",
        "dative": "Vor ___ Modus steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Mönch",
      "translation": {
        "tr": "Keşiş",
        "en": "Monk"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Mönch.",
        "accusative": "Ich kaufe ___ Mönch.",
        "dative": "Mit ___ Mönch arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Monopol",
      "translation": {
        "tr": "Tekel",
        "en": "Monopoly"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Monopol.",
        "accusative": "Ich kaufe ___ Monopol.",
        "dative": "Mit ___ Monopol arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Moral",
      "translation": {
        "tr": "Ahlak",
        "en": "Morality"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Moral.",
        "accusative": "Ich suche ___ Moral.",
        "dative": "Neben ___ Moral liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Motivation",
      "translation": {
        "tr": "Motivasyon",
        "en": "Motivation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Motivation.",
        "accusative": "Ich suche ___ Motivation.",
        "dative": "Neben ___ Motivation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Muskulatur",
      "translation": {
        "tr": "Kas yapısı",
        "en": "Musculature"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Muskulatur.",
        "accusative": "Ich nehme ___ Muskulatur.",
        "dative": "Vor ___ Muskulatur steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Mythos",
      "translation": {
        "tr": "efsane",
        "en": "Myth"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Mythos.",
        "accusative": "Ich suche ___ Mythos.",
        "dative": "Neben ___ Mythos liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Nachahmer",
      "translation": {
        "tr": "taklitçi",
        "en": "copycat"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Nachahmer.",
        "accusative": "Ich sehe ___ Nachahmer.",
        "dative": "Ich komme mit ___ Nachahmer."
      }
    },
    {
      "article": "die",
      "word": "Nachbarschaft",
      "translation": {
        "tr": "Mahalle",
        "en": "Neighborhood"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nachbarschaft.",
        "accusative": "Ich besuche ___ Nachbarschaft.",
        "dative": "Ich danke ___ Nachbarschaft."
      }
    },
    {
      "article": "die",
      "word": "Nachfolge",
      "translation": {
        "tr": "Veraset",
        "en": "Succession"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nachfolge.",
        "accusative": "Ich suche ___ Nachfolge.",
        "dative": "Neben ___ Nachfolge liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Nachfolger",
      "translation": {
        "tr": "halef",
        "en": "successor"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Nachfolger.",
        "accusative": "Ich kaufe ___ Nachfolger.",
        "dative": "Mit ___ Nachfolger arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Nachrichtenagentur",
      "translation": {
        "tr": "Haber ajansı",
        "en": "News agency"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Nachrichtenagentur.",
        "accusative": "Ich kaufe ___ Nachrichtenagentur.",
        "dative": "Mit ___ Nachrichtenagentur arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Nachweis",
      "translation": {
        "tr": "Kanıt",
        "en": "Proof"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nachweis.",
        "accusative": "Ich sehe ___ Nachweis.",
        "dative": "Ich gehe mit ___ Nachweis."
      }
    },
    {
      "article": "der",
      "word": "Nachwuchs",
      "translation": {
        "tr": "yavru",
        "en": "offspring"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Nachwuchs.",
        "accusative": "Ich trage ___ Nachwuchs.",
        "dative": "Neben ___ Nachwuchs liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Nähe",
      "translation": {
        "tr": "Yakınlık",
        "en": "Proximity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nähe.",
        "accusative": "Ich suche ___ Nähe.",
        "dative": "Neben ___ Nähe liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Nationalpark",
      "translation": {
        "tr": "Milli Park",
        "en": "National Park"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Nationalpark.",
        "accusative": "Ich besuche ___ Nationalpark.",
        "dative": "Ich warte vor ___ Nationalpark."
      }
    },
    {
      "article": "die",
      "word": "Navigation",
      "translation": {
        "tr": "Navigasyon",
        "en": "Navigation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Navigation.",
        "accusative": "Ich suche ___ Navigation.",
        "dative": "Neben ___ Navigation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Neigung",
      "translation": {
        "tr": "Eğim",
        "en": "Inclination"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Neigung.",
        "accusative": "Ich kaufe ___ Neigung.",
        "dative": "Mit ___ Neigung arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Nervensystem",
      "translation": {
        "tr": "Sinir sistemi",
        "en": "Nervous system"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Nervensystem.",
        "accusative": "Ich brauche ___ Nervensystem.",
        "dative": "Ich beschäftige mich mit ___ Nervensystem."
      }
    },
    {
      "article": "das",
      "word": "Netzwerk",
      "translation": {
        "tr": "Ağ",
        "en": "Network"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Netzwerk.",
        "accusative": "Ich suche ___ Netzwerk.",
        "dative": "Neben ___ Netzwerk liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Neugier",
      "translation": {
        "tr": "Merak",
        "en": "Curiosity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Neugier.",
        "accusative": "Ich suche ___ Neugier.",
        "dative": "Neben ___ Neugier liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Neuheit",
      "translation": {
        "tr": "yenilik",
        "en": "Novelty"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Neuheit.",
        "accusative": "Ich kaufe ___ Neuheit.",
        "dative": "Mit ___ Neuheit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Niederschlag",
      "translation": {
        "tr": "Yağış",
        "en": "Precipitation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Niederschlag.",
        "accusative": "Ich sehe ___ Niederschlag.",
        "dative": "Ich gehe mit ___ Niederschlag."
      }
    },
    {
      "article": "das",
      "word": "Niveau",
      "translation": {
        "tr": "seviye",
        "en": "level"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Niveau.",
        "accusative": "Ich suche ___ Niveau.",
        "dative": "Neben ___ Niveau liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Nominierung",
      "translation": {
        "tr": "Adaylık",
        "en": "Nomination"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Nominierung.",
        "accusative": "Ich nehme ___ Nominierung.",
        "dative": "Vor ___ Nominierung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Norm",
      "translation": {
        "tr": "Norm",
        "en": "Norm"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Norm.",
        "accusative": "Ich suche ___ Norm.",
        "dative": "Neben ___ Norm liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Nostalgie",
      "translation": {
        "tr": "Nostalji",
        "en": "Nostalgia"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Nostalgie.",
        "accusative": "Ich sehe ___ Nostalgie.",
        "dative": "Ich gehe mit ___ Nostalgie."
      }
    },
    {
      "article": "die",
      "word": "Notwendigkeit",
      "translation": {
        "tr": "gereklilik",
        "en": "necessity"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Notwendigkeit.",
        "accusative": "Ich organisiere ___ Notwendigkeit.",
        "dative": "Nach ___ Notwendigkeit fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Nutzung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Nutzung.",
        "accusative": "Ich suche ___ Nutzung.",
        "dative": "Neben ___ Nutzung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Oberst",
      "translation": {
        "tr": "Albay",
        "en": "Colonel"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Oberst.",
        "accusative": "Ich kaufe ___ Oberst.",
        "dative": "Mit ___ Oberst arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Offenbarung",
      "translation": {
        "tr": "Vahiy",
        "en": "Revelation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Offenbarung.",
        "accusative": "Ich suche ___ Offenbarung.",
        "dative": "Neben ___ Offenbarung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Offenheit",
      "translation": {
        "tr": "Açıklık",
        "en": "Openness"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Offenheit.",
        "accusative": "Ich kaufe ___ Offenheit.",
        "dative": "Ich arbeite mit ___ Offenheit."
      }
    },
    {
      "article": "die",
      "word": "Öffentlichkeit",
      "translation": {
        "tr": "kamu",
        "en": "public"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Öffentlichkeit.",
        "accusative": "Ich kaufe ___ Öffentlichkeit.",
        "dative": "Mit ___ Öffentlichkeit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Ohnmacht",
      "translation": {
        "tr": "bayılma",
        "en": "fainting"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ohnmacht.",
        "accusative": "Ich suche ___ Ohnmacht.",
        "dative": "Neben ___ Ohnmacht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Ökonomie",
      "translation": {
        "tr": "Ekonomi",
        "en": "Economics"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ökonomie.",
        "accusative": "Ich sehe ___ Ökonomie.",
        "dative": "Ich gehe mit ___ Ökonomie."
      }
    },
    {
      "article": "die",
      "word": "Operation",
      "translation": {
        "tr": "Operasyon",
        "en": "Operation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Operation.",
        "accusative": "Ich suche ___ Operation.",
        "dative": "Neben ___ Operation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Opposition",
      "translation": {
        "tr": "muhalefet",
        "en": "opposition"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Opposition.",
        "accusative": "Ich suche ___ Opposition.",
        "dative": "Neben ___ Opposition liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Optimismus",
      "translation": {
        "tr": "İyimserlik",
        "en": "Optimism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Optimismus.",
        "accusative": "Ich sehe ___ Optimismus.",
        "dative": "Ich gehe mit ___ Optimismus."
      }
    },
    {
      "article": "der",
      "word": "Organismus",
      "translation": {
        "tr": "organizma",
        "en": "organism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Organismus.",
        "accusative": "Ich sehe ___ Organismus.",
        "dative": "Ich gehe mit ___ Organismus."
      }
    },
    {
      "article": "der",
      "word": "Orient",
      "translation": {
        "tr": "Doğu",
        "en": "Orient"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Orient.",
        "accusative": "Ich suche ___ Orient.",
        "dative": "Neben ___ Orient liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Palästinenser",
      "translation": {
        "tr": "Filistinliler",
        "en": "Palestinians"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Palästinenser.",
        "accusative": "Ich kaufe ___ Palästinenser.",
        "dative": "Mit ___ Palästinenser arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Papst",
      "translation": {
        "tr": "Papa",
        "en": "Pope"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Papst.",
        "accusative": "Ich suche ___ Papst.",
        "dative": "Neben ___ Papst liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Parade",
      "translation": {
        "tr": "geçit töreni",
        "en": "parade"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Parade.",
        "accusative": "Ich suche ___ Parade.",
        "dative": "Neben ___ Parade liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Paradies",
      "translation": {
        "tr": "Cennet",
        "en": "Paradise"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Paradies.",
        "accusative": "Ich suche ___ Paradies.",
        "dative": "Neben ___ Paradies liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Parallele",
      "translation": {
        "tr": "paralel",
        "en": "Parallel"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Parallele.",
        "accusative": "Ich kaufe ___ Parallele.",
        "dative": "Mit ___ Parallele arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Parameter",
      "translation": {
        "tr": "Parametreler",
        "en": "Parameters"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Parameter.",
        "accusative": "Ich kaufe ___ Parameter.",
        "dative": "Mit ___ Parameter arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Parkett",
      "translation": {
        "tr": "Parke",
        "en": "Parquet"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Parkett.",
        "accusative": "Ich suche ___ Parkett.",
        "dative": "Ich bin in ___ Parkett."
      }
    },
    {
      "article": "der",
      "word": "Parteitag",
      "translation": {
        "tr": "Parti konferansı",
        "en": "Party conference"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Parteitag.",
        "accusative": "Ich starte ___ Parteitag.",
        "dative": "Bei ___ Parteitag lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Partie",
      "translation": {
        "tr": "oyun",
        "en": "game"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Partie.",
        "accusative": "Ich starte ___ Partie.",
        "dative": "Bei ___ Partie lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Partnerschaft",
      "translation": {
        "tr": "ortaklık",
        "en": "partnership"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Partnerschaft.",
        "accusative": "Ich miete ___ Partnerschaft.",
        "dative": "Ich fahre mit ___ Partnerschaft."
      }
    },
    {
      "article": "die",
      "word": "Passage",
      "translation": {
        "tr": "geçit",
        "en": "passage"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Passage.",
        "accusative": "Ich sehe ___ Passage.",
        "dative": "Ich gehe mit ___ Passage."
      }
    },
    {
      "article": "der",
      "word": "Pastor",
      "translation": {
        "tr": "papaz",
        "en": "Pastor"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pastor.",
        "accusative": "Ich suche ___ Pastor.",
        "dative": "Neben ___ Pastor liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Patch",
      "translation": {
        "tr": "Yama",
        "en": "Patch"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Patch.",
        "accusative": "Ich sehe ___ Patch.",
        "dative": "Ich gehe mit ___ Patch."
      }
    },
    {
      "article": "das",
      "word": "Patent",
      "translation": {
        "tr": "patent",
        "en": "Patent"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Patent.",
        "accusative": "Ich suche ___ Patent.",
        "dative": "Neben ___ Patent liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Patrouille",
      "translation": {
        "tr": "Devriye",
        "en": "Patrol"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Patrouille.",
        "accusative": "Ich nehme ___ Patrouille.",
        "dative": "Vor ___ Patrouille steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Pavillon",
      "translation": {
        "tr": "köşk",
        "en": "Pavilion"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Pavillon.",
        "accusative": "Ich füttere ___ Pavillon.",
        "dative": "Ich spiele mit ___ Pavillon."
      }
    },
    {
      "article": "die",
      "word": "Performance",
      "translation": {
        "tr": "Performans",
        "en": "Performance"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Performance.",
        "accusative": "Ich kenne ___ Performance.",
        "dative": "Ich spreche mit ___ Performance."
      }
    },
    {
      "article": "die",
      "word": "Periode",
      "translation": {
        "tr": "dönem",
        "en": "period"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Periode.",
        "accusative": "Ich kaufe ___ Periode.",
        "dative": "Mit ___ Periode arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Personal",
      "translation": {
        "tr": "Personel",
        "en": "Personnel"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Personal.",
        "accusative": "Ich kenne ___ Personal.",
        "dative": "Ich spreche mit ___ Personal."
      }
    },
    {
      "article": "die",
      "word": "Persönlichkeit",
      "translation": {
        "tr": "kişilik",
        "en": "personality"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Persönlichkeit.",
        "accusative": "Ich treffe ___ Persönlichkeit.",
        "dative": "Ich helfe ___ Persönlichkeit."
      }
    },
    {
      "article": "die",
      "word": "Perspektive",
      "translation": {
        "tr": "perspektif",
        "en": "perspective"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Perspektive.",
        "accusative": "Ich sehe ___ Perspektive.",
        "dative": "Ich gehe mit ___ Perspektive."
      }
    },
    {
      "article": "die",
      "word": "Pest",
      "translation": {
        "tr": "Veba",
        "en": "Plague"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pest.",
        "accusative": "Ich suche ___ Pest.",
        "dative": "Neben ___ Pest liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Phänomen",
      "translation": {
        "tr": "fenomen",
        "en": "phenomenon"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Phänomen.",
        "accusative": "Ich brauche ___ Phänomen.",
        "dative": "Ich beschäftige mich mit ___ Phänomen."
      }
    },
    {
      "article": "die",
      "word": "Phantasie",
      "translation": {
        "tr": "hayal gücü",
        "en": "imagination"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Phantasie.",
        "accusative": "Ich kaufe ___ Phantasie.",
        "dative": "Mit ___ Phantasie arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Phase",
      "translation": {
        "tr": "aşama",
        "en": "phase"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Phase.",
        "accusative": "Ich suche ___ Phase.",
        "dative": "Neben ___ Phase liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Philosoph",
      "translation": {
        "tr": "filozof",
        "en": "philosopher"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Philosoph.",
        "accusative": "Ich nehme ___ Philosoph.",
        "dative": "Vor ___ Philosoph steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Philosophie",
      "translation": {
        "tr": "Felsefe",
        "en": "Philosophy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Philosophie.",
        "accusative": "Ich kaufe ___ Philosophie.",
        "dative": "Mit ___ Philosophie arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Physik",
      "translation": {
        "tr": "Fizik",
        "en": "Physics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Physik.",
        "accusative": "Ich kaufe ___ Physik.",
        "dative": "Mit ___ Physik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Physiker",
      "translation": {
        "tr": "Fizikçi",
        "en": "Physicist"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Physiker.",
        "accusative": "Ich kaufe ___ Physiker.",
        "dative": "Mit ___ Physiker arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Pilger",
      "translation": {
        "tr": "Hacı",
        "en": "Pilgrim"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pilger.",
        "accusative": "Ich kaufe ___ Pilger.",
        "dative": "Mit ___ Pilger arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Pionier",
      "translation": {
        "tr": "Öncü",
        "en": "Pioneer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Pionier.",
        "accusative": "Ich sehe ___ Pionier.",
        "dative": "Ich gehe mit ___ Pionier."
      }
    },
    {
      "article": "die",
      "word": "Pipeline",
      "translation": {
        "tr": "boru hattı",
        "en": "pipeline"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Pipeline.",
        "accusative": "Ich suche ___ Pipeline.",
        "dative": "Ich gehe mit ___ Pipeline raus."
      }
    },
    {
      "article": "das",
      "word": "Plädoyer",
      "translation": {
        "tr": "savunma",
        "en": "Plea"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Plädoyer.",
        "accusative": "Ich kaufe ___ Plädoyer.",
        "dative": "Mit ___ Plädoyer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Plantage",
      "translation": {
        "tr": "plantasyon",
        "en": "plantation"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Plantage.",
        "accusative": "Ich plane ___ Plantage.",
        "dative": "Nach ___ Plantage mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Planung",
      "translation": {
        "tr": "Planlama",
        "en": "Planning"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Planung.",
        "accusative": "Ich erwarte ___ Planung.",
        "dative": "Vor ___ Planung bin ich nervös."
      }
    },
    {
      "article": "das",
      "word": "Plastik",
      "translation": {
        "tr": "Plastik",
        "en": "Plastic"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Plastik.",
        "accusative": "Ich sehe ___ Plastik.",
        "dative": "Ich gehe mit ___ Plastik."
      }
    },
    {
      "article": "die",
      "word": "Plattform",
      "translation": {
        "tr": "platformu",
        "en": "Platform"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Plattform.",
        "accusative": "Ich sehe ___ Plattform.",
        "dative": "Ich gehe mit ___ Plattform."
      }
    },
    {
      "article": "der",
      "word": "Platzhalter",
      "translation": {
        "tr": "Yer tutucu",
        "en": "Placeholder"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Platzhalter.",
        "accusative": "Ich sehe ___ Platzhalter.",
        "dative": "Ich gehe mit ___ Platzhalter."
      }
    },
    {
      "article": "die",
      "word": "Poesie",
      "translation": {
        "tr": "Şiir",
        "en": "Poetry"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Poesie.",
        "accusative": "Ich suche ___ Poesie.",
        "dative": "Neben ___ Poesie liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Pole",
      "translation": {
        "tr": "Direkler",
        "en": "Poles"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Pole.",
        "accusative": "Ich kaufe ___ Pole.",
        "dative": "Mit ___ Pole arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Politiker",
      "translation": {
        "tr": "Politikacı",
        "en": "Politician"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Politiker.",
        "accusative": "Ich kaufe ___ Politiker.",
        "dative": "Mit ___ Politiker arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Population",
      "translation": {
        "tr": "Nüfus",
        "en": "Population"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Population.",
        "accusative": "Ich suche ___ Population.",
        "dative": "Neben ___ Population liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Portfolio",
      "translation": {
        "tr": "Portföy",
        "en": "Portfolio"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Portfolio.",
        "accusative": "Ich sehe ___ Portfolio.",
        "dative": "Ich gehe mit ___ Portfolio."
      }
    },
    {
      "article": "das",
      "word": "Porträt",
      "translation": {
        "tr": "Portre",
        "en": "Portrait"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Porträt.",
        "accusative": "Ich sehe ___ Porträt.",
        "dative": "Ich gehe mit ___ Porträt."
      }
    },
    {
      "article": "die",
      "word": "Pose",
      "translation": {
        "tr": "poz",
        "en": "pose"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Pose.",
        "accusative": "Ich suche ___ Pose.",
        "dative": "Neben ___ Pose liegt ein Heft."
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
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Posten.",
        "accusative": "Ich nehme ___ Posten.",
        "dative": "Vor ___ Posten steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Potenzial",
      "translation": {
        "tr": "Potansiyel",
        "en": "Potential"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Potenzial.",
        "accusative": "Ich erkläre ___ Potenzial.",
        "dative": "An ___ Potenzial arbeiten wir."
      }
    },
    {
      "article": "das",
      "word": "Präparat",
      "translation": {
        "tr": "hazırlık",
        "en": "preparation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Präparat.",
        "accusative": "Ich nehme ___ Präparat.",
        "dative": "Vor ___ Präparat steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Präsidentschaft",
      "translation": {
        "tr": "başkanlık",
        "en": "Presidency"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Präsidentschaft.",
        "accusative": "Ich suche ___ Präsidentschaft.",
        "dative": "Neben ___ Präsidentschaft liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Prävention",
      "translation": {
        "tr": "Önleme",
        "en": "Prevention"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Prävention wichtig.",
        "accusative": "Wir verstehen ___ Prävention.",
        "dative": "Bei ___ Prävention brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Praxis",
      "translation": {
        "tr": "Alıştırma",
        "en": "Practice"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Praxis.",
        "accusative": "Ich suche ___ Praxis.",
        "dative": "Neben ___ Praxis liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Präzedenzfall",
      "translation": {
        "tr": "emsal",
        "en": "Precedent"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Präzedenzfall.",
        "accusative": "Ich nehme ___ Präzedenzfall.",
        "dative": "Vor ___ Präzedenzfall steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Präzision",
      "translation": {
        "tr": "Hassasiyet",
        "en": "Precision"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Präzision.",
        "accusative": "Ich sehe ___ Präzision.",
        "dative": "Ich gehe mit ___ Präzision."
      }
    },
    {
      "article": "der",
      "word": "Premier",
      "translation": {
        "tr": "Premier",
        "en": "Premier"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Premier.",
        "accusative": "Ich sehe ___ Premier.",
        "dative": "Ich gehe mit ___ Premier."
      }
    },
    {
      "article": "die",
      "word": "Premiere",
      "translation": {
        "tr": "Prömiyer",
        "en": "Premiere"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Premiere.",
        "accusative": "Ich suche ___ Premiere.",
        "dative": "Neben ___ Premiere liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Premierminister",
      "translation": {
        "tr": "Başbakan",
        "en": "Prime Minister"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Premierminister.",
        "accusative": "Ich kaufe ___ Premierminister.",
        "dative": "Mit ___ Premierminister arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Presse",
      "translation": {
        "tr": "Basın",
        "en": "Press"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Presse.",
        "accusative": "Ich nehme ___ Presse.",
        "dative": "Vor ___ Presse steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Pressekonferenz",
      "translation": {
        "tr": "Basın toplantısı",
        "en": "Press conference"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Pressekonferenz.",
        "accusative": "Ich starte ___ Pressekonferenz.",
        "dative": "Bei ___ Pressekonferenz lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Priorität",
      "translation": {
        "tr": "Öncelik",
        "en": "Priority"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Priorität.",
        "accusative": "Ich nehme ___ Priorität.",
        "dative": "Vor ___ Priorität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Privatisierung",
      "translation": {
        "tr": "Özelleştirme",
        "en": "Privatization"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Privatisierung.",
        "accusative": "Ich suche ___ Privatisierung.",
        "dative": "Neben ___ Privatisierung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Privatsphäre",
      "translation": {
        "tr": "Gizlilik",
        "en": "Privacy"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Privatsphäre.",
        "accusative": "Ich suche ___ Privatsphäre.",
        "dative": "Neben ___ Privatsphäre liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Privileg",
      "translation": {
        "tr": "Ayrıcalık",
        "en": "Privilege"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Privileg.",
        "accusative": "Ich nehme ___ Privileg.",
        "dative": "Vor ___ Privileg steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Problematik",
      "translation": {
        "tr": "Sorun",
        "en": "Problem"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Problematik zentral.",
        "accusative": "Wir besprechen ___ Problematik.",
        "dative": "Mit ___ Problematik wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Produktivität",
      "translation": {
        "tr": "Verimlilik",
        "en": "Productivity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Produktivität.",
        "accusative": "Ich nehme ___ Produktivität.",
        "dative": "Vor ___ Produktivität steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Produzent",
      "translation": {
        "tr": "yapımcı",
        "en": "producer"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Produzent.",
        "accusative": "Ich nehme ___ Produzent.",
        "dative": "Vor ___ Produzent steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Profit",
      "translation": {
        "tr": "Kâr",
        "en": "Profit"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Profit.",
        "accusative": "Ich suche ___ Profit.",
        "dative": "Neben ___ Profit liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Prognose",
      "translation": {
        "tr": "prognoz",
        "en": "Prognosis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Prognose.",
        "accusative": "Ich kaufe ___ Prognose.",
        "dative": "Mit ___ Prognose arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Programmierung",
      "translation": {
        "tr": "Programlama",
        "en": "Programming"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Programmierung.",
        "accusative": "Ich erwarte ___ Programmierung.",
        "dative": "Vor ___ Programmierung bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Projektion",
      "translation": {
        "tr": "Projeksiyon",
        "en": "Projection"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Projektion.",
        "accusative": "Ich erwarte ___ Projektion.",
        "dative": "Vor ___ Projektion bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Projektor",
      "translation": {
        "tr": "Projektör",
        "en": "Projector"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Projektor.",
        "accusative": "Ich plane ___ Projektor.",
        "dative": "Nach ___ Projektor mache ich eine Pause."
      }
    },
    {
      "article": "der",
      "word": "Prominente",
      "translation": {
        "tr": "ünlüler",
        "en": "Celebrities"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Prominente.",
        "accusative": "Ich sehe ___ Prominente.",
        "dative": "Ich gehe mit ___ Prominente."
      }
    },
    {
      "article": "die",
      "word": "Propaganda",
      "translation": {
        "tr": "propaganda",
        "en": "propaganda"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Propaganda.",
        "accusative": "Ich suche ___ Propaganda.",
        "dative": "Neben ___ Propaganda liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Protagonist",
      "translation": {
        "tr": "kahraman",
        "en": "protagonist"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Protagonist.",
        "accusative": "Ich kenne ___ Protagonist.",
        "dative": "Ich spreche mit ___ Protagonist."
      }
    },
    {
      "article": "das",
      "word": "Protein",
      "translation": {
        "tr": "proteini",
        "en": "Protein"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Protein.",
        "accusative": "Ich suche ___ Protein.",
        "dative": "Neben ___ Protein liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Prozess",
      "translation": {
        "tr": "Süreç",
        "en": "Process"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Prozess.",
        "accusative": "Ich kaufe ___ Prozess.",
        "dative": "Mit ___ Prozess arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Prozessor",
      "translation": {
        "tr": "işlemci",
        "en": "processor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Prozessor.",
        "accusative": "Ich nehme ___ Prozessor.",
        "dative": "Vor ___ Prozessor steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Psyche",
      "translation": {
        "tr": "Ruh",
        "en": "Psyche"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Psyche.",
        "accusative": "Ich suche ___ Psyche.",
        "dative": "Neben ___ Psyche liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Psychologe",
      "translation": {
        "tr": "Psikolog",
        "en": "Psychologist"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Psychologe.",
        "accusative": "Ich kaufe ___ Psychologe.",
        "dative": "Mit ___ Psychologe arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Psychologie",
      "translation": {
        "tr": "Psikoloji",
        "en": "Psychology"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Psychologie.",
        "accusative": "Ich kaufe ___ Psychologie.",
        "dative": "Mit ___ Psychologie arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Puffer",
      "translation": {
        "tr": "Tampon",
        "en": "Buffer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Puffer.",
        "accusative": "Ich sehe ___ Puffer.",
        "dative": "Ich gehe mit ___ Puffer."
      }
    },
    {
      "article": "der",
      "word": "Punk",
      "translation": {
        "tr": "Punk",
        "en": "Punk"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Punk.",
        "accusative": "Ich suche ___ Punk.",
        "dative": "Neben ___ Punk liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Qualifikation",
      "translation": {
        "tr": "Yeterlilik",
        "en": "Qualification"
      },
      "casePrompts": {
        "nominative": "Im Garten ist ___ Qualifikation.",
        "accusative": "Ich beobachte ___ Qualifikation.",
        "dative": "Ich stehe neben ___ Qualifikation."
      }
    },
    {
      "article": "das",
      "word": "Quartier",
      "translation": {
        "tr": "Çeyrek",
        "en": "Quarter"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Quartier.",
        "accusative": "Ich kaufe ___ Quartier.",
        "dative": "Mit ___ Quartier arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Quote",
      "translation": {
        "tr": "Kota",
        "en": "Quota"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Quote.",
        "accusative": "Ich sehe ___ Quote.",
        "dative": "Ich gehe mit ___ Quote."
      }
    },
    {
      "article": "das",
      "word": "Radar",
      "translation": {
        "tr": "radar",
        "en": "radar"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Radar.",
        "accusative": "Ich sehe ___ Radar.",
        "dative": "Ich gehe mit ___ Radar."
      }
    },
    {
      "article": "der",
      "word": "Radius",
      "translation": {
        "tr": "yarıçap",
        "en": "radius"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Radius.",
        "accusative": "Ich suche ___ Radius.",
        "dative": "Neben ___ Radius liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Radsport",
      "translation": {
        "tr": "Bisiklete binme",
        "en": "Cycling"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Radsport.",
        "accusative": "Ich suche ___ Radsport.",
        "dative": "Neben ___ Radsport liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rallye",
      "translation": {
        "tr": "miting",
        "en": "Rally"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rallye.",
        "accusative": "Ich nehme ___ Rallye.",
        "dative": "Vor ___ Rallye steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Rampenlicht",
      "translation": {
        "tr": "Gündem",
        "en": "Spotlight"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Rampenlicht.",
        "accusative": "Ich kaufe ___ Rampenlicht.",
        "dative": "Ich arbeite mit ___ Rampenlicht."
      }
    },
    {
      "article": "der",
      "word": "Raub",
      "translation": {
        "tr": "Soygun",
        "en": "Robbery"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Raub.",
        "accusative": "Ich kaufe ___ Raub.",
        "dative": "Mit ___ Raub arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Räumung",
      "translation": {
        "tr": "Tahliye",
        "en": "Eviction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Räumung.",
        "accusative": "Ich nehme ___ Räumung.",
        "dative": "Vor ___ Räumung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rausch",
      "translation": {
        "tr": "Zehirlenme",
        "en": "Intoxication"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Rausch.",
        "accusative": "Ich füttere ___ Rausch.",
        "dative": "Ich spiele mit ___ Rausch."
      }
    },
    {
      "article": "der",
      "word": "Reaktor",
      "translation": {
        "tr": "reaktör",
        "en": "reactor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Reaktor.",
        "accusative": "Ich sehe ___ Reaktor.",
        "dative": "Ich gehe mit ___ Reaktor."
      }
    },
    {
      "article": "die",
      "word": "Realisierung",
      "translation": {
        "tr": "Gerçekleşme",
        "en": "Realization"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Realisierung.",
        "accusative": "Ich suche ___ Realisierung.",
        "dative": "Neben ___ Realisierung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Realität",
      "translation": {
        "tr": "Gerçeklik",
        "en": "Reality"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Realität.",
        "accusative": "Ich nehme ___ Realität.",
        "dative": "Vor ___ Realität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Recherche",
      "translation": {
        "tr": "Araştırma",
        "en": "Research"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Recherche.",
        "accusative": "Ich fotografiere ___ Recherche.",
        "dative": "Wir treffen uns bei ___ Recherche."
      }
    },
    {
      "article": "die",
      "word": "Rechtfertigung",
      "translation": {
        "tr": "Gerekçe",
        "en": "Justification"
      },
      "casePrompts": {
        "nominative": "Dort läuft ___ Rechtfertigung.",
        "accusative": "Ich streichle ___ Rechtfertigung.",
        "dative": "Ich bin bei ___ Rechtfertigung."
      }
    },
    {
      "article": "der",
      "word": "Rechtsanwalt",
      "translation": {
        "tr": "Avukat",
        "en": "Lawyer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rechtsanwalt.",
        "accusative": "Ich sehe ___ Rechtsanwalt.",
        "dative": "Ich gehe mit ___ Rechtsanwalt."
      }
    },
    {
      "article": "die",
      "word": "Rechtsprechung",
      "translation": {
        "tr": "içtihat",
        "en": "jurisprudence"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Rechtsprechung.",
        "accusative": "Ich suche ___ Rechtsprechung.",
        "dative": "Ich gehe mit ___ Rechtsprechung raus."
      }
    },
    {
      "article": "die",
      "word": "Reduktion",
      "translation": {
        "tr": "Azaltma",
        "en": "Reduction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reduktion.",
        "accusative": "Ich suche ___ Reduktion.",
        "dative": "Neben ___ Reduktion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Reduzierung",
      "translation": {
        "tr": "Azaltma",
        "en": "Reduction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Reduzierung.",
        "accusative": "Ich nehme ___ Reduzierung.",
        "dative": "Vor ___ Reduzierung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Referendum",
      "translation": {
        "tr": "Referandum",
        "en": "Referendum"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Referendum.",
        "accusative": "Ich erwarte ___ Referendum.",
        "dative": "Vor ___ Referendum bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Referent",
      "translation": {
        "tr": "Hoparlör",
        "en": "Speaker"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Referent.",
        "accusative": "Ich suche ___ Referent.",
        "dative": "Neben ___ Referent liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Referenz",
      "translation": {
        "tr": "Referans",
        "en": "Reference"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Referenz.",
        "accusative": "Ich sehe ___ Referenz.",
        "dative": "Ich gehe mit ___ Referenz."
      }
    },
    {
      "article": "die",
      "word": "Reflexion",
      "translation": {
        "tr": "Yansıma",
        "en": "Reflection"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Reflexion.",
        "accusative": "Ich nehme ___ Reflexion.",
        "dative": "Vor ___ Reflexion steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Reform",
      "translation": {
        "tr": "reform",
        "en": "reform"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reform.",
        "accusative": "Ich suche ___ Reform.",
        "dative": "Neben ___ Reform liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Regelung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Regulation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Regelung.",
        "accusative": "Ich nehme ___ Regelung.",
        "dative": "Vor ___ Regelung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Regenschauer",
      "translation": {
        "tr": "Sağanak yağmur",
        "en": "Rain showers"
      },
      "casePrompts": {
        "nominative": "Im Wald ist ___ Regenschauer.",
        "accusative": "Ich fotografiere ___ Regenschauer.",
        "dative": "Ich bin bei ___ Regenschauer."
      }
    },
    {
      "article": "die",
      "word": "Regierung",
      "translation": {
        "tr": "Hükümet",
        "en": "Government"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Regierung.",
        "accusative": "Ich kaufe ___ Regierung.",
        "dative": "Mit ___ Regierung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Regierungschef",
      "translation": {
        "tr": "Hükümet Başkanı",
        "en": "Head of Government"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Regierungschef.",
        "accusative": "Ich kaufe ___ Regierungschef.",
        "dative": "Mit ___ Regierungschef arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Regime",
      "translation": {
        "tr": "rejim",
        "en": "regime"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Regime.",
        "accusative": "Ich suche ___ Regime.",
        "dative": "Neben ___ Regime liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Regisseur",
      "translation": {
        "tr": "Direktör",
        "en": "Director"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Regisseur.",
        "accusative": "Ich nehme ___ Regisseur.",
        "dative": "Vor ___ Regisseur steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Register",
      "translation": {
        "tr": "Kayıt ol",
        "en": "Register"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Register.",
        "accusative": "Ich suche ___ Register.",
        "dative": "Neben ___ Register liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Reich",
      "translation": {
        "tr": "Zengin",
        "en": "Rich"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Reich.",
        "accusative": "Ich kaufe ___ Reich.",
        "dative": "Mit ___ Reich arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Reichtum",
      "translation": {
        "tr": "zenginlik",
        "en": "wealth"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reichtum.",
        "accusative": "Ich suche ___ Reichtum.",
        "dative": "Neben ___ Reichtum liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Reichweite",
      "translation": {
        "tr": "Aralık",
        "en": "Range"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reichweite.",
        "accusative": "Ich suche ___ Reichweite.",
        "dative": "Neben ___ Reichweite liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Reihenfolge",
      "translation": {
        "tr": "Sipariş",
        "en": "Order"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Reihenfolge.",
        "accusative": "Ich sehe ___ Reihenfolge.",
        "dative": "Ich gehe mit ___ Reihenfolge."
      }
    },
    {
      "article": "die",
      "word": "Reinheit",
      "translation": {
        "tr": "saflık",
        "en": "Purity"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Reinheit.",
        "accusative": "Ich kaufe ___ Reinheit.",
        "dative": "Mit ___ Reinheit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Reisende",
      "translation": {
        "tr": "gezginler",
        "en": "travelers"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Reisende.",
        "accusative": "Ich organisiere ___ Reisende.",
        "dative": "Nach ___ Reisende fahre ich nach Hause."
      }
    },
    {
      "article": "der",
      "word": "Reiz",
      "translation": {
        "tr": "uyarıcı",
        "en": "stimulus"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Reiz.",
        "accusative": "Ich sehe ___ Reiz.",
        "dative": "Ich gehe mit ___ Reiz."
      }
    },
    {
      "article": "der",
      "word": "Rektor",
      "translation": {
        "tr": "Rektör",
        "en": "Rector"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rektor.",
        "accusative": "Ich suche ___ Rektor.",
        "dative": "Neben ___ Rektor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Relation",
      "translation": {
        "tr": "ilişki",
        "en": "relation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Relation.",
        "accusative": "Ich suche ___ Relation.",
        "dative": "Neben ___ Relation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Relevanz",
      "translation": {
        "tr": "Alaka düzeyi",
        "en": "Relevance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Relevanz.",
        "accusative": "Ich sehe ___ Relevanz.",
        "dative": "Ich gehe mit ___ Relevanz."
      }
    },
    {
      "article": "das",
      "word": "Relief",
      "translation": {
        "tr": "kabartma",
        "en": "relief"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Relief.",
        "accusative": "Ich suche ___ Relief.",
        "dative": "Neben ___ Relief liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rendite",
      "translation": {
        "tr": "Dönüş",
        "en": "Return"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Rendite.",
        "accusative": "Ich starte ___ Rendite.",
        "dative": "Bei ___ Rendite lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Reproduktion",
      "translation": {
        "tr": "Üreme",
        "en": "Reproduction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Reproduktion.",
        "accusative": "Ich suche ___ Reproduktion.",
        "dative": "Neben ___ Reproduktion liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Republik",
      "translation": {
        "tr": "Cumhuriyet",
        "en": "Republic"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Republik.",
        "accusative": "Ich suche ___ Republik.",
        "dative": "Neben ___ Republik liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Republikaner",
      "translation": {
        "tr": "Cumhuriyetçiler",
        "en": "Republicans"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Republikaner.",
        "accusative": "Ich sehe ___ Republikaner.",
        "dative": "Ich gehe mit ___ Republikaner."
      }
    },
    {
      "article": "die",
      "word": "Reserve",
      "translation": {
        "tr": "Rezerv",
        "en": "Reserve"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Reserve.",
        "accusative": "Ich sehe ___ Reserve.",
        "dative": "Ich gehe mit ___ Reserve."
      }
    },
    {
      "article": "die",
      "word": "Reservierung",
      "translation": {
        "tr": "Rezervasyon",
        "en": "Reservation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Reservierung.",
        "accusative": "Ich nehme ___ Reservierung.",
        "dative": "Vor ___ Reservierung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Residenz",
      "translation": {
        "tr": "İkamet",
        "en": "Residence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Residenz.",
        "accusative": "Ich sehe ___ Residenz.",
        "dative": "Ich gehe mit ___ Residenz."
      }
    },
    {
      "article": "das",
      "word": "Resort",
      "translation": {
        "tr": "çare",
        "en": "resort"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Resort.",
        "accusative": "Ich suche ___ Resort.",
        "dative": "Neben ___ Resort liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ressort",
      "translation": {
        "tr": "departman",
        "en": "department"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ressort.",
        "accusative": "Ich besuche ___ Ressort.",
        "dative": "Ich danke ___ Ressort."
      }
    },
    {
      "article": "die",
      "word": "Ressource",
      "translation": {
        "tr": "Kaynak",
        "en": "Resource"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ressource.",
        "accusative": "Ich nehme ___ Ressource.",
        "dative": "Vor ___ Ressource steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Resultat",
      "translation": {
        "tr": "Sonuç",
        "en": "Result"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Resultat.",
        "accusative": "Ich treffe ___ Resultat.",
        "dative": "Ich helfe ___ Resultat."
      }
    },
    {
      "article": "die",
      "word": "Reue",
      "translation": {
        "tr": "pişmanlık",
        "en": "Regret"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Reue.",
        "accusative": "Ich kenne ___ Reue.",
        "dative": "Ich spreche mit ___ Reue."
      }
    },
    {
      "article": "die",
      "word": "Revolution",
      "translation": {
        "tr": "devrim",
        "en": "revolution"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Revolution.",
        "accusative": "Ich suche ___ Revolution.",
        "dative": "Neben ___ Revolution liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rezession",
      "translation": {
        "tr": "Durgunluk",
        "en": "Recession"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rezession.",
        "accusative": "Ich nehme ___ Rezession.",
        "dative": "Vor ___ Rezession steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Rhetorik",
      "translation": {
        "tr": "Retorik",
        "en": "Rhetoric"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rhetorik.",
        "accusative": "Ich suche ___ Rhetorik.",
        "dative": "Neben ___ Rhetorik liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Rheuma",
      "translation": {
        "tr": "Romatizma",
        "en": "Rheumatism"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rheuma.",
        "accusative": "Ich nehme ___ Rheuma.",
        "dative": "Vor ___ Rheuma steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rhythmus",
      "translation": {
        "tr": "ritim",
        "en": "rhythm"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rhythmus.",
        "accusative": "Ich sehe ___ Rhythmus.",
        "dative": "Ich gehe mit ___ Rhythmus."
      }
    },
    {
      "article": "die",
      "word": "Richtlinie",
      "translation": {
        "tr": "Politika",
        "en": "Policy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Richtlinie.",
        "accusative": "Ich kaufe ___ Richtlinie.",
        "dative": "Mit ___ Richtlinie arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Riff",
      "translation": {
        "tr": "Resif",
        "en": "Reef"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Riff.",
        "accusative": "Ich kaufe ___ Riff.",
        "dative": "Mit ___ Riff arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Ringen",
      "translation": {
        "tr": "Güreş",
        "en": "Wrestling"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Ringen.",
        "accusative": "Ich suche ___ Ringen.",
        "dative": "Ich gehe mit ___ Ringen raus."
      }
    },
    {
      "article": "das",
      "word": "Ritual",
      "translation": {
        "tr": "ritüel",
        "en": "ritual"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ritual.",
        "accusative": "Ich suche ___ Ritual.",
        "dative": "Neben ___ Ritual liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rivale",
      "translation": {
        "tr": "Rakip",
        "en": "Rival"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rivale.",
        "accusative": "Ich nehme ___ Rivale.",
        "dative": "Vor ___ Rivale steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rohstoff",
      "translation": {
        "tr": "hammadde",
        "en": "raw material"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rohstoff.",
        "accusative": "Ich suche ___ Rohstoff.",
        "dative": "Neben ___ Rohstoff liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Romanze",
      "translation": {
        "tr": "romantik",
        "en": "Romance"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Romanze.",
        "accusative": "Ich treffe ___ Romanze.",
        "dative": "Ich helfe ___ Romanze."
      }
    },
    {
      "article": "der",
      "word": "Römer",
      "translation": {
        "tr": "Romalılar",
        "en": "Romans"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Römer.",
        "accusative": "Ich besuche ___ Römer.",
        "dative": "Ich danke ___ Römer."
      }
    },
    {
      "article": "die",
      "word": "Rotation",
      "translation": {
        "tr": "rotasyon",
        "en": "rotation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rotation.",
        "accusative": "Ich suche ___ Rotation.",
        "dative": "Neben ___ Rotation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Routine",
      "translation": {
        "tr": "rutin",
        "en": "routine"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Routine.",
        "accusative": "Ich sehe ___ Routine.",
        "dative": "Ich gehe mit ___ Routine."
      }
    },
    {
      "article": "die",
      "word": "Rubrik",
      "translation": {
        "tr": "Değerlendirme tablosu",
        "en": "Rubric"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Rubrik.",
        "accusative": "Ich erwarte ___ Rubrik.",
        "dative": "Vor ___ Rubrik bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Rückgang",
      "translation": {
        "tr": "düşüş",
        "en": "decline"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Rückgang.",
        "accusative": "Ich kaufe ___ Rückgang.",
        "dative": "Mit ___ Rückgang arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Rückhalt",
      "translation": {
        "tr": "destek",
        "en": "support"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rückhalt.",
        "accusative": "Ich suche ___ Rückhalt.",
        "dative": "Neben ___ Rückhalt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rückkehr",
      "translation": {
        "tr": "Dönüş",
        "en": "Return"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Rückkehr.",
        "accusative": "Ich sehe ___ Rückkehr.",
        "dative": "Ich gehe mit ___ Rückkehr."
      }
    },
    {
      "article": "die",
      "word": "Rückmeldung",
      "translation": {
        "tr": "Geribildirim",
        "en": "Feedback"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Rückmeldung.",
        "accusative": "Ich kaufe ___ Rückmeldung.",
        "dative": "Mit ___ Rückmeldung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Rückruf",
      "translation": {
        "tr": "Geri arama",
        "en": "Callback"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rückruf.",
        "accusative": "Ich suche ___ Rückruf.",
        "dative": "Neben ___ Rückruf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Rücksicht",
      "translation": {
        "tr": "dikkate alma",
        "en": "Consideration"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Rücksicht.",
        "accusative": "Ich kaufe ___ Rücksicht.",
        "dative": "Mit ___ Rücksicht arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Rückstand",
      "translation": {
        "tr": "birikmiş iş yığını",
        "en": "backlog"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rückstand.",
        "accusative": "Ich nehme ___ Rückstand.",
        "dative": "Vor ___ Rückstand steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Rücktritt",
      "translation": {
        "tr": "istifa",
        "en": "Resignation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rücktritt.",
        "accusative": "Ich suche ___ Rücktritt.",
        "dative": "Neben ___ Rücktritt liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rückzug",
      "translation": {
        "tr": "geri çekilmek",
        "en": "retreat"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Rückzug.",
        "accusative": "Ich nehme ___ Rückzug.",
        "dative": "Vor ___ Rückzug steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Ruhm",
      "translation": {
        "tr": "Şöhret",
        "en": "Fame"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ruhm.",
        "accusative": "Ich nehme ___ Ruhm.",
        "dative": "Vor ___ Ruhm steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Ruine",
      "translation": {
        "tr": "harabe",
        "en": "Ruin"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Ruine.",
        "accusative": "Ich nehme ___ Ruine.",
        "dative": "Vor ___ Ruine steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Runde",
      "translation": {
        "tr": "yuvarlak",
        "en": "round"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Runde.",
        "accusative": "Ich suche ___ Runde.",
        "dative": "Neben ___ Runde liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Rundfunk",
      "translation": {
        "tr": "Yayıncılık",
        "en": "Broadcasting"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Rundfunk.",
        "accusative": "Ich suche ___ Rundfunk.",
        "dative": "Neben ___ Rundfunk liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Russe",
      "translation": {
        "tr": "Rusça",
        "en": "Russian"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Russe.",
        "accusative": "Ich nehme ___ Russe.",
        "dative": "Vor ___ Russe steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Rutsche",
      "translation": {
        "tr": "slayt",
        "en": "slide"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Rutsche.",
        "accusative": "Ich kaufe ___ Rutsche.",
        "dative": "Mit ___ Rutsche arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Saal",
      "translation": {
        "tr": "salon",
        "en": "hall"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Saal.",
        "accusative": "Ich suche ___ Saal.",
        "dative": "Neben ___ Saal liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Saatgut",
      "translation": {
        "tr": "Tohumlar",
        "en": "Seeds"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Saatgut.",
        "accusative": "Ich kaufe ___ Saatgut.",
        "dative": "Mit ___ Saatgut arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Sachverhalt",
      "translation": {
        "tr": "Gerçekler",
        "en": "Facts"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sachverhalt.",
        "accusative": "Ich sehe ___ Sachverhalt.",
        "dative": "Ich gehe mit ___ Sachverhalt."
      }
    },
    {
      "article": "der",
      "word": "Safe",
      "translation": {
        "tr": "Güvenli",
        "en": "Safe"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Safe.",
        "accusative": "Ich suche ___ Safe.",
        "dative": "Neben ___ Safe liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Sagen",
      "translation": {
        "tr": "Söyle",
        "en": "Say"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sagen.",
        "accusative": "Ich nehme ___ Sagen.",
        "dative": "Vor ___ Sagen steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Saison",
      "translation": {
        "tr": "sezon",
        "en": "season"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Saison.",
        "accusative": "Ich besuche ___ Saison.",
        "dative": "Ich danke ___ Saison."
      }
    },
    {
      "article": "der",
      "word": "Salon",
      "translation": {
        "tr": "salon",
        "en": "Salon"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Salon.",
        "accusative": "Ich suche ___ Salon.",
        "dative": "Neben ___ Salon liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Satellit",
      "translation": {
        "tr": "Uydu",
        "en": "Satellite"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Satellit.",
        "accusative": "Ich nehme ___ Satellit.",
        "dative": "Vor ___ Satellit steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Säugling",
      "translation": {
        "tr": "bebek",
        "en": "infant"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Säugling.",
        "accusative": "Ich kaufe ___ Säugling.",
        "dative": "Mit ___ Säugling arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Säule",
      "translation": {
        "tr": "sütun",
        "en": "pillar"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Säule.",
        "accusative": "Ich kaufe ___ Säule.",
        "dative": "Mit ___ Säule arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Säure",
      "translation": {
        "tr": "Asit",
        "en": "Acid"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Säure.",
        "accusative": "Ich sehe ___ Säure.",
        "dative": "Ich gehe mit ___ Säure."
      }
    },
    {
      "article": "der",
      "word": "Schädel",
      "translation": {
        "tr": "kafatası",
        "en": "skull"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schädel.",
        "accusative": "Ich sehe ___ Schädel.",
        "dative": "Ich gehe mit ___ Schädel."
      }
    },
    {
      "article": "der",
      "word": "Schadenersatz",
      "translation": {
        "tr": "Hasarlar",
        "en": "Damages"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schadenersatz.",
        "accusative": "Ich nehme ___ Schadenersatz.",
        "dative": "Vor ___ Schadenersatz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Scham",
      "translation": {
        "tr": "Utanç verici",
        "en": "Shame"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Scham.",
        "accusative": "Ich sehe ___ Scham.",
        "dative": "Ich gehe mit ___ Scham."
      }
    },
    {
      "article": "die",
      "word": "Schande",
      "translation": {
        "tr": "Utanç verici",
        "en": "Shame"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schande.",
        "accusative": "Ich suche ___ Schande.",
        "dative": "Neben ___ Schande liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schätzung",
      "translation": {
        "tr": "Tahmin",
        "en": "Estimate"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schätzung.",
        "accusative": "Ich suche ___ Schätzung.",
        "dative": "Neben ___ Schätzung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schau",
      "translation": {
        "tr": "Bak",
        "en": "Look"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schau.",
        "accusative": "Ich nehme ___ Schau.",
        "dative": "Vor ___ Schau steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schauer",
      "translation": {
        "tr": "Duş",
        "en": "Shower"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schauer.",
        "accusative": "Ich kaufe ___ Schauer.",
        "dative": "Mit ___ Schauer arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Scheidung",
      "translation": {
        "tr": "Boşanma",
        "en": "Divorce"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Scheidung.",
        "accusative": "Ich sehe ___ Scheidung.",
        "dative": "Ich gehe mit ___ Scheidung."
      }
    },
    {
      "article": "das",
      "word": "Schema",
      "translation": {
        "tr": "Şema",
        "en": "Scheme"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schema.",
        "accusative": "Ich suche ___ Schema.",
        "dative": "Neben ___ Schema liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Scherz",
      "translation": {
        "tr": "Şaka",
        "en": "Joke"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Scherz.",
        "accusative": "Ich sehe ___ Scherz.",
        "dative": "Ich gehe mit ___ Scherz."
      }
    },
    {
      "article": "die",
      "word": "Scheu",
      "translation": {
        "tr": "Utangaç",
        "en": "Shy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Scheu.",
        "accusative": "Ich sehe ___ Scheu.",
        "dative": "Ich gehe mit ___ Scheu."
      }
    },
    {
      "article": "die",
      "word": "Schicht",
      "translation": {
        "tr": "katman",
        "en": "layer"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Schicht.",
        "accusative": "Ich treffe ___ Schicht.",
        "dative": "Ich helfe ___ Schicht."
      }
    },
    {
      "article": "das",
      "word": "Schicksal",
      "translation": {
        "tr": "Kader",
        "en": "Fate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schicksal.",
        "accusative": "Ich nehme ___ Schicksal.",
        "dative": "Vor ___ Schicksal steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schiedsrichter",
      "translation": {
        "tr": "Hakem",
        "en": "Referee"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schiedsrichter.",
        "accusative": "Ich suche ___ Schiedsrichter.",
        "dative": "Neben ___ Schiedsrichter liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schilling",
      "translation": {
        "tr": "Şilin",
        "en": "Shilling"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schilling.",
        "accusative": "Ich kaufe ___ Schilling.",
        "dative": "Mit ___ Schilling arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schlacht",
      "translation": {
        "tr": "savaş",
        "en": "battle"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schlacht.",
        "accusative": "Ich sehe ___ Schlacht.",
        "dative": "Ich gehe mit ___ Schlacht."
      }
    },
    {
      "article": "das",
      "word": "Schlachtfeld",
      "translation": {
        "tr": "Savaş Alanı",
        "en": "Battlefield"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Schlachtfeld.",
        "accusative": "Ich suche ___ Schlachtfeld.",
        "dative": "Ich bin in ___ Schlachtfeld."
      }
    },
    {
      "article": "der",
      "word": "Schlag",
      "translation": {
        "tr": "Darbe",
        "en": "Blow"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schlag.",
        "accusative": "Ich suche ___ Schlag.",
        "dative": "Neben ___ Schlag liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schläger",
      "translation": {
        "tr": "Eşkıya",
        "en": "Thug"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schläger.",
        "accusative": "Ich sehe ___ Schläger.",
        "dative": "Ich gehe mit ___ Schläger."
      }
    },
    {
      "article": "die",
      "word": "Schlägerei",
      "translation": {
        "tr": "Kavga",
        "en": "Brawl"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schlägerei.",
        "accusative": "Ich suche ___ Schlägerei.",
        "dative": "Neben ___ Schlägerei liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schlagzeile",
      "translation": {
        "tr": "Başlık",
        "en": "Headline"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schlagzeile.",
        "accusative": "Ich nehme ___ Schlagzeile.",
        "dative": "Vor ___ Schlagzeile steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schleuse",
      "translation": {
        "tr": "kilit",
        "en": "lock"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schleuse.",
        "accusative": "Ich kaufe ___ Schleuse.",
        "dative": "Mit ___ Schleuse arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schließung",
      "translation": {
        "tr": "Kapatma",
        "en": "Closure"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schließung.",
        "accusative": "Ich suche ___ Schließung.",
        "dative": "Neben ___ Schließung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schluss",
      "translation": {
        "tr": "Bitiş",
        "en": "End"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Schluss.",
        "accusative": "Ich plane ___ Schluss.",
        "dative": "Nach ___ Schluss mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Schnittstelle",
      "translation": {
        "tr": "Arayüz",
        "en": "Interface"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schnittstelle.",
        "accusative": "Ich nehme ___ Schnittstelle.",
        "dative": "Vor ___ Schnittstelle steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schock",
      "translation": {
        "tr": "Şok",
        "en": "Shock"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schock.",
        "accusative": "Ich nehme ___ Schock.",
        "dative": "Vor ___ Schock steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schönheit",
      "translation": {
        "tr": "Güzellik",
        "en": "Beauty"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schönheit.",
        "accusative": "Ich suche ___ Schönheit.",
        "dative": "Neben ___ Schönheit liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schöpfer",
      "translation": {
        "tr": "Yaratıcı",
        "en": "Creator"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schöpfer.",
        "accusative": "Ich nehme ___ Schöpfer.",
        "dative": "Vor ___ Schöpfer steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Schreibweise",
      "translation": {
        "tr": "Gösterim",
        "en": "Notation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schreibweise.",
        "accusative": "Ich kaufe ___ Schreibweise.",
        "dative": "Mit ___ Schreibweise arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Schrift",
      "translation": {
        "tr": "yazı tipi",
        "en": "font"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schrift.",
        "accusative": "Ich sehe ___ Schrift.",
        "dative": "Ich gehe mit ___ Schrift."
      }
    },
    {
      "article": "der",
      "word": "Schriftsteller",
      "translation": {
        "tr": "yazar",
        "en": "Writer"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schriftsteller.",
        "accusative": "Ich nehme ___ Schriftsteller.",
        "dative": "Vor ___ Schriftsteller steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schrott",
      "translation": {
        "tr": "Hurda",
        "en": "Scrap"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schrott.",
        "accusative": "Ich suche ___ Schrott.",
        "dative": "Neben ___ Schrott liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schuld",
      "translation": {
        "tr": "suçluluk",
        "en": "guilt"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Schuld.",
        "accusative": "Ich sehe ___ Schuld.",
        "dative": "Ich gehe mit ___ Schuld."
      }
    },
    {
      "article": "die",
      "word": "Schwerkraft",
      "translation": {
        "tr": "Yerçekimi",
        "en": "Gravity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schwerkraft.",
        "accusative": "Ich suche ___ Schwerkraft.",
        "dative": "Neben ___ Schwerkraft liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Schwerpunkt",
      "translation": {
        "tr": "Odaklanma",
        "en": "Focus"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Schwerpunkt.",
        "accusative": "Ich suche ___ Schwerpunkt.",
        "dative": "Neben ___ Schwerpunkt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Schwingung",
      "translation": {
        "tr": "Titreşim",
        "en": "Vibration"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Schwingung.",
        "accusative": "Ich nehme ___ Schwingung.",
        "dative": "Vor ___ Schwingung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Schwung",
      "translation": {
        "tr": "ivme",
        "en": "Momentum"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Schwung.",
        "accusative": "Ich kaufe ___ Schwung.",
        "dative": "Mit ___ Schwung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Seele",
      "translation": {
        "tr": "ruh",
        "en": "soul"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Seele.",
        "accusative": "Ich nehme ___ Seele.",
        "dative": "Vor ___ Seele steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Segen",
      "translation": {
        "tr": "Nimet",
        "en": "Blessing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Segen.",
        "accusative": "Ich kaufe ___ Segen.",
        "dative": "Mit ___ Segen arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Segment",
      "translation": {
        "tr": "bölüm",
        "en": "segment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Segment.",
        "accusative": "Ich suche ___ Segment.",
        "dative": "Neben ___ Segment liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sehnsucht",
      "translation": {
        "tr": "Özlem",
        "en": "Longing"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Sehnsucht.",
        "accusative": "Ich kaufe ___ Sehnsucht.",
        "dative": "Mit ___ Sehnsucht arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Seide",
      "translation": {
        "tr": "İpek",
        "en": "Silk"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Seide.",
        "accusative": "Ich kaufe ___ Seide.",
        "dative": "Mit ___ Seide arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Sein",
      "translation": {
        "tr": "Onun",
        "en": "His"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sein.",
        "accusative": "Ich nehme ___ Sein.",
        "dative": "Vor ___ Sein steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Sektion",
      "translation": {
        "tr": "Bölüm",
        "en": "Section"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sektion.",
        "accusative": "Ich suche ___ Sektion.",
        "dative": "Neben ___ Sektion liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sektor",
      "translation": {
        "tr": "Sektör",
        "en": "Sector"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sektor.",
        "accusative": "Ich suche ___ Sektor.",
        "dative": "Neben ___ Sektor liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Selbstständigkeit",
      "translation": {
        "tr": "Bağımsızlık",
        "en": "Independence"
      },
      "casePrompts": {
        "nominative": "Neben mir liegt ___ Selbstständigkeit.",
        "accusative": "Ich kaufe ___ Selbstständigkeit.",
        "dative": "Ich arbeite mit ___ Selbstständigkeit."
      }
    },
    {
      "article": "der",
      "word": "Senat",
      "translation": {
        "tr": "Senato",
        "en": "Senate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Senat.",
        "accusative": "Ich nehme ___ Senat.",
        "dative": "Vor ___ Senat steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Senator",
      "translation": {
        "tr": "Senatör",
        "en": "Senator"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Senator.",
        "accusative": "Ich sehe ___ Senator.",
        "dative": "Ich gehe mit ___ Senator."
      }
    },
    {
      "article": "die",
      "word": "Senkung",
      "translation": {
        "tr": "İndirme",
        "en": "Lowering"
      },
      "casePrompts": {
        "nominative": "Auf dem Bett liegt ___ Senkung.",
        "accusative": "Ich trage ___ Senkung.",
        "dative": "Neben ___ Senkung liegt ein Schal."
      }
    },
    {
      "article": "die",
      "word": "Sequenz",
      "translation": {
        "tr": "sıra",
        "en": "sequence"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sequenz.",
        "accusative": "Ich sehe ___ Sequenz.",
        "dative": "Ich gehe mit ___ Sequenz."
      }
    },
    {
      "article": "der",
      "word": "Service",
      "translation": {
        "tr": "Hizmet",
        "en": "Service"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Service.",
        "accusative": "Ich suche ___ Service.",
        "dative": "Neben ___ Service liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sexualität",
      "translation": {
        "tr": "Cinsellik",
        "en": "Sexuality"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sexualität.",
        "accusative": "Ich nehme ___ Sexualität.",
        "dative": "Vor ___ Sexualität steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Sicherung",
      "translation": {
        "tr": "Yedekleme",
        "en": "Backup"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sicherung.",
        "accusative": "Ich suche ___ Sicherung.",
        "dative": "Neben ___ Sicherung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sicht",
      "translation": {
        "tr": "görünüm",
        "en": "view"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Sicht.",
        "accusative": "Ich suche ___ Sicht.",
        "dative": "Neben ___ Sicht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Simulation",
      "translation": {
        "tr": "Simülasyon",
        "en": "Simulation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Simulation.",
        "accusative": "Ich suche ___ Simulation.",
        "dative": "Neben ___ Simulation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Single",
      "translation": {
        "tr": "Tek",
        "en": "Single"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Single.",
        "accusative": "Ich suche ___ Single.",
        "dative": "Neben ___ Single liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sir",
      "translation": {
        "tr": "Efendim",
        "en": "Sir"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Sir.",
        "accusative": "Ich plane ___ Sir.",
        "dative": "Nach ___ Sir mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Skala",
      "translation": {
        "tr": "ölçek",
        "en": "scale"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Skala.",
        "accusative": "Ich sehe ___ Skala.",
        "dative": "Ich gehe mit ___ Skala."
      }
    },
    {
      "article": "der",
      "word": "Skandal",
      "translation": {
        "tr": "Skandal",
        "en": "Scandal"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Skandal.",
        "accusative": "Ich sehe ___ Skandal.",
        "dative": "Ich gehe mit ___ Skandal."
      }
    },
    {
      "article": "das",
      "word": "Skelett",
      "translation": {
        "tr": "İskelet",
        "en": "Skeleton"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Skelett.",
        "accusative": "Ich nehme ___ Skelett.",
        "dative": "Vor ___ Skelett steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Skepsis",
      "translation": {
        "tr": "şüphecilik",
        "en": "Skepticism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Skepsis.",
        "accusative": "Ich sehe ___ Skepsis.",
        "dative": "Ich gehe mit ___ Skepsis."
      }
    },
    {
      "article": "die",
      "word": "Sklaverei",
      "translation": {
        "tr": "Kölelik",
        "en": "Slavery"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sklaverei.",
        "accusative": "Ich sehe ___ Sklaverei.",
        "dative": "Ich gehe mit ___ Sklaverei."
      }
    },
    {
      "article": "das",
      "word": "Skript",
      "translation": {
        "tr": "senaryo",
        "en": "script"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Skript.",
        "accusative": "Ich suche ___ Skript.",
        "dative": "Neben ___ Skript liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Skulptur",
      "translation": {
        "tr": "Heykel",
        "en": "Sculpture"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Skulptur.",
        "accusative": "Ich nehme ___ Skulptur.",
        "dative": "Vor ___ Skulptur steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Software",
      "translation": {
        "tr": "Yazılım",
        "en": "Software"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Software.",
        "accusative": "Ich erkläre ___ Software.",
        "dative": "An ___ Software arbeiten wir."
      }
    },
    {
      "article": "die",
      "word": "Solidarität",
      "translation": {
        "tr": "Dayanışma",
        "en": "Solidarity"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Solidarität.",
        "accusative": "Ich nehme ___ Solidarität.",
        "dative": "Vor ___ Solidarität steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Solo",
      "translation": {
        "tr": "Yalnız",
        "en": "Solo"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Solo.",
        "accusative": "Ich suche ___ Solo.",
        "dative": "Neben ___ Solo liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sonde",
      "translation": {
        "tr": "sonda",
        "en": "probe"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Sonde.",
        "accusative": "Ich treffe ___ Sonde.",
        "dative": "Ich helfe ___ Sonde."
      }
    },
    {
      "article": "die",
      "word": "Souveränität",
      "translation": {
        "tr": "Egemenlik",
        "en": "Sovereignty"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Souveränität.",
        "accusative": "Ich suche ___ Souveränität.",
        "dative": "Neben ___ Souveränität liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Sozialarbeiter",
      "translation": {
        "tr": "Sosyal hizmet uzmanı",
        "en": "Social worker"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Sozialarbeiter.",
        "accusative": "Ich treffe ___ Sozialarbeiter.",
        "dative": "Ich helfe ___ Sozialarbeiter."
      }
    },
    {
      "article": "der",
      "word": "Sozialdemokrat",
      "translation": {
        "tr": "Sosyal Demokrat",
        "en": "Social Democrat"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Sozialdemokrat.",
        "accusative": "Ich kaufe ___ Sozialdemokrat.",
        "dative": "Mit ___ Sozialdemokrat arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Soziologie",
      "translation": {
        "tr": "Sosyoloji",
        "en": "Sociology"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Soziologie.",
        "accusative": "Ich suche ___ Soziologie.",
        "dative": "Neben ___ Soziologie liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Spalt",
      "translation": {
        "tr": "boşluk",
        "en": "gap"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spalt.",
        "accusative": "Ich suche ___ Spalt.",
        "dative": "Neben ___ Spalt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Spalte",
      "translation": {
        "tr": "Sütun",
        "en": "Column"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spalte.",
        "accusative": "Ich kaufe ___ Spalte.",
        "dative": "Mit ___ Spalte arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Spaltung",
      "translation": {
        "tr": "Bölüm",
        "en": "Division"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Spaltung.",
        "accusative": "Ich nehme ___ Spaltung.",
        "dative": "Vor ___ Spaltung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Spam",
      "translation": {
        "tr": "Spam",
        "en": "Spam"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spam.",
        "accusative": "Ich suche ___ Spam.",
        "dative": "Neben ___ Spam liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Spannung",
      "translation": {
        "tr": "gerilim",
        "en": "tension"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Spannung.",
        "accusative": "Ich sehe ___ Spannung.",
        "dative": "Ich gehe mit ___ Spannung."
      }
    },
    {
      "article": "die",
      "word": "Spannweite",
      "translation": {
        "tr": "Kanat açıklığı",
        "en": "Wingspan"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spannweite.",
        "accusative": "Ich kaufe ___ Spannweite.",
        "dative": "Mit ___ Spannweite arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Spektakel",
      "translation": {
        "tr": "gösteri",
        "en": "spectacle"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spektakel.",
        "accusative": "Ich suche ___ Spektakel.",
        "dative": "Neben ___ Spektakel liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Spektrum",
      "translation": {
        "tr": "Spektrum",
        "en": "Spectrum"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spektrum.",
        "accusative": "Ich suche ___ Spektrum.",
        "dative": "Neben ___ Spektrum liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Spekulation",
      "translation": {
        "tr": "spekülasyon",
        "en": "speculation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spekulation.",
        "accusative": "Ich suche ___ Spekulation.",
        "dative": "Neben ___ Spekulation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Spezies",
      "translation": {
        "tr": "türler",
        "en": "species"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Spezies.",
        "accusative": "Ich nehme ___ Spezies.",
        "dative": "Vor ___ Spezies steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Spezifikation",
      "translation": {
        "tr": "Şartname",
        "en": "Specification"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Spezifikation.",
        "accusative": "Ich füttere ___ Spezifikation.",
        "dative": "Ich spiele mit ___ Spezifikation."
      }
    },
    {
      "article": "der",
      "word": "Spielraum",
      "translation": {
        "tr": "hareket alanı",
        "en": "leeway"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spielraum.",
        "accusative": "Ich kaufe ___ Spielraum.",
        "dative": "Mit ___ Spielraum arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Spion",
      "translation": {
        "tr": "Casus",
        "en": "Spy"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Spion.",
        "accusative": "Ich kaufe ___ Spion.",
        "dative": "Mit ___ Spion arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Spionage",
      "translation": {
        "tr": "Casusluk",
        "en": "Espionage"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Spionage.",
        "accusative": "Ich nehme ___ Spionage.",
        "dative": "Vor ___ Spionage steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Spott",
      "translation": {
        "tr": "alay",
        "en": "mockery"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Spott.",
        "accusative": "Ich sehe ___ Spott.",
        "dative": "Ich gehe mit ___ Spott."
      }
    },
    {
      "article": "der",
      "word": "Sprengstoff",
      "translation": {
        "tr": "Patlayıcılar",
        "en": "Explosives"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Sprengstoff.",
        "accusative": "Ich kaufe ___ Sprengstoff.",
        "dative": "Mit ___ Sprengstoff arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Spruch",
      "translation": {
        "tr": "söyleyerek",
        "en": "saying"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Spruch.",
        "accusative": "Ich sehe ___ Spruch.",
        "dative": "Ich gehe mit ___ Spruch."
      }
    },
    {
      "article": "der",
      "word": "Spuk",
      "translation": {
        "tr": "Ürkütücü",
        "en": "Spooky"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Spuk.",
        "accusative": "Ich suche ___ Spuk.",
        "dative": "Neben ___ Spuk liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Staatsanwalt",
      "translation": {
        "tr": "Savcı",
        "en": "Prosecutor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Staatsanwalt.",
        "accusative": "Ich nehme ___ Staatsanwalt.",
        "dative": "Vor ___ Staatsanwalt steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Staatsbürgerschaft",
      "translation": {
        "tr": "Vatandaşlık",
        "en": "Citizenship"
      },
      "casePrompts": {
        "nominative": "Vor dem Gebäude steht ___ Staatsbürgerschaft.",
        "accusative": "Ich treffe ___ Staatsbürgerschaft.",
        "dative": "Ich helfe ___ Staatsbürgerschaft."
      }
    },
    {
      "article": "die",
      "word": "Stabilität",
      "translation": {
        "tr": "Kararlılık",
        "en": "Stability"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stabilität.",
        "accusative": "Ich nehme ___ Stabilität.",
        "dative": "Vor ___ Stabilität steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Stadium",
      "translation": {
        "tr": "sahne",
        "en": "stage"
      },
      "casePrompts": {
        "nominative": "In der Nähe ist ___ Stadium.",
        "accusative": "Ich suche ___ Stadium.",
        "dative": "Ich bin in ___ Stadium."
      }
    },
    {
      "article": "der",
      "word": "Stadtrat",
      "translation": {
        "tr": "Kent Konseyi",
        "en": "City Council"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Stadtrat.",
        "accusative": "Ich sehe ___ Stadtrat.",
        "dative": "Ich bleibe in ___ Stadtrat."
      }
    },
    {
      "article": "der",
      "word": "Stamm",
      "translation": {
        "tr": "kabile",
        "en": "tribe"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Stamm.",
        "accusative": "Ich suche ___ Stamm.",
        "dative": "Neben ___ Stamm liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Stand",
      "translation": {
        "tr": "Stand",
        "en": "Stand"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Stand.",
        "accusative": "Ich sehe ___ Stand.",
        "dative": "Ich gehe mit ___ Stand."
      }
    },
    {
      "article": "der",
      "word": "Standard",
      "translation": {
        "tr": "Varsayılan",
        "en": "Default"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Standard.",
        "accusative": "Ich suche ___ Standard.",
        "dative": "Neben ___ Standard liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Standort",
      "translation": {
        "tr": "Konum",
        "en": "Location"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Standort.",
        "accusative": "Ich sehe ___ Standort.",
        "dative": "Ich komme mit ___ Standort."
      }
    },
    {
      "article": "der",
      "word": "Standpunkt",
      "translation": {
        "tr": "bakış açısı",
        "en": "point of view"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Standpunkt.",
        "accusative": "Ich suche ___ Standpunkt.",
        "dative": "Neben ___ Standpunkt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Starre",
      "translation": {
        "tr": "Sert",
        "en": "Rigid"
      },
      "casePrompts": {
        "nominative": "Am Weg liegt ___ Starre.",
        "accusative": "Ich sehe ___ Starre.",
        "dative": "Ich sitze an ___ Starre."
      }
    },
    {
      "article": "die",
      "word": "Statistik",
      "translation": {
        "tr": "İstatistikler",
        "en": "Statistics"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Statistik.",
        "accusative": "Ich nehme ___ Statistik.",
        "dative": "Vor ___ Statistik steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Statue",
      "translation": {
        "tr": "Heykel",
        "en": "Statue"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Statue.",
        "accusative": "Ich suche ___ Statue.",
        "dative": "Neben ___ Statue liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Status",
      "translation": {
        "tr": "durum",
        "en": "status"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Status.",
        "accusative": "Ich suche ___ Status.",
        "dative": "Neben ___ Status liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Steigerung",
      "translation": {
        "tr": "Artış",
        "en": "Increase"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Steigerung.",
        "accusative": "Ich nehme ___ Steigerung.",
        "dative": "Vor ___ Steigerung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Steigung",
      "translation": {
        "tr": "eğim",
        "en": "slope"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Steigung.",
        "accusative": "Ich kaufe ___ Steigung.",
        "dative": "Mit ___ Steigung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Stellung",
      "translation": {
        "tr": "konum",
        "en": "position"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stellung.",
        "accusative": "Ich nehme ___ Stellung.",
        "dative": "Vor ___ Stellung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Stellungnahme",
      "translation": {
        "tr": "Görüş",
        "en": "Opinion"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stellungnahme.",
        "accusative": "Ich nehme ___ Stellungnahme.",
        "dative": "Vor ___ Stellungnahme steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Stellvertreter",
      "translation": {
        "tr": "Yardımcısı",
        "en": "Deputy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Stellvertreter.",
        "accusative": "Ich sehe ___ Stellvertreter.",
        "dative": "Ich gehe mit ___ Stellvertreter."
      }
    },
    {
      "article": "der",
      "word": "Steuerberater",
      "translation": {
        "tr": "Vergi danışmanı",
        "en": "Tax advisor"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Steuerberater.",
        "accusative": "Ich kenne ___ Steuerberater.",
        "dative": "Ich spreche mit ___ Steuerberater."
      }
    },
    {
      "article": "die",
      "word": "Steuerung",
      "translation": {
        "tr": "Kontrol",
        "en": "Control"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Steuerung.",
        "accusative": "Ich nehme ___ Steuerung.",
        "dative": "Vor ___ Steuerung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Steuerzahler",
      "translation": {
        "tr": "Vergi mükellefi",
        "en": "Taxpayer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Steuerzahler.",
        "accusative": "Ich suche ___ Steuerzahler.",
        "dative": "Neben ___ Steuerzahler liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Stich",
      "translation": {
        "tr": "Dikiş",
        "en": "Stitch"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Stich.",
        "accusative": "Ich suche ___ Stich.",
        "dative": "Neben ___ Stich liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Stichprobe",
      "translation": {
        "tr": "Örnek",
        "en": "Sample"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stichprobe.",
        "accusative": "Ich nehme ___ Stichprobe.",
        "dative": "Vor ___ Stichprobe steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Stichwort",
      "translation": {
        "tr": "Anahtar kelime",
        "en": "Keyword"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Stichwort.",
        "accusative": "Ich benutze ___ Stichwort.",
        "dative": "Ich lerne mit ___ Stichwort."
      }
    },
    {
      "article": "der",
      "word": "Stickstoff",
      "translation": {
        "tr": "Azot",
        "en": "Nitrogen"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Stickstoff.",
        "accusative": "Ich suche ___ Stickstoff.",
        "dative": "Neben ___ Stickstoff liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Stiftung",
      "translation": {
        "tr": "Vakıf",
        "en": "Foundation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stiftung.",
        "accusative": "Ich nehme ___ Stiftung.",
        "dative": "Vor ___ Stiftung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Stil",
      "translation": {
        "tr": "stil",
        "en": "style"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Stil.",
        "accusative": "Ich nehme ___ Stil.",
        "dative": "Vor ___ Stil steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Stille",
      "translation": {
        "tr": "Sessizlik",
        "en": "Silence"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Stille.",
        "accusative": "Ich suche ___ Stille.",
        "dative": "Neben ___ Stille liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Stimmzettel",
      "translation": {
        "tr": "oy pusulası",
        "en": "Ballot"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Stimmzettel.",
        "accusative": "Ich sehe ___ Stimmzettel.",
        "dative": "Ich gehe mit ___ Stimmzettel."
      }
    },
    {
      "article": "das",
      "word": "Stipendium",
      "translation": {
        "tr": "Burs",
        "en": "Scholarship"
      },
      "casePrompts": {
        "nominative": "Auf der Straße fährt ___ Stipendium.",
        "accusative": "Ich nehme ___ Stipendium.",
        "dative": "Ich reise mit ___ Stipendium."
      }
    },
    {
      "article": "der",
      "word": "Stoffwechsel",
      "translation": {
        "tr": "Metabolizma",
        "en": "Metabolism"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Stoffwechsel.",
        "accusative": "Ich suche ___ Stoffwechsel.",
        "dative": "Neben ___ Stoffwechsel liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Stolz",
      "translation": {
        "tr": "Gurur",
        "en": "Pride"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Stolz.",
        "accusative": "Ich sehe ___ Stolz.",
        "dative": "Ich gehe mit ___ Stolz."
      }
    },
    {
      "article": "die",
      "word": "Störung",
      "translation": {
        "tr": "Rahatsızlık",
        "en": "Disturbance"
      },
      "casePrompts": {
        "nominative": "Im Laden ist ___ Störung.",
        "accusative": "Ich kaufe ___ Störung.",
        "dative": "Zu ___ Störung passt die Tasche."
      }
    },
    {
      "article": "die",
      "word": "Straftat",
      "translation": {
        "tr": "suç",
        "en": "crime"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Straftat.",
        "accusative": "Ich kaufe ___ Straftat.",
        "dative": "Mit ___ Straftat arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Straftäter",
      "translation": {
        "tr": "suçlular",
        "en": "criminals"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Straftäter.",
        "accusative": "Ich kaufe ___ Straftäter.",
        "dative": "Mit ___ Straftäter arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Strafverfolgung",
      "translation": {
        "tr": "Kanun yaptırımı",
        "en": "Law enforcement"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Strafverfolgung.",
        "accusative": "Ich kaufe ___ Strafverfolgung.",
        "dative": "Mit ___ Strafverfolgung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Strahlung",
      "translation": {
        "tr": "Radyasyon",
        "en": "Radiation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Strahlung.",
        "accusative": "Ich kaufe ___ Strahlung.",
        "dative": "Mit ___ Strahlung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Strategie",
      "translation": {
        "tr": "Strateji",
        "en": "Strategy"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Strategie zentral.",
        "accusative": "Wir besprechen ___ Strategie.",
        "dative": "Mit ___ Strategie wird alles leichter."
      }
    },
    {
      "article": "der",
      "word": "Strauß",
      "translation": {
        "tr": "Devekuşu",
        "en": "Ostrich"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Strauß.",
        "accusative": "Ich suche ___ Strauß.",
        "dative": "Neben ___ Strauß liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Streben",
      "translation": {
        "tr": "Çabala",
        "en": "Strive"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Streben.",
        "accusative": "Ich suche ___ Streben.",
        "dative": "Neben ___ Streben liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Strömung",
      "translation": {
        "tr": "Akış",
        "en": "Flow"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Strömung.",
        "accusative": "Ich suche ___ Strömung.",
        "dative": "Neben ___ Strömung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Struktur",
      "translation": {
        "tr": "Yapı",
        "en": "Structure"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Struktur wichtig.",
        "accusative": "Wir verstehen ___ Struktur.",
        "dative": "Bei ___ Struktur brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Studie",
      "translation": {
        "tr": "çalışma",
        "en": "Study"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Studie.",
        "accusative": "Ich nehme ___ Studie.",
        "dative": "Vor ___ Studie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Studiengang",
      "translation": {
        "tr": "Çalışma kursu",
        "en": "Course of study"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Studiengang.",
        "accusative": "Ich erwarte ___ Studiengang.",
        "dative": "Vor ___ Studiengang bin ich nervös."
      }
    },
    {
      "article": "das",
      "word": "Studium",
      "translation": {
        "tr": "çalışma",
        "en": "Study"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Studium.",
        "accusative": "Ich suche ___ Studium.",
        "dative": "Neben ___ Studium liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Stürmer",
      "translation": {
        "tr": "Forvet",
        "en": "Striker"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stürmer.",
        "accusative": "Ich kaufe ___ Stürmer.",
        "dative": "Mit ___ Stürmer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Sturz",
      "translation": {
        "tr": "Güz",
        "en": "Fall"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sturz.",
        "accusative": "Ich nehme ___ Sturz.",
        "dative": "Vor ___ Sturz steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Stütze",
      "translation": {
        "tr": "Destek",
        "en": "Support"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Stütze.",
        "accusative": "Ich kaufe ___ Stütze.",
        "dative": "Mit ___ Stütze arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Substanz",
      "translation": {
        "tr": "madde",
        "en": "substance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Substanz.",
        "accusative": "Ich sehe ___ Substanz.",
        "dative": "Ich gehe mit ___ Substanz."
      }
    },
    {
      "article": "das",
      "word": "Substrat",
      "translation": {
        "tr": "Yüzey",
        "en": "Substrate"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Substrat.",
        "accusative": "Ich nehme ___ Substrat.",
        "dative": "Vor ___ Substrat steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Subvention",
      "translation": {
        "tr": "Sübvansiyon",
        "en": "Subsidy"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Subvention.",
        "accusative": "Ich suche ___ Subvention.",
        "dative": "Neben ___ Subvention liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Sucht",
      "translation": {
        "tr": "Bağımlılık",
        "en": "Addiction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Sucht.",
        "accusative": "Ich sehe ___ Sucht.",
        "dative": "Ich gehe mit ___ Sucht."
      }
    },
    {
      "article": "die",
      "word": "Suite",
      "translation": {
        "tr": "süit",
        "en": "suite"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Suite.",
        "accusative": "Ich sehe ___ Suite.",
        "dative": "Ich gehe mit ___ Suite."
      }
    },
    {
      "article": "der",
      "word": "Sumpf",
      "translation": {
        "tr": "bataklık",
        "en": "swamp"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Sumpf.",
        "accusative": "Ich nehme ___ Sumpf.",
        "dative": "Vor ___ Sumpf steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Synthese",
      "translation": {
        "tr": "Sentez",
        "en": "Synthesis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Synthese.",
        "accusative": "Ich kaufe ___ Synthese.",
        "dative": "Mit ___ Synthese arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Szenario",
      "translation": {
        "tr": "Senaryo",
        "en": "Scenario"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Szenario.",
        "accusative": "Ich kaufe ___ Szenario.",
        "dative": "Mit ___ Szenario arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Tadel",
      "translation": {
        "tr": "Suçlama",
        "en": "Blame"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Tadel.",
        "accusative": "Ich nehme ___ Tadel.",
        "dative": "Vor ___ Tadel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Tagesmutter",
      "translation": {
        "tr": "çocuk bakıcısı",
        "en": "childminder"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Tagesmutter.",
        "accusative": "Ich kenne ___ Tagesmutter.",
        "dative": "Ich spreche mit ___ Tagesmutter."
      }
    },
    {
      "article": "die",
      "word": "Tagesordnung",
      "translation": {
        "tr": "Gündem",
        "en": "Agenda"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Tagesordnung.",
        "accusative": "Ich starte ___ Tagesordnung.",
        "dative": "Bei ___ Tagesordnung lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Taktik",
      "translation": {
        "tr": "Taktikler",
        "en": "Tactics"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Taktik.",
        "accusative": "Ich kaufe ___ Taktik.",
        "dative": "Mit ___ Taktik arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Tarif",
      "translation": {
        "tr": "Tarife",
        "en": "Tariff"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tarif.",
        "accusative": "Ich sehe ___ Tarif.",
        "dative": "Ich gehe mit ___ Tarif."
      }
    },
    {
      "article": "die",
      "word": "Tätigkeit",
      "translation": {
        "tr": "aktivite",
        "en": "activity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tätigkeit.",
        "accusative": "Ich suche ___ Tätigkeit.",
        "dative": "Neben ___ Tätigkeit liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tatort",
      "translation": {
        "tr": "Suç mahalli",
        "en": "Crime scene"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tatort.",
        "accusative": "Ich sehe ___ Tatort.",
        "dative": "Ich gehe mit ___ Tatort."
      }
    },
    {
      "article": "die",
      "word": "Technologie",
      "translation": {
        "tr": "Teknoloji",
        "en": "Technology"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Technologie.",
        "accusative": "Ich nehme ___ Technologie.",
        "dative": "Vor ___ Technologie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Teilung",
      "translation": {
        "tr": "bölme",
        "en": "division"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Teilung.",
        "accusative": "Ich nehme ___ Teilung.",
        "dative": "Vor ___ Teilung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Tendenz",
      "translation": {
        "tr": "eğilim",
        "en": "tendency"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Tendenz.",
        "accusative": "Ich erwarte ___ Tendenz.",
        "dative": "Vor ___ Tendenz bin ich nervös."
      }
    },
    {
      "article": "der",
      "word": "Tenor",
      "translation": {
        "tr": "Tenor",
        "en": "Tenor"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tenor.",
        "accusative": "Ich sehe ___ Tenor.",
        "dative": "Ich gehe mit ___ Tenor."
      }
    },
    {
      "article": "das",
      "word": "Territorium",
      "translation": {
        "tr": "bölge",
        "en": "territory"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Territorium.",
        "accusative": "Ich sehe ___ Territorium.",
        "dative": "Ich gehe mit ___ Territorium."
      }
    },
    {
      "article": "der",
      "word": "Terror",
      "translation": {
        "tr": "Terör",
        "en": "Terror"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Terror.",
        "accusative": "Ich suche ___ Terror.",
        "dative": "Neben ___ Terror liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Testament",
      "translation": {
        "tr": "irade",
        "en": "Will"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Testament.",
        "accusative": "Ich kaufe ___ Testament.",
        "dative": "Mit ___ Testament arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Theorie",
      "translation": {
        "tr": "Teori",
        "en": "Theory"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Theorie zentral.",
        "accusative": "Wir besprechen ___ Theorie.",
        "dative": "Mit ___ Theorie wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Therapie",
      "translation": {
        "tr": "Terapi",
        "en": "Therapy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Therapie.",
        "accusative": "Ich nehme ___ Therapie.",
        "dative": "Vor ___ Therapie steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "These",
      "translation": {
        "tr": "Tez",
        "en": "Thesis"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ These.",
        "accusative": "Ich kaufe ___ These.",
        "dative": "Mit ___ These arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Thriller",
      "translation": {
        "tr": "Gerilim",
        "en": "Thriller"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Thriller.",
        "accusative": "Ich suche ___ Thriller.",
        "dative": "Neben ___ Thriller liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Thron",
      "translation": {
        "tr": "taht",
        "en": "throne"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Thron.",
        "accusative": "Ich nehme ___ Thron.",
        "dative": "Vor ___ Thron steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Tierwelt",
      "translation": {
        "tr": "yaban hayatı",
        "en": "wildlife"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tierwelt.",
        "accusative": "Ich sehe ___ Tierwelt.",
        "dative": "Ich gehe mit ___ Tierwelt."
      }
    },
    {
      "article": "das",
      "word": "Timing",
      "translation": {
        "tr": "Zamanlama",
        "en": "Timing"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Timing.",
        "accusative": "Ich besuche ___ Timing.",
        "dative": "Ich danke ___ Timing."
      }
    },
    {
      "article": "die",
      "word": "Toleranz",
      "translation": {
        "tr": "Hoşgörü",
        "en": "Tolerance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Toleranz.",
        "accusative": "Ich sehe ___ Toleranz.",
        "dative": "Ich gehe mit ___ Toleranz."
      }
    },
    {
      "article": "der",
      "word": "Tonfall",
      "translation": {
        "tr": "Ses tonu",
        "en": "Tone of voice"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Tonfall.",
        "accusative": "Ich nehme ___ Tonfall.",
        "dative": "Vor ___ Tonfall steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Top",
      "translation": {
        "tr": "Harika",
        "en": "Great"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Top.",
        "accusative": "Ich suche ___ Top.",
        "dative": "Neben ___ Top liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tornado",
      "translation": {
        "tr": "Kasırga",
        "en": "Tornado"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tornado.",
        "accusative": "Ich suche ___ Tornado.",
        "dative": "Neben ___ Tornado liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Torwart",
      "translation": {
        "tr": "Kaleci",
        "en": "Goalkeeper"
      },
      "casePrompts": {
        "nominative": "Im Gespräch zählt ___ Torwart.",
        "accusative": "Ich brauche ___ Torwart.",
        "dative": "Ich beschäftige mich mit ___ Torwart."
      }
    },
    {
      "article": "der",
      "word": "Tote",
      "translation": {
        "tr": "ölü",
        "en": "dead"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tote.",
        "accusative": "Ich suche ___ Tote.",
        "dative": "Neben ___ Tote liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tourismus",
      "translation": {
        "tr": "Turizm",
        "en": "Tourism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tourismus.",
        "accusative": "Ich sehe ___ Tourismus.",
        "dative": "Ich gehe mit ___ Tourismus."
      }
    },
    {
      "article": "der",
      "word": "Träger",
      "translation": {
        "tr": "Taşıyıcı",
        "en": "Carrier"
      },
      "casePrompts": {
        "nominative": "Dort steht ___ Träger.",
        "accusative": "Ich parke ___ Träger.",
        "dative": "Ich komme mit ___ Träger."
      }
    },
    {
      "article": "die",
      "word": "Trägheit",
      "translation": {
        "tr": "eylemsizlik",
        "en": "inertia"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Trägheit.",
        "accusative": "Ich kaufe ___ Trägheit.",
        "dative": "Mit ___ Trägheit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Tragödie",
      "translation": {
        "tr": "Trajedi",
        "en": "Tragedy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tragödie.",
        "accusative": "Ich sehe ___ Tragödie.",
        "dative": "Ich gehe mit ___ Tragödie."
      }
    },
    {
      "article": "die",
      "word": "Transaktion",
      "translation": {
        "tr": "işlem",
        "en": "transaction"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Transaktion.",
        "accusative": "Ich sehe ___ Transaktion.",
        "dative": "Ich gehe mit ___ Transaktion."
      }
    },
    {
      "article": "der",
      "word": "Transfer",
      "translation": {
        "tr": "aktarma",
        "en": "transfer"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Transfer.",
        "accusative": "Ich suche ___ Transfer.",
        "dative": "Neben ___ Transfer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Transformation",
      "translation": {
        "tr": "Dönüşüm",
        "en": "Transformation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Transformation.",
        "accusative": "Ich suche ___ Transformation.",
        "dative": "Neben ___ Transformation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Transparenz",
      "translation": {
        "tr": "Şeffaflık",
        "en": "Transparency"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Transparenz.",
        "accusative": "Ich suche ___ Transparenz.",
        "dative": "Neben ___ Transparenz liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Trauer",
      "translation": {
        "tr": "Yas",
        "en": "Mourning"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Trauer.",
        "accusative": "Ich suche ___ Trauer.",
        "dative": "Neben ___ Trauer liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Trauma",
      "translation": {
        "tr": "travma",
        "en": "trauma"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Trauma.",
        "accusative": "Ich suche ___ Trauma.",
        "dative": "Neben ___ Trauma liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Trauung",
      "translation": {
        "tr": "Düğün töreni",
        "en": "Wedding ceremony"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Trauung.",
        "accusative": "Ich sehe ___ Trauung.",
        "dative": "Ich gehe mit ___ Trauung."
      }
    },
    {
      "article": "der",
      "word": "Treffer",
      "translation": {
        "tr": "Vur",
        "en": "Hit"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Treffer.",
        "accusative": "Ich kaufe ___ Treffer.",
        "dative": "Mit ___ Treffer arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Treibstoff",
      "translation": {
        "tr": "Yakıt",
        "en": "Fuel"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Treibstoff.",
        "accusative": "Ich suche ___ Treibstoff.",
        "dative": "Neben ___ Treibstoff liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tresor",
      "translation": {
        "tr": "Güvenli",
        "en": "Safe"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Tresor.",
        "accusative": "Ich sehe ___ Tresor.",
        "dative": "Ich gehe mit ___ Tresor."
      }
    },
    {
      "article": "das",
      "word": "Tribunal",
      "translation": {
        "tr": "Mahkeme",
        "en": "Tribunal"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Tribunal.",
        "accusative": "Ich suche ___ Tribunal.",
        "dative": "Neben ___ Tribunal liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Tribut",
      "translation": {
        "tr": "haraç",
        "en": "Tribute"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Tribut.",
        "accusative": "Ich nehme ___ Tribut.",
        "dative": "Vor ___ Tribut steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Trilogie",
      "translation": {
        "tr": "üçleme",
        "en": "trilogy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Trilogie.",
        "accusative": "Ich nehme ___ Trilogie.",
        "dative": "Vor ___ Trilogie steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Triumph",
      "translation": {
        "tr": "Zafer",
        "en": "Triumph"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Triumph.",
        "accusative": "Ich suche ___ Triumph.",
        "dative": "Neben ___ Triumph liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Trost",
      "translation": {
        "tr": "teselli",
        "en": "Consolation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Trost.",
        "accusative": "Ich nehme ___ Trost.",
        "dative": "Vor ___ Trost steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Tugend",
      "translation": {
        "tr": "Fazilet",
        "en": "Virtue"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Tugend.",
        "accusative": "Ich erwarte ___ Tugend.",
        "dative": "Vor ___ Tugend bin ich nervös."
      }
    },
    {
      "article": "das",
      "word": "Übel",
      "translation": {
        "tr": "Kötülük",
        "en": "Evil"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Übel.",
        "accusative": "Ich nehme ___ Übel.",
        "dative": "Vor ___ Übel steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Übelkeit",
      "translation": {
        "tr": "Bulantı",
        "en": "Nausea"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Übelkeit.",
        "accusative": "Ich sehe ___ Übelkeit.",
        "dative": "Ich bleibe in ___ Übelkeit."
      }
    },
    {
      "article": "der",
      "word": "Überblick",
      "translation": {
        "tr": "Genel Bakış",
        "en": "Overview"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Überblick.",
        "accusative": "Ich kaufe ___ Überblick.",
        "dative": "Mit ___ Überblick arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Übereinstimmung",
      "translation": {
        "tr": "Maç",
        "en": "Match"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Übereinstimmung.",
        "accusative": "Ich suche ___ Übereinstimmung.",
        "dative": "Neben ___ Übereinstimmung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Überfall",
      "translation": {
        "tr": "baskın",
        "en": "raid"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Überfall.",
        "accusative": "Ich suche ___ Überfall.",
        "dative": "Neben ___ Überfall liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Übergabe",
      "translation": {
        "tr": "Devir teslim",
        "en": "Handover"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Übergabe.",
        "accusative": "Ich nehme ___ Übergabe.",
        "dative": "Vor ___ Übergabe steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Überlebende",
      "translation": {
        "tr": "Hayatta kalanlar",
        "en": "Survivors"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Überlebende.",
        "accusative": "Ich starte ___ Überlebende.",
        "dative": "Bei ___ Überlebende lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Übernahme",
      "translation": {
        "tr": "Devralma",
        "en": "Takeover"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Übernahme.",
        "accusative": "Ich kaufe ___ Übernahme.",
        "dative": "Mit ___ Übernahme arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Überschuss",
      "translation": {
        "tr": "fazlalık",
        "en": "surplus"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Überschuss.",
        "accusative": "Ich suche ___ Überschuss.",
        "dative": "Neben ___ Überschuss liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Übertragung",
      "translation": {
        "tr": "İletim",
        "en": "Transmission"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Übertragung.",
        "accusative": "Ich kaufe ___ Übertragung.",
        "dative": "Mit ___ Übertragung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Überwachung",
      "translation": {
        "tr": "İzleme",
        "en": "Monitoring"
      },
      "casePrompts": {
        "nominative": "Im Schrank hängt ___ Überwachung.",
        "accusative": "Ich suche ___ Überwachung.",
        "dative": "Ich gehe mit ___ Überwachung raus."
      }
    },
    {
      "article": "die",
      "word": "Überzeugung",
      "translation": {
        "tr": "Mahkumiyet",
        "en": "Conviction"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Überzeugung.",
        "accusative": "Ich suche ___ Überzeugung.",
        "dative": "Neben ___ Überzeugung liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Ultimatum",
      "translation": {
        "tr": "Ültimatom",
        "en": "Ultimatum"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ultimatum.",
        "accusative": "Ich sehe ___ Ultimatum.",
        "dative": "Ich gehe mit ___ Ultimatum."
      }
    },
    {
      "article": "der",
      "word": "Umfang",
      "translation": {
        "tr": "Kapsam",
        "en": "Scope"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Umfang.",
        "accusative": "Ich sehe ___ Umfang.",
        "dative": "Ich gehe mit ___ Umfang."
      }
    },
    {
      "article": "das",
      "word": "Umfeld",
      "translation": {
        "tr": "Çevre",
        "en": "Environment"
      },
      "casePrompts": {
        "nominative": "Dort ist ___ Umfeld.",
        "accusative": "Ich fotografiere ___ Umfeld.",
        "dative": "Wir treffen uns bei ___ Umfeld."
      }
    },
    {
      "article": "der",
      "word": "Umgang",
      "translation": {
        "tr": "elleçleme",
        "en": "handling"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Umgang.",
        "accusative": "Ich sehe ___ Umgang.",
        "dative": "Ich gehe mit ___ Umgang."
      }
    },
    {
      "article": "der",
      "word": "Umsatz",
      "translation": {
        "tr": "Satış",
        "en": "Sales"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Umsatz.",
        "accusative": "Ich sehe ___ Umsatz.",
        "dative": "Ich gehe mit ___ Umsatz."
      }
    },
    {
      "article": "die",
      "word": "Umsetzung",
      "translation": {
        "tr": "Uygulama",
        "en": "Implementation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Umsetzung.",
        "accusative": "Ich suche ___ Umsetzung.",
        "dative": "Neben ___ Umsetzung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Umstand",
      "translation": {
        "tr": "durum",
        "en": "circumstance"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Umstand.",
        "accusative": "Ich kaufe ___ Umstand.",
        "dative": "Mit ___ Umstand arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Umwandlung",
      "translation": {
        "tr": "Dönüşüm",
        "en": "Conversion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Umwandlung.",
        "accusative": "Ich suche ___ Umwandlung.",
        "dative": "Neben ___ Umwandlung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Unabhängigkeit",
      "translation": {
        "tr": "Bağımsızlık",
        "en": "Independence"
      },
      "casePrompts": {
        "nominative": "Im Büro steht ___ Unabhängigkeit.",
        "accusative": "Ich benutze ___ Unabhängigkeit.",
        "dative": "Ich lerne mit ___ Unabhängigkeit."
      }
    },
    {
      "article": "das",
      "word": "Ungeheuer",
      "translation": {
        "tr": "canavar",
        "en": "monster"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Ungeheuer.",
        "accusative": "Ich sehe ___ Ungeheuer.",
        "dative": "Ich gehe mit ___ Ungeheuer."
      }
    },
    {
      "article": "das",
      "word": "Unglück",
      "translation": {
        "tr": "Talihsizlik",
        "en": "Misfortune"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Unglück.",
        "accusative": "Ich suche ___ Unglück.",
        "dative": "Neben ___ Unglück liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Union",
      "translation": {
        "tr": "Birlik",
        "en": "Union"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Union.",
        "accusative": "Ich suche ___ Union.",
        "dative": "Neben ___ Union liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Universität",
      "translation": {
        "tr": "Üniversite",
        "en": "University"
      },
      "casePrompts": {
        "nominative": "In der Stadt ist ___ Universität.",
        "accusative": "Ich sehe ___ Universität.",
        "dative": "Ich bleibe in ___ Universität."
      }
    },
    {
      "article": "der",
      "word": "Unmut",
      "translation": {
        "tr": "hoşnutsuzluk",
        "en": "displeasure"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Unmut.",
        "accusative": "Ich suche ___ Unmut.",
        "dative": "Neben ___ Unmut liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Unordnung",
      "translation": {
        "tr": "Dağınıklık",
        "en": "Clutter"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unordnung.",
        "accusative": "Ich nehme ___ Unordnung.",
        "dative": "Vor ___ Unordnung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Unrecht",
      "translation": {
        "tr": "Adaletsizlik",
        "en": "Injustice"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unrecht.",
        "accusative": "Ich nehme ___ Unrecht.",
        "dative": "Vor ___ Unrecht steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Unruhe",
      "translation": {
        "tr": "huzursuzluk",
        "en": "restlessness"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unruhe.",
        "accusative": "Ich nehme ___ Unruhe.",
        "dative": "Vor ___ Unruhe steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Unsicherheit",
      "translation": {
        "tr": "Belirsizlik",
        "en": "Uncertainty"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Unsicherheit.",
        "accusative": "Ich kaufe ___ Unsicherheit.",
        "dative": "Mit ___ Unsicherheit arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Unsinn",
      "translation": {
        "tr": "saçmalık",
        "en": "Nonsense"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Unsinn.",
        "accusative": "Ich sehe ___ Unsinn.",
        "dative": "Ich gehe mit ___ Unsinn."
      }
    },
    {
      "article": "die",
      "word": "Unterschrift",
      "translation": {
        "tr": "İmza",
        "en": "Signature"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unterschrift.",
        "accusative": "Ich nehme ___ Unterschrift.",
        "dative": "Vor ___ Unterschrift steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Unterstützer",
      "translation": {
        "tr": "Destekçi",
        "en": "Supporter"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Unterstützer.",
        "accusative": "Ich suche ___ Unterstützer.",
        "dative": "Neben ___ Unterstützer liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Unterstützung",
      "translation": {
        "tr": "Destek",
        "en": "Support"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Unterstützung.",
        "accusative": "Ich sehe ___ Unterstützung.",
        "dative": "Ich gehe mit ___ Unterstützung."
      }
    },
    {
      "article": "die",
      "word": "Untersuchung",
      "translation": {
        "tr": "Soruşturma",
        "en": "Investigation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Untersuchung.",
        "accusative": "Ich nehme ___ Untersuchung.",
        "dative": "Vor ___ Untersuchung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Unterwäsche",
      "translation": {
        "tr": "İç çamaşırı",
        "en": "Underwear"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unterwäsche.",
        "accusative": "Ich nehme ___ Unterwäsche.",
        "dative": "Vor ___ Unterwäsche steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Unwetter",
      "translation": {
        "tr": "Fırtına",
        "en": "Storm"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Unwetter.",
        "accusative": "Ich nehme ___ Unwetter.",
        "dative": "Vor ___ Unwetter steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Unwissenheit",
      "translation": {
        "tr": "Cehalet",
        "en": "Ignorance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Unwissenheit.",
        "accusative": "Ich suche ___ Unwissenheit.",
        "dative": "Neben ___ Unwissenheit liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Uran",
      "translation": {
        "tr": "Uranyum",
        "en": "Uranium"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Uran.",
        "accusative": "Ich nehme ___ Uran.",
        "dative": "Vor ___ Uran steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Urheberrecht",
      "translation": {
        "tr": "Telif hakkı",
        "en": "Copyright"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Urheberrecht.",
        "accusative": "Ich suche ___ Urheberrecht.",
        "dative": "Neben ___ Urheberrecht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Urkunde",
      "translation": {
        "tr": "Sertifika",
        "en": "Certificate"
      },
      "casePrompts": {
        "nominative": "Im Zoo ist ___ Urkunde.",
        "accusative": "Ich füttere ___ Urkunde.",
        "dative": "Ich spiele mit ___ Urkunde."
      }
    },
    {
      "article": "der",
      "word": "Ursprung",
      "translation": {
        "tr": "Menşei",
        "en": "Origin"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Ursprung.",
        "accusative": "Ich suche ___ Ursprung.",
        "dative": "Neben ___ Ursprung liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Urteil",
      "translation": {
        "tr": "Yargı",
        "en": "Judgment"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Urteil.",
        "accusative": "Ich nehme ___ Urteil.",
        "dative": "Vor ___ Urteil steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Utopie",
      "translation": {
        "tr": "Ütopya",
        "en": "Utopia"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Utopie.",
        "accusative": "Ich suche ___ Utopie.",
        "dative": "Neben ___ Utopie liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Vandalismus",
      "translation": {
        "tr": "Vandalizm",
        "en": "Vandalism"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vandalismus.",
        "accusative": "Ich sehe ___ Vandalismus.",
        "dative": "Ich gehe mit ___ Vandalismus."
      }
    },
    {
      "article": "die",
      "word": "Variable",
      "translation": {
        "tr": "değişken",
        "en": "variable"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Variable.",
        "accusative": "Ich suche ___ Variable.",
        "dative": "Neben ___ Variable liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Variante",
      "translation": {
        "tr": "Varyant",
        "en": "Variant"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Variante.",
        "accusative": "Ich nehme ___ Variante.",
        "dative": "Vor ___ Variante steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Variation",
      "translation": {
        "tr": "Varyasyon",
        "en": "Variation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Variation.",
        "accusative": "Ich suche ___ Variation.",
        "dative": "Neben ___ Variation liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Verachtung",
      "translation": {
        "tr": "küçümseme",
        "en": "Contempt"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verachtung.",
        "accusative": "Ich kaufe ___ Verachtung.",
        "dative": "Mit ___ Verachtung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Veränderung",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Veränderung.",
        "accusative": "Ich sehe ___ Veränderung.",
        "dative": "Ich gehe mit ___ Veränderung."
      }
    },
    {
      "article": "der",
      "word": "Veranstalter",
      "translation": {
        "tr": "Organizatör",
        "en": "Organizer"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Veranstalter.",
        "accusative": "Ich sehe ___ Veranstalter.",
        "dative": "Ich gehe mit ___ Veranstalter."
      }
    },
    {
      "article": "die",
      "word": "Verarbeitung",
      "translation": {
        "tr": "İşleme",
        "en": "Processing"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verarbeitung.",
        "accusative": "Ich nehme ___ Verarbeitung.",
        "dative": "Vor ___ Verarbeitung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Verband",
      "translation": {
        "tr": "Dernek",
        "en": "Association"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verband.",
        "accusative": "Ich nehme ___ Verband.",
        "dative": "Vor ___ Verband steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verbesserung",
      "translation": {
        "tr": "İyileştirme",
        "en": "Improvement"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verbesserung.",
        "accusative": "Ich nehme ___ Verbesserung.",
        "dative": "Vor ___ Verbesserung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verbindlichkeit",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verbindlichkeit.",
        "accusative": "Ich sehe ___ Verbindlichkeit.",
        "dative": "Ich gehe mit ___ Verbindlichkeit."
      }
    },
    {
      "article": "das",
      "word": "Verbrechen",
      "translation": {
        "tr": "Suç",
        "en": "Crime"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verbrechen.",
        "accusative": "Ich suche ___ Verbrechen.",
        "dative": "Neben ___ Verbrechen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Verbreitung",
      "translation": {
        "tr": "Yayılma",
        "en": "Spread"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verbreitung.",
        "accusative": "Ich sehe ___ Verbreitung.",
        "dative": "Ich gehe mit ___ Verbreitung."
      }
    },
    {
      "article": "der",
      "word": "Verbündete",
      "translation": {
        "tr": "Müttefikler",
        "en": "Allies"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verbündete.",
        "accusative": "Ich nehme ___ Verbündete.",
        "dative": "Vor ___ Verbündete steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Verdacht",
      "translation": {
        "tr": "şüphe",
        "en": "Suspicion"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verdacht.",
        "accusative": "Ich suche ___ Verdacht.",
        "dative": "Neben ___ Verdacht liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Verdächtige",
      "translation": {
        "tr": "Şüpheliler",
        "en": "Suspects"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verdächtige.",
        "accusative": "Ich kaufe ___ Verdächtige.",
        "dative": "Mit ___ Verdächtige arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Vereinbarung",
      "translation": {
        "tr": "anlaşma",
        "en": "agreement"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vereinbarung.",
        "accusative": "Ich sehe ___ Vereinbarung.",
        "dative": "Ich gehe mit ___ Vereinbarung."
      }
    },
    {
      "article": "die",
      "word": "Vereinigung",
      "translation": {
        "tr": "Dernek",
        "en": "Association"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vereinigung.",
        "accusative": "Ich suche ___ Vereinigung.",
        "dative": "Neben ___ Vereinigung liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Verfahren",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verfahren.",
        "accusative": "Ich sehe ___ Verfahren.",
        "dative": "Ich gehe mit ___ Verfahren."
      }
    },
    {
      "article": "die",
      "word": "Verfassung",
      "translation": {
        "tr": "Anayasa",
        "en": "Constitution"
      },
      "casePrompts": {
        "nominative": "In der Natur gibt es ___ Verfassung.",
        "accusative": "Ich entdecke ___ Verfassung.",
        "dative": "Ich gehe zu ___ Verfassung."
      }
    },
    {
      "article": "die",
      "word": "Verfolgung",
      "translation": {
        "tr": "Zulüm",
        "en": "Persecution"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verfolgung.",
        "accusative": "Ich sehe ___ Verfolgung.",
        "dative": "Ich gehe mit ___ Verfolgung."
      }
    },
    {
      "article": "die",
      "word": "Verfügbarkeit",
      "translation": {
        "tr": "Kullanılabilirlik",
        "en": "Availability"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verfügbarkeit.",
        "accusative": "Ich kaufe ___ Verfügbarkeit.",
        "dative": "Mit ___ Verfügbarkeit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Verfügung",
      "translation": {
        "tr": "mevcut",
        "en": "available"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verfügung.",
        "accusative": "Ich nehme ___ Verfügung.",
        "dative": "Vor ___ Verfügung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Vergangenheit",
      "translation": {
        "tr": "geçmiş",
        "en": "past"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vergangenheit.",
        "accusative": "Ich nehme ___ Vergangenheit.",
        "dative": "Vor ___ Vergangenheit steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Vergleich",
      "translation": {
        "tr": "Karşılaştırma",
        "en": "Comparison"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vergleich.",
        "accusative": "Ich besuche ___ Vergleich.",
        "dative": "Ich danke ___ Vergleich."
      }
    },
    {
      "article": "das",
      "word": "Verhältnis",
      "translation": {
        "tr": "oran",
        "en": "ratio"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verhältnis.",
        "accusative": "Ich sehe ___ Verhältnis.",
        "dative": "Ich gehe mit ___ Verhältnis."
      }
    },
    {
      "article": "die",
      "word": "Verhandlung",
      "translation": {
        "tr": "müzakere",
        "en": "Negotiation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verhandlung.",
        "accusative": "Ich nehme ___ Verhandlung.",
        "dative": "Vor ___ Verhandlung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Verhör",
      "translation": {
        "tr": "Sorgulama",
        "en": "Interrogation"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verhör.",
        "accusative": "Ich sehe ___ Verhör.",
        "dative": "Ich gehe mit ___ Verhör."
      }
    },
    {
      "article": "die",
      "word": "Verknüpfung",
      "translation": {
        "tr": "Bağlantı",
        "en": "Link"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verknüpfung.",
        "accusative": "Ich suche ___ Verknüpfung.",
        "dative": "Neben ___ Verknüpfung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Verlag",
      "translation": {
        "tr": "Yayıncı",
        "en": "Publisher"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verlag.",
        "accusative": "Ich kaufe ___ Verlag.",
        "dative": "Mit ___ Verlag arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Verlangen",
      "translation": {
        "tr": "arzu",
        "en": "Desire"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verlangen.",
        "accusative": "Ich suche ___ Verlangen.",
        "dative": "Neben ___ Verlangen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Verlängerung",
      "translation": {
        "tr": "Uzantı",
        "en": "Extension"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verlängerung.",
        "accusative": "Ich sehe ___ Verlängerung.",
        "dative": "Ich gehe mit ___ Verlängerung."
      }
    },
    {
      "article": "der",
      "word": "Verlauf",
      "translation": {
        "tr": "Tarih",
        "en": "History"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verlauf.",
        "accusative": "Ich nehme ___ Verlauf.",
        "dative": "Vor ___ Verlauf steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Verletzte",
      "translation": {
        "tr": "Yaralı",
        "en": "Injured"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verletzte.",
        "accusative": "Ich sehe ___ Verletzte.",
        "dative": "Ich gehe mit ___ Verletzte."
      }
    },
    {
      "article": "die",
      "word": "Verletzung",
      "translation": {
        "tr": "yaralanma",
        "en": "injury"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verletzung.",
        "accusative": "Ich nehme ___ Verletzung.",
        "dative": "Vor ___ Verletzung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Verlust",
      "translation": {
        "tr": "kayıp",
        "en": "loss"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verlust.",
        "accusative": "Ich sehe ___ Verlust.",
        "dative": "Ich gehe mit ___ Verlust."
      }
    },
    {
      "article": "das",
      "word": "Vermächtnis",
      "translation": {
        "tr": "Eski",
        "en": "Legacy"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vermächtnis.",
        "accusative": "Ich sehe ___ Vermächtnis.",
        "dative": "Ich gehe mit ___ Vermächtnis."
      }
    },
    {
      "article": "der",
      "word": "Vermieter",
      "translation": {
        "tr": "Ev sahibi",
        "en": "Landlord"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vermieter.",
        "accusative": "Ich kaufe ___ Vermieter.",
        "dative": "Mit ___ Vermieter arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Vermittlung",
      "translation": {
        "tr": "Arabuluculuk",
        "en": "Mediation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vermittlung.",
        "accusative": "Ich nehme ___ Vermittlung.",
        "dative": "Vor ___ Vermittlung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Vermögen",
      "translation": {
        "tr": "Varlıklar",
        "en": "Assets"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vermögen.",
        "accusative": "Ich nehme ___ Vermögen.",
        "dative": "Vor ___ Vermögen steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Vermutung",
      "translation": {
        "tr": "Tahmin et",
        "en": "Guess"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vermutung.",
        "accusative": "Ich sehe ___ Vermutung.",
        "dative": "Ich gehe mit ___ Vermutung."
      }
    },
    {
      "article": "die",
      "word": "Vernachlässigung",
      "translation": {
        "tr": "İhmal",
        "en": "Neglect"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vernachlässigung.",
        "accusative": "Ich kaufe ___ Vernachlässigung.",
        "dative": "Mit ___ Vernachlässigung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Vernunft",
      "translation": {
        "tr": "Sebep",
        "en": "Reason"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Vernunft.",
        "accusative": "Ich kenne ___ Vernunft.",
        "dative": "Ich spreche mit ___ Vernunft."
      }
    },
    {
      "article": "die",
      "word": "Veröffentlichung",
      "translation": {
        "tr": "Yayın",
        "en": "Publication"
      },
      "casePrompts": {
        "nominative": "Auf dem Feld steht ___ Veröffentlichung.",
        "accusative": "Ich sehe ___ Veröffentlichung.",
        "dative": "Ich komme mit ___ Veröffentlichung."
      }
    },
    {
      "article": "die",
      "word": "Verordnung",
      "translation": {
        "tr": "Düzenleme",
        "en": "Regulation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verordnung.",
        "accusative": "Ich suche ___ Verordnung.",
        "dative": "Neben ___ Verordnung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Verpflichtung",
      "translation": {
        "tr": "Taahhüt",
        "en": "Commitment"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verpflichtung.",
        "accusative": "Ich suche ___ Verpflichtung.",
        "dative": "Neben ___ Verpflichtung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Versager",
      "translation": {
        "tr": "Başarısızlık",
        "en": "Failure"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Versager.",
        "accusative": "Ich nehme ___ Versager.",
        "dative": "Vor ___ Versager steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Versand",
      "translation": {
        "tr": "Nakliye",
        "en": "Shipping"
      },
      "casePrompts": {
        "nominative": "Vor dem Haus ist ___ Versand.",
        "accusative": "Ich sehe ___ Versand.",
        "dative": "Ich sitze in ___ Versand."
      }
    },
    {
      "article": "die",
      "word": "Verschiebung",
      "translation": {
        "tr": "Shift",
        "en": "Shift"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verschiebung.",
        "accusative": "Ich kaufe ___ Verschiebung.",
        "dative": "Mit ___ Verschiebung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Verschmutzung",
      "translation": {
        "tr": "Kirlilik",
        "en": "Pollution"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verschmutzung.",
        "accusative": "Ich nehme ___ Verschmutzung.",
        "dative": "Vor ___ Verschmutzung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verschwörung",
      "translation": {
        "tr": "Komplo",
        "en": "Conspiracy"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verschwörung.",
        "accusative": "Ich nehme ___ Verschwörung.",
        "dative": "Vor ___ Verschwörung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verstärkung",
      "translation": {
        "tr": "Takviye",
        "en": "Reinforcement"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verstärkung.",
        "accusative": "Ich suche ___ Verstärkung.",
        "dative": "Neben ___ Verstärkung liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Verstoß",
      "translation": {
        "tr": "İhlal",
        "en": "Violation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verstoß.",
        "accusative": "Ich nehme ___ Verstoß.",
        "dative": "Vor ___ Verstoß steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Verteidiger",
      "translation": {
        "tr": "Defans",
        "en": "Defender"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Verteidiger.",
        "accusative": "Ich organisiere ___ Verteidiger.",
        "dative": "Nach ___ Verteidiger fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Verteidigung",
      "translation": {
        "tr": "Savunma",
        "en": "Defense"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Verteidigung.",
        "accusative": "Ich nehme ___ Verteidigung.",
        "dative": "Vor ___ Verteidigung steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verteilung",
      "translation": {
        "tr": "Dağıtım",
        "en": "Distribution"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verteilung.",
        "accusative": "Ich kaufe ___ Verteilung.",
        "dative": "Mit ___ Verteilung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vertreter",
      "translation": {
        "tr": "Temsilci",
        "en": "Representative"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vertreter.",
        "accusative": "Ich suche ___ Vertreter.",
        "dative": "Neben ___ Vertreter liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Vertretung",
      "translation": {
        "tr": "Temsil",
        "en": "Representation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vertretung.",
        "accusative": "Ich nehme ___ Vertretung.",
        "dative": "Vor ___ Vertretung steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Vertrieb",
      "translation": {
        "tr": "Satış",
        "en": "Sales"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vertrieb.",
        "accusative": "Ich nehme ___ Vertrieb.",
        "dative": "Vor ___ Vertrieb steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Verwaltung",
      "translation": {
        "tr": "Yönetim",
        "en": "Administration"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verwaltung.",
        "accusative": "Ich kaufe ___ Verwaltung.",
        "dative": "Mit ___ Verwaltung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Verwandte",
      "translation": {
        "tr": "akrabalar",
        "en": "relatives"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Verwandte.",
        "accusative": "Ich kaufe ___ Verwandte.",
        "dative": "Mit ___ Verwandte arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Verweis",
      "translation": {
        "tr": "Referans",
        "en": "Reference"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verweis.",
        "accusative": "Ich suche ___ Verweis.",
        "dative": "Neben ___ Verweis liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Verwendung",
      "translation": {
        "tr": "Kullanım",
        "en": "Usage"
      },
      "casePrompts": {
        "nominative": "Im Kalender steht ___ Verwendung.",
        "accusative": "Ich plane ___ Verwendung.",
        "dative": "Nach ___ Verwendung mache ich eine Pause."
      }
    },
    {
      "article": "die",
      "word": "Verzögerung",
      "translation": {
        "tr": "gecikme",
        "en": "delay"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Verzögerung.",
        "accusative": "Ich sehe ___ Verzögerung.",
        "dative": "Ich gehe mit ___ Verzögerung."
      }
    },
    {
      "article": "die",
      "word": "Verzweiflung",
      "translation": {
        "tr": "Çaresizlik",
        "en": "Desperation"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Verzweiflung.",
        "accusative": "Ich suche ___ Verzweiflung.",
        "dative": "Neben ___ Verzweiflung liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Vielfalt",
      "translation": {
        "tr": "Çeşitlilik",
        "en": "Diversity"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vielfalt.",
        "accusative": "Ich suche ___ Vielfalt.",
        "dative": "Neben ___ Vielfalt liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Vielzahl",
      "translation": {
        "tr": "çeşitlilik",
        "en": "Variety"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vielzahl.",
        "accusative": "Ich nehme ___ Vielzahl.",
        "dative": "Vor ___ Vielzahl steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Visier",
      "translation": {
        "tr": "Vizör",
        "en": "Visor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Visier.",
        "accusative": "Ich nehme ___ Visier.",
        "dative": "Vor ___ Visier steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Vision",
      "translation": {
        "tr": "vizyon",
        "en": "vision"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vision.",
        "accusative": "Ich suche ___ Vision.",
        "dative": "Neben ___ Vision liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Vita",
      "translation": {
        "tr": "Hayat",
        "en": "Vita"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vita.",
        "accusative": "Ich suche ___ Vita.",
        "dative": "Neben ___ Vita liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Vizepräsident",
      "translation": {
        "tr": "Başkan Yardımcısı",
        "en": "Vice President"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vizepräsident.",
        "accusative": "Ich suche ___ Vizepräsident.",
        "dative": "Neben ___ Vizepräsident liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Völkermord",
      "translation": {
        "tr": "Soykırım",
        "en": "Genocide"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Völkermord.",
        "accusative": "Ich sehe ___ Völkermord.",
        "dative": "Ich gehe mit ___ Völkermord."
      }
    },
    {
      "article": "der",
      "word": "Volkswagen",
      "translation": {
        "tr": "volkswagen",
        "en": "Volkswagen"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Volkswagen.",
        "accusative": "Ich suche ___ Volkswagen.",
        "dative": "Neben ___ Volkswagen liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Volkswirtschaft",
      "translation": {
        "tr": "Ekonomi",
        "en": "Economics"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Volkswirtschaft.",
        "accusative": "Ich sehe ___ Volkswirtschaft.",
        "dative": "Ich gehe mit ___ Volkswirtschaft."
      }
    },
    {
      "article": "die",
      "word": "Vollmacht",
      "translation": {
        "tr": "Vekaletname",
        "en": "Power of attorney"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vollmacht.",
        "accusative": "Ich suche ___ Vollmacht.",
        "dative": "Neben ___ Vollmacht liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Voraussetzung",
      "translation": {
        "tr": "Gereksinim",
        "en": "Requirement"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Voraussetzung.",
        "accusative": "Ich kaufe ___ Voraussetzung.",
        "dative": "Mit ___ Voraussetzung arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Vorbereitung",
      "translation": {
        "tr": "Hazırlık",
        "en": "Preparation"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorbereitung.",
        "accusative": "Ich kaufe ___ Vorbereitung.",
        "dative": "Mit ___ Vorbereitung arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorfall",
      "translation": {
        "tr": "Olay",
        "en": "Incident"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vorfall.",
        "accusative": "Ich sehe ___ Vorfall.",
        "dative": "Ich gehe mit ___ Vorfall."
      }
    },
    {
      "article": "das",
      "word": "Vorfeld",
      "translation": {
        "tr": "Önlük",
        "en": "Apron"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vorfeld.",
        "accusative": "Ich suche ___ Vorfeld.",
        "dative": "Neben ___ Vorfeld liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Vorgabe",
      "translation": {
        "tr": "Varsayılan",
        "en": "Default"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorgabe.",
        "accusative": "Ich kaufe ___ Vorgabe.",
        "dative": "Mit ___ Vorgabe arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorgang",
      "translation": {
        "tr": "süreç",
        "en": "process"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorgang.",
        "accusative": "Ich kaufe ___ Vorgang.",
        "dative": "Mit ___ Vorgang arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorgänger",
      "translation": {
        "tr": "öncül",
        "en": "predecessor"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vorgänger.",
        "accusative": "Ich nehme ___ Vorgänger.",
        "dative": "Vor ___ Vorgänger steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Vorgehen",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vorgehen.",
        "accusative": "Ich nehme ___ Vorgehen.",
        "dative": "Vor ___ Vorgehen steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Vorgehensweise",
      "translation": {
        "tr": "Prosedür",
        "en": "Procedure"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorgehensweise.",
        "accusative": "Ich kaufe ___ Vorgehensweise.",
        "dative": "Mit ___ Vorgehensweise arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorgesetzte",
      "translation": {
        "tr": "Üstler",
        "en": "Superiors"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vorgesetzte.",
        "accusative": "Ich suche ___ Vorgesetzte.",
        "dative": "Neben ___ Vorgesetzte liegt ein Heft."
      }
    },
    {
      "article": "das",
      "word": "Vorhaben",
      "translation": {
        "tr": "Projeler",
        "en": "Projects"
      },
      "casePrompts": {
        "nominative": "Bald startet ___ Vorhaben.",
        "accusative": "Ich organisiere ___ Vorhaben.",
        "dative": "Nach ___ Vorhaben fahre ich nach Hause."
      }
    },
    {
      "article": "die",
      "word": "Vorhersage",
      "translation": {
        "tr": "Tahmin",
        "en": "Prediction"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vorhersage.",
        "accusative": "Ich nehme ___ Vorhersage.",
        "dative": "Vor ___ Vorhersage steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Vorlage",
      "translation": {
        "tr": "Şablon",
        "en": "Template"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vorlage.",
        "accusative": "Ich kaufe ___ Vorlage.",
        "dative": "Hinter ___ Vorlage ist ein Fenster."
      }
    },
    {
      "article": "der",
      "word": "Vormarsch",
      "translation": {
        "tr": "avans",
        "en": "advance"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vormarsch.",
        "accusative": "Ich nehme ___ Vormarsch.",
        "dative": "Vor ___ Vormarsch steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Vorort",
      "translation": {
        "tr": "Banliyö",
        "en": "Suburb"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorort.",
        "accusative": "Ich kaufe ___ Vorort.",
        "dative": "Mit ___ Vorort arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorrat",
      "translation": {
        "tr": "Stok",
        "en": "Stock"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Vorrat.",
        "accusative": "Ich suche ___ Vorrat.",
        "dative": "Neben ___ Vorrat liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Vorsitz",
      "translation": {
        "tr": "Sandalye",
        "en": "Chair"
      },
      "casePrompts": {
        "nominative": "Im Zimmer steht ___ Vorsitz.",
        "accusative": "Ich suche ___ Vorsitz.",
        "dative": "Vor ___ Vorsitz liegt ein Teppich."
      }
    },
    {
      "article": "der",
      "word": "Vorsitzende",
      "translation": {
        "tr": "Başkan",
        "en": "Chairman"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Vorsitzende.",
        "accusative": "Ich kenne ___ Vorsitzende.",
        "dative": "Ich spreche mit ___ Vorsitzende."
      }
    },
    {
      "article": "der",
      "word": "Vorsprung",
      "translation": {
        "tr": "Avantajlı başlangıç",
        "en": "Head start"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Vorsprung.",
        "accusative": "Ich erwarte ___ Vorsprung.",
        "dative": "Vor ___ Vorsprung bin ich nervös."
      }
    },
    {
      "article": "die",
      "word": "Vorstadt",
      "translation": {
        "tr": "Banliyö",
        "en": "Suburbia"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vorstadt.",
        "accusative": "Ich sehe ___ Vorstadt.",
        "dative": "Ich gehe mit ___ Vorstadt."
      }
    },
    {
      "article": "der",
      "word": "Vorstand",
      "translation": {
        "tr": "Yönetim Kurulu",
        "en": "Board of Directors"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vorstand.",
        "accusative": "Ich nehme ___ Vorstand.",
        "dative": "Vor ___ Vorstand steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Vorstoß",
      "translation": {
        "tr": "avans",
        "en": "advance"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vorstoß.",
        "accusative": "Ich sehe ___ Vorstoß.",
        "dative": "Ich gehe mit ___ Vorstoß."
      }
    },
    {
      "article": "der",
      "word": "Vortrag",
      "translation": {
        "tr": "Ders",
        "en": "Lecture"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vortrag.",
        "accusative": "Ich kaufe ___ Vortrag.",
        "dative": "Mit ___ Vortrag arbeite ich."
      }
    },
    {
      "article": "das",
      "word": "Vorurteil",
      "translation": {
        "tr": "Önyargı",
        "en": "Prejudice"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Vorurteil.",
        "accusative": "Ich kaufe ___ Vorurteil.",
        "dative": "Mit ___ Vorurteil arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Vorwurf",
      "translation": {
        "tr": "suçlama",
        "en": "accusation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Vorwurf.",
        "accusative": "Ich nehme ___ Vorwurf.",
        "dative": "Vor ___ Vorwurf steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Vorzeichen",
      "translation": {
        "tr": "işaret",
        "en": "sign"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Vorzeichen.",
        "accusative": "Ich sehe ___ Vorzeichen.",
        "dative": "Ich gehe mit ___ Vorzeichen."
      }
    },
    {
      "article": "das",
      "word": "Wachstum",
      "translation": {
        "tr": "Büyüme",
        "en": "Growth"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Wachstum.",
        "accusative": "Ich nehme ___ Wachstum.",
        "dative": "Vor ___ Wachstum steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Wahlkampf",
      "translation": {
        "tr": "Seçim kampanyası",
        "en": "Election campaign"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wahlkampf.",
        "accusative": "Ich suche ___ Wahlkampf.",
        "dative": "Neben ___ Wahlkampf liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Wahlperiode",
      "translation": {
        "tr": "seçim dönemi",
        "en": "election period"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wahlperiode.",
        "accusative": "Ich suche ___ Wahlperiode.",
        "dative": "Neben ___ Wahlperiode liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Wahn",
      "translation": {
        "tr": "sanrı",
        "en": "delusion"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Wahn.",
        "accusative": "Ich nehme ___ Wahn.",
        "dative": "Vor ___ Wahn steht ein Stuhl."
      }
    },
    {
      "article": "der",
      "word": "Wahnsinn",
      "translation": {
        "tr": "Delilik",
        "en": "Madness"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Wahnsinn.",
        "accusative": "Ich nehme ___ Wahnsinn.",
        "dative": "Vor ___ Wahnsinn steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Wahrnehmung",
      "translation": {
        "tr": "Algı",
        "en": "Perception"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Wahrnehmung wichtig.",
        "accusative": "Wir verstehen ___ Wahrnehmung.",
        "dative": "Bei ___ Wahrnehmung brauche ich Hilfe."
      }
    },
    {
      "article": "die",
      "word": "Wahrscheinlichkeit",
      "translation": {
        "tr": "Olasılık",
        "en": "Probability"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wahrscheinlichkeit.",
        "accusative": "Ich suche ___ Wahrscheinlichkeit.",
        "dative": "Neben ___ Wahrscheinlichkeit liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Wandel",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Wandel.",
        "accusative": "Ich kaufe ___ Wandel.",
        "dative": "Mit ___ Wandel arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Wasserstoff",
      "translation": {
        "tr": "Hidrojen",
        "en": "Hydrogen"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Wasserstoff.",
        "accusative": "Ich kaufe ___ Wasserstoff.",
        "dative": "Mit ___ Wasserstoff arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Wechsel",
      "translation": {
        "tr": "Değiştir",
        "en": "Change"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Wechsel.",
        "accusative": "Ich kaufe ___ Wechsel.",
        "dative": "Mit ___ Wechsel arbeite ich."
      }
    },
    {
      "article": "der",
      "word": "Wechselkurs",
      "translation": {
        "tr": "Döviz kuru",
        "en": "Exchange rate"
      },
      "casePrompts": {
        "nominative": "Für uns bleibt ___ Wechselkurs zentral.",
        "accusative": "Wir besprechen ___ Wechselkurs.",
        "dative": "Mit ___ Wechselkurs wird alles leichter."
      }
    },
    {
      "article": "die",
      "word": "Wechselwirkung",
      "translation": {
        "tr": "etkileşim",
        "en": "interaction"
      },
      "casePrompts": {
        "nominative": "Das ist ___ Wechselwirkung.",
        "accusative": "Ich erkläre ___ Wechselwirkung.",
        "dative": "An ___ Wechselwirkung arbeiten wir."
      }
    },
    {
      "article": "das",
      "word": "Weib",
      "translation": {
        "tr": "kadın",
        "en": "woman"
      },
      "casePrompts": {
        "nominative": "Dort wartet ___ Weib.",
        "accusative": "Ich sehe ___ Weib.",
        "dative": "Ich antworte ___ Weib."
      }
    },
    {
      "article": "das",
      "word": "Weibchen",
      "translation": {
        "tr": "Dişiler",
        "en": "Females"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Weibchen.",
        "accusative": "Ich sehe ___ Weibchen.",
        "dative": "Ich gehe mit ___ Weibchen."
      }
    },
    {
      "article": "die",
      "word": "Weiche",
      "translation": {
        "tr": "Yumuşak",
        "en": "Soft"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Weiche.",
        "accusative": "Ich kaufe ___ Weiche.",
        "dative": "Mit ___ Weiche arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Weide",
      "translation": {
        "tr": "mera",
        "en": "pasture"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Weide.",
        "accusative": "Ich suche ___ Weide.",
        "dative": "Neben ___ Weide liegt ein Heft."
      }
    },
    {
      "article": "die",
      "word": "Weile",
      "translation": {
        "tr": "süre",
        "en": "while"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Weile.",
        "accusative": "Ich nehme ___ Weile.",
        "dative": "Vor ___ Weile steht ein Stuhl."
      }
    },
    {
      "article": "die",
      "word": "Weise",
      "translation": {
        "tr": "yol",
        "en": "way"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Weise.",
        "accusative": "Ich sehe ___ Weise.",
        "dative": "Ich gehe mit ___ Weise."
      }
    },
    {
      "article": "die",
      "word": "Weisheit",
      "translation": {
        "tr": "Bilgelik",
        "en": "Wisdom"
      },
      "casePrompts": {
        "nominative": "Im Raum steht ___ Weisheit.",
        "accusative": "Ich kaufe ___ Weisheit.",
        "dative": "Mit ___ Weisheit arbeite ich."
      }
    },
    {
      "article": "die",
      "word": "Weiterbildung",
      "translation": {
        "tr": "İleri eğitim",
        "en": "Further training"
      },
      "casePrompts": {
        "nominative": "Am Bahnhof steht ___ Weiterbildung.",
        "accusative": "Ich miete ___ Weiterbildung.",
        "dative": "Ich fahre mit ___ Weiterbildung."
      }
    },
    {
      "article": "die",
      "word": "Weiterentwicklung",
      "translation": {
        "tr": "Daha fazla gelişme",
        "en": "Further development"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Weiterentwicklung.",
        "accusative": "Ich sehe ___ Weiterentwicklung.",
        "dative": "Ich gehe mit ___ Weiterentwicklung."
      }
    },
    {
      "article": "die",
      "word": "Wellenlänge",
      "translation": {
        "tr": "dalga boyu",
        "en": "wavelength"
      },
      "casePrompts": {
        "nominative": "Im Büro arbeitet ___ Wellenlänge.",
        "accusative": "Ich kenne ___ Wellenlänge.",
        "dative": "Ich spreche mit ___ Wellenlänge."
      }
    },
    {
      "article": "der",
      "word": "Weltkrieg",
      "translation": {
        "tr": "Dünya Savaşı",
        "en": "World War"
      },
      "casePrompts": {
        "nominative": "Auf der Karte steht ___ Weltkrieg.",
        "accusative": "Ich besuche ___ Weltkrieg.",
        "dative": "Ich warte vor ___ Weltkrieg."
      }
    },
    {
      "article": "die",
      "word": "Wendung",
      "translation": {
        "tr": "büküm",
        "en": "twist"
      },
      "casePrompts": {
        "nominative": "Morgen beginnt ___ Wendung.",
        "accusative": "Ich starte ___ Wendung.",
        "dative": "Bei ___ Wendung lerne ich viel."
      }
    },
    {
      "article": "die",
      "word": "Wertschätzung",
      "translation": {
        "tr": "Takdir",
        "en": "Appreciation"
      },
      "casePrompts": {
        "nominative": "Dort liegt ___ Wertschätzung.",
        "accusative": "Ich nehme ___ Wertschätzung.",
        "dative": "Vor ___ Wertschätzung steht ein Stuhl."
      }
    },
    {
      "article": "das",
      "word": "Wesen",
      "translation": {
        "tr": "varlıklar",
        "en": "beings"
      },
      "casePrompts": {
        "nominative": "Auf dem Tisch ist ___ Wesen.",
        "accusative": "Ich sehe ___ Wesen.",
        "dative": "Ich gehe mit ___ Wesen."
      }
    },
    {
      "article": "die",
      "word": "Wichtigkeit",
      "translation": {
        "tr": "Önem",
        "en": "Importance"
      },
      "casePrompts": {
        "nominative": "Hier ist ___ Wichtigkeit.",
        "accusative": "Ich suche ___ Wichtigkeit.",
        "dative": "Neben ___ Wichtigkeit liegt ein Heft."
      }
    },
    {
      "article": "der",
      "word": "Widerspruch",
      "translation": {
        "tr": "çelişki",
        "en": "contradiction"
      },
      "casePrompts": {
        "nominative": "Heute ist ___ Widerspruch wichtig.",
        "accusative": "Wir verstehen ___ Widerspruch.",
        "dative": "Bei ___ Widerspruch brauche ich Hilfe."
      }
    }
  ]
};
