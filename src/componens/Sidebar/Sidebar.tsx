import React from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';

type PropsType = {
  buttonsList: ButtonList[]
}

type ButtonList = {
  name: string
  href: string
  id: number
}

function Sidebar({ buttonsList }: PropsType) {
  return (
    <header className="header">
      { buttonsList.map(item =>
        <NavLink key={item.id} to={ item.href } className="sidebarLink">
          { item.name }
        </NavLink>) }
    </header>
  )
}

export default Sidebar
