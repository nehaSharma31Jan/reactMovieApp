import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Movie } from '../../types/Movie';
import { getMovieDetails } from '../../utils/movie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../css/allPagesStyle.css'




const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      const fetchMovie = async (id:any) => {
        try {
          const movie = await getMovieDetails(id);
          setMovie(movie);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMovie(id);
  }, [id]);
  

  const handleBookTicket = (id: string) => {
    navigate(`/book/${id}`);
  };

  return (
    <React.Fragment>
      {/* <Navbar/> */}
      <div className="container">
        <div className='form-container'>
        <Container>
      {movie ? (
        <Row className="my-5">
          <Col xs={12} md={4} className="text-center">
            <img src={movie.poster} alt={movie.name} className="img-fluid" />
          </Col>
          <Col xs={12} md={8}>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <Button variant="primary" onClick={() => handleBookTicket(movie._id)} >Book Ticket</Button>
          </Col>
        </Row>
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </Container>
    </div>
    </div>
    </React.Fragment>

  );
};

export default MovieDetails;
