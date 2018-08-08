import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Main from './Main'
import SearchPage from './SearchPage'

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
        <Route exact path="/" render={() => (
          <Main
            books={this.state.books}
            bookTitleClass={this.state.bookTitleClass}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            changeShelf={this.changeShelf}
            singleBook={this.props.singleBook}

          />
        )}/>
      </div>
    )
  }
}

export default BooksApp