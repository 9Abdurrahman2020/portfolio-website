import React from 'react';
import Navigation from '../navigation/Navigation';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Skills from './Skills/Skills';
import TopBanner from './topBanner/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <div>
            <Navigation/>
            <TopBanner/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;