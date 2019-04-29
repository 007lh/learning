//
import React from 'react';
import {Link} from 'react-router-dom';
class TaskItem extends React.Component{

    render(){
        let data = this.props.task;
        let path = {
            pathname:'/task',
            state:data//要传递的数据
        };
        return (
            <div>
                <div className="item">
                    <div>
                        <Link to={path}><p style={{'fontSize': '20px'}}>{this.props.name}</p></Link>
                         //Link实现跳转，同时传递数据
                        <p>简介：{this.props.intro}</p>
                    </div>
                </div>
            </div>

        )
    }
}


//
import React from 'react';
class TaskDetail extends React.Component {
    render() {
        let data = this.props.location.state;  
        //data存放传递过来的参数
        let {task_id, task_name, task_maker, task_introduction, task_time, count} = data;
        //对象解构赋值
        return (
            <div>
                <div id="taskDetail">
                    <div className="author">
                        <img id="img" src="../images/photo.jpg"/>
                        <div className="name">
                            <a>创建人：{task_maker}</a>
                        </div>
                    </div>
                    <div>
                        <p style={{'fontSize': '20px'}}>任务名称：{task_name}</p>
                        <span>创建时间：{task_time}</span>
                        <span>参与人数：{count}</span>
                        <p>简介：{task_introduction}</p>
                        <button>修改</button>
                    </div>
                </div>
            </div>
        )
    }
}
