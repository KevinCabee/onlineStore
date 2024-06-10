import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function add(){
        console.log("Added to cart");
    }

    function handleQuantity(qty) {
        console.log("Quantity changed", qty);
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <img src={"/imgs/" + props.data.image} />
            <h4>{props.data.title}</h4>

            <label className="total">{getTotal()}</label>
            <label className="price">{props.data.price.toFixed(2)}</label>

            <QuantityPicker onChange={handleQuantity} />

            <button onClick={add} className="btn btn-sm btn-primary">Add</button>
        </div>
    )
}

export default Product;
