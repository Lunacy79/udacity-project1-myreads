import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Book extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        shelf: 'none'
    }
    componentDidMount() {
        this.setInitialShelf()
      }

    setInitialShelf = () => {
        console.log(this.props.shelfBooks[0].id)
        const isBook = this.props.shelfBooks.filter(shelfBook => shelfBook.previewLink === this.props.book.previewLink);
        
        console.log(this.props.shelfBooks)
        if(isBook.length === 1){
        this.setState({shelf: isBook[0].shelf})
        console.log(isBook[0].shelf)
        }
        else {
        this.setState({shelf: "none"})
        }
    }

    setShelf = event => {
        this.setState({shelf: event.target.value})
        return this.props.onChange()
    }
  


  

  

  render() {
    const image = `url("${this.props.book.previewLink}")`;
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: image }}></div>
            <div className="book-shelf-changer">
                <select onChange={this.setShelf} value={this.state.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
        
    )
  }
}
      
export default Book