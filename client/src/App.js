import { createContext, useContext, useEffect, useState } from "react";

import BgToggle from "./components/BgPicker";
import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    const [bgColors, setBgColors] = useState({
        green: '#719a5a9b',
        red: '#dd60576c',
        white: '#ffffff',
        yellow: '#efb918a3'
    });
    const [currentBg, setCurrentBg] = useState(bgColors.yellow)
    const [section, setSection] = useState('web');

    function updateSection(newSection) {
        setSection(newSection);
    }

    return (
        <div 
            className="wrapper"
            style={{
                backgroundColor: currentBg
            }}
        >
            <BgToggle colorOptions={bgColors} />
            <Header />
            <main>
                <Menu relaySection={updateSection} />
                <Content selectedSection={section} />
            </main>
        </div>
    );
}

export default App;
