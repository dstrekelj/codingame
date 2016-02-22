/**
 * SCORE:       21.18
 * POSITION:    1089 / 2017
 */

 var Player = (function(x, y) {
     // Current X-position
     this.x = x;
     // Current Y-position
     this.y = y;
     // Destination X-position
     var a = x,
     // Destination Y-position
         b = y,
     // Map of the game
         map = Array(Array());

     this.set = function(x, y) {
         this.x = x;
         this.y = y;
         return this;
     };

     this.update = function(x, y) {
         this.set(x, y);

         // This is for initialisation.
         if (a === undefined && b === undefined) {
             a = x;
             b = y;
         }

         // If destination is reached, find new destination
         if (this.x === a && this.y === b) {
             var available = check();
             printErr('-- Available: ', available.length);

             if (available.length > 0) {
                 var destination = available[int(0, available.length)];
                 printErr(destination.i, destination.j, destination.value);
                 a = destination.i;
                 b = destination.j;
             } else {
                 a += step();
                 a = bound(a, 0, 34);
                 b += step();
                 b = bound(b, 0, 19);
             }
         }

         return this;
     };

     this.action = function() {
         return a + ' ' + b;
     };

     var step = function() {
         var offset = Math.round(Math.random());

         return (offset === 0) ? -8 : 8;
     };

     this.debug = function() {
         printErr(this.x, this.y, a, b);
         return this;
     };

     var bound = function(n, min, max) {
         if (n > max)
             return max;
         if (n < min)
             return min;
         return n;
     };

     this.load = function(m) {
         map = m;
         return this;
     };

     var sample = function(i, j) {
         i = bound(i, 0, 34);
         j = bound(j, 0, 19);
         value = map[j][i];
         return { i : i, j : j, value : value };
     };

     var check = function() {
         var samples = [
             sample(this.x - 3, this.y + 3),
             sample(this.x + 3, this.y + 3),
             sample(this.x - 3, this.y - 3),
             sample(this.x + 3, this.y + 3)
         ];

         printErr('-- MAP --')
         printErr(samples[0].value, 'x', samples[1].value);
         printErr('x', '0', 'x');
         printErr(samples[2].value, 'x', samples[3].value);

         return samples.filter(function(e) { return e.value === '.'; });
     };

     var int = function(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
     };
 });

 /* --- */

 var player = new Player(undefined, undefined),
     opponentCount = parseInt(readline()); // Opponent count

 var map = [];

 // game loop
 while (true) {
     var gameRound = parseInt(readline()),
         inputs = readline().split(' '),
         x = parseInt(inputs[0]), // Your x position
         y = parseInt(inputs[1]), // Your y position
         backInTimeLeft = parseInt(inputs[2]); // Remaining back in time

     for (var i = 0; i < opponentCount; i++) {
         var inputs = readline().split(' '),
             opponentX = parseInt(inputs[0]), // X position of the opponent
             opponentY = parseInt(inputs[1]), // Y position of the opponent
             opponentBackInTimeLeft = parseInt(inputs[2]); // Remaining back in time of the opponent
     }

     for (var i = 0; i < 20; i++) {
         var line = readline(); // One line of the map ('.' = free, '0' = you, otherwise the id of the opponent)
         map[i] = line.split('');
     }

     player.load(map);

     player.update(x, y);

     player.debug();

     print(player.action()); // action: "x y" to move or "BACK rounds" to go back in time
 }
