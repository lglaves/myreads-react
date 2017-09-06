import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

// BookSearch Component displays books that match the search string on the Search Page

class BookSearch extends Component {

    constructor () {
        super();
        this.state = {
            query: '',
            filteredBooks: []
        };
    }

    handleChange = (query) => {
        this.setState({query: query})

        if(query.trim() !== '') {
            BooksAPI.search(query, 20).then(books => this.setState({
                filteredBooks: books
            }))
        } else {
            this.setState({
                filteredBooks: []
            })
        }
    }

    render() {

        let books = this.state.filteredBooks

        if(books === null || books.error) {
            books = []
        }

        books.sort(sortBy('title'))

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={this.state.query}
                            placeholder="Search by title or author"
                            onChange={(event) => this.handleChange(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            books.map((book) => (
                                <Book
                                    getBooksById={this.props.getBooksById}
                                    onUpdateBook={this.props.onUpdateBook}
                                    book={book ? book : null} key={book.id}
                                />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch

