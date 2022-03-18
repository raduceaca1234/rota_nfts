import React from 'react';
import Particle from '../components/Particle';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import ColumnZero from '../components/ColumnZeroTwo';
import AuthorList from '../components/authorList';
import Accordion from '../pages/accordion';
import RoadMap from '../components/RoadMap'
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #0358B6;
    border-bottom: solid 1px #0358B6;
  }
  header#myHeader.navbar .search #quick_search{
    color: #0358B6;
    background: #0358B6;
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #0358B6;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #0358B6;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
const timelineInfo = [
  {
    timelineClass: "block block-left",
    title: 'Phase 1',
    date_from: '40%',
    date_to: 'Plan: Phase 1 consist of identifying a solution for raising funds to help the refugees and building a team to create the plan and implement '
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Phase 2',
    date_from: '30%',
    date_to: 'Community build: Promoting the projects and creating partnerships'
  },
  {
    timelineClass: "block block-left mt-30",
    title: 'Phase 3',
    date_from: '20%',
    date_to: 'Launch: Phase 3 consist of minting NFT, posting on NFT marketplace and answering question from potential buyers.'
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Phase 4',
    date_from: '10%',
    date_to: 'Donate/causes'
  }
]

const homeone = () => (
  <div>
    <GlobalStyles />

    <section className="jumbotron no-bg">
      <Particle />
      <SliderMainParticle />

    </section>

    <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Roadmap</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <RoadMap data={timelineInfo} />

    </section>

    <section className='container-fluid bg-gray'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>About us</h2>
            <div className="small-border-white"></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <FeatureBox />
      </div>
    </section>



    {/* <ColumnNew /> */}



    {/* <section className='container-fluid bg-gray'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Partners</h2>
            <div className="small-border-white"></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section> */}

    <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Team</h2>
            <div className="small-border"></div>
            <h2>Members of</h2>
          </div>
        </div>
        <div className='col-lg-12'>
          <ColumnZero />
        </div>
      </div>
    </section>

    <Accordion />

    <Footer />

  </div>
);
export default homeone;