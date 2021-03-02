import React from 'react'
import {Link} from 'react-router-dom';

function NavBar (){
    return(
       <div id="divNavBar">
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand" href="/">Navbar</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse"
                       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"/>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                           <Link className="nav-link" to="/shows">Shows</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to="/bandas">Bandas</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to="/locais">Locais</Link>
                       </li>


                   </ul>

               </div>
           </nav>
       </div>
        )
}

export default NavBar;