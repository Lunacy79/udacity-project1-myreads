import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/SearchPage/SearchPage'
import MyReads from './Components/MyReads/MyReads'
import {Route} from 'react-router-dom'

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

  didUpdate = () => {
    setTimeout(() => {
    BooksAPI.getAll().then((shelfBooks) => {
      this.setState({shelfBooks})
    })}
  , 500);
}

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchPage shelfBooks={this.state.shelfBooks} />
        )} />
        <Route exact path='/' render={() => (
          <MyReads shelfBooks={this.state.shelfBooks} didUpdate={this.didUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
