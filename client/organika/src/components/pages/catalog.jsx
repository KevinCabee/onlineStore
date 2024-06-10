import "./catalog.css";
import Product from "../product";

function Catalog() {

    let categories = ["fruit", "drinks", "frozen", "dry storage", "refrigarated"];

    let products = [
        {
            title: "Banana",
            category: "fruit",
            price: 49.99,
            image: "bananas.jpeg",
            _id: "f000123",
        },
        {
            title: "Coca-Cola",
            category: "drinks",
            price: 14.69,
            image: "coca-cola.jpeg",
            _id: "d000456",
        },
        {
            title: "Ice-Cream",
            category: "frozen",
            price: 17.98,
            image: "ice-cream.jpeg",
            _id: "f001235",
        },
        {
            title: "Rice",
            category: "dry storage",
            price: 6.95,
            image: "rice.jpeg",
            _id: "d001935",
        },
        {
            title: "Hot-Dogs",
            category: "refrigarated",
            price: 4.99,
            image: "hot-dogs.jpeg",
            _id: "r003496",
        }
    ];

    return (
        <div className="catalog ">
            <h1>Check out Catalog!</h1>
            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-dark">{cat}</button>)}
            </div>

            <div className="list">
                {products.map(prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>

    );
}

export default Catalog;