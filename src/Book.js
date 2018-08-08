import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

	render() {
		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.singleBook.imageLinks.smallThumbnail}")` }}></div>
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