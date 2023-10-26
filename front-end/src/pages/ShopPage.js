import React from 'react';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Traditional Dress',
      price: 50,
      image: 'url-to-image-1',
    },
    {
      id: 2,
      name: 'Ethiopian Shawl',
      price: 30,
      image: 'url-to-image-2',
    },
    // Add more products as needed
  ];

  return (
    <div className="shop-page">
      <h2>Shop Page</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;