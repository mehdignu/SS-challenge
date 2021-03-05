import * as reducers from './comics.ts';
import expect from 'expect';
import { ActionTypes } from '../actions/types';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({ adapter: new Adapter() });


it('should return an empty array', () => {
  expect(reducers.comicsReducer(undefined, {})).toEqual([]);
});

const payload = {
  id: '1234',
  title: 'abc',
  publishDate: '01.01.2020',
  url: 'whatever'
 
};

it('should return the payload', () => {
  expect(
    reducers.comicsReducer({}, {
      type: ActionTypes.fetchComics,
      payload: [payload],
    })
  ).toEqual([payload]);
});

