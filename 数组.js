//js 数组问题
//使用push函数返回值是传进去多少个参数
let arr = [].push("1",2,5) //arr = 3;而不是数组

//[].map(函数方法不是运行函数)

Array.map(callback);
['1', '2'].map(str => parseInt(str));
//or
['1', '2'].map(Number);
//效果一样



//customers每位顾客等的时间，  n是有多少个收银台
//fill数值的每一位替换
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w)); //math.min 在 ECMASCript v3 之前，该方法只有两个参数。
    w[idx] += t;
  }
  return Math.max(...w);
}



//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
var maxSequence = function(arr){
  // ...
  let res=0;
  if(arr.length<1){return 0;}
  for(let i=0;i<arr.length;i++){
    let temp = 0;
    if(arr[i]>0){
      for(let j=i;j<arr.length;j++){
        temp += arr[j];
        if(res<temp){res = temp;}
      }
    }
  }
  return res;
}
//别人的解决方案
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}


//数组组合排列
var data = ['a','b','c','d'];
 
function getGroup(data, index = 0, group = []) {
	var need_apply = new Array();
	need_apply.push(data[index]);
	for(var i = 0; i < group.length; i++) {
		need_apply.push(group[i] + data[index]);
	}
	group.push.apply(group, need_apply);
 
	if(index + 1 >= data.length) return group;
	else return getGroup(data, index + 1, group);
}


//Next smaller number with the same digits
function nextSmaller(n) {
  let temp = n.toString().split(""),res=-1;
  let index=-1;
  for(let i=temp.length-1;i>0;i--){
    if(temp[i]<temp[i-1]){
      index = i;
      break;
    }
  }
  if(index===-1){return -1;}
  res = temp.slice(0,index-1).join("");
   if(res[0]==0){return -1;}
  
  let resnext = temp.slice(index-1,temp.length);
  let maxnum=-1;
  for(let j=1;j<resnext.length;j++){
    if(resnext[0]>resnext[j]){
      maxnum = Math.max(maxnum,resnext[j]);
    }
  }
  if(maxnum===-1){return -1;}
  res+=maxnum;
  resnext.splice(resnext.indexOf(maxnum+""),1);
  resnext = resnext.sort((a,b)=>{return b-a})
  resnext= resnext.join("");
  res+=resnext;
   if(res[0]==0){return -1;}
  return parseInt(res);
}
//another
const nextSmaller = n => {
  let min = minify(n);
  while (--n >= min) if (minify(n) === min) return n;
  return -1;
};

const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');

