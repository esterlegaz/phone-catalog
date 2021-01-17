import {
    START_LOADING,
    STOP_LOADING
} from './globalConstants';
import globalReducer from './globalReducer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('globalReducer', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            global: { isLoading: false },
        });

    });

    it('should set isLoading to true ', () => {
        const action = {
            type: START_LOADING
        };

        const result = globalReducer(store, action);

        const expectation = {
            ...result,
            isLoading: true
        };

        expect(result).toEqual(expectation);
    });

    it('should set isLoading to false ', () => {
        const action = {
            type: STOP_LOADING
        };

        const result = globalReducer(store, action);

        const expectation = {
            ...result,
            isLoading: false
        };

        expect(result).toEqual(expectation);
    });
});