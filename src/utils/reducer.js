import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

export const mergeState = (state, { items }) => {
  if (!items || isEmpty(items)) {
    return state;
  }

  return Object.keys(items).reduce(
    (nextState, id) => {
      // eslint-disable-next-line
      nextState.items[id] = { ...items[id] };
      return nextState;
    },
    { ...state }
  );
};

export const insertToState = (state, item) => ({
  ...state,
  [item.id]: item,
});

export const removeFromState = (state, id) => {
  if (state[id]) {
    return omit(state, id);
  }
  return state;
};
