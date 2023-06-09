import { meReducer, TMeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, TMeRequestErrorAction, TMeRequestSuccessAction, TMeRequestAction } from './me/actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, Reducer, AnyAction, ActionCreator, applyMiddleware, Action } from 'redux';
import { useToken } from '../hooks/useToken';
import thunk, { ThunkAction } from 'redux-thunk';



export type RootState = {
  commentText: string;
  token: string;
  me: TMeState;
}

const initialState: RootState = {
  commentText: 'Hello, Skillbox!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  }
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
})

const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token,
})

type TMyAction = TMeRequestAction
| TMeRequestSuccessAction
| TMeRequestErrorAction
| ActionCreator<AnyAction>

export type ActionThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_COMMENT:
          return {
              ...state,
              commentText: action.text
          }
      case SET_TOKEN:
        return {
          ...state,
          token: action.token
        }

      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
        return {
          ...state,
          me: meReducer(state.me, action),
        }
      default:
          return state
  }
}



export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))