import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar/Navbar"
import  Home  from "./components/Home/Home";
import  MovieList  from "./components/Movie/MovieList";
import  MovieDetails  from "./components/Movie/MovieDetails";
import  BookTicket  from "./components/Movie/Ticket";
import  Login  from "./components/Auth/Login";
import  Signup  from "./components/Auth/Signup";
import  {AuthContext}  from "./context/AuthContext";
import CreateMovie from "./components/Movie/CreateMovie";
import DeleteMovie from "./components/Movie/DeleteMovie";
import UpdateMovie from "./components/Movie/UpdateMovie";
import FooterHere from "./components/footer/FooterHere";
import WelcomeNavbar from "./components/Navbar/WelcomeNavbar";





const App: React.FC = () => {

  const { user, isAuthenticated } = useContext(AuthContext);
  const [count, setCount] = useState<boolean>()

  return (
    <React.Fragment>


{isAuthenticated ?  <Router>

      
<Navbar/>
   <Routes>
     <Route  path="/" element={<Home movies={[]}/>} />
     {/* <Route  path="/" element={<footer/>} /> */}
   
     <Route path="/movies" element={<MovieList/>}/>
     <Route path="/movie/:id" element={<MovieDetails/>} />
     <Route path="/create" element={ <CreateMovie  name="" description="" poster="" showtimes=""/>} />
     <Route path="/delete" element={ <DeleteMovie name=""/>} />
     <Route path="/update" element={ <UpdateMovie id="" name="" description="" poster="" showtimes=""/>} />
     
     {user ? (
       <Route path="/book/:id" element={<BookTicket/>} />
     ) : (
       <Route path="/login" element={<Login/>} />
     )}
     {!user && <Route path="/signup" element={<Signup/>} />}
   </Routes>
   
 </Router>
: <Router>

      
<WelcomeNavbar/>
   <Routes>
     <Route  path="/" element={<Home movies={[]}/>} />
     {/* <Route  path="/" element={<footer/>} /> */}
   
     <Route path="/movies" element={<MovieList/>}/>
     <Route path="/movie/:id" element={<MovieDetails/>} />
     <Route path="/create" element={ <CreateMovie  name="" description="" poster="" showtimes=""/>} />
     <Route path="/delete" element={ <DeleteMovie name=""/>} />
     <Route path="/update" element={ <UpdateMovie id="" name="" description="" poster="" showtimes=""/>} />
     
     {user ? (
       <Route path="/book/:id" element={<BookTicket/>} />
     ) : (
       <Route path="/login" element={<Login/>} />
     )}
     {!user && <Route path="/signup" element={<Signup/>} />}
   </Routes>
   
 </Router>}
   
    </React.Fragment>
 
  );
};

export default App;
