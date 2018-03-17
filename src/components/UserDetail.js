import React, {Component} from 'react'

export default class UserDetail extends Component {
	render() {
		console.log(this.props)
		return (
			<div>{this.props.match.params.id}</div>
			)
	}
}