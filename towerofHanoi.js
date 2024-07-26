/**
 * move all the coins from T1 to T2 by using T3
 * coins must be stored in ascending order of diameter
 */

let count = 0;
function hanoi(n , from,to, aux) {
    
    if(n==0)
        return;
    hanoi(n-1, from, aux ,to);
    count ++;
    hanoi(n-1, aux, to, from);
}


hanoi(5, 'T1', 'T2', 'T3');
console.log(count)
