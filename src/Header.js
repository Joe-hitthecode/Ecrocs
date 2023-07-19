
import './Header.css';
import cart from './sprites/cart.png';
import Signgup from './pages/Signup';
import Navbar from './Navbar';



function Header() {
  let component 
  switch(window.location.pathname) {
    case "/signup":
      component = <Signgup />
  }


  
  
  return (
   <>
   <Navbar />
   {component}
   </>


  
    

  
  );
}

export default Header;
