import { useState } from 'react';
import "./admin.css";

function Admin() {
    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

    const [product, setProduct] = useState({});

    function saveCoupon(e) {
        console.log("Save Coupon", coupon);
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);

    }

    function handleCoupon(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    // function saveProduct() {
    //     setAllProducts([...allProducts, product]);
    // }


    return (


        <div className="admin">
            <h1> Store Administration</h1>
            <div className="admin-product-coupon">
                
                <div className="produ form">
                    <h2>Register a Products</h2>
                </div>

                <div className="coupons form">
                    <h2>Register a Coupons</h2>

                    <div>
                        <label htmlFor="">Code:</label>
                        <input onChange={handleCoupon} name="code" type="text" className='form-control' />
                    </div>

                    <div>
                        <label htmlFor="">Discount:</label>
                        <input onChange={handleCoupon} name="discount" type="number" />
                    </div>

                    <button onClick={saveCoupon} className="btn btn-outline-primary">Save Coupon</button>
                </div>
            </div>
        </div>


    );

}

export default Admin;