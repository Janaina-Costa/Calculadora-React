import linkedin from '../img/likdin.png'
import git from '../img/github.png'
import './Footer.css'

const Footer = ()=>{

    return(
        <footer>
                <h4 className='marca'> Janaina Costa</h4>
                
               <a href="https://www.linkedin.com/in/janaina-costa-1193241b2/" target='_blank'><img className='redesocial' width='40px' height='40px' src={linkedin} alt="linkedin img" /></a> 


                <a href="https://github.com/Janaina-Costa" target='_blank'><img className='redesocial' width='40px' height='40px' src={git}alt="github img" /></a> 
                
            </footer>

    )
}

export default Footer