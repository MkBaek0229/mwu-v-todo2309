export default function TodoForm({$target, onSumbit}){
    const $form = document.createElement("form");
    $target.appendChild($form);
    $form.innerHTML = `
    <input type="text" name="todo" />
    <button>버튼</button>
    `          
    $form.addEventListener("submit", e => {
        e.preventDefault();   
        let text = $form.querySelector('input').value;
        if(text.length > 1){
            onSumbit(text);
            $form.querySelector('input').value = '';
        }
        
    })


    
    

    
  
}