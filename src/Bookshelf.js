import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

	state = {
		bookshelfTitle: [
			{ title: "Currently Reading",
				className: "currentlyReading"
			},
			{ title: "Want to Read",
				className: "wantToRead"
			},
			{ title: "Read",
				className: "read"
			}
		]
	}

	render() {
		return (
			console.log(this.props.books),
			<div>
				<div className="bookshelf">
					<h2 className={`bookshelf-title ${this.state.bookshelfTitle[0].className}`}>{this.state.bookshelfTitle[0].title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{/*
								* The filter method loops through the array and checks if the
								* respective book has the same .shelf-property as the currently
								* chosen shelf. The book will only be put into the array of the
								* current bookshelf with the .map()-method if the properties are
								* the same. They key for the list elment identifies the book.
								* This was implemented with the help of Maeva's study jam:
								* https://youtu.be/i6L2jLHV9j8
								*/}
							{
								this.props.books
									.filter(book => book.shelf === 'currentlyReading')
									.map(book => (
										<li key={book.id}>
											{/*
												* The variable "book" is defined here as an item from
												* the mapped array. The Book.js now has acces to this
												* variable.
												*/}
											<Book
												singleBook={book}
											/>
										</li>
									))
							}
						</ol>
					</div>
				</div>
				<div className="bookshelf">
					<h2 className={`bookshelf-title ${this.state.bookshelfTitle[1].className}`}>{this.state.bookshelfTitle[1].title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								this.props.books
									.filter(book => book.shelf === 'wantToRead')
									.map(book => (
										<li key={book.id}>
											{/*
												* The variable "book" is defined here as an item from
												* the mapped array. The Book.js now has acces to this
												* variable.
												*/}
											<Book
												singleBook={book}
											/>
										</li>
									))
							}
						</ol>
					</div>
				</div>
				<div className="bookshelf">
					<h2 className={`bookshelf-title ${this.state.bookshelfTitle[2].className}`}>{this.state.bookshelfTitle[2].title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								this.props.books
									.filter(book => book.shelf === 'read')
									.map(book => (
										<li key={book.id}>
											{/*
												* The variable "book" is defined here as an item from
												* the mapped array. The Book.js now has acces to this
												* variable.
												*/}
											<Book
												singleBook={book}
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

export default Bookshelf