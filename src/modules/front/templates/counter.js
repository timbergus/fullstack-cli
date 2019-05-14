// @flow

const INCREMENT = '{{ name }}/counter/INCREMENT';
const DECREMENT = '{{ name }}/counter/DECREMENT';

export function incrementCounter() {
  return { type: INCREMENT };
}

export function decrementCounter() {
  return { type: DECREMENT };
}

export default function reducer(state: number = 0, action: Object = {}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
