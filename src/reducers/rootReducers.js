import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
} from './reducers';

const rootReducer = combineReducers({
  form: formReducer
})

export default rootReducer;
