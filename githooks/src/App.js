import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function App(){
    const [repositories, setRepositories] = useState([]);
    
    useEffect( () =>  {
        async function fetchData (){
            const result = await axios(
                'https://api.github.com/users/danilod30/repos',
            );
       
        // const response = await fetch('https://api.github.com/users/danilod30/repos');
        // const data = await response.json();

        setRepositories(result.data);
            };

            fetchData();
    }, []);
    // function handleAddRepository(){
    //     setRepositories([
    //         ...repositories,
    //         { id: Math.random(), name: "Novo Repo"}
    //     ]);
    // }
    return (
       
        <ul>
            {repositories.map(repo => (
                <li key={repo.id}> {repo.name} </li>
            ))}
        </ul>
        // {/* <button onClick={handleAddRepository}>Adicionar Repositório</button> */}
       
    );
}
        
