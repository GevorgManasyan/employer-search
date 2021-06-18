import React from 'react';
import './main.scss';
import Header from './header/header';
import SkillsBar from './header/skilsBar';
import data from '../employersData';
import portrait from '../../images/portrait.jfif';


const Main=()=>{
    return(
        <div className="mainContainer">
           <Header/>
           <SkillsBar/>
           <div className="cardContainer">
               {data && data.map((item,index)=>
               <div>
                   <div className="cardContainer__data">
                    <div className="cardContainer__data__header">
                        <div>{item.number}</div>
                        <div>
                            <img src={portrait} style={{width:40, height:40, borderRadius:'50%'}}/>
                        </div>
                        <div>{item.rate},<br/>{item.rateNumber}</div>
                    </div>
                    <div className="cardContainer__data__footer">
                    <div>{item.profesion}<br/>{item.city}{item.country}</div>
                    <div>${item.salary}<br/>{item.workedTime}</div>
                    </div>
                   </div>
                   <div className="cardContainer__buttons">
                       <button></button>
                       <button></button>
                   </div>
               </div>
               )}

           </div>
        </div>
    )
}
export default Main;