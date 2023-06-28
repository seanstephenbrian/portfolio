import React, { useState } from 'react';
import uniqid from 'uniqid';

import '../styles/fontpicker.scss';

export default function FontPicker(props) {

    const { fontOptions, selectedFont, updateFont } = props;

    const [letters] = useState(['A', 'B', 'C', 'D']);

    return (
        <div className='font-picker'>
            {Object.values(fontOptions).map((font, index) => {
                return (
                    <div
                        className={font === selectedFont ? 'selected' : ''} 
                        key={uniqid()}
                        onClick={() => updateFont(font)}
                        style={{ fontFamily: font }}
                    >
                        <span className={font.toLowerCase()}>{letters[index]}</span>
                    </div>
                )
            })}
        </div>
    )
}