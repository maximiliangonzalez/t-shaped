import { createStore } from 'redux';
import reducer from './reducers/topicReducer';

const store = createStore(reducer);

export default store;