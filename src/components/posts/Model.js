import { useState,useEffect } from "react"
const GetPosts = (url) => {
    const [posts,setPosts] = useState(null);
    const [getData,setGetData] = useState(false);

    const deletePosts = (e,id) => {
        e.preventDefault();
         const updatePosts = posts.filter((post) => post.id !==id);
         setPosts(updatePosts) 
    }
 
    useEffect(() => {
    fetch(url)
    .then((res)=> res.json())
    .then((posts) => { 
        setPosts(posts) 
        setGetData(true) 
    }); 
    },[url])
    return {
        posts,
        getData,
        deletePosts,
    };
}

export default GetPosts
