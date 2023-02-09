import React from "react";
import { Link } from "react-router-dom";
const PostsList = ({ posts,deletePosts }) => {
  
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{post.title}</td>
              <td> {post.body}</td>
              <td>
                <div className="btn-group">
                  <Link  to={`/edit/${post.id}`} class="btn btn-success">
                   Edit
                  </Link>
                  <button  class="btn btn-danger" onClick={(e) => deletePosts(e,post.id)}  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
