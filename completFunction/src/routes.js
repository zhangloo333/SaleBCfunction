//add by 73
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//add postindex from posts_index 76
import PostIndex from './components/posts_index';

// add post new 创造components
import PostsNew from './components/posts_new';
//92 Dynamic show parameter

import PostsShow from './components/posts_show';
// 75 add some div to test router
const Greating = ()=> {
  return <div>hey there </div>
}
//add router tree for childern
export default(
<Route path ="/app" component={App}>
  <IndexRoute component={PostIndex} />
  {/*
    add indexroute 之后，就把 router 给 放弃了。
    <Route path="greet" component={Greating} />
    <Route path="greet2" component={Greating} />
    <Route path="greet3" component={Greating} />


    */}
  <Route path="/app/posts/new" component={PostsNew} />
  <Route path="/app/:id" component={PostsShow} />

</Route>
);

//this.props.id = posts/:id
