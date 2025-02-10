import express from "express";
import multer from "multer";
import Crops from "../model/Crops";
import {addCrops, deleteCrops} from "../database/crops-data-store";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

router.post('/add', upload.fields([{ name: 'img', maxCount: 1 },]), async (req, res) => {
    const crops: Crops = req.body;

    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const img = files['img']?.[0]?.buffer.toString('base64');

    crops.img = img || '';

    try {
        await addCrops(crops);
        res.send('Crops added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding crops');
    }
});

router.delete('/delete/:crop_code', async (req, res) => {
    const crop_code = req.params.crop_code;
    try {
        await deleteCrops(crop_code);
        res.send('Crops deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting crops');
    }
});

export default router;