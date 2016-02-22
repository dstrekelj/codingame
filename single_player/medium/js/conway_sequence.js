var R = readline(),
    L = parseInt(readline());

function conway(Base, Lines) {
    if (Lines == 0) return Base;

    var numbers = Base.split(' '),
        b = '',
        t = numbers[0],
        c = 0;

    numbers.forEach(function(v, i, a) {
        if (t != ' ' && t != v) {
            b += c + ' ' + t + ' ';
            t = v;
            c = 1;
        } else {
            c += 1;
        }
    });

    b += c + ' ' + t;
    Lines -= 1;

    return (Lines > 0) ? conway(b, Lines) : b;
};

print(conway(R, L-1));
