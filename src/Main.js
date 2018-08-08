import React, { Component } from 'react'
import Bookshelves from './Bookshelves'
import SearchOpen from './SearchOpen'

class Main extends Component {
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelves
                books={this.props.books}
                bookTitleClass={this.props.bookTitleClass}
                changeShelf={this.props.changeShelf}



              />
            </div>
              <SearchOpen
                openSearch={this.props.openSearch}
              />
          </div>
        )
    }
}

export default Main