import { initialState } from "../reducer";
import {
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_SUCCESS,
  SetCommentsAction,
  SetCommentsErrorAction,
  SetCommentsSuccessAction,
} from "./commentsActions";

export interface ICommentsState {
  comments: any[];
  loading: boolean;
  errorLoading: string;
}

type CommentsActions = SetCommentsAction | SetCommentsSuccessAction | SetCommentsErrorAction;

export const commentsReducer = (state = initialState.comments, action: CommentsActions): ICommentsState => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        loading: true
      }
    case SET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        loading: false
      }
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        errorLoading: action.errorLoading,
        loading: false
      }
    default:
      return state;
  }
}
