import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { done, doing } from "../redux/todosSlice";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  width: 250px;
  height: 130px;
  margin-bottom: 20px;
  border: 1px solid black;
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
