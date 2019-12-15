// @flow

const GET_CONTENT = '{{ name }}/content/GET_CONTENT';

export function getContent() {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch({ type: GET_CONTENT, data: { subtitle: 'Use the buttons to change its value.' } });
    }, 5000);
  };
}

export default function reducer(state: Object = { subtitle: '' }, action: Object = {}) {
  switch (action.type) {
    case GET_CONTENT:
      return { ...action.data };
    default:
      return state;
  }
}
