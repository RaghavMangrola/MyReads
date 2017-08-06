import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default class SearchPage extends  Component {

    render() {

        const { onSearch, searchResults, onChangeShelf } = this.props

        return(
            <div>
                <SearchBar onSearch={onSearch}/>
                <SearchResults books={searchResults} onChangeShelf={onChangeShelf}/>
            </div>
        )
    }
}

SearchPage.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}