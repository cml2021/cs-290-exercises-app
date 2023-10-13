import express from "express";
import * as dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import * as exercise from "./model.mjs";
import * as utilities from "./utilities.mjs"

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});

// Create exercise endpoint
app.post("/exercises", asyncHandler(async (req, res) => {
    // validate request body
    const isValid = utilities.validateRequest(req.body);
    if (isValid === true) {
        let result = await exercise.createExercise(req.body);
        result = JSON.stringify(result);
        res.status(201);
        res.type('application/json');
        res.send(result);
    } else {
        res.status(400);
        res.type('application/json');
        res.send({ Error: "Invalid request" });
    }
}));


// Get all exercises endpoint
app.get("/exercises", asyncHandler(async (req, res) => {
    let result = await exercise.getExerciseList();
    result = JSON.stringify(result);
    res.status(200);
    res.type('application/json');
    res.send(result);
}));


// Get a single exercise endpoint
app.get("/exercises/:_id", asyncHandler(async (req, res) => {
    const id = req.params._id;
    let result = await exercise.getExercise(id);
    if (result !== null) {
        result = JSON.stringify(result);
        res.status(200);
        res.type('application/json');
        res.send(result);
    } else {
        res.status(404);
        res.type('application/json');
        res.send({ Error: "Not found" });
    };
}));


// Update an exercise endpoint
app.put("/exercises/:_id", asyncHandler(async (req, res) => {
    const id = req.params._id;
    const isValid = utilities.validateRequest(req.body);
    if (isValid === true) {
        let result = await exercise.updateExercise(id, req.body);
        if (result !== null) {
            result = JSON.stringify(result);
            res.status(200);
            res.type('application/json');
            res.send(result);
        } else {
            res.status(404);
            res.type('application/json');
            res.send({ Error: "Not found" })
        }
    } else {
        res.status(400);
        res.type('application/json');
        res.send({ Error: "Invalid request" })
    }
}));


// Delete an exercise endpoint
app.delete("/exercises/:_id", asyncHandler(async (req, res) => {
    const id = req.params._id;
    let result = await exercise.deleteExercise(id);
    if (result !== null) {
        res.status(204);
        res.send();
    } else {
        res.status(404);
        res.type('application/json');
        res.send({ Error: "Not found" });
    };
}))