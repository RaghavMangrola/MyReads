import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentlyReading: ["Harry Potter", "Star Wars"],
            wantToRead: ["Ready Player One"],
            read: ["Game of Thrones"]
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
            const wantToRead = books.filter((book) => book.shelf === "wantToRead")
            const read = books.filter((book) => book.shelf === "read")

            this.setState({ currentlyReading, wantToRead, read })
        })
    }

    render() {
        return (
            <div>
                <Bookshelf books={this.state.currentlyReading} title="Currently Reading"/>
                <Bookshelf books={this.state.wantToRead} title="Want To Read"/>
                <Bookshelf books={this.state.read} title="Read"/>
            </div>
        )
    }
}

export default App;
