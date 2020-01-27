import React, {useState, useEffect} from 'react';
import axios from 'axios';

const url = "http://localhost:8900/artists"
function Hooks(){
    const [title] = useState('My Hooks page');
    const [description] = useState('My Hooks page');
    const [count,setCount] = useState(0);
    const [artist, setArtist] =  useState({artist: []});


    /*useEffect(() => {
        axios.get(url)
            .then((res) => {setArtist(res.data)})
    });*/

    useEffect(async () => {
        const result = await axios(url)
        setArtist(result.data)
    },[])
    

    return(
        <div>
            <h1>{title}</h1>
            <h2>Count: {count} </h2>
            <div onClick={() => {setCount(count+1)}}>Click me</div>
        </div>
    )
}

export default Hooks;