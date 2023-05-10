import { initialState } from "../reducer";
import {
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_POSTS_SUCCESS,
  SetPostsAction,
  SetPostsErrorAction,
  SetPostsSuccessAction
} from "./postsActions";

export interface IPostsState {
  posts: any[];
  after: object;
  loading: boolean;
  errorLoading: string;
}

type PostsActions = SetPostsAction | SetPostsSuccessAction | SetPostsErrorAction;

export const postsReducer = (state = initialState.posts, action: PostsActions): IPostsState => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        loading: true
      }
    case SET_POSTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(...action.posts),
        after: action.after,
        loading: false
      }
    case SET_POSTS_ERROR:
      return {
        ...state,
        errorLoading: action.errorLoading,
        loading: false
      }
    default:
      return state;
  }
}
