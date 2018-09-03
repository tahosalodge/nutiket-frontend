import { delay } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';

export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

let toastId = 0;
const defaultOptions = {
  sticky: false,
};

function createToast(message, options) {
  toastId += 1;
  return {
    ...defaultOptions,
    ...options,
    message,
    id: toastId,
  };
}

export function addToast(message, options = {}) {
  return {
    payload: createToast(message, options),
    type: ADD_TOAST,
  };
}

export function removeToast(id) {
  return {
    payload: { id },
    type: REMOVE_TOAST,
  };
}

export function reducer(state = [], action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_TOAST:
      return [payload, ...state];

    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== payload.id);

    default:
      return state;
  }
}

function* expireToasts(action) {
  const { sticky, id } = action.payload;
  if (!sticky) {
    yield delay(3000);
    yield put(removeToast(id));
  }
}

export function* saga() {
  yield takeLatest(ADD_TOAST, expireToasts);
}
