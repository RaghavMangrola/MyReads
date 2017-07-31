import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {

    render() {

        const { book, bookshelf, onChangeShelf } = this.props

        return(
            <li key={ book.id }>
                <p>{ book.title }</p>
                <select value={bookshelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want To Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </li>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}