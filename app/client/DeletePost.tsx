"use client"

export default function DeletePost() {
    const Delete  = async () => {
        const res = await fetch("/api/1", { method: "DELETE" });

        const data = await res.json();
        console.log(data)
    }

    return <button onClick={Delete}>Delete</button>
}