import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: -1,
    };
    console.log('constructor');
    this.handlerClick = this.handlerClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    if (state === -1) {
      return (this.state = {
        counter: props.arg,
      });
    }
    return state;
  }

  componentDidMount(props, state) {
    console.log('component did mount has updated counter + 1');
    this.setState(() => ({ counter: this.state.counter + 1 }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('get snapshot before update');
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update', this.state);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render before return');
    return (
      <>
        {console.log('render in return')}
        <button onClick={this.handlerClick}>+</button>
        {this.state.counter}
        {this.state.counter === 1 && <p>Element would be romoved (if counter !== 1): {this.state.counter}</p>}
      </>
    );
  }

  handlerClick() {
    this.setState(() => ({ counter: this.state.counter + 1 }));
    console.log(this.state);
  }
}
