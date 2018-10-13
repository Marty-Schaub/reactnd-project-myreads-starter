import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchPage from './SearchPage'
import ErrorBoundary from './ErrorBoundary'
import './App.css'


class BooksApp extends React.Component {
  constructor( props ){
  super( props );
  this.handleChange = this.handleChange.bind(this);
}
  state = {
    books: [], query:"",sbooks:[] }

//The async code below is added from the suggestion of the project reviewer
  async componentDidMount(){
    const books = await BooksAPI.getAll()
    this.setState({books})
    console.log(books)

}

//this handles moving the books
  handleChange=(book,shelf)=>{
    const myId =book.id
    BooksAPI.update(book, shelf).then(() => {
    book.id =myId
    book.shelf=shelf;
    this.setState({value:myId})
    this.setState({shelf:shelf})
    })
    console.log(book.shelf, myId, this.state.shelf)
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
                  handleChange={this.handleChange}
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
              handleChange={this.handleChange}
            />
            </ErrorBoundary>
          )}/>
      </div>

    )

  }
}

export default BooksApp
