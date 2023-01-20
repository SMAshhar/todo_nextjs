'use client'

import { useRouter } from "next/navigation"
import React, {FormEvent, useState } from "react"

export default function Search() {
    const [search, setSearch] = useState("")  // making state
    const router = useRouter()                // for redirecting for once the user put the search term

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch("")
        router.push(`/search/${search}`)
        // handling search here
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                value={search}
                placeholder="Enter Search Term"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button 
                type="submit" 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                Search
            </button>
        </form>
    )
}

// What ever is passed here (lets say xyz), use will be taken to localhose:3000/search/xyz