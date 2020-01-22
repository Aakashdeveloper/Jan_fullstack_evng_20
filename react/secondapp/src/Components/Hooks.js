import React, {useState} from 'react';

function Hooks(){
    const [title] = useState('My Hooks page');
    const [description] = useState('My Hooks page');
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>{title}</h1>
            <h2>Count: {count} </h2>
            <div onClick={() => {setCount(count+1)}}>Click me</div>
        </div>
    )
}

export default Hooks;