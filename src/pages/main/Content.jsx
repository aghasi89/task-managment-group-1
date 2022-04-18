import React from "react";
import User from "./User";
import "./content.css"
import UserCreator from "../../components/UserCreator";
import AddProject from "../../components/ProjectCreator";



function Content() {
    return (
    <div className="content">
   <div className="userField"><h1>Աշխատակիցներ</h1>
   <UserCreator/>
   
   </div>

   <div className="projectField"><h1>Հասցեներ</h1>
   <AddProject/>
   </div>
    
  </div>)
  }


  export default Content