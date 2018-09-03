import { all } from 'redux-saga/effects';
import { saga as lodge } from './modules/lodge';
import { saga as user } from './modules/user';
import { saga as toast } from './modules/toast';
import { saga as auth } from './modules/auth';

export default function* RootSaga() {
  yield all([lodge(), user(), toast(), auth()]);
}
