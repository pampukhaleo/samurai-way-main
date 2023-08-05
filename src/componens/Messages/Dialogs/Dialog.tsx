import React from 'react'
import { NavLink } from 'react-router-dom';
import { DialogType } from '../../../App';

type PropsType = {
  dialogData: DialogType[]
}

export const DialogsItem = ({ dialogData }: PropsType) => {
  return (
    <div className="dialogs">
      { dialogData.map(({ id, profileName }) => (
        <NavLink to={ '/messages/' + id } key={id}>
          <h3>{ profileName }</h3>
        </NavLink>
      )) }
    </div>
  )
}
