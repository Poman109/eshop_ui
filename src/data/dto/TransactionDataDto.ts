export interface TransactionDataDto {
    transactionId: number;
    userId:        number;
    tid:           number;
    buyer_uid:     number;
    datetime:      string;
    status:        string;
    total:         number;
    items:         Item[];
}

export interface Item {
    tpid:     number;
    product:  Product;
    quantity: number;
    subtotal: number;
}

export interface Product {
    pid:         number;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
    image_url:   string;
}
