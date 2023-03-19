import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import calendarRoutes from './routes/calendar.js';
import scheduleRoutes from './routes/schedule.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/calendar/", calendarRoutes);
app.use("/api/v1/schedule/", scheduleRoutes);

mongoose.connect(process.env.MONGO_URI).then((res) => {
        console.log(
            `Database Connected to ${res.connection.db.databaseName} on ${res.connection.host}`
        );
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    })
    .catch((err) => {
        console.log(err);
    });