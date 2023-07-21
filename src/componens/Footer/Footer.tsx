import React from 'react';
import './footer.css'

type PropsType = {
  buttonsList: Array<string>
}

function Footer({buttonsList}: PropsType) {
  return (
    <footer className="footer">
      {buttonsList.map(name =>
        <a href="#" className="footerLink">
          {name}
        </a>)}
    </footer>
  )
}

export default Footer
