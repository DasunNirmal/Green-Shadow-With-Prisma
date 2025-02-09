import express from "express";
import Field from "../model/Field";
import {addFields} from "../database/field-data-store";
import multer from "multer";

const router = express.Router();

router.post('/add', async (req, res) => {
    const fields: Field = req.body;
    try {
        await addFields(fields);
        res.send('Fields added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding fields');
    }
});

export default router;