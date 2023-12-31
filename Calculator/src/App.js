
import { useState } from 'react';
import './App.css';

function App() {
  const[total,setTotal]=useState("");
  const handleClick=(e)=>{
    setTotal(total.concat(e.target.name));
  }
  const clear=()=>{
    setTotal("");
  }
  const calculate=()=>{
    try{
      setTotal(eval(total).toString());
    }catch{
      setTotal("Error");
    }
    
  }
  function handleDelete(){
    setTotal(total.slice(0,-1));
  }
  return (
    <div className="App">
          <div class="navbar">
  <div class="navbar-left">
    <h1>CALCULATOR</h1>
  </div>
  <div class="social-links">
    <a href="/" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="/" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="/" target="_blank"><i class="fab fa-instagram"></i></a>
  </div>
  </div>
      <div className='calculator-container'>
      <div className='calculator-container-left'>
        <form>
           <input type='text' value={total}/>
        </form>
        <div className='keypad'>
          <button id='clear' onClick={clear} className='highlight1'>AC</button>
          <button onClick={handleDelete} className='highlight'>DEL</button>
          <button name='/' className='highlight' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='*' onClick={handleClick} className='highlight'>&times;</button>
          <button name='4' onClick={handleClick}  >4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button  name='-' onClick={handleClick} className='highlight'>-</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button name='+'  onClick={handleClick} className='highlight'>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button id='equal' onClick={calculate} className='highlight2'>=</button>
        </div>
      </div>
      <div className='calculator-container-right'>
        <h1>Calculator Use</h1>
        <p>The calculator is used to facilitate basic arithmetic operations, including addition, subtraction, multiplication, and division. It serves as a practical tool for individuals in various fields, from students solving mathematical equations to professionals performing financial calculations. With a user-friendly interface, the calculator allows users to input numerical values and effortlessly execute mathematical operations, generating accurate results in real-time. Its compact and portable nature makes it a convenient companion for both academic and everyday scenarios.</p>
        </div>
      </div>
      <footer class="footer">
            <div class="footer-content">
              <div class="copyright">
                <p>&copy; 2023 CALCULATOR. All Rights Reserved.</p>
              </div>
              <div class="socials-links">
                <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/explore" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/yourusername" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </footer>
    </div>
  );
}

export default App;
