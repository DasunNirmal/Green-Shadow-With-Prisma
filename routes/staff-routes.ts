import express from "express";
import {addStaff} from "../database/staff-data-store";

const router = express.Router();

router.post('/add', async (req, res) => {
    const staff = req.body;
    try {
        await addStaff(staff);
        res.send('Staff added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding staff');
    }
});

export default router;