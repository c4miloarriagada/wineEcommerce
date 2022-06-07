import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../redux/actions/actions";
import styles  from '../UserProfile/UserOrders.module.css'
import CardPedidos from './CardPedidos';

// styles
import Style from "./UserOrderRejected.module.css"


export const UserOrdersRejected= () => {
  const dispatch = useDispatch()
  const userHistory = useSelector((state)=> state.orders) 
  
  useEffect(()=>{
    dispatch(getOrders())
  },[dispatch])




  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>MIS PEDIDOS</h1>
        </div>

        <nav className="navBar">
          <ul className={styles.ulBreadcrumbs}>
          <li>
             
             <Link to ='/userprofile'>HOME</Link>
           </li>
         
           <li>
             
             <Link to ='/userorders/approved'>PEDIDOS REALIZADOS</Link>
           </li>
           <li>
             
             <Link to ='/userorders/pending'>PEDIDOS PENDIENTES</Link>
           </li>
           <li>
            
             <Link to ='/userorders/rejected'>PEDIDOS CANCELADOS</Link>
           </li>
          </ul>
        </nav>
        <div className={Style.backg}>
        {userHistory.filter(e=> e.status === 'rejected').map(e=>
             e.cart.map((e, i)=>
             {return (<div className={Style.spacing}>
              <CardPedidos
                key={i + 1}
                title={e.title}
                picture_url={e.picture_url} className={styles.img}
                quantity={e.quantity}
                unit_price={e.unit_price}
              />
              </div>)})
         )
        }     
        </div>
      </div>
    </div>
  );
}