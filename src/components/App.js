import { Layout, Menu} from 'antd';
import React from 'react'
import Home from './Home'
import User from './User'
import Profile from './Profile'
import {
	BrowserRouter as Router, //容器
	Route, // 一条路由
	Link,
	Switch //从上之下匹配 配到就终止
} from 'react-router-dom'
const { Header, Content, Footer} = Layout;

export default (
	<Router>
		<Layout>
	    <Header className="header">
	      <div className="logo" style={
	      	{    
	      		width: 120,
    				height: 31,
				    background: "rgba(255,255,255,.2)",
				    margin: "16px 58px 16px 0",
				    float: "left"
				  }
				}/>
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={['2']}
	        style={{ lineHeight: '64px' }}
	      >
	        <Menu.Item key="1">
	        	<Link to="/home">首页</Link>
	        </Menu.Item>
	        <Menu.Item key="2">
	        	<Link to="/user">用户</Link>
	        </Menu.Item>
	        <Menu.Item key="3">
						<Link to="/profile">用户信息</Link>
	        </Menu.Item>
	      </Menu>
	    </Header>
	    <Content style={{ padding: '0 50px' }}>
	      <Layout style={{ padding: '24px 0', background: '#fff' }}>
	      <Switch>
          <Route path="/Profile" component={Profile}/>
					<Route path="/home" component={Home}/>
					<Route path="/User" component={User}/>
        	<Route path="/:name" render={props => <div>{props.match.params.name}</div>} />
	      </Switch>
	      </Layout>
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>
	      Ant Design ©2016 Created by Ant UED
	    </Footer>
	  </Layout>
	</Router>
)