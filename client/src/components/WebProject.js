import React, { useState } from 'react';
import uniqid from 'uniqid';

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
            className='web-project' 
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
                <a href={project.liveUrl} className='live-link' target='_blank' rel='noopener noreferrer'>
                    live demo
                </a>
                <a href={project.gitUrl} className='git-link' target='_blank' rel='noopener noreferrer'>
                    code
                </a>
            </div>
            ) : ''}

        
        </div>
    )
}