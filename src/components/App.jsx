import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends Component {

    state = { images: []  };
    
    onInputChange = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container app">
                <SearchBar onInputChange={this.onInputChange} />
                <p>Found: { this.state.images.length } images</p>
            </div>
        );
    }
}

export default App;
