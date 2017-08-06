import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {

    render() {

        const { onSearch } = this.props

        return(
            <input onChange={(e) => onSearch(e.target.value)}/>
        )
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}