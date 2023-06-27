import React, { useState } from 'react';
import _ from 'lodash';

import '../styles/about.scss';

import Ufo from '../assets/drawings/ufo.png';

export default function About() {

    return (
        <section className='about'>
            <p>thanks for stopping by!</p>
            <p>you can reach me by email at <br/>seanstephenbrian@gmail.com</p>
            <img alt='' className='ufo' src={Ufo}></img>
        </section>
    )
}