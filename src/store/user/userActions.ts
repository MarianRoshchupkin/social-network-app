import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";

export const SET_USER = 'SET_USER';

export type SetUserAction = {
  type: typeof SET_USER;
  user: object;
}

export const setUser: ActionCreator<SetUserAction> = (user) => ({
  type: SET_USER,
  user
})

export const setUserAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  if (window.__user__) {
    dispatch(setUser(window.__user__));
  }
}
