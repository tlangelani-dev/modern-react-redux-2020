import React from 'react';

const SearchBar = () => {
    return (
        <div className="ui segment">
            <form className="ui form">
                <label htmlFor="input-search">Image Search</label>
                <input type="text" id="input-search" />
            </form>
        </div>
    );
};

export default SearchBar;
