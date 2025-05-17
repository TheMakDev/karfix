import React from 'react';
import Hero from '../Component/Hero';
import Profession from '../Component/Profession';
import Services from '../Component/Services';
import ChooseUs from '../Component/chooseUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <Profession/>
      <ChooseUs/>
      <Services/>
    </div>
  );
};

export default Home;
