import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { books, title } = this.props

        return (
            <div>
                <h1>{title}</h1>
                {books.map((book) => (
                    <p>{book}</p>
                ))}
            </div>
        )
    }
}

Bookshelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
}