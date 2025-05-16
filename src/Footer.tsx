import React from "react";

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer__block container'>
        <div className='footer_info'>
          <h3 className='header__h3 header__footer'>
            Intersted to work with our team?
          </h3>
          <p className='test__footer'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <a href='#' className='footer__button'>
          Let’s Talk
        </a>
      </div>

      <hr className='line' />

      <div className='footer__contact container'>
        <ul className='contact_info_footer'>
          <li className='text__footer'>
            <p className='last__info'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </li>
          <li className='text__footer'>
            <p className='last__info'>999-999-99</p>
          </li>
          <li className='text__footer'>
            <p className='last__info'>hello.site@gmail.com</p>
          </li>
        </ul>
        <div className='all-right'>
          <p className='text footer__copyright'>2022 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
