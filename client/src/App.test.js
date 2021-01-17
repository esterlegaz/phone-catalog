import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { startLoading } from './store/global/globalActions';

import App from './App';

const mockStore = configureStore([]);

describe('App', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      global: { isLoading: false },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });


  it('should expect state property isLoading to be true when the action startLoading is called', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      startLoading({ payload: true })
    );
  });

});