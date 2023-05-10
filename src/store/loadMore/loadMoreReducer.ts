import { initialState } from "../reducer";
import { SET_LOAD_MORE, SetLoadMoreAction } from "./loadMoreActions";

export interface ILoadMoreState {
  loadMore: number;
}

type MoreLoadActions = SetLoadMoreAction

export const loadMoreReducer = (state = initialState.loadMore, action: MoreLoadActions): ILoadMoreState => {
  switch (action.type) {
    case SET_LOAD_MORE:
      return {
        ...state,
        loadMore: action.loadMore
      }
    default:
      return state;
  }
}
