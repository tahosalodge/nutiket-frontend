import { combineReducers } from 'redux';
import { reducer as lodge } from './modules/lodge';
import { reducer as user } from './modules/user';
import { reducer as toast } from './modules/toast';
import { reducer as auth } from './modules/auth';

const rootReducer = combineReducers({
  lodge,
  user,
  toast,
  auth,
});

export default rootReducer;
