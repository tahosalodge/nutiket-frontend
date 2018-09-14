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
  items: {
    ...state.items,
    [item._id]: item,
  },
});

export const removeFromState = (state, id) => {
  if (state.items[id]) {
    return {
      ...state,
      items: omit(state.items, id),
    };
  }
  return state;
};
