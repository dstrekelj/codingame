var L = +readline(),
    H = +readline(),
    T = readline(),
    ROW = [];

for (var i = 0; i < H; i++) {
    ROW.push(readline());
}

var alphabet = new Map(),
    exp = new RegExp('.{1,' + L + '}', 'g');

for (var j = 0; j < 27; j++) {
    var letter = [];
    
    for (var i = 0; i < H; i++)
    {
        var letterRow = ROW[i].match(exp);
        letter.push(letterRow[j]);
    }
    
    alphabet.set(j, letter);
}

var character = T.toUpperCase().split(''),
    out = new Array(H);

for (var i = 0; i < H; i++) {
    out[i] = [];
}

for (var i = 0; i < character.length; i++) {
    var index = character[i].charCodeAt(0) - 65;
    
    if (index >= 0 && index < 26) {
        c = alphabet.get(index);
    } else {
        c = alphabet.get(26);
    }
    
    for (var j = 0; j < H; j++) {
        out[j].push(c[j]);
    }
}

for (var i = 0; i < H; i++) {
    print(out[i].join(''));
}