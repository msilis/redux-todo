import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'item',

    //set initial state
    initialState: {
        nextId: 2,
        data:
        {
            1: {
                content: 'Content 1',
                completed: false
            }
        }
    },

    reducers: {
        //mark completed
        completeTodo: (state)=>{
            state.completed = true;
        },

        //edit item
        editTodo: (state, action) => {
            state.content = action.payload
        },

        //delete item
        deleteTodo: (state, action) => {
            const listItemId = action.payload;
            state.data = state.data.filter((listItem)=> listItem.id !== listItemId)
        },

        //add item
        addTodo: (state, action) => {
            state.nextId++;
            state.data = action.payload 
        }
    }
})

export const { completeTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;