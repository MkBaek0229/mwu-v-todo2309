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
        ]


        let lastId = Myroutine[Myroutine.length -1].id;
      
   
   
    const onSumbit = (text) => {
        const nextState = todoList.state.concat(
          [
            {
              id: lastId + 1,
              text,
              checked: false
            }
          ]
        ) 
         todoList.setState(nextState);
         lastId++;
         console.log(todoList.state);
         
       }
       
    const onDelete = (id) => {
      const nextState = todoList.state.filter(todo => todo.id != id);
      todoList.setState(nextState)
    }

    const onToggle = (id) => {
      const nextState = todoList.state.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
        );
      todoList.setState(nextState)
    }

       const header = new Header({$target});

       new TodoForm({$target, onSumbit});

  
       const todoList = new TodoList({$target, Myroutine, onDelete, onToggle});
}
 
