/**
 * Save humans, destroy zombies!
 * 
 * POINTS: 49580
 * RANK: 85 / 130
 **/

/**
 * Human.
 */
function Human(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
}

Human.prototype.distanceTo = function (a, b) {
    return Math.floor(Math.sqrt((a - this.x) * (a - this.x) + (b - this.y) * (b - this.y)));
}

Human.prototype.toString = function () {
    return this.x + ' ' + this.y;
}

/**
 * Zombie.
 */
function Zombie(id, x, y, nextX, nextY) {
    Human.call(this, id, x, y);
    
    this.nextX = nextX;
    this.nextY = nextY;
}

Zombie.prototype = Object.create(Human.prototype);
Zombie.prototype.constructor = Human;

Zombie.prototype.distanceToNext = function (a, b) {
    return Math.floor(Math.sqrt((a - this.nextX) * (a - this.nextX) + (b - this.nextX) * (b - this.nextY)));
}

// ---

var reachedHuman = false;

// game loop
while (true) {
    var humans, zombies;
    var cZombie, cZombieDistance = 16000;
    
    var inputs = readline().split(' '),
        x = +inputs[0],
        y = +inputs[1],
        humanCount = +readline();
        
    humans = Array(humanCount);
    
    for (var i = 0; i < humanCount; i++) {
        inputs = readline().split(' ');
        
        var humanId = +inputs[0],
            humanX = +inputs[1],
            humanY = +inputs[2];
        
        humans[humanId] = new Human(humanId, humanX, humanY);
    }
    
    humans.sort(function (a, b) {
       return a.distanceTo(x, y) - b.distanceTo(x, y); 
    });
    
    var zombieCount = +readline();
    
    zombies = Array(zombieCount);
    
    for (var i = 0; i < zombieCount; i++) {
        inputs = readline().split(' ');
        
        var zombieId = +inputs[0],
            zombieX = +inputs[1],
            zombieY = +inputs[2],
            zombieXNext = inputs[3],
            zombieYNext = inputs[4];
        
        zombies[zombieId] = new Zombie(zombieId, zombieX, zombieY, zombieXNext, zombieYNext);
    }
    
    zombies.sort(function (a, b) {
       return a.distanceTo(x, y) - b.distanceTo(x, y); 
    });
    
    humans = humans.filter(function (e) {
        for (var i = 0; i < zombies.length; i++) {
            if (zombies[i] && zombies[i].distanceTo(e.x, e.y) < 800 && e.distanceTo(x, y) > 4000) {
                return false;
            }
        }
        return true;
    });

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if (humans[0] == (x + ' ' + y)) {
        reachedHuman = true;
    }
    print(reachedHuman ? zombies[0] : humans[0]);
}