import { useState } from "react";
import styled from "styled-components";
import CreateTodo from "./form/CreateTodo";

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
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
`;
const Modal = styled.div`
  background-color: white;
  z-index: 100;
  min-width: 40vw;
  min-height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const togglechange = () => {
    setToggle((prev) => !prev);
  };
  const clickBackdrop = () => {
    setToggle((prev) => !prev);
  };
  return (
    <HeaderBox>
      <Button onClick={togglechange}>추가하기</Button>
      {toggle ? (
        <>
          <Backdrop onClick={clickBackdrop} />
          <Modal>
            <CreateTodo backclick={togglechange} />
          </Modal>
        </>
      ) : null}
    </HeaderBox>
  );
};
export default Header;
