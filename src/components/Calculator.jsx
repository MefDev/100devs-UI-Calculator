import React, { useState } from "react";
import Button from "./Button";
import SwitchBtn from "./SwitchBtn";
export default function Calculator()
{
    
    /* Manage State */
    const [value, setValue] = useState("")
    const [ bgColor, setBgColor ] = useState("");
    const [ moreBtnColor, setMoreBtnColor] = useState(false);
    const [checked, setChecked] = useState(false)
   
    /* Reset the state */ 
    function handleReset()
    {
        setValue("")
    }
    /* Change the calculator backgroud based the switch btn */
    const handleSwitch  = event => {
        setChecked(event.target.checked)
        if (checked) 
        {
            setBgColor("linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(228,231,232,1) 75%, rgba(228,231,232,1) 100%)")
            setMoreBtnColor(prevState => !prevState) 
        }
        else
        {
            setBgColor("linear-gradient(180deg, rgba(72,77,79,1) 0%, rgba(32,36,39,1) 75%, rgba(29,33,36,1) 100%)")
            setMoreBtnColor(prevState => !prevState)
            
        }  
        
    }
    /* Toggle dark mode classes */
    const moreBtnclr = moreBtnColor ? "more--btn-background-dark" : "more--btn-background"
    const cBtnclr = moreBtnColor ? "c--btn-background-dark" : "c--btn-background"
    const equalBtnClr = moreBtnColor ? "op--btn-background-dark" : "op--btn-background"
    const equalBigBtnClr = moreBtnColor ? "equal--btn-background-dark" : "equal--btn-background"
    const numBtnClr = moreBtnColor ? "num--btn-background-dark" : "num--btn-background"
    const deleteWidenBtnClr = moreBtnColor ? "delete-widen--btn-background-dark" : "delete-widen--btn-background"
    const textfieldClr = moreBtnColor ? "text-field-dark" : "text-field"
    const switchBtnClr = moreBtnColor ? "switch-btn-color-dark" : "switch-btn-color"

    return (

            <div className="calculator-container" style={{background: bgColor}}>
                <div className={`${textfieldClr}`}>
                    <h2 className="field">{value}</h2>
                </div>
                <div className="main-btn-func">
                    <SwitchBtn checked={checked} onChange={handleSwitch} className={`${switchBtnClr}`}/>
                    <Button className={`btn-container ${deleteWidenBtnClr}`}  s content="↑"/> 
                </div>
                <div className="main-btns">
                        <Button onClick={handleReset} className={`btn-container ${cBtnclr}`}    content="C"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "(")} className={`btn-container ${moreBtnclr}`} content="("/>
                        <Button onClick={() => setValue(prevValue => prevValue + ")")} className={`btn-container ${moreBtnclr}`} content=")"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "*")} className={`btn-container ${equalBtnClr}`}   content="x"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "**(1/2)")} className={`btn-container ${moreBtnclr}`} content="√"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "%")} className={`btn-container ${moreBtnclr}`} content="%"/>
                        <Button className={`btn-container ${moreBtnclr}`} content="+/-"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "/")} className={`btn-container ${equalBtnClr}`}   content="/"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 7)}  className={`btn-container ${numBtnClr}`}  content="7"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 8)} className={`btn-container ${numBtnClr}`}  content="8"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 9)} className={`btn-container ${numBtnClr}`}  content="9"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "-")} className={`btn-container ${equalBtnClr}`}   content="-"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 4)}  className={`btn-container ${numBtnClr}`}  content="4"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 5)}  className={`btn-container ${numBtnClr}`}  content="5"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 6)}  className={`btn-container ${numBtnClr}`}  content="6"/>
                        <Button onClick={() => setValue(prevValue => prevValue + "+")} className={`btn-container ${equalBtnClr}`}   content="+"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 1)}   className={`btn-container ${numBtnClr}`}  content="1"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 2)}   className={`btn-container ${numBtnClr}`}  content="2"/>
                        <Button onClick={() => setValue(prevValue => prevValue + 3)} className={`btn-container ${numBtnClr}`}  content="3"/>
                        <Button onClick={() => setValue(              
                         String(eval(value)).length > 3 &&  String(eval(value)).includes(".") ? String(eval(value).toFixed(4)) : String(eval(value))
                            )} className={` btn-container ${equalBigBtnClr}`} content="="/>
                        <Button onClick={() => setValue(prevValue => prevValue + ".")} className={`btn-container ${numBtnClr}`} content="."/>
                        <Button onClick={() => setValue(prevValue => prevValue + 0)} className={`btn-container ${numBtnClr}`}     content="0"/>
                        <Button onClick={() => setValue("del")} className={`btn-container ${deleteWidenBtnClr}`}   content="DEL"/> 
                </div>
            </div>
            )
}