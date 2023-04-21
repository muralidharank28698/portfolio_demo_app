import React from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import './HeaderComponent.css';

const HeaderComponentHeaderPart = () => {
  return (
    <div className="headerPart">
      <div className="headerPartTitle">
        <h1>
          <span>Title</span>part
        </h1>
      </div>
      <div className="headerPartTitleLink">
        {/* <ul className="headerPartTitleLinkUl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul> */}
        <div className="headerPartTitleLinkUl">
          <Link
            className="lin"
            underline="none"
            color="#eee"
            marginBottom="20px"
            href="/"
            style={{ margin: '10px' }}
          >
            <Typography className="txt">Home</Typography>
          </Link>
          <Link
            className="lin"
            underline="none"
            color="#eee"
            marginBottom="20px"
            href="education"
            style={{ margin: '10px' }}
          >
            <Typography className="txt">Education</Typography>
          </Link>
          <Link
            className="lin"
            underline="none"
            color="#eee"
            marginBottom="20px"
            href="profession"
            style={{ margin: '10px' }}
          >
            <Typography className="txt">profession</Typography>
          </Link>
          <Link
            className="lin"
            underline="none"
            color="#eee"
            marginBottom="20px"
            href="about"
            style={{ margin: '10px' }}
          >
            <Typography className="txt">About</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponentHeaderPart;
