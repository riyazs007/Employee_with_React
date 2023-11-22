import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Save from './Save';
import ButtonAppBar from './Headers';
import GetAll from './GetAll';


 const Home = () => {
  return (
    <><ButtonAppBar/>
        <Routes>                        
            <Route path='/' element={<Save/>} />
            <Route path='/getall' element={<GetAll/>} />              
            </Routes> 
    </>
  )
}
export default Home;