import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import '../../App.css'

class SearchBar extends Component {
    state = {
        query: ''
    }

    
    handleChange = event => {
        console.log(event.target.value)
        this.setState({query: event.target.value})
        this.props.onSearch(event.target.value)
        console.log(event.target.value)
        
    }

    search = () => {
        this.props.onSearch(this.state.query)
    }

  

    render() {
        
        return (
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange} />
                
                </div>
            </div>
        )
    }
}
    
export default SearchBar