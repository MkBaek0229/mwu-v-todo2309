export default function Header({$target}) {
    const $header = document.createElement("h1");
    $header.textContent = "ToDO APP 만들기";
    $target.appendChild($header);

}