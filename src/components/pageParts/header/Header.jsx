
import './Header.css'
import NavBar from "../navBar/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ showBtnDrawer, openCloseDrawer }) {

    return (
        <header className="bar">

            {showBtnDrawer ?
                <div className="burgerBox">
                    <FontAwesomeIcon onClick={openCloseDrawer} icon={faBars} style={{ float: "let" }} />
                </div>
                :
                <NavBar />
            }


        </header>
    );
}
export default Header;