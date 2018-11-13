import React, {Component} from 'react'
import '../../App.css'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class MyReads extends Component {

  bookMoved = (book, shelf) => {
    this.props.bookMoved(book, shelf)
  }


  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='currentlyReading' bookMoved={this.bookMoved} />
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='wantToRead' bookMoved={this.bookMoved} />
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='read' bookMoved={this.bookMoved} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
  }
}
          
export default MyReads