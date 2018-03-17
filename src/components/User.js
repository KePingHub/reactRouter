import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'
const {Sider, Content} = Layout;

export default class User extends Component{
	render() {
		return (
			<Layout style={{ padding: '24px 0', background: '#fff' }}>
				<Sider width={200} style={{ background: '#fff' }}>
	        <Menu
	          mode="inline"
	          defaultSelectedKeys={['1']}
	          style={{ height: '100%' }}
	        >
	          <Menu.Item key="1">
	          	<Link to="/user/list"><Icon type="user" />用户列表</Link>
	          </Menu.Item>
	          <Menu.Item key="2">
	          	<Link to="/user/add"><Icon type="laptop" />新增用户</Link>
	          </Menu.Item>
	        </Menu>
	      </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Route path="/user/list" component={UserList}/>
					<Route path="/user/add" component={UserAdd}/>
					<Route path="/user/detail/:id" component={UserDetail}/>
        </Content>
      </Layout>
			)
	}
}