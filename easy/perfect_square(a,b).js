
var numSquares = function(a,b) {
   return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
};

console.log(numSquares(2,20));

