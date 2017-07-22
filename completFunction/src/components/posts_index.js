import React, {Component} from 'react';

//81
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts} from '../actions/index';



//82
import {Link} from 'react-router';
//76
// export default () => {
//   return <div>List of Blog posts.</div>
// }

//80 fetching data
class PostIndex extends Component {
  componentWillMount() {
    // console.log('this would be a good time to call acntion')
    //81
    this.props.fetchPosts();

  }
  renderPosts(){
    return this.props.posts.map((post) => {
      console.log("+ ",post.categories)
      console.log("- ",post.title)

      return (
        <li className="list-group-item" key={post.id} >
          <Link to={`app/${post.id}`}>
            <span className="pull-xs-right"> {post.timestamp} </span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }


  render() {
    return (
      // <div> List of blog posts</div>
      <div>
        <div className="text-xs-right">
            <Link to="app/posts/new" className="btn btn-primary" >
              Add a post
            </Link>
            <a href="http://localhost:8080/Blog/test.html " className="btn btn-info" role="button">Link Button</a>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
 }

 //91 post 反回来的结果需要用在 index的页面上；
 function mapStateToProps(state) {
   return {posts: state.posts.all};
 }

// export default PostIndex

// bind container with components
 function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchPosts}, dispatch);
 }

// export default connect(null,mapDispatchToProps)(PostIndex);
//上面的简便写法
// export default connect(null,{fetchPosts:fetchPosts})(PostIndex);
// export default connect(null,{fetchPosts})(PostIndex); detlet by 91 replace a state

export default connect(mapStateToProps,{fetchPosts})(PostIndex);
