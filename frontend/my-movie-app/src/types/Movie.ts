export interface Movie {
    _id: string;
    name: string;
    description: string;
    poster:string;
    showtimes: Showtime[];
  }
  
  export interface Showtime {
    date: string;
    time: string;
    seats: Seat[];
  }
  
  export interface Seat {
    row: number;
    number: number;
    available: boolean;
  }

  
  