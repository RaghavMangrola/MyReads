import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class Bookshelf extends Component {

    render() {

        const { books, title, bookshelf, onChangeShelf } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <ol>
                    {books.map((book) => (
                        <Book book={ book } bookshelf={ bookshelf } onChangeShelf={ onChangeShelf }/>
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