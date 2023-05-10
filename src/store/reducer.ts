import {
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_POSTS_SUCCESS,
  SetPostsAction,
  SetPostsErrorAction,
  SetPostsSuccessAction
} from "./posts/postsActions";
import {
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_SUCCESS,
  SetCommentsAction,
  SetCommentsErrorAction,
  SetCommentsSuccessAction
} from "./comments/commentsActions";
import {IUserState, userReducer} from "./user/userReducer";
import {IPostsState, postsReducer} from "./posts/postsReducer";
import {commentsReducer, ICommentsState} from "./comments/commentsReducer";
import {ILoadMoreState, loadMoreReducer} from "./loadMore/loadMoreReducer";
import {SET_LOAD_MORE, SetLoadMoreAction} from "./loadMore/loadMoreActions";
import {SET_USER, SetUserAction} from "./user/userActions";

export interface IInitialState {
  comments: ICommentsState;
  loadMore: ILoadMoreState;
  posts: IPostsState;
  user: IUserState;
}

export const initialState: IInitialState = {
  comments: {
    comments: [],
    loading: false,
    errorLoading: ''
  },
  loadMore: {
    loadMore: 0
  },
  posts: {
    posts: [],
    after: { after: 0 },
    loading: false,
    errorLoading: ''
  },
  user: {
    user: {}
  },
}

type Actions = SetCommentsAction
  | SetCommentsSuccessAction
  | SetCommentsErrorAction
  | SetLoadMoreAction
  | SetPostsAction
  | SetPostsSuccessAction
  | SetPostsErrorAction
  | SetUserAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_COMMENTS:
    case SET_COMMENTS_SUCCESS:
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        comments: commentsReducer(state.comments, action)
      }
    case SET_LOAD_MORE:
      return {
        ...state,
        loadMore: loadMoreReducer(state.loadMore, action)
      }
    case SET_POSTS:
    case SET_POSTS_SUCCESS:
    case SET_POSTS_ERROR:
      return {
        ...state,
        posts: postsReducer(state.posts, action)
      }
    case SET_USER:
      return {
        ...state,
        user: userReducer(state.user, action)
      }
    default:
      return state;
  }
};
