import './App.css';
import infoData from './playerInfo.json'
import { useState,useEffect } from 'react';
import Player from './component/Player/Player';
import Calculation from './component/Calculation/Calculation';

function App() {

  const [players, setPlayer] = useState([]);
  const [cart , setCart] = useState([]);
 
  useEffect(() =>{
    setPlayer(infoData);
  },[]);
  
  const handleAddPlayer = (player) =>{
    const newCart = [...cart, player ]
    setCart(newCart);    //setCart([...cart, player]);
    
  }
  
  return (
    <div className="App flex">
      
        <div className="plaer-container">
          {
            players.map(pl => <Player player={pl} handleAddPlayer={handleAddPlayer} key={pl.id}></Player>)
          } 
          </div>
          
          <div>
          <Calculation cart={cart}></Calculation> 
          </div>
    </div>
  );
}

export default App;
