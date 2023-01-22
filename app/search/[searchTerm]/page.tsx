
import React from "react";

type PageProps = {
    params: {
        searchTerm: string
    }
}

//2 Search result object type:
type SearchResult = {
    organic_results: [
        {
            position:string,
            title:string;
            link: string;
            thumbnail:string;
            snippet:string;
        }
    ]
}
//2 Results are many. We have selected only the Organic Result section


const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpepi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    )
    const data: SearchResult = await res.json()
    return data
}
//1 This link is of a google-type search provider. Register there and get a key. Make a new file in the main directory named .env.local. Place 'API_KEY=xyz123'
    

export default async function SearchResults({params: {searchTerm}}: PageProps) {
    const searchResults = await search(searchTerm)  //4 When we search, we will be stuck here while loading. lets make a loading page
    
    //3 lets rendor the results on the search page
    return <div>
        <p className="text-grey-500 text-sm">You searched for {searchTerm}</p>

        <ol className="space-y-5 p-5">
            {searchResults.organic_results.map((result) => (
                <li key={result.position} className="list-decimal">
                    <p className="font-bold">{result.title}</p>
                    <p>{result.snippet} </p>
                </li>
            ))}

        </ol>
    </div>
}