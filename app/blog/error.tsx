"use client"

export default function Error({ error, reset }: any) {
   return (
    <div>
        <h3>Error happened</h3>
        <button onClick={reset}>Try again</button>
    </div>
   )
}