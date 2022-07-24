const mockFunction = () => {
  console.log('mockFunction');
};

export const mockProductsContext = {
  productsContext: [
    {
      id: 0,
      sku: 8552515751438644,
      title: 'Camisa da nike',
      price: 'R$250,9',
      image: 'https://via.placeholder.com/120'
    }
  ],
  skusProductsWishlistContext: [8552515751438644, 6090484789343891],
  setAllProductsInContext: mockFunction,
  handleProductWishlist: mockFunction
};
