import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div>
        <section class="contact-area" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="contact-content text-center">
                  <div class="contact-social">
                    <ul>
                      <li>
                        {/* <a class="hover-target">
                          <FacebookIcon />
                        </a> */}
                      </li>
                      <li>
                        {/* <a class="hover-target">
                          <LinkedInIcon />
                        </a> */}
                      </li>
                      <li>
                        {/* <a class="hover-target">
                          <YouTubeIcon />
                        </a> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <footer>
          <p>Copyright &copy; 2022 All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
