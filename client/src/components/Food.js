import React from 'react';

import '../styles/food.scss';

import Pasta1 from '../photos/pasta/pasta_1.jpg';
import Pasta2 from '../photos/pasta/pasta_2.jpg';
import Pasta3 from '../photos/pasta/pasta_3.jpg';
import Pasta4 from '../photos/pasta/pasta_4.jpg';

export default function Food() {
    return (
        <section className='food'>
            <p className='opening-mobile'>lately i've been working on making fresh pasta by hand :)</p>
            <div className='pasta-photos'>
                <div className='top'>
                    <img className='egg-well' src={Pasta2} alt='eggs and flour to make fresh pasta'></img>
                    <div className='top-right'>
                        <p className='opening-desktop'>lately i've been working on making fresh pasta by hand :)</p>
                        <img className='boats' src={Pasta1} alt='pasta dishes'></img>
                    </div>  
                </div>
                <div className='bottom'>
                    <img className='trofie' src={Pasta3} alt='handmade pasta'></img>
                    <img className='sfoglia' src={Pasta4} alt='rolling out a pasta sheet by hand'></img>
                </div> 
            </div>
            <p className='closing'>
                i cook other things, too! if you're interested, 
                you can learn more <a href='https://graces.website/' target='_blank' rel='noopener noreferrer'>here</a>.
            </p>
        </section>
    )
}