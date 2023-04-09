import React from "react";
import { data } from "../data/content";
import { NavLink } from "react-router-dom";

export default function Home() {

  
  return <div>{
    data.map(post => (
      <div className="post" key={post.id}>
        <NavLink to={`/post/${post.id}`}>
        <div>{post.title}</div>
        <div>{post.descriptionShort}</div>
        </NavLink>
      </div>
    ))
    }</div>;
}
