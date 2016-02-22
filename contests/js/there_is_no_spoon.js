/**
 * DURATION:    3h 3min 56s
 * COMPLETION:  50%
 * POSITION:    816 / 1628
 */

 /**
  * Matrix transpose function credited to stackoverflow user troynt
  * http://stackoverflow.com/a/4492703
  */
 transpose = function(a) {

   // Calculate the width and height of the Array
   var w = a.length ? a.length : 0,
     h = a[0] instanceof Array ? a[0].length : 0;

   // In case it is a zero matrix, no transpose routine needed.
   if(h === 0 || w === 0) { return []; }

   /**
    * @var {Number} i Counter
    * @var {Number} j Counter
    * @var {Array} t Transposed data is stored in this array.
    */
   var i, j, t = [];

   // Loop through every item in the outer array (height)
   for(i=0; i<h; i++) {

     // Insert a new row (array)
     t[i] = [];

     // Loop through every item per item in outer array (width)
     for(j=0; j<w; j++) {

       // Save transposed data.
       t[i][j] = a[j][i];
     }
   }

   return t;
 };

 function find(Sequence, Start, Limit) {
     if (typeof Sequence != 'undefined') {
         for (var i = Start; i < Limit; i++) {
             //printErr('searching... ' + i);
             if (Sequence[i] != '.') {
                 printErr('found... ' + i);
                 return i;
             }
         }
     }

     return -1;
 };

 var width = parseInt(readline()),
     height = parseInt(readline()),
     matrix = new Array(),
     x1 = 0,
     y1 = 0,
     x2 = 0,
     y2 = 0,
     x3 = 0,
     y3 = 0;

 for (var i = 0; i < height; i++) {
     var line = readline().split('');
     matrix.push(line);
 }

 var tmatrix = transpose(matrix);

 for (var i = 0; i < height; i++) {
     for (var j = 0; j < width; j++) {
         //printErr('j,i ' + j + ',' + i);
         //printErr('x1');
         x1 = find(matrix[i], j, width);
         if (x1 !== -1) {
             if (y1 !== -1) {
                 j = x1;
                 //printErr('y1');
                 y1 = find(tmatrix[j], i, height);
                 if (y1 !== -1) {
                     //printErr('current ' + x1 + ',' + y1);
                     x2 = find(matrix[i], x1+1, width);
                     y2 = y1;
                     //printErr('right ' + x2 + ',' + y2);
                     x3 = x1;
                     y3 = find(tmatrix[j], y1+1, height);
                     //printErr('bottom ' + x3 + ',' + y3);
                     print(x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + x3 + ' ' + y3);
                     //printErr('---');
                 }
             }
         }
     }
 }
