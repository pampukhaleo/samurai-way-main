import React from 'react'
import { NavLink } from 'react-router-dom';
import { DialogsType } from '../../../redux/state';

type PropsType = {
  dialogs: DialogsType[]
}

export const DialogsItem = ({ dialogs }: PropsType) => {
  return (
    <div className="dialogs">
      { dialogs.map(({ id, profileName }) => (
        <NavLink to={ '/messages/' + id } key={id}>
          <h3>{ profileName }</h3>
        </NavLink>
      )) }
    </div>
  )
}
