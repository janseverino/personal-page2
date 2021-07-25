import './BoxDrawer.css'
import { Drawer, makeStyles } from '@material-ui/core'
import { useContext } from 'react';
import SiteContext from '../../../context/SiteContext';

export default function BoxDrawer({ openDrawer, showDrawer }) {

   const siteContext = useContext(SiteContext);
   return (

      <Drawer
         variant="temporary"
         onClose={openDrawer}
         open={showDrawer}>
         <div className="boxDrawer">

            <ul>
               {siteContext.routes.map((item, idx) => <li key={idx}> <a href={`#${item.to}`}>{item.desc} </a></li>)}
            </ul>

         </div>

      </Drawer>
   );
}