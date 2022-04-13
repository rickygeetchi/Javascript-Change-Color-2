const myBox = document.getElementById('my-box');


function setColor(){
if (myBox.style.backgroundColor == 'red'){
    myBox.style.backgroundColor = 'blue';} else {
        myBox.style.backgroundColor = 'red'
    }
  
}

function onClick(){
    setColor();

}

myBox.addEventListener('click', onClick);