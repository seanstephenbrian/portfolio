import React from 'react';

import '../styles/circle.scss';

import EmailIcon from '../assets/icons/email.svg';
import InstaIcon from '../assets/icons/insta.svg';
import GitHubIcon from '../assets/icons/github.svg';

export default function Circle() {
    return (
        <div className='circle'>
            <div className='q1'>
                <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
                <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
                <img className='icon email' src={EmailIcon} alt='Email'></img>
            </div>
            <div className='q2'>
                <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
                <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
                <img className='icon email' src={EmailIcon} alt='Email'></img>
            </div>
            <div className='q3'>
                <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
                <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
                <img className='icon email' src={EmailIcon} alt='Email'></img>
            </div>
            <div className='q4'>
                <img className='icon insta' src={InstaIcon} alt='Instagram'></img>
                <img className='icon github' src={GitHubIcon} alt='GitHub'></img>
                <img className='icon email' src={EmailIcon} alt='Email'></img>
            </div>
        </div>
    )
}