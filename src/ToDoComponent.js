import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      updateValue: {
        id: null,
        text: '',
      },
      intArray: [],
      hovering: false,
      visible:false,
      todoOb : {},
    };
  }
  openModal=(updateValue)=>{
    this.setState({
      updateValue: updateValue,
      visible: true,
    })
  }
  closeModal=()=>{
    let newIntArray = this.state.intArray.map((val) => {
      if(val.id === this.state.updateValue.id) {
        return this.state.updateValue;
      } else {
        return val;
      }
    })
    this.setState({
      visible:false,
      intArray: newIntArray,
    })
  }
  onChange = event => {
    this.setState({
      value: event.target.value,
      // console.log(value);
    });
  };
  onUpdateChange = event =>{
    let newUpdateValue = {
      ...this.state.updateValue
    }
    newUpdateValue.text = event.target.value;    
    this.setState({
      updateValue: newUpdateValue,
    })
  }
  onSubmit = event => {
    event.preventDefault();
    const { value, intArray } = this.state;
    console.log(intArray);
    if (value === '') {
      return;
    } else {
      let intArrayNew = intArray.slice();
      let taskObj = {
        id: this.state.id + 1,
        text: value,
      }
      intArrayNew.push(taskObj);
      this.setState({
        intArray: intArrayNew,
        id: this.state.id + 1,
      });
      // alert ("added");
      console.log(intArray);
    }
  };
  removeItem = (id) => {
    console.log(id);
    let newList = this.state.intArray.filter((val, i) => {
      if(val.id === id) {
        return false;
      } else {
        return true;
      }
    })
    this.setState({
      intArray: newList,
    })
  }

  onDelete = event => {
    const { value, intArray } = this.state;
    console.log(intArray);
    console.log(value);
    if(intArray.includes(value))
    {
      for (let i = intArray.length - 1; i >= 0; i--) {
        console.log("test");
        if (intArray[i] === value) {
          let newArray = intArray.splice(i, 1) && intArray.slice();
  
          this.setState({
            intArray: newArray,
          })
          break;
        }
  
      }
    }
    else{
      alert("unable to delete as value is not present,Please add the element");
    }
  }

  toUpdate = (event,i) =>{
   
  }
  





  

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              required
            />
          </label>
          <button class="addbutton"type="submit">Add</button>
        </form>
        <div className="child-list-item">
          <ul >{this.state.intArray.map((val, index) => {
            return (
              <li className="list">
                <div className="child" key={index}>
                  <div className="child-inline edit">
                    <button
                      style={{ color: 'black' }}
                      bsStyle="primary" onClick={() => this.removeItem(val.id)}>Delete</button>
                  </div>
                  <div className="child-inline value">{val.text}</div>
                  <button type="button" value="update" onClick={() => this.openModal(val)} >update</button>
                  <Modal visible={this.state.visible} width="400" height="200" margin-top="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                      <input class="modalClass" type="text" value={this.state.updateValue.text} onChange={this.onUpdateChange} />
                      <span class="modalclosebutton" onClick={this.closeModal}>OK</span>
                    </div>
                  </Modal>
                </div>
              </li>
            );
            })}
          </ul>
        </div>          
      </div>
    );
  }
}
export default ToDoComponent;
