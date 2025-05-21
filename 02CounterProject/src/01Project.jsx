import { useState } from "react";//only import this to use the hook

export function CounterProject(){
    let [counter,setCounter] = useState(0);

    //here we set their condition
    const add =()=>{
    if(counter>=20) {
        return;
    }
    counter++;
    setCounter(counter);//here we set the counter and update that
}

const subtract =()=>{
    if(counter==0) {
        return;
    }
    counter--;
    setCounter(counter);//here we set the counter and update that
}

    return (
        <>
        <h2>Making the first Project on Counter Updation...</h2>
        <button onClick={add}>Increase Count :{counter}</button>
        <br/>
        <br/>
        <button onClick={subtract}>Decrease Count:{counter}</button>
        {counter>=20 && <h2>Further updation is not possible... </h2>}
        </>
    )
}