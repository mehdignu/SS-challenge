import { Comic, FetchComicsAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const comicsReducer = (state: Comic[] = [], action: FetchComicsAction) => {
  switch (action.type) {
    case ActionTypes.fetchComics:
      return action.payload;
    default:
      return state;
  }
};
