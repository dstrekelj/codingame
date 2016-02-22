var LON = parseFloat(readline().replace(',', '.'));
var LAT = parseFloat(readline().replace(',', '.'));
var N = parseInt(readline());

var min = 99999999;
var loc = "";

for (var i = 0; i < N; i++) {
    var DEFIB = readline().split(';');

    var location = DEFIB[1];
    var longitude = parseFloat(DEFIB[DEFIB.length - 2].replace(',', '.'));
    var latitude = parseFloat(DEFIB[DEFIB.length - 1].replace(',', '.'));

    var x = (longitude - LON) * Math.cos((LAT - latitude)/2);
    var y = (latitude - LAT);
    var d = Math.sqrt(x*x + y*y) * 6371;

    printErr(x);

    if (d < min)
    {
        min = d;
        loc = location;
    }
}

print(loc);
