//setState就相当于是一个异步操作，不能立即被修改
constructor(){
	super();
	this.state={btnstatus: false};
}
changestate(){
	this.setState({btnstatus:true});
	console.log(this.state.btnstatus);  //false  ,有可能
}



//解决方法：
//1、第一个参数是一个对象，第二个参数是一个回调函数，这个回调函数是在setstate执行完并页面渲染了之后再执行
changestate(){
	this.setState({btnstatus:true},()=>{
		console.log(this.state.btnstatus);
	});
	  
}

//2、异步语法
async changestate(){
	await this.setState({btnstatus:true});
	console.log(this.state.btnstatus);
	  
}