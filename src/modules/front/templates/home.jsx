// @flow
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
{{# redux }}
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
{{# material-ui }}

import Button from '@material-ui/core/Button';
{{/ material-ui }}
{{/ redux }}
{{# redux }}

import { getContent } from '../reducers/content';
import { incrementCounter, decrementCounter } from '../reducers/counter';
{{/ redux }}
{{^ redux }}

type Props = {};

{{/ redux }}
{{# redux }}

const mapStateToProps = (state) => {
  const { content, counter } = state;
  return {
    counter,
    content,
  };
};

const mapDispatchToProps = dispatch => ({
  getContent: bindActionCreators(getContent, dispatch),
  incrementCounter: bindActionCreators(incrementCounter, dispatch),
  decrementCounter: bindActionCreators(decrementCounter, dispatch),
});

type Props = {
  getContent: Function,
  incrementCounter: Function,
  decrementCounter: Function,
  content: Object,
  counter: number
};

{{/ redux }}
{{^ redux }}export default {{/ redux }}class HomeComponent extends Component<Props> {
  {{# redux }}
  componentDidMount() {
    this.props.getContent(); // eslint-disable-line
  }

  {{/ redux }}
  render() { {{# redux }}
    const { content: { subtitle }, counter } = this.props;{{/ redux }}
    return ({{# redux }}
      <div>{{/ redux }}
      {{# redux }}  {{/ redux }}<h1>Home component is working!</h1>
      {{# redux }}
      {{# redux }}  {{/ redux }}<h3>{ subtitle }</h3>
      {{# redux }}  {{/ redux }}<h2>{ counter }</h2>
      {{# material-ui }}
      {{# redux }}  {{/ redux }}<Button
      {{# redux }}  {{/ redux }}  variant="contained"
      {{# redux }}  {{/ redux }}  color="primary"
      {{# redux }}  {{/ redux }}  onClick={this.props.incrementCounter}
      {{# redux }}  {{/ redux }}>
      {{# redux }}  {{/ redux }}  Increment
      {{# redux }}  {{/ redux }}</Button>
      {{# redux }}  {{/ redux }}<Button
      {{# redux }}  {{/ redux }}  variant="contained"
      {{# redux }}  {{/ redux }}  color="secondary"
      {{# redux }}  {{/ redux }}  onClick={this.props.decrementCounter}
      {{# redux }}  {{/ redux }}>
      {{# redux }}  {{/ redux }}  Decrement
      {{# redux }}  {{/ redux }}</Button>
      {{/ material-ui }}
      {{^ material-ui }}
      {{# redux }}  {{/ redux }}<button type="button" onClick={ this.props.incrementCounter }>Increment</button>
      {{# redux }}  {{/ redux }}<button type="button" onClick={ this.props.decrementCounter }>Decrement</button>
      {{/ material-ui }}
      {{/ redux }}
    {{# redux }}  {{/ redux }}{{# redux }}</div>
    {{/ redux }});
  }
}
{{# redux }}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
{{/ redux }}
