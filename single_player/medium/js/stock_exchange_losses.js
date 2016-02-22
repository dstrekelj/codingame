/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var vs = readline();

var values = vs.split(' ').map(Number);

var p = 0;
var max = values[0];

for (var i = 1; i < values.length; i++)
{
    var np = values[i] - max;

    if (np < p)
    {
        p = np;
    }

    if (max < values[i])
    {
        max = values[i];
    }

}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(p);
