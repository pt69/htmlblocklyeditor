## Projektbeschreibung

Der **HTML-Blockly-Editor** wird für den Einsatz im [Informatik-Unterricht](https://www.informatik.gym-wst.de) am [Gymnasium Westerstede](https://www.gymnasium-westerstede.de) entwickelt.

Für Programmier-AnfängerInnen ist die Programmierung im Text-Modus schwierig. Im Unterricht wird für die Suche nach Tippfehlern oder Syntaxfehlern viel Zeit verwendet und man verliert in der Vielfalt verfügbarer Anweisungen leicht die Orientierung. Bei einem **Block-Editor** spielen Tippfehler keine Rolle und mögliche Anweisungen findet man nach Kategorien angeordnet in der Toolbox. In den vergangenen Jahren wurden viele Block-Programmierumgebungen entwickelt, wie z.B. [Scratch](https://scratch.mit.edu/) oder [Open Roberta](https://lab.open-roberta.org/).

Mit dem HTML-Blockly-Editor kann eine Webseite mit Blöcken zusammengestellt werden. Für die Webseite gibt es eine Vorschau und der dafür notwendige HTML-Code kann in einem Editor angezeigt werden.

[HTML-Blockly-Editor](img/htmlblocklyeditor.png)

---

### Entwicklung

Der Editor wird als statische Client-Applikationen ohne Verwendung eines Application-Frameworks oder Paket-Managers programmiert. Es werden keine Cookies gesetzt und es erfolgt keine Speicherung von Daten auf dem Server.

Die verwendeten Bibliotheken sind statisch in das Projekt eingebunden und werden unregelmäßig manuell aktualisiert. 

---

### Verwendete Bibliotheken: 

- [HTML-Block-Definitionen](https://github.com/bwinf/blockly-html) - [https://github.com/bwinf/blockly-html/blob/master/LICENSE](https://github.com/bwinf/blockly-html/blob/master/LICENSE)
- [Blockly](https://github.com/google/blockly) - [Apache License](https://github.com/google/blockly/blob/master/LICENSE)
- [Bootstrap](https://getbootstrap.com/) - [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE)
- [JQuery](https://jquery.com/) - [MIT License](https://jquery.org/license/)
- [Prism](https://prismjs.com/) - [MIT License](https://github.com/PrismJS/prism/blob/master/LICENSE)
- [LZ_String](https://github.com/pieroxy/lz-string/) - [MIT License](https://github.com/pieroxy/lz-string/blob/master/LICENSE)
- [JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter) - [Apache License](https://github.com/NeilFraser/JS-Interpreter/blob/master/LICENSE)
