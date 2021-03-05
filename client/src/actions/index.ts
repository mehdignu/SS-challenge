import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = '/api/';

export interface Comic {
  id: string;
  title: string;
  publishDate: string;
  url: string;
}

export interface FetchComicsAction {
  type: ActionTypes.fetchComics;
  payload: Comic[];
}

export const fetchComics = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Comic[]>(url);
    dispatch<FetchComicsAction>({
      type: ActionTypes.fetchComics,
      payload: response.data,
    });
  };
};
