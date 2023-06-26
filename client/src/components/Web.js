import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import WebProject from '../components/WebProject';

import '../styles/web.scss';

export default function Web(props) {

    const { alertAnimationRan, animationRan } = props;
    
    const [animationDelay, setAnimationDelay] = useState(500);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let timer;
        fetch('./projects.json')
            .then(res => res.json())
            .then((data) => {
                if (!animationRan) {
                    setProjects(data.projects);
                    timer = setTimeout(() => {
                        setDisplayedProjects([]);
                    }, 3000);
                } else if (animationRan) {
                    setDisplayedProjects(data.projects);
                }
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
        } else if (projects.length > 0 && displayedProjects.length === projects.length) {
            alertAnimationRan();
        }
        setAnimationDelay(prevDelay => prevDelay - 30);
        return () => clearTimeout(timer);
    }, [displayedProjects]);

    return (
        <section className='web'>
            <section className={animationRan ? 'web-intro' : 'fade-in web-intro'}>
                <p>
                    below you'll find a selection of my recent work on the web . . .
                </p>
                <p>
                    spend a little time poking around :) 
                </p>
            </section>
            <section className='web-projects'>
                {displayedProjects.map(project => <WebProject key={uniqid()} project={project} />)}
            </section>
        </section>
    )
}