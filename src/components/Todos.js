import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoBox from "./TodoBox";

const Section = styled.div`
  margin: auto;
  width: 800px;
  max-width: 1200px;
  min-width: 800px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Doing = styled.div`
  margin: auto;
  margin-top: 50px;
`;
const Done = styled.div`
  margin: auto;
  margin-top: 50px;
`;

const Todos = () => {
  const { todos } = useSelector((state) => state);
  return (
    <Section>
      <Doing>
        <p>DOING</p>
        {todos.map((todo) =>
          !todo.isDone ? <TodoBox key={todo.id} todo={todo} /> : null
        )}
      </Doing>

      <Done>
        <p>DONE</p>
        {todos.map((todo) =>
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
