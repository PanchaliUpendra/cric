import React from 'react';
import './Page3.css';
function Page3(){
    const[players,setplayers]=React.useState([]);
    const[name,setname]=React.useState('');
    function handlename(e){
        setname(e.target.value);
    }
    function handler(){
        setplayers((players)=>{
            return([...players,name]);
        })
        setname('');
    }
    return(
        <div className='page3-container'>
            <div className='page3-div2'>
            <p className='page3-team'>Enter Team1 Players Name</p>
            <div>
                {
                    players.map((player)=>{
                        return(
                            <h1 className='page3-player'>{player}</h1>
                        )
                    })
                }
            </div>
            <div>
            <input type="text" placeholder=" Add player name" onChange={handlename} value={name} className="page3-input"/>
            </div>
            <button onClick={handler} className="page3-add-player">Add player</button>
            </div>


        </div>
    );
}
export default Page3;