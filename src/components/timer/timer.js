/* eslint-disable react-hooks/rules-of-hooks */


// const[calcDate, setCalcDate] = useState()
//     const[calcTime, setCalcTime] = useState()

    
//     const initializerTimer = ()=>{
//         let currentDate = new Date()
//         let locale = 'pt-BR'
//         setCalcDate(currentDate.toLocaleDateString(locale, {
//             day:'2-digit',
//             month:'long',
//             year:'numeric'
//         }))

//         setCalcTime(currentDate.toLocaleTimeString(locale))
//     }

//     function showTimerDate(){
//         initializerTimer()
//         setInterval(()=>{
//             initializerTimer()
//         },1000)
//     }

const timerAndDate = ()=>{

    let today = new Date()
    let locale = 'pt-BR'
    console.log(today.toLocaleDateString(locale,{
        day:'2-digit',
        month:'long',
        year:'numeric'
    }));
    
    console.log(today.toLocaleTimeString(locale))
    
    
}

const hour = () =>{
    timerAndDate()
    setInterval(()=>{
       timerAndDate() 
    },1000)
    return
}
console.log(hour())

console.log('pare');
