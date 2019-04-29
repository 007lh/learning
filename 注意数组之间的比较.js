alert([1,2,3].toString()== [3,2,1].toString());   //flase
alert([1,2,3].sort().toString()== [3,2,1].sort().toString());  //true

//比较对象和数组，引用类型不能直接比较
//copy引用类型，可以了解浅度拷贝与深度拷贝