import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import '../../App.css'
import Book from '../Book'

class BookShelf extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  renderBooks = () => {
      const books = this.props.shelfBooks.filter(book => book.shelf === this.props.shelf)
      console.log(books)
      return this.createTable(books)
    }

  createTable = (books) => {
    let table = [];
    for (const book of books){
      table.push(<li key={book.id}><Book book={book}  shelfBooks={this.props.shelfBooks} onChange={this.renderBooks} /></li>)
    }
    console.log(table)
    return table
  }

  getTitle = () => {
        if (this.props.shelf === "currentlyReading"){
            return 'Currently Reading'
        }
        else if (this.props.shelf === "wantToRead"){
            return 'Want to Read'
        }
        else {
            return 'Read'
        }
  }

  render() {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.getTitle()}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {this.renderBooks()}
                
            </ol>
            </div>
        </div>
    )
  }
}
                  
export default BookShelf