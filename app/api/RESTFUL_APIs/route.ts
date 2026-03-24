import connection from "./connection";

export async function POST(request: Request) {
    try {
        const { name, password } = await request.json();

        await connection.query(
            'INSERT INTO students(name, password) VALUES(?, ?)', [name, password]
        )
    }
}