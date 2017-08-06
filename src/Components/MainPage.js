import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {

    render() {

        const { books, onChangeShelf } = this.props

        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
        const wantToRead = books.filter((book) => book.shelf === "wantToRead")
        const read = books.filter((book) => book.shelf === "read")

        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf books={currentlyReading} title="Currently Reading" onChangeShelf={onChangeShelf}/>
                    <Bookshelf books={wantToRead} title="Want To Read" onChangeShelf={onChangeShelf}/>
                    <Bookshelf books={read} title="Read" onChangeShelf={onChangeShelf}/>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}