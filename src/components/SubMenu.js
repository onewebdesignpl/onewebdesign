import React from 'react';
import '../css/submenu.css';
import { Link } from 'gatsby';


const SubMenu = () => {
    return ( 
        <>
           <div className="submenu">
            <Link to={'/strony-internetowe'} activeStyle={{ color: "#FFBB3D" }}>Strony internetowe</Link>
            <Link to={'/sklepy-internetowe'} activeStyle={{ color: "#FFBB3D" }}>Sklepy internetowe</Link>
            <Link to={'/copywriting'} activeStyle={{ color: "#FFBB3D" }}>Copywriting</Link>
           </div>
        </>
     );
}
 
export default SubMenu;