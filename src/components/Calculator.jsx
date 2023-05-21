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
                        <Button setValue={setValue} className={`btn-container ${cBtnclr}`}                          oper="reset"   content="C"/>
                        <Button setValue={setValue} className={`btn-container ${moreBtnclr}`}                       oper="("       content="("/>
                        <Button setValue={setValue} className={`btn-container ${moreBtnclr}`}                       oper=")"       content=")"/>
                        <Button setValue={setValue} className={`btn-container ${equalBtnClr}`}                      oper="*"       content="x"/>
                        <Button setValue={setValue} className={`btn-container ${moreBtnclr}`}                       oper="**(1/2)" content="√"/>
                        <Button setValue={setValue} className={`btn-container ${moreBtnclr}`}                       oper="%"       content="%"/>
                        <Button setValue={setValue} className={`btn-container ${moreBtnclr}`}                       oper="+/-"     content="+/-"/>
                        <Button setValue={setValue} className={`btn-container ${equalBtnClr}`}                      oper="/"       content="/"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="7"       content="7"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="8"       content="8"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="9"       content="9"/>
                        <Button setValue={setValue} className={`btn-container ${equalBtnClr}`}                      oper="-"       content="-"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="4"       content="4"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="5"       content="5"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="6"       content="6"/>
                        <Button setValue={setValue} className={`btn-container ${equalBtnClr}`}                      oper="+"       content="+"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="1"       content="1"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="2"       content="2"/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="3"       content="3"/>
                        <Button setValue={setValue} className={` btn-container ${equalBigBtnClr}`}   value={value}  oper="="       content="="/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper= "."      content="."/>
                        <Button setValue={setValue} className={`btn-container ${numBtnClr}`}                        oper="0"       content="0"/>
                        <Button setValue={setValue} className={`btn-container ${deleteWidenBtnClr}`} value={value}  oper="del"     content="DEL"/> 
                </div>
            </div>
            )
}