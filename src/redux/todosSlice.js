import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  todos: [
    {
      id: 1,
      title: "study",
      content: "오늘도 공부함",
      isDone: false,
    },
    {
      id: 2,
      title: "study2",
      content: "오늘도 공부함2",
      isDone: false,
    },
    {
      id: 3,
      title: "study3",
      content: "오늘도 공부함3",
      isDone: true,
    },
    {
      id: 4,
      title: "study4",
      content: "오늘도 공부함4",
      isDone: true,
    },
    {
      id: 5,
      title: "study5",
      content: "오늘도 공부함5",
      isDone: true,
    },
  ],
};
// export const settingInitalState = (list = []) => {
//   console.log(list);
//   return { todos: list };
// };
export const todosSlice = createSlice({
  name: "todos",
  initialState: INITIALSTATE,
  reducers: {
    settingInitalState: (state, action) => {
      const init = action.payload.todoList;
      state.todos = init;
    },
    add: (state, action) => {
      const newData = action.payload.newData;

      const updatedData = [...state.todos, newData];
      localStorage.setItem("todos", JSON.stringify(updatedData));
      state.todos = updatedData;
    },
    done: (state, action) => {
      const getId = action.payload.id;
      const updatedData = state.todos.map((todo) =>
        todo.id === getId ? ((todo.isDone = true), todo) : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedData));
      state.todos = updatedData;
    },
    doing: (state, action) => {
      const getId = action.payload.id;
      const updatedData = state.todos.map((todo) =>
        todo.id === getId ? ((todo.isDone = false), todo) : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedData));
      state.todos = updatedData;
    },
    remove: (state, action) => {
      const getId = parseInt(action.payload.id);
      console.log(state);
      const updatedData = state.todos.filter((todo) => todo.id !== getId);
      localStorage.setItem("todos", JSON.stringify(updatedData));
      state.todos = updatedData;
    },
  },
});
export const { load, add, done, doing, remove, settingInitalState } =
  todosSlice.actions;
