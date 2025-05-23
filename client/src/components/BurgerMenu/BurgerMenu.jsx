import {useEffect, useState} from "react";
import './BurgerMenu.css';

const BurgerMenu = ({ toggleMenu, setToggleMenu}) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        // setToggleMenu(!toggleMenu);
    }, [toggle])

    return (
            toggle ?
                <div className="close-menu" onClick={() => setToggle(!toggle)}>
                    <div className="close-item" />
                    <div className="close-item" />
                </div>
                :
                <div className="nav-burger" onClick={() => setToggle(!toggle)}>
                    <div className="burger-item" />
                    <div className="burger-item" />
                    <div className="burger-item" />
                </div>
    )
}

export default BurgerMenu;