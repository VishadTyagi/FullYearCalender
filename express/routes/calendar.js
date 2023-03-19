import express from 'express';
const router = express.Router();

router.get('/month-day-list', (req, res) => res.json({
    "months": [
        "Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    "days": [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
    ]
}));

export default router