import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { books } = this.props

        return (
            <div>
                {books.map((book) => (
                    <p>{book}</p>
                ))}
            </div>
        )
    }
}

Bookshelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.string).isRequired
}