import React, { useEffect, useState } from "react";
// import { data } from "../data/content";
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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    let withoutHtml = (
      <div dangerouslySetInnerHTML={{ __html: doc.body.innerHTML }} />
    );

    return withoutHtml;
  };

  return (
    
      <div className="postsContainer">
        {posts.map((post) => (
          <NavLink to={`/post/${post.id}`} key={post.id}>
            <div className="posts">
              {/* <div>id: {post.id}</div> */}
              <img src={`./upload/${post.img}`} alt="" />
              <div className="postTextWrap">
                <div className="titleDescrWrap">
                  <div className="postsTitle"> {post.title}</div>
                  <div className="postsDescr">
                    {getText(post.desc.slice(0, 149) + " ...")}
                  </div>
                </div>

                <div className="dateUidCatWrap">
                  <div>{moment(post.date).fromNow()}</div>
                  {/* <div>uid: {post.uid}</div> */}
                  {/* <div>{post.cat}</div> */}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    
  );
}
