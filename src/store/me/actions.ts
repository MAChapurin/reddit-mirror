import  axios  from 'axios';


import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { ActionThunk, RootState } from '../store';

export const ME_REQUEST = 'ME_REQUEST';

export type TMeRequestAction = {
  type: typeof ME_REQUEST;
}

export const meRequest: ActionCreator<TMeRequestAction> = () => ({
  type: ME_REQUEST,
})

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export type TMeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData
}

export const meRequestSuccess: ActionCreator<TMeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
}) 

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type TMeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}

export const meRequestError: ActionCreator<TMeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})



export const meRequestAsync = (): ActionThunk => (dispatch, getState) => {
  // dispatch(meRequest);
  dispatch(meRequest())
      axios
        .get("https://oauth.reddit.com/api/v1/me.json", {
          headers: { Authorization: `Bearer ${getState().token}` },
        })
        .then((resp) => {
          const userData = resp.data;
          const myUserData = {
            name: userData.name,
            iconImg: userData.icon_img.split("?")[0],
          }
          dispatch(meRequestSuccess(myUserData))
        })
        .catch((error)=> {
          console.log(error);
          dispatch(meRequestError(String(error)));
        });
}

