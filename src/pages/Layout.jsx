import '../Style/layout1.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      
      <nav>
            
        <ul>
           
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/product">PRODUCTS</Link>
        </li>    
        <li>
          <Link to="/contact">CONTACT US</Link>        
        </li>
        <li>
          <Link to="/blogs">BLOGS</Link>
        </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;