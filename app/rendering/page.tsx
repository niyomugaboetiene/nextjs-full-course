// * CSR

// "use client"
// import { useState, useEffect } from "react"

// type Post = {
//    userId: number,
//    id: number,
//    title: string,
//    body: string
// }
// export default function CSR() {
//     const [data, setData] = useState<Post | null>(null);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(res => res.json()).then(setData)
//     }, [])

//     return <div>{data?.title}</div>
// }


// * SSR

import { useState, useEffect } from "react"

type Post = {
   userId: number,
   id: number,
   title: string,
   body: string
}
export default function CSR() {
    const [data, setData] = useState<Post | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: 'no-store'})
        .then(res => res.json()).then(setData)
    }, [])

    return <div>{data?.title}</div>
}
