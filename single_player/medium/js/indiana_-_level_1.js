var inputs = readline().split(' '),
    W = parseInt(inputs[0]),    // Number of columns
    H = parseInt(inputs[1]),    // Number of rows
    room = new Array();

// Add room rows to `room`
for (var i = 0; i < H; i++) {
    var LINE = readline().split(' ');
    room.push(LINE);
}

var EX = parseInt(readline());  // Not useful for this first mission, but must be read

while (true) {
    var inputs = readline().split(' '),
        XI  = parseInt(inputs[0]),  // Indy's X position
        YI  = parseInt(inputs[1]),  // Indy's Y position
        POS = inputs[2],            // Indy's entrace point (TOP, LEFT, RIGHT)
        X = XI,  // Indy's next X position
        Y = YI;  // Indy's next Y position

    // Determine next position based on current room
    switch(room[YI][XI]) {
        case '1':
        case '7':
        case '8':
        case '9':   Y += 1; break;
        case '2':   X += ((POS === 'LEFT') ? 1 : -1); break;
        case '3':
        case '12':
        case '13':  Y += 1; break;
        case '4':   if (POS === 'TOP') X -= 1; else Y += 1; break;
        case '5':   if (POS === 'TOP') X += 1; else Y += 1; break;
        case '6':   if (POS !== 'TOP') X += ((POS === 'LEFT') ? 1 : -1); break;
        case '10':  if (POS !== 'RIGHT') X -= 1; break;
        case '11':  if (POS !== 'LEFT') X += 1; break;
        default:    // Do nothing
    }

    print(X + ' ' + Y);
}
