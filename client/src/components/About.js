import React, { useState } from 'react';
import _ from 'lodash';

import '../styles/about.scss';

import Ufo from '../assets/drawings/ufo.png';

export default function About() {

    return (
        <section className='about'>
            <p>thanks for stopping by! <img alt='' className='ufo' src={Ufo}></img></p>
            <p>you can reach me by email at <br/>seanstephenbrian@gmail.com</p>
        </section>
    )
}