import axios from "axios";
import {ProductDetailDto, ProductListDto} from "../data/dto/ProductListDto.ts";
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;

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

export const getProductsDetail = async (pid:number)=> {
    try {

        const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`);
        return response.data;
    } catch (error){
        console.error(error)
        throw error;
    }
}