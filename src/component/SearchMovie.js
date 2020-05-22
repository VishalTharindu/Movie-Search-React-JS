import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import { Button, FormGroup } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import { Col, Row, Card } from 'react-bootstrap';
import MoveCard from './MoveCard'



function SearchMovie(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate    
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();

        
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=cecbd33aa41db5814977d5ddbe8d5a3c&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    return(
        <div>
        <Form onSubmit={searchMovies}>
            <Row>
                <Col md={8}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label htmlFor="query">Movie Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="query" 
                            placeholder="Movie Name"
                            value={query} onChange={(e) => setQuery(e.target.value)} 
                        />
                    </Form.Group>                     
                </Col>
                <Col md={8} >
                    <FormGroup>
                        <Button  variant="danger" type="submit">Search</Button>
                    </FormGroup>
                </Col>               
            </Row>                       
        </Form>
        <Row>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MoveCard movie={movie} key={movie.id}/>
            ))}
        </Row>
        </div>
    )
}
export default SearchMovie