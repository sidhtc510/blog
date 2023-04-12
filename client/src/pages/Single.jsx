import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Menu from "../components/Menu";

export default function Single({}) {
  // const params = useParams();
  // const id = parseInt(params.id);

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  
  return (
    // <div>
    //   {id}

    //  <NavLink to={`/write/?edit=2`}>Edit post</NavLink>
    //  <NavLink to={``}>Delete post</NavLink>
    // </div>

    <div className="singleWrapper">
      <div className="singlePost">
        {/* <div>id: {post.id}</div> */}
        <div>title: {post.title}</div>
        {/* <div>image: {post?.img}</div> */}
        <img src={`../upload/${post?.img}`} alt="" />
        <div>date: {moment(post.date).fromNow()}</div>
        <div>username: {post.username}</div>
        <div>category:{post.cat}</div>
        <div>{getText(post.desc)}</div>

        {currentUser && currentUser.username === post.username ? (
          <div>
            <NavLink to={`/write/?edit=${post.id}`} state={post}>Edit post</NavLink>
            <NavLink onClick={handleDelete}>Delete post</NavLink>
          </div>
        ) : null}
      </div>
   
      <Menu cat={post.cat} />
    </div>
  );
}
