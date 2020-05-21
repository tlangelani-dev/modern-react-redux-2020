import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
    
    onInputChange(term) {
        console.log({term});
    }

    render() {
        return (
            <div className="ui container app">
                <SearchBar onInputChange={this.onInputChange} />
            </div>
        );
    }
}

export default App;
