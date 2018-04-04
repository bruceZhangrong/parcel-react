import React from 'react'
import ReactDom from 'react-dom'

class HelloMessage extends React.Component {
	render() {
		return (
			<div>Hello { this.props.name }</div>
		)
	}
}

let mountNode = document.getElementById('app')
ReactDom.render(<HelloMessage name='Tom'/>, mountNode)