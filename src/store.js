import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import formReducer from './Reducers/formReducer';
import {initial} from './initialData';

const initialData = initial;

const middleware = [thunk];
const store = createStore(formReducer ,initialData,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
