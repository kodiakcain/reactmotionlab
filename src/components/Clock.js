import React, {useState, useEffect} from 'react';

function Clock({
    color = '#000', 
    fontSize = '2rem'
}) {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style = {{color, fontSize}}>
            <p>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock;