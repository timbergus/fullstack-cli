// @flow

import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
{{# material-ui }}

import Button from '@material-ui/core/Button';
{{/ material-ui }}

import { GET_COUNTER, MODIFY_COUNTER } from '../apollo/queries';

export default () => (
  <Fragment>
    <h1>Welcome to the counter!</h1>
    <Query query={GET_COUNTER}>
      {
        ({ data }) => <h2>{data?.counter?.value}</h2>
      }
    </Query>
    <Mutation mutation={MODIFY_COUNTER}>
      {
        modifyCounter => (
          {{#material-ui}}
          <Fragment>
            <Button
              variant="contained"
              color="primary"
              onClick={() => modifyCounter({
                variables: {
                  amount: 1,
                },
              })}
            >
              Increment
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => modifyCounter({
                variables: {
                  amount: -1,
                },
              })}
            >
              Decrement
            </Button>
          </Fragment>
          {{/material-ui}}
          {{^material-ui}}
          <Fragment>
            <button
              type="button"
              onClick={() => modifyCounter({
                variables: {
                  amount: 1,
                },
              })}
            >
              Increment
            </button>
            <button
              type="button"
              onClick={() => modifyCounter({
                variables: {
                  amount: -1,
                },
              })}
            >
              Decrement
            </button>
          </Fragment>
          {{/material-ui}}
        )
      }
    </Mutation>
  </Fragment>
);
