import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
const Player = (props) => {
    const {name,img,salary,id} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    console.log(props)
        
    // const [num, setNum] = useState(); //default value is not 0 rather empty
    // const displayID = () => setNum(id);
    return (
        <div className='card'>
            
            <img style={{width: '150px'}} src={img} alt="" />
            <h1>Full Name: {name}</h1>
            <h3>Yearly Salary:{salary}</h3>
            {/* <h3>ID:{num}</h3> */}
            {/* <button onClick={displayID}>Show Id</button> */}
            <button 
                    onClick={ () =>handleAddPlayer(props.player)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Click to Add
            </button>
            
        </div>
    );
};

export default Player;