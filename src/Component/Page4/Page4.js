import React from 'react';
import './Page4.css';
function Page4(){
    const[players1,setplayers]=React.useState([]);
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
            <p className='page3-team'>Enter Team2 Players Name</p>
            <div>
                {
                    players1.map((player)=>{
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
export default Page4;