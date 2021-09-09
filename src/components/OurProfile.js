import React from "react";
import "./index.css";

import {Input} from "antd";
//import { AudioOutlined } from '@ant-design/icons';



import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";

const { Search } = Input;

const Program =()=>{

const onSearch = value => console.log(value);

return(
    <div className="profile-container">
     <div style={{width:"100%"}}>
    <div hoverable={false}  style={{width:"100%",padding:"100px 30px 30px 30px",display:"flex"}}>
          <div>
      <h1 style={{fontSize:"50px",color:"indigo", fontWeight:"bold"}}> Our Program </h1>
      <p style={{fontSize:"20px",padding:"10px",float:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
      <div className="searchBox">
      <Search 
      
      placeholder="Search mentor"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
     style={{color:"Deep Koamaru"}}
    />
   </div>
    </div>
    <div><img src={image1} alt="image1" width="100%"/></div>
   
    </div>
    </div>  
    <div style={{width:"100%"}}>
    <div hoverable={false}  style={{width:"100%",padding:"100px 30px 30px 30px",display:"flex"}}>
      <img src={image2} alt="image2" width="100%"/>
          <div>
          <h1 style={{fontSize:"50px",color:"indigo", fontWeight:"bold",border:"white"}}> Scheduler your Session </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                </div>
    </div>
    </div>
    <div style={{width:"100%"}}>
    <div hoverable={false}  style={{width:"100%",padding:"100px 30px 30px 30px",display:"flex"}}>
    <div>
     <h1 style={{fontSize:"50px",color:"indigo", fontWeight:"bold",border:"white"}}> Meet our Mentor </h1>
     <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
     </div>
     <div><img src={image3} alt="image3" width="100%" />  </div>    
    </div>
    </div>   
    
    </div>
)

}
export default Program;