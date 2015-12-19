/**
 * This needs to be revisited because I toyed around with
 * it for the optimization challenge.
 */

I = readline().split(' ');

for (;;) {
    X = I[2] - I[0];
    Y = I[3] - I[1];
    print((Y < 0 ? I[3]++ >= 18 ? '' : 'S' : Y > 0 ? I[3]-- < 0 ? '' : 'N' : '') + (X < 0 ? I[2]++ >= 40 ? '' : 'E' : X > 0 ? I[2]-- < 0 ? '' : 'W' : ''));
}