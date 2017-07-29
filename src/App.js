import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: ["Harry Potter", "Star Wars"]
        }
    }

    render() {
        return (
            <Bookshelf books={this.state.books}/>
        )
    }
}

export default App;
