import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Login.scss'
const Login =()=>{
    const history = useHistory()
    const toLogin = ()=>{
        console.log(12222)
        history.push('/MainPage')
    }
    return(
        <div className="Login">
            <div className="loginContent">
                <div className="title">企业管理系统</div>
                <div className="toLogin">
                    <div className="userInput">
                            <label>用户名</label>
                            <input></input>
                    </div>
                    <div className="pwdInput">
                            <label>密码</label>
                            <input></input>
                    </div>
                    <div>注册</div>
                    <button onClick={()=>toLogin()}>登录</button>
                </div>
            </div>
        </div>
    )
}
export default Login;