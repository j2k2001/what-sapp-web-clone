import React from 'react';
import './userphoto.css';

const UserPhoto = ({imageUrl,size}) => {
  return (
    <div className='selfimagecontainer'>
      <button className="selfimagebutton" style={{height:size,width:size}}>
        <img src={imageUrl} className="selfimage" style={{height:size,width:size}} />
      </button>
    </div>
  )
}

export default UserPhoto