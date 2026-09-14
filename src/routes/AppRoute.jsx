
import { useRoutes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../components/Cart";
import ProductDetails from "../pages/ProductDetails";



function AppRoute() {

const routes=useRoutes([
    {path:'/', element:<MainLayouts/> , children:[
        {index:true , element:<Home/>},
        {path:'products' , element:<Products/>},
        {path:'cart' , element:<Cart/>},
        {path:'products/:id' , element:<ProductDetails/>}
    ]}
])

return routes
  
}

export default AppRoute
