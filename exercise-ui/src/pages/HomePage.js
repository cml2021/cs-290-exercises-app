import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    // Requests all exercises
    const loadExercises = async () => {
        const response = await fetch("/exercises");
        if (response.status === 200) {
            const exercises = await response.json();
            setExercises(exercises);
        } else {
            console.error("Exercises could not be loaded");
        }  
    };

    // Deletes an exercise and refreshes list
    const deleteExercise = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, {method: "DELETE"});
        if (response.status === 204) {
            const newExercises = exercises.filter(exercise => exercise._id !== _id);
            setExercises(newExercises);
        } else {
            console.error("This exercise could not be deleted.")
        };
    };

    // Navigates to Edit page for an exercise
    const editExercise = async (exerciseToEdit) => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/edit");
    }

    // Loads exercises on page render
    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <div>
            <Link to="/create" className="add-link">
                <p>+ Add an exercise</p>
            </Link>
            <ExerciseList exercises={exercises} deleteExercise={deleteExercise} editExercise={editExercise}/>
        </div> 
    )
}

export default HomePage;