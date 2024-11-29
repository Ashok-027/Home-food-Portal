import React,{Component} from "react";
import '../../App.css';
import Cards from "./Card";
import Navbar from "./Navbar";
/*import Location from "./Location";*/


export default class CustomerHomepage extends Component {
    componentDidMount(){ 
         
        /*(function(d, m){ 
            var kommunicateSettings =  
                {"appId":"14af1c2c531306c26f45d6659f0ee12d8","popupWidget":true,"automaticChatOpenOnNavigation":true}; 
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; 
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app"; 
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s); 
            window.kommunicate = m; m._globals = kommunicateSettings; 
        })(document, window.kommunicate || {}); 
     */
        } 
    render(){

    
    return (
        <>
            <Navbar/>
            <Cards/>
            
            
        </>
    );

    }
}
