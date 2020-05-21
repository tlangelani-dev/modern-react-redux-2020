import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
    
   async  onInputChange(term) {
        let url = 'https://api.unsplash.com';
        const response = await axios.get(`${url}/search/photos`, {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID jHXjQT2YLBb-MtYRNT7Nhh6qxhjLycYYNd58JBzPLPA'
            }
        });

        console.log(response.data.results);
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
