import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
// import Notification from '../reducer/comments/comments';
import Notification from '../reducer/category_post/comments';
import Tab_Notification from '../reducer/category_post/Tab_Notification';
import List_Posts from '../reducer/category_post/List_Posts';



const combined = combineReducers({
  Notification,
  Tab_Notification,
  List_Posts
});

const middleware = [
  logger,
];

export const initStore = initialState =>
  createStore(combined, initialState,applyMiddleware(...middleware));
