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
    return(
        <div className = "header-body">
            <div className="header-icon1">
                <DiCodeigniter/>
            </div>
            <div className = "header-icon">
                <div className = "header-text">Email</div>
                <div className = "header-text">Name</div>
            </div>
            <div className="header-container">
                <div className = "header-text" onClick={toHome}>Home</div>
                <div className = "header-text" onClick={toHomeVape}>VapeN'Hell</div>
                <div className = "header-text" onClick={toHomeGoodDudes}>Good Dudes</div>
            </div>       
        </div>
    );
}

export default Header;