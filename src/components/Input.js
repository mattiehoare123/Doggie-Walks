import React from 'react';
import styled, {css} from 'styled-components'
import { ContactLabel, styles, InputField, Message} from '../theme/form'


export const Input = ({name, label, id, type="text"}) => {
  return (
    <React.Fragment>
      <ContactLabel htmlFor={name}>{label}</ContactLabel>
      <InputField id={id} type={type}/>
    </React.Fragment>
  )
}
