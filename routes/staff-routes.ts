import express from "express";
import {addStaff, deleteStaff} from "../database/staff-data-store";

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

router.delete('/delete/:staff_id', async (req, res) => {
    const staff_id = req.params.staff_id;
    try {
        await deleteStaff(staff_id);
        res.send('Staff deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting staff');
    }
});

export default router;