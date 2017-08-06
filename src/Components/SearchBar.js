import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class SearchBar extends Component {

    render() {

        const { onSearch } = this.props

        return(

           <div className="search-books-bar">
               <Link className="close-search" to="/"/>
               <div className="search-books-input-wrapper">
                   <input type="text" placeholder="Search by title or author" onChange={(e) => onSearch(e.target.value)}/>
               </div>
           </div>
        )
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}