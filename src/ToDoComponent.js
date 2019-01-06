import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      intArray: [],
      hovering: false,
      visible:false,
    };
  }
  openModal=()=>{
    this.setState({
      visible:true,
    })
  }
  closeModal=()=>{
    this.setState({
      visible:false,
    })
  }
  onChange = event => {
    this.setState({
      value: event.target.value,
      // console.log(value);
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const { value, intArray } = this.state;
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
      console.log(intArray);
    }
  };
  removeItem(index) {
    console.log(index);
    let newList = this.state.intArray.splice(index,1) && this.state.intArray.slice();
    this.setState({intArray:newList})
    console.log(newList);
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
                      bsStyle="primary" onClick={this.removeItem.bind(this, index)}>Delete</button>
                  </div>
                  <div className="child-inline value">{val}</div>
                  <button type="button" value="update" onClick={() => this.openModal()} >update</button>
                  <Modal visible={this.state.visible} width="400" height="200" margin-top="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                      <input class="modalClass" type="text" value={this.state.value} />
                      <a class="modalclosebutton" href="javascript:void(0);" onClick={() => this.closeModal()}>OK</a>
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
