import React from 'react';
import './header.scss';
import searcIcon from '../../../images/search.png';

const Header=()=>{
    return(
        <div className="headerContainer">
            
         <div className="headerContainer__input">
           <input type="text" placeholder="Search"/>
         </div>
         <div className="headerContainer__text">
            <h1>Rate</h1>
            <h2>Specify dates</h2>
         </div>
         <div className="headerContainer__search">
          <img src={searcIcon}/>
         </div>
        </div>
    )
}
export default Header;