import React from 'react';
import styled from 'styled-components'

const Location = styled.ul`
line-height: 1.5;
li:first-child {
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.weights.semi};
}
`

export const Address = ({area, address, town, postcode}) => {
  return (
    <Location>
      <li>{area}</li>
      <li>Doggie walks</li>
      <li>{address}</li>
      <li>{town}</li>
      <li>{postcode}</li>
    </Location>
  )
}
