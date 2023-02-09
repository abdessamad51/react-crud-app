import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigator = useNavigate();
  const [isWating, setIsWating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
//   const [post, setPost] = useState("");
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Can not connect to the server!.");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false)
        setUserId(data.userId)
        setTitle(data.title)
        setBody(data.body)
      });
  },[]);
  const UpdatePost = (e) => {
    e.preventDefault();
    setIsWating(true)
    const PostUpdated = {
      title,
      body,
      userId,
    };
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      body: JSON.stringify(PostUpdated),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        setIsWating(false)
        alert("Post is updated")
        navigator("/posts")
      });
  };
  return (
    isLoading ? <h1 className="text-center mt-2">data is loading...</h1> : 
    <div className="container mt-5">
      <h4 className="mb-3">Edit Post</h4>
      <form onSubmit={UpdatePost}>
        <div className="form-group">
          <label>Id</label>
          <input
            type="number"
            className="form-control mb-2 w-75 "
            placeholder="Enter user id"
            name="user_id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control mb-2 w-75 "
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control mb-4 w-75 "
            placeholder="Enter Body"
            rows="4"
            name="body"
            value={body}
            onChange ={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {isWating ? (
          <button type="submit" disabled class="btn btn-primary">
            Saving...
          </button>
        ) : (
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Edit;
