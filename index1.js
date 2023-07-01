const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#second')
const hourElement = document.querySelector('#hour')


let sec = 0, min = 0, hour = 0
let intervalId

const start = () => {
    intervalId = setInterval(() => {

        if (sec < 60) {
            sec++
        }
        else if (min >= 60) {
            hour++
            min = 0
        }
        else {
            sec = 0,
                min++
        }

        secondElement.innerText = String(sec).padStart(2, '0')
        minuteElement.innerText = String(min).padStart(2, '0')
        hourElement.innerText = String(hour).padStart(2, '0')
    }, 1000);
}

const stop = () => {
    clearInterval(intervalId)
}

const reset = () => {
    sec = 0
    min = 0
    hour = 0
    secondElement.innerText = sec
    minuteElement.innerText = min
    hourElement.innerText = hour
}

const btnstart=document.getElementById('btnstart')
const btnstop=document.getElementById('btnstop')
const btnreset=document.getElementById('btnreset')


// btnstart.addEventListener('click',()=>{

//      intervalId = setInterval(() => {

//                 if (sec < 59) {
//                     sec++
//                 }
//                 else if (min >= 60) {
//                     hour++
//                     min = 0
//                 }
//                 else {
//                     sec = 0,
//                         min++
//                 }
        
//                 secondElement.innerText = String(sec).padStart(2, '0')
//                 minuteElement.innerText = String(min).padStart(2, '0')
//                 hourElement.innerText = String(hour).padStart(2, '0')
//             }, 1000);

// })

// btnstop.addEventListener('click',()=>{

//     clearInterval(intervalId)
// })

// btnreset.addEventListener('click',()=>{
//     sec = 0, min = 0, hour = 0
    
//     secondElement.innerText = sec
//     minuteElement.innerText = min
//     hourElement.innerText = hour
// })

