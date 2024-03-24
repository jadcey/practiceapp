import { useNavigate } from 'react-router-dom';
import '../Css/HomeVape.css';
import Header from './Header';

const HomeVape=()=>{
    const navigate = useNavigate();
    const homepage = () => {      
        navigate('/home');
    }
    return(
        <div>
            <Header/>
            <div className = "homevape-container1">
                <h1>VapeN'Hell</h1> 
                <button onClick={homepage}>Home</button>
            </div>
        </div>       
    );
}
export default HomeVape;