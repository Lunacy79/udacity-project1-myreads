import React, {Component} from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

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
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}
    
export default SearchBar