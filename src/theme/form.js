import styled, {css} from 'styled-components'

/*
As a component & file share same styles external
stylesheet was create to be able to import input both file
*/
export const ContactLabel = styled.label`
margin-top: .5em;
`
//To share styles for the input and textarea
const styles = css`
background: #F2F2F2;
border: 1px solid #A9A8A8;
border-radius: .2em;
padding: .5em;
margin: .5em 0;
`
export const InputField = styled.input`${styles}`;
export const Message = styled.textarea`${styles}`;
