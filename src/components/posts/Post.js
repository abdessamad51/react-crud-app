import React from "react";
import PostsList from "./PostsList";
import GetPosts from "./Model";

const Post = () => {
     const {posts,getData,deletePosts} = GetPosts("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            { !getData &&   <h1 className="text-center mt-2">data is loading...</h1>}
          { getData &&   <PostsList posts = {posts} deletePosts={deletePosts}  />}
        </div>
    )
}

export default Post;