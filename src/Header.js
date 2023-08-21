export default function Header({$target}) {
    const $hd = document.createElement("h1");
    $hd.textContent = "헤더";
    $target.appendChild($hd);

}