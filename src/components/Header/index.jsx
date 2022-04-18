import React, {useState} from "react";
import User from "../../pages/main/User";
import "./header.css"

import JumpInfo from "../JumpInfo";





function Header() {
  const [isActive,setIsActive] = useState(false)
  const [jumpInfo,setJumpInfo]= useState(true)
    return (
    <div className="header">
 <div onClick={(e)=>setIsActive(!isActive)}><User /></div>
    {isActive && (<div>
    <div className="loginButton">LogIn</div>
    <div className="loginButton">LogOut</div>
    <div onClick={(e)=>setJumpInfo(!jumpInfo)} className="loginButton">ՄԵՐ ՄԱՍԻՆ</div>
    {jumpInfo &&(<JumpInfo/>)}
    </div>)}
  </div>);
  }


  export default Header