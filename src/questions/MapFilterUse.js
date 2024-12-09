import { useEffect, useState } from "react";

export default function MapFilterUse(){

    const [data, setData] = useState([]);

    // filter all the users whose name startswith A 
    const filteredData = data.filter((dat) => (dat.name).startsWith("C", 0));
    
    

    // useEffect must not return anything besides a function, which is used for clean-up.
    // if written like : useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:
    useEffect( () => { 
        const fetchedFunction = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json()
        
        setData(result);
    }
        fetchedFunction();
},[])

    return(
        <article>
            <div>{data.map((dat) => {
                return(
                    <div key={dat.id}>
                        <h3>{dat.name}</h3>
                        <h4>{dat.username}</h4>
                    </div>
                );
            })}</div>
            <h4>Name of users startsWith "C" </h4>
            <div>
                {filteredData.map(fdata => 
                    <h5 key ={fdata.id}>{fdata.name}</h5>)}
            </div>
        </article>
    );
}