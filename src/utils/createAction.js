const createActions = prefix => {
  const baseActions = ['LIST', 'GET', 'CREATE', 'UPDATE', 'DELETE'];
  const actions = baseActions.map(action => ({
    [action.toLowerCase()]: {
      request: [prefix, action, 'REQUEST'].join('_'),
      success: [prefix, action, 'SUCCESS'].join('_'),
      failure: [prefix, action, 'FAILURE'].join('_'),
    },
  }));
  return Object.assign({}, ...actions);
};
export default createActions;
