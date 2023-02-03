import { useDispatch, useSelector } from "react-redux";
import { editTodo, completeTodo, deleteTodo } from "../store/todo";
import "./ItemDisplay.css";

function ItemDisplay() {
  const { todoReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(todoReducer['data'])

  //Edit functionality
  function handleEditClick(event){
    let item = event.target.nextSibling.nextSibling.textContent;
    let editedItem = prompt('What change would you like to make?')
    console.log(item, editedItem)
    dispatch(editTodo({item, editedItem}))
}

//Mark Complete functionality

function handleCompleteClick(event){
    let item = event.target.nextSibling.textContent;
    console.log(item)
    dispatch(completeTodo(item));
    console.log(event.target.nextSibling.textContent)
}

//Delete functionality
function handleDelete(event){
    let item = event.target.nextSibling.nextSibling.nextSibling.textContent
    console.log(item)
    dispatch(deleteTodo(item))
}

  return (
    <div className="display-list-container">
      {Object.values(todoReducer["data"]).map((val, index) => {
        return (
          <div className="item-container" key={index}>
            <button id="delete" onClick={handleDelete}>Delete</button>
            <button id="edit" onClick={handleEditClick}>Edit</button>
            <button id="complete" onClick={handleCompleteClick}>Complete</button>
            <p className={val["completed"].toString()}>{val["content"]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemDisplay;
