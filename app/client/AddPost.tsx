"use client"

export default function AddPost() {
    async function Add() {
         fetch("/api", {
            method: "POST",
            body: JSON.stringify({ title: "New Post" })
         });
    }

    return <button onClick={Add}>Add Post</button>
}