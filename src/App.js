import React, { Component } from 'react'
import Main from './Main'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    bookTitleClass: ["bookshelf-title currentlyReading", "bookshelf-title wantToRead", "bookshelf-title read"]
  }

  /**
   * Fetch all books from the BooksAPI asynchronously.
   */
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  openSearch = () => {
    this.setState({ showSearchPage: true })
  }

  /**
   * The following Method to update the shelf is a simplified variation of
   * the method from Maeva's study jam: https://youtu.be/i6L2jLHV9j8 
   * 1:21:00 - 1:35:00. It helped me to understand how a click event should
   * be handled, but my version of the method itself is a bit simpler.
   * My project contains more components than Maeva's example and the inheritance
   * is thus more complex. It was difficult to find out how the inheritance
   * works and which prop/method I have to hand to which component. I learned
   * a lot through this implementation! The method updates the chosen Book and
   * puts it on the selected shelf. this.componentDidMount() is called to
   * give a live update of the bookshelf.
   */
  changeShelf = (chosenBook, targetShelf) => {
    BooksAPI.update(chosenBook, targetShelf);
    this.componentDidMount()
  }

  render() {
    return (
      console.log(this.state.books),
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Main
            books={this.state.books}
            openSearch={this.openSearch.bind(this)}
            bookTitleClass={this.state.bookTitleClass}
            changeShelf={this.changeShelf}
          />
        )}
      </div>
    )
  }
}

export default BooksApp