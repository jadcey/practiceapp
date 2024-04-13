import {useNavigate} from 'react-router-dom';
import { DiCodeigniter } from "react-icons/di"
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
            <div className = "header-icon">
                <DiCodeigniter/>
                <div className="header-text">Name</div>
                <div className="header-text">Email</div>
            </div>
            <div className = "header-text" onClick={toHome}>Home</div>
            <div className = "header-text" onClick={toHomeVape}>VapeN'Hell</div>
            <div className = "header-text" onClick={toHomeGoodDudes}>Good Dudes</div>
            <div className = "header-text">Contact Us</div>
            <div className = "header-text">Reviews</div>
        </div>
    );
}

export default Header;