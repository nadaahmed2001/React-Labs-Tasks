import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header"
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
      <div className='container my-5'>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie-details/:id' element = {<MovieDetails />} /> 
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
