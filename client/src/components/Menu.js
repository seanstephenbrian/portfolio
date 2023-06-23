import React, { useState } from 'react';

import '../styles/menu.scss';

export default function Menu() {

    const [selected, setSelected] = useState('web');

    return (
        <nav>
            <ul className='menu-options'>
                <li className={selected === 'web' ? 'selected' : ''}>
                    <span role="img" aria-label="web">🖥️</span>
                </li>
                <li className={selected === 'food' ? 'selected' : ''}>
                    <span role="img" aria-label="food">🍝</span>
                </li>
                <li className={selected === 'photo' ? 'selected' : ''}>
                    <span role="img" aria-label="photo">📸</span>
                </li>
                <li className={selected === 'music' ? 'selected' : ''}>
                    <span role="img" aria-label="music">🎵</span>
                </li>
            </ul>
        </nav>
    )
}