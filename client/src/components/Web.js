import React, { useEffect, useState } from 'react';

import WebProject from '../components/WebProject';

import '../styles/web.scss';

export default function Web() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then((data) => {
                setProjects(data.projects);
            });
    }, []);

    return (
        <section className='web'>
            <section className='web-intro'>
                <p>
                    below you'll find a selection of my recent work on the web . . .
                </p>
                <p>
                    spend some time poking around :) 
                </p>
            </section>
            <section className='web-projects'>
                {projects.map(project => <WebProject project={project} />)}
            </section>
        </section>
    )
}