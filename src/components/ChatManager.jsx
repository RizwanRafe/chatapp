import React, { useState } from "react";
import { Chatboard } from "./Chatboard";
import { Tabs, Tab } from "react-bootstrap";

export const ChatManager = () => {
  const [mychat, setMychat] = useState([]);
  const handleChats = (currChat, setCurrChat) => {
    setMychat([...mychat, currChat]);
    setCurrChat({ name: "", msg: "" });
  };
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="user1" title="Santosh">
        <Chatboard handleChats={handleChats} mychat={mychat} name="Santosh" />
      </Tab>
      <Tab eventKey="user2" title="Jafer">
        <Chatboard handleChats={handleChats} mychat={mychat} name="Jafer" />
      </Tab>
    </Tabs>
  );
};
