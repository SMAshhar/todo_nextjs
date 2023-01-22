'use client'

import { useEffect } from "react"

export default function Error({error, reset }:{
    error:Error;
    reset:()=>void;
} ) {
    useEffect(() =>{
        // Log error to an error reporting service
        console.error(error)
    }, [error]);

    return (
        <div>
            <p>
                Something went wrong!
            </p>
            <button onClick={() => reset()}>Reset Error Boundry</button>
        </div>
    )
}