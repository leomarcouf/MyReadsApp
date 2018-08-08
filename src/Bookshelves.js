import React, { Component } from 'react'
import Book from './Book'
import BookshelfTitle from './BookshelfTitle'

class Bookshelves extends Component {

	render() {
		return (
			console.log(this.props.books),
			<div>
				<div className="bookshelf">
					<BookshelfTitle
						name="Currently Reading"
						class={this.props.bookTitleClass[0]}
					/>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{/*
								* The filter method loops through the array and checks if the
								* respective book has the same .shelf-property as the currently
								* chosen shelf. The book will only be put into the array of the
								* current bookshelf with the .map()-method if the properties are
								* the same. They key for the list elment identifies the book.
								* This was implemented with the help of Maeva's study jam,
								* but I refined the filter-Method to suit my future puproses:
								* https://youtu.be/i6L2jLHV9j8
								*/}
							{
								this.props.books
									.filter(book => this.props.bookTitleClass[0].includes(book.shelf))
									.map(book => (
										<li key={book.id}>
											{/*
												* The variable "book" is defined here as an item from
												* the mapped array. The Book.js now has acces to this
												* variable.
												*/}
											<Book
												singleBook={book}
												changeShelf={this.props.changeShelf}
												currentShelf={"currentlyReading"}

											/>
										</li>
									))
							}
						</ol>
					</div>
				</div>
				<div className="bookshelf">
					<BookshelfTitle
						name="Want to Read"
						class={this.props.bookTitleClass[1]}
					/>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								this.props.books
									.filter(book => this.props.bookTitleClass[1].includes(book.shelf))
									.map(book => (
										<li key={book.id}>
											<Book
												singleBook={book}
												changeShelf={this.props.changeShelf}
												currentShelf={"wantToRead"}

											/>
										</li>
									))
							}
						</ol>
					</div>
				</div>
				<div className="bookshelf">
					<BookshelfTitle
						name="Read"
						class={this.props.bookTitleClass[2]}
					/>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								this.props.books
									.filter(book => this.props.bookTitleClass[2].includes(book.shelf))
									.map(book => (
										<li key={book.id}>
											<Book
												singleBook={book}
												changeShelf={this.props.changeShelf}
												currentShelf={"read"}

											/>
										</li>
									))
							}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default Bookshelves