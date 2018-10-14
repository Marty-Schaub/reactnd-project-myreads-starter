import React from 'react'
import PropTypes from 'prop-types'

class BookList extends React.Component{
  constructor (props){
    super (props);
    this.state = {value: '', shelf:'', books:'', title:''}
//
  }

  static propTypes ={
    books: PropTypes.array.isRequired
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
                onChange={event=>this.props.handleChange(book,event.target.value)}>
                <option value="" >Move to...</option>
                {(()=>{
                  switch(book.shelf){
                    case 'currentlyReading':
                      return <option value="currentlyReading" className="selectedShelf">*Currently Reading</option>
                    default:
                      return <option value="currentlyReading">Currently Reading</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'wantToRead':
                      return <option value="wantToRead" className="selectedShelf">*Want To Read</option>
                    default:
                      return <option value="wantToRead">Want To Read</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'read':
                      return <option value="read" className="selectedShelf">*Read</option>
                    default:
                      return <option value="read">Read</option>
                  }
                })()}

                  {(()=>{
                    switch(book.shelf){
                      case 'currentlyReading':
                      case 'read':
                      case 'wantToRead':
                        return <option value="none">None</option>

                      default:
                        return <option value="none" className="selectedShelf">*None</option>
                    }
                  })()}

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
                onChange={event=>this.props.handleChange(book,event.target.value)}>
                <option value="" >Move to...</option>
                {(()=>{
                  switch(book.shelf){
                    case 'currentlyReading':
                      return <option value="currentlyReading" className="selectedShelf">*Currently Reading</option>
                    default:
                      return <option value="currentlyReading">Currently Reading</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'wantToRead':
                      return <option value="wantToRead" className="selectedShelf">*Want To Read</option>
                    default:
                      return <option value="wantToRead">Want To Read</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'read':
                      return <option value="read" className="selectedShelf">*Read</option>
                    default:
                      return <option value="read">Read</option>
                  }
                })()}

                  {(()=>{
                    switch(book.shelf){
                      case 'currentlyReading':
                      case 'read':
                      case 'wantToRead':
                        return <option value="none">None</option>

                      default:
                        return <option value="none" className="selectedShelf">*None</option>
                    }
                  })()}

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
                onChange={event=>this.props.handleChange(book,event.target.value)}>
                <option value="" >Move to...</option>
                {(()=>{
                  switch(book.shelf){
                    case 'currentlyReading':
                      return <option value="currentlyReading" className="selectedShelf">*Currently Reading</option>
                    default:
                      return <option value="currentlyReading">Currently Reading</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'wantToRead':
                      return <option value="wantToRead" className="selectedShelf">*Want To Read</option>
                    default:
                      return <option value="wantToRead">Want To Read</option>
                  }
                })()}
                {(()=>{
                  switch(book.shelf){
                    case 'read':
                      return <option value="read" className="selectedShelf">*Read</option>
                    default:
                      return <option value="read">Read</option>
                  }
                })()}

                  {(()=>{
                    switch(book.shelf){
                      case 'currentlyReading':
                      case 'read':
                      case 'wantToRead':
                        return <option value="none">None</option>

                      default:
                        return <option value="none" className="selectedShelf">*None</option>
                    }
                  })()}

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
