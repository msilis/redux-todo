import { createSlice, current } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'item',

    //set initial state
    initialState: {
        nextId: 3,
        data:
        [
             {  id: 1,
                content: 'Content 1',
                completed: false
            },

             {id: 2,
                content: 'Get some milk',
                completed: false
            }
        ]
    },

    reducers: {
        //mark completed
        completeTodo: (state)=> {
            console.log(current(state.data))
            /* state.completed = true; */
        },

        //edit item
        editTodo: (state, action) => {
            /* state.content = action.payload */
            console.log(current(state.data), action.payload)
            Object.values(state.data).forEach((value)=> {
                if(value.content === action.payload.item){
                    value.content = action.payload.editedItem
                }
            })
            
            
        },

        //delete item
        deleteTodo: (state, action) => {
            const listItemId = action.payload;
            state.data = state.data.filter((listItem)=> listItem.id !== listItemId)
        },

        //add item
        addTodo: (state, action) => {
            state.data = [...state.data, {id: state.nextId, content: action.payload, completed: false}];
            state.nextId++
            console.log(state.nextId)
            console.log(state.data)
        }
    }
})

export const { completeTodo, editTodo, deleteTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;