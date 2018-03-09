import React from 'react';

const StorePicker = () =>  (
        <form className ='store-selector'>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="Submit">Visit Store -></button>
        </form>
      );

export default StorePicker;
