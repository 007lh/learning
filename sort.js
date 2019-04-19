
//不区分大小写 仅排列字母从小到大的顺序
var arr1=['B','a','b','A'];
arr1.sort(function(a,b){
    if(a.toString().toLowerCase()>b.toString().toLowerCase())
        return 1;
    return -1;
})
console.log(arr1);//["a", "A", "B", "b"]



数组随机排列
arr.sort(function(){ 
						return Math.random() - 0.5;
					})
