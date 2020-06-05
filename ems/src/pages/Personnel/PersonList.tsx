import React, { useState } from 'react';
import { Input ,Button} from 'antd'
import { useHistory,BrowserRouter as Router,
    Route,
    Switch, } from 'react-router-dom'
const PersonList = ()=> {
    const [InputValue,setInputValue] = useState('')
    const history = useHistory()
    const clearInput = ()=>{
        setInputValue('')
        // console.log(1111)
    }

    const person = [{
        name:'lili',
        email:'1231414414@qq.com'
    }]
    const changeInput = (e)=>{
        setInputValue(e.target.value)
        // console.log(1111)
    }
    const toInfo = ()=>{
        history.push('/Personnel/PersonInfo')
    }
        return (
            <div>
                 <div className="Personnel-header">
                    <div className="header-title">
                        全部用户
                    </div>
                    <div className="header-search">
                        <input value={InputValue} onChange={(e)=>changeInput(e)}></input>
                        <Button type='primary'>搜索</Button>
                        <Button onClick={()=>clearInput()}>清除</Button>
                    </div>
                </div>
                <div>
                    {person.map(item=>{

                            return(
                                <div onClick={()=>toInfo()}>{item.name}</div>
                            )
                    })}
                </div>
            </div>
        );
    }


export default PersonList;