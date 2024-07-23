 
  
import   { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import '../Style/Products/productPage.css';
import ProductCard from './productCard';

const LIMIT = 30;
// Number of products to load per request

function ProFunction() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products`, {
        params: {
          limit: LIMIT,
          skip: page * LIMIT
        }
      });
      setProducts(prevProducts => [...prevProducts, ...response.data.products]);
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div>
      <h1 className="head1" style={{ textAlign: 'center', color: 'green' }}>OUR PRODUCTS</h1>
      <div className="product-section">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return <ProductCard ref={lastProductElementRef} key={product.id} product={product} />;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
      {loading && <p style={{ textAlign: 'center', color: '#407255' }}>Please wait loading the product......</p>}
    </div>
  );
}

export default ProFunction;



