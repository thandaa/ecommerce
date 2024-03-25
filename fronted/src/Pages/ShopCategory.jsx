import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import all_product from '../Components/Assets/all_product'

const ShopCategory = (props) => {

    const {all_product}= useContext(ShopContext);
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
        </div>
    )
}

export default ShopCategory