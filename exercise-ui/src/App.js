import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EditExercise from './pages/EditExercise';
import CreateExercise from './pages/CreateExercise';

function App() {

  // initialize variable to share state for exercise to edit
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div>
      <Router>
      <Navigation />
        <header>
          <h1>Exercise Tracker</h1>
          <p>Log, edit, and view your past workouts—all in one place.</p>
        </header>
        <Routes>
          <Route exact path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
          <Route exact path="/edit" element={<EditExercise exerciseToEdit={exerciseToEdit}/>}></Route>
          <Route exact path="/create" element={<CreateExercise />}></Route>
        </Routes>
        <footer>
          <p>© Clayton Loftus 2022</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
