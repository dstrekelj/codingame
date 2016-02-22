var Batman = function (x, y, w, h)
{
    this.x = x;         // Batman's horizontal position
    this.y = y;         // Batman's vertical position
    this.up = 0;        // Topmost position
    this.down = h - 1;  // Downmost position
    this.left = 0;      // Leftmost position
    this.right = w - 1; // Rightmost position

    /**
     * When moving, set Batman's current position as
     * a boundary, then calculate the halfway point.
     */

    this.U = function ()
    {
        this.down = this.y;
        this.y -= Math.round((this.y - this.up) / 2);
    }

    this.D = function ()
    {
        this.up = this.y;
        this.y += Math.round((this.down - this.y) / 2);
    }

    this.L = function ()
    {
        this.right = this.x;
        this.x -= Math.round((this.x - this.left) / 2);
    }

    this.R = function ()
    {
        this.left = this.x;
        this.x += Math.round((this.right - this.x) / 2);
    }
}

var inputWH =   readline().split(' '),
    inputN =    readline(),
    inputXY =   readline().split(' '),
    W =         parseInt(inputWH[0]),       // Width of building (number of windows, horizontally)
    H =         parseInt(inputWH[1]),       // Height of building (number of windows, vertically)
    N =         parseInt(inputN),           // Number of jumps
    X0 =        parseInt(inputXY[0]),       // Starting position, horizontal
    Y0 =        parseInt(inputXY[1]),       // Starting position, vertical
    batman =    new Batman(X0, Y0, W, H)
;

while (true)
{
    var BOMB_DIR = readline();    // Current direction of bomb (U, UR, R, DR, D, DL, L, UL)

    if (BOMB_DIR.length == 1)
    {
        batman[BOMB_DIR]();
    }
    else
    {
        batman[BOMB_DIR[0]]();
        batman[BOMB_DIR[1]]();
    }

    print(batman.x + ' ' + batman.y);
}
