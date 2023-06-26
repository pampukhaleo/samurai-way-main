import React from "react";
import "./sidebar.css"

type PropsType = {
  buttonsList: Array<string>
}

function Sidebar({buttonsList}: PropsType) {
  return (
    <header className="header">
      {buttonsList.map(name =>
        <a href="#" className="sidebarLink">
          {name}
        </a>)}
    </header>
  )
}

export default Sidebar
