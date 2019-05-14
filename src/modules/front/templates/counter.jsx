// @flow

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
{{# material-ui }}

import Button from '@material-ui/core/Button';
{{/ material-ui }}

import { getContent } from '../reducers/content';
import { incrementCounter, decrementCounter } from '../reducers/counter';

type Props = {
  _getContent: Function,
  _incrementCounter: Function,
  _decrementCounter: Function,
  content: Object,
  counter: number,
};

const mapStateToProps = (state) => {
  const { content, counter } = state;
  return {
    counter,
    content,
  }
}

const mapDispatchToProps = {
  _getContent: getContent,
  _incrementCounter: incrementCounter,
  _decrementCounter: decrementCounter,
};

class CounterComponent extends Component<Props> {
  componentDidMount() {
    const { _getContent } = this.props;
    _getContent();
  }

  render() {
    const {
      _incrementCounter,
      _decrementCounter,
      content: {
        subtitle,
      },
      counter,
    } = this.props;

    return (
      <Fragment>
        <h1>Welcome to the counter!</h1>
        <h2>{counter}</h2>
        {{#material-ui}}
        <Button
          variant="contained"
          color="primary"
          onClick={_incrementCounter}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={_decrementCounter}
        >
          Decrement
        </Button>
        {{/material-ui}}
        {{^material-ui}}
          <button type="button" onClick={_incrementCounter}>Increment</button>
          <button type="button" onClick={_decrementCounter}>Decrement</button>
        {{/material-ui}}
        <h3>{subtitle}</h3>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
