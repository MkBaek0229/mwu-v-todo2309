export default function TodoList({$target, Myroutine, onDelete}) {
    const $list = document.createElement("div");
    $target.appendChild($list);

    this.state = Myroutine;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    $list.addEventListener("click", e=> {
        if (e.target.classList.contains("del_btn")) {
            const id = parseInt(e.target.getAttribute("data-id"))
            onDelete(id)
        }
        const id = parseInt(e.target.getAttribute('data-id'))
        onDelete(id)
    })
    this.render = () => {
        $list.innerHTML = `
        <ul>
            ${this.state.map(todo => `
            <li>
                ${todo.id}
                <span>${todo.text}</span>
                <button data-id=${todo.id} class="del_btn">X</button>
            </li>`).join('')}
        </ul>
    `
    
    }
    this.render();
    
    
}
