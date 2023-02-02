import { useDispatch, useSelector } from "react-redux";
import { editTodo, completeTodo } from "../store/todo";
import "./ItemDisplay.css";

function ItemDisplay() {
  const { todoReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(todoReducer["data"]["1"]["content"]);
  console.log(todoReducer.data);

  Object.values(todoReducer["data"]).forEach((val) =>
    console.log(val["content"])
  );

  //Edit functionality
  function handleEditClick(event){
    let item = event.target.nextSibling.nextSibling.textContent;
    let editedItem = prompt('What change would you like to make?')
    console.log(item, editedItem)
    dispatch(editTodo({item, editedItem}))
}

//Mark Complete functionality
function handleCompleteClick(){
    dispatch(completeTodo());
}

  return (
    <div className="display-list-container">
      {Object.values(todoReducer["data"]).map((val, index) => {
        return (
          <div className="item-container" key={index}>
            <button id="delete">Delete</button>
            <button id="edit" onClick={handleEditClick}>Edit</button>
            <button id="complete" onClick={handleCompleteClick}>Complete</button>
            <p className="list-item">{val["content"]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemDisplay;
