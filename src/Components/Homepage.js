import '../Css/Homepage.css';
import Header from './Header';
import '../Css/Header.css';



const Homepage =() => { 
  return (
    <div>
      <Header/>
        <div className = "home-container1">
          <div className ='home-picture'/>
          <div className ='home-picture1'/>
        </div>
    </div>
  );
}
export default Homepage;
