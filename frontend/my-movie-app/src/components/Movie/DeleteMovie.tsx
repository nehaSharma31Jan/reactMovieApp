import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button,Form } from 'react-bootstrap';
import { Movie } from '../../types/Movie';
import { getMovieList } from '../../utils/movie';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import '../../css/allPagesStyle.css'

type Props={
    name:string;
}




const DeleteMovie=(props:Props)=>{
    const navigate = useNavigate();
    // creating a constant to store value of the form
const[movieName,setMovieName]= useState('');
const token = localStorage. getItem("token");

// setting the value to the moviename state variable
const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setMovieName(e.target.value);
}

// on submit delete
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // props.addGrocery(groceryName,groceryCategory,groceryQuantity);
    // instead of this submit to database
    console.log(movieName);
     
    try {
        const response = axios.delete(
          'http://localhost:4000/movies/'+movieName,
        {
            headers: {
              //'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTY5YWYyNjFlYzkzYTlkMjNkNzIwMyIsImlhdCI6MTY3NjA1NzMzMCwiZXhwIjoxNjc2MDYwOTMwfQ.yHKJyhmgZXTg-IulDp8vt0WhxhEujG_Utf0F7kHNQaM` 
              'Authorization': `Bearer ${token}`
            }

    }
    );
  
        console.log(response);
        console.log("deleted");
      } catch (err) {
        console.log(err);
    }

    setMovieName('');

    navigate('/');
  
  };


return(
  <React.Fragment >
{/* <Navbar/> */}


<div className='container'>
<div className='form-container'>

<Form onSubmit={handleSubmit}>
<div><h2>Delete Movies</h2></div>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
        <Form.Label>Movie to be Deleted</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
        <Form.Text className="text-muted">
          {movieName}
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
export default DeleteMovie;