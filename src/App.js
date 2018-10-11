import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchPage from './SearchPage'
import ErrorBoundary from './ErrorBoundary'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [], query:"",sbooks:[] }

  componentDidMount(){
  BooksAPI.getAll().then ((books) => {
    this.setState({books})
    console.log(books)

})
}
  render() {

    return (

      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Route exact path='/' render={() => (
                <BookList
                  books={this.state.books}
                  />
              )}/>
              </div>
            </div>
            <div className="open-search">

              <Link
              to="/search">Add a book</Link>
            </div>
          </div>

        <Route path="/search" render={({history}) => (
            <ErrorBoundary>
            <SearchPage
              books={this.state.books}
              sbooks={this.state.sbooks}
              query={this.state.query}
            />
            </ErrorBoundary>
          )}/>
      </div>

    )

  }
}

export default BooksApp
