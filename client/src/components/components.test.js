import expect from 'expect';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomePage from './HomePage';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { App } from './Lykon';
import { reducers } from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

it('should expect to render the App component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});

it('should expect to render the HomePage component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <HomePage />
      </Provider>
    ).length
  ).toEqual(1);
});
