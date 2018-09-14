import { put, call, takeLatest } from 'redux-saga/effects';
import createActions from 'utils/createAction';
import createReducer from 'utils/createReducer';
import apiRequest from 'utils/apiRequest';
import normalize from 'utils/normalize';

export const actions = createActions('LODGE');

const initialState = {
  items: {},
};

export const reducer = createReducer(actions, initialState);

export const createLodge = payload => ({
  type: actions.create.request,
  payload,
});

const createSuccess = lodge => ({
  type: actions.create.success,
  payload: {
    item: lodge,
  },
});

const createFailure = error => ({
  type: actions.create.failure,
  payload: {
    error,
  },
});

export const listLodges = () => ({
  type: actions.list.request,
});

const listSuccess = lodges => ({
  type: actions.list.success,
  payload: {
    items: normalize(lodges, '_id'),
  },
});

const listFailure = error => ({
  type: actions.list.failure,
  payload: {
    error,
  },
});

export const getLodges = () => ({
  type: actions.get.request,
});

const getSuccess = lodge => ({
  type: actions.get.success,
  payload: {
    item: lodge,
  },
});

const getFailure = error => ({
  type: actions.get.failure,
  payload: {
    error,
  },
});

export const updateLodge = payload => ({
  type: actions.update.request,
  payload,
});

const updateSuccess = lodge => ({
  type: actions.update.success,
  payload: {
    item: lodge,
  },
});

const updateFailure = error => ({
  type: actions.update.failure,
  payload: {
    error,
  },
});

export const deleteLodge = id => ({
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
    const { lodge } = yield call(apiRequest, '/v1/lodge', 'POST', payload);
    yield put(createSuccess(lodge));
  } catch (error) {
    yield put(createFailure(error));
  }
}

function* get({ payload: { id } }) {
  try {
    const { lodge } = yield call(apiRequest, `/v1/lodge/${id}`);
    yield put(getSuccess(lodge));
  } catch (error) {
    yield put(getFailure(error));
  }
}

function* update({ payload: { id, patch } }) {
  try {
    const { lodge } = yield call(apiRequest, `/v1/lodge/${id}`, 'PATCH', patch);
    yield put(updateSuccess(lodge));
  } catch (error) {
    yield put(updateFailure(error));
  }
}

function* remove({ payload: { id } }) {
  try {
    yield call(apiRequest, `/v1/lodge/${id}`, 'DELETE');
    yield put(deleteSuccess(id));
  } catch (error) {
    yield put(deleteFailure(error));
  }
}

function* list() {
  try {
    const { lodges } = yield call(apiRequest, '/v1/lodge');
    yield put(listSuccess(lodges));
  } catch (error) {
    yield put(listFailure(error));
  }
}

export function* saga() {
  yield takeLatest(actions.create.request, create);
  yield takeLatest(actions.list.request, list);
  yield takeLatest(actions.get.request, get);
  yield takeLatest(actions.update.request, update);
  yield takeLatest(actions.delete.request, remove);
}
