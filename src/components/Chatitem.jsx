import React from "react";
import { ListGroup } from "react-bootstrap";

export const Chatitem = ({ item }) => {
  return (
    <ListGroup.Item>
      <b>{item.name}</b>: {item.msg}
    </ListGroup.Item>
  );
};
