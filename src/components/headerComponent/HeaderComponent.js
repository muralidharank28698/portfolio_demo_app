import React from 'react';
import './HeaderComponent.css';

import TopComponent from '../topComponent/TopComponent';
import AboutComponent from '../aboutComponent/AboutComponent';
import Services from '../Servicecomponent/Services';
import HeaderComponentHeaderPart from './HeaderComponentHeaderPart';
import Footer from '../Footer/Footer';

function HeaderComponent() {
  return (
    <div>
      <HeaderComponentHeaderPart />
      <TopComponent />
      <AboutComponent />
      <Services />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<TopComponent />} />
        <Route path="/" element={<AboutComponent />} />
        <Route path="/" element={<Services />} />
      </Routes> */}
    </div>
  );
}

export default HeaderComponent;
