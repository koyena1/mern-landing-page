import React from 'react';

const Hero = ({ data }) => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <img src={data.image} alt="hero" width="300" />
    </section>
  );
};

export default Hero;
