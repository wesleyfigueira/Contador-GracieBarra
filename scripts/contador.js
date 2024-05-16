
const values = document.getElementById("value"); 
const plusMore2 = document.getElementById("plusMore2"); 
const plusMore3 = document.getElementById("plusMore3"); 
const plusMore4 = document.getElementById("plusMore4"); 
const reset = document.getElementById("resete"); 

const values2 = document.getElementById("value2"); 
const plusMore22 = document.getElementById("2plusMore2"); 
const plusMore23 = document.getElementById("2plusMore3"); 
const plusMore24 = document.getElementById("2plusMore4"); 
const reset2 = document.getElementById("2reset"); 



let count = 0;
let count2 = 0;
/*-----------contador 1-------------------- */
function upDateValue() {
    values.innerHTML = count;
}

function plusButtonMore2(){
    count+=2;
    upDateValue();
}
function plusButtonMore3(){
    count+=3;
    upDateValue();
}
function plusButtonMore4(){
    count+=4;
    upDateValue();
}

function resetButton(){
    count = 0;
    upDateValue();
}

plusMore2.addEventListener("click",plusButtonMore2);
plusMore3.addEventListener("click",plusButtonMore3);
plusMore4.addEventListener("click",plusButtonMore4);
reset.addEventListener("click", resetButton);


/**-------------------contador 2 ------------------ */
function upDateValue2() {
    values2.innerHTML = count2;
}

function plusButtonMore22(){
    count2+=2;
    upDateValue2();
}
function plusButtonMore23(){
    count2+=3;
    upDateValue2();
}
function plusButtonMore24(){
    count2+=4;
    upDateValue2();
}

function resetButton2(){
    count2 = 0;
    upDateValue2();
}

plusMore22.addEventListener("click",plusButtonMore22);
plusMore23.addEventListener("click",plusButtonMore23);
plusMore24.addEventListener("click",plusButtonMore24);
reset2.addEventListener("click", resetButton2);


/*-------------fim contadorr---------------------- */


const timerEl = document.getElementById("timer");
const marksList = document.getElementById("marks-list");

let intervalId =0;
let timer = 0;
let marks = [];


const formatTime =(time) =>{
    
    const minutes = Math.floor((time % 360000)/6000);
    const seconds = Math.floor((time % 6000)/ 100);
    

    return ` ${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

}

const toggleTimer =() =>{
    const button =document.getElementById("power");
    const action = button.getAttribute("action");

    clearInterval(intervalId);

    if (action == "start" || action =="continue"){
        intervalId = setInterval(() =>{
            timer+=1;
            setTimer(timer);
        },10)
        button.setAttribute("action","pause");
        button.innerHTML = "<i class='fa-solid fa-pause'><i>";
    }else if (action =="pause"){
        button.setAttribute("action","continue");
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const setTimer =(time) => {
    timerEl.innerText = formatTime(time);
}

document.getElementById("power").addEventListener("click",toggleTimer);


/*-------Marcar parada ---------*/

const addMarkToList = (markIndex,markTime) =>{
    marksList.innerHTML +=`<h3>Finalizado ${markIndex}</h3><p> ${formatTime(markTime)}</p>`
}
const markTime =()=>{
    marks.push(timer);
    addMarkToList(marks.length , timer);
}

document.getElementById("mark").addEventListener("click",markTime);

/*---------resetar tempo---------*/
const resetTimer =() =>{
    clearInterval(intervalId);
    timer = 0;
    marks= [];
    setTimer(timer);
    marksList.innerHTML = "";
    const button = document.getElementById("power");
    button.setAttribute("action","start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';


}
document.getElementById("reset").addEventListener("click",resetTimer);