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
      console.log(sbooks)
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
        console.log (showingBooks)
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
                    <option value="move" disabled>Move to...</option>
                    <option value="blanksocreadingworks" ></option>
                    <option value="currentlyReading">{book.shelf==='currentlyReading'&&'*Currently Reading'}{book.shelf!=='currentlyReading'&&'Currently Reading'}</option>
                    <option value="wantToRead">{book.shelf==='wantToRead'&&'*Want To Read'}{book.shelf!=='wantToRead'&&'Want To Read'}</option>
                    <option value="read">{book.shelf==='read'&&'*Read'}{book.shelf!=='read'&&'Read'}</option>
                    <option value="none">
                      {(()=>{
                        switch(book.shelf){
                          case 'currentlyReading':
                          case 'read':
                          case 'wantToRead':
                            return 'None'

                          default:
                            return "*None"
                        }
                      })()}
                    </option>
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
