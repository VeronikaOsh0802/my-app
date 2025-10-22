import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

interface ComponentsProps {
   todos: ToDo[] 
}


export const HomePage = ({todos}: ComponentsProps) => {
   return (
    <div className="container">
       {
         todos.map((todo: ToDo, idx: number) => {
            return (<ListItem todo={todo} key={idx}/>)
 
         })
       }
    
    </div>
   )
}