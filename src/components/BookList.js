import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class bookList extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <h2 className="bookshelf-title">Have Read</h2>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        Add a book
                    </Link>
                </div>
            </div>
        )

    }

}

export default bookList