import React from "react";
import "./technologies.css"

type PropsType = {
  technologiesList: Array<string>
}

function Technologies({technologiesList}: PropsType) {
  return (
    <ul className="technologiesContext">
      {technologiesList.map(name =>
        <li>
          {name}
        </li>)
      }
    </ul>
  )
}

export default Technologies
