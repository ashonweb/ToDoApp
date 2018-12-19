import React, { Component } from 'react';
class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      intArray: [],
    };
  }
  onChange = event => {
    this.setState({
      value: event.target.value,
      
    });
  };

  onSubmit = event => {
    event.preventDefault();    const { value, intArray } = this.state;
    console.log(intArray);
    if (value === '') {
      return;
    } else {
      let intArrayNew = intArray.slice();
      intArrayNew.push(value);
      this.setState({
        intArray: intArrayNew,
      });
      // alert ("added");
    }
  };
  onDelete = event => {
    const { value, intArray } = this.state;
    console.log(intArray);
    if (value === '') {
      alert('nothing to delete ');
      return;
    } 
    else if(intArray.includes(value))
    {
      for (var i = intArray.length ; i--;) {
        console.log("test");
        if (intArray[i] === value) {
          intArray.splice(i, 1);
          alert('deleted');
          console.log("Rest");
        }

      }
    }
    else{
      alert("unable to delete as value is not present,Please add the element");
    }
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <label>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChange}
            required
          />
        </label>
        <button type="submit" value="submit" >
          Add
        </button>
        <div>
          {this.state.intArray.map((val, index) => {
            return <div key={index}>{val}</div>;
          })}
        </div>
        
        </form>
        <div>
          {((this.state.value > 0) || (this.state.intArray !== []))&&
            <button onClick={this.onDelete}>delete</button>
          }
        </div>
      </div>
    );
  }
}
export default ToDoComponent;
