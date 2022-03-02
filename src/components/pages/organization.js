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
                <h1>Organization</h1>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="container">
      <div className="column">

        <div className='row-md-6 mt-3'>
          <h3>Rotaract</h3>
          <div id="tabs2">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Who we are?">
                  <div>
                  <p>Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.Consequat occaecat ullamco amet non eiusmod nostrud 
                  dolore irure incididunt est duis anim sunt officia. 
                  Fugiat velit proident aliquip nisi incididunt nostrud exercitation 
                  proident est nisi. Irure magna elit commodo anim ex veniam culpa 
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat 
                  eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. 
                  Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="What we do?">
                  <div>
                  <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa 
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo est 
                  sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate 
                  exercitation cillum id incididunt elit sunt. Qui minim sit magna 
                  Lorem id et dolore velit Lorem amet exercitation duis deserunt. 
                  Anim id labore elit adipisicing ut in id occaecat pariatur ut 
                  ullamco ea tempor duis.</p>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="More">
                  <div>
                  <p>Est quis nulla laborum officia ad nisi ex nostrud 
                  culpa Lorem excepteur aliquip dolor aliqua irure ex. 
                  Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit 
                  laborum veniam eu veniam. Eiusmod minim exercitation fugiat 
                  irure ex labore incididunt do fugiat commodo aliquip sit id 
                  deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur 
                  aute veniam incididunt mollit 
                  cupidatat esse irure officia elit do ipsum ullamco Lorem.</p>
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