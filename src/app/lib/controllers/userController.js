import axios from "axios";
import {API_URL} from "@/app/lib/http";
import UserService from "@/app/lib/services/UserService";

export async function getTrainers(query, sort) {
    try {
        const res = await UserService.getTrainers(query, sort).then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);

    }
}
export async function getTrainer(id) {
    try {
        const res = await UserService.getTrainer(id).then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function updateUser(email, image) {
    try {
        await UserService.updateUser(email, image);
    } catch (e) {
        console.log(e?.response?.data);
    }
}
