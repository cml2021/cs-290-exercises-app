import React from "react";
import {MdDelete, MdModeEditOutline} from "react-icons/md";

function ExerciseRow({exercise, deleteExercise, editExercise}) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdModeEditOutline className="icon" onClick={() => editExercise(exercise)}/></td>
            <td><MdDelete className="icon" onClick={() => deleteExercise(exercise._id)}/></td>
        </tr>
    )
};

export default ExerciseRow;