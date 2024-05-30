//import
import { useState } from "react";
import "./quantityPicker.css";
//logic
function QuantityPicker(){
    const [quantity, setQuantity] = useState(1)

    function decrease(){
        let val = quantity - 1
        if (val > 0){
            setQuantity(val);
        }
    }

    function increase(){
        let val = quantity + 1
        setQuantity(val);
    }

    return(
        <div className="qty-picker">
            <button class="btn btn-sm btn-outline-secondary" onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button class="btn btn-sm btn-outline-secondary" onClick={increase}>+</button>

        </div>
    )
}
//export
export default QuantityPicker;