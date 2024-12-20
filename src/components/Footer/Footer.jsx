// This is the initial code for the Footer component. It is used to display the footer of the application.
// Its purpose is to show the contact information of the application.

// This dependencies are used in this file.
import React from 'react'
import { NavLink, Row, Col, Container, ListGroup} from 'react-bootstrap';
import './Footer.css';

// This is the main function of the Footer component.
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>

          <Col md="3" sm="12" className="quick_line mt-3 mt-md-0">
            <h4 style={{fontSize: 17 }} className="mt-lg-0 mt-sm-3"><u>Informacion de contacto</u></h4>

            <div className='d-flex align-items-center'>
              <p style={{fontSize: 11 }} className="pb-1 pt-1">Uruguay, Maldonado, Punta del Este</p>
            </div>

            <div className='d-flex align-items-center'>
              <p style={{fontSize: 11,  }} className=""> foroUCUInsider@hotmail.com</p>
            </div>

            <div className='d-flex align-items-center'>
              <p style={{fontSize: 11 }} className="pb-1 pt-1">+598 97 643 762</p>
            </div>

          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer;