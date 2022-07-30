import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 130px;
  margin-bottom: 20px;
  border: 1px solid black;
`;

const TodoBox = ({ todo }) => {
  return <Box>{todo.title}</Box>;
};
export default TodoBox;
