import React, { useState } from 'react';
import uniqid from 'uniqid';

import '../styles/webproject.scss';

export default function WebProject(props) {

    const { project } = props;

    const [showDetails, setShowDetails] = useState(false);

    function renderProjectStack(stack) {
        let output = '[';
        stack.forEach((item, index) => {
            if (index !== stack.length - 1) {
                output += (item + ', ');
            } else if (index === stack.length - 1) {
                output += (item + ']');
            }
        });
        return output;
    }

    return (
        <div 
            className={showDetails ? 'web-project expanded' : 'web-project'} 
            key={uniqid()} 
        >

            <div 
                className='project-title' 
                onClick={() => {
                    setShowDetails(currentSetting => !currentSetting);
                }}
            >
                {project.title}
            </div>

            <div className='project-stack'>
                {showDetails ? renderProjectStack(project.stack) : ''}
            </div>
            

            {showDetails ? (
            <div className='project-links'>
                <div className='live-link-container'>
                    <a href={project.liveUrl} className='project-link live-link' target='_blank' rel='noopener noreferrer'>
                        live demo
                    </a>
                </div>
                <div className='git-link-container'>
                    <a href={project.gitUrl} className='project-link git-link' target='_blank' rel='noopener noreferrer'>
                        code
                    </a>
                </div>
            </div>
            ) : ''}

        
        </div>
    )
}