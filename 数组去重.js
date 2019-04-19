//es6 Set
Array.from(new Set(arr));//arr 只去重的数组

//除此之外可用 indexOf()

//
function unique(arr){
  var res=[];
  if(arr.length>0){res.push(arr[0])};
  
  for(var i=1;i<arr.length;i++){
    var repeat = false;
    for(var j=0;j<res.length;j++){
      if(res[j]===arr[i]){
        repeat = true;
        break;
      }
      
    }
    if(repeat===false){
        res.push(arr[i]);
      }
  }
  return res;
}

var test = [1, 2, 2, 10, '1','2', 'a', 'a', 'b', '@', '@'];

console.log(unique(test));




//利用对象属性

function unique(arr){
  var j={};
  var res=[];
  for(var i=0;i<arr.length;i++){
    if(!j[arr[i]]){
      res.push(arr[i]);
      j[arr[i]]=1;
    }
  }
  return res;
}