
import { useRoutes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../components/Cart";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";



function AppRoute() {

const routes=useRoutes([
    {path:'/', element:<MainLayouts/> , children:[
        {index:true , element:<Home/>},
        {path:'products' , element:<Products/>},
        {path:'cart' , element:<Cart/>},
        {path:'products/:id' , element:<ProductDetails/>},
        {path:'wishlist' , element:<Wishlist/>},
        {path:'/login' , element:<Login/>},
        {path:'/register' , element:<Register/>},
       

    ]}
])

return routes
  
}

export default AppRoute
