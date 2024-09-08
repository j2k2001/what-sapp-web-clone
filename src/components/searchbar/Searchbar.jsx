import React from 'react';
import './searchbar.css';

const Searchbar = () => {
  return (
    <div className='searchbarcontainer'>
      <form className='connectionsearchbar'>
        <input type="text" 
        placeholder='Search'/>
      </form>
    </div>
  )
}

export default Searchbar