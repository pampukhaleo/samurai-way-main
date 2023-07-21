import React from 'react';
import './button.css'

type ButtonType = {
  name: string
}
export const Button = ({name}: ButtonType) => <button>{name}</button>
