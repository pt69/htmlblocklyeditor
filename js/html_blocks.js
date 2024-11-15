"use strict";

let seitenStrukturC1 = "#34495E";
let seitenStrukturC2 = "#5D6D7E";
let seitenStrukturC3 = "#85929E";
let textStilC1 = "#F39C12";
let textElementeC1 = "#138D75";
let textElementeC2 = "#45B39D";
let listeC1 = "#2980B9";
let listeC2 = "#5499C7";
let tabelleC1 = "#839192";
let tabelleC2 = "#95A5A6";
let tabelleC3 = "#AAB7B8";
let formularC1 = "#884EA0"
let formularC2 = "#AF7AC5"
let cssC1 = "#A93226";
let cssC2 = "#C0392B";
let cssC3 = "#CD6155";

var htmlBlocks =
[{
  "type": "css_classes",
  "message0": "CSS-Klassen %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "css_class"
  }
  ],
  "previousStatement": "head",
  "nextStatement": "head",  
  "colour": cssC1,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_class",
  "message0": "CSS-Klasse: %1 %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "Klassenname"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "css_attribut"
  }
  ],
  "previousStatement": 'css_class',
  "nextStatement": 'css_class',
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_tag",
  "message0": "CSS-tag: %1 %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "Klassenname"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "css_attribut"
  }
  ],
  "previousStatement": 'css_class',
  "nextStatement": 'css_class',
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_attribut",
  "message0": "%1 : %2",
  "args0": [
  {
    "type": "field_input",
    "name": "property",
    "text": "Eigenschaft"
  },
  {
    "type": "field_input",
    "name": "value",
    "text": "Wert"
  }
  ],
  "previousStatement": "css_attribut",
  "nextStatement": "css_attribut",
  "colour": cssC3,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_classdock",
  "message0": "CSS-Klasse: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Klassenname"
    }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_color",
  "message0": "Text-Farbe: %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement": "css_attribut",
  "nextStatement": "css_attribut",
  "colour": cssC3,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "css_bgcolour",
  "message0": "Hintergrund-Farbe:  %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement": "css_attribut",
  "nextStatement": "css_attribut",
  "colour": cssC3,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "baseframe",
  "message0": "HTML-Seite <html> %1 Kopf <head> %2 %3 Inhalt <body> %4 %5",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "head",
    "check": "head"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "body",
    "check": "body"
  }
  ],
  "colour": seitenStrukturC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "html",
  "message0": "HTML-Seite <html> %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "colour": seitenStrukturC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "body",
  "message0": "Seiteninhalt <body> %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": seitenStrukturC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "head",
  "message0": "Seiten-Kopf <head> %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "head"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": seitenStrukturC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "title",
  "message0": "Seiten-Titel <title> %1",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "Webseite"
  }
  ],
  "previousStatement": "head",
  "nextStatement": "head",
  "colour": seitenStrukturC3,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "paragraph",
  "message0": "Absatz <p> %1",
  "args0": [
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textElementeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "plaintext",
  "message0": "Text %1",
  "args0": [
  {
    "type": "field_input",
    "name": "content",
    "text": ""
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textElementeC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "division",
  "message0": "Div <div> %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "style",
  "message0": "Stil: %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "css_attribut"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "generictag",
  "message0": "< %1 > %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "tag"
  },
  {
    "type": "input_value",
    "name": "NAME",
    "check": "css_attribut"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textElementeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "more_attributes",
  "message0": "%1 %2 %3",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME1",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME2",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME3",
    "check": "attribute"
  }
  ],
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "genericattribute",
  "message0": "%1  =  %2",
  "args0": [
  {
    "type": "field_input",
    "name": "attribute",
    "text": "attribute"
  },
  {
    "type": "field_input",
    "name": "value",
    "text": "value"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "link",
  "message0": "Internet-Link: %1 %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "Ziel"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textElementeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "span",
  "message0": "Span <span> %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": cssC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "image",
  "message0": "Bild %1 oder %2",
  "args0": [
  {
    "type": "field_input",
    "name": "IMAGE",
    "text": "URL"
  },
  {
    "type": "field_input",
    "name": "ALT",
    "text": "alternativer Text"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textElementeC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "emphasise",
  "message0": "kursiv %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "strong",
  "message0": "fett %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "headline",
  "message0": "Überschrift %1 %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "NAME",
    "options": [
    [
    "Level 1",
    "h1"
    ],
    [
    "Level 2",
    "h2"
    ],
    [
    "Level 3",
    "h3"
    ],
    [
    "Level 4",
    "h4"
    ],
    [
    "Level 5",
    "h5"
    ],
    [
    "Level 6",
    "h6"
    ]
    ]
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": 'body',
  "nextStatement": 'body',
  "colour": textElementeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "linebreak",
  "message0": "Neue Zeile <br>",
  "previousStatement": 'body',
  "nextStatement": 'body',
  "colour": textElementeC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "horizontalbreak",
  "message0": "Linie <hr>",
  "previousStatement": 'body',
  "nextStatement": 'body',
  "colour": textElementeC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "unorderedlist",
  "message0": "Liste %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "liste"
  }
  ],
  "previousStatement": 'body',
  "nextStatement": 'body',
  "colour": listeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "orderedlist",
  "message0": "Nummern-Liste %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "liste"
  }
  ],
  "previousStatement": 'body',
  "nextStatement": 'body',
  "colour": listeC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "listelement",
  "message0": "Listenelement %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "liste",
  "nextStatement": "liste",
  "colour": listeC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "deleted",
  "message0": "durchgestrichen %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "super",
  "message0": "hochgestellt %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "sub",
  "message0": "tiefgestellt %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "code",
  "message0": "Code %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": textStilC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "form",
  "message0": "Formular %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": formularC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "table",
  "message0": "Tabelle %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "table"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": tabelleC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablerow",
  "message0": "Zeile %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "tablerow"
  }
  ],
  "previousStatement": "table",
  "nextStatement": "table",
  "colour": tabelleC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablecell",
  "message0": "Eintrag %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "body"
  }
  ],
  "previousStatement": "tablerow",
  "nextStatement": "tablerow",
  "colour": tabelleC3,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input_text",
  "message0": "Texteingabe %1",
  "args0": [
  {
    "type": "field_input",
    "name": "default",
    "text": ""
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": formularC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "button",
  "message0": "Schaltfläche %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "body"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": formularC1,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input",
  "message0": "%1 Eingabefeld %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "type",
    "options": [
    [
    "Text",
    "text"
    ],
    [
    "E-Mail",
    "email"
    ],
    [
    "Zahl",
    "number"
    ],
    [
    "Passwort",
    "password"
    ],
    [
    "Checkbox",
    "checkbox"
    ],
    [
    "Radiobutton",
    "radio"
    ],
    [
    "Schaltfläche",
    "button"
    ],
    [
    "Farbe",
    "color"
    ],
    [
    "Datum",
    "date"
    ],
    [
    "Ortszeit",
    "datetime-local"
    ],
    [
    "Datei",
    "file"
    ],
    [
    "Monat",
    "month"
    ],
    [
    "Schieberegler",
    "range"
    ],
    [
    "Zeit",
    "time"
    ],
    [
    "Woche",
    "week"
    ]
    ]
  },
  {
    "type": "field_input",
    "name": "value",
    "text": ""
  },
  {
    "type": "input_value",
    "name": "text"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": formularC2,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "script",
  "message0": "Skript %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "code"
  }
  ],
  "previousStatement": "body",
  "nextStatement": "body",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "onclick",
  "message0": "on click =  %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "code"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}];

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(htmlBlocks[iBlock]);
}
