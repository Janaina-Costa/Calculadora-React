
import './Calculator.css'
import Buttons from "../buttons/Buttons";
import Display from "../display/Display";
import { useEffect, useState } from 'react';

import lapis1 from '../img/lapis1.png'
import lapis2 from '../img/lapis2.png'
import postit from '../img/postit.png'
import regua from '../img/regua.png'


const date = new Date()

const Calculator=()=>{
    const[displayDigit, setDisplayDigit] = useState(0)
    const[reservDigit, setReservDigit] = useState(0)
    const[operator, setOperator] = useState()
    const[font, setFont] = useState('normalFont')

    const[dateTime, setDateTime] = useState({
        hours:date.getHours(),
        minutes:date.getMinutes(),
        seconds:date.getSeconds(),
        day:date.getDay(),
        mounth:date.getMonth(),
        year:date.getFullYear()

    })

    useEffect(()=>{
        const timer = setInterval(()=>{
            const date = new Date()
            setDateTime({
                hours:date.getHours(),
                minutes:date.getMinutes(),
                seconds:date.getSeconds(),

                day:date.toLocaleDateString('pt-BR', {day:'2-digit'}),
                mounth:date.toLocaleDateString('pt-BR', {month:'2-digit'}),
                year:date.getFullYear()
        
            })

        },1000)
        return() => clearInterval(timer)
    },[])
    

    const addDigit = (digit)=>{
        let digitNow = digit.target.value
        if(displayDigit.length > 11){
            return
        }
        if(displayDigit === 0){
            setDisplayDigit(digitNow)
        }else if(digitNow === '.' && displayDigit.includes('.')){
            return
        }else{
            setDisplayDigit(displayDigit + digitNow)
        }
       
    }

    const clearMemory = ()=>{
        setDisplayDigit(0)
        setReservDigit(0)
        setFont('normalFont')
    }

    const percentSign = ()=>{
        setDisplayDigit(Number(displayDigit)/100)
    }

    const changeSign = ()=>{
        setDisplayDigit(displayDigit * -1)
    }

    const clearDigit = ()=>{
        setDisplayDigit(displayDigit.slice(0,-1))
        
    }

    const getOperator = (op)=>{
        
        let operation = op.target.value
        setOperator(operation)
        setReservDigit(`${displayDigit}`)
        setDisplayDigit(0)

       
    }

    const result = (op)=>{
       
        if(operator === '/' && Number(displayDigit) !== 0){
            setDisplayDigit(Number(reservDigit) / Number(displayDigit))
        }else{
            setDisplayDigit('Erro')
            
        }
        if(operator ==='*'){
            setDisplayDigit(Number(reservDigit) * Number(displayDigit))
        }
        if(operator ==='-'){
            setDisplayDigit(Number(reservDigit) - Number(displayDigit))
        }
        if(operator ==='+'){
            setDisplayDigit(Number(reservDigit) + Number(displayDigit))
        }

        setReservDigit(`${reservDigit} ${operator} ${displayDigit} = `)
        
       setFont('smallFont')
    }




    
        return(

            <div className='back'>
               

            <div className="calculator">
                <Display value = {reservDigit} className = {font}>{displayDigit} </Display>
                
                <Buttons label = 'AC' value = 'AC'  onClick = {clearMemory}/>
                <Buttons label = '%'  value = '%'  onClick = {percentSign}/>
                <Buttons label = '+/-'value = '+/-'  onClick = {changeSign}/>
                <Buttons label = '/'  value = '/'  onClick = {getOperator} operation/>
                <Buttons label = '7'  value = '7'  onClick = {addDigit}/>
                <Buttons label = '8'  value = '8'  onClick = {addDigit}/>
                <Buttons label = '9'  value = '9'  onClick = {addDigit}/>
                <Buttons label = 'x'  value = '*'  onClick = {getOperator} operation/>
                <Buttons label = '4'  value = '4'  onClick = {addDigit}/>
                <Buttons label = '5'  value = '5'  onClick = {addDigit}/>
                <Buttons label = '6'  value = '6'  onClick = {addDigit}/>
                <Buttons label = '-'  value = '-'  onClick = {getOperator}operation/>
                <Buttons label = '1'  value = '1'  onClick = {addDigit}/>
                <Buttons label = '2'  value = '2'  onClick = {addDigit}/>
                <Buttons label = '3'  value = '3'  onClick = {addDigit}/>
                <Buttons label = '+'  value = '+'  onClick = {getOperator} operation/>
                <Buttons label = '.'  value = '.'  onClick = {addDigit}/>
                <Buttons label = '0'  value = '0'  onClick = {addDigit}/>
                <Buttons label = '<-'  value = '<-'  onClick = {clearDigit}/>
                <Buttons label = '='  value = '='  onClick = {result} operation />
                <div className='timer'>
                <div>BR,{dateTime.day}/{dateTime.mounth}/{dateTime.year} </div>
                <div>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}  </div>

                </div>
            </div>
            <img className='img1' src={lapis1} alt=" lapis de cor" width='150px' height='150px'/>
            <img className='img3' src={lapis2} alt=" lapis de cor" width='150px' height='150px'/>
            <img className='img2' src={postit} alt=" postit" width='100px' height='100px'/>
            <img className='img4' src={lapis1} alt=" lapis de cor" width='150px' height='150px'/>
            <img className='img5' src={regua} alt=" regua" width='150px' height='150px'/>

            
                
            </div>
        )
    
}
export default Calculator