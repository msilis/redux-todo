import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './EnterTodo.css';
import { completeTodo, editTodo, deleteTodo, addTodo } from '../store/todo';

function EnterTodo(){
    //state and dispatch declarations
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    //functions to make buttons work
    function handleInputChange(event){
        setUserInput(event.target.value)   
    }

    console.log(userInput)

    function handleAddClick(event){
        event.preventDefault();
        dispatch(addTodo(userInput));
        setUserInput('')
    }
    

    return(
        <div className="input-container">
            <div className='input-field'>
            <label className='input-label'>What do you want to add?</label>
            <input id='user-input' type='text' value={userInput} onChange={handleInputChange} autoFocus={true}></input>
            </div>
            <div className='button-container'>
                <button id='add-item' onClick={handleAddClick}>Add To-Do</button>
            </div>
        </div>
    )
}

export default EnterTodo;