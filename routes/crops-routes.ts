import express from "express";
import multer from "multer";
import Crops from "../model/Crops";
import {addCrops} from "../database/crops-data-store";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(), // Store files in memory as Buffer
    limits: {
        fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
    },
});

router.post('/add', upload.fields([{ name: 'img', maxCount: 1 },]), async (req, res) => {
    const crops: Crops = req.body;

    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const img = files['img']?.[0]?.buffer.toString('base64'); // Convert to base64

    crops.img = img || '';

    try {
        await addCrops(crops);
        res.send('Crops added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding crops');
    }
});

export default router;