import { useState } from "react";

import BgToggle from "./components/BgPicker";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    const [bgColors] = useState({
        yellow: '#efb918a3',
        white: '#ffffff',
        red: '#dd60576c',
        green: '#719a5a9b'
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
            <BgToggle 
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
