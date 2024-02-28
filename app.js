import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0) // Will Start count at 0
    const [theme, setTheme] = useState('red') // Will change theme to red when counting down
    
    // Decrease count
    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    // Increase count
    function increaseCount() {
        setCount(increaseCount => increaseCount + 1)
        setTheme('blue') // Will change theme to blue when counting up
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>[count]</span>
            <span>[theme]</span>
            <button onClick={increaseCount}>+</button>
        </>
    )
}

export default App;
