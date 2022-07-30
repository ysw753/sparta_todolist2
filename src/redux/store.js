import { createSlice, configureStore } from "@reduxjs/toolkit";
const dummy = [
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
const todosSlice = createSlice({
  name: "todoData",
  initialState: {
    todos: dummy,
  },
  reducers: {
    load: (state) => {
      return state;
    },
  },
});

export const store = configureStore({
  reducer: todosSlice.reducer,
});
