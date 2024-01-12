import React, { useState } from 'react';

const MenuService = ({ tabs, activeTabProp, banner, icon, setActiveTabTitle }) => {
  const [activeTab, setActiveTab] = useState(activeTabProp);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveTabTitle(tabs[index].title); // Atualiza o título da guia ativa no componente pai
  };
  return (
    <div className="w-full">
      {tabs[activeTab] && (
        <div className={`${banner ? 'flex' : 'hidden'} w-full flex items-center h-full min-h-[100vh] relative bg-red-800`}>
          <div className="w-full max-w-7xl h-full m-auto flex justify-center p-2">
            <div className="w-full max-w-7xl ml-5 max-md:ml-0 ">
              <h1 className="text-center p-3 mb-10 text-4xl font-bold ">
                {tabs[activeTab].divisaoBanner}
              </h1>
              <h1
                className={`${
                  tabs[activeTab].divisaoBanner ? "text-left" : "text-center"
                } text-3xl font-semibold mb-5`}
              >
                {tabs[activeTab].titleBanner}
              </h1>
              <p
                className={`${
                  tabs[activeTab].divisaoBanner ? " text-left" : "text-center m-auto"
                } text-2xl max-w-5xl`}
              >
                {tabs[activeTab].textBanner}
              </p>
              <div className="flex justify-evenly pt-14 gap-2">
                <button className="h-12 p-2 rounded-md w-72 bg-gray-400">
                  QUERO TESTAR
                </button>
                <button className="h-12 p-2 rounded-md w-72 bg-gray-400">
                  QUERO CONTRATAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full h-36 overflow-auto gap-2 px-14 pt-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-sm w-64 flex flex-col items-center justify-around py-2 h-full rounded-t-md ${
              activeTab === index ? 'bg-[#F2F2F2] bg-opacity-50 text-white' : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            <img src={tab.icon} alt="" className={`${activeTab === index ? "" : "invert"}  w-16 h-16 object-contain`}/>
            <span className={`${activeTab === index ? 'text-[#002D4B]' : 'text-white'}`}>{tab.title}</span>
          </button>
        ))}
      </div>
      
      <div className="">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default MenuService;
