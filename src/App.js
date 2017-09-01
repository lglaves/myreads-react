import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <BookList
                  // books={this.state.books}
                  // updateBook={this.updateBook}
              />
          )}/>

          <Route exact path='/search' render={() => (
              <BookSearch
                  // books={this.state.books}
                  // updateBook={this.updateBook}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp
