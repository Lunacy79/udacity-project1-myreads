import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/SearchPage/SearchPage'
import MyReads from './Components/MyReads/MyReads'

class BooksApp extends Component {
  state = {
    shelfBooks : [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((shelfBooks) => {
        this.setState({shelfBooks})
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage shelfBooks={this.state.shelfBooks} />
        ) : (
          <MyReads shelfBooks={this.state.shelfBooks} />
        )}
      </div>
    )
  }
}

export default BooksApp
