import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Movie } from '../../types/Movie';
import { getMovieList } from '../../utils/movie';
import Navbar from '../Navbar/Navbar';
import '../../css/cardTickets.css'


interface Props {
  movies: Movie[];
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
// fetching the movies from api using getMovieList() method then setting it in the state
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMovieList();
        setMovies(movieList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const handleBookTicket = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <React.Fragment>
      
  
    <div className="Container">
      <div className='ContainerTickets'>
      <div className="card-columns">
  
      <Row className="d-flex justify-content-center">
        {movies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card">
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button variant="primary" onClick={() => handleBookTicket(movie._id)}>
                  Select Movie
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
    </div>
 
    </React.Fragment>
  );
};

export default MovieList;
