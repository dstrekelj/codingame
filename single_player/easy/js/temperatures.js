var N = +readline(),    // number of temperatures to analyse
    TEMPS = readline(); // N temperatures expressed as integers ranging from -273 to 5526

if (!TEMPS) {
    print(0);
} else {
    var temperatures = TEMPS.split(" ").map(Number),
        min = temperatures[0];

    for (var i = 1; i < temperatures.length; i++) {
        if (Math.abs(min) > Math.abs(temperatures[i])) {
            min = temperatures[i];
        }

        if (Math.abs(min) == Math.abs(temperatures[i])) {
            if (min + temperatures[i] === 0) {
                min = (min < 0) ? temperatures[i] : min;
            }
        }
    }

    print(min);
}
