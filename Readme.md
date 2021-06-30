---
title: Studienleistung 3
author: Alexander Bazo und Jakob Fehle
documentclass: scrartcl
classoption:
  - a4paper
header-includes: |

    \usepackage[a4paper,left=2.5cm, right=2.5cm,top=2.5cm, bottom=3cm]{geometry}
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhf{}
    \rhead{Webtechnologien}
    \lhead{SL3}
    \fancypagestyle{plain}{
      \fancyhf{}
      \rhead{Webtechnologien}
      \lhead{SL3}}


---

# ToDo-App mit Server-Datenbank

...

### Vorgaben

...

### Starten der Anwendung



Um die Anwendung korrekt auszuführen, wird ein lokaler Webserver benötigt. Die LiveShare-Funktion von _Visual Studio Code_ reicht hierfür nicht mehr aus. Statt dessen starten wir den Server direkt über die _Node.js_-Umgebung. Installieren Sie _Node.js_ über die entsprechende Installationsdatei für Ihr Betriebssystem, die Sie [\textcolor{blue}{hier}](
) herunterladen können. Öffnen Sie dann den Projektordner in _Visual Studio Code_ und Starten Sie das [\textcolor{blue}{integrierte Terminal}](https://code.visualstudio.com/docs/editor/integrated-terminal). Führen Sie dort den Befehl **npm install** aus, um das Projekt vorzubereiten. Dannach können Sie über die Eingabe des Befehls **npm start** den Server starten und den Client im Browser über die Adresse **http://localhost:8080/** aufrufen. Wenn Sie im integrierten Terminal die Tastenkombination **STRG** + **C** drücken, wird der Server beendet.

### Verpflichtende Anforderungen

- ...


------

*Abgabekriterien:*

Laden Sie Ihre Lösung bis spätestens 18.6.2021 (23:59 Uhr) als zip-komprimierten Ordner auf GRIPS hoch.  Benennen Sie die einzelnen Dateien pro Aufgabe sinnvoll und verwenden Sie geeignete Formate:

- Aufgabe 1: Das gesamte Projekt (HTML, JS, CSS)

Der Name der Datei ergibt sich aus dem Präfix „SL_WT_SS21“, der Nr. der Studienleistung, ihrem Vor- und Nachnamen jeweils getrennt durch _ .

 

Beispiel: **SL_WT_SS21_3_Max_Mustermann.zip**

