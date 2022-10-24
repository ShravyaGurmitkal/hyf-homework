import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ReposContext = createContext();

export default function ReposProvider({ children }) {
    const [reposData, setReposData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/HackYourFuture-CPH/repos')
        .then(res => res.json())
        .then(data => {
            setReposData(data)
        });
    }, [])

    return (
        <ReposContext.Provider 
            value={{
                reposData
            }}
        >
            {children}
        </ReposContext.Provider>
    )
}