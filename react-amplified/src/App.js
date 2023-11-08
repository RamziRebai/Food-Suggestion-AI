import './App.css';
import React, { useState } from 'react';
import { Row, Col, Button, Container, Form, Badge, Spinner, Nav, NavItem, NavLink} from 'react-bootstrap';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
import { generate } from "randomstring";
import '@aws-amplify/ui-react/styles.css';

const baseUrl = 'https://c82345gwk8.execute-api.eu-west-3.amazonaws.com/Prod';

function App({ signOut, user }) {
  const [uniqueId, ] = useState(generate());
  const [gridGenerating, setGridGenerating] = useState(false);
  const [inputText, setInputText] = useState(''); // Added state for user input
  const [responseText, setResponseText] = useState(''); // Added state to display Lambda response

  const generateGrid = async () => {
    var sess = await Auth.currentSession();
    setGridGenerating(true);

    // Send the user input text to the Lambda function
    fetch(`${baseUrl}/generate_grid?uniqueGridId=${uniqueId}&inputText=${inputText}`, {
      method: "POST",
      headers: {
        'Authorization': sess.getAccessToken().getJwtToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const lambdaResponse = data["responseText"]; // Extract the response from the Lambda function

        setResponseText(lambdaResponse); // Set the Lambda response in state
        setGridGenerating(false);
      });
  };

  return (
    <Container className="p-3">
      <Nav className="justify-content-center">
        <NavItem>
          <NavLink onClick={signOut}>Sign out</NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>UniqueGridId</Form.Label>
              <Form.Control
                type="text"
                id="inputUniqueId"
                value={uniqueId}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Text</Form.Label>
              <Form.Control
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </Form.Group>
          </Form>

          {gridGenerating ? (
            <Spinner></Spinner>
          ) : (
            <Button onClick={() => generateGrid()}>Suggest Recipes</Button>
          )}
          
          
          <h1>Food Suggestion from AI</h1>
          <p>{responseText}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(App);
