import React from 'react';
import Navigation from '../navigation/Navigation';
import Projects from './projects/Projects';
import Skills from './Skills/Skills';
import TopBanner from './topBanner/TopBanner';




const Home = () => {
    return (
        <div>
            <Navigation/>
            <TopBanner/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;