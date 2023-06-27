import React, { useState } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';

import '../styles/header.scss';

export default function Header(props) {

    const [names] = useState(['sean', 'stephen', 'brian']);
    const [shuffled, setShuffled] = useState(false);

    const seanStephenBrian = (
        <>
            <span className='sean'>sean</span>
            <span className='stephen'>stephen</span>
            <span className='brian'>brian</span>
        </>
    );

    function returnShuffledNames(namesToShuffle) {
        return _.shuffle(namesToShuffle);
    }

    return (
        <header className='header'>
            <section 
                className='name'
                onMouseOver={() => setShuffled(true)}
                onMouseLeave={() => setShuffled(false)}
            >
                {shuffled ? 
                returnShuffledNames(names).map((name, index) => {
                    return <span className={`name-${index}`} key={uniqid()}>{name}</span>;
                }) : 
                seanStephenBrian}
                <span>delanty</span>
            </section>
        </header>
    )
}