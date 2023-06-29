import React from 'react';
import uniqid from 'uniqid';

import '../styles/bgpicker.scss';

export default function BgPicker(props) {

    const { colorOptions, selectedColor, updateColor } = props;

    return (
        <div className='bg-picker'>
            {Object.values(colorOptions).map((color) => {
                return (
                    <div
                        className={color === selectedColor ? 'selected' : ''} 
                        key={uniqid()}
                        onClick={() => updateColor(color)}
                        style={{ backgroundColor: color }}>
                    </div>
                )
            })}
            <div className='bg-backdrop'></div>
        </div>
    )
}