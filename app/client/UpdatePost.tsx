"use client"

export default function UpdatePost() {
    async function Update() {
        const res = await fetch("/api/1", { method: "PUT", body: JSON.stringify({ title: "Post updated" })});
        
        const data = await res.json();
        console.log("data  updated");
    }

    return <button onClick={Update}>Update Post</button>
}
