import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from "./Components/MainPage"
import SearchPage from "./Components/SearchPage"

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

        console.log(book)

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

        return (
            <div className="app">

                <Route exact path="/" render={ () => (
                    <MainPage books={books} onChangeShelf={this.changeShelf}/>
                    )}
                />

                <Route exact path="/search" render={ () => (
                    <SearchPage onSearch={this.searchBooks} searchResults={searchResults} onChangeShelf={this.changeShelf}/>
                    )}/>
            </div>
        )
    }
}