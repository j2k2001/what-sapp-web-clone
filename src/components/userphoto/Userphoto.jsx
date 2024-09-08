import React from 'react';
import './userphoto.css';

const UserPhoto = ({imageUrl}) => {
  return (
    <div className='selfimagecontainer'>
      <button className="selfimagebutton">
        <img src={imageUrl} className="selfimage" />
      </button>
    </div>
  )
}

export default UserPhoto