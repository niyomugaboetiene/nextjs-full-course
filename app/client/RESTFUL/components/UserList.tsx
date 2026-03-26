"use client"

import Link from "next/link";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export default  function UserList () {
    const [users, setUser] = useState([]); 

    useEffect(() => {
        async function FetchUser() {
            try {
             const res = await fetch("/api/RESTFUL_APIs", { method: 'GET' });
             const data = await res.json();

             if (!data) {
                notFound(); // go to notfound page
             }

             setUser(data);
            } catch (err) {
                console.error(err);
            }
        }

        FetchUser();
    }, []);

  async function HandleDelete(id: number) {
    try {
      const confrim = window.confirm("Are you sure you want to delete");
      if (!confrim) return;

       await fetch (`/api/RESTFUL_APIs/${id}`, { method: "DELETE" });
       alert("User successfully removed");
       
    //    setUser(prev => prev.filter(user => user.id !== id));
    } catch (err) {
        console.error("Something went wrong", err);
    }
}
    return (
        <Suspense fallback={<p>Loading users......</p>}>
          <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th colSpan={2}>Operation</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user: any) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td><Link href={`/client/RESTFUL/components/${user.id}/update`}>Update</Link></td>          
                            <td><button onClick={() => HandleDelete(user.id)}>Delete</button> </td>
                          </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Suspense>
       
    )
}