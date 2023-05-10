import {Action, ActionCreator} from "redux";
import { IPostsData } from "../../shared/CardsList";
import {ThunkAction} from "redux-thunk";
import {IInitialState} from "../reducer";
import axios from "axios";
import {setLoadMore} from "../loadMore/loadMoreActions";

interface IPostsDataObjects {
  kind: object | string;
  data: IPostsData;
}

export const SET_POSTS = 'SET_POSTS';
export const SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS';
export const SET_POSTS_ERROR = 'SET_POSTS_ERROR';

export type SetPostsAction = {
  type: typeof SET_POSTS;
}
export type SetPostsSuccessAction = {
  type: typeof SET_POSTS_SUCCESS;
  posts: IPostsData[];
  after: object;
}
export type SetPostsErrorAction = {
  type: typeof SET_POSTS_ERROR;
  errorLoading: string;
}

export const setPosts: ActionCreator<SetPostsAction> = () => ({
  type: SET_POSTS,
})
export const setPostsSuccess: ActionCreator<SetPostsSuccessAction> = (posts, after) => ({
  type: SET_POSTS_SUCCESS,
  posts,
  after
})
export const setPostsError: ActionCreator<SetPostsErrorAction> = (errorLoading: string) => ({
  type: SET_POSTS_ERROR,
  errorLoading,
})

export const setPostsAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(setPosts());

  axios.get('https://oauth.reddit.com/rising', {
    headers: { Authorization: `bearer ${getState().token.token}` },
    params: {
      limit: 10,
      after: getState().posts.after
    }
  })
    .then((res) => {
      const postsData = res.data.data.children;
      const postsAfter = res.data.data.after;
      const filteredPostsData: IPostsData[] = [];

      postsData.map((post: IPostsDataObjects) => {
        filteredPostsData.push({
          author: post.data.author,
          created: post.data.created,
          id: post.data.id,
          key: post.data.id,
          preview: post.data.url,
          title: post.data.title,
          ups: post.data.ups,
          url: post.data.url
        })
      });

      dispatch(setLoadMore(getState().loadMore.loadMore + 1));
      dispatch(setPostsSuccess(filteredPostsData, postsAfter));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setPostsError(String(error)));
    })
}
