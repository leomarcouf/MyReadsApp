import React, { Component } from 'react'

class BookshelfTitle extends Component {
	render() {
		return (
			<h2 className={this.props.class}>{this.props.name}</h2>
		)
	}
}

export default BookshelfTitle;