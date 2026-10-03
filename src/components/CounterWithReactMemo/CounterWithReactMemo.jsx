import { useState } from "react";

const Child = ( { counter }) => {
    return <p>Contador: {counter}</p>
}

function CounterWithReactMemo(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>Incrementar</button>
            <Child counter={counter} />
        </div>
    )

}

export default CounterWithReactMemo

