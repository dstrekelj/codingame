var N = +readline(),    // Number of horses
    P = [], // Horse strength array
    D = 0;  // Difference between two closest strengths

// Push all horse strengths to array
for (var i = 0; i < N; i++) {
    P.push(+readline());
}

// Sort strength array in ascending order
P.sort(function(a, b) {return a - b;});
// Take strength difference of first two horses as starting point
D = P[1] - P[0];
// Find the strength difference between two closest strengths
for (var i = 2; i < N; i++) {
    var T = P[i] - P[i - 1];
    if (T < D) D = T;
}
// Print difference between two closest strengths
print(D);