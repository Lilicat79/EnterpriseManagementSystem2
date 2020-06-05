import React, { useState } from 'react'
import './Personnel.scss'
import PersonInfo from './PersonInfo'
import PersonList from './PersonList'
import { useHistory,BrowserRouter as Router,
    Route,
    Switch, } from 'react-router-dom'

const Personnel = ()=> {
    const person = [{
        name:'lili',
        email:'1231414414@qq.com'
    }]
    const history = useHistory()

    const getInfo = ()=>{
        history.push('/Personnel/PersonInfo')
    }
    const [InputValue,setInputValue] = useState('')
        return (
            <div className="Personnel">
            
                <Router>
                    <Switch>
                        
                        <Route  path='/Personnel/PersonList' component={PersonList}></Route>
                        <Route  path='/Personnel/PersonInfo' component={PersonInfo}></Route>
                        <Route  path='/' component={PersonList}></Route>
                    </Switch>
                </Router>
            </div>
        )
    
}
export default Personnel;
