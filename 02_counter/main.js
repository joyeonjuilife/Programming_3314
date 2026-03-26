let number = 0;
// h1에 있는 숫자 요소를 가져오자
const resultH1 = document.getElementById("num");
// button에 있는 + 요소를 가져오자
const plusButton = document.getElementsByClassName("botton")[0];

// function plus(){
//     number++;
//     resultH1.innterHTML = number;
// }

// plusButton.onclick = () =>{
//     number++;
//     resultH1.innterHTML = number;
// }

function render(){
    resultH1.innerHTML = number;
}


const plus = (value = 1) =>{
    number += value;
    render();
}
const minus = (value = 0) =>{
    number--;
    render();
}

const reset = () =>{
    number = 0;
    render();
}

render();