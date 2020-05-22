import React from "react";
import { Col, Row, Card } from 'react-bootstrap';

const MovieCard = ({movie}) =>{
    return (
            <Col md={4}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                alt={movie.title + ' poster'} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            RELEASE DATE: {movie.release_date}
                        </Card.Text>
                        <Card.Text>
                            RATING: {movie.vote_average}
                        </Card.Text>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default MovieCard