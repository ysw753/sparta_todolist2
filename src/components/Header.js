import { useState } from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  margin: auto;
  height: 5vh;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  height: 2rem;
  width: 10rem;
`;

const Backdrop = styled.div`
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
`;
const Modal = styled.div`
  position: absolute;
  background-color: white;
  top: calc(50vh - 300px);
  left: calc(50vw - 40vw);
  width: 80vw;
  height: 600px;
`;
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const togglechange = () => {
    setToggle((prev) => !prev);
  };

  return (
    <HeaderBox>
      <Button onClick={togglechange}>할일 추가</Button>
      {toggle ? (
        <>
          <Backdrop />
          <Modal />
        </>
      ) : null}
    </HeaderBox>
  );
};
export default Header;
