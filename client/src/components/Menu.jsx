import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu({ cat }) {
  const [posts, setPosts] = useState([]);
  // const currentPage = document.location.pathname.split('/').pop()
  
  
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
           {/* <h3>LastPosts</h3> */}
      {posts.map((post) => (
        
        <NavLink to={`/post/${post.id}`} key={post.id} className="menuSinglePost">

          <div className="post">
            {/* <div>id: {post.id}</div> */}
            <div className="menuSinglePost_title">{post.title}</div>
            {/* <div>description: {post.desc}</div> */}
            <img src={["../upload/", post.img].join('')} alt="" />
            <div className="menuSinglePost_date">Дата: {moment(post.date).fromNow()}</div>
            {/* <div>uid: {post.uid}</div> */}
            {/* <div>category:{post.cat}</div> */}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
