import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'
import { LinkA } from "./ListItem.styled"

export const ListItem = ({todo}: {todo:ToDo}) => {
  return (

<LinkA
    className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} 
    target="_blank"
    rel="noreferrer"
    href={`/list/${todo.id}`}
    >{todo.text}</LinkA>

  )
}