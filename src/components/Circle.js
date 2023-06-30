import React from 'react';
import uniqid from 'uniqid';

import '../styles/circle.scss';

import EmailIcon from '../assets/icons/email.svg';
import InstaIcon from '../assets/icons/insta.svg';
import GitHubIcon from '../assets/icons/github.svg';

export default function Circle() {
    return (
        <div className='circle'>
            <a href='https://www.instagram.com/seanstephenbrian/' target='_blank' rel='noopener noreferrer'>
                <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
            </a>
            <a href='https://github.com/seanstephenbrian' target='_blank' rel='noopener noreferrer'>
                <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
            </a>
            <a href='mailto:seanstephenbrian@gmail.com'>
                <img className='icon email email-1' src={EmailIcon} alt='Email'></img>
            </a>
            <a href='mailto:seanstephenbrian@gmail.com'>
                <img className='icon email email-2' src={EmailIcon} alt='Email'></img>
            </a>
        </div>
    )
}