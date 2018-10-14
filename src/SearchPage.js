import React from 'react'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import './App.css'

class SearchPage extends React.Component{

  constructor (props){
    super (props);

    this.state = {books: [], query:'', value:'', shelf:'',sbooks:[],change:true}

  }

  updateQuery = (query) => {
  this.setState({query: query})
  this.componentWillMount()
}

clearQuery = ()=> {
  this.setState ({query: ''})
}


async componentWillMount(){

  const{query} = this.state
  if (query.length>1){
  const sbooks= await BooksAPI.search(query)
      this.setState({sbooks})

    }
}

    render(){



      const{books,sbooks}=this.props
      const{change,query} = this.state

      let showingBooks = (books)
      if(query&&change===true){

        if (this.state.sbooks.length>0){
        showingBooks = this.state.sbooks
        showingBooks.sort(sortBy('title'))

        }
      }


      return(
      <ErrorBoundary>
      <div className="search-books">

        <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event)=> this.updateQuery(event.target.value)}
          />

        </div>
          </div>

      <ol className="books-grid">
      {showingBooks.map((book) =>
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.smallThumbnail})` }}></div>
                  <div className="new-imgage"></div>
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
      </ErrorBoundary>
    )
    }

}

export default SearchPage
