import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mehul from './images/Mehul.jpeg';
import shashank from './images/Shashank.jpeg';
import suyash from './images/Suyash.jpeg';
import kuldeep from './images/Kuldeep.jpeg';

export function Aboutus() {
  const fixedImageStyle = {
    height: '150px', // Adjust this value as needed
    objectFit: 'contain',
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <Row>
        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={mehul} alt="Mehul Bhole" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Mehul Bhole</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-JH</Card.Subtitle>
              <Card.Text>Contact Details: 9112285408</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={shashank} alt="Shashank Sakharekar" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Shashank Sakharekar</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-KH</Card.Subtitle>
              <Card.Text>Contact Details: 9834341299</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={suyash} alt="Suyash Sharma" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Suyash Sharma</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-KH</Card.Subtitle>
              <Card.Text>Contact Details: 9826715376</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={kuldeep} alt="Kuldeep Bhakuni" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Kuldeep Bhakuni</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-JH</Card.Subtitle>
              <Card.Text>Contact Details: 9958262585</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
