import React, { useEffect, useState } from 'react';

import '../styles/menu.scss';

export default function Menu(props) {

    const { relaySection } = props;

    const [selected, setSelected] = useState('web');

    useEffect(() => {
        relaySection(selected);
    }, [relaySection, selected]);

    return (
        <nav>
            <ul className='menu-options'>
                <li
                    className={selected === 'web' ? 'selected web' : 'web'}
                    onClick={() => setSelected('web')}
                >
                    <span role="img" aria-label="web">🖥️</span>
                </li>
                <li 
                    className={selected === 'food' ? 'selected food' : 'food'}
                    onClick={() => setSelected('food')}
                >
                    <span role="img" aria-label="food">🍝</span>
                </li>
                <li 
                    className={selected === 'photo' ? 'selected photo' : 'photo'}
                    onClick={() => setSelected('photo')}
                >
                    <span role="img" aria-label="photo">📸</span>
                </li>
                <li 
                    className={selected === 'about' ? 'selected about' : 'about'}
                    onClick={() => setSelected('about')}
                >
                    <span role="img" aria-label="photo">🙋🏻</span>
                </li>


                
                {/* <li 
                    className={selected === 'music' ? 'selected' : ''}
                    onClick={() => setSelected('music')}
                >
                    <span role="img" aria-label="music">🎵</span>
                </li> */}
            </ul>
        </nav>
    )
}