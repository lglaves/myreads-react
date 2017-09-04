import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'
import './App.css'

// BooksApp Component displays the book reading list organized on 3 shelves and
// relocates the book into the category selected by clicking the choice in the book dropdown list selector

class BooksApp extends Component {
    // constructor is called when instance of the component is being created and inserted into the DOM
    // constructor is required when initializing state and binding methods
    constructor(props) {
        super(props)
        this.updateBookShelf = this.updateBookShelf.bind(this);
        this.getBookById = this.getBookById.bind(this);
    }

    state = {
        allBooks: null
    }

    getBookById(id) {
        let books

        if(this.state.allBooks) {
            books = this.state.allBooks.filter((book) => book.id === id)
            if (books.length > 0) {
                return books[0]
            } else {
                return null
            }
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({allBooks: books});
        })
    }

    updateBookShelf(event, book) {
        let self = this
        BooksAPI.update(book, event.target.value).then(function() {
            // Set shelf value
            BooksAPI.getAll().then(books => self.setState({
                allBooks: books
            }))
        })
    }

    render() {
        let currentlyReading
        let wantToRead
        let read

        if(this.state.allBooks !== null) {
            // filter books by book.shelf
            currentlyReading = this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')
            wantToRead = this.state.allBooks.filter((book) => book.shelf === 'wantToRead')
            read = this.state.allBooks.filter((book) => book.shelf === 'read')
        }
        return (

            <div className="app">

                <Route exsact path="/search" render={() => (
                    <BookSearch getBookById={this.getBookById} onUpdateBook={this.updateBookShelf}/>
                )}/>

                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>My Reading List</h1>
                        </div>
                        <div className="list-books-content">
                            <BookShelf getBookById={this.getBookById} onUpdateBook={this.updateBookShelf} title='Currently Reading' books={ currentlyReading }/>
                            <BookShelf getBookById={this.getBookById} onUpdateBook={this.updateBookShelf} title='Want to Read' books={ wantToRead }/>
                            <BookShelf getBookById={this.getBookById} onUpdateBook={this.updateBookShelf} title='Read' books={ read }/>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
