var wordCount = parseInt(readline()),
    words = [],
    letterScoring = {
        a : 1,
        b : 3,
        c : 3,
        d : 2,
        e : 1,
        f : 4,
        g : 2,
        h : 4,
        i : 1,
        j : 8,
        k : 5,
        l : 1,
        m : 3,
        n : 1,
        o : 1,
        p : 3,
        q : 10,
        r : 1,
        s : 1,
        t : 1,
        u : 1,
        v : 4,
        w : 4,
        y : 4,
        x : 8,
        z : 10
    };

function getPoints(word) {
    var sum = 0;

    word.split('').forEach(function(v) {
        sum += letterScoring[v];
    });

    return sum;
}

function wordFilter(word, letters) {
    if (word.length > 7)
        return false;
    if (word.length == 0)
        return true;

    var letter = word.shift();
    if (letters.indexOf(letter) === -1)
        return false;
    else
        letters.splice(letters.indexOf(letter), 1);

    return wordFilter(word, letters);
}

for (var i = 0; i < wordCount; i++) {
    var word = readline(),
        points = getPoints(word);
    words.push({ word : word, points : points });
}

var letters = readline().split('');

words = words.filter(function(wordObject) {
    return wordFilter(wordObject.word.split(''), letters.slice());
});

words.sort(function(wordObject1, wordObject2) {
    return wordObject2.points - wordObject1.points;
});

words.forEach(function(v) { printErr(v.word, v.points); });

print(words[0].word);
