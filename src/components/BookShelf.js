import React, { Component } from 'react'
import Book from './Book'
import sortBy from 'sort-by'

// BookShelf Component moves book to the requested bookshelf (or removes book completely)
// and keeps the shelf in alphabetical order by book title

class BookShelf extends Component {

    render() {
        let books = this.props.books ? this.props.books : []
        books.sort(sortBy('title'))

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => (
                                <Book getMyBookList={this.props.getMyBookList} onUpdateBook={this.props.onUpdateBook} book={book ? book : null} key={book.id}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
