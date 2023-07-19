import axios from "axios";
import {ProductListDto} from "../data/dto/ProductListDto.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const baseUrl = "http://localhost:8080"

export const getAllProducts = async ()=> {
    try {

        const response = await axios.get<ProductListDto[]>(`${baseUrl}/public/product`);
        return response.data;
    } catch (error){
        console.error(error)
        throw error;
    }
}