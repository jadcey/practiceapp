import { useNavigate } from 'react-router-dom';
import '../Css/HomeVape.css';
import Header from './Header';
import vapepen from '../Pictures/vape-pen.jpg';

const HomeVape=()=>{
    const navigate = useNavigate();
    const homepage = () => {      
        navigate('/home');
    }
    return(
        <div>
            <Header/>
            <div className = "homevape-container1">
                <div className = "homevape-containerbox1">
                    <h1>asdjhn</h1>
                </div>
                <div className = "homevape-containerbox2">
                    <div>
                        picture
                    </div>
                </div>
                <button onClick={homepage}>Home</button>
            </div>
        </div>     
    );
}
export default HomeVape;