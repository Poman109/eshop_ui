import {ProductDetailDto} from "./ProductListDto.ts";

export interface TransactionDataDto {
    transactionId: number;
    userId:        number;
    tid:           number;
    buyer_uid:     number;
    datetime:      string;
    status:        string;
    total:         number;
    items:         TransactionProductDto[];
}

export interface TransactionProductDto {
    tpid:     number;
    product:  ProductDetailDto;
    quantity: number;
    subtotal: number;
}

