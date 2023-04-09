import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Single({}) {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <div>
      {id}

     <NavLink to={`/write/?edit=2`}>Edit post</NavLink>
     <NavLink to={`/write/?delete=2`}>Delete post</NavLink>
    </div>
  );
}
