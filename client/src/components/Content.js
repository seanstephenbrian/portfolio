import React from 'react';

import '../styles/content.scss';

export default function Content(props) {

    const { section } = props;

    return (
        <section className='content'>
            {section}
        </section>
    )
}