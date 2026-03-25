"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const { id } = useParams();
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!id) return;
        
        async function GetUserInfo() {
            const res = await fetch(`/api/RESTFUL_APIs/${id}`);
            
            const result = await res.json();

            setName(result.name);
            setPassword(result.password);
        }

        GetUserInfo();
    }, [id]);

    async function HandleUpdate() {
        try {
           const res = await fetch(`/api/RESTFUL_APIs/${id}`, { method: "PUT", body: JSON.stringify({name, password })});
       
           const data = await res.json();
           setMessage("User Updated successfully");
        
        } catch (err) {
            console.error(err);
        } 
    }


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

            <button onClick={HandleUpdate}>Update</button>

            {message && (
                <p>{message}</p>
            )}
        </div>
    )
}