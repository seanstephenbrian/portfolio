import React from 'react';

import '../styles/bgpicker.scss';

export default function BgPicker(props) {

    const { colorOptions } = props;

    return (
        <div className='bg-picker'>
            {Object.values(colorOptions).map((color) => {
                return (
                    <div 
                        style={{
                            height: '50px',
                            width: '50px',
                            backgroundColor: color
                        }}
                    >
                    </div>
                )
            })}
        </div>
    )
}