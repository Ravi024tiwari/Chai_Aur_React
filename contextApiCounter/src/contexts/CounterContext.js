import { useContext,createContext } from "react";

const CounterContext =createContext(0);//inital we will give null value to the context

export default CounterContext;