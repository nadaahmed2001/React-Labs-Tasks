import React,{ Suspense,useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
// import Movies from "./pages/Movies";
// import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header"
// import Watchlist from "./pages/Watchlist";
// import NotFound from "./pages/NotFound";
// import Signup from "./pages/Signup";
import LanguageContext from './context/language';

const Movies=React.lazy(()=>import('./pages/Movies'));
const MovieDetails=React.lazy(()=>import('./pages/MovieDetails'));
const Watchlist=React.lazy(()=>import('./pages/Watchlist'));
const NotFound=React.lazy(()=>import('./pages/NotFound'));
const Signup=React.lazy(() => import('./pages/Signup'));

function App() {
  // const [count, setCount] = useState(0)

  const [language, setLanguage] = useState("en");
  
  return (
    <BrowserRouter>
    <LanguageContext.Provider value={{ language, setLanguage }}> 
      {/* passing the language and setLanguage to the context */}

      <div
        dir={language==="ar" ? "rtl" : "ltr"}
        className={language==="ar"? "text-right" : "text-left"}
      >
    <Header />
      <div className='container my-5'>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie-details/:id' element = {<MovieDetails />} /> 
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
      </div>
      </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  )
}

export default App
