import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookList extends React.Component{
  constructor (props){
    super (props);
    this.state = {value: '', shelf:''}

  }

  static propTypes ={
    books: PropTypes.array.isRequired
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


  let cRead  = this.props.books.filter((book) => book.shelf === "currentlyReading")
  let iRead  = this.props.books.filter((book) => book.shelf === "read")
  let wRead  = this.props.books.filter((book) => book.shelf === "wantToRead")

  return (

<div className="main">

<div>

  <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
    {cRead.map((book) =>
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select value={this.state.value}
                onChange={event=>this.handleChange(book,event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="blanksocreadingworks" ></option>
                  <option value="currentlyReading">* Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
      )}
      </ol>
    </div>
  </div>
</div>

<div>
  <div className="bookshelf">
    <h2 className="bookshelf-title">Want To Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
    {wRead.map((book) =>
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select value={this.state.value}
                onChange={event=>this.handleChange(book,event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="blanksocreadingworks" ></option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">* Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
      )}
      </ol>
    </div>
  </div>
</div>

<div>
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
    {iRead.map((book) =>
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select value={this.state.value}
                onChange={event=>
                  this.handleChange(book.id,event.target.value)
                }>
                  <option value="move" disabled>Move to...</option>
                  <option value="blanksocreadingworks" ></option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">* Read</option>
                  <option value="none">None</option>
                </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
      )}
      </ol>
    </div>
  </div>
</div>

</div>
    )
  }
}

export default BookList
