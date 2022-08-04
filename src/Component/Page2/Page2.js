import React from 'react';
import './Page2.css';
function Page2(){
    const[team1,seteam1]=React.useState('');
    const[team2,seteam2]=React.useState('');
    const[team3,seteam3]=React.useState('');
    const[team4,seteam4]=React.useState('');
    function handle1(e){
        seteam1(e.target.value);
    }
    function handle2(e){
        seteam2(e.target.value);
    }
    function handle3(){
        seteam3(team1);
        seteam4(team2);

    }
    return(
        <div className='page2-container'>
            <div className='page-div2'>
            <p className='page2-head'>Enter Your Team Names</p>
            <div className='page2-div-con'>
            <input type='text' placeholder='Team1 Name' value={team1} onChange={handle1} className="page2-input"/>
            <p className='page2-head2'>Vs</p>
            <input type='text' placeholder='Team2 Name' value={team2} onChange={handle2} className="page2-input"/>
            </div>
            <button onClick={handle3} className="page2-save">Save</button>
            <button className="page2-save">Next</button>
            <p className='page2-head2'>Team1: {team3}</p>
            <p className='page2-head2'>Team2: {team4}</p>
            </div>
        </div>
    );
}
export default Page2;