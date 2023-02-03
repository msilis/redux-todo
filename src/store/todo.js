import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "item",

  //set initial state
  initialState: {
    nextId: 3,
    data: [
      { id: 1, content: "Content 1", completed: false },

      { id: 2, content: "Get some milk", completed: false },
    ],
  },

  reducers: {
    //mark completed
    completeTodo: (state, action) => {
      console.log(current(state.data));
      Object.values(state.data).forEach((value) => {
        console.log(action.payload);
        if (value.content === action.payload) {
          value.completed = !value.completed;
          console.log(value.completed);
        }
        console.log(current(state.data));
      });
    },

    //edit item
    editTodo: (state, action) => {
      Object.values(state.data).forEach((value) => {
        if (value.content === action.payload.item) {
          value.content = action.payload.editedItem;
        }
      });
    },

    //delete item
    deleteTodo: (state, action) => {
      const listItemId = action.payload;
      state.data = state.data.filter((item) => item.content !== listItemId);
    },

    //add item
    addTodo: (state, action) => {
      state.data = [
        ...state.data,
        { id: state.nextId, content: action.payload, completed: false },
      ];
      state.nextId++;
    },
  },
});

export const { completeTodo, editTodo, deleteTodo, addTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
