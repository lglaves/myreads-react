import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

// BookDetail Component displays more details for a single book

class BookDetail extends Component {

    constructor () {
        super()
        this.state = { book: {} }
    }

    componentWillMount() {
        const { bookId } = this.state
        this.book = this.getBook(bookId)
    }

    getBook() {
        BooksAPI.get(this.props.bookId).then(book => {
            this.setState({book})
        })
    }

    render() {
        const { book } = this.state

        // TODO: make multiple authors display properly
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <a className="close-detail" href="#" onClick={()=> (history.back())}></a>
                    <h1>Book Detail</h1>
                </div>

                <div className="book-detail">
                    <div className="book-cover-detail" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                    <div className="book-title-detail">
                        <h3>{book.title}</h3>
                    </div>
                    <div className="book-detail-authors">Written by {book.authors ? book.authors[0] : ''}</div>
                    <div className="book-detail-description"> <h3>Description:</h3> {book.description} </div>
                </div>


            </div>
        )
    }
}

export default BookDetail
