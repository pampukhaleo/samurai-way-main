import React from "react";

type PropsType = {
  buttonsList: Array<string>
}

function Header({buttonsList}: PropsType) {
  return (
    <div style={{marginTop: "15px", textAlign: "center"}}>
      {buttonsList.map(name =>
        <a href="#" style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "grey",
          padding: "5px",
          marginRight: "5px",
          border: "2px solid black",
          borderRadius: "5px"
        }}>
          {name}
        </a>)}
    </div>
  )
}

export default Header
