import React, { useState } from 'react';

function Product({ inforProduct, handleSetCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="col-lg-3 col-md-6 set-height mt-3">
      <div className="card align-card">
        <img src={inforProduct.image} alt="" className="img" />
        <div className="card-body">
          <div className="card-flex">
            <h4 className="card-title card-ellipsis">{inforProduct.title}</h4>
            <strong className="price">
              $ <span>{inforProduct.price}</span>
            </strong>
          </div>
          <p className="card-text ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, est!
          </p>
          <div className="btn-flex">
            <div className="quantity">
              <button
                className="minus"
                onClick={(e) => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className="plus" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button
              className="btn"
              onClick={() => {
                handleSetCart(inforProduct, quantity);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
