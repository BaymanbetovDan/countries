import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import Detail from './components/Pages/Detail/Detail';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:name' element={<Detail/>}/>
        </Routes>
      </main>

    </>
  );
};

export default App;