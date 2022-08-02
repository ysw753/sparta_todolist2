import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/todosSlice";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 5rem;

  input {
    width: 400px;
    height: 30px;
    margin-bottom: 10px;
    border: 2px solid #b9edb9;
    :focus {
      border-color: green;
      outline: none;
    }
  }

  textarea {
    width: 400px;
    height: 300px;
    margin-bottom: 10px;
    resize: none;
    border: 2px solid #b9edb9;
    :focus {
      border-color: green;
      outline: none;
    }
  }
  button {
    width: 120px;
    height: 40px;
    cursor: pointer;
    border: 2px solid green;
    background: none;
    :hover {
      background: #daf3da;
    }
  }
  div {
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
`;

const CreateTodo = ({ backclick }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const [title, setTitle] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const dispatch = useDispatch();
  const goback = () => {
    backclick();
  };

  const changeHandler = (e) => {
    setTitle(e.currentTarget.value);
    setIsEntered(true);
    console.log(isEntered);
  };

  const submitform = () => {
    if (title.trim() === "") {
      setIsEntered(false);
      titleRef.current.focus();

      return;
    }
    const id = new Date().valueOf();

    const newData = {
      id: id,
      title: title,
      content: contentRef.current.value,
      isDone: false,
    };

    dispatch(add({ newData }));
    backclick();
  };

  return (
    <Box>
      <input
        ref={titleRef}
        test={isEntered ? 1 : 0}
        onChange={changeHandler}
        type="text"
        placeholder="할일제목"
      />
      <textarea ref={contentRef} />
      <div>
        <button onClick={goback}>뒤로가기</button>
        <button onClick={submitform}>추가</button>
      </div>
    </Box>
  );
};
export default CreateTodo;
