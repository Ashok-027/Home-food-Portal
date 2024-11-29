
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button";



function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton()
    }, []);
    
    // const token=JSON.parse(localStorage.getItem("token"));
    function logout()  {
      // window.localStorage.removeItem("token");
      window.localStorage.clear();
      
      console.log("Clicked")
      window.alert("Log Out successful")
      window.location.href="/HomeMakerLogin"

      // console.log(token)
    //   setUserState(null);
    
    };
    

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    HOMEFOOD <i className="fab fa-typo3"/>

                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className='nav-item'>
                      <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                        HELP
                      </Link>  
                    </li> */}
                    <li className='nav-item'>
                      <a href='/homemakerprofile' className='nav-links' onClick={closeMobileMenu}>
                       PROFILE
                      </a>  
                    </li>
                    <li className='nav-item'>
                      <a href='/HomeMakerHome' className='nav-links' onClick={closeMobileMenu}>
                        DASHBOARD
                      </a>  
                    </li>
                   
                  
                    
                    
                   
                  </ul>
                  {button && <Button buttonStyle='btn--outline'onClick={logout}>Log Out</Button>}
                  </div>
                  </nav>
                  
                  
        </>
    )
}
export default Navbar