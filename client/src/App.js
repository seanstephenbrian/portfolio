import { useEffect, useState } from "react";

import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    return (
        <div className="wrapper">
            <Header />
            <main>
                <Menu />
                <Content />
            </main>
            
        </div>
    );
}

export default App;
