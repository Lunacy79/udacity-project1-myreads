import React, {Component} from 'react'
import '../../App.css'
import Book from '../Book'

class BookShelf extends Component {

    bookMoved = (book, shelf) => {
        this.props.bookMoved(book, shelf)
    }

    renderBooks = () => {
        const books = this.props.shelfBooks.filter(book => book.shelf === this.props.shelf)
        return this.createTable(books)
    }

    createTable = (books) => {
        let table = [];
        for (const book of books){
            table.push(<li key={book.id}><Book book={book}  shelfBooks={this.props.shelfBooks} bookMoved={this.bookMoved} /></li>)
        }
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