import {IUserState, userReducer} from "./user/userReducer";
import {SET_USER, SetUserAction} from "./user/userActions";

export interface IInitialState {
  user: IUserState;
}

export const initialState: IInitialState = {
  user: {
    user: {}
  },
}

type Actions = | SetUserAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: userReducer(state.user, action)
      }
    default:
      return state;
  }
};
