import mongoose from 'mongoose';
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    date: String,
    task: String,
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule