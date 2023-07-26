import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import axios from "axios";
import {TransactionDataDto} from "../data/dto/TransactionDataDto.ts";

const baseURL ="http://localhost:8080";

async function getConfig(){
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        throw new Error();
    }

    return  {headers: {Authorization: `Bearer ${accessToken}`}}
}

export async function prepareTransaction(){
    try {
        const config = await getConfig();
        const response =  await axios.post<TransactionDataDto>(
            `${baseURL}/transaction/prepare`,null, config);
        return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function getTransactionByTid(tid :string){
    try {
        const config = await getConfig();
        const response =  await axios.get<TransactionDataDto>(
            `${baseURL}/transaction/${tid}`, config);
        return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function payTransaction(tid :string){
    try {
        const config = await getConfig();
        await axios.patch(`${baseURL}/transaction/${tid}/pay`,null, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function finishTransaction(tid :string){
    try {
        const config = await getConfig();
        const response =  await axios.patch<TransactionDataDto>(
            `${baseURL}/transaction/${tid}/finish`, null,config);
        return response.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}