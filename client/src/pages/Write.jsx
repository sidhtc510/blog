import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");
  // console.log(value);
  return (
    <div className="write">
      <div className="add">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            status: <b>draft</b>
          </span>
          <span>
            visibility: <b>public</b>
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">Upload image</label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" id="FrontEnd" value="FrontEnd" />
          <label htmlFor="FrontEnd">FrontEnd</label>

          <input type="radio" name="cat" id="BackEnd" value="BackEnd" />
          <label htmlFor="BackEnd">BackEnd</label>

          <input type="radio" name="cat" id="QA" value="QA" />
          <label htmlFor="QA">QA</label>
        </div>
      </div>
    </div>
  );
}
