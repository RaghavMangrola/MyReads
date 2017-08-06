import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import './App.css'

// TODO Create Searchbar Component
// TODO Search 300ms after user is done typing
// TODO Display Books on SearchResultsComponent
// TODO Books need to be updated to display on current shelf
// TODO Create Route

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],
            searchResults: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    changeShelf = (book, shelf) => {
        book.shelf = shelf

        this.setState((state) => {
            state.books.filter((b) => b.id !== book.id).concat(book)
        })

        BooksAPI.update(book, shelf)
    }

    searchBooks = (query) => {
        BooksAPI.search(query, 10).then((searchResults) => {
            this.setState({ searchResults })
        })
    }

    render() {

        const { books, searchResults } = this.state

        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
        const wantToRead = books.filter((book) => book.shelf === "wantToRead")
        const read = books.filter((book) => book.shelf === "read")

        return (
            <div className="app">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {/*<SearchBar onSearch={this.searchBooks}/>*/}
                {/*<SearchResults books={searchResults} onChangeShelf={this.changeShelf}/>*/}
                <div className="list-books-content">
                    <Bookshelf books={currentlyReading} title="Currently Reading" onChangeShelf={this.changeShelf}/>
                    <Bookshelf books={wantToRead} title="Want To Read" onChangeShelf={this.changeShelf}/>
                    <Bookshelf books={read} title="Read" onChangeShelf={this.changeShelf}/>
                </div>
            </div>
        )
    }
}
