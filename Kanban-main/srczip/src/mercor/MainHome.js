import {React,useState} from "react";
import {TbPencil} from "react-icons/tb";
import category from "./images/category.png";
import message  from "./images/message.png";
import contact from "./images/task-square.png";
import members from "./images/profile-2user.png";
import Ellipse13 from "./images/Ellipse13.png";
import Ellipse14 from "./images/Ellipse14.png";
import Ellipse15 from "./images/Ellipse15.png";
import Ellipse17 from "./images/Ellipse17.png";
import {LuCalendarRange} from "react-icons/lu";
import {VscFilter} from "react-icons/vsc"
import Ellipse12 from "./images/Ellipse12.png";
import {IoLinkSharp} from "react-icons/io5"
import {HiOutlinePlusSmall}  from "react-icons/hi2";
import {BiChevronDown} from "react-icons/bi";
import lin from "./images/line.png"
import share1 from "./images/Group 611.png";
import share2 from "./images/Group 612.png";
import dots from "./images/dots.png";
import file from "./images/Group 628.png"
import pg1 from "./images/pg1.png";
import "./mercor.css";
import TopNavBar from "./TopNavBar";
import pg2 from "./images/pg2.png";
import pg3 from "./images/pg3.png";
import mg from "./images/Mask Group.png";
function MainHome(){
   
    return(
        <div className="app">
            <TopNavBar/>
            
               
                 <div id="sidebar">
                    
                    <ul className="sideul">
                        <li>
                            <span className="icon"><img src={category}/></span>
                            <span className="icon-text">Home</span>
                        </li>
                        <li>
                            <span className="icon"><img src={message}/></span>
                            <span className="icon-text">Messages</span>
                        </li><li>
                            <span className="icon"><img src={contact}/></span>
                            <span className="icon-text">Tasks</span>
                        </li><li>
                            <span className="icon"><img src={members}/></span>
                            <span className="icon-text">Members</span>
                        </li><li>
                            <span className="icon"><img src={members}/></span>
                            <span className="icon-text">Settings</span>
                        </li>
                    </ul>

                    <hr/>
                    
                    <ul className="sideul">
                       
                    <h6 className="icon-text">MY PROJECTS</h6>
                        <li>
                        <span>
                        <svg height={"15px"} width={"25px"}>
                         <circle cx={10} cy={8} r={4} fill="green" />
                        </svg></span>
                        <span className="icon-text">Mobile App</span>
                        </li>
                        <li>
                        <svg  height={"15px"} width={"25px"}>
                         <circle cx={10} cy={8} r={4} fill="orange"/>
                        </svg>
                        <span className="icon-text">Website Redesign</span>
                        </li><li>
                        <svg  height={"15px"} width={"25px"}>
                         <circle cx={10} cy={8} r={4} fill="grey"/>
                        </svg>
                        <span className="icon-text">Design System</span>
                        </li><li>
                        <svg  height={"15px"} width={"25px"}>
                         <circle cx={10} cy={8} r={4} fill="skyblue"/>
                        </svg>
                        <span classNam  e="icon-text">Wireframes</span>
                        </li>
                    </ul>
                </div>
                <div className="mobile">
                     <div className="mobile1">
                    
                        <h1>Mobile App</h1>
                        <div>
                        <TbPencil className="smallicons"/>
                        <IoLinkSharp className="smallicons"/>
                        </div>
                    </div>
                    <div className="mobile2">
                        <div className="mobile21">
                            <HiOutlinePlusSmall  className="smallicons"/>
                            <a>Invite</a>
                        </div>
                        <div className="mobile22">
                        <img src={Ellipse12}/>
                        <img src={Ellipse13} />
                        <img src={Ellipse14} />
                        <img src={Ellipse15} />
                        </div>
                   </div>     
                </div>
                <div>
                    <div className="mobile">
                        <div className="mobile3">
                            <button className="btnn"><VscFilter/><span>Filter</span><BiChevronDown/></button>
                            <button className="btnn"><LuCalendarRange/><span>Today</span><BiChevronDown/></button>
                        </div>
                        <div className="mobile4">
                            <button className="btnn2"><VscFilter/><span>Share</span><BiChevronDown/></button>
                                <img src={lin}/>
                                <img src={share2}/>
                                <img src={share1}/>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div className="tasks">
                        <div className="todo">
                            <div className="taskhead">
                                <div>
                                    <svg  height={"15px"} width={"25px"}>
                                        <circle cx={10} cy={8} r={4} fill="blue"/>
                                    </svg>
                                    <span>To do</span>
                                </div>
                                <div>
                                    <HiOutlinePlusSmall  className="smallicons"/>
                                </div>
                            </div>
                           <hr/>
                           
                            <div className="task-card1">
                            <div className="t2">
                                <br/>
                                    <div className="card-diff">
                                        <button>Low</button>
                                        <img src={dots} />
                                    </div>
                                    <div>
                                    <p className="card-head">Brainstorming</p>
                                    <p className="card-content">Brainstorming brings team members' diverse experience into play</p>
                                    </div>
                                    <div className="card-foot">
                                        <div className="images">
                                            <img src={Ellipse12}/>
                                            <img src={Ellipse13} />
                                            <img src={Ellipse14} />
                                        </div>
                                        <div className="card-views">
                                            <img src={message}/>
                                            <span className="span1">12 comments</span>
                                            <img src={file}/>
                                            <span className="span2">0 files</span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                             
                            
                            <div className="task-card1">
                            <div className="t2">
                                <br/>
                                <div className="card-diff">
                                    <button>High</button>
                                     <img src={dots} />
                                </div>
                                 <p className="card-head">Research</p>
                                <p className="card-content">User research helps you to create an optimal product for users</p>
                                <div className="card-foot">
                                    <div className="images">
                                        <img src={Ellipse13} />
                                        <img src={Ellipse14} />
                                    </div>
                                    <div className="card-views">
                                        <img src={message}/>
                                        <span className="span1">10 comments</span>
                                        <img src={file}/>
                                        <span className="span2">3 files</span>
                                    </div>
                                    </div>
                                    <br/>
                                </div>
                            </div>

                            <div className="task-card1">
                            <div className="t2">
                                <br/>
                                <div className="card-diff">
                                    <button>High</button>
                                     <img src={dots} />
                                </div>
                                 <p className="card-head">Wireframes</p>
                                <p className="card-content">Low fidelity wireframes include the most basic content and visuals</p>
                                <div className="card-foot">
                                    <div className="images">
                                        <img src={Ellipse12}/>
                                        <img src={Ellipse13} />
                                        <img src={Ellipse14} />
                                    </div>
                                    <div className="card-views">
                                        <img src={message}/>
                                        <span className="span1">10 comments</span>
                                        <img src={file}/>
                                        <span className="span2">3 files</span>
                                    </div>
                                </div>
                                <br/>
                                </div>
                            </div>
                        </div>







                        <div className="onprogress">
                            <div className="taskhead">
                                <div>
                                    <svg  height={"15px"} width={"25px"}>
                                        <circle cx={10} cy={8} r={4} fill="orange"/>
                                    </svg>
                                    <span>On progress</span>
                                </div>

                            </div>
                            <hr/>
                            <div>
                            <div className="task-card1" >
                            <div className="t2">
                                <br/>
                                <div className="card-diff">
                                    <button>Low</button>
                                     <img src={dots} />
                                </div>
                                 <p className="card-head">Onboarding Illustrations</p>
                                
                                <img className="card-img" src={pg1} />
                                <br/>
                                <div className="card-foot">
                                    <div className="images">
                                        <img src={Ellipse12}/>
                                        <img src={Ellipse13} />
                                        <img src={Ellipse14} />
                                    </div>
                                    <div className="card-views">
                                        <img src={message}/>
                                        <span className="span1">10 comments</span>
                                        <img src={file}/>
                                        <span className="span1">3 files</span>
                                    </div>
                                </div>
                                <br/>
                             </div>
                            </div>
                            <div className="task-card1">
                                <div className="t2">
                                    <br/>
                                    <div className="card-diff">
                                        <button>Low</button>
                                        <img src={dots} />
                                    </div>
                                     <p className="card-head">Mood Board</p>
                                    <div className="card-img">
                                    <img src={pg3}/>
                                    <img src={pg2}/>
                                    </div>
                                    <br/>
                                    <div className="card-foot">
                                        <div className="images">
                                            <img src={Ellipse12}/>
                                            <img src={Ellipse13} />
                                            <img src={Ellipse14} />
                                        </div>
                                        <div className="card-views">
                                            <img src={message}/>
                                            <span className="span1">10 comments</span>
                                            <img src={file}/>
                                            <span className="span1">3 files</span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>  
                        </div>

                        <div className="completed">
                            <div className="taskhead">
                                <div>
                                    <svg  height={"15px"} width={"25px"}>
                                        <circle cx={10} cy={8} r={4} fill="blue"/>
                                    </svg>
                                    <span>Done</span>
                                </div>
                               
                            </div>
                            <hr/>
                            <div className="task-card1">
                            <div className="t2">
                                <br/>
                                <div className="card-diff">
                                    <button>completed</button>
                                     <img src={dots} />
                                </div>
                                 <p className="card-head">Mobile app design</p>
                                
                                <img className="card-img" src={mg} />
                                <br/>
                                <div className="card-foot">
                                    <div className="images">
                                        <img src={Ellipse12}/>
                                        <img src={Ellipse13} />
                                    </div>
                                    <div className="card-views">
                                        <img src={message}/>
                                        <span className="span1">12 comments</span>
                                        <img src={file}/>
                                        <span className="span1">15 files</span>
                                    </div>
                                </div>
                                <br/>
                             </div>
                            </div>
                            
                            <div className="task-card1">
                            <div className="t2">
                                <br/>
                                <div className="card-diff">
                                    <button>completed</button>
                                     <img src={dots} />
                                </div>
                                 <p className="card-head">Design System</p>
                                <p className="card-content">It just need to adapt the UI from what you did before</p>
                                <div className="card-foot">
                                    <div className="images">
                                        <img src={Ellipse12}/>
                                        <img src={Ellipse13} />
                                        <img src={Ellipse14} />
                                    </div>
                                    <div className="card-views">
                                        <img src={message}/>
                                        <span className="span1">12 comments</span>
                                        <img src={file}/>
                                        <span className="span2">15 files</span>
                                    </div>
                                </div>
                                <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default MainHome; 