
import './App.css';
import Title from './components/title/Title'
import Calculator from './components/calculator/Calculator'
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
   
     <Title/>
      <Calculator className="calculator"/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
