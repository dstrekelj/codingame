var N = +readline(); // Number of elements which make up the association table.
var Q = +readline(); // Number Q of file names to be analyzed.
var TYPES = new Map();

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    TYPES.set(EXT, MT);
}

for (var i = 0; i < Q; i++) {
    var FNAME = readline().toLowerCase();

    if (FNAME.contains('.')) {
        var name = FNAME.split('.');

        var extension = name[name.length - 1];
        printErr('error ' + extension);

        print((TYPES.has(extension)) ? TYPES.get(extension) : 'UNKNOWN');
    } else {
        print('UNKNOWN');
    }
}
