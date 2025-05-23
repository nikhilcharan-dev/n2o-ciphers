import './HomePage.css';
import Navbar from '../../components/NavBar/Navbar.jsx';
import MainBanner from '../../assets/images/main-banner.png';

const programs = [
    { image: '/images/cpp.png', name: 'C++' },
    { image: '/images/python.png', name: 'Python' },
    { image: '/images/java.png', name: 'Java' },
    { image: '/images/js.png', name: 'JavaScript' },
    { image: '/images/html.png', name: 'HTML5' },
    { image: '/images/css.png', name: 'CSS' },
    { image: '/images/react-js.png', name: 'React.js' },
    { image: '/images/node-js.png', name: 'Node.js' },
    { image: '/images/redux.png', name: 'Redux' },
    { image: '/images/docker.png', name: 'Docker' },
    { image: '/images/firebase.png', name: 'firebase' },
    { image: '/images/mongodb.png', name: 'MongoDB' },
    { image: '/images/typescript.png', name: 'TypeScript' },
    { image: '/images/sql.png', name: 'Sql' },
    { image: '/images/django.png', name: 'Django' },

]

const HomePage = () => {
    return (
        <section className="homepage">
            <img src={MainBanner} alt="MainBanner" className="main-banner" />
            <section className="programs">
                <h3>Explore Our Programs</h3>
                <div className="divider" />
                <div className="carousel">
                    <div className="carousel-track">
                        {programs.concat(programs).map((program, index) => (
                            <img key={index} src={program.image} alt={`carousel-${index}`} className="carousel-img" title={program.name} />
                            // add link for the specific program to open from the explore section
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HomePage;

