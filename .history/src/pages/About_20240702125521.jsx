import '../Style/about.css'; // Import the CSS file
import Aos from 'aos'; 
 
 
const About = () => {
  return (
    <div className="about-container" data-aos="fade-up" data-aos-anchor-placement="top-center" >
      <div className="about-description" style={{paddingTop:"50px"}}>
        <h1 className='abth1'>ABOUT US</h1>
        <p className='paraAbt'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,  
        </p>
      </div>
      <div className="about-image">
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/thrive-market-hero0331.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
