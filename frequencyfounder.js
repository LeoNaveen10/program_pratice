function repeatedString(s, n) {
    // Write your code here
    let len = s.length;
    if(len == 0) return 0;
    if(len ==1 ){
        if(s[0] == 'a') return n;
        else return 0;
    }
    let count = 0;
    
    if(n<len){
        for(let i =0 ;i< n;i++)
            s[i] == 'a' && count++;
        return count;
    }
    
    if(n>=len){
       for(let i=0;i<len;i++)
           s[i] == 'a' && count++;
     
        if(n==len) return count;
        if(count ==0) return count;
        
        let multiplier = Math.floor(n/len);
        count= multiplier* count;
        
          for(let i=0;i<n%len;i++)
           s[i] == 'a' && count++;
     
     return count;
    }
    
    

}

console.log(repeatedString('ababa',3));



function jumpingOnClouds(c) {
    // Write your code here
    
    let count = 0,len = c.length;
    
    for(let i=0;i<len;i++){

        if(i==len-1) break;
        if(i+2<=len-1 &&  c[i+2] == 0 ){
            console.log(`if - ${i} -- ${count}`);
            i++;
            count++;
        }else{
            console.log(`else - ${i} - ${count}`);
            count++;
        }
    }
    
    return count;

}

console.log(jumpingOnClouds([0,0,0,1,0,0]));