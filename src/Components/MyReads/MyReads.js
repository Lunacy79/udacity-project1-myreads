import React, {Component} from 'react'
import '../../App.css'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class MyReads extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  didUpdate = () => {
    this.props.didUpdate()
  }


  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='currentlyReading' didUpdate={this.didUpdate} />
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='wantToRead' didUpdate={this.didUpdate} />
                <BookShelf shelfBooks={this.props.shelfBooks} shelf='read' didUpdate={this.didUpdate} />
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