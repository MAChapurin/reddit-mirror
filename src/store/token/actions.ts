import { ThunkAction } from 'redux-thunk';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { store, setToken, ActionThunk, RootState } from './../store';
import { Action } from 'redux';

// export const saveToken = () => {
//   const token = sessionStorage.getItem('token') || window.__token__;
//   store.dispatch(setToken(token));
//   if(token && token !== 'undefined') {
//       sessionStorage.setItem('token', token);
//   }
//   return token;
// }


export const saveToken = (): ActionThunk => (dispatch, _getState) =>{
  const token = sessionStorage.getItem('token') || window.__token__;
  dispatch(setToken(token));
  if(token && token !== 'undefined') {
      sessionStorage.setItem('token', token);
  }
 return token
}


