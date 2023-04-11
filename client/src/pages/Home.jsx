import React, { useEffect, useState } from "react";
import { data } from "../data/content";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  // console.log(cat);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="postsContainer">
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
