import { useContext } from 'react';
import SiteContext from '../../../context/SiteContext';
import './NavBar.css'

export default function NavBar() {

    const siteContext = useContext(SiteContext);

    return (
        <div>
            <nav>
                {siteContext.routes.map((item, idx) => <a key={idx} href={`#${item.to}`}>{item.desc} </a>)}
            </nav>
            <ul>

            </ul>

        </div>

    )
}