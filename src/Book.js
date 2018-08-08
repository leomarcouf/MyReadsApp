import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

	render() {

		/*
		 * If an image link exists as a property of the single searched book,
		 * the image shows up. Else there is no image.
		 */
		let shownThumbnail = this.props.singleBook.imageLinks;
		if (shownThumbnail) {
			shownThumbnail = this.props.singleBook.imageLinks.smallThumbnail
		} else {
			shownThumbnail = ''
		}

		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${shownThumbnail}")` }}></div>
					<BookshelfChanger
						singleBook={this.props.singleBook}
						changeShelf={this.props.changeShelf}
						selectedShelf={this.props.selectedShelf}
					/>
				</div>
				<div className="book-title">{this.props.singleBook.title}</div>
				<div className="book-authors">{this.props.singleBook.authors}</div>
			</div>
		)
	}
}

export default Book