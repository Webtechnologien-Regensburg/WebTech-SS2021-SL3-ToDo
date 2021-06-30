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

In dieser Aufgaben entwickeln Sie die Client-Server-Interaktion eines Web-basierten Notizblocks. In diesem Notizblock können Einträge erstellt, aktualisiert und als Erledigt markiert werden. Ihre Anwendung kommuniziert im Hintergrund mit einer Datenbank und ermöglicht so das Auslesen und persistente Verändern und Abspeichern von Daten. 

Durch die Betätigung des "+"-Elements im UI der Webseite kann der Liste des Notizblockes ein neues Element hinzugefügt werden. Das Erstellen eines Elements soll an die Datenbank des Webservers weitergeleitet und dort abgespeichert werden. Ebenso sollen auch Änderungen am Element (Text oder auch das Markieren als Erledigt) mit der Datenbank kommuniziert werden. Falls der Datenbank bereits Einträge hinzugefügt wurden, sollen diese beim erneuten Laden des Notizblockes von der Datenbank bezogen und angezeigt werden, um eine aktuelle Ansicht der Liste zu repräsentieren.

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

