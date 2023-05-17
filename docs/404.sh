
source="index.html"
destination="404.html"

if [ ! -e "$source" ]; then
    echo "Die gesuchte Quelldatei '$source' existiert nicht."
    exit 1
fi

if [ -e "$destination" ]; then
    echo "Die Zieldatei '$destination' existiert bereits."
    exit 1
fi

cp "$source" "$destination"

if [ ! -e "$destination" ]; then
    echo "Das Kopieren von '$source' nach '$destination' ist fehlgeschlagen."
    exit 1
fi

echo "'$source' erfolgreich als '$destination' kopiert."
