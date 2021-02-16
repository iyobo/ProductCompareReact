import React, {useEffect, useState} from "react";
import { Product } from "..";
import results from '../../data/products.json';

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    return products;
  };

  const [displayedProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    if(!nameSearch) {
      setDisplayedProducts(products)
    }else {
      //filter when namesearch changes
      const newItems = displayedProducts.filter((it) => it.name.toLowerCase().indexOf(nameSearch.toLowerCase()>-1) || it.description.toLowerCase().includes(nameSearch.toLowerCase()));
      setDisplayedProducts(newItems);
    }
  }, [nameSearch]);

  return (
    <div className="row mt-3">
      {displayedProducts.map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
