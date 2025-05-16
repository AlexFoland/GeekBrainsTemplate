import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className='top__block'>
        <div className='top__inner container'>
          <div className='top__menu'>
            <ul className='menu'>
              <li>
                <a href='/'>
                  <img src='/logo.svg' alt='logo' />
                </a>
              </li>
              <li>
                <a href='/contacts'>
                  <img src='/Vector.svg' alt='contact' />
                </a>
              </li>
            </ul>
          </div>
          <div className='top__content'>
            <h1 className='top_content_header'>New Automation Tool for Your</h1>
            <p className='text top__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              tristique vulputate ultrices ut mauris tellus at. Posuere
              sollicitudin odio tellus elit.
            </p>
            <a href='#' className='top__button'>
              See Our Project
            </a>
          </div>
        </div>
      </div>

      <div className='info container'>
        <h3 className='section__title'>
          What we do to help our client grow in digital era
        </h3>
        <div className='info__block'>
          <div className='info__card'>
            <img src='/image1.svg' alt='card 1' />
            <h4 className='header__h4 header__card'>
              Make Your business To Be Better Famous In Internet
            </h4>
            <p className='text text__card'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#' className='card__link'>
              Learn more
            </a>
          </div>

          <div className='info__card'>
            <img src='/image2.svg' alt='card 2' />
            <h4 className='header__h4 header__card'>
              Bring Technology To Your Comfrotable Home
            </h4>
            <p className='text text__card'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#' className='card__link'>
              Learn more
            </a>
          </div>

          <div className='info__card'>
            <img src='/image3.svg' alt='card 3' />
            <h4 className='header__h4 header__card'>
              Build Your Digital Product That Suitable For Your Need
            </h4>
            <p className='text text__card'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#' className='card__link'>
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className='project container'>
        <h3 className='section__title prodject_header'>
          Our Finished Project.
        </h3>
        <p className='text project__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className='project__item'>
          <img src='/Mask_Group_1.png' alt='Smart Home' />
          <p className='text__project1'>Smart Home Installation</p>
        </div>
        <div className='project__parent'>
          <div className='project__item project__item_marj'>
            <img src='/Mask_Group_2.png' alt='Sparklite App' />
            <p className='text__project2'>Sparklite App</p>
          </div>
          <div className='project__item'>
            <img src='/Mask_Group_3.png' alt='Car-Rapetition App' />
            <p className='text__project2'>Car-Rapetition App</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
