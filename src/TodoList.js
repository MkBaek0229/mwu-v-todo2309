export default function TodoList({$target}) {
    const $h1 = document.createElement("h1");
    $h1.textContent = "투두리스트";
    $target.appendChild($h1);
}
