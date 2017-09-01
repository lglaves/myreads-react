import React, { Component } from 'react'

class Book extends Component {
    constructor(props) {
        super(props);
        this.moveBookData = this.moveBookData.bind(this);
    }

    render() {
        const {book} = this.props.book
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')'
                        }}>
                            <ShelfChanger moves={this.moveBookData} shelf={this.props.book.shelf}/>
                        </div>
                    </div>
                    <div className="book-title">
                        {this.props.book.title}
                    </div>
                    <div className="book-authors">
                        {this.props.book.authors}
                    </div>
                </div>
            </li>
        )
    }
}