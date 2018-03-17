import React from 'react'
import ReactDOM from 'react-dom'
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'

function Root() {
	return <h1>Root</h1>
}

function Home() {
	return <h1>Home</h1>
}
function User() {
	return <h1>User</h1>
}
ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={Root}/>
			<Route path="/home" component={Home}/>
			<Route path="/User" component={User}/>
		</div>
	</Router>,
	document.querySelector('#root'))