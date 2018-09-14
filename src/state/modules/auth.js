import { call, put, takeLatest } from 'redux-saga/effects';
import { navigate } from '@reach/router';
import apiRequest from 'utils/apiRequest';
import { addToast } from 'state/modules/toast';

const initialState = {
  loggedIn: false,
  user: {},
};

export const actions = {
  register: {
    request: 'REGISTER_REQUEST',
    success: 'REGISTER_SUCCESS',
    failure: 'REGISTER_FAILURE',
  },
  login: {
    request: 'LOGIN_REQUEST',
    success: 'LOGIN_SUCCESS',
    failure: 'LOGIN_FAILURE',
  },
  logout: 'LOGOUT',
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.login.success:
    case actions.register.success:
      return {
        loggedIn: true,
        user: payload,
      };
    case action.logout:
      return initialState;

    default:
      return state;
  }
}

export function login(payload) {
  return {
    type: actions.login.request,
    payload,
  };
}

function loginSuccess(payload) {
  return {
    type: actions.login.success,
    payload,
  };
}

function loginFailure(error) {
  return {
    type: actions.login.failure,
    error,
  };
}

export function logout() {
  return {
    type: actions.logout,
  };
}

export function register(payload) {
  return {
    type: actions.register.request,
    payload,
  };
}

function registerSuccess(payload) {
  return {
    type: actions.register.success,
    payload,
  };
}

function registerFailure(error) {
  return {
    type: actions.register.failure,
    error,
  };
}

function* registerSaga({ payload }) {
  try {
    const response = yield call(
      apiRequest,
      '/v1/user/register',
      'POST',
      payload
    );
    localStorage.setItem('token', response.token);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFailure(error));
    yield put(addToast(error.message));
  }
}

function* loginSaga({ payload }) {
  try {
    const response = yield call(apiRequest, '/v1/user/login', 'POST', payload);
    localStorage.setItem('token', response.token);
    yield put(loginSuccess(response));
    yield navigate('/');
  } catch (error) {
    yield put(loginFailure(error));
    yield put(addToast(error.message));
  }
}

function* checkToken() {
  const { pathname } = window.location;
  try {
    if (pathname === '/logout') {
      return;
    }
    if (!localStorage.getItem('token')) {
      throw new Error('No token found.');
    }
    yield put(addToast('Welcome back! Logging you in now...'));
    const response = yield call(apiRequest, '/v1/user/verify');
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message));
    if (error.code !== 'NETWORK') {
      // localStorage.removeItem('token');
    }
    // if (pathname.indexOf('register') === -1 && pathname !== '/') {
    //   yield put(push('/login'));
    // }
  }
}

export function* saga() {
  yield checkToken();
  yield takeLatest(actions.register.request, registerSaga);
  yield takeLatest(actions.login.request, loginSaga);
}
