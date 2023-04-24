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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return <div dangerouslySetInnerHTML={{ __html: doc.body.innerHTML }} />;
  };

  return (
    // <div>
    //   {id}

    //  <NavLink to={`/write/?edit=2`}>Edit post</NavLink>
    //  <NavLink to={``}>Delete post</NavLink>
    // </div>
    <>
      <h2 style={{ textAlign: "center" }}>{post.title}</h2>
      <div className="singleWrapper">
        <div className="singlePost">
          {/* <div>id: {post.id}</div> */}
          {/* <div>title: {post.title}</div> */}
          {/* <div>image: {post?.img}</div> */}
          <img src={`../upload/${post?.img}`} alt="" />
          <div className="dateAuthorWrapper">
            <span>Дата: {moment(post.date).fromNow()}</span>
            <span>Автор: {post.username}</span>
          </div>
          {/* <div>category:{post.cat}</div> */}
          <div className="singlePostDescr">{getText(post.desc)}</div>

          {currentUser && currentUser.username === post.username ? (
            <div className="buttonGroup">
              <NavLink
                className="editPostButton"
                to={`/write/?edit=${post.id}`}
                state={post}
              >
                Edit post
              </NavLink>
              <NavLink className="deletePostButton" onClick={handleDelete}>
                Delete post
              </NavLink>
            </div>
          ) : null}
        </div>

        <Menu cat={post.cat} />
      </div>
    </>
  );
}
