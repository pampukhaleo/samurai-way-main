import React from 'react';
import './button.css'

type ButtonType = {
  name: string
  callBack: () => void
}
export const Button = ({name, callBack}: ButtonType) => <button onClick={callBack}>{name}</button>
