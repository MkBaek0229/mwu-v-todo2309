import Header from "./Header.js";
import TodoForm from "./ToDoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
   const Myroutine = ["공부", "운동", "밥"]
   
    const onSumbit = (text) => {
        const nextState = [...todoList.state, text]
         todoList.setState(nextState);
         console.log(todoList.state)
       }


       new Header({$target});

       new TodoForm({$target, onSumbit});

       const todoList = new TodoList({$target, Myroutine});
}
 
