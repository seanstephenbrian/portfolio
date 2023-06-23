import { useEffect, useState } from "react";

function App() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/test')
            .then(res => res.text())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            {data ? data : 'no data'}
        </div>
    );
}

export default App;
