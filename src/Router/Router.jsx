import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Authentication/Signin";
import Signup from "../Pages/Authentication/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CheckOutCard from "../Pages/CheckOut/CheckOutCard";
import PrivateRoute from "../Provider/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        }
        ,
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/checkOut/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/checkOutCard',
          element:<PrivateRoute><CheckOutCard></CheckOutCard></PrivateRoute>
        }
      ]
    },
  ]);
export default router;