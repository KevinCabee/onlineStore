import "./catalog.css";
import Product from "../product";

function Catalog() {
    return (
        <div className="catalog ">
            <h1>Check out Catalog!</h1>
            <div className="list">
                <Product />
                <Product />
                <Product  />
            </div>
        </div>
        
    );
}

export default Catalog;