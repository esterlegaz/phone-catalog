import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { startLoading } from './../../store/global/globalActions';
import PhoneList from './PhoneList';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureStore([]);

describe('PhoneList', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            global: { isLoading: false },
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Router>
                    <PhoneList />
                </Router>
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