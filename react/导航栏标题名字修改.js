
//一般是首页，不是通过路由跳转过来的，而是直接从浏览器中输入地址打开的，如果不使用withRouter此组件的this.props为空，
//没法执行props中的history、location、match等方法。
//这样写便于代码的维护


import React,{Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter} from  'react-router-dom'
import One from './One'
import NotFound from './NotFound'
class App extends Component{
        constructor(props){
                super(props);
                props.history.listen((location)=>{  //在这里监听location对象
                        console.log(location.pathname);  //切换路由的时候输出"/one/users"和"/one/companies"
                        switch(location.pathname){   //根据路径不同切换不同的浏览器title
                                case '/one/users' : document.title = '用户列表'; break;
                                case '/one/companies' : document.title = '公司列表'; break;
                                default : break;
                        }
                })
        }
        render(){
                return (<div className='app'>
                        <NavLink to='/one/users'>用户列表</NavLink>
                        <NavLink to='/one/companies'>公司列表</NavLink>
                        <Switch>
                                <Route path='/one/:type?'  component={One} />
                                <Redirect from='/' to='/one' exact />
                                <Route component={NotFound} />
                        </Switch>
                </div>)
        }
}
export default withRouter(App);