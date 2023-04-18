import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const getMovieList = async () => {
  try {
    const response = await axios.get(`${baseURL}/movies`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async (movieId: string) => {
  try {
    const response = await axios.get(`${baseURL}/movies/${movieId}`);
    return response.data;
  
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const bookTicket = async (movieId: string, ticketData: any) => {
  try {
    const response = await axios.post(`${baseURL}/book/${movieId}`, ticketData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
