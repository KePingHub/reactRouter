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

export default class UserModel {
	constructor() {
		this.STORE_KEY = 'UserData'
		this.userData = localStorage.getItem(this.STORE_KEY) ? JSON.parse(localStorage.getItem(this.STORE_KEY)) : data
		
		// 注册监听器，当模型数据发生变化之后会调用这些监听函数
		this.listeners = []
	}

	// 订阅 on(type, listener); emit
	subscribe(listener) {
		this.listeners.push(listener)
	}

	emit() {
		this.listeners.forEach(listener => listener())
	}

	notify(UserData) {
		localStorage.setItem(this.STORE_KEY, JSON.stringify(UserData))
		this.UserData = UserData
		this.emit()
	}
}