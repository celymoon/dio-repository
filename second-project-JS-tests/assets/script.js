/*
//THIRD TEST
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    counterColor(); //Here I am calling the function I made downthere, but I could also only paste it instead.
    
    //ex:  if(currentNumber < 0 ){
   //     document.getElementById('currentNumber').style.color = "red";
   // }else if(currentNumber > 0){
   //     document.getElementById('currentNumber').style.color = //"green";
   // } 

   // this instead of another function.
   
}

function decrement(){
    
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

     counterColor();
}

function counterColor(decrement, increment){
    if(currentNumber < 0 ){
        document.getElementById('currentNumber').style.color = "red";
    }else if(currentNumber > 0){
        document.getElementById('currentNumber').style.color = "green";
    }
}counterColor();*/

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var menosbtn = document.getElementById("subtrair");
var adicionarbtn = document.getElementById("adicionar");
var disableBtn;


menosbtn.addEventListener('click', () =>{
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    disableBtn();
})


adicionarbtn.addEventListener('click', () => {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    disableBtn();
})

function disableBtn(){
    if(currentNumber <= 0 ){
        menosbtn.disabled = true;
    }else{
        menosbtn.disabled = false;
    }

    if(currentNumber >= 10){
        adicionarbtn.disabled = true;
    }else{
        adicionarbtn.disabled = false;
    }
}disableBtn();




