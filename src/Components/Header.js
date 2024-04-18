import {useNavigate} from 'react-router-dom';
import { DiCodeigniter } from "react-icons/di"
import '../Css/Header.css';
const Header = ()=>{
    const navigate = useNavigate();
    const toHomeVape = () => {
        navigate('/homevape');
    }
    const toHomeGoodDudes = () =>{
        navigate('/homegooddudes');
    }
    const toHome = () =>{
        navigate('/home');
    }
    const toReview = () =>{
        navigate('/review');
    }
    const toAboutUs = () =>{
        navigate('/aboutus');
    }
    return(
        <div className = "header-body">
            <div className = "header-container">
                <DiCodeigniter/>Logo
            </div>
            <div className = "header-text-container">
                <div className = "header-text" onClick={toHome}>Home</div>    
                <div className = "header-text"onClick={toHomeVape}>VapeN'Hell</div>    
                <div className = "header-text"onClick={toHomeGoodDudes}>Good Dudes</div>    
                <div className = "header-text"onClick={toReview}>Reviews</div>    
                <div className = "header-text"onClick={toAboutUs}>About Us</div> 
            </div>
            <div className = "header-end">Sign In</div>
        </div>
    );
}

export default Header;