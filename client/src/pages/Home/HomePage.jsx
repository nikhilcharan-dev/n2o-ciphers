import './HomePage.css';
import Navbar from '../../components/NavBar/Navbar.jsx';
import MainBanner from '../../assets/images/main-banner.png';


const HomePage = () => {
    return (
        <section>
            <img src={MainBanner} alt="MainBanner" />
        </section>
    )
}

export default HomePage;

