import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const MONGODB = process.env.MONGODB_CONNECT_STRING;

// connect to database
mongoose.connect(MONGODB);

const db = mongoose.connection;

mongoose.connection.on("connected", () => {
    console.log("Database connected...")
});

// define Exercise schema
const exerciseSchema = new Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
});

// create Exercise model
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Creates an Exercise document in the database.
 * @param {object} request   request body with properties: name, reps, weight, unit, and date
 * @returns     newly created document
 */
async function createExercise (request) {
    const newExercise = new Exercise({name: request.name, reps: request.reps, weight: request.weight, unit: request.unit, date: request.date});
    return newExercise.save();
};


/**
 * Returns all Exercise documents in the database.
 * @returns     array of documents
 */
async function getExerciseList () {
    const exerciseList = Exercise.find({}).exec();
    return exerciseList;
};


/**
 * Returns the Exercise document matching the id.
 * @param {string} id       document id
 * @returns     document matching id or null if no such document exists.
 */
async function getExercise (id) {
    const exercise = Exercise.findById(id).exec();
    return exercise;
}

/**
 * Updates the exercise document matching the id.
 * @param {string} id       document id
 * @param {object} request  request body with properties: name, reps, weight, unit, and date
 * @returns updated document or null if no such document exists.
 */
async function updateExercise (id, request) {
    const exercise = Exercise.findByIdAndUpdate(id, {name: request.name, reps: request.reps, weight: request.weight, unit: request.unit, date: request.date}, {new: true}).exec();
    return exercise;
}


/**
 * Deletes the exercise document matching the id.
 * @param {string} id       document id 
 * @returns deleted exercise document
 */
async function deleteExercise (id) {
    const exercise = Exercise.findByIdAndDelete(id).exec();
    return exercise;
}

export {createExercise, getExerciseList, getExercise, updateExercise, deleteExercise}