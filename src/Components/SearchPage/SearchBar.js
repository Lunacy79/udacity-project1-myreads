import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import '../../App.css'

class SearchBar extends Component {
    
    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({query: event.target.value})
        this.props.onSearch(event.target.value)
    }


    render() {
        
        return (
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}
    
export default SearchBar