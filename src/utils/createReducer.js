import { mergeState, insertToState, removeFromState } from 'utils/reducer';

const createReducer = (actions, initialState) => (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case actions.list.success:
      return mergeState(state, payload);
    case actions.create.success:
      return insertToState(state, payload.item);
    case actions.delete.success:
      return removeFromState(state, payload.id);
    default:
      return state;
  }
};

export default createReducer;
