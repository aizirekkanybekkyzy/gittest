import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import styled from "styled-components";

const Main = ({ text, bgcolor }) => {
  const [user, setUser] = useState(false);

  const oneHandler = () => {
    setUser(true);
  };

  const twoHandler = () => {
    setUser(false);
  };

  return (
    <div>
      {user === true ? <Modal noHandler={twoHandler} /> : null}
      {text.map((el) => (
        <Fragment key={el.id}>
          <Back bgcolor={el.colar}>
            <h1>Id :{el.id}</h1>
            <h2>Name :{el.title}</h2>
            <h2>Summa :{el.summa} сом</h2>
            <img src={el.img} alt="img" />
            <ButtonColar onClick={oneHandler}>Delete</ButtonColar>
          </Back>
        </Fragment>
      ))}
    </div>
  );
};

export default Main;

const Back =styled.div`
  width : 500px;
  border-radius : 5px;
  text-align : center;  
  background-color:${(props)=>props.bgcolor};
  box-shadow : 0px 0px 5px 5px #7373e1;
`

const ButtonColar = styled.button`
  padding : 5px 20px;
  margin-left : 35px;
  background-color : #8f787893;
  border-radius: 5px;
  color: wheat;
  font-weight : 800;
`