import React from "react";
import image1 from "./images/image1.png";
import calander from "./images/calendar-2.png";
import mques from "./images/message-question.png";
import Notification from "./images/notification.png";
import mercor from "./images/Group 7.png";
import search from "./images/search-normal.png";
import "./mercor.css";
import arr1 from "./images/arrow-down.png";
import arr2 from "./images/Group 638.png"
function TopNavBar(){
    return(
        <nav>
            <div className="brand" style={{display:'inline'}}>
                    <img className="icon" src={mercor}/>
                    <span className="icon-text" style={{fontSize:"larger",fontWeight:"bold"}}>Project.M</span>
                    <span className="icon-text" ><img src={arr2}/></span>
            </div>
           <div >
                   <form style={{display:'inline-flex',marginTop:'15px'}}>
                    <img src={search} className="nosubmit"/>
                    <input className="nosubmit" type="search" placeholder="Search anything here..."/>
                 </form>
              </div> 
            <ul className="navul">
                
                
                <li className="nav-options">
                    <img src={calander}/>
                </li>
                <li className="nav-options">
                    <img src={mques}/>
                </li>
                <li className="nav-options">
                    <img src={Notification}/>
                </li>
                <li style={{textAlign:'right' }} className="nav-options1">
                                 <p>Anima Agarwal<br/> U.P, India</p>
                </li> 
                <li className="nav-options"><img src={image1} className="im"/></li>
                <li className="nav-options"><img src={arr1} className="im"/></li>
            </ul>
        </nav>
    )
}
export default TopNavBar; 