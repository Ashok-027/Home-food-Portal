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
    function logout()  {
      // window.localStorage.removeItem("token");
      window.localStorage.clear();
      localStorage.setItem("isLogged", false)
      
      console.log("Clicked")
      window.alert("Log Out successfull")
      window.location.href="/CusLogin"
  
      // console.log(token)
    //   setUserState(null);
    
    };

    const logged=localStorage.getItem("isLogged")
    console.log(logged)
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
                    
                    <li className='nav-item'>
                    <a href='/CustomerHomePage' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </a>  
                   </li>
                    {/* <li className='nav-item'>
                      <Link to='/Chat' className='nav-links' onClick={closeMobileMenu}>
                        Help
                      </Link>  
                    </li> */}
                    
                    <li className='nav-item'>
                      <Link to='/customerprofile'  className='nav-links' onClick={closeMobileMenu}>
                       Profile
                      </Link>  
                    </li>
                    {/* <li className='nav-item'>
                    <Button onClick={logout}>LOG OUT</Button> 
                    </li>
                     */}
                    
                    
                  </ul>
                  {button && <Button buttonStyle='btn--outline'onClick={logout}>Log Out</Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar