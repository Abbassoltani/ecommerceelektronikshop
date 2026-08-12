
import { useRoutes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";



function AppRoute() {

const routes=useRoutes([
    {path:'/', element:<MainLayouts/> , children:[
        {index:true , element:<Home/>}
    ]}
])

return routes
  
}

export default AppRoute
