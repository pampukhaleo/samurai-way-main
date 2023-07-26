import React from 'react';
import './footer.css'

type PropsType = {
  buttonsList: ButtonList[]
}

type ButtonList = {
  name: string
  href: string
  id: number
}

function Footer({buttonsList}: PropsType) {
  return (
    <footer className="footer">
      {buttonsList.map(item =>
        <a key={item.id} href={item.href} className="footerLink">
          {item.name}
        </a>)}
    </footer>
  )
}

export default Footer
