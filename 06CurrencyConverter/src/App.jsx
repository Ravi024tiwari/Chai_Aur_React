import { useState } from 'react'
import InputBox from './Components/InputBox';
import './App.css'
import useCurrencyInfo from './hooks/useCurrency'
function App() {
const [amount ,setAmount] =useState(0);
const [from,setFrom] =useState("usd");//hooks to change the value of hooks
const [to,setTo] =useState("inr")
const [convertedAmount, setConvertedAmount] =useState(0);//this is the converted amount to show the values of data
const currencyInfo =useCurrencyInfo(from);//we pass the currency
//from here we get the object of data {key :value} pairs

//here we fetch only keys from object of currency

const options =Object.keys(currencyInfo);//here we get all keys from the currencyInfo {oject}

//swap of keys

const swap =()=>{
  setFrom(to);
  setTo(from);//only swap their values of data
  setConvertedAmount(amount)
  setAmount(convertedAmount)


  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to]);///here we convert and set the amount
  }

  //now we set the converted amout

  
}
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/31993945/pexels-photo-31993945/free-photo-of-female-mallard-duck-in-lush-green-park-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
            }}
        >
            <div className="w-full">
                
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currenyOptions={options}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={amount}
                                currenyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()};
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
