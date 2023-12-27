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
            VapeN'Hell
            <button onClick={homepage}>Home</button>
        </div>
    );
}
export default HomeVape;