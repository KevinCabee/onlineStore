//import
import { useState } from "react";
import "./quantityPicker.css";
//logic
function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1)

    function decrease(){
        let val = quantity - 1
        if (val > 0){
            setQuantity(val);
            props.onChange(val);
        }
    }

   

    function increase(){
        let val = quantity + 1
        setQuantity(val);
        props.onChange(val);
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