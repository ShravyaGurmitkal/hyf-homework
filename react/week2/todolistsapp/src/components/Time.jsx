import { useEffect } from "react";
import { useState } from "react";

export default function Time() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds(seconds + 1), 1000);

        return () => clearInterval(interval);
    }, [seconds]);
    
    return (
        <>
            <h2 style={{textAlign: "center", color: "teal"}}>You have used {seconds} Seconds on this website</h2>
        </>
    );
}