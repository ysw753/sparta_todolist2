import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailBox = styled.div`
  background: red;
  margin: auto;
  width: 50%;
  min-width: 500px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

const Detail = () => {
  const { todoId } = useParams();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === parseInt(todoId));

  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };

  return (
    <>
      {todo.map((i) => {
        return (
          <DetailBox>
            <h1>{i.title}</h1>
            <p>{i.content}</p>
            <button onClick={goHome}>홈으로 돌아가기</button>
          </DetailBox>
        );
      })}
    </>
  );
};
export default Detail;
