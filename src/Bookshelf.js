import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {

    render() {

        const { books, title } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <ol>
                    {books.map((book) => (
                        <li key={ book.id }>
                            <p>{ book.title }</p>
                        </li>
                    ))}
                </ol>

            </div>
        )
    }
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}