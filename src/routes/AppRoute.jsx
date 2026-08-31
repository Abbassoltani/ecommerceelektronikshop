
import { useRoutes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";



function AppRoute() {

const routes=useRoutes([
    {path:'/', element:<MainLayouts/> , children:[
        {index:true , element:<Home/>},
        {path:'products' , element:<Products/>}
    ]}
])

return routes
  
}

export default AppRoute
