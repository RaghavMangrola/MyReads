import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from "./Book"

export default class SearchResults extends Component {

    render() {

        const { books, onChangeShelf } = this.props

        return(
            <div>
                <ol>
                    {books.map((book) => (
                        <li key={ book.id }>
                        <Book book={book} bookshelf={book.shelf} onChangeShelf={onChangeShelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

SearchResults.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}