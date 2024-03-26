import { useState, useEffect } from "react"

export default function Transition(){
    const [animated, setAnimated] = useState(false)
    useEffect(()=>{
        setTimeout(function(){
            setAnimated(true)
        }, 1500)
    }, [])
    return(
        <div className={`_transition ${animated && 'hidden'}`}>
            <h6 className="animate__animated animate__fadeInDown">Think. Create. <span className="lined">Iterate.</span></h6>
        </div>
    )
}