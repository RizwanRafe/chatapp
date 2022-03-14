import React, { useState } from "react";
import { Chatitem } from "./Chatitem";
import { Button, Card, ListGroup, Form, Row, Col } from "react-bootstrap";

export const Chatboard = ({ handleChats, mychat, name }) => {
  const [currChat, setCurrChat] = useState({ name: "", msg: "" });

  return (
    <div>
      <h1>Chatboard</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              {mychat.map((item) => (
                <Chatitem item={item} />
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Control
              value={currChat.msg}
              onChange={(e) => setCurrChat({ name: name, msg: e.target.value })}
            ></Form.Control>
          </Form>
        </Col>
        <Col>
          <Button onClick={() => handleChats(currChat, setCurrChat)}>
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
