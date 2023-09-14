
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Form from './Componets/Form';
import FormList from './Componets/FormList';
import Home from './Componets/Nav';
import Detail from './Componets/Detail';
import  Footer  from './Componets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componets/HomePage';
function App() {

 
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/post' element={<Form/>}/>
      <Route path='/data' element={<FormList/>}/>
      <Route path='/next' element={<Detail/>}/>
    </Routes>

    <Footer/>
    </>

  );
}

export default App;
