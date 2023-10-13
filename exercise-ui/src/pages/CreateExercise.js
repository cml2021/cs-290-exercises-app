import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateExercise() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(50);
    const [unit, setUnit] = useState("lbs");
    const [date, setDate] = useState('MM-DD-YY');

    // Saves new exercise
    const onSubmit = async () => {
        const data = { name, reps, weight, unit, date };
        const response = await fetch("/exercises", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert(`${name} created successfully.`);
            navigate("/");
        } else {
            alert(`Sorry, ${name} could not be saved.`);
            navigate("/");
        }
    }

    return (
        <div>
            <h1 className="page-title">Add Exercise</h1>
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
                    }} className="save-button">
                        Save
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CreateExercise;