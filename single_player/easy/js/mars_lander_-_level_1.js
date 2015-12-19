var N = +readline(); // the number of points used to draw the surface of Mars

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ').map(Number),
        LAND_X = inputs[0], // X coordinate of a surface point. (0 to 6999)
        LAND_Y = inputs[1]; // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
for (;;) {
    var inputs = readline().split(' ').map(Number),
        X = inputs[0],
        Y = inputs[1],
        HS = inputs[2], // the horizontal speed (in m/s), can be negative.
        VS = inputs[3], // the vertical speed (in m/s), can be negative.
        F = inputs[4], // the quantity of remaining fuel in liters.
        R = inputs[5], // the rotation angle in degrees (-90 to 90).
        P = inputs[6]; // the thrust power (0 to 4).

    // R P. R is the desired rotation angle. P is the desired thrust power.
    
    if (Y > 2000)
        print("0 2");
    else
        print("0 4");
    
}