import axios from "axios";
import {API_URL} from "@/app/lib/http";
import UserService from "@/app/lib/services/UserService";

export async function getUsers(query, sort) {
    try {
        const res = await UserService.getUsers(query, sort).then(res => res.data);
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

export async function updateUser(query, updatedUser) {
    try {
        await UserService.updateUser(query, updatedUser);
    } catch (e) {
        console.log(e?.response?.data);
    }
}
