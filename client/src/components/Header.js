import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';

import '../styles/header.scss';

export default function Header() {

    const [names, setNames] = useState(['sean', 'stephen', 'brian']);
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
        <header 
            className='header'
            onMouseOver={() => setShuffled(true)}
            onMouseLeave={() => setShuffled(false)}
        >
            <section className='name'>
                {shuffled ? 
                returnShuffledNames(names).map((name, index) => {
                    return <span className={`name-${index}`} key={uniqid()}>{name}</span>;
                }) : 
                seanStephenBrian}
            </section>
        </header>
    )
}