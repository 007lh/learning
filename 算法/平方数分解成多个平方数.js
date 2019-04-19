
//使用递归
function decompose(n) {
    // your code
   function pushElm(a,t) {
     if(t===0){return [a];}
     
     
     for(let i = a-1; i>0;i--) {
         if((t-i*i)>=0){
           let temp = pushElm(i,(t-i*i));
           if(temp != null){
             temp.push(i);
            // console.log(temp);
             return temp;
           }
         }
          //return null;
     }
    return null;
   }   
   //console.log("els",pushElm(n, n*n));
   let result = pushElm(n, n*n);
   result = result===null? null: result.slice(1); //slice方法针对数组，对null不能使用
   return result;
   
}
