import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';
function Page1(){
    return (
        <div className="page1-App">
          <p className="gully">Gully Cricket Club</p>
          <button className="start-app-btn"><Link to='/cric/page2'>Let's Start</Link></button>
        
        </div>
      );
    }
export default Page1;