import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Header from './component/Headre'
import SearchMovie from './component/SearchMovie'
function App() {
  return (
    <div className="container">
      <Card style={{ width: '100%' }}>
        
        <Card.Body>
          <Card.Title><Header /></Card.Title>
          <Card.Text>
              <SearchMovie />
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
