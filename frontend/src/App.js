import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Courses from './Components/Courses';
import About from './Components/About';
import Contact from './Components/Contact';
import Search from './Components/Search';
import Course from './Components/Course';
import Faqs from './Components/Faqs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='course' element={<Course/>}/>
          <Route path='faqs' element={<Faqs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
