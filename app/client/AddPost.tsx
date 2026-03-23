"use client"

export default function AddPost() {
    async function Add() {
         const res: any = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({ title: "New Post" })
         });
          
         const data = await res.json();
         console.log("Data", data);

    }


    return <button onClick={Add}>Add Post</button>
}