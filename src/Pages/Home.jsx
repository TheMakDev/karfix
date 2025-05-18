import React from 'react';
import Hero from '../Component/Hero';
import Profession from '../Component/Profession';
import Services from '../Component/Services';
import ChooseUs from '../Component/chooseUs';
import Story from '../Component/Story';
import Counter from '../Component/Counter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Profession/>
      <ChooseUs/>
      <Services/>
      <Story/>
      <Counter/>
    </div>
  );
};

export default Home;
