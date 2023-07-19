import './Content.css';
import crocs from './sprites/crocs.jpeg';
import blackcrocs from './sprites/blackcrocs.jpeg'
import whitecrocs from './sprites/whitecrocs.jpeg'
import bluecrocs from './sprites/bluecrocs.webp'
import pinkcrocs from './sprites/pinkcrocs.webp'
import greencrocs from './sprites/greencrocs.webp'
import yellowcrocs from './sprites/yellowcrocs.jpg'
import './Header.css';
import cart from './sprites/cart.png';

//validate 



function Content() {
    
    
    

  return (
    <section className="Content">

<section id = 'search-bar' className="bar-search">
      <div className = 'search-bar-cont'>
      <h1 className='crocs-head'>STATE DA CROCS</h1>
      <div className="search">
        <input  id='search-label'></input>
    
      </div>
      <button className='button'>search</button>
      <img className= "cart"src = {cart} />

      </div>
     </section>


       <section className='Container1'>
      <section className='Content-item'>
       <div className='Item'>
        <img id = 'c-img'className='crocs-image' src = {blackcrocs}/>
        <h3>We provide quality crocs that are customizable</h3>
       </div>
      </section>

      <section id = 'color-list' className='item-section'>
      <div className='select-item'>
      <div className='items'>
        <h3 className='choose-color'>choose your color</h3>
       <div className='color-set1'>
       <button onMouseOver={()=>document.getElementById('c-img').src = blackcrocs} className='bt-black' >Black</button>
       <button onMouseOver={()=>document.getElementById('c-img').src = whitecrocs}className='bt-white'>White</button>
       <button onMouseOver={()=>document.getElementById('c-img').src = bluecrocs} className='bt-blue'>Blue</button>
  
       </div>

       <div className='color-set2'>
       <button onMouseOver={()=>document.getElementById('c-img').src = pinkcrocs} className='bt-pink'>Pink</button>
       <button onMouseOver={()=>document.getElementById('c-img').src = greencrocs} className='bt-green'>Green</button>
       <button onMouseOver={()=>document.getElementById('c-img').src = yellowcrocs} className='bt-yellow'>Yellow</button>
       </div>
       
      
      </div>
      </div>
     </section>
     </section>
      
      <section className='Container2'>
       <section className='countries-section'>
       <div className='custom-section'>
        <p className='custom-para'>Customize your crocs according to your country</p>
        <div className='country-selection'>
            <label className='countries-label' for='countries'>Select your country: </label>
            <select id =  'countries'>
                <option className='Liberia'>Liberia</option>
                <option className='Sierra Leone'>Ghana</option>
                <option className='Ghana'>Sierra Leone</option>
                <option className='Nigeria'>Nigeria</option>
                <option className='Senegal'>Senegal</option>
                <option className='Senegal'>India</option>
            </select>
            <img id = 'crocs-custom' src={crocs}className= 'crocs-image'/>
        </div>
        <button className='charm-button'>add charm</button>
       </div>
       </section>

       <section className='size-section'>
        <form className='gender-form'>
          <input className='male-input' type='checkbox' name = "gender1" value = "Male" />
          <label className='male-label' for = "gender1">Male</label>
          <input className='female-input' type='checkbox' name = "gender2" value = "Female" />
          <label className='female-label' for = "gender2">Female</label>
        </form>
        <div className='size-picker'>
            <button className='bt-6'>6</button>
            <button className='bt-7'>7</button>
            <button className='bt-8'>8</button>
            <button className='bt-9'>9</button>
            <button className='bt-10'>10</button>
            <button className='bt-11'>11</button>
        </div>
        <div id = "size-button">
          <button className='size-button'>select size</button>
        </div>
       </section>


      </section>

    </section>

    

  
  );
}

export default Content;
