import React from 'react';
import Product from './Product';

function ListProduct({ dataProducts, handleSetCart }) {
  return (
    <div className="container text-align mt-5 mb-5">
      <h2>List Product</h2>
      <div className="row">
        {dataProducts.map((e, i) => (
          <Product key={i} inforProduct={e} handleSetCart={handleSetCart} />
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
