import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            booksCurrentlyReading: ["Harry Potter", "Star Wars"],
            booksWantToRead: ["Ready Player One"],
            booksRead: ["Game of Thrones"]
        }
    }

    render() {
        return (
            <div>
                <Bookshelf books={this.state.booksCurrentlyReading} title="Currently Reading"/>
                <Bookshelf books={this.state.booksWantToRead} title="Want To Read"/>
                <Bookshelf books={this.state.booksRead} title="Read"/>
            </div>

        )
    }
}

export default App;
