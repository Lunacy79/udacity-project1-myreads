import React, {Component} from 'react'
import '../../App.css'
import Book from '../Book'

class ListBooklist extends Component {

  bookMoved = () => {
    this.props.bookMoved()
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
    if(typeof(books) !== 'undefined'){
      for (const book of books){
        table.push(<li key={book.id}><Book book={book} shelfBooks={this.props.shelfBooks} bookMoved={this.bookMoved} /></li>)
      }
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