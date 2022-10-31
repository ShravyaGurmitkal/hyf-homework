import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState("");
    const [usersResult, setUsersResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const searchUser = (e) => {
        setUser(e.target.value);
        if(user !== "") {
            setIsLoading(true)
            fetch(`https://api.github.com/search/users?q=${user}`)
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    setError(data.message);
                    setUsersResult([]);
                } else {
                    setUsersResult(data.items);
                    setError("");
                }
                setIsLoading(false)
            }).catch((error) => setError(error))
        }
    }

    return (
        <>
            <h1>Github User Searcher</h1>
            <input type="text"
                value={user} 
                onChange={searchUser}
                placeholder="Search for user"/>

            <UserContext.Provider
                value={{
                    isLoading,
                    error,
                    usersResult
                }}
            >
                {children}
            </UserContext.Provider>
        </>   
    )
}