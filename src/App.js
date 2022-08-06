import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Page1 from './Component/Page1/Page1';
import Page2 from './Component/Page2/Page2';
import Page3 from './Component/Page3/Page3';
import Page4 from './Component/Page4/Page4';
import './App.css';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/>
      </Routes>
    </BrowserRouter>

  )
}
 

export default App;
