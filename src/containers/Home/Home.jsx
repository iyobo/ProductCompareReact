import React, {useState, useEffect} from "react";
import {CompareTable, ProductList} from "../../components";
import results from "../../data/products.json";

function Home(props) {
    const originalProducts = results.products;
    const [nameSearch, setNameSearch] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState(results.products);

    const handleChange = (event) => {
        setNameSearch(event.target.value);
    };




    const compare = (id) => {
        setDisplayedProducts(displayedProducts.map((product) =>
            product.id === id
                ? {...product, compare: !product.compare}
                : product
        ));
    };

    const compareProducts = displayedProducts.filter(
        (product) => product.compare
    );


    return (
        <div className="home mt-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3">Compare Products</h2>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={nameSearch}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <ProductList
                products={displayedProducts}
                nameSearch={nameSearch}
                compare={compare}
            />
            {compareProducts.length >= 1 && (
                <CompareTable products={compareProducts}/>
            )}
        </div>
    );

}

export default Home;
