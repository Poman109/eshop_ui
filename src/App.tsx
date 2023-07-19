import {createHashRouter, RouterProvider} from "react-router-dom";
import ProductListingPage from "./ui/page/ProductListingPage";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import ErrorPage from "./ui/page/ErrorPage";
import ShoppingCart from "./ui/page/ShoppingCart";
import LoginPage from "./ui/page/LoginPage";

const router = createHashRouter([
    {
        path: "/",
        element: <ProductListingPage />
    },
    {
        path: "/product/:productId/:userId",
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
    },

])


function App(){
    return(

        <RouterProvider router={router}/>

    )
}

export default App;