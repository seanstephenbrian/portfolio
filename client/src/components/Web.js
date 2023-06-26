import React, { useEffect, useState } from 'react';

import WebProject from '../components/WebProject';

import '../styles/web.scss';

export default function Web() {
    
    const [projects, setProjects] = useState([]);
    const [displayedProjects, setDisplayedProjects] = useState([]);

    useEffect(() => {
        let timer;
        fetch('./projects.json')
            .then(res => res.json())
            .then((data) => {
                setProjects(data.projects);
                timer = setTimeout(() => {
                    setDisplayedProjects([]);
                }, 4000);
            });
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timer;
        if (projects.length > 0 && displayedProjects.length < projects.length) {
            timer = setTimeout(() => {
                const newDisplayedProjects = [
                    ...displayedProjects,
                    projects[displayedProjects.length]
                ];
                setDisplayedProjects(newDisplayedProjects);
            }, 200);
        } else if (projects !== [] && projects.length === displayedProjects.length) {
            // update webAnimationRan 
        }
        return () => clearTimeout(timer);
    }, [displayedProjects]);

    return (
        <section className='web'>
            <section className='web-intro'>
                <p>
                    below you'll find a selection of my recent work on the web . . .
                </p>
                <p>
                    spend a little time poking around :) 
                </p>
            </section>
            <section className='web-projects'>
                {displayedProjects.map(project => <WebProject project={project} />)}
            </section>
        </section>
    )
}