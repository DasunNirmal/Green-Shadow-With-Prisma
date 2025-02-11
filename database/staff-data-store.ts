import { PrismaClient } from "@prisma/client";
import Staff from "../model/Staff";

const prisma = new PrismaClient();

export async function addStaff(staff: Staff) {
    try {
        const staffs = await prisma.staff.create({
            data: {
                staff_id: staff.staff_id,
                address_01: staff.address_01,
                address_02: staff.address_02,
                address_03: staff.address_03,
                address_04: staff.address_04,
                address_05: staff.address_05,
                designation: staff.designation,
                dob: staff.dob,
                email: staff.email,
                first_name: staff.first_name,
                gender: staff.gender,
                joined_date: staff.joined_date,
                last_name: staff.last_name,
                phone_no: staff.phone_no,
                role: staff.role
            }
        });
        console.log('Staff Added', staffs);
    } catch (e) {
        console.log('Error Adding Staff',e);
    }
}

export async function deleteStaff(staff_id: string) {
    try {
        await prisma.staff.delete({
            where: {staff_id: staff_id}
        });
    } catch (e) {
        console.log('Error Deleting Staff',e);
    }
}

export async function getAllStaff() {
    try {
        return await prisma.staff.findMany();
    } catch (e) {
        console.log('Error Getting Staff',e);
    }
}