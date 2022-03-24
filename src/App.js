import React,{useState,useEffect} from 'react';
import SquareComponent from './SquareComponent';

const initialState = ["" , "" , "" , "", "", "", "", "", ""];


function App() {
  const [gamestate , setgamestate] = useState(initialState);
  const [IsXChance , setIsXChance] = useState(false);

  const onSqaureClick = (i) =>{
    let strings = Array.from(gamestate);
    strings[i] = IsXChance ? "X" : "0";
    setgamestate(strings);
    setIsXChance(!IsXChance);
  }

  useEffect(()=>{
    const winner = checkWinner();
    if(winner){
      cleargame();
      alert(`Congrats ! ${winner} , You Won the game`)
    }
  },[gamestate])


  const cleargame = () => {
    setgamestate(initialState);
  }

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // console.log('Class: App, Function: checkWinner ==', gamestate[0], gamestate[1], gamestate[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
            return gamestate[a];
        }
    }
    return null;
}

  return (
    <div className='app-header'>
      <p className='heading-text'>React Tic Tac Toe - 2022</p>
      <div className='row jc-center'>
        <SquareComponent className="b-bottom-right"  state={gamestate[0]} onClick={()=>onSqaureClick(0)} />
        <SquareComponent className="b-bottom-right" state={gamestate[1]} onClick={()=>onSqaureClick(1)}/>
        <SquareComponent className="b-bottom" state={gamestate[2]} onClick={()=>onSqaureClick(2)}/>
      </div>
      <div className='row jc-center'>
      <SquareComponent className="b-bottom-right" state={gamestate[3]} onClick={()=>onSqaureClick(3)}/>
        <SquareComponent className="b-bottom-right" state={gamestate[4]} onClick={()=>onSqaureClick(4)}/>
        <SquareComponent className="b-bottom" state={gamestate[5]} onClick={()=>onSqaureClick(5)}/>
      </div>
      <div className='row jc-center'>
      <SquareComponent className="b-right" state={gamestate[6]} onClick={()=>onSqaureClick(6)}/>
        <SquareComponent className="b-right" state={gamestate[7]} onClick={()=>onSqaureClick(7)}/>
        <SquareComponent state={gamestate[8]} onClick={()=>onSqaureClick(8)}/>
      </div>
      <button className='clear-button' onClick={cleargame} >Clear Game</button>
    </div>
  )
}

export default App