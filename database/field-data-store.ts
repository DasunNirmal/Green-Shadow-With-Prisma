import {PrismaClient} from "@prisma/client";
import Field from "../model/Field";

const prisma = new PrismaClient();

export async function addFields(fields: Field) {

    try {
        const field = await prisma.field.create({
            data: {
                field_code: fields.field_code,
                extent_size: fields.extent_size,
                field_location: fields.field_location,
                field_name: fields.field_name,
                img_01: fields.img_01,
                img_02: fields.img_02
            }
        });
        console.log('Field Added', field);
    } catch (e) {
        console.log('Error Adding Fields',e);
    }
}