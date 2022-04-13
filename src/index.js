const myBox = document.getElementById('my-box');
// var colorInterval = setInterval(setColor, 1000);

function changeColor(){
if (myBox.style.backgroundColor === 'red'){
    myBox.style.backgroundColor = 'blue';}
    else if (myBox.style.backgroundColor === 'blue'){ 
        myBox.style.backgroundColor = 'yellow';
    } else {
        myBox.style.backgroundColor = 'red';
    }}

function onClick(){
    setInterval(changeColor, 1000);

}

myBox.addEventListener('click', onClick);