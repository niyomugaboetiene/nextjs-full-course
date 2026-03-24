"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const id = useParams();
    const [password, setPassword] = useState("");

    useEffect(() => {
        async function GetUserInfo() {
            const res = await fetch(`http://localhost:3000/api/RESTFUL_APIs/${id}`);
            
            const result = await res.json();

            setName(result.name);
            setPassword(result.password);
        }

        GetUserInfo();
    }, [id]);


    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button>Update</button>

            {message && (
                <p>{message}</p>
            )}
        </div>
    )
}