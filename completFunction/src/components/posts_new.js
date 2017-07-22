import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
// import action post from actions provider

import { createPost } from '../actions/index';

//89 add link from react-router take the link back to
import {Link} from 'react-router';

class PostsNew extends Component {

  // context 90
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    console.log(props);
    this.props.createPost(props)
    .then(() => {
      // blog post has been created, navigate the user to the indexroute
      // we navigate by calling this.context.router.push with the new
      // path tp avigation to.
      this.context.router.push('/app');
    });
  }

  render() {

    //刚才这一行有问题；
    const {fields:{title,text}, handleSubmit} = this.props;
    //  const handleSubmit = this.props.handleSubmit; = const {handleSubmit} = this.props

    // const title = this.props.fields.title = const {fields:{title}}
    return (
      // <div> Create Form </div>  build a form
      //  onSubmit={handleSubmit(this.onSubmit.bind(this))
      // <form action="http://localhost:8080/Blog/api" method="post">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <h3>Create A New Post</h3>

        <div className = { `form-group ${title.touched && title.invalid? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" placeholder = { title.touched ? title.error : ""} {...title}/>
          <div className="text-help">
            { title.touched ? title.error : ""}
          </div>
        </div>


        <div className = {`form-group ${text.touched && text.invalid? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea rows="10" type="text" className="form-control"
          placeholder = { text.touched ? text.error : ""}
          {...text}/>
        </div>

        {/* <button type ="submit" value = "Post" className="btn btn-primary">Submit</button>*/}
        <button type ="submit" className="btn btn-primary">Submit</button>

        <Link to ="/app" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

// add valiad form
function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }

  // if(!values.categories) {
  //   errors.categories = 'Enter a categories';
  // }

  if(!values.text) {
    errors.text = 'Enter a text';
  }
  return errors;
}




/* 87
connect: frist argument is mapStateToProps, 2nd is mapDispathToProps
reduxForm: 1ft is form congig, 2nd is mapStateToProps, 3rd is mapDispathToProps
*/



export default reduxForm({
    form: 'PostsNewForm',
    fields:['title','text'],
    validate
},null,{createPost})(PostsNew);

// user types something in ...record it on application state
// redux form 主要是把 componenet level 变成 application level的
/*
state ==={
  form: {
    PostsNewForm: {
      title: '.....',
      categories: '.....',
      text: '.......'
    }
  }
}
*/
