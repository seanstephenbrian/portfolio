import { useEffect, useState } from "react";

import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    const [section, setSection] = useState('web');

    function updateSection(newSection) {
        setSection(newSection);
    }

    return (
        <div className="wrapper">
            <Header />
            <main>
                <Menu relaySection={updateSection} />
                <Content section={section} />
            </main>
            
        </div>
    );
}

export default App;
