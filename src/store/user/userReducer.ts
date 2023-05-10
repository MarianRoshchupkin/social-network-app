import { initialState } from "../reducer";
import { SET_USER, SetUserAction } from "./userActions";

export interface IUserState {
  user: any;
}

type UserActions = SetUserAction;

export const userReducer = (state = initialState.user, action: UserActions): IUserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}
