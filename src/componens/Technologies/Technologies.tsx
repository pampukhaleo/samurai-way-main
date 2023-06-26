import React from "react";

type PropsType = {
  technologiesList: Array<string>
}

function Technologies({technologiesList}: PropsType) {
  return (
    <ul>
      {technologiesList.map(name =>
        <li>
          {name}
        </li>)
      }
    </ul>
  )
}

export default Technologies
