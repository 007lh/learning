//算法
//Square into Squares. Protect trees!
//decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.
//For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.
//一个递归的好列子
function decompose(n) {
    // your code
    function digui(a,b){
      if(b===0){return [a]}
      for(let i=a-1;i>0;i--){
        if((b-i*i)>=0){
          let temp = digui(i,b-i*i);
          if(temp != null){
            temp.push(a);
            return temp;
          }
        }
      }
      return null;
    }
    let reslute = digui(n,n*n);
    return reslute==null?null:reslute.slice(0,reslute.length-1);
}




//The number u(0) = 1 is the first one in u.
//For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//There are no other numbers in u.
//Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//找出数组的第n+1个数

//解题思路需要找到一个程序结束点；把两条路归到一条上也就是下面的 arr。

function dblLinear(n) {
    // your code
	let arr=[1];
	let ykey=0,zkey=0;
	while(arr.length<=n){
		y = arr[ykey]*2+1;
		z = arr[zkey]*3+1;
		if(y>z){
			arr.push(z);
			zkey++;
		}else if(y<z){
			arr.push(y);
			ykey++;
		}else{
			arr.push(y);
			ykey++;
			zkey++;
		}
	}
	return arr[n];
}



//Product of consecutive Fib numbers
/*
productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false], 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
*/
function productFib(prod){
  // ...
  var farr=[0,1],res=[];
  var i=1;
  while(i>0){
    let temp = farr[i-1] * farr[i];
    if(temp<prod){
      farr[i+1] = farr[i-1] + farr[i];
      i++;
    }else if(temp>prod){
      res.push(farr[i-1], farr[i], false);
      return res;
    }else{
      res.push(farr[i-1], farr[i], true);
      return res;
    }
  }
}

//好方法
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}