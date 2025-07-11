import React, { useEffect, useState } from "react";
import Square from "./square";
import "../App.css"
function Board(){
    let [state,setState] = useState(Array(9).fill(null));//its array of given size and with given value
    let [xturn,setXturn] =useState(true);//firstly make true for their turn
    const [winner,setWinner] =useState("");
    let arr =[[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]
            ]

    //can we use Useeffect such that if any of time state will change then we fire this
    useEffect(()=>{
        for(let ele of arr){
           let [a,b,c] =[...ele];//spread them as well
           if(state[a]=="X" && state[b]=="X" && state[c]=="X"){
            console.log("X team is the winner of this game...")
            setWinner("X");
            //after winner any  one the context return from that
           
           }
           if(state[a]=="O" && state[b]=="O" && state[c]=="O"){
            console.log("O team is the winner of this game...")
            setWinner("O");
           
           }
        }
    },[state])

    const handleClick =(index)=>{
        if(winner=="X" || winner=="O") return;//if we get any of the winning paritcipants
        if(state[index]!=null) return;//not need to change their value
        console.log("Clicking the index..",index);//the user clicked on that given index square
        const copystate =[...state];//its spread it into another array copy
        //copy of the existing state that all the square grid have
        if(xturn) copystate[index] ="X";
        else copystate[index] ="O";
        setState(copystate);//update the value of square 
        setXturn(!xturn);//true that to false ho gya orr false tha too true ho gya
    }//jaise hi state ki value change hui turant hi saare states me update ho gyi..
    console.log(state);
    return (
        <div className="board">
          <div className="row">
            <Square value ={state[0]} onClick ={()=>handleClick(0)}/>
            <Square value ={state[1]} onClick ={()=>handleClick(1)}/>
            <Square value ={state[2]} onClick={()=>handleClick(2)}/>
          </div>
          <div className="row">
            <Square value ={state[3]} onClick ={()=>handleClick(3)}/>
            <Square value ={state[4]} onClick ={()=>handleClick(4)}/>
            <Square value ={state[5]} onClick ={()=>handleClick(5)}/>
          </div>
          <div className="row">
            <Square value ={state[6]} onClick ={()=>handleClick(6)}/>
            <Square value ={state[7]} onClick ={()=>handleClick(7)}/>
            <Square value ={state[8]} onClick ={()=>handleClick(8)}/>
          </div>
          <div>
            <h2>Winner of the Game is :{winner}</h2>
          </div>
        </div>
    )
}
export default Board;