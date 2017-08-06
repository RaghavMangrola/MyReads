import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class Bookshelf extends Component {

    render() {

        const { books, title, onChangeShelf } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <ol>
                    {books.map((book) => (
                        <li key={ book.id }>
                        <Book book={ book } bookshelf={ book.shelf } onChangeShelf={ onChangeShelf }/>
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
    onChangeShelf: PropTypes.func.isRequired
}