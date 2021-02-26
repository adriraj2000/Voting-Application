import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const DEFAULT_STATE = {
    auth: { isAuthenticated: false },
    error: { message: null },
    polls: [],
    currentPoll: {
        _id: '5fd62956c8fbea15ad9e7e2c',
        options: [], question: 'test_poll',
    },
}

export const store = createStore(rootReducer, DEFAULT_STATE,
    composeWithDevTools(applyMiddleware(thunk))
);
