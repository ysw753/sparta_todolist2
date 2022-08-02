import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const DUMMY = [
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
];
export const todosSlice = createSlice({
  name: "todoData",
  initialState: DUMMY,
  reducers: {
    load: (state) => {
      return state;
    },
    add: (state, action) => {
      const newData = action.payload.newData;

      const updatedData = [...state.todos, newData];
      state.todos = updatedData;
    },
    done: (state, action) => {
      const getId = action.payload.id;
      const updatedData = state.todos.map((todo) =>
        todo.id === getId ? ((todo.isDone = true), todo) : todo
      );
      state.todos = updatedData;
    },
    doing: (state, action) => {
      const getId = action.payload.id;
      const updatedData = state.todos.map((todo) =>
        todo.id === getId ? ((todo.isDone = false), todo) : todo
      );
      state.todos = updatedData;
    },
    remove: (state, action) => {
      const getId = parseInt(action.payload.id);

      const updatedData = state.todos.filter((todo) => todo.id !== getId);

      state.todos = updatedData;
    },
  },
});
export const { load, add, done, doing, remove } = todosSlice.actions;
