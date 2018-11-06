import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'
import SearchBar from './SearchBar'
import ListBooklist from './ListBooklist'

class SearchPage extends Component {
    state = {
        books: [],
    }

    searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

    setQuery = query => {
        if (this.searchTerms.indexOf(query) > -1 || query === '') {
            BooksAPI.search(query).then((books) => {
                    this.setState({books})
            })
        }
    }

    bookMoved = () => {
        this.props.bookMoved()
    }
    

    render() {
        return (
            <div className="search-books">
                <SearchBar onSearch={this.setQuery} />
                <ListBooklist books={this.state.books} shelfBooks={this.props.shelfBooks} bookMoved={this.bookMoved} />
            </div>
        )
    }
}
  
export default SearchPage