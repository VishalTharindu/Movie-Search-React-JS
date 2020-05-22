import React from "react"
import { Image, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Header = props =>{
    return(
        <header>
            <Row variant="primary"> 
                <Col md={4}>
                </Col>
                <Col md={8}>
                    <h1><b>React Move Search</b></h1>
                </Col>
            </Row>
            
        </header>
    )
}

export default Header