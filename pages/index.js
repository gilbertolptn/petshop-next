import { useState } from 'react';

function Home(){
    return (
        <div>
            <h2>Home Page</h2>
            <Incrementer />
        </div>)
}

function Incrementer(){
    const [counter, changeValue] = useState(1);

    function plusCount(){
        changeValue(counter+1)
    }

return <div><h4>{counter}</h4>
        <button onClick={plusCount}>Increment++</button>
    </div>
}

export default Home