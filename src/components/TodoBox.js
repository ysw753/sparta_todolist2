import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { done, doing } from "../redux/todosSlice";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  position: relative;
  width: 250px;
  height: 120px;
  margin-bottom: 20px;
  border: 1px solid black;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  button {
    position: absolute;
    bottom: 0px;
  }
`;

const TodoBox = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doneTodo = () => {
    const id = todo.id;
    dispatch(done({ id }));
  };
  const doingTodo = () => {
    const id = todo.id;
    dispatch(doing({ id }));
  };
  const goDetail = () => {
    navigate(`/detail/${todo.id}`);
  };
  return (
    <Box>
      <h2 style={{ cursor: "pointer" }} onClick={goDetail}>
        {todo.title}
      </h2>
      {!todo.isDone && <button onClick={doneTodo}>완료</button>}
      {todo.isDone && <button onClick={doingTodo}>진행중</button>}
    </Box>
  );
};
export default TodoBox;
