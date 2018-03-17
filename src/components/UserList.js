import React, {Component} from 'react'
import { Table } from 'antd';
import {withRouter} from 'react-router'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Age',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];

class UserList extends Component {
	render() {
		return (
			<Table 
				onRow={record => {
					return {
						onClick: () => {
							this.props.history.push("/user/detail/"+record.key)
						}
					}
				}}
				columns={columns} 
				dataSource={data}
			/>
			)
	}
}
export default withRouter(UserList)