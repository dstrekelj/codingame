/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// Game input
var inputs                  = readline().split(' '),
    nbFloors                = parseInt(inputs[0]),  // Number of floors in area
    width                   = parseInt(inputs[1]),  // Width of area
    nbRounds                = parseInt(inputs[2]),  // Maximum number of game rounds
    exitFloor               = parseInt(inputs[3]),  // Exit floor
    exitPos                 = parseInt(inputs[4]),  // Position of exit on floor
    nbTotalClones           = parseInt(inputs[5]),  // Total number of clones during game
    nbAdditionalElevators   = parseInt(inputs[6]),  // Always 0
    nbElevators             = parseInt(inputs[7]),  // Number of elevators in area
    elevators               = new Array();

for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    var elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    var elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    elevators[elevatorFloor] = elevatorPos;
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    var cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    var clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    var direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

    var move = 'WAIT';

    if (cloneFloor < elevators.length) {
        if (clonePos > elevators[cloneFloor] && direction == 'RIGHT') move = 'BLOCK';
        else if (clonePos < elevators[cloneFloor] && direction == 'LEFT') move = 'BLOCK';
    } else {
        if (clonePos > exitPos && direction == 'RIGHT') move = 'BLOCK';
        else if (clonePos < exitPos && direction == 'LEFT') move = 'BLOCK';
    }

    print(move)
}
