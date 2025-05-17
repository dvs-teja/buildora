import React from 'react';
import './About.css'; // Make sure the CSS file is linked correctly

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>About Buildora</h1>
        <p>
          Buildora is a platform designed to help individuals learn and grow through project-based learning.
          We provide a collection of reference projects that are designed to help users strengthen their skills and gain practical experience. 
          Whether you're a beginner or an experienced developer, Buildora offers valuable resources to help you succeed. 
          Learn from these projects and build your own unique projects by applying the skills you acquire here.
        </p>
      </section>

      {/* Purpose of the Projects */}
      <section className="projects-section">
        <h2>Projects for Learning</h2>
        <p>
          The projects featured on Buildora are intended for educational purposes only. They are designed to serve as reference projects to help you practice and hone your skills in various aspects of software development, from frontend to backend development. 
          These projects are a great way to improve your problem-solving abilities, familiarize yourself with new technologies, and boost your portfolio for job applications.
        </p>
        <p>
          Each project is an example of a real-world application and can be used as a foundation for building your own unique projects. While we provide these reference projects to help guide your learning journey, it is important to apply your creativity and ideas to develop something original.
        </p>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="legal-section">
        <h2>Legal Disclaimer</h2>
        <p>
          The projects and materials provided on Buildora are meant solely for educational and non-commercial use. Users are encouraged to use these projects for learning and practicing their skills. The code, designs, and concepts in these projects are for reference purposes only and should not be used for any commercial purpose without proper permission.
        </p>
        <p>
          We do not claim ownership over any third-party assets, libraries, or frameworks used in these projects unless explicitly stated. If you decide to use any third-party assets, libraries, or tools, please ensure that you adhere to the relevant licensing terms and conditions.
        </p>
        <p>
          Any code, images, or materials used in the projects that are subject to copyright or licensing terms are intended solely for educational and reference purposes. We do not intend to infringe upon any intellectual property rights, and users are advised to avoid using these projects for any commercial endeavors without obtaining appropriate licenses and permissions.
        </p>
        <p>
          Buildora is not responsible for any unauthorized use of these materials. It is the user's responsibility to ensure that they comply with all applicable laws, regulations, and licensing terms when using or modifying the reference projects.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about the usage of the projects or need further clarification, feel free to <a href="/contact">contact us</a>. We're here to help!
        </p>
      </section>
    </div>
  );
};

export default About;
