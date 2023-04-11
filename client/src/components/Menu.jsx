import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu({ cat }) {
    const [posts, setPosts] = useState([]);
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts/?cat=${cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [cat]);


  return (
    <div className="menu">
           <h3>LastPosts</h3>
      {posts.map((post) => (
        <NavLink to={`/post/${post.id}`} key={post.id}>
          <div className="post">
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>description: {post.desc}</div>
            <div>image link{post.img}</div>
            <div>date: {post.date}</div>
            <div>uid: {post.uid}</div>
            <div>category:{post.cat}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
