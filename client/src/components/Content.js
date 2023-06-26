import React, { useEffect, useState } from 'react';

import About from './About';
import Food from './Food';
import Photo from './Photo';
import Web from './Web';

import '../styles/content.scss';

export default function Content(props) {

    const { selectedSection } = props;

    const [webAnimationRan, setWebAnimationRan] = useState(false);

    let sectionContent;
    if (selectedSection === 'web') {
        sectionContent = 
            <Web 
                alertAnimationRan={() => setWebAnimationRan(true)} 
                animationRan={webAnimationRan} 
            />;
    }
    if (selectedSection === 'food') sectionContent = <Food />;
    if (selectedSection === 'photo') sectionContent = <Photo />;
    if (selectedSection === 'about') sectionContent = <About />;
    
    return (
        <section className='content'>
            {sectionContent}
        </section>
    )
}