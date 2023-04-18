import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Nav } from 'react-bootstrap';
import { Movie } from '../../types/Movie';
import { getMovieList } from '../../utils/movie';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import '../../css/allPagesStyle.css'


export interface Showtime {
    date: string;
    time: string;
}

export interface Seat {
    row: number;
    number: number;
    available: boolean;
}



//   type Props={
//     createMovie:(name:string, description:string, poster:string,showtimes:string)=>void
//     onDelete:(id:number)=>void

// }

type Prop = {
    id: string
    name: string;
    description: string;
    poster: string;
    showtimes: string;
}

const CreateMovie = (props: Prop) => {
    const navigate = useNavigate();
    const [movieId, setMovieId] = useState('');
    const [movieName, setMovieName] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [showtimes, setShowtimes] = useState('');





    // setting the state once the user clicks
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieId(e.target.value);
    };

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieName(e.target.value);
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieDescription(e.target.value);
    };
    const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMoviePoster(e.target.value);
    };

    const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowtimes(e.target.value);
    };


    // on submitting i have to call the api to store it to db
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage. getItem("token");

        // props.addGrocery(groceryName,groceryCategory,groceryQuantity);
        // instead of this submit to database
        console.log(movieName);

        try {
            const response = axios.put(
                'http://localhost:4000/movies/'+movieId,
                {
                    id:movieId,
                    name: movieName,
                    description: movieDescription,
                    poster: moviePoster
                }
                , {
                headers: {
                   // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTY5YWYyNjFlYzkzYTlkMjNkNzIwMyIsImlhdCI6MTY3NjA1NzMzMCwiZXhwIjoxNjc2MDYwOTMwfQ.yHKJyhmgZXTg-IulDp8vt0WhxhEujG_Utf0F7kHNQaM`
                   'Authorization': `Bearer ${token}`
                
                }

            }
            );

            console.log(response);
        } catch (err) {
            console.log(err);
        }

        setMovieName('');
        setMovieDescription('');
        setMoviePoster('');
        navigate("/");
    };


    return (
<React.Fragment>
{/* <Navbar/> */}
<div className="container">
<div className='form-container'>
<Form onSubmit={handleSubmit}>
<div><h1>Update Movies</h1></div>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
        <Form.Label>Movie Id</Form.Label>
        <Form.Control type="text" placeholder="Movie Id" />
        <Form.Text className="text-muted">
         {movieId}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange1}>
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Movie Name" />
        <Form.Text className="text-muted">
         {movieName}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange2}>
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Movie Description" />
        <Form.Text className="text-muted">
         {movieDescription}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange3}>
        <Form.Label>Movie Poster</Form.Label>
        <Form.Control type="text" placeholder="Movie Poster" />
        <Form.Text className="text-muted">
         {moviePoster}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange4}>
        <Form.Label>Movie Time</Form.Label>
        <Form.Control type="text" placeholder="Movie Time" />
        <Form.Text className="text-muted">
         {showtimes}
        </Form.Text>
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </React.Fragment>

    )





}
export default CreateMovie;




