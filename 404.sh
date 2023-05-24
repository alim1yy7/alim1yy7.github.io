#!/bin/bash

source="docs/index.html"
destination="docs/404.html"

# Überprüfen, ob die Quelldatei existiert
if [ ! -e "$source" ]; then
    echo "Die Quelldatei '$source' existiert nicht."
    exit 1
fi

# Überprüfen, ob die Zieldatei bereits existiert
if [ -e "$destination" ]; then
    echo "Die Zieldatei '$destination' existiert bereits."
    exit 1
fi

# Kopieren der Quelldatei zum Ziel
cp "$source" "$destination"

# Überprüfen, ob das Kopieren erfolgreich war
if [ ! -e "$destination" ]; then
    echo "Das Kopieren von '$source' nach '$destination' ist fehlgeschlagen."
    exit 1
fi

echo "'$source' erfolgreich als '$destination' kopiert."
