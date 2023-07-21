import {createHashRouter, RouterProvider} from "react-router-dom";
import ProductListingPage from "./ui/page/ProductListingPage";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import ErrorPage from "./ui/page/ErrorPage";
import ShoppingCart from "./ui/page/ShoppingCartPage";
import LoginPage from "./ui/page/LoginPage";
import {createContext, useEffect, useState} from "react";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import {UserData} from "./data/UserData.ts";
import CheckoutPage from "./ui/page/CheckoutPage";

export const loginUserContext = createContext<UserData | null | undefined>(undefined);

const router = createHashRouter([
    {
        path: "/",
        element: <ProductListingPage />
    },
    {
        path: "/product/:productId",
        element: <ProductDetailPage/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path:"/error",
        element:<ErrorPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }, {
        path: "/checkout/:transactionId",
        element: <CheckoutPage/>
    }

])

function App(){
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(()=>{
            FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
        },[])


    return(
        <loginUserContext.Provider value={loginUser}>
            <RouterProvider router={router}/>
        </loginUserContext.Provider>
    )
}

export default App;