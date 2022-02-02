import './Display.css'


const Display = (props)=>{
    return(
       
            <div className={`display
                ${props.className}
            `}  > 
                {props.value} 
                <br/>  
                {props.children}   
             </div>
            
      
    )
}

export default Display