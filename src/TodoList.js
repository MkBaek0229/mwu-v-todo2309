export default function TodoList({$target, Myroutine}) {
    const $list = document.createElement("div");
    $target.appendChild($list);

    this.state = Myroutine;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        $list.innerHTML = `
        <ul>
            ${this.state.map((todo) => `<li>${todo}</li>`).join()}
        </ul>
    `
    }
    this.render();
    
    
}
