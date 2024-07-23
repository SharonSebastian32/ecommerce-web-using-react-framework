  import "../Style/Products/productPage.css"
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <p className='title'>{product.title}</p>
      <img src={product.thumbnail} alt={product.title} />
      <br></br>
      <p>Price : {product.price}</p>
      <p>Brand : {product.brand}</p>
       <p>Rating : {product.rating}</p>
      <button className="buy-btn">ADD TO CART NOW</button>
    </div>
  );
};

export default ProductCard;
