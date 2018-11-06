import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/SearchPage/SearchPage'
import MyReads from './Components/MyReads/MyReads'
import {Route} from 'react-router-dom'

class BooksApp extends Component {
  state = {
    shelfBooks : [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((shelfBooks) => {
      this.setState({shelfBooks})
    })
  }

  bookMoved = () => {
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
          <SearchPage shelfBooks={this.state.shelfBooks} bookMoved={this.bookMoved} />
        )} />
        <Route exact path='/' render={() => (
          <MyReads shelfBooks={this.state.shelfBooks} bookMoved={this.bookMoved} />
        )} />
      </div>
    )
  }
}

export default BooksApp
