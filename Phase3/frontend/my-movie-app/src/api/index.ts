import axios from 'axios';
import { Alert } from 'react-bootstrap';

const baseURL = 'http://localhost:4000';

// export const login = async (email: string, password: string) => {
//   try {
//     const response = await axios.post("http://localhost:4000/users/authenticate", { email, password });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movies`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    //called this
   // const response = await axios.get(`${baseURL}/movies/${id}`);
   // return response.data;
   const dummyMovie = 
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
   }
   return dummyMovie;
  } catch (error) {
    throw error;
  }
};

export const bookTicket = async (id: string, seat: number) => {
  try {
    const response = await axios.patch(`${baseURL}/movies/${id}`, { seat });
    return response.data;
  } catch (error) {
    throw error;
  }
};
