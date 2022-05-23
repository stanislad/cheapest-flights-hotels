import React from "react";

const SearchBar = props => {
    return (
        <div className='ui input'>
            <input type='text' value={props.search} onChange={e=>props.setSearch(e.target.value)}/>
        </div>
    );
}

export default SearchBar;