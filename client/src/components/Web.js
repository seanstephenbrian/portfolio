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
            {projects.map(project => <WebProject project={project} />)}
        </section>
    )
}