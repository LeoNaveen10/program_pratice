//0,1,1,2,3,5,8,13,18

function fibo(n) {
	if (n <= 1) return n;
	return fibo(n - 1) + fibo(n - 2);
}

/***
 *    fibo(2) +                              fibo(3)   ---> 3
 *
 *  fibo(0) + fibo(1) --> 1      fibo(1) +               fibo(2) --> 2
 *
 *                                                fibo(0) + fibo(1) --> 1
 */
console.log(fibo(4));


//print fibo series

function printFibo(n){

    let c, a =0 , b=1;
    console.log(a , b);
    for(let i=2;i<n;i++){
       [a,b] = [b, a+b]; //swap
    //    console.log(a+b);
    }
}

printFibo(4);


/**
 * 
 *                                  4(4)
 *      
 *                       3(2)           2(1)                   1(0)
 *              2(1)   1(1)    0          1   0 -1            0   -1  -2
 *          
 */
var tribonacci = function(n) {
    // if(n<0)
    // return 0;
    // if(n<=1)
    //     return n; 
    // return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);

    let arr = [n];
    arr[0] =0; arr[1] =1 ; arr[2] = 1;
    for(let i=3;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }
    return arr[n];

};

console.log(tribonacci(4));