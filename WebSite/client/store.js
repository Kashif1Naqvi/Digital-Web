import {createStore , compse} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';
//import JSON data
import comments from './data/comments';
import posts from './data/posts';


// create an object for default data

const defaultState = {
    posts,
    comments
}

// create store now
const  store =  createStore(rootReducer , defaultState);
export const history =  syncHistoryWithStore(browserHistory, store);

export default store;
 