import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import {CartItemDataDto} from "../data/dto/CartItemDto.ts";


const baseURL ="http://localhost:8080";
export const putCartItem = async (pid:number,quantity:number)=>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }

        const config = {headers: {Authorization: `Bearer ${accessToken}`}}

            await axios.put(
                `${baseURL}/cart/${pid}/${quantity}`,
                null,
                config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

export const getAllCartItems = async ()=>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }

        const config = {headers: {Authorization: `Bearer ${accessToken}`}}

        const response =  await axios.get<CartItemDataDto[]>(
            `${baseURL}/cart`, config);
            return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}



export const patchCartItemQuantity = async (pid:number , quantity:number)=>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }

        const config = {headers: {Authorization: `Bearer ${accessToken}`}}

        const response =  await axios.patch<CartItemDataDto>(
            `${baseURL}/cart/${pid}/${quantity}`, null,config);

        return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}

export const deleteCartItem = async (pid:number)=>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }

        const config = {headers: {Authorization: `Bearer ${accessToken}`}}

        await axios.delete(
            `${baseURL}/cart/${pid}`, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

