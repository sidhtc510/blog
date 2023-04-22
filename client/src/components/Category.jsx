import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Category() {
  return (
    <div className='categoryContainer'>
        <NavLink to="/?cat=fe">FrontEnd</NavLink>
        <NavLink to="/?cat=be">BackEnd</NavLink>
        <NavLink to="/?cat=qa">QA</NavLink>
    </div>
  )
}
