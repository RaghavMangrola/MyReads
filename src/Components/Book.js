import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {

    render() {

        const { book, bookshelf, onChangeShelf } = this.props
        console.log(book.title + " " + book.shelf)
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={bookshelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want To Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}