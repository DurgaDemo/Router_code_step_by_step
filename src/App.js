// import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Page404 from './components/Page404';


import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

import User from './params/User';
import Filter from './params/Filter';

import Contactus from './nestedroute/Contactus';
import Channel from './nestedroute/Channel';
import Company from './nestedroute/Company';
import Other from './nestedroute/Other';

function App() {
  return (
    <div className="App">


      
      <BrowserRouter>
       <Nav/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Navigate to='/about'/>}/>
       <Route path='/user/:name' element={<User/>}/>
       <Route path='/filter' element={<Filter/>}/>

       <Route path='/contactus/' element={<Contactus/>}>

       <Route path='channel' element={<Channel/>}/>
       <Route path='company' element={<Company/>}/>
       <Route path='other' element={<Other/>}/>

        </Route>
       <Route path='*' element={<Page404/>}/>
       <Route />
       </Routes>
      </BrowserRouter> 









    </div>
  );
}

export default App;
