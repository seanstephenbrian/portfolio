import React from 'react';

import '../styles/circle.scss';

import EmailIcon from '../assets/icons/email.svg';
import InstaIcon from '../assets/icons/insta.svg';
import GitHubIcon from '../assets/icons/github.svg';

export default function Circle() {
    return (
        <div className='circle'>
            { ['q1', 'q2', 'q3', 'q4'].map((quadrant) => {
                return (
                    <div className={quadrant}>
                        <a href='https://www.instagram.com/seanstephenbrian/' target='_blank' rel='noopener noreferrer'>
                            <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
                        </a>
                        <a href='https://github.com/seanstephenbrian' target='_blank' rel='noopener noreferrer'>
                            <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
                        </a>
                        <a href='mailto:seanstephenbrian@gmail.com'>
                            <img className='icon email' src={EmailIcon} alt='Email'></img>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}