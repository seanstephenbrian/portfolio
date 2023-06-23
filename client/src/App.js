import { useEffect, useState } from "react";

import Header from './components/Header';
import Menu from './components/Menu';

import './styles/main.scss';

function App() {

    // TESTING EXPRESS API:
    // const [data, setData] = useState();
    // useEffect(() => {
    //     fetch('http://localhost:8080/test')
    //         .then(res => res.text())
    //         .then(data => setData(data))
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div className="main">
            <Header />
            <Menu />
        </div>
    );
}

export default App;
