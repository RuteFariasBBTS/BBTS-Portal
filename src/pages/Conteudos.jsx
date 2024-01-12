import React from 'react'
import SectionCont01 from '../components/sectionsConteudos/sectionCont01';
import SectionCont02 from '../components/sectionsConteudos/sectionCont02';
import SectionCont03 from '../components/sectionsConteudos/sectionCont03';
import SectionCont04 from '../components/sectionsConteudos/sectionCont04';

const Conteudos = () => {
  return (
    <div className='bg-[#002d4b]'>
      <SectionCont01/>
      <SectionCont02/>
      <SectionCont03/>
      <SectionCont04/>
    </div>
  );
}

export default Conteudos