import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function UserDetails() {
    const {
        isLoading,
        error,
        usersResult
    }  = useContext(UserContext);

    return (
        <>
            <h2>users</h2>
            {isLoading && <p>loading....</p>}
            {error && <p>{error}</p>}
            { usersResult.length === 0 && !error ? 
                <p>No Results</p> : 
                <ul>
                    {usersResult.map((item => {
                        return(
                            <li key={item.id} style={{listStyle:"none"}}>
                                {item.login}
                            </li>
                        )
                    }))}
                </ul>
            }
        </>
    )
}