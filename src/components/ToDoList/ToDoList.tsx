import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { ToDoContainer, ToDoUl, ToDoUlComplited, ToDoUlFailed } from "./ToDoList.styled"

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo : Function}) => {


const checkedList = () => {
  return props.todos
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <ToDoListItem toDoItem={item} 
              key ={item.id} 
              updateToDo={props.updateToDo} 
              deleteToDo={props.deleteToDo}/>
            )
          })
          
}
const unCheckedList = () => {
  return props.todos
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <ToDoListItem toDoItem={item} 
              key ={item.id} 
              updateToDo={props.updateToDo} 
              deleteToDo={props.deleteToDo}/>
            )
          })
          
}

  return  (
<ToDoContainer>
        <ToDoUl>
          <ToDoUlFailed>
             {checkedList()}
          </ToDoUlFailed>
        </ToDoUl>
        <ToDoUl>
          <ToDoUlComplited>
             {unCheckedList()}
          </ToDoUlComplited>
        </ToDoUl>
 
    </ToDoContainer>
  )
}