import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Book Component displays a single book

class Book extends Component {

    constructor () {
        super()
        this.state = { bookShelf: 'none' }
    }

    changeShelf(event, book) {
        this.props.onUpdateBook(event, book)
        this.setState({
            bookShelf: event.target.value
        })
    }

    componentDidMount() {
        // This is required for book to be defined - lbg
        const book = this.props.book
        let shelf
        let bookOnShelf = this.props.getBooksById(book.id);

        if(bookOnShelf !== null) {
            shelf = bookOnShelf.shelf
        } else {
            shelf = 'none'
        }

        this.setState({
            bookShelf: shelf
        })

        // lbg debug
        // console.log('book.title inside ComponentDidMount: ', book.title)
    }


    render() {

        // This is required for book to be defined - lbg
        const { book } = this.props

        // lbg debug
        // console.log('Book in Book you got the details: ', book)
        return(
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <Link to={`/detail/${book.id}`}>
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                        </Link>
                        <div className="book-shelf-changer">
                            <select value={this.state.bookShelf} onChange={(event) => this.changeShelf(event, book)}>
                                <option value="noValue" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors[0] : ''}</div>
                </div>
            </li>
        )
    }
}

export default Book
