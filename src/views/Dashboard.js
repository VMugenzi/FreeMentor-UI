import React,{useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../components/index.css';
import data from "../assets/Constants/sessions.json";
import Session from "../components/Session";
import SessionProfile from "../components/SessionProfile";
import DashboardLayout from "../components/DasboardLayout";
import {
    Modal,Tag,Space,
    Button,Table,Drawer
  } from 'antd';

  const Dashboard = () => {

    const [session,setSession]=useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const onClose = () => {
        setVisible(false);

    }


  
    const columns = [
      {
          title: 'Session Title',
          dataIndex: 'title',
          key: 'title',
          render: text => <a>{text}</a>,
      },
      {
          title: 'Mentor',
          dataIndex: 'mentor',
          key: 'mentor',

          render: mentor => <a>{mentor.firstName}</a>,
      },
      {
          title: 'Start Time',
          dataIndex: 'timeToStart',
          key: 'timeToStart',
      },
      {
          title: 'End Time',
          dataIndex: 'timeToEnd',
          key: 'timeToEnd',
      },
      {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: tag => {
              let color = tag === "pending" ? 'black' : tag === "accept" ? "green" : "red";
              return (
                  <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                  </Tag>
              );

          },
      },
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
              <Space size="middle">
                  <a onClick={()=>{setVisible(true); setSession(record)}}>View</a>
                  <a>Delete</a>
                  <a>Edit</a>
              </Space>
          ),
      },
  ];



  return (
      <>
          <DashboardLayout>

              <Button onClick={showModal}>Create Session</Button>

              <Table columns={columns} dataSource={data} />

              <Modal title="New Session" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <div style={{ padding: "30px" }}>
                      <Session />

                  </div>
              </Modal>

          </DashboardLayout>

          <Drawer
              width={640}
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
          >
          <SessionProfile session={session} />
          </Drawer>
      </>
  )
}

export default Dashboard;