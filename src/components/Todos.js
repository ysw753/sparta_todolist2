import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { load, settingInitalState } from "../redux/todosSlice";
import TodoBox from "./TodoBox";

const Section = styled.div`
  margin: auto;
  width: 800px;
  max-width: 1200px;
  min-width: 800px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 4px solid green;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #035003;
  }
  ::-webkit-scrollbar-track {
    background-color: #c8e3c8;
`;
const Doing = styled.div`
  margin: auto;
  margin-top: 50px;
  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const Done = styled.div`
  margin: auto;
  margin-top: 50px;
  span {
    color: green;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Todos = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const localData = localStorage.getItem("todos");
    if (localData) {
      const todoList = JSON.parse(localData);
      dispatch(settingInitalState({ todoList }));
    }
  }, []);
  console.log("todos-component", todos);

  return (
    <Section>
      <Doing>
        <p>🔥DOING</p>
        {todos?.map((todo) =>
          !todo.isDone ? <TodoBox key={todo.id} todo={todo} /> : null
        )}
      </Doing>

      <Done>
        <p>
          <span>✔</span>DONE
        </p>
        {todos?.map((todo) =>
          todo.isDone ? <TodoBox key={todo.id} todo={todo} /> : null
        )}
      </Done>

      {/* {todos.map((todo) => {
        if (todo.isDone) {
          
        } else {
          return <TodoBox key={todo.id} todo={todo} />;
        }
      })} */}
    </Section>
  );
};
export default Todos;
