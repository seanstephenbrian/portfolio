import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

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
            {projects.map((project) => {
                return (
                    <div className='web-project' key={uniqid()}>
                        {project.title}
                    </div>
                )
            })}
        </section>
    )
}