// @flow

import React, { Component } from 'react';
{{# redux }}
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContent } from 'reducers/content';
import { incrementCounter, decrementCounter } from 'reducers/counter';
{{/ redux }}
{{# material-ui }}
import Button from '@material-ui/core/Button';
{{/ material-ui }}
{{^ redux }}

type Props = {};

type State = {};
{{/ redux }}
{{# redux }}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    content: state.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContent: bindActionCreators(getContent, dispatch),
    incrementCounter: bindActionCreators(incrementCounter, dispatch),
    decrementCounter: bindActionCreators(decrementCounter, dispatch)
  };
};

type Props = {
  getContent: Function,
  incrementCounter: Function,
  decrementCounter: Function,
  content: Object,
  counter: number
};

type State = {};


{{/ redux }}
{{^ redux }}export default {{/ redux }}class HomeComponent extends Component<Props, State> {
  {{# redux }}

  componentWillMount () {
    this.props.getContent();
  }
  {{/ redux }}

  render () {
    return ({{# redux }}
      <div>{{/ redux }}
      {{# redux }}  {{/ redux }}<h1>Home component is working!</h1>
      {{# redux }}
      {{# redux }}  {{/ redux }}<h3>{ this.props.content.subtitle }</h3>
      {{# redux }}  {{/ redux }}<h2>{ this.props.counter }</h2>
      {{# material-ui }}
      {{# redux }}  {{/ redux }}<Button
      {{# redux }}  {{/ redux }}  variant="contained"
      {{# redux }}  {{/ redux }}  onClick={this.props.incrementCounter}
      {{# redux }}  {{/ redux }}>
      {{# redux }}  {{/ redux }}  Increment
      {{# redux }}  {{/ redux }}</Button>
      {{# redux }}  {{/ redux }}<Button
      {{# redux }}  {{/ redux }}  variant="contained"
      {{# redux }}  {{/ redux }}  onClick={this.props.decrementCounter}
      {{# redux }}  {{/ redux }}>
      {{# redux }}  {{/ redux }}  Decrement
      {{# redux }}  {{/ redux }}</Button>
      {{/ material-ui }}
      {{^ material-ui }}
      {{# redux }}  {{/ redux }}<button onClick={ this.props.incrementCounter }>Increment</button>
      {{# redux }}  {{/ redux }}<button onClick={ this.props.decrementCounter }>Decrement</button>
      {{/ material-ui }}
      {{/ redux }}
      {{# redux }}</div>
    {{/ redux }});
  }
}
{{# redux }}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
{{/ redux }}
