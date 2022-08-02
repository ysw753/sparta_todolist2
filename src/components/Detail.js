import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { remove } from "../redux/todosSlice";
const DetailBox = styled.div`
  position: relative;
  background: red;
  margin: auto;
  width: 40%;
  min-width: 500px;
  height: 80vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  h2 {
    text-align: center;
    width: 80%;
    height: 130px;
    word-break: break-all;
    overflow: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .gobackBtn {
    position: absolute;
    left: 50px;
  }
  p {
    width: 80%;
    height: 300px;
  }
`;

const Detail = () => {
  const { todoId } = useParams();
  const {todos} = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => todo.id === parseInt(todoId));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate(`/`);
  };
  const deleteTodo = () => {
    const id = todoId;
    navigate(`/`);
    dispatch(remove({ id }));
  };

  return (
    <>
      {todo.map((i) => {
        return (
          <DetailBox key={i.id}>
            <h2>{i.title}</h2>
            <button
              className="gobackBtn"
              style={{ background: "none", border: "none", fontSize: "50px" }}
              onClick={goHome}
            >
              ⬅
            </button>

            <p>{i.content}</p>
            <button onClick={deleteTodo}>삭제</button>
          </DetailBox>
        );
      })}
    </>
  );
};
export default Detail;
