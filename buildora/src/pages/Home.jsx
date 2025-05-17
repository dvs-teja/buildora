import React from 'react';
import './Home.css'; // Ensure to link the CSS file correctly
import personImage from '../assets/sample-projects/person-seeing-computer.jpg'; // Correct the image path

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="content-container">
        <div className="quote">
          <h2>"Build with confidence, learn with reference!"</h2>
        </div>
        <div className="image-container">
          <img src={personImage} alt="Person learning on laptop" />
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Comprehensive Tutorials</h3>
            <p>Get access to step-by-step guides to help you learn at your own pace.</p>
          </div>
          <div className="feature-item">
            <h3>Project-Based Learning</h3>
            <p>Build real-world projects to strengthen your skills and gain hands-on experience.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Support</h3>
            <p>Our team of experts is always available to help you solve problems and guide you.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Buildora?</h2>
        <p>Buildora empowers learners by providing access to high-quality resources and expert guidance. Whether you're just starting or looking to deepen your skills, Buildora is your ultimate learning companion.</p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to start your journey?</h2>
        <p>Join thousands of learners building their future with Buildora. Start learning today!</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
