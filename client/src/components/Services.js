import React from 'react';

const Services = ({ data }) => {
  return (
    <section>
      <h2>Services</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {data.map((item, i) => (
          <div key={i}>
            <h3>{item.icon} {item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
