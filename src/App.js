import Header from "./Header.js";
import TodoForm from "./ToDoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
   const Myroutine = [
          {
            id:  1,
            text: '공부하기',
            checked : true
          },
          {
            id:  2,
            text: '밥먹기',
            checked : false
          },
          {
            id:  3,
            text: '운동하기',
            checked : true
          },
    
    
    
    "공부", "운동", "밥"]
   
    const onSumbit = (text) => {
        const nextState = todoList.state.concat(
          [
            {
              id: 4,
              text,
              checked: false
            }
          ]
        )
         todoList.setState(nextState);
         console.log(todoList.state)
         
       }
       
    const onDelete = (id) => {
      const nextState = todoList.state.filter(todo => todo.id != id);
      todoList.setState(nextState)
    }

       const header = new Header({$target});

       new TodoForm({$target, onSumbit});

       const todoList = new TodoList({$target, Myroutine, onDelete});
}
 
