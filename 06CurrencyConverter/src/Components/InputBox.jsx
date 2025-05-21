//this is the input bo
import React,{useId} from "react";



function InputBox({
    label,
    amount,//it the value by the user
    onAmountChange,//jab amount change ho to convert ho jae 
    onCurrencyChange,//jab currency type change hoga [usd,inr,jpn,..jo bhi hamare lis me rahega api ke through red]
    currenyOptions= [],//here we take all options by use of api call and render it
    className = "",
    selectCurrency ="usd",
    amountDisable =false,
    currencyDisable =false,
}) {
   
    const amoutInputId =useId();//here we got the unique d
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amoutInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amoutInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}// to show that input variable is enable or disable by the user
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    //here we change the value 
                    //Due to natorious behaviour of e.target.value
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"  
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                        {currenyOptions.map((currency)=>(//keys on mapping 
                            <option key={currency}>
                                {currency}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;


