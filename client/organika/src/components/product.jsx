import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product() {

    function add(){
        console.log("Added to cart");
    }

    return (
        <div className="product">
            <img src="https://picsum.photos/200/300" />
            <h4>Product Title</h4>
            <label className="total">$total</label>
            <label className="price">$price</label>
            <button onClick={add} className="btn btn-sm btn-primary">Add</button>
            <QuantityPicker />
        </div>
    )
}

export default Product;