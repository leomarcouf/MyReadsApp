import React, { Component } from 'react'

class BookshelfTitle extends Component {

	state = {
		bookshelfTitle: [
			{ title: "Currently Reading",
				className: "currentlyReading",
				index: 0
			},
			{ title: "Want to Read",
				className: "wantToRead",
				index: 1
			},
			{ title: "Read",
				className: "read",
				index: 2
			}
		]
	}

	render() {
		return(
			<h2 className={`bookshelf-title ${this.state.bookshelfTitle[0].className}`}>{this.state.bookshelfTitle[0].title}</h2>
		)
	}
}

export default BookshelfTitle