import React from 'react';

const Features = ({ data }) => {
  return (
    <section>
      <h2>Features</h2>
      {data.map((feature, index) => (
        <div key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
