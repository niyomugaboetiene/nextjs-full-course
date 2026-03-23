// * CSR: Happens in browser (like normal React)

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


// * SSR: Happens in browser (like normal React)
// export default async function CSR() {

   
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: 'no-store'});
//        const data = await res.json();
  

//     return <div>{data?.title}</div>
// }

//* SSG: age is built once at build time
// export default async function SSR() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: 'force-cache'});
//     const data = await res.json();

//     return <div>{data?.title}</div>
// }


//* ISR(Incremental Static regeneration)

export default async function ISR() {
    const res = await  fetch("https://jsonplaceholder.typicode.com/posts/1", { next: {revalidate: 5}});
    const data = await res.json();

    return <div>{data?.title}</div>
}
