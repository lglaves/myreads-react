import React, { Component } from 'react'

// BookDetail Component displays more details for a single book

class BookDetail extends Component {


    render() {

        const { book } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <a className="close-detail" href="#" onClick={()=> (history.back())}></a>
                    <h1>Book Detail</h1>
                </div>



            </div>
        )
    }
}


export default BookDetail
