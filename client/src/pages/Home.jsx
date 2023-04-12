import React, { useEffect, useState } from "react";
import { data } from "../data/content";
import moment from "moment";
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


const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}
  return (
    <div className="postsContainer">
      {posts.map((post) => (
        <NavLink to={`/post/${post.id}`} key={post.id}>
          <div className="post">
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            {/* <div>description: {getText(post.desc)}</div> */}
            <img src={`./upload/${post.img}`} alt="" />
            
            <div>date: {moment(post.date).fromNow()}</div>
            {/* <div>uid: {post.uid}</div> */}
      
            <div>category:{post.cat}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
