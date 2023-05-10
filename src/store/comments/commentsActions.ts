import {Action, ActionCreator} from "redux";
import { IPostComments } from "../../hooks/usePostComments";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import axios from "axios";
import { getAndFilterPostsData } from "../../utils/react/getAndFilterPostsData";

export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENTS_SUCCESS = 'SET_COMMENTS_SUCCESS';
export const SET_COMMENTS_ERROR = 'SET_COMMENTS_ERROR';

export type SetCommentsAction = {
  type: typeof SET_COMMENTS;
}
export type SetCommentsSuccessAction = {
  type: typeof SET_COMMENTS_SUCCESS;
  comments: IPostComments[];
}
export type SetCommentsErrorAction = {
  type: typeof SET_COMMENTS_ERROR;
  errorLoading: string;
}

export const setComments: ActionCreator<SetCommentsAction> = () => ({
  type: SET_COMMENTS,
})
export const setCommentsSuccess: ActionCreator<SetCommentsSuccessAction> = (comments) => ({
  type: SET_COMMENTS_SUCCESS,
  comments,
})
export const setCommentsError: ActionCreator<SetCommentsErrorAction> = (errorLoading: string) => ({
  type: SET_COMMENTS_ERROR,
  errorLoading,
})

export const setCommentsAsync = (postId: string) => (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setComments());

  axios.get(`http://api.reddit.com/comments/${postId}`)
    .then((res) => {
      const filteredComments = getAndFilterPostsData(res);
      dispatch(setCommentsSuccess(filteredComments));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setCommentsError(String(error)));
    })
}
