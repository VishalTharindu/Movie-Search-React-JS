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
                    <h1><b>Shadow Movies</b></h1>
                    <h6>All your favourite movies in one place</h6>
                </Col>
            </Row>
            
        </header>
    )
}

export default Header