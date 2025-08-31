
import React from 'react';
import Header from '../components/Header/Header';
import DreamJob from '../components/Landing/DreamJob';
import Company from '../components/Landing/Company';

const HomePage = () => {
  return (
    <div className="min-h-[100vh] font-['Saira'] bg-mine-shaft-900">
     <Header />
     <DreamJob />
     <Company />
    </div>
  );
};

export default HomePage;    
