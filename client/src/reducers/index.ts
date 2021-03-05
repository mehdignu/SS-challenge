import { combineReducers } from 'redux';
import { Comic } from '../actions';
import { comicsReducer } from './comics';

export interface StoreState {
  comics: Comic[];
}

export const reducers = combineReducers({
  comics: comicsReducer
});
