import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {

    function add(){
        console.log("Added to cart");
    }

    function handleQuantity() {
        console.log("Quantity changed");
    }

    return (
        <div className="product">
            <img src={"/imgs/" + props.data.image} />
            <h4>{props.data.title}</h4>

            <label className="total">{props.data.price}</label>
            <label className="price">{props.data.price}</label>

            <QuantityPicker onChange={handleQuantity} />

            <button onClick={add} className="btn btn-sm btn-primary">Add</button>
        </div>
    )
}

export default Product;