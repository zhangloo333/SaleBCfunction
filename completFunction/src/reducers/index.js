import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
// add in 78 back to redux

/*
84 add for form  reducer as formReducer = 把 reducer的属性从redux-form取出来，
然后交一个叫做 formReducer的东西
*/
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state 删除了不用了
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
