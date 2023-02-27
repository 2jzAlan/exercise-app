import React, { useState } from 'react';
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import FinalExercise from "./components/FinalExercise"
import "./App.css"


function App() {
  const [selectedWorkout, setSelectedWorkout] =  useState(null);
  const workouts = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "Final" },
  ]

function handleWorkoutClick(workout) {
  setSelectedWorkout(workout)
}

function renderWorkout (workout) {
  if (selectedWorkout) {
    if (selectedWorkout.type === "duration") {
      return <DurationExercise name={selectedWorkout.name} />
    } else if (selectedWorkout.type === "repetition") {
        return <RepetitionExercise name={selectedWorkout.name} />
    } else {
        return <FinalExercise name={selectedWorkout.name} />
    }
  }
  else {
    return (
      <>
      <div class = "main">
      <h1>Exercises</h1>
      <div class = "body">
      <p>Select one of the following</p>
      <div class="grid-container">
        <div class="item1">
          <ul>
            {workouts.map((workout) => (
              <li key={workout.name}>
                <button onClick={() => handleWorkoutClick(workout)}>{workout.name}</button>
              </li>
            ))}
           </ul>
            </div>
            <div class="item2"> </div>
            <div class="item3"></div> 
            <div class="item4"></div> 
          </div>
      </div>
      </div>
      </>
    )
  }
}

return (
  <div className="main">
    <div className="content">
        {renderWorkout()}
    </div>
  </div>
);
}

export default App;