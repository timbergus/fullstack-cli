// @flow

import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
{{#material-ui}}

import Button from '@material-ui/core/Button';
{{/material-ui}}

import { GET_COUNTER, MODIFY_COUNTER } from '../apollo/queries';

export default () => {
  const { loading, error, data } = useQuery(GET_COUNTER);
  const [modifyCounter] = useMutation(MODIFY_COUNTER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <>
      <h1>Welcome to the counter!</h1>
      <h2>{data?.counter?.value}</h2>
      {{#material-ui}}
      <>
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
      </>
      {{/material-ui}}
      {{^material-ui}}
      <>
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
      </>
      {{/material-ui}}
    </>
  );
};
