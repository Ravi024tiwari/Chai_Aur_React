import { createContext,useContext } from "react";
//in this we write all the useTheme Context...themeProvider and useTheme
//its for take the variable as well a methods by default to all the components which want to render
export const ThemeContext = createContext({
    themeMode:"dark",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

//now write their provider
export const ThemeProvider =ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}