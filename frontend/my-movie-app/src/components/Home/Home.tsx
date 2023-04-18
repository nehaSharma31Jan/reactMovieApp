import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Movie } from '../../types/Movie';
import { AuthContext } from '../../context/AuthContext';
import { getMovies } from '../../api';
import MovieList from '../Movie/MovieList';
import Navbar from '../Navbar/Navbar';

interface Props {
  movies: Movie[];
}

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({ movies: initialMovies }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const fetchData = useCallback(async () => {
    try {
     // const data = await getMovies();
     const dummyMovies: Movie[] = [
      {
        _id: "1",
        name: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        showtimes: [
          {
            date: "2023-02-10",
            time: "19:00",
            seats: [
              {
                row: 1,
                number: 1,
                available: true
              },
              {
                row: 1,
                number: 2,
                available: false
              },
              {
                row: 1,
                number: 3,
                available: true
              }
            ]
          },
          {
            date: "2023-02-11",
            time: "14:00",
            seats: [
              {
                row: 2,
                number: 1,
                available: false
              },
              {
                row: 2,
                number: 2,
                available: true
              },
              {
                row: 2,
                number: 3,
                available: false
              }
            ]
          }
        ]
      }]
    
      setMovies(dummyMovies);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [navigate, isAuthenticated, fetchData]);

  return (
    <React.Fragment>
    {/* <Navbar/> */}


      <Row className="my-5">
        <Col>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <MovieList />
          )}
        </Col>
      </Row>
      

    </React.Fragment>
  );
};

export default Home;
