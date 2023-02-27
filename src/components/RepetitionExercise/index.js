import { useState } from "react";

export default function RepetitionExercise(props) {
    const {name} = props
    const [count, setCount] = useState(0);
    function goCount(){
        setCount((number) => number + 1)
    }
    function resetCount(){
        setCount(0)
    }
    return (
        <div className="content">
            <h1>Push-Up Repetition</h1>
            <div class ="rep">
            <div class ="img"></div>
            <p id="time">{count.toString().padStart(2, "0")}</p>
            <div className="options">
                <button onClick={goCount}>+</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={() => window.location.reload()}>
                    Main Menu
                </button>
            </div>
            </div>
        </div>
    )
}