import React, { Component } from 'react'

class BookshelfChanger extends Component {

	render() {
		return(
			<div className="book-shelf-changer">
				{/**
				 * The applied changeShelf()-method to update the shelf is a
				 * simplified variation of the code from Maeva's study jam,
				 * https://youtu.be/i6L2jLHV9j8 - time: 1:21:00 - 1:35:00.
				 * For further informaton about the implementation of this method, read the
				 * according commentary in the App.js file.
				 */}
				<select
					onChange={(event) => this.props.changeShelf(
						this.props.singleBook, event.target.value
					)}
					value={this.props.selectedShelf}

				>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default BookshelfChanger