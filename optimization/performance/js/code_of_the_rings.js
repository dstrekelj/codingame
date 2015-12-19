/**
 * Instructions: 5902
 * Rank 369 / 993 (as of December 2015)
 */

function getCode(Character) {
    return (Character == " ") ? 0 : (Character.charCodeAt(0) - 64);
};

function findShortestDistance(From, To, OutOf) {
    if (typeof From == 'string' && typeof To == 'string') {
        var fromLeft = getCode(From) - getCode(To),
            fromRight = getCode(To) - getCode(From);
    } else {
        var fromLeft = From - To,
            fromRight = To - From;
    }
    
    if (fromLeft < 0) fromLeft += OutOf;
    if (fromRight < 0) fromRight += OutOf;
    
    return (fromLeft < fromRight) ? -fromLeft : fromRight;
};

function findCostPerZone(Zones, To) {
    var zoneCosts = [];
    
    for (var n = 0; n < NUMBER_OF_ZONES; n++) {
        zoneCosts[n] = findShortestDistance(Zones[n], To, NUMBER_OF_LETTERS);
    }
    
    return zoneCosts;
};

function findCheapest(Zones, CurrentZone, To) {
    var zoneCosts = findCostPerZone(Zones, To),
        cheapest = Math.abs(zoneCosts[CurrentZone])
        distance = 0,
        zone = CurrentZone;
    
    for (var n = 0; n < NUMBER_OF_ZONES; n++) {
        var d = findShortestDistance(CurrentZone, n, NUMBER_OF_ZONES);
        
        if (Math.abs(zoneCosts[n]) + Math.abs(d) < cheapest) {
            cheapest = Math.abs(Math.abs(zoneCosts[n]) + Math.abs(d));
            distance = d;
            zone = n;
        }
    }
    
    return { cost : zoneCosts[zone], distance : distance, zone : zone };
};

var NUMBER_OF_LETTERS = 27,
    NUMBER_OF_ZONES = 30;

var phrase = readline(),
    p = 0,
    zones = function() { var a = [], size = NUMBER_OF_ZONES; while (size--) { a[size] = " "; }; return a; }(),
    z = 0,
    oldLetter = " ",
    newLetter,
    instructions = [],
    path,
    n;

var oneLetter = new RegExp(/\b([A-Z])\1{25,}\b/);

if (phrase.match(oneLetter)) {
    var cost = findShortestDistance(zones[z], phrase, NUMBER_OF_LETTERS);
    var whole = Math.floor(phrase.length / 26);
    var leftover = phrase.length - whole * 26;
    
    for (n = 0; n < Math.abs(cost); n++) {
        instructions.push((cost < 0) ? '-' : '+');
    }
    
    instructions.push('>');
    
    for (n = 0; n < whole; n++) {
        instructions.push('-[<.>-]')
    }
    
    instructions.push('<');
    
    for (n = 0; n < leftover; n++) {
        instructions.push('.');
    }
} else {
    while (phrase[p]) {
        newLetter = phrase[p++];
        
        path = findCheapest(zones, z, newLetter);
        
        if (zones[path.zone] == ' ' && zones[z] != ' ' && Math.abs(path.distance) > 3) {
            instructions.push('[' + (path.distance < 0 ? '<' : '>') + ']')
        } else {
            for (n = 0; n < Math.abs(path.distance); n++) {
                instructions.push((path.distance < 0) ? '<' : '>');
            }
        }
        
        for (n = 0; n < Math.abs(path.cost); n++) {
            instructions.push((path.cost) < 0 ? '-' : '+');
        }
        
        instructions.push('.');
        
        z = path.zone;
        zones[z] = newLetter;
    }
}

print(instructions.join(""));