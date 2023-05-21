import React from "react";

export default function Button({oper, content, setValue, className, value})
{
    function handleClick()
    {
        /* Reset the state */ 
        if (oper === "=")
        {
                try 
                {
                        setValue(() => String(eval(value)).length > 3 &&  String(eval(value)).includes(".") ? String(eval(value).toFixed(4)) : String(eval(value)))
                }
                catch(e)
                {
                        throw "Eroor"; 
                }
        }
        else if (oper === "reset")
                setValue("")
        else if (oper === "del")
        {
                let splitValues = value.split("")
                splitValues.pop()
                setValue(splitValues.join(""))
        }
        else
        {
                setValue(prevValue => prevValue + oper)
        }   
    }
    return (
            <div onClick={handleClick} className={className}>
                    <p>{content}</p>
            </div>)
}