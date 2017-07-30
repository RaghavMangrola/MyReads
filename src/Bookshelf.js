import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {

    render() {

        const { books, title, bookshelf, onChangeShelf } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <ol>
                    {books.map((book) => (
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
                    ))}
                </ol>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    bookshelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}