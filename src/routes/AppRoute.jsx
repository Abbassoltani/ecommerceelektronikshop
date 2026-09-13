
import { useRoutes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../components/Cart";



function AppRoute() {

const routes=useRoutes([
    {path:'/', element:<MainLayouts/> , children:[
        {index:true , element:<Home/>},
        {path:'products' , element:<Products/>},
        {path:'cart' , element:<Cart/>}
    ]}
])

return routes
  
}

export default AppRoute
