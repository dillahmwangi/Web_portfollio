import { useState, useEffect } from 'react'; 
import Aos from 'aos';


import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Portfolio from './components/UI/Portfolio';
import Services from './components/UI/Services';
import Contact from './components/UI/Contact';
import Modal from './components/UI/Modal';

function App() {

    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);
 
  useEffect(() => {
    Aos.init();
  }, []);
  

  return <>
  <Header/>
    <main>
      <Hero/>
      <Services/>
      <Portfolio setActiveID={setActiveID} setShowModal={setShowModal} />
      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
      <Contact/>

    </main>
  <Footer/>
</>

}

export default App;
