import {PrismaClient} from "@prisma/client";
import Crops from "../model/Crops";

const prisma = new PrismaClient();

export async function addCrops(crops: Crops) {
    try {
        const crop = await prisma.crops.create({
            data: {
                crop_code: crops.crop_code,
                category: crops.category,
                common_name: crops.common_name,
                img: crops.img,
                scientific_name: crops.scientific_name,
                season: crops.season,
                field_code: crops.field_code
            }
        });
        console.log('Crop Added', crop);
    } catch (e) {
        console.log('Error Adding Crops',e);
    }
}