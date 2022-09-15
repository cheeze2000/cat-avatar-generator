import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <button
                className="px-3 py-2 bg-red-300 rounded"
                onClick={() => setCount(count + 1)}
            >
                Click me!
            </button>
            <p>Counter: {count}</p>
        </div>
    );
}

export default Counter;
