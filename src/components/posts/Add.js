import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {

  const navigator = useNavigate()
  const [isWating ,setIsWating] = useState(false)

  const AddPosts = (e) => {
    e.preventDefault();
    setIsWating(true)
    let post = {
      title: e.target.elements.title.value,
      body: e.target.elements.body.value,
      user_id: e.target.elements.user_id.value,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => {
        alert("new post added");
        setIsWating(false)
        navigator("/posts");
      });
  };
  
  return (
    <div className="container mt-5">
      <h4 className="mb-3">Add Post</h4>
      <form onSubmit={AddPosts}>
        <div class="form-group">
          <label>Id</label>
          <input
            type="number"
            className="form-control mb-2 w-75 "
            placeholder="Enter user id"
            name="user_id"
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control mb-2 w-75 "
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div class="form-group">
          <label>Body</label>
          <textarea
            className="form-control mb-4 w-75 "
            placeholder="Enter Body"
            rows="4"
            name="body"
          ></textarea>
        </div>
       {
        isWating ?  <button type="submit" disabled className="btn btn-primary">
        Saving...
      </button> : <button type="submit" className="btn btn-primary">
        Submit
      </button>
       }
       
      </form>
    </div>
  );
};

export default CreatePost;
