import * as types from './actionTypes';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');

export const loginUser = ({ email, password }, history) => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.post('/login', { email, password });
      localStorage.setItem('user', result.data.token);
      sessionStorage.setItem('user', result.data.token);
      history.push('/private');
    } catch (err) {
      console.log(err);
    }
  }
}

export const secret = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get('/secret', {test: 'testing'});
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}

export const example = () => ({
  type: types.AUTHENTICATED
})
