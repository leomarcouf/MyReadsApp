import React, { Component } from 'react'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {

    /*
      * The implementation of the search function was done with the help of the
      * Udacity lesson on controlled components
      * https://classroom.udacity.com/nanodegrees/nd001/parts/c3e7b0d6-ffef-4421-b5fc-6df10fd0a1ae/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/14331e60-a548-4cfb-a326-054545da8927/concepts/fc3f11d3-8779-4d8a-8a23-1cd782f8ddf3
      * as well as Maeva's study jam (time: 1:50:00 - 2:05:00) at https://youtu.be/i6L2jLHV9j8
      * The state contains a query property that is empty and will contain the string
      * that the user types into the search field. The searched Books are an empty
      * array that is updated with the updateSearchedBooks-method.
      */
    state = {
        query: '',
        searchedBooks: []
    }

    /*
     * When the user types his search into the input field,
     * this updates the input field and the array of the
     * searched books.
     */
    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateSearchedBooks(query);
    }
    
    /*
     * If there is a query, because the user types something into the input field,
     * the searched books are fetched from the BooksAPI and the state of the
     * searchedBooks-array is updated.
     * If there is no query, the input field is empty. The searchedBooks-array
     * is then also set to an empty array so that the page renders correctly but
     * without showing any books. The searched Books array is also empty when
     * an error occurs because the user searches for a non-matching title.
     * (See Maeva's study jam from 2:07:00 - 2:09:50), https://youtu.be/i6L2jLHV9j8
     */
    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] })
                }
                else {
                    this.setState({ searchedBooks: searchedBooks})
                }
            })
        }
        else {
            this.setState({ searchedBooks: [] })
        }
    }

    render() {
        {/*
        let showingBooks
        if (this.state.query) {
            const match = new RegExp(escapeRegExp((query), 'i'))
            showingBooks = searchedBooks.filter((searchedBooks) => match.test(contact.name))
        } else {
            showingBooks = searchedBooks
        }
        showingBooks.sort(sortBy('name')) */}

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                {/*
                The map-Method shows the array of searched books. Every list item gets the
                ID of the respective book as a key, because list items need a key in React.
                The searched books are passed as a value to the Book component. This shows
                one of Reacts strenghts: there is no need to define another component, but
                the already established Book component can simply get the single searched
                book as a component and then render it.
                */}
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map((searchedBook) => (
                            <li key={searchedBook.id}>
                                <Book
                                    singleBook={searchedBook}
                                    changeShelf={this.props.changeShelf}
                                    selectedShelf={"none"}
                                />
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage