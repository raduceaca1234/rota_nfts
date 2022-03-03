import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #0358B6;
    border-bottom: solid 1px #0358B6;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
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

const tabs= () => (
<div>
  <GlobalStyles/>
    <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/bg-shape-1-dark.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <h1>Cause</h1>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="container">
      <div className="column">
        <div className='row-md-6 mt-3'>
          <h3>Our cause</h3>
          <div id="tabs2">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="What are we trying to do?">
                  <div>
                  <p>We want to make the world a better place, by making positive changes and taking concrete actions together. We like to work in teams and bring forward interesting and up-to-date projects to promote peace, fellowship and connection. And because it’s a huge conflict - excuse us: a whole war - above us, in Ukraine, we want to help out our neighbors in as many ways as possible. So we decided to make an NFT fundraising and to give the opportunity to all NFT enthusiasts to participate, donate and do good together. We are transparent, sincere, creative and well-intentioned. We’re also firm believers that there’s a lot of kindness in people’s hearts and we’re convinced that we can create something together from this digital world. We are already involved in humanitarian actions, physically we’re putting a lot of work in our projects, but we are thinking the digital community should be also an important part of our joint efforts. </p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="So what’s the whole concept?">
                  <div>
                  <p>We are bringing forward to the digital stage the first Romanian series of NFTs, built on the Elrond blockchain with an entirely charitable purpose, made in order to support the Ukrainian refugees. NoWar NFT is a unique collection of 10.000 NFTs which aims to raise funds for those in need. Everything that we will raise together out of this project will be directed to various causes that support the Ukrainians and their refugees. The situation in Ukraine and here in Romania - especially at the borders - is changing every hour and it’s clear that we live difficult times. But in difficult times, strong and good people must raise, to empower, inspire and prove humanity and solidarity. The art of NoWar NFT is based on real life characters we have seen these days - either face to face, either on TV, either offering a much needed help, either slowly crossing the border with tears in the eyes and hope in the heart. NoWar NFT promotes real-life heroes. The ones who are willing to go an extra mile to do good, to develop, to persevere. </p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Wow, that’s nice! And big! But who’s the team?">
                  <div>
                  <p>Probably we do need to be a bit idealistic in order to have an impact. So the first thing you should know about us is that we like to get involved. To stay informed. To take action. We are people from different cities of Romania, with different backgrounds and different skills, but with similar principles and beliefs. We are all part of Rotaract Clubs of District 2241 Romania & Republic of Moldova and we all have volunteering in our blood. Rotaract as an organization is part of Rotary International which is a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.</p>
                  <p>Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. We are always working to better our world, and we stay committed to the end.</p>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>
           

        </div>
    </section>


  <Footer />
</div>

);
export default tabs;