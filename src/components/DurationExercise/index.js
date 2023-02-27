import { useCallback, useEffect, useState } from "react";
let currentTimer = 0
export default function StopWatch() {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => {
        if(running) {
            setTimer((timer) => timer+10)
        }
    }, [running])
    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
        // console.log(timer)
    }, [running])
    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    let reset = useCallback(() => {
        setTimer(0)
    })
    let mins = (Math.floor((timer / (1000*60)) %60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) %60)).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0")
    return <div style={{textAlign:"center"}}>
        <h1>Running Duration</h1>
        <div class ="dura">
        <div class ="dimg"></div>
        <p>{mins}:{secs}.{mills}</p>
        <button style={{"fontsize": "4em"}} onClick={startStop}>
        {running ? "Pause" : "Start"}
        </button>
        <button style={{"fontSize": "1em"}} onClick={()=> {
        setTimer(0)
        }} >Reset</button>
        <button onClick={() => window.location.reload()}>
        Main Menu
        </button>
        </div>
    </div>
    }

    //this code was given permission to be used in the following program