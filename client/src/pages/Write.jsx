import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";




export default function Write() {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  // console.log(cat);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
  // console.log(imgUrl);
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : state?.img,
          })
       
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "placeholder.jpg",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });

          navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      <div className="add">
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          {/* <span>
            status: <b>draft</b>
          </span>
          <span>
            visibility: <b>public</b>
          </span> */}
          <input
            // style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            {state?.img ? `Uploaded image -  ${state?.img}` : ""}{" "}
          </label>

          <div className="buttons">
            {/* <button>Save as a draft</button> */}
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input
            type="radio"
            checked={cat && cat === "fe"}
            name="cat"
            id="FrontEnd"
            value="fe"
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="FrontEnd">FrontEnd</label>

          <input
            type="radio"
            checked={cat && cat === "be"}
            name="cat"
            id="BackEnd"
            value="be"
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="BackEnd">BackEnd</label>

          <input
            type="radio"
            checked={cat && cat === "qa"}
            name="cat"
            id="qa"
            value="qa"
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="qa">QA</label>
        </div>
      </div>
    </div>
  );
}
