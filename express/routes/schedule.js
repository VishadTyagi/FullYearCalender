import express from 'express';
import { scheduleList, addSchedule, updateSchedule, deleteSchedule } from '../controllers/ScheduleController.js'
const router = express.Router();

router.get('/:date', scheduleList);
router.post('/', addSchedule);
router.patch('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router