import { ActionCreator } from "redux";

export const SET_LOAD_MORE = 'SET_LOAD_MORE';

export type SetLoadMoreAction = {
  type: typeof SET_LOAD_MORE;
  loadMore: number;
}

export const setLoadMore: ActionCreator<SetLoadMoreAction> = (loadMore) => ({
  type: SET_LOAD_MORE,
  loadMore
})
