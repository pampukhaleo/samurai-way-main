import React from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';
import { HeaderButtonListType } from '../../index';

type PropsType = {
  buttonsList: HeaderButtonListType[]
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
