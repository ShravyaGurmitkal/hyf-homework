import { ReposContext } from "./ReposContext";
import { useContext } from "react";

export default function HyfCPHRepos() {
    const {reposData}  = useContext(ReposContext);
   
    return (
        <div>
            <h1>HYF_CPH Repos</h1>
            <ul style={{listStyle:"none"}}>
                {reposData.map(repo => {
                    return ( 
                        <li key={repo.id}>{repo.name}</li> 
                    )
                })}
            </ul>
        </div>
    )
}