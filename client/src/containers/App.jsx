import React, { Fragment } from 'react';
import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';


import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';



if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}
const App = () => (
    <Provider store={store}>
        <Auth authType = {'login'}/>
        <ErrorMessage/>
    </Provider>
)

export default App;