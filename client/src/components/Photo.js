import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';

import '../styles/photo.scss';

import Photo1 from '../assets/photos/photography/1.jpg';
import Photo2 from '../assets/photos/photography/2.jpg';
import Photo3 from '../assets/photos/photography/3.jpg';
import Photo4 from '../assets/photos/photography/4.jpg';
import Photo5 from '../assets/photos/photography/5.jpg';
import Photo6 from '../assets/photos/photography/6.jpg';
import Photo7 from '../assets/photos/photography/7.jpg';
import Photo8 from '../assets/photos/photography/8.jpg';
import Photo9 from '../assets/photos/photography/9.jpg';
import Photo10 from '../assets/photos/photography/10.jpg';
import Photo11 from '../assets/photos/photography/11.jpg';
import Photo12 from '../assets/photos/photography/12.jpg';
import Photo13 from '../assets/photos/photography/13.jpg';
import FinalPhoto from '../assets/photos/photography/final.jpg';

export default function Photo() {

    const [photos, setPhotos] = useState([
        Photo1,
        Photo2,
        Photo3,
        Photo4,
        Photo5,
        Photo6,
        Photo7,
        Photo8,
        Photo9,
        // Photo10,
        Photo11,
        Photo12,
        Photo13
    ]);

    return (
        <section className='photo'>
            <div className='photos-container'>
                { _.shuffle(photos).map((photo) => {
                    return <img alt='' src={photo}></img>
                })}
                <img alt='' src={FinalPhoto}></img>
            </div>
            <p>
                see more on <a href='https://www.instagram.com/seanstephenbrian/' target='_blank' rel='noopener noreferrer'>instagram</a>
            </p>
        </section>
    )
}