import "./header.css";
import { Link } from "react-router-dom";



const  Header =()=>{
 
        return (
            <header>

            <div id ="brand">
              
            <div id ="icon">Zomato App</div>
       <span id="home">
       <Link to="/" className= "btn btn-info">
          Home
        </Link>
       </span>
        
             
            
         
                
            
            <div id ="social">
            <button className="btn btn-success">
          <span className="	glyphicon glyphicon-log-in"></span>LogIn
        </button>
        <button className="btn btn-danger">
          <span className="	glyphicon glyphicon-user"></span>SignUp
        </button>
            </div>
            </div>
            </header>
        );
    };

export default  Header;
