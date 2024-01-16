import React from 'react';
import Section01 from '../components/sectionsHome/Section01';
import Section02 from '../components/sectionsHome/Section02';
import Section03 from '../components/sectionsHome/Section03';
import Section04 from '../components/sectionsHome/Section04';
import Section05 from '../components/sectionsHome/Section05';
import Section06 from '../components/sectionsHome/Section06';

const Home = () => {
  return (
    <div className='bg-[#002D4B]'>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
      <Section06/>
    </div>
  );
}

export default Home