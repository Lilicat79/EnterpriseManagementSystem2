import React, { useState } from 'react'

import routers from '../../utils/routes'
import { Layout, Menu, Breadcrumb } from 'antd';
import Personnel from '../Personnel/Personnel'
import { BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    Link} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainPage = ()=> {
        const [collapsed,setcollapsed] = useState(false)
        const history = useHistory()
        const [page,setPage] = useState({
            name:'人员',
            path:'/',
            component:Personnel
        })
        const onCollapse = (onCollapse)=>{
            // setcollapsed(!collapsed)
            setcollapsed(onCollapse)
        }
        const toPage = (data)=>{
            // history.push(data.path)
            setPage(data)
        }
        return (
            <div className="MainPage">
                <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={()=>onCollapse}>
                <div className="menu-top" style={{ minHeight: '6vh' }}>企业管理系统</div>
                <Menu theme="dark" defaultSelectedKeys={['0']}  mode="inline">
                    {
                        routers.map((item,index)=>{
                            return(
                                <Menu.Item key={index} onClick={()=>toPage(item)}>
                                   <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                    {/* <Menu.Item key="1" >
                    Option 1
                    </Menu.Item>
                    <Menu.Item key="2" >
                    Option 2
                    </Menu.Item>
                    <SubMenu key="sub1"title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9"  /> */}
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
             
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    
                        <Switch>
                        {/* <Route path="/" component={Personnel}></Route> */}
                                {
                                    routers.map((item,index)=>{
                                        return(
                                            <Route key={index} path={item.path} component={item.component}></Route>
                                        )
                                    })
                                }
                            <Route path="/" component={Personnel}></Route>
                        </Switch>
                   
                    </div>
                </Content>

                </Layout>
            </Layout>
        </div>
        )
    
}
export default MainPage;
