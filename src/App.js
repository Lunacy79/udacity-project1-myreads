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

  bookMoved = (book, shelf) => {
    book.shelf = shelf
    let shelfBooks = this.state.shelfBooks
    console.log(book)
    
      let position = -1
      for(let i = 0; i < shelfBooks.length; i++){
        if(shelfBooks[i].previewLink === book.previewLink){
          position = i;
        }
      }
      if (position > -1){
        shelfBooks.slice(position, 1, book)
        this.setState({shelfBooks: shelfBooks})
        console.log('moved')
      }
      else{
        shelfBooks.push(book)
        this.setState({shelfBooks: shelfBooks})
      }
    }

  render() {
    console.log(this.state.shelfBooks)
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
