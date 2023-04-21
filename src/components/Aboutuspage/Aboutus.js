import React from 'react';
import HeaderComponentHeaderPart from '../headerComponent/HeaderComponentHeaderPart';
import { Typography } from '@mui/material';
import Footer from '../Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <div style={{ color: 'white' }}>
        <HeaderComponentHeaderPart />
        <Typography style={{ marginTop: '30px', fontSize: '60px', textAlign: 'center' }}>
          About us
        </Typography>
        <Typography
          style={{
            color: 'white',
            margin: '60px auto',
            width: '80%',
            textAlign: 'center',
            lineHeight: '35px',
          }}
        >
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop publishing packages and web page editors now
          use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
          many web sites still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look
          like readable English. Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
