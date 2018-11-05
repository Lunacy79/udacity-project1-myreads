import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import '../../App.css'
import Book from '../Book'

class ListBooklist extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  setShelf = () => {
    for (const book of this.props.books) {
      const isBook = this.props.shelfBooks.filter(shelfBook => shelfBook.id === book);
      if(isBook){
        this.book = {shelf: this.shelfBook.id}
      }
      else {
        this.book = {shelf: "none"}
      }
    }
  }

 

  createTable = (books) => {
    let table = [];
    for (const book of books){
      table.push(<li key={book.id}><Book book={book}  shelfBooks={this.props.shelfBooks} /></li>)
    }
    return table
  }

  render() {
    
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {this.createTable(this.props.books)}
            </ol>
        </div>
    )
  }
}
        
export default ListBooklist