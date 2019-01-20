import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/actions';
// import { increment } from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  //   state = {
  //     counter: 0
  //   };

  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case 'inc':
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case 'dec':
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - 1 };
  //         });
  //         break;
  //       case 'add':
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case 'sub':
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 10"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              // Wrapped in an anonymous function to be able to pass data along with the function call.
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    // onIncrementCounter: () => dispatch({ actionCreators.increment() }),
    // onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    // onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    // onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 10 }),
    // onStoreResult: result =>
    //   dispatch({ type: actionTypes.STORE_RESULT, result: result }),

    // Got ID from UI and pass it in the action.
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
    // onDeleteResult: id =>
    //   dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
