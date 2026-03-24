export default async function UserList () {
       const res = await fetch("http://localhost:3000/api/RESTFUL_APIs", { method: 'GET', cache: 'no-store' });
        const data = await res.json();

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((user: any) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                          </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}