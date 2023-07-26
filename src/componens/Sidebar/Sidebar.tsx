import React from 'react';
import './sidebar.css'

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
        <a key={item.id} href={ item.href } className="sidebarLink">
          { item.name }
        </a>) }
    </header>
  )
}

export default Sidebar
