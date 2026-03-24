"use client";

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [passowrd, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function HandleAdd() {
        try {
           await fetch("http://localhost:3000/api/RESTFUL_APIs", { method: 'POST', body: JSON.stringify({name, passowrd})});
           setMessage("User Added successfully");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text"  onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password"  onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button onClick={HandleAdd}>Add new one</button>

            {message && (
                <p>{message}</p>
            )}
        </div>
    )
}