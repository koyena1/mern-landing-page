const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const landingPageContent = {

  hero: {
    title: "Accelerate Your Startup Journey",
    subtitle: "We empower businesses with fast and modern tech solutions",
    image: "https://placehold.co/300x200"
  },

  features: [
    {
      title: "Full-Stack Power",
      desc: "React, Express, and MongoDB — built for speed and scale."
    },
    {
      title: "Rapid Launch",
      desc: "Deliver MVPs quickly with agile sprints."
    }
  ],

  services: [
    {
      icon: "🌐",
      title: "Custom Web Apps",
      desc: "Full-stack development tailored to your needs"
    },
    {
      icon: "📲",
      title: "Cross-Platform Mobile",
      desc: "iOS & Android apps using React Native"
    },
    {
      icon: "🔧",
      title: "DevOps & Hosting",
      desc: "CI/CD pipelines and cloud deployment support"
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      desc: "Bug fixing and performance optimization"
    }
  ]
};

app.get('/', (req, res) => {
  res.send('API is working! Try /api/homepage');
});

app.get('/api/homepage', (req, res) => {
  res.json(landingPageContent);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
