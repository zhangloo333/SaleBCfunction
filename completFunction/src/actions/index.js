import axios from 'axios';
import qs from 'qs';
// fist defined our export type
export const FETCH_POSTS = 'FETCH_POSTS';

export const CREATE_POST = 'CREATE_POST';

//93 FETHCH 单个的data
export const FETCH_POST = 'FETCH_POST';

//95 detlet action
export const DELETE_POST = 'DELETE_POST';



// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//
// const API_KEY ='?key=leoz123455';
//
// export function fetchPosts() {
//   // const request = axios.get(ROOT_URL);
//   const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
//   console.log(request);
//
//   return {
//       type: FETCH_POSTS,
//       payload: request
//   }
// }

const ROOT_URL = 'http://localhost:8080/Blog/api';

export function fetchPosts() {
  // const request = axios.get(ROOT_URL);
  const request = axios.get(ROOT_URL);
  console.log(request);

  return {
      type: FETCH_POSTS,
      payload: request
  }
}


// ADD ACTION FOR FORM
const instance = axios.create({
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
export function createPost(props){
  // const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
  console.log(props);
  // {title:"88888888",text:"88888888"}
  const request = instance.post(ROOT_URL,qs.stringify(props));

  return {
    type:CREATE_POST,
    payload: request
  };
}

// add 93 单个data
export function fetchPost(id) {
  // const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  const request = axios.get(ROOT_URL+'/'+id);
  console.log(request);

  return {
    type:FETCH_POST,
    payload: request
  }
}

export function deletePost(id){
  // const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  const request = axios.delete(`${ROOT_URL}/${id}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
