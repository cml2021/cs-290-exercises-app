import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditExercise({ exerciseToEdit }) {

    const navigate = useNavigate();

    // Define state variables, initializing to existing values
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    // Saves edited exercise
    const onSubmit = async () => {
        const data = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 200) {
            alert(`${name} edited successfully.`);
            navigate("/");
        } else {
            alert(`Sorry, your edits to ${name} could not be saved.`);
            navigate("/");
        }
    }

    return (
        <div>
            <h1 className="page-title">Edit Exercise</h1>
            <form>
                <fieldset>
                    <label>
                        Name
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label>
                        Reps
                        <input type="number" min="1" value={reps} onChange={e => setReps(parseInt(e.target.value))} />
                    </label>
                    <label>
                        Weight
                        <input type="number" min="1" value={weight} onChange={e => setWeight(parseInt(e.target.value))} />
                    </label>
                    <label>
                        Unit
                        <select value={unit} onChange={e => setUnit(e.target.value)}>
                            <option>lbs</option>
                            <option>kgs</option>
                        </select>
                    </label>
                    <label>
                        Date
                        <input type="text" value={date} onChange={e => setDate(e.target.value)}></input>
                    </label>
                </fieldset>
                <div className="centered">
                    <button type="Submit" onClick={e => {
                        e.preventDefault();
                        onSubmit();
                    }} className="save-button">Save
                    </button>
                </div>
            </form>
        </div>

    )
}

export default EditExercise;