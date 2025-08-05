import React, { useEffect, useState } from 'react';
import { getHomePageData } from './api';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHomePageData()
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Hero data={data.hero} />
      <Features data={data.features} />
      <Services data={data.services} />
    </div>
  );
}

export default App;
