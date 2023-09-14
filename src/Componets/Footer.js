import React from 'react'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Footer() {
  return (
    <Container fluid>
     
        <Col className='text-center'>
        <Row>
      <div className="copyright">&copy; 2022 Corporate. All Right Reserved.</div>
      <div className="socials">
        <ul style={{display:'flex',justifyContent:'center',listStyle:'none'}}>
          <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      </Row>
      </Col>
 
    </Container>
  )
}
