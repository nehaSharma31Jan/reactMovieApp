import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Movie, Showtime, Seat } from '../../types/Movie';
import Axios from 'axios';
import { bookTicket, getMovieDetails } from '../../utils/movie';
import Navbar from '../Navbar/Navbar';
import '../../css/allPagesStyle.css'
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';


const BookTicket: React.FC = () => {
    const [showtime, setShowtime] = useState<Showtime | null>(null);
    const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
    const [selectedSeatNumber, setSelectedSeatNumber] = useState<number | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     Axios.get(`/api/movies/${id}`)
    //         .then(res => {
    //             const movie = res.data as Movie;
    //             setShowtime(movie.showtimes[0]);
    //         })
    //         .catch(err => console.error(err));
    // }, [id]);

    
  useEffect(() => {
    // Axios.get(`/api/movies/${id}`)
      // .then(res => setMovie(res.data))
       //.catch(err => console.error(err));
       const fetchMovie = async (id:any) => {
         try {
           const movie = await getMovieDetails(id) as Movie;
           setShowtime(movie.showtimes[0]);
         } catch (error) {
           console.error(error);
         }
       };
       fetchMovie(id);
   }, [id]);

    const handleSelectSeat = (seat: Seat) => {
        setSelectedSeat(seat);
    };

    const handleSeatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSeatNumber(parseInt(event.target.value, 10));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const rand = Math.floor(100000 + Math.random() * 900000)
        const message = "Ticket Booked Successfully!! \nYour Confirmation ID is: "+ rand +"\nType Phone Number to recieve Confirmation of booking \nPay on Counter in Cinema";
        prompt(message);
        navigate(`/`);
        if (!showtime || !selectedSeatNumber) return;
        // add book code
    };

    return (
        <>
            {showtime ? (
                <React.Fragment>

                    {/* <Navbar/> */}
                    <div className="container">
                    <div className='form-container'>
                <Container>
                    <Row className="my-5">
                        <Col xs={12} md={6}>
                            <h2>Select Seat</h2>
                            <Row>
                                {showtime.seats.map(seat => (
                                    <Col key={seat.number} xs={4} className="text-center">
                                        <Button
                                            variant={selectedSeat === seat ? "primary" : "secondary"}
                                            onClick={() => handleSelectSeat(seat)}
                                            disabled={!seat.available}
                                        >
                                            {seat.row}-{seat.number}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Booking Information</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Movie</Form.Label>
                                    <Form.Control value={id} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control value={showtime.date} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control value={showtime.time} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Seat</Form.Label>
                                    <Form.Control value={selectedSeat?.number} disabled />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Book Ticket
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </div>
                </div>
                </React.Fragment>) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default BookTicket;
