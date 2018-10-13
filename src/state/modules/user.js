import { put, call, takeLatest } from 'redux-saga/effects';
import createActions from 'utils/createAction';
import createReducer from 'utils/createReducer';
import apiRequest from 'utils/apiRequest';
import normalize from 'utils/normalize';

export const actions = createActions('USER');

const initialState = {
  items: {},
};

export const reducer = createReducer(actions, initialState);

export const createUsers = payload => ({
  type: actions.create.request,
  payload,
});

const createSuccess = user => ({
  type: actions.create.success,
  payload: {
    item: user,
  },
});

const createFailure = error => ({
  type: actions.create.failure,
  payload: {
    error,
  },
});

export const listUsers = () => ({
  type: actions.list.request,
});

const listSuccess = users => ({
  type: actions.list.success,
  payload: {
    items: normalize(users, '_id'),
  },
});

const listFailure = error => ({
  type: actions.list.failure,
  payload: {
    error,
  },
});

export const getUsers = () => ({
  type: actions.get.request,
});

const getSuccess = user => ({
  type: actions.get.success,
  payload: {
    item: user,
  },
});

const getFailure = error => ({
  type: actions.get.failure,
  payload: {
    error,
  },
});

export const updateUser = (id, patch) => ({
  type: actions.update.request,
  payload: {
    id,
    patch,
  },
});

const updateSuccess = user => ({
  type: actions.update.success,
  payload: {
    item: user,
  },
});

const updateFailure = error => ({
  type: actions.update.failure,
  payload: {
    error,
  },
});

export const deleteUser = id => ({
  type: actions.delete.request,
  payload: { id },
});

const deleteSuccess = id => ({
  type: actions.delete.success,
  payload: {
    id,
  },
});

const deleteFailure = error => ({
  type: actions.delete.failure,
  payload: {
    error,
  },
});

function* create({ payload }) {
  try {
    const { users } = yield call(apiRequest, '/v1/user', 'PUT', payload);
    yield put(createSuccess(users));
  } catch (error) {
    yield put(createFailure(error));
  }
}

function* list() {
  try {
    const { users } = yield call(apiRequest, '/v1/user');
    yield put(listSuccess(users));
  } catch (error) {
    yield put(listFailure(error));
  }
}

function* get({ payload: { id } }) {
  try {
    const { users } = yield call(apiRequest, `/v1/user/${id}`);
    yield put(getSuccess(users));
  } catch (error) {
    yield put(getFailure(error));
  }
}

function* update({ payload: { id, patch } }) {
  try {
    const { users } = yield call(apiRequest, `/v1/user/${id}`, 'PATCH', patch);
    yield put(updateSuccess(users));
  } catch (error) {
    yield put(updateFailure(error));
  }
}

function* remove({ payload: { id } }) {
  try {
    const { users } = yield call(apiRequest, `/v1/user/${id}`, 'DELETE');
    yield put(deleteSuccess(users));
  } catch (error) {
    yield put(deleteFailure(error));
  }
}

export function* saga() {
  yield takeLatest(actions.create.request, create);
  yield takeLatest(actions.list.request, list);
  yield takeLatest(actions.get.request, get);
  yield takeLatest(actions.update.request, update);
  yield takeLatest(actions.delete.request, remove);
}
