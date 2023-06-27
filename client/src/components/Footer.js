import React from 'react';

import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            copyright © ssbd {new Date().getFullYear()}
        </footer>
    )
}