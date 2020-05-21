import React, { Component } from 'react';

class SearchBar extends Component {

    state = { term: '' };

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                    <div className="field">
                        <label htmlFor="input-search">Image Search</label>
                        <input 
                            type="text"
                            id="input-search"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
