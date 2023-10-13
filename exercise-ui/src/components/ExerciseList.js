import React from "react";
import ExerciseRow from "./ExerciseRow";

function ExerciseList({exercises, deleteExercise, editExercise}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} key={i} deleteExercise={deleteExercise} editExercise={editExercise}/>)}
            </tbody>
        </table>
    )
};

export default ExerciseList;