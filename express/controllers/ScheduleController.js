import mongoose from "mongoose";
import Schedule from "../models/Schedule.js";

const scheduleList = async(req, res) => {
    try {
        const schedules = await Schedule.find({ date: { $regex: req.params.date } });
        res.json(schedules);
    } catch (error) {
        res.status(400);
        res.json({ error: error })
    }
}

const addSchedule = async(req, res) => {
    try {
        const schedule = new Schedule(req.body)
        await schedule.save();

        const schedules = await Schedule.find({ date: req.body.date })
        res.json(schedules);
    } catch (error) {
        res.status(400);
        res.json({ error: error })
    }
}

const updateSchedule = async(req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        let schedule = await Schedule.findOne({ _id: id })
        schedule.task = req.body.task
        await schedule.save();
        res.json(schedule);
    } catch (error) {
        res.status(404);
        res.json({ error: error })
    }
}

const deleteSchedule = async(req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        await Schedule.deleteOne({ _id: id })
        res.json({ "success": "deleted successfully" });
    } catch (error) {
        res.status(404);
        res.json({ error: error })
    }
}

export { scheduleList, addSchedule, updateSchedule, deleteSchedule }