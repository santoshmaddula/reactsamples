import React from "react";
import productsData from "./vSchoolProducts";
import Product from "./Product";

function Products() {
  const products = productsData.map(item => {
    return (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  });
  return <div>{products}</div>;
}

export default Products;
