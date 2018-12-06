import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BaseCount = (BasicComponent) => class base extends Component {
  constructor(props) {
    super(props)
    this.state={
      count :0,
      name: 'apo',
      sum:0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.sumCount = this.sumCount.bind(this);

  }

  incrementCount(){
    this.setState({count: this.state.count+1})
  }

  sumCount(){
    this.setState({sum: this.state.sum+3})
  }
  render() {

    return (
      <div>
        <BasicComponent {...this.state}  suming={this.sumCount} increment = {this.incrementCount}/>
      </div>
    );
  }
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.suming} >{props.name} => {props.sum}</button>
    </div>
  );
}
const Label = (props) =>{
  return(
    <div>
      <label onMouseEnter={props.increment}> {props.name} => {props.count} </label>
    </div>
  )
}

let ExtendButton = BaseCount(Button);

 let ExtendLabel = BaseCount(Label);


class App extends Component {
  render() {
    return (
      <div>
        <ExtendButton />
        <ExtendLabel />
      </div>
    );
  }
}
export default App;
