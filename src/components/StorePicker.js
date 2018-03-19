import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  // declaring a prop using an arrow func, binds 'this' to the instance rather than being undefined
  goToStore = event => {
    // 1. prevent form from submitting
    event.preventDefault();
    // 2. get the text from input
    const storeName = this.myInput.value.value;
    // 3. re-route to page
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="store name"
          defaultValue={getFunName()}
        />
        <button type="submit">visit store -></button>
      </form>
    );
  }
}

export default StorePicker;
