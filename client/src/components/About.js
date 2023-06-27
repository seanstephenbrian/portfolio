import React from 'react';

import '../styles/about.scss';

export default function About() {

    return (
        <section className='about-section'>
            <p className='thanks'>thanks for stopping by!</p>
            <p>
                if you like what you see, need help on a project, or just want to connect,
                you can reach me by email at <span style={{ fontWeight: '375' }}>seanstephenbrian@gmail.com</span>.
            </p>
        </section>
    )
}