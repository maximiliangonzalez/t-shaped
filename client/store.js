import { combineReducers, createStore, applyMiddleware } from 'redux';
import topicReducer from './reducers/topicReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  topics: topicReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;