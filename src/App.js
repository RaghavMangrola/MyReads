import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: []
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


    render() {

        const { books } = this.state

        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
        const wantToRead = books.filter((book) => book.shelf === "wantToRead")
        const read = books.filter((book) => book.shelf === "read")

        return (
            <div>
                <Bookshelf books={currentlyReading} title="Currently Reading" bookshelf="currentlyReading" onChangeShelf={this.changeShelf}/>
                <Bookshelf books={wantToRead} title="Want To Read" bookshelf="wantToRead" onChangeShelf={this.changeShelf}/>
                <Bookshelf books={read} title="Read" bookshelf="read" onChangeShelf={this.changeShelf}/>
            </div>
        )
    }
}

export default App;
