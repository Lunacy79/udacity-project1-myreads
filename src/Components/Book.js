import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'


class Book extends Component {
    state = {
        shelf: ''
    }
    componentDidMount() {
        this.setInitialShelf()
    }

    setInitialShelf = () => {
        const isBook = this.props.shelfBooks.filter(shelfBook => shelfBook.previewLink === this.props.book.previewLink);
        if(isBook.length === 1){
            this.setState({shelf: isBook[0].shelf})
        }
        else {
            this.setState({shelf: "none"})
        }
    }

    setShelf = event => {
        this.setState({shelf: event.target.value})
        BooksAPI.update(this.props.book, event.target.value)
        this.props.bookMoved()
    }

    getAuthors = () => {
        let authors = ''
        if (this.props.book.authors) {
            authors = this.props.book.authors
        }
        return authors
    }

    getImage = () => {
        let image = ''
        if (this.props.book.hasOwnProperty('imageLinks')) {
            image = this.props.book.imageLinks.thumbnail
        }
        return image
    }

    render() {

    console.log(this.props.book)
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 188, backgroundImage: `url(${this.getImage()})`}}></div>
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
                <div className="book-authors">{this.getAuthors()}</div>
            </div> 
        )
    }
}
      
export default Book