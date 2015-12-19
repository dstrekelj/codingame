var R = +readline(), // road length (before gap)
    G = +readline(), // gap length
    L = +readline(), // landing platform length

for (;;) {
    var S = +readline(), // motorbike speed
        X = +readline(); // motorbike position (on road)
    
    if (X == R - 1)         print("JUMP");
    else if (X > R - 1)     print("SLOW");
    else if (S == G + 1)    print("WAIT");
    else if (S > G + 1)     print("SLOW");
    else                    print("SPEED");
}