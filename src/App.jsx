import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import headshot1 from './assets/headshot1.png'; 
import headshot2 from './assets/headshot2.png';
import './index.css';

const App = () => {
  const cardData = [
    {
      name: 'Alexander Doe',
      role: 'Web Developer',
      image: headshot1,
    },
    {
      name: 'Sam Johnson',
      role: 'UI/UX Designer',
      image: headshot2,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const filteredCards = cardData.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole ? card.role === selectedRole : true;
    return matchesSearch && matchesRole;
  });

  const handleReset = () => {
    setSearchTerm('');
    setSelectedRole('');
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div id="home" className="section">
          <div className="container">
            <h1 className="profile-title">Profile App</h1>
          </div>
        </div>
        <div id="about" className="section">
          <div className="container">
            <About />
          </div>
        </div>
        <div id="profiles" className="section">
          <div className="container">
            {}
            <div className="filter-container">
              <input 
                type="text" 
                placeholder="Search by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              {}
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)} 
              >
                <option value="">Filter by role</option>
                <option value="Web Developer">Web Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                {}
              </select>
              {}
              <button onClick={handleReset}>Reset</button>
            </div>

            <Wrapper>
              {filteredCards.map((card, index) => (
                <Card 
                  key={index} 
                  name={card.name} 
                  role={card.role} 
                  image={card.image} 
                />
              ))}
            </Wrapper>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
