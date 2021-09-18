import React,{useState, useEffect} from "react";
import { Menu, Modal} from 'antd';
import "./index.css";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import SigninForm from "./LoginForm";

//const { SubMenu } = Menu;
     const Header=()=>{

      const [isModalVisible, setIsModalVisible] = useState(false);
      const [token, setToken]=useState(null);


      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

       
      const[current, setCurrent]=useState ("home");
        
         const handleClick = e => {
            console.log('click ', e);
            setCurrent(e.key);
          };
          useEffect(()=>{
   setToken (localStorage.getItem("freeMentor_token"));
          })

    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<SigninForm/>
</div>
    </Modal>


        <div className="header-container"style={{display: 'flex'}}>
        <h1 style={{color:"indigo", fontSize:"30px",fontWeight:"bolder"}}>FREE MENTOR</h1>
      <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{margin:"0px 0px 0px 55%", color:"indigo"}}>
        <Menu.Item key="home" >
        <Link onClick={handleClick} to="/home"/>
         Home
        </Menu.Item>
        <Menu.Item key="about" >
          About us
        </Menu.Item>
        <Menu.Item key="allmentors" >
        <Link onClick={handleClick} to="/allmentors"/>
          All Mentors
        </Menu.Item>
       { !token?
       (<Menu.Item key="login" onClick={showModal} >
         Login
        </Menu.Item>):(<Menu.Item key="logout" onClick={()=>(localStorage.removeItem("freeMentor_token"))} >
        <Link to="/home"> Logout </Link>
        </Menu.Item>)}
        
      </Menu>

        </div>
        </>
    )

}
 export default Header;