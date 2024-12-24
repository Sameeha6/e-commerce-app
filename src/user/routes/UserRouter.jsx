import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Checkout from "../pages/Checkout";



const UserRouter =[
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/Order',element:<Order/>}
]

export default UserRouter;