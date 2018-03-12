import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component{
  static propTypes ={
    history: PropTypes.object

  };

myInput = React.createRef();

  goToStore = (event) =>{
    // 1.stop the form from submitting
    event.preventDefault();
    // 2.get the text from that input
    const storeName = this.myInput.value.value;
    // 3. change the page to /store/whatever-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render(){
    return(
        <form className ='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
        type="text"
        ref={this.myInput}
        required
        placeholder="Store Name"
        // add funny name(below) in placeholder
        // defaultValue={getFunName()}
        />
        <button type="Submit">Visit Store -></button>
        </form>
      );
    }
  }

export default StorePicker;
