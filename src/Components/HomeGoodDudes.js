import { useNavigate } from 'react-router-dom';


const HomeGoodDudes=()=>{
    const navigate = useNavigate();
    const homepage = () => {      
        navigate('/home');
    }
    return(
        <div>
            Home GoodDudes!!
            <button onClick={homepage}>Home</button>
        </div>
    );
}
export default HomeGoodDudes;