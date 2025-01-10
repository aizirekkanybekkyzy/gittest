import React from 'react'
import styled from "styled-components"

const Modal = (props) => {

console.log(props);

  return (
     <Colarstyled>
        <SoumStyled>
        <h1>Are you sure?</h1>
        <div>
        <ButtonStyled onClick={props.noHandler}>YES</ButtonStyled>
        <ButtonStyled onClick={props.noHandler}>NO</ButtonStyled>
        </div>
        </SoumStyled>
    </Colarstyled>
  )
}


export default Modal

  const Colarstyled = styled.div`
  background-color: #0000008e;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `

 const SoumStyled = styled.div`
  border: 1px solid;
  padding: 30px 40px;
  width: 300px;
  background-color: #163f97cb;
  text-align: center;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 0px 5px 10px #7373e1;
  font-weight: 900;
  color: #ffffff;
`

 const ButtonStyled = styled.button`
  padding: 5px 25px;
  background-color: #7777c0;
  border-radius: 5px;
  margin: 10px 5px; 
  border-color: #afafe2;
  font-weight: 900;
  color: wheat;
`