var N = parseInt(readline()),
    P = new Array();        // Array of points
    Xmin = Math.pow(2, 30), // Leftmost point
    Xmax = -Math.pow(2,30), // Rightmost point
    Ysum = 0;               // Sum of all Y values

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' '),
        X = parseInt(inputs[0]),
        Y = parseInt(inputs[1]);
    P.push({'x': X, 'y': Y});
    if (X < Xmin) Xmin = X;
    if (X > Xmax) Xmax = X;
    Ysum += Y;
}


var Yavg = (Ysum < 0) ? Math.ceil(Ysum/N) : Math.floor(Ysum/N),  // Average Y
    Dmin = Math.pow(2, 30),
    Ycenter = 0;

P.forEach(function(v) {
    var d = Math.abs(v.y - Yavg);
    if (d < Dmin) {
        Dmin = d;
        Ycenter = v.y;
    }
});

var L = Xmax - Xmin;

P.forEach(function(v) {
    L += Math.abs(v.y - Ycenter);
});

print(L);
