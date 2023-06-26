import React, { useEffect, useState } from 'react';

import WebProject from '../components/WebProject';

import '../styles/web.scss';

export default function Web() {
    
    const [animationDelay, setAnimationDelay] = useState(500);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let timer;
        fetch('./projects.json')
            .then(res => res.json())
            .then((data) => {
                setProjects(data.projects);
                timer = setTimeout(() => {
                    setDisplayedProjects([]);
                }, 3500);
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
            }, animationDelay);
        } else if (projects !== [] && projects.length === displayedProjects.length) {
            // update webAnimationRan 
        }
        setAnimationDelay(prevDelay => prevDelay - 30);
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