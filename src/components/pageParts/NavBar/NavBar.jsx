import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import SiteContext from '../../../context/SiteContext';
import './NavBar.css'

export default function NavBar() {

    const siteContext = useContext(SiteContext);

    return (
        <div>
            <nav>
                {siteContext.routes.map((item, idx) =>
                    <HashLink className="a-link" key={idx} smooth to={`#${item.to}`} scroll={(e) => e.scrollIntoView({ behavior: 'smooth' })}>
                        {item.desc}
                    </HashLink>)}
            </nav>
            <ul>

            </ul>

        </div>

    )
}