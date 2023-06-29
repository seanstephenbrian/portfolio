import { useState } from "react";

import BgPicker from "./components/BgPicker";
import Content from './components/Content';
import FontPicker from './components/FontPicker';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    const [bgColors] = useState({
        white: '#ffffff',
        yellow: '#efb918a3',
        red: '#dd60576c',
        green: '#719a5a9b'
    });
    const [currentBg, setCurrentBg] = useState(bgColors.white);
    const [fonts] = useState({
        jost: 'Jost',
        fira: 'Fira',
        fairwall: 'Fairwall',
        helico: 'Helico',
    });
    const [currentFont, setCurrentFont] = useState(fonts.jost);
    const [section, setSection] = useState('web');

    function updateSection(newSection) {
        setSection(newSection);
    }

    return (
        <div 
            className="wrapper"
            style={{
                backgroundColor: currentBg,
                fontFamily: currentFont
            }}
        >
            <FontPicker
                fontOptions={fonts}
                selectedFont={currentFont}
                updateFont={font => setCurrentFont(font)}
            />
            <BgPicker 
                colorOptions={bgColors}
                selectedColor={currentBg}
                updateColor={color => setCurrentBg(color)}
            />
            <Header />
            <main>
                <Menu relaySection={updateSection} />
                <Content selectedSection={section} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
