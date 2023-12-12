import React from 'react';
import Footer from '../components/Footer';

const Aboutus = () => {
  const pageStyles = {
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyles = {
    maxWidth: 'screen-xl',
    margin: 'auto',
    padding: '8px',
  };

  const titleStyles = {
    fontSize: '3xl',
    fontWeight: 'extrabold',
    color: '#333',
    marginBottom: '8px',
  };

  const missionStyles = {
    fontSize: 'xl',
    fontWeight: 'semibold',
    color: '#ff4d4d',
    marginBottom: '4px',
  };

  const textStyles = {
    color: '#666',
  };

  const imageStyles = {
    width: 'full',
    height: 'auto',
    maxWidth: 'md',
    margin: 'auto',
    borderRadius: 'md',
  };

  const featuresTitleStyles = {
    fontSize: '2xl',
    fontWeight: 'semibold',
    color: '#ff4d4d',
    marginBottom: '4px',
  };

  const summaryStyles = {
    marginTop: '8px',
    color: '#666',
  };

  return (
    <><div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>About Fresh Food</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8' }}>
          <div>
            <h2 style={missionStyles}>Our Mission</h2>
            <p style={textStyles}>
              Welcome to our online food delivery platform. We are dedicated to
              providing delicious meals delivered right to your doorstep. Our
              mission is to make ordering food as convenient as possible, with
              a wide variety of cuisines to choose from and fast delivery.
              Whether you're craving pizza, sushi, or something sweet, we've got
              you covered. Browse our menu, place your order, and enjoy a tasty
              meal without leaving your home.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://blog.sagipl.com/wp-content/uploads/2019/03/Online-Food-Ordering-App-Development-Features-1.jpg"
              alt="About Fresh Food"
              style={imageStyles} />
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <h2 style={featuresTitleStyles}>Fresh Food Features</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
            {/* Your list items with icons */}
          </ul>
        </div>

        <p style={summaryStyles}>
          In summary, Fresh Food is a feature-rich project that leverages
          modern technologies to create a seamless platform for customers, food
          partners, and the admin team. It enables efficient management of
          food-related operations while providing valuable insights for
          business growth and optimization.
        </p>
      </div>


    </div><Footer /></>
  );

};

export default Aboutus;
