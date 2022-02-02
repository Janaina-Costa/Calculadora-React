import './Buttons.css'

const Button = (props)=>{
    // let classes = 'buttons'
    // classes+= props.operation?'operation': ''
    // classes += props.double?'double': ''
    // classes += props.triple?'triple': ''
    return(
        
           <button
                 onClick={props.onClick}
                 value = {props.value}
                 className={`
                    buttons 
                    ${props.operation? 'operation': ''}
                    ${props.double? 'double': ''}
                    ${props.tiple? 'triple': ''}
                 `}>
                {props.label}
           

           </button>
       

    )
}

export default Button